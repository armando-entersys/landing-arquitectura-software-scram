import { NextRequest, NextResponse } from 'next/server';
import { readFile, writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { createBooking, isSlotAvailable } from '@/lib/google-calendar';

const DATA_DIR = join(process.cwd(), '.analytics');
const BOOKINGS_FILE = join(DATA_DIR, 'bookings.json');

interface Booking {
  id: string;
  name: string;
  email: string;
  phone: string;
  notes: string;
  date: string;
  time: string;
  timezone: string;
  eventId?: string;
  meetLink?: string;
  calendarError?: string;
  attribution?: {
    firstTouch: Record<string, string> | null;
    lastTouch: Record<string, string> | null;
  };
  mauticContactId?: number;
  mauticError?: string;
  timestamp: string;
  ip: string;
  userAgent: string;
}

async function ensureDataDir() {
  try { await mkdir(DATA_DIR, { recursive: true }); } catch { /* exists */ }
}

async function getBookings(): Promise<Booking[]> {
  try {
    const data = await readFile(BOOKINGS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function saveBookings(bookings: Booking[]) {
  await ensureDataDir();
  await writeFile(BOOKINGS_FILE, JSON.stringify(bookings, null, 2));
}

// ============================================================
// MAUTIC OAUTH2 — Reuse same pattern as /api/leads
// ============================================================

let cachedToken: { accessToken: string; expiresAt: number } | null = null;

async function getMauticAccessToken(): Promise<string | null> {
  const mauticBaseUrl = process.env.NEXT_PUBLIC_MAUTIC_BASE_URL;
  const clientId = process.env.MAUTIC_CLIENT_ID;
  const clientSecret = process.env.MAUTIC_CLIENT_SECRET;

  if (!mauticBaseUrl || !clientId || !clientSecret) return null;

  if (cachedToken && Date.now() < cachedToken.expiresAt - 60_000) {
    return cachedToken.accessToken;
  }

  try {
    const response = await fetch(`${mauticBaseUrl}/oauth/v2/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: clientId,
        client_secret: clientSecret,
      }),
    });

    if (!response.ok) return null;

    const data = await response.json();
    cachedToken = {
      accessToken: data.access_token,
      expiresAt: Date.now() + (data.expires_in || 3600) * 1000,
    };
    return cachedToken.accessToken;
  } catch {
    return null;
  }
}

async function sendBookingToMautic(booking: Booking): Promise<{ contactId?: number; error?: string }> {
  const mauticBaseUrl = process.env.NEXT_PUBLIC_MAUTIC_BASE_URL;
  if (!mauticBaseUrl) return { error: 'Mautic URL not configured' };

  const accessToken = await getMauticAccessToken();
  if (!accessToken) return { error: 'Mautic OAuth2 failed' };

  try {
    const nameParts = booking.name.split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    const lastTouch = booking.attribution?.lastTouch;
    const tags = [
      'booking-scheduler',
      'landing-agentic-architect',
      lastTouch?.utm_source ? `src:${lastTouch.utm_source}` : null,
      lastTouch?.utm_campaign ? `camp:${lastTouch.utm_campaign}` : null,
      lastTouch?.gclid ? 'google-ads' : null,
    ].filter(Boolean) as string[];

    const payload = {
      firstname: firstName,
      lastname: lastName,
      email: booking.email,
      phone: booking.phone || undefined,
      tags,
      lead_source: lastTouch?.gclid ? 'Google Ads' : lastTouch?.utm_source || 'Direct',
      landing_page: 'https://arquitectura-software.scram2k.com',
      current_issue: `Booking: ${booking.date} ${booking.time}`,
      preferred_locale: 'es',
    };

    const response = await fetch(`${mauticBaseUrl}/api/contacts/new`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      if (response.status === 401) {
        cachedToken = null;
        const retryToken = await getMauticAccessToken();
        if (retryToken) {
          const retry = await fetch(`${mauticBaseUrl}/api/contacts/new`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${retryToken}`,
            },
            body: JSON.stringify(payload),
          });
          if (retry.ok) {
            const retryData = await retry.json();
            return { contactId: retryData.contact?.id };
          }
        }
      }
      const errorText = await response.text();
      return { error: `Mautic ${response.status}: ${errorText.slice(0, 200)}` };
    }

    const data = await response.json();
    return { contactId: data.contact?.id };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return { error: message };
  }
}

/**
 * POST /api/bookings
 *
 * Creates a booking: validates slot → Google Calendar → local storage → Mautic CRM
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.date || !body.time) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, date, time' },
        { status: 400 }
      );
    }

    const timezone = body.timezone || 'America/Mexico_City';

    // Double-check slot availability
    const available = await isSlotAvailable(body.date, body.time, timezone);
    if (!available) {
      return NextResponse.json(
        { error: 'This time slot is no longer available. Please select another time.' },
        { status: 409 }
      );
    }

    // Create booking record
    const booking: Booking = {
      id: crypto.randomUUID(),
      name: body.name,
      email: body.email,
      phone: body.phone || '',
      notes: body.notes || '',
      date: body.date,
      time: body.time,
      timezone,
      attribution: body.attribution || null,
      timestamp: new Date().toISOString(),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || '',
      userAgent: request.headers.get('user-agent') || '',
    };

    // Create Google Calendar event
    const calendarResult = await createBooking({
      name: body.name,
      email: body.email,
      phone: body.phone,
      notes: body.notes,
      date: body.date,
      time: body.time,
      timezone,
    });

    if (calendarResult.success) {
      booking.eventId = calendarResult.eventId;
      booking.meetLink = calendarResult.meetLink;
    } else {
      booking.calendarError = calendarResult.error;
    }

    // Save locally (always, even if Calendar API fails)
    const bookings = await getBookings();
    bookings.push(booking);
    await saveBookings(bookings);

    // Send to Mautic CRM
    const mauticResult = await sendBookingToMautic(booking);
    if (mauticResult.contactId) {
      booking.mauticContactId = mauticResult.contactId;
      // Update with Mautic ID
      const updated = await getBookings();
      const idx = updated.findIndex((b) => b.id === booking.id);
      if (idx >= 0) {
        updated[idx] = booking;
        await saveBookings(updated);
      }
    } else if (mauticResult.error) {
      booking.mauticError = mauticResult.error;
    }

    return NextResponse.json({
      success: true,
      bookingId: booking.id,
      meetLink: booking.meetLink || null,
      mauticContactId: mauticResult.contactId || null,
    });
  } catch (error) {
    console.error('[Bookings API] Error:', error);
    return NextResponse.json(
      { error: 'Error processing booking' },
      { status: 500 }
    );
  }
}

/**
 * GET /api/bookings
 * List bookings (API-key protected)
 */
export async function GET(request: NextRequest) {
  const apiKey = request.headers.get('x-api-key');
  if (apiKey !== process.env.ANALYTICS_API_KEY) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const bookings = await getBookings();
  const { searchParams } = new URL(request.url);
  const days = parseInt(searchParams.get('days') || '30');
  const since = new Date(Date.now() - days * 24 * 60 * 60 * 1000);

  const filtered = bookings.filter((b) => new Date(b.timestamp) >= since);

  return NextResponse.json({
    total: filtered.length,
    period: `${days} days`,
    bookings: filtered,
  });
}
