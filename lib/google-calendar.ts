/**
 * Google Calendar API — Service Account Integration
 *
 * Provides FreeBusy queries and event creation for the booking scheduler.
 * Uses a GCP service account authenticated via GOOGLE_SERVICE_ACCOUNT_KEY env var.
 *
 * Business hours (America/Mexico_City):
 *   Mon-Fri: 10:00 – 18:00
 *   Sat:     10:00 – 14:00
 *   Sun:     Closed
 */

import { google, calendar_v3 } from 'googleapis';

// ============================================================
// TYPES
// ============================================================

export interface TimeSlot {
  start: string;       // HH:mm (display, in target timezone)
  end: string;         // HH:mm (display, in target timezone)
  startISO: string;    // Full ISO 8601 (UTC)
  endISO: string;      // Full ISO 8601 (UTC)
}

export interface AvailabilityResult {
  date: string;
  timezone: string;
  dayOfWeek: number;
  closed: boolean;
  slots: TimeSlot[];
}

export interface BookingParams {
  name: string;
  email: string;
  phone?: string;
  notes?: string;
  date: string;      // YYYY-MM-DD
  time: string;       // HH:mm
  timezone: string;
}

export interface BookingResult {
  success: boolean;
  eventId?: string;
  meetLink?: string;
  error?: string;
}

// ============================================================
// CONFIGURATION
// ============================================================

const SLOT_DURATION_MINUTES = 30;
const BUFFER_MINUTES = 10;
const LEAD_TIME_HOURS = 2;

// Business hours by day of week (0 = Sunday)
const BUSINESS_HOURS: Record<number, { start: number; end: number } | null> = {
  0: null,                     // Sunday — closed
  1: { start: 10, end: 18 },  // Monday
  2: { start: 10, end: 18 },
  3: { start: 10, end: 18 },
  4: { start: 10, end: 18 },
  5: { start: 10, end: 18 },  // Friday
  6: { start: 10, end: 14 },  // Saturday
};

// ============================================================
// SINGLETON CLIENT
// ============================================================

let calendarClient: calendar_v3.Calendar | null = null;

function getCalendarClient(): calendar_v3.Calendar | null {
  if (calendarClient) return calendarClient;

  const keyJson = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
  if (!keyJson) {
    console.warn('[Google Calendar] GOOGLE_SERVICE_ACCOUNT_KEY not configured');
    return null;
  }

  try {
    const key = JSON.parse(keyJson);
    const auth = new google.auth.GoogleAuth({
      credentials: key,
      scopes: ['https://www.googleapis.com/auth/calendar'],
    });

    calendarClient = google.calendar({ version: 'v3', auth });
    return calendarClient;
  } catch (error) {
    console.error('[Google Calendar] Auth error:', error);
    return null;
  }
}

function getCalendarId(): string {
  return process.env.GOOGLE_CALENDAR_ID || 'primary';
}

// ============================================================
// TIMEZONE HELPERS (server-timezone-independent)
// ============================================================

function formatTime(hours: number, minutes: number): string {
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}

/**
 * Convert a local time in a specific timezone to a UTC Date.
 * Independent of the server's timezone.
 *
 * E.g., localTimeToUTC('2026-03-02', '10:00', 'America/Mexico_City')
 * → Date representing 16:00 UTC (because Mexico City is UTC-6)
 */
function localTimeToUTC(dateStr: string, timeStr: string, timezone: string): Date {
  // Treat the input as if it were UTC to get a reference timestamp
  const asUTC = new Date(`${dateStr}T${timeStr}:00.000Z`);

  // Find the timezone offset by comparing how this UTC instant renders
  // in the target timezone vs UTC
  const tzRendered = new Date(asUTC.toLocaleString('en-US', { timeZone: timezone }));
  const utcRendered = new Date(asUTC.toLocaleString('en-US', { timeZone: 'UTC' }));
  const offsetMs = tzRendered.getTime() - utcRendered.getTime();

  // Shift: if timezone is UTC-6, offset is -6h, so UTC = local + 6h
  return new Date(asUTC.getTime() - offsetMs);
}

/**
 * Extract hours and minutes from a UTC Date in a specific timezone.
 * Uses Intl.DateTimeFormat — independent of server timezone.
 */
function getLocalTime(utcDate: Date, timezone: string): { hours: number; minutes: number } {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: timezone,
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  }).formatToParts(utcDate);

  const hour = parts.find((p) => p.type === 'hour');
  const minute = parts.find((p) => p.type === 'minute');

  return {
    hours: parseInt(hour?.value || '0'),
    minutes: parseInt(minute?.value || '0'),
  };
}

/**
 * Get the day of week for a date string in a specific timezone.
 */
function getDayOfWeek(dateStr: string, timezone: string): number {
  const midday = new Date(`${dateStr}T12:00:00.000Z`);
  const weekday = new Intl.DateTimeFormat('en-US', {
    timeZone: timezone,
    weekday: 'short',
  }).format(midday);

  const map: Record<string, number> = {
    Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6,
  };
  return map[weekday] ?? 0;
}

function isBusyAt(
  busyPeriods: { start?: string | null; end?: string | null }[],
  slotStart: Date,
  slotEnd: Date
): boolean {
  return busyPeriods.some((busy) => {
    if (!busy.start || !busy.end) return false;
    const bStart = new Date(busy.start);
    const bEnd = new Date(busy.end);
    return slotStart < bEnd && slotEnd > bStart;
  });
}

function addMinutesToTime(time: string, addMinutes: number): string {
  const parts = time.split(':');
  const hours = parseInt(parts[0] || '0');
  const minutes = parseInt(parts[1] || '0');
  const totalMinutes = hours * 60 + minutes + addMinutes;
  return formatTime(Math.floor(totalMinutes / 60), totalMinutes % 60);
}

// ============================================================
// PUBLIC API
// ============================================================

/**
 * Get available 30-minute slots for a given date.
 * Queries Google Calendar FreeBusy API to exclude booked times.
 */
export async function getAvailableSlots(
  date: string,
  timezone: string = 'America/Mexico_City'
): Promise<AvailabilityResult> {
  const dayOfWeek = getDayOfWeek(date, timezone);

  const hours = BUSINESS_HOURS[dayOfWeek];
  if (!hours) {
    return { date, timezone, dayOfWeek, closed: true, slots: [] };
  }

  // Convert business hours boundaries to UTC
  const timeMin = localTimeToUTC(date, formatTime(hours.start, 0), timezone);
  const timeMax = localTimeToUTC(date, formatTime(hours.end, 0), timezone);

  // Query FreeBusy
  let busyPeriods: { start?: string | null; end?: string | null }[] = [];
  const calendar = getCalendarClient();
  const calendarId = getCalendarId();

  if (calendar) {
    try {
      const freeBusy = await calendar.freebusy.query({
        requestBody: {
          timeMin: timeMin.toISOString(),
          timeMax: timeMax.toISOString(),
          timeZone: timezone,
          items: [{ id: calendarId }],
        },
      });

      busyPeriods = freeBusy.data.calendars?.[calendarId]?.busy || [];
    } catch (error) {
      console.error('[Google Calendar] FreeBusy error:', error);
    }
  }

  // Generate slots
  const slots: TimeSlot[] = [];
  const now = new Date();
  const leadTimeMs = LEAD_TIME_HOURS * 60 * 60 * 1000;
  const slotMs = SLOT_DURATION_MINUTES * 60 * 1000;
  const bufferMs = BUFFER_MINUTES * 60 * 1000;
  const stepMs = slotMs + bufferMs; // 40 min between slot starts

  let cursor = new Date(timeMin);

  while (cursor.getTime() + slotMs <= timeMax.getTime()) {
    const slotStart = new Date(cursor);
    const slotEnd = new Date(cursor.getTime() + slotMs);

    // Skip if too soon (lead time)
    if (slotStart.getTime() - now.getTime() >= leadTimeMs) {
      // Skip if busy
      if (!isBusyAt(busyPeriods, slotStart, slotEnd)) {
        const displayStart = getLocalTime(slotStart, timezone);
        const displayEnd = getLocalTime(slotEnd, timezone);

        slots.push({
          start: formatTime(displayStart.hours, displayStart.minutes),
          end: formatTime(displayEnd.hours, displayEnd.minutes),
          startISO: slotStart.toISOString(),
          endISO: slotEnd.toISOString(),
        });
      }
    }

    cursor = new Date(cursor.getTime() + stepMs);
  }

  return { date, timezone, dayOfWeek, closed: false, slots };
}

/**
 * Create a calendar event with Google Meet link.
 */
export async function createBooking(params: BookingParams): Promise<BookingResult> {
  const calendar = getCalendarClient();
  const calendarId = getCalendarId();

  if (!calendar) {
    return { success: false, error: 'Google Calendar not configured' };
  }

  try {
    const startDateTime = `${params.date}T${params.time}:00`;
    const endTime = addMinutesToTime(params.time, SLOT_DURATION_MINUTES);
    const endDateTime = `${params.date}T${endTime}:00`;

    const description = [
      `Sesión de Arquitectura de Software - Scram Consulting`,
      ``,
      `Cliente: ${params.name}`,
      `Email: ${params.email}`,
      params.phone ? `Teléfono: ${params.phone}` : null,
      params.notes ? `\nNotas: ${params.notes}` : null,
      ``,
      `Contacto: Ing. Armando Cortés`,
      `WhatsApp: +52 221 106 5056`,
      `Email: contacto@scram2k.com`,
    ]
      .filter(Boolean)
      .join('\n');

    const event = await calendar.events.insert({
      calendarId,
      conferenceDataVersion: 1,
      requestBody: {
        summary: `Arquitectura SW - ${params.name}`,
        description,
        start: {
          dateTime: startDateTime,
          timeZone: params.timezone,
        },
        end: {
          dateTime: endDateTime,
          timeZone: params.timezone,
        },
        conferenceData: {
          createRequest: {
            requestId: crypto.randomUUID(),
            conferenceSolutionKey: { type: 'hangoutsMeet' },
          },
        },
        reminders: {
          useDefault: false,
          overrides: [
            { method: 'email', minutes: 60 },
            { method: 'popup', minutes: 15 },
          ],
        },
      },
    });

    return {
      success: true,
      eventId: event.data.id || undefined,
      meetLink: event.data.hangoutLink || event.data.conferenceData?.entryPoints?.[0]?.uri || undefined,
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('[Google Calendar] Event creation error:', message);
    return { success: false, error: message };
  }
}

/**
 * Check if a specific slot is still available (double-check before booking).
 */
export async function isSlotAvailable(
  date: string,
  time: string,
  timezone: string = 'America/Mexico_City'
): Promise<boolean> {
  const calendar = getCalendarClient();
  const calendarId = getCalendarId();

  if (!calendar) return true;

  try {
    const timeMin = localTimeToUTC(date, time, timezone);
    const endTime = addMinutesToTime(time, SLOT_DURATION_MINUTES);
    const timeMax = localTimeToUTC(date, endTime, timezone);

    const freeBusy = await calendar.freebusy.query({
      requestBody: {
        timeMin: timeMin.toISOString(),
        timeMax: timeMax.toISOString(),
        timeZone: timezone,
        items: [{ id: calendarId }],
      },
    });

    const busy = freeBusy.data.calendars?.[calendarId]?.busy || [];
    return busy.length === 0;
  } catch (error) {
    console.error('[Google Calendar] Availability check error:', error);
    return true;
  }
}
