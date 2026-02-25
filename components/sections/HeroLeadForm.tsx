'use client';

import { useState, FormEvent } from 'react';
import { useContent } from '@/lib/i18n/ContentContext';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { tracker } from '@/lib/tracking/universal-tracker';

export function HeroLeadForm() {
  const { content } = useContent();
  const form = content.heroForm;

  const [submitted, setSubmitted] = useState(false);
  const [company, setCompany] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [need, setNeed] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const selectedOption = form.needOptions.find((o) => o.value === need);
    const needLabel = selectedOption?.label ?? need;

    tracker.trackCTA('hero_lead_form_submit', 'hero-form', 'whatsapp');
    tracker.trackFormSubmit('hero_lead_form', {
      company,
      name,
      email,
      intent: need,
    });

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
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-card shadow-card-hover border border-scram-border p-6 lg:p-8 text-center">
        <div className="w-14 h-14 bg-scram-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-scram-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="font-heading text-xl font-semibold text-scram-dark mb-2">
          {form.successMessage}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-card shadow-card-hover border border-scram-border p-6 lg:p-8">
      <h2 className="font-heading text-xl lg:text-2xl font-bold text-scram-dark mb-1">
        {form.title}
      </h2>
      <p className="font-body text-sm text-scram-paragraph mb-5">
        {form.subtitle}
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label={form.companyLabel}
          variant="outlined"
          required
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <Input
          label={form.nameLabel}
          variant="outlined"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          label={form.emailLabel}
          variant="outlined"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Select
          label={form.needLabel}
          variant="outlined"
          required
          options={form.needOptions}
          value={need}
          onChange={(e) => setNeed(e.target.value)}
        />

        <button
          type="submit"
          className="w-full px-6 py-3.5 bg-scram-primary hover:bg-scram-primaryHover text-white font-semibold text-base rounded-pill shadow-button transition-all duration-300 hover:-translate-y-0.5"
        >
          {form.submitText}
        </button>
      </form>

      <p className="font-body text-xs text-scram-paragraph text-center mt-3">
        {form.privacyNote}
      </p>
    </div>
  );
}
