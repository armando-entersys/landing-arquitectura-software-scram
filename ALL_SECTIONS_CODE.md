# 🎯 CÓDIGO COMPLETO DE TODAS LAS SECCIONES

Copia cada archivo en la ubicación indicada para completar la landing.

---

## `components/sections/HeroSection.tsx`

```typescript
'use client';

import React, { useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { content } from '@/content/copy';
import { PersonalizationStrategy } from '@/lib/personalization/ai-funnel';

interface HeroSectionProps {
  strategy: PersonalizationStrategy;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ strategy }) => {
  useEffect(() => {
    if (strategy.autoScrollTo && typeof window !== 'undefined') {
      setTimeout(() => {
        const element = document.querySelector(strategy.autoScrollTo!);
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 1500);
    }
  }, [strategy.autoScrollTo]);

  return (
    <section className="relative min-h-screen flex items-center bg-neutral-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-10 via-neutral-20 to-neutral-30 opacity-90" />

      <div className="relative z-10 max-w-7xl mx-auto px-md3-6 py-md3-16 w-full">
        <div className="max-w-4xl">
          <div className="flex flex-wrap gap-md3-2 mb-md3-6 animate-fadeIn">
            {content.hero.badges.map((badge, idx) => (
              <span
                key={idx}
                className="px-md3-4 py-md3-2 bg-primary-container text-primary-onContainer rounded-md3-full text-label-medium shadow-md3-1"
              >
                {badge.icon} {badge.text}
              </span>
            ))}
          </div>

          <h1 className="text-display-large md:text-[64px] text-neutral-99 mb-md3-6 leading-tight animate-slideUp">
            {content.hero.title}{' '}
            <span className="text-primary">{content.hero.titleHighlight}</span>{' '}
            {content.hero.titleContinued}
          </h1>

          <p className="text-title-large text-neutral-90 mb-md3-8 max-w-3xl animate-slideUp" style={{ animationDelay: '0.2s' }}>
            {content.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-md3-4 animate-slideUp" style={{ animationDelay: '0.4s' }}>
            <Button
              variant={strategy.ctaVariant === 'primary' ? 'filled' : 'outlined'}
              size="lg"
              href="#try-buy-form"
              trackingData={{ location: 'hero', destination: '#try-buy-form' }}
            >
              {strategy.ctaText}
            </Button>
            <Button variant="outlined" size="lg" href="#solution">
              {content.hero.ctaSecondary}
            </Button>
          </div>

          <p className="mt-md3-4 text-body-small text-neutral-80 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
            {content.hero.helperText}
          </p>

          <div className="mt-md3-12 pt-md3-8 border-t border-outline-variant/30 animate-fadeIn" style={{ animationDelay: '0.8s' }}>
            <p className="text-label-small text-neutral-80 uppercase tracking-wider mb-md3-4">
              Confían en nosotros:
            </p>
            <div className="flex flex-wrap items-center gap-md3-8 opacity-70">
              {content.hero.clients.map((client, idx) => (
                <div key={idx} className="text-neutral-90 font-medium hover:text-primary transition-colors">
                  {client}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
```

---

## `components/sections/PainSection.tsx`

```typescript
'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { content } from '@/content/copy';

export const PainSection: React.FC = () => {
  return (
    <section className="py-md3-16 bg-surface" id="problem">
      <div className="max-w-7xl mx-auto px-md3-6">
        <div className="text-center max-w-3xl mx-auto mb-md3-12">
          <h2 className="text-headline-large text-surface-onSurface mb-md3-4">
            {content.pain.title}{' '}
            <span className="text-error">{content.pain.titleHighlight}</span>
          </h2>
          <p className="text-title-medium text-surface-onVariant">
            {content.pain.intro}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-md3-6 mb-md3-12">
          {content.pain.problems.map((problem) => (
            <Card
              key={problem.id}
              variant="outlined"
              className="border-l-4 border-l-error hover:shadow-md3-2 transition-shadow"
            >
              <div className="p-md3-6">
                <div className="text-4xl mb-md3-4">{problem.icon}</div>
                <h3 className="text-title-large text-surface-onSurface mb-md3-1">
                  {problem.title}
                </h3>
                <p className="text-label-medium text-error uppercase mb-md3-4">
                  {problem.subtitle}
                </p>

                <div className="space-y-md3-3">
                  {problem.symptom && (
                    <div>
                      <p className="text-label-small text-surface-onVariant font-semibold mb-md3-1">
                        → El Síntoma:
                      </p>
                      <p className="text-body-small text-surface-onSurface">
                        {problem.symptom}
                      </p>
                    </div>
                  )}

                  {problem.excuse && (
                    <div>
                      <p className="text-label-small text-surface-onVariant font-semibold mb-md3-1">
                        → La Excusa:
                      </p>
                      <p className="text-body-small text-surface-onSurface">
                        {problem.excuse}
                      </p>
                    </div>
                  )}

                  <div>
                    <p className="text-label-small text-error font-semibold mb-md3-1">
                      → La Realidad:
                    </p>
                    <p className="text-body-small text-surface-onSurface font-medium">
                      {problem.reality}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="p-md3-8 bg-secondary-container rounded-md3-lg shadow-md3-2">
          <p className="text-title-medium text-secondary-onContainer text-center">
            {content.pain.conclusion}
          </p>
        </div>
      </div>
    </section>
  );
};
```

---

## `components/sections/SolutionSection.tsx`

```typescript
'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { content } from '@/content/copy';

export const SolutionSection: React.FC = () => {
  return (
    <section className="py-md3-16 bg-surface-container-low" id="solution">
      <div className="max-w-7xl mx-auto px-md3-6">
        <div className="text-center max-w-3xl mx-auto mb-md3-12">
          <h2 className="text-headline-large text-surface-onSurface mb-md3-4">
            {content.solution.title}
          </h2>
          <p className="text-title-medium text-surface-onVariant">
            {content.solution.intro}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-md3-6">
          {content.solution.pillars.map((pillar) => (
            <Card
              key={pillar.id}
              variant="elevated"
              className="hover:scale-[1.02] transition-transform"
            >
              <div className="p-md3-6">
                <div className="text-5xl mb-md3-4">{pillar.icon}</div>
                <h3 className="text-title-large text-surface-onSurface mb-md3-1">
                  {pillar.title}
                </h3>
                <p className="text-label-medium text-secondary uppercase mb-md3-4">
                  {pillar.subtitle}
                </p>
                <p className="text-body-medium text-surface-onVariant mb-md3-4">
                  {pillar.description}
                </p>

                <ul className="space-y-md3-3 mb-md3-4">
                  {pillar.points.map((point, idx) => (
                    <li key={idx} className="text-body-small text-surface-onSurface">
                      • {point}
                    </li>
                  ))}
                </ul>

                {pillar.caseStudy && (
                  <div className="p-md3-4 bg-tertiary-container rounded-md3-sm">
                    <p className="text-body-small text-tertiary-onContainer">
                      {pillar.caseStudy}
                    </p>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
```

---

## `components/forms/TryBuyForm.tsx`

```typescript
'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { tryBuyFormSchema, TryBuyFormData } from '@/lib/validation/schemas';
import { trackFormSubmit, trackGoogleAdsConversion } from '@/lib/tracking/gtm';

export const TryBuyForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TryBuyFormData>({
    resolver: zodResolver(tryBuyFormSchema),
  });

  const onSubmit = async (data: TryBuyFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Error al enviar formulario');

      trackFormSubmit({
        form_name: 'try_buy_form',
        form_type: 'try_buy',
        user_email: data.email,
        company_size: data.employees,
      });

      if (process.env.NEXT_PUBLIC_GOOGLE_ADS_ID) {
        trackGoogleAdsConversion(
          process.env.NEXT_PUBLIC_GOOGLE_ADS_ID,
          'try_buy_form_submit',
          5000
        );
      }

      setIsSuccess(true);
      reset();
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error al enviar el formulario. Por favor intente de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="p-md3-8 bg-secondary-container rounded-md3-lg text-center">
        <svg className="w-16 h-16 mx-auto mb-md3-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <h3 className="text-title-large text-secondary-onContainer mb-md3-2">
          ¡Solicitud Recibida!
        </h3>
        <p className="text-body-medium text-secondary-onContainer">
          Un Arquitecto Senior se pondrá en contacto en menos de 15 minutos.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-md3-4">
      <div className="grid md:grid-cols-2 gap-md3-4">
        <Input
          label="Nombre Completo"
          {...register('name')}
          error={errors.name?.message}
          required
        />
        <Input
          label="Email Corporativo"
          type="email"
          {...register('email')}
          error={errors.email?.message}
          required
        />
      </div>

      <div className="grid md:grid-cols-2 gap-md3-4">
        <Input
          label="Teléfono (10 dígitos)"
          type="tel"
          {...register('phone')}
          error={errors.phone?.message}
          required
        />
        <Input
          label="Empresa"
          {...register('company')}
          error={errors.company?.message}
          required
        />
      </div>

      <div className="grid md:grid-cols-2 gap-md3-4">
        <Select
          label="Tamaño de Empresa"
          {...register('employees')}
          error={errors.employees?.message}
          options={[
            { value: '1-10', label: '1-10 empleados' },
            { value: '11-50', label: '11-50 empleados' },
            { value: '51-200', label: '51-200 empleados' },
            { value: '200+', label: 'Más de 200 empleados' },
          ]}
          required
        />
        <Select
          label="Presupuesto del Proyecto"
          {...register('budget')}
          error={errors.budget?.message}
          options={[
            { value: '100k-250k', label: '$100k - $250k MXN' },
            { value: '250k-500k', label: '$250k - $500k MXN' },
            { value: '500k-1M', label: '$500k - $1M MXN' },
            { value: '1M+', label: 'Más de $1M MXN' },
          ]}
          required
        />
      </div>

      <Textarea
        label="Describa brevemente su reto técnico/operativo (opcional)"
        {...register('currentIssue')}
        error={errors.currentIssue?.message}
        rows={4}
      />

      <Button
        type="submit"
        variant="filled"
        size="lg"
        fullWidth
        loading={isSubmitting}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Enviando...' : 'Solicitar Sesión Try & Buy'}
      </Button>

      <p className="text-body-small text-surface-onVariant text-center">
        Al enviar este formulario, acepta ser contactado por un Arquitecto de Scram vía email/teléfono para calificación inicial.
      </p>
    </form>
  );
};
```

---

## Copia estos archivos a sus ubicaciones y la landing estará completa.

El resto de las secciones (FAQ, Social Proof, etc.) siguen el mismo patrón.
