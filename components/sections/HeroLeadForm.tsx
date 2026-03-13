'use client';

import { useState, FormEvent } from 'react';
import { useContent } from '@/lib/i18n/ContentContext';
import { tracker } from '@/lib/tracking/universal-tracker';

export function HeroLeadForm() {
  const { content } = useContent();
  const form = content.heroForm;

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [company, setCompany] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [need, setNeed] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    const selectedOption = form.needOptions.find((o) => o.value === need);
    const needLabel = selectedOption?.label ?? need;

    // Capturar UTMs de la URL actual
    const params = new URLSearchParams(window.location.search);
    const utmData = {
      utm_source: params.get('utm_source') || '',
      utm_medium: params.get('utm_medium') || '',
      utm_campaign: params.get('utm_campaign') || '',
      utm_content: params.get('utm_content') || '',
      utm_term: params.get('utm_term') || '',
      gclid: params.get('gclid') || '',
    };

    // 1. Enviar al CRM nativo
    try {
      const visitorId = localStorage.getItem('scram_visitor_id') || '';
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          company,
          name,
          email,
          need,
          needLabel,
          visitorId,
          source: 'hero_form',
          ...utmData,
        }),
      });
    } catch {
      // No bloquear si el CRM falla — el lead se registra en WhatsApp de todas formas
    }

    // 2. Tracking en todas las plataformas (GTM → Google Ads, Meta, LinkedIn, etc.)
    tracker.trackCTA('hero_lead_form_submit', 'hero-form', 'whatsapp');
    tracker.trackFormSubmit('hero_lead_form', {
      company,
      name,
      email,
      intent: need,
      source: utmData.utm_source,
      medium: utmData.utm_medium,
      campaign: utmData.utm_campaign,
    });

    // 3. Redirigir a WhatsApp
    const lines = [
      `Hola, me interesa una sesión de arquitectura.`,
      `Empresa: ${company}`,
      `Nombre: ${name}`,
      `Email: ${email}`,
      `Necesidad: ${needLabel}`,
    ];
    const msg = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/522211065056?text=${msg}`, '_blank');

    setSubmitted(true);
    setSubmitting(false);
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-card shadow-card-hover border border-scram-border overflow-hidden">
        <div className="bg-scram-primary px-6 py-4">
          <h2 className="font-heading text-xl font-bold text-white">{form.title}</h2>
        </div>
        <div className="p-6 lg:p-8 text-center">
          <div className="w-14 h-14 bg-scram-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-7 h-7 text-scram-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="font-heading text-xl font-semibold text-scram-dark mb-2">
            {form.successMessage}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-card shadow-card-hover border border-scram-border overflow-hidden">
      {/* Header stripe */}
      <div className="bg-scram-primary px-6 lg:px-8 py-4">
        <h2 className="font-heading text-xl lg:text-2xl font-bold text-white">
          {form.title}
        </h2>
        <p className="font-body text-sm text-white/90 mt-0.5">
          {form.subtitle}
        </p>
      </div>

      {/* Form body */}
      <div className="p-6 lg:p-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Company */}
          <div>
            <label htmlFor="hero-company" className="block font-body text-sm font-medium text-scram-dark mb-1.5">
              {form.companyLabel} <span className="text-scram-error">*</span>
            </label>
            <input
              id="hero-company"
              type="text"
              required
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full px-4 py-2.5 border border-scram-border rounded-lg bg-white text-scram-dark font-body text-base placeholder:text-scram-paragraph/50 focus:border-scram-primary focus:ring-2 focus:ring-scram-primary/20 outline-none transition-all"
              placeholder={form.companyLabel}
            />
          </div>

          {/* Name */}
          <div>
            <label htmlFor="hero-name" className="block font-body text-sm font-medium text-scram-dark mb-1.5">
              {form.nameLabel} <span className="text-scram-error">*</span>
            </label>
            <input
              id="hero-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2.5 border border-scram-border rounded-lg bg-white text-scram-dark font-body text-base placeholder:text-scram-paragraph/50 focus:border-scram-primary focus:ring-2 focus:ring-scram-primary/20 outline-none transition-all"
              placeholder={form.nameLabel}
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="hero-email" className="block font-body text-sm font-medium text-scram-dark mb-1.5">
              {form.emailLabel} <span className="text-scram-error">*</span>
            </label>
            <input
              id="hero-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 border border-scram-border rounded-lg bg-white text-scram-dark font-body text-base placeholder:text-scram-paragraph/50 focus:border-scram-primary focus:ring-2 focus:ring-scram-primary/20 outline-none transition-all"
              placeholder={form.emailLabel}
            />
          </div>

          {/* Need (Select) */}
          <div>
            <label htmlFor="hero-need" className="block font-body text-sm font-medium text-scram-dark mb-1.5">
              {form.needLabel} <span className="text-scram-error">*</span>
            </label>
            <div className="relative">
              <select
                id="hero-need"
                required
                value={need}
                onChange={(e) => setNeed(e.target.value)}
                className="w-full px-4 py-2.5 pr-10 border border-scram-border rounded-lg bg-white text-scram-dark font-body text-base appearance-none focus:border-scram-primary focus:ring-2 focus:ring-scram-primary/20 outline-none transition-all"
              >
                <option value="" disabled>Seleccionar...</option>
                {form.needOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <svg
                className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-scram-paragraph pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Submit button with WhatsApp icon */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-scram-primary hover:bg-scram-primaryHover disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold text-base rounded-pill shadow-button transition-all duration-300 hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            {form.submitText}
          </button>
        </form>

        {/* Privacy note with lock icon */}
        <p className="flex items-center justify-center gap-1.5 font-body text-xs text-scram-paragraph text-center mt-4">
          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          {form.privacyNote}
        </p>
      </div>
    </div>
  );
}
