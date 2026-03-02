'use client';

import { useState, useEffect, useCallback, FormEvent, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useContent } from '@/lib/i18n/ContentContext';
import { tracker } from '@/lib/tracking/universal-tracker';
import { getAttribution } from '@/lib/tracking/mkt-attribution';

// ============================================================
// TYPES
// ============================================================

type Step = 'calendar' | 'time' | 'form' | 'confirmation';

interface TimeSlot {
  start: string;
  end: string;
  startISO: string;
  endISO: string;
}

interface AvailabilityResponse {
  date: string;
  timezone: string;
  dayOfWeek: number;
  closed: boolean;
  slots: TimeSlot[];
}

interface BookingResponse {
  success: boolean;
  bookingId: string;
  meetLink: string | null;
  mauticContactId: number | null;
}

interface BookingSchedulerProps {
  onClose: () => void;
}

// ============================================================
// HELPERS
// ============================================================

function getDaysList(count: number): Date[] {
  const days: Date[] = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  for (let i = 0; i < count; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    days.push(d);
  }
  return days;
}

function formatDateISO(date: Date): string {
  const y = date.getFullYear();
  const m = (date.getMonth() + 1).toString().padStart(2, '0');
  const d = date.getDate().toString().padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function isToday(date: Date): boolean {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}

function isTomorrow(date: Date): boolean {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return (
    date.getDate() === tomorrow.getDate() &&
    date.getMonth() === tomorrow.getMonth() &&
    date.getFullYear() === tomorrow.getFullYear()
  );
}

// ============================================================
// COMPONENT
// ============================================================

export function BookingScheduler({ onClose }: BookingSchedulerProps) {
  const { content } = useContent();
  const t = content.booking;
  const scrollRef = useRef<HTMLDivElement>(null);

  // State
  const [step, setStep] = useState<Step>('calendar');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [slots, setSlots] = useState<TimeSlot[]>([]);
  const [loading, setLoading] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [meetLink, setMeetLink] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  const days = getDaysList(21);

  // Mount portal
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Escape key handler
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [handleEscape]);

  // Track modal open
  useEffect(() => {
    tracker.trackCTA('booking_scheduler_opened', 'team', 'booking-modal');
  }, []);

  // Fetch availability when date selected
  async function handleDateSelect(date: Date) {
    setSelectedDate(date);
    setSelectedSlot(null);
    setError('');

    const dayOfWeek = date.getDay();
    if (dayOfWeek === 0) {
      setIsClosed(true);
      setSlots([]);
      setStep('time');
      return;
    }

    setIsClosed(false);
    setLoading(true);
    setStep('time');

    try {
      const dateStr = formatDateISO(date);
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || 'America/Mexico_City';
      const res = await fetch(`/api/availability?date=${dateStr}&tz=${encodeURIComponent(tz)}`);
      const data: AvailabilityResponse = await res.json();

      if (data.closed) {
        setIsClosed(true);
        setSlots([]);
      } else {
        setSlots(data.slots || []);
      }
    } catch {
      setSlots([]);
    } finally {
      setLoading(false);
    }
  }

  function handleSlotSelect(slot: TimeSlot) {
    setSelectedSlot(slot);
    setError('');
    setStep('form');
    tracker.track({
      event: 'booking_slot_selected',
      category: 'engagement',
      action: 'slot_selected',
      label: slot.start,
      metadata: {
        date: selectedDate ? formatDateISO(selectedDate) : '',
        time: slot.start,
      },
    });
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (submitting || !selectedDate || !selectedSlot) return;

    setSubmitting(true);
    setError('');

    const attribution = getAttribution();
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || 'America/Mexico_City';

    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone: phone || undefined,
          notes: notes || undefined,
          date: formatDateISO(selectedDate),
          time: selectedSlot.start,
          timezone: tz,
          attribution,
        }),
      });

      if (res.status === 409) {
        setError(t.errorSlotTaken);
        setSubmitting(false);
        return;
      }

      if (!res.ok) {
        setError(t.errorGeneric);
        setSubmitting(false);
        return;
      }

      const data: BookingResponse = await res.json();
      setMeetLink(data.meetLink);
      setStep('confirmation');

      tracker.trackFormSubmit('booking_scheduler', {
        name,
        email,
        phone,
        source: attribution.lastTouch?.utm_source || 'direct',
        medium: attribution.lastTouch?.utm_medium || 'none',
        campaign: attribution.lastTouch?.utm_campaign || '',
      });
    } catch {
      setError(t.errorGeneric);
    } finally {
      setSubmitting(false);
    }
  }

  function getDateLabel(date: Date): string {
    if (isToday(date)) return t.today;
    if (isTomorrow(date)) return t.tomorrow;
    return '';
  }

  // ============================================================
  // STEP RENDERERS
  // ============================================================

  function renderStepIndicator() {
    const steps: { key: Step; label: string }[] = [
      { key: 'calendar', label: t.stepCalendar },
      { key: 'time', label: t.stepTime },
      { key: 'form', label: t.stepForm },
      { key: 'confirmation', label: t.stepConfirmation },
    ];
    const currentIdx = steps.findIndex((s) => s.key === step);

    return (
      <div className="flex items-center justify-center gap-1 mb-6">
        {steps.map((s, i) => (
          <div key={s.key} className="flex items-center">
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                i <= currentIdx
                  ? 'bg-scram-primary text-white'
                  : 'bg-scram-border text-scram-paragraph'
              }`}
            >
              {i < currentIdx ? (
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                i + 1
              )}
            </div>
            {i < steps.length - 1 && (
              <div
                className={`w-8 h-0.5 mx-1 transition-colors ${
                  i < currentIdx ? 'bg-scram-primary' : 'bg-scram-border'
                }`}
              />
            )}
          </div>
        ))}
      </div>
    );
  }

  function renderCalendarStep() {
    return (
      <div>
        <h3 className="font-heading text-lg font-bold text-scram-dark mb-4">{t.selectDate}</h3>
        <div
          ref={scrollRef}
          className="flex gap-2 overflow-x-auto pb-3 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {days.map((date) => {
            const isSunday = date.getDay() === 0;
            const isSelected = selectedDate && formatDateISO(date) === formatDateISO(selectedDate);
            const label = getDateLabel(date);

            return (
              <button
                key={formatDateISO(date)}
                onClick={() => !isSunday && handleDateSelect(date)}
                disabled={isSunday}
                className={`flex-shrink-0 snap-start w-[72px] p-3 rounded-xl border text-center transition-all ${
                  isSunday
                    ? 'bg-gray-50 border-gray-200 text-gray-300 cursor-not-allowed'
                    : isSelected
                    ? 'bg-scram-primary border-scram-primary text-white shadow-button'
                    : 'bg-white border-scram-border text-scram-dark hover:border-scram-primary hover:shadow-sm'
                }`}
              >
                <div className={`text-[10px] font-body uppercase tracking-wide mb-0.5 ${
                  isSelected ? 'text-white/80' : isSunday ? 'text-gray-300' : 'text-scram-paragraph'
                }`}>
                  {t.daysShort[date.getDay()]}
                </div>
                <div className="font-heading text-xl font-bold">{date.getDate()}</div>
                <div className={`text-[10px] font-body ${
                  isSelected ? 'text-white/80' : isSunday ? 'text-gray-300' : 'text-scram-paragraph'
                }`}>
                  {(t.months[date.getMonth()] ?? '').slice(0, 3)}
                </div>
                {isSunday && (
                  <div className="text-[9px] font-body mt-0.5 text-gray-300">{t.closed}</div>
                )}
                {label && !isSunday && (
                  <div className={`text-[9px] font-bold mt-0.5 ${isSelected ? 'text-white' : 'text-scram-primary'}`}>
                    {label}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  function renderTimeStep() {
    return (
      <div>
        <div className="flex items-center gap-2 mb-4">
          <button
            onClick={() => setStep('calendar')}
            className="text-scram-paragraph hover:text-scram-dark transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h3 className="font-heading text-lg font-bold text-scram-dark">{t.selectTime}</h3>
          {selectedDate && (
            <span className="text-sm font-body text-scram-paragraph ml-auto">
              {t.daysShort[selectedDate.getDay()]} {selectedDate.getDate()} {t.months[selectedDate.getMonth()]}
            </span>
          )}
        </div>

        {loading ? (
          <div className="grid grid-cols-3 gap-2">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="h-11 rounded-lg bg-gray-100 animate-pulse" />
            ))}
          </div>
        ) : isClosed ? (
          <div className="text-center py-8">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <p className="font-body text-scram-paragraph">{t.closed}</p>
          </div>
        ) : slots.length === 0 ? (
          <div className="text-center py-8">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="font-body text-scram-paragraph">{t.noSlots}</p>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-2">
            {slots.map((slot) => {
              const isSelected = selectedSlot?.startISO === slot.startISO;
              return (
                <button
                  key={slot.startISO}
                  onClick={() => handleSlotSelect(slot)}
                  className={`py-2.5 px-3 rounded-lg border text-sm font-body font-medium transition-all ${
                    isSelected
                      ? 'bg-scram-primary border-scram-primary text-white shadow-button'
                      : 'bg-white border-scram-border text-scram-dark hover:border-scram-primary hover:text-scram-primary'
                  }`}
                >
                  {slot.start}
                </button>
              );
            })}
          </div>
        )}

        {!loading && !isClosed && slots.length > 0 && (
          <p className="text-center text-xs font-body text-scram-paragraph mt-3">
            <svg className="w-3.5 h-3.5 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {t.duration}
          </p>
        )}
      </div>
    );
  }

  function renderFormStep() {
    return (
      <div>
        <div className="flex items-center gap-2 mb-4">
          <button
            onClick={() => setStep('time')}
            className="text-scram-paragraph hover:text-scram-dark transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h3 className="font-heading text-lg font-bold text-scram-dark">{t.stepForm}</h3>
        </div>

        {/* Summary */}
        {selectedDate && selectedSlot && (
          <div className="bg-scram-light rounded-lg p-3 mb-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-scram-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-scram-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="font-body text-sm font-semibold text-scram-dark">
                {t.days[selectedDate.getDay()]} {selectedDate.getDate()} {t.months[selectedDate.getMonth()]}
              </p>
              <p className="font-body text-xs text-scram-paragraph">
                {selectedSlot.start} – {selectedSlot.end} ({t.duration})
              </p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Name */}
          <div>
            <label htmlFor="booking-name" className="block font-body text-sm font-medium text-scram-dark mb-1.5">
              {t.nameLabel} <span className="text-scram-error">*</span>
            </label>
            <input
              id="booking-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2.5 border border-scram-border rounded-lg bg-white text-scram-dark font-body text-base placeholder:text-scram-paragraph/50 focus:border-scram-primary focus:ring-2 focus:ring-scram-primary/20 outline-none transition-all"
              placeholder={t.nameLabel}
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="booking-email" className="block font-body text-sm font-medium text-scram-dark mb-1.5">
              {t.emailLabel} <span className="text-scram-error">*</span>
            </label>
            <input
              id="booking-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 border border-scram-border rounded-lg bg-white text-scram-dark font-body text-base placeholder:text-scram-paragraph/50 focus:border-scram-primary focus:ring-2 focus:ring-scram-primary/20 outline-none transition-all"
              placeholder={t.emailLabel}
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="booking-phone" className="block font-body text-sm font-medium text-scram-dark mb-1.5">
              {t.phoneLabel}
            </label>
            <input
              id="booking-phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2.5 border border-scram-border rounded-lg bg-white text-scram-dark font-body text-base placeholder:text-scram-paragraph/50 focus:border-scram-primary focus:ring-2 focus:ring-scram-primary/20 outline-none transition-all"
              placeholder={t.phonePlaceholder}
            />
          </div>

          {/* Notes */}
          <div>
            <label htmlFor="booking-notes" className="block font-body text-sm font-medium text-scram-dark mb-1.5">
              {t.notesLabel}
            </label>
            <textarea
              id="booking-notes"
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-4 py-2.5 border border-scram-border rounded-lg bg-white text-scram-dark font-body text-base placeholder:text-scram-paragraph/50 focus:border-scram-primary focus:ring-2 focus:ring-scram-primary/20 outline-none transition-all resize-none"
              placeholder={t.notesPlaceholder}
            />
          </div>

          {error && (
            <div className="bg-scram-error/10 border border-scram-error/30 rounded-lg px-4 py-2 text-sm font-body text-scram-error">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-scram-primary hover:bg-scram-primaryHover disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold text-base rounded-pill shadow-button transition-all duration-300 hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {submitting ? t.submitting : t.submitText}
          </button>

          <p className="flex items-center justify-center gap-1.5 font-body text-xs text-scram-paragraph text-center">
            <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            {t.privacyNote}
          </p>
        </form>
      </div>
    );
  }

  function renderConfirmationStep() {
    return (
      <div className="text-center py-4">
        <div className="w-16 h-16 bg-scram-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-scram-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h3 className="font-heading text-xl font-bold text-scram-dark mb-2">{t.confirmationTitle}</h3>
        <p className="font-body text-sm text-scram-paragraph mb-6">{t.confirmationSubtitle}</p>

        {/* Booking summary */}
        {selectedDate && selectedSlot && (
          <div className="bg-scram-light rounded-lg p-4 mb-4 text-left">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-scram-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-scram-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-body text-sm font-semibold text-scram-dark">
                  {t.days[selectedDate.getDay()]} {selectedDate.getDate()} {t.months[selectedDate.getMonth()]}
                </p>
                <p className="font-body text-xs text-scram-paragraph">
                  {selectedSlot.start} – {selectedSlot.end} ({t.duration})
                </p>
              </div>
            </div>

            {meetLink && (
              <div>
                <p className="font-body text-xs text-scram-paragraph mb-1.5">{t.meetLinkLabel}</p>
                <a
                  href={meetLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-scram-border rounded-lg text-sm font-body font-medium text-scram-dark hover:border-scram-primary transition-colors"
                >
                  <svg className="w-4 h-4 text-scram-primary" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.5 9.5l4.72-4.72a.75.75 0 011.28.53v13.38a.75.75 0 01-1.28.53L15.5 14.5v-5zm-1.5 8V6.5A1.5 1.5 0 0012.5 5h-9A1.5 1.5 0 002 6.5v11A1.5 1.5 0 003.5 19h9a1.5 1.5 0 001.5-1.5z" />
                  </svg>
                  {t.joinMeet}
                </a>
              </div>
            )}
          </div>
        )}

        <button
          onClick={onClose}
          className="px-8 py-2.5 bg-scram-dark text-white font-semibold text-sm rounded-pill transition-all duration-300 hover:-translate-y-0.5"
        >
          {t.closeButton}
        </button>
      </div>
    );
  }

  // ============================================================
  // RENDER
  // ============================================================

  if (!mounted) return null;

  const modal = (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-card shadow-card-hover border border-scram-border w-full max-w-md max-h-[90vh] overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-scram-primary px-6 py-4 flex items-center justify-between flex-shrink-0">
          <h2 className="font-heading text-lg font-bold text-white">{t.modalTitle}</h2>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {renderStepIndicator()}

          {step === 'calendar' && renderCalendarStep()}
          {step === 'time' && renderTimeStep()}
          {step === 'form' && renderFormStep()}
          {step === 'confirmation' && renderConfirmationStep()}
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
