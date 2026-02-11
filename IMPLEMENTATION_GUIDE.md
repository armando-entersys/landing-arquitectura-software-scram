# 🚀 GUÍA DE IMPLEMENTACIÓN COMPLETA
## Landing Centauro - Arquitectura de Clase Mundial

Este documento contiene TODO el código necesario para implementar la landing page completa.
Sigue los pasos en orden para crear una landing de nivel Silicon Valley.

---

## 📂 ESTRUCTURA DE DIRECTORIOS

Primero, crea esta estructura de carpetas:

```bash
landing-centauro/
├── app/
│   ├── fonts/
│   ├── api/
│   │   └── contact/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   ├── sections/
│   ├── forms/
│   ├── ui/
│   ├── tracking/
│   └── widgets/
├── lib/
│   ├── personalization/
│   ├── tracking/
│   ├── integrations/
│   ├── validation/
│   └── utils/
├── hooks/
├── types/
├── content/
└── public/
    └── images/
```

---

## 🎨 PASO 1: UTILIDADES BASE

### `lib/utils/cn.ts`
```typescript
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

**IMPORTANTE:** Instala las dependencias faltantes:
```bash
npm install clsx tailwind-merge
```

---

## 🧠 PASO 2: PERSONALIZACIÓN CON IA (Query String Funnels)

### `lib/personalization/ai-funnel.ts`
```typescript
/**
 * Sistema de Personalización Inteligente basado en Query Strings
 * Inspirado en técnicas de Google Optimize y Anthropic Claude
 *
 * Parámetros soportados:
 * - utm_source: Origen del tráfico (google, linkedin, facebook)
 * - utm_medium: Medio (cpc, email, social)
 * - utm_campaign: Campaña específica
 * - intent: Intención del usuario (high, problem_aware, comparing, exploring)
 * - industry: Industria del prospecto (manufacturing, logistics, retail)
 * - budget: Rango de presupuesto (starter, growth, enterprise)
 * - persona: Tipo de persona (coo, cto, manager)
 */

export type Intent = 'high' | 'problem_aware' | 'comparing' | 'exploring' | 'unknown';
export type Industry = 'manufacturing' | 'logistics' | 'retail' | 'services' | 'unknown';
export type BudgetRange = 'starter' | 'growth' | 'enterprise' | 'unknown';
export type PersonaType = 'coo' | 'cto' | 'manager' | 'technical' | 'unknown';

export interface VisitorProfile {
  intent: Intent;
  industry: Industry;
  budget: BudgetRange;
  persona: PersonaType;
  source: string;
  medium: string;
  campaign: string;
  keywords: string[];
  timestamp: number;
}

export interface PersonalizationStrategy {
  heroVariant: 'authority' | 'technical' | 'roi' | 'trust';
  ctaText: string;
  ctaVariant: 'primary' | 'secondary';
  showPricing: boolean;
  emphasizeSection: 'problem' | 'solution' | 'trybuy' | 'socialproof';
  testimonialType: 'coo' | 'cto' | 'general';
  urgencyLevel: 'high' | 'medium' | 'low';
  autoScrollTo?: string;
}

/**
 * Detecta la intención del visitante basado en query params y comportamiento
 */
export function detectIntent(searchParams: URLSearchParams): Intent {
  const intent = searchParams.get('intent')?.toLowerCase();
  const utmSource = searchParams.get('utm_source')?.toLowerCase() || '';
  const utmMedium = searchParams.get('utm_medium')?.toLowerCase() || '';
  const utmCampaign = searchParams.get('utm_campaign')?.toLowerCase() || '';
  const keywords = (searchParams.get('keywords') || '').toLowerCase();

  // Intent explícito en URL
  if (intent === 'high' || intent === 'high_intent') return 'high';
  if (intent === 'problem' || intent === 'problem_aware') return 'problem_aware';
  if (intent === 'comparing' || intent === 'compare') return 'comparing';
  if (intent === 'exploring' || intent === 'explore') return 'exploring';

  // Inferencia inteligente basada en UTM
  if (utmMedium === 'cpc' || utmSource === 'google-ads') {
    // Tráfico pagado = alta intención
    if (keywords.includes('precio') || keywords.includes('costo') || keywords.includes('cotización')) {
      return 'high';
    }
    if (keywords.includes('mejor') || keywords.includes('vs') || keywords.includes('comparar')) {
      return 'comparing';
    }
    return 'problem_aware';
  }

  if (utmSource === 'linkedin' && utmMedium === 'social') {
    return 'problem_aware'; // LinkedIn = B2B consciente
  }

  if (utmCampaign.includes('retargeting') || utmCampaign.includes('remarketing')) {
    return 'comparing'; // Ya nos conoce, está comparando
  }

  return 'unknown';
}

/**
 * Detecta la industria del visitante
 */
export function detectIndustry(searchParams: URLSearchParams): Industry {
  const industry = searchParams.get('industry')?.toLowerCase();
  const utmCampaign = searchParams.get('utm_campaign')?.toLowerCase() || '';
  const keywords = (searchParams.get('keywords') || '').toLowerCase();

  if (industry === 'manufacturing' || industry === 'manufactura') return 'manufacturing';
  if (industry === 'logistics' || industry === 'logistica') return 'logistics';
  if (industry === 'retail' || industry === 'comercio') return 'retail';
  if (industry === 'services' || industry === 'servicios') return 'services';

  // Inferencia por keywords
  if (keywords.includes('manufactura') || keywords.includes('planta') || keywords.includes('producción')) {
    return 'manufacturing';
  }
  if (keywords.includes('logística') || keywords.includes('almacén') || keywords.includes('wms')) {
    return 'logistics';
  }
  if (keywords.includes('retail') || keywords.includes('tienda') || keywords.includes('e-commerce')) {
    return 'retail';
  }

  // Inferencia por campaña
  if (utmCampaign.includes('manufacturing') || utmCampaign.includes('automotive')) {
    return 'manufacturing';
  }
  if (utmCampaign.includes('logistics') || utmCampaign.includes('warehouse')) {
    return 'logistics';
  }

  return 'unknown';
}

/**
 * Detecta el rango de presupuesto
 */
export function detectBudget(searchParams: URLSearchParams): BudgetRange {
  const budget = searchParams.get('budget')?.toLowerCase();
  const utmCampaign = searchParams.get('utm_campaign')?.toLowerCase() || '';

  if (budget === 'starter' || budget === 'pequeño') return 'starter';
  if (budget === 'growth' || budget === 'medio') return 'growth';
  if (budget === 'enterprise' || budget === 'grande') return 'enterprise';

  // Inferencia por campaña
  if (utmCampaign.includes('enterprise') || utmCampaign.includes('corp')) {
    return 'enterprise';
  }
  if (utmCampaign.includes('smb') || utmCampaign.includes('pyme')) {
    return 'starter';
  }

  return 'unknown';
}

/**
 * Detecta el tipo de persona
 */
export function detectPersona(searchParams: URLSearchParams): PersonaType {
  const persona = searchParams.get('persona')?.toLowerCase();
  const utmContent = searchParams.get('utm_content')?.toLowerCase() || '';

  if (persona === 'coo' || persona === 'director-operaciones') return 'coo';
  if (persona === 'cto' || persona === 'director-ti') return 'cto';
  if (persona === 'manager' || persona === 'gerente') return 'manager';
  if (persona === 'technical' || persona === 'tecnico') return 'technical';

  // Inferencia por contenido
  if (utmContent.includes('coo') || utmContent.includes('operations')) return 'coo';
  if (utmContent.includes('cto') || utmContent.includes('tech')) return 'cto';

  return 'unknown';
}

/**
 * Construye el perfil completo del visitante
 */
export function buildVisitorProfile(searchParams: URLSearchParams): VisitorProfile {
  return {
    intent: detectIntent(searchParams),
    industry: detectIndustry(searchParams),
    budget: detectBudget(searchParams),
    persona: detectPersona(searchParams),
    source: searchParams.get('utm_source') || 'direct',
    medium: searchParams.get('utm_medium') || 'none',
    campaign: searchParams.get('utm_campaign') || '',
    keywords: (searchParams.get('keywords') || '').split(',').filter(Boolean),
    timestamp: Date.now(),
  };
}

/**
 * Genera la estrategia de personalización basada en el perfil
 * Esta es la MAGIA que convierte visitantes en leads calificados
 */
export function generatePersonalizationStrategy(profile: VisitorProfile): PersonalizationStrategy {
  const { intent, industry, budget, persona } = profile;

  // Estrategia por INTENT (prioridad #1)
  if (intent === 'high') {
    return {
      heroVariant: 'roi',
      ctaText: 'Solicitar Sesión Try & Buy Ahora',
      ctaVariant: 'primary',
      showPricing: true,
      emphasizeSection: 'trybuy',
      testimonialType: persona === 'cto' ? 'cto' : 'coo',
      urgencyLevel: 'high',
      autoScrollTo: '#try-buy-form', // Auto-scroll al formulario
    };
  }

  if (intent === 'problem_aware') {
    return {
      heroVariant: 'authority',
      ctaText: 'Ver Cómo Funciona Centauro',
      ctaVariant: 'primary',
      showPricing: false,
      emphasizeSection: 'problem', // Mostrar problemas primero
      testimonialType: 'general',
      urgencyLevel: 'medium',
    };
  }

  if (intent === 'comparing') {
    return {
      heroVariant: 'trust',
      ctaText: 'Comparar con Try & Buy Gratis',
      ctaVariant: 'secondary',
      showPricing: true,
      emphasizeSection: 'socialproof',
      testimonialType: persona === 'cto' ? 'cto' : 'coo',
      urgencyLevel: 'medium',
    };
  }

  // Estrategia por PERSONA (prioridad #2)
  if (persona === 'cto') {
    return {
      heroVariant: 'technical',
      ctaText: 'Ver Arquitectura Técnica',
      ctaVariant: 'primary',
      showPricing: false,
      emphasizeSection: 'solution',
      testimonialType: 'cto',
      urgencyLevel: 'low',
    };
  }

  if (persona === 'coo') {
    return {
      heroVariant: 'roi',
      ctaText: 'Calcular ROI de Centauro',
      ctaVariant: 'primary',
      showPricing: true,
      emphasizeSection: 'problem',
      testimonialType: 'coo',
      urgencyLevel: 'medium',
    };
  }

  // Estrategia DEFAULT (conservadora)
  return {
    heroVariant: 'authority',
    ctaText: 'Solicitar Sesión Try & Buy',
    ctaVariant: 'primary',
    showPricing: false,
    emphasizeSection: 'solution',
    testimonialType: 'general',
    urgencyLevel: 'medium',
  };
}

/**
 * Guarda el perfil en localStorage para persistencia entre páginas
 */
export function saveVisitorProfile(profile: VisitorProfile): void {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem('visitor_profile', JSON.stringify(profile));
      localStorage.setItem('visitor_profile_timestamp', profile.timestamp.toString());
    } catch (error) {
      console.error('Error saving visitor profile:', error);
    }
  }
}

/**
 * Recupera el perfil guardado (válido por 30 días)
 */
export function getStoredVisitorProfile(): VisitorProfile | null {
  if (typeof window === 'undefined') return null;

  try {
    const stored = localStorage.getItem('visitor_profile');
    const timestamp = localStorage.getItem('visitor_profile_timestamp');

    if (!stored || !timestamp) return null;

    const age = Date.now() - parseInt(timestamp, 10);
    const maxAge = 30 * 24 * 60 * 60 * 1000; // 30 días

    if (age > maxAge) {
      localStorage.removeItem('visitor_profile');
      localStorage.removeItem('visitor_profile_timestamp');
      return null;
    }

    return JSON.parse(stored) as VisitorProfile;
  } catch (error) {
    console.error('Error retrieving visitor profile:', error);
    return null;
  }
}
```

---

## 📊 PASO 3: TRACKING & ANALYTICS

### `lib/tracking/gtm.ts`
```typescript
/**
 * Google Tag Manager Integration
 * Nivel Silicon Valley: Type-safe, event-driven, privacy-compliant
 */

export interface GTMEvent {
  event: string;
  [key: string]: any;
}

export interface FormSubmitEvent extends GTMEvent {
  event: 'form_submit';
  form_name: string;
  form_type: 'try_buy' | 'contact' | 'newsletter';
  user_email?: string;
  company_size?: string;
  industry?: string;
}

export interface CTAClickEvent extends GTMEvent {
  event: 'cta_click';
  cta_text: string;
  cta_location: string;
  destination?: string;
}

export interface SectionViewEvent extends GTMEvent {
  event: 'section_view';
  section_name: string;
  scroll_depth: number;
}

/**
 * Pushes an event to GTM dataLayer
 */
export function trackEvent(eventData: GTMEvent): void {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    ...eventData,
    timestamp: new Date().toISOString(),
    page_path: window.location.pathname,
    page_url: window.location.href,
  });

  if (process.env.NODE_ENV === 'development') {
    console.log('[GTM Event]', eventData);
  }
}

/**
 * Track form submission
 */
export function trackFormSubmit(data: Omit<FormSubmitEvent, 'event'>): void {
  trackEvent({
    event: 'form_submit',
    ...data,
  });
}

/**
 * Track CTA click
 */
export function trackCTAClick(data: Omit<CTAClickEvent, 'event'>): void {
  trackEvent({
    event: 'cta_click',
    ...data,
  });
}

/**
 * Track section view (intersection observer)
 */
export function trackSectionView(data: Omit<SectionViewEvent, 'event'>): void {
  trackEvent({
    event: 'section_view',
    ...data,
  });
}

/**
 * Track Google Ads conversion
 */
export function trackGoogleAdsConversion(
  conversionId: string,
  conversionLabel: string,
  value?: number
): void {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', 'conversion', {
    send_to: `${conversionId}/${conversionLabel}`,
    value: value || 0,
    currency: 'MXN',
    transaction_id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
  });
}

/**
 * Initialize GTM (call this in layout.tsx)
 */
export function initGTM(gtmId: string): void {
  if (typeof window === 'undefined' || !gtmId) return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js',
  });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
  document.head.appendChild(script);
}

// Type augmentation for window
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
```

---

## 🎯 PASO 4: COMPONENTES UI MATERIAL DESIGN 3

Debido a la longitud, te proporciono los componentes más críticos. Los demás seguirán el mismo patrón.

### `components/ui/Button.tsx`
```typescript
'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils/cn';
import { trackCTAClick } from '@/lib/tracking/gtm';

interface ButtonProps {
  variant?: 'filled' | 'outlined' | 'text' | 'elevated' | 'tonal';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  href?: string;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  trackingData?: {
    location: string;
    destination?: string;
  };
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'filled',
  size = 'md',
  icon,
  iconPosition = 'left',
  href,
  loading = false,
  disabled = false,
  fullWidth = false,
  onClick,
  children,
  className,
  type = 'button',
  trackingData,
}) => {
  const baseStyles = cn(
    'inline-flex items-center justify-center gap-2',
    'font-label-large transition-all duration-md3-short4',
    'rounded-md3-full focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:cursor-not-allowed disabled:opacity-50',
    fullWidth && 'w-full'
  );

  const variantStyles = {
    filled: cn(
      'bg-primary text-primary-onPrimary shadow-md3-1',
      'hover:shadow-md3-2 active:shadow-md3-1',
      'focus:ring-primary/50'
    ),
    outlined: cn(
      'border border-outline text-primary bg-transparent',
      'hover:bg-primary/8 active:bg-primary/12',
      'focus:ring-primary/50'
    ),
    text: cn(
      'text-primary bg-transparent',
      'hover:bg-primary/8 active:bg-primary/12',
      'focus:ring-primary/50'
    ),
    elevated: cn(
      'bg-surface-container-low text-primary shadow-md3-1',
      'hover:shadow-md3-2 active:shadow-md3-1',
      'focus:ring-primary/50'
    ),
    tonal: cn(
      'bg-secondary-container text-secondary-onContainer',
      'hover:shadow-md3-1 active:shadow-none',
      'focus:ring-secondary/50'
    ),
  };

  const sizeStyles = {
    sm: 'h-10 px-md3-3 text-label-medium',
    md: 'h-12 px-md3-6 text-label-large',
    lg: 'h-14 px-md3-8 text-title-medium',
  };

  const combinedStyles = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  const handleClick = () => {
    if (trackingData) {
      trackCTAClick({
        cta_text: children as string,
        cta_location: trackingData.location,
        destination: trackingData.destination || href,
      });
    }
    onClick?.();
  };

  const iconElement = loading ? (
    <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
  ) : icon;

  const content = (
    <>
      {iconElement && iconPosition === 'left' && iconElement}
      <span>{children}</span>
      {iconElement && iconPosition === 'right' && iconElement}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedStyles} onClick={handleClick}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled || loading}
      className={combinedStyles}
    >
      {content}
    </button>
  );
};
```

---

Debido a la extensión del código, he creado este documento con los componentes críticos.

**¿Quieres que continúe con:**
1. Los componentes UI restantes (Card, Input, etc.)
2. Las secciones de la landing (Hero, Pain, Solution, etc.)
3. El Dockerfile y docker-compose.yml
4. El sistema completo de integración Mautic + SendGrid

Te puedo generar el código completo en archivos separados o continuar expandiendo este documento guía.
