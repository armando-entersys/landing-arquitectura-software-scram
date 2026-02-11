# 🚀 CÓDIGO COMPLETO - LANDING CENTAURO
## Implementación de Clase Mundial

Este documento contiene TODOS los archivos de código necesarios para la landing.
Copia cada archivo en la ubicación indicada.

---

## 📁 ARCHIVOS CORE

### `lib/personalization/ai-funnel.ts`

```typescript
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

export function detectIntent(searchParams: URLSearchParams): Intent {
  const intent = searchParams.get('intent')?.toLowerCase();
  const utmSource = searchParams.get('utm_source')?.toLowerCase() || '';
  const utmMedium = searchParams.get('utm_medium')?.toLowerCase() || '';
  const keywords = (searchParams.get('keywords') || '').toLowerCase();

  if (intent === 'high' || intent === 'high_intent') return 'high';
  if (intent === 'problem' || intent === 'problem_aware') return 'problem_aware';
  if (intent === 'comparing') return 'comparing';

  if (utmMedium === 'cpc' || utmSource === 'google-ads') {
    if (keywords.includes('precio') || keywords.includes('costo')) return 'high';
    if (keywords.includes('mejor') || keywords.includes('vs')) return 'comparing';
    return 'problem_aware';
  }

  return 'unknown';
}

export function detectIndustry(searchParams: URLSearchParams): Industry {
  const industry = searchParams.get('industry')?.toLowerCase();
  const keywords = (searchParams.get('keywords') || '').toLowerCase();

  if (industry === 'manufacturing') return 'manufacturing';
  if (industry === 'logistics') return 'logistics';
  if (industry === 'retail') return 'retail';

  if (keywords.includes('manufactura') || keywords.includes('planta')) return 'manufacturing';
  if (keywords.includes('logística') || keywords.includes('almacén')) return 'logistics';
  if (keywords.includes('retail') || keywords.includes('tienda')) return 'retail';

  return 'unknown';
}

export function buildVisitorProfile(searchParams: URLSearchParams): VisitorProfile {
  return {
    intent: detectIntent(searchParams),
    industry: detectIndustry(searchParams),
    budget: (searchParams.get('budget') as BudgetRange) || 'unknown',
    persona: (searchParams.get('persona') as PersonaType) || 'unknown',
    source: searchParams.get('utm_source') || 'direct',
    medium: searchParams.get('utm_medium') || 'none',
    campaign: searchParams.get('utm_campaign') || '',
    keywords: (searchParams.get('keywords') || '').split(',').filter(Boolean),
    timestamp: Date.now(),
  };
}

export function generatePersonalizationStrategy(profile: VisitorProfile): PersonalizationStrategy {
  if (profile.intent === 'high') {
    return {
      heroVariant: 'roi',
      ctaText: 'Solicitar Sesión Try & Buy Ahora',
      ctaVariant: 'primary',
      showPricing: true,
      emphasizeSection: 'trybuy',
      testimonialType: profile.persona === 'cto' ? 'cto' : 'coo',
      urgencyLevel: 'high',
      autoScrollTo: '#try-buy-form',
    };
  }

  if (profile.intent === 'problem_aware') {
    return {
      heroVariant: 'authority',
      ctaText: 'Ver Cómo Funciona Centauro',
      ctaVariant: 'primary',
      showPricing: false,
      emphasizeSection: 'problem',
      testimonialType: 'general',
      urgencyLevel: 'medium',
    };
  }

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
```

---

### `lib/tracking/gtm.ts`

```typescript
export interface GTMEvent {
  event: string;
  [key: string]: any;
}

export function trackEvent(eventData: GTMEvent): void {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    ...eventData,
    timestamp: new Date().toISOString(),
    page_path: window.location.pathname,
  });

  if (process.env.NODE_ENV === 'development') {
    console.log('[GTM Event]', eventData);
  }
}

export function trackCTAClick(data: { cta_text: string; cta_location: string; destination?: string }): void {
  trackEvent({
    event: 'cta_click',
    ...data,
  });
}

export function trackFormSubmit(data: { form_name: string; form_type: string }): void {
  trackEvent({
    event: 'form_submit',
    ...data,
  });
}

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
```

---

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
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'filled',
  size = 'md',
  href,
  onClick,
  children,
  className,
  type = 'button',
  disabled = false,
}) => {
  const baseStyles = cn(
    'inline-flex items-center justify-center gap-2',
    'font-label-large transition-all duration-md3-short4',
    'rounded-md3-full focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:cursor-not-allowed disabled:opacity-50'
  );

  const variantStyles = {
    filled: 'bg-primary text-primary-onPrimary shadow-md3-1 hover:shadow-md3-2',
    outlined: 'border border-outline text-primary hover:bg-primary/8',
    text: 'text-primary hover:bg-primary/8',
    elevated: 'bg-surface-container-low text-primary shadow-md3-1 hover:shadow-md3-2',
    tonal: 'bg-secondary-container text-secondary-onContainer hover:shadow-md3-1',
  };

  const sizeStyles = {
    sm: 'h-10 px-md3-3 text-label-medium',
    md: 'h-12 px-md3-6 text-label-large',
    lg: 'h-14 px-md3-8 text-title-medium',
  };

  const styles = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

  const handleClick = () => {
    trackCTAClick({
      cta_text: children as string,
      cta_location: 'button',
      destination: href,
    });
    onClick?.();
  };

  if (href) {
    return (
      <Link href={href} className={styles} onClick={handleClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={handleClick} disabled={disabled} className={styles}>
      {children}
    </button>
  );
};
```

---

### `app/layout.tsx`

```typescript
import type { Metadata } from 'next';
import { Roboto, Roboto_Mono } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

const robotoMono = Roboto_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

export const metadata: Metadata = {
  title: 'Arquitectura de Software Centauro | Scram Consulting',
  description: 'Software de clase mundial desplegado en semanas. Modelo Try & Buy con transparencia radical. Arquitectura Centauro: IA + Ingenieros Senior.',
  keywords: ['desarrollo software empresarial', 'arquitectura centauro', 'scram consulting', 'try and buy', 'glass box'],
  openGraph: {
    title: 'Arquitectura de Software Centauro - Scram Consulting',
    description: 'Detenga el Secuestro Técnico. Software de Clase Mundial en Semanas.',
    url: 'https://arquitectura-software.scram2k.com',
    siteName: 'Scram Consulting',
    locale: 'es_MX',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-MX" className={`${roboto.variable} ${robotoMono.variable}`}>
      <head>
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="font-sans antialiased">
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        {children}
      </body>
    </html>
  );
}
```

---

### `app/page.tsx`

```typescript
import { Button } from '@/components/ui/Button';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-neutral-10">
        <div className="max-w-7xl mx-auto px-md3-6 py-md3-16">
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-md3-2 mb-md3-6">
              <span className="px-md3-4 py-md3-2 bg-primary-container text-primary-onContainer rounded-md3-full text-label-medium">
                🏢 Vibe Working Certified
              </span>
              <span className="px-md3-4 py-md3-2 bg-secondary-container text-secondary-onContainer rounded-md3-full text-label-medium">
                🔒 Fortinet Secured
              </span>
              <span className="px-md3-4 py-md3-2 bg-tertiary-container text-tertiary-onContainer rounded-md3-full text-label-medium">
                🌎 Alcance Nacional México
              </span>
            </div>

            <h1 className="text-display-large text-neutral-99 mb-md3-6">
              Detenga el Secuestro Técnico.{' '}
              <span className="text-primary">Software de Clase Mundial</span>{' '}
              Desplegado en Semanas, No en Meses.
            </h1>

            <p className="text-title-large text-neutral-90 mb-md3-8 max-w-3xl">
              Eliminamos la "Caja Negra" para corporativos en todo México. Implementamos{' '}
              <strong className="text-secondary">Arquitectura Centauro</strong> (Sinergia IA + Ingenieros Senior)
              desde nuestro Command Center en Vibe Working para garantizar transparencia radical,
              reducir deuda técnica y recortar costos de desarrollo en{' '}
              <strong className="text-primary">40% verificado</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-md3-4">
              <Button variant="filled" size="lg">
                Solicitar Sesión Try & Buy (Sin Costo)
              </Button>
              <Button variant="outlined" size="lg" href="#solution">
                Conocer Arquitectura Centauro
              </Button>
            </div>

            <p className="mt-md3-4 text-body-small text-neutral-80">
              ⚡ Calificación técnica inmediata con Arquitecto Senior vía Zoom/Meet en &lt;15 min.
            </p>
          </div>
        </div>
      </section>

      {/* El resto de secciones irán aquí */}
      <section className="py-md3-16 bg-surface">
        <div className="max-w-7xl mx-auto px-md3-6 text-center">
          <h2 className="text-headline-large mb-md3-6">
            Más secciones en desarrollo...
          </h2>
          <p className="text-body-large text-surface-onVariant">
            La landing está lista para crecer. Agrega las secciones según el plan maestro.
          </p>
        </div>
      </section>
    </main>
  );
}
```

---

## 🐳 DOCKER

### `Dockerfile`

```dockerfile
# Multi-stage build optimizado para producción
FROM node:20-alpine AS base

# Instalar dependencias solo cuando sea necesario
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild source code solo cuando sea necesario
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

# Production image, copiar todos los archivos y correr next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set permissions for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Copiar archivos standalone
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
```

---

### `docker-compose.yml`

```yaml
version: '3.8'

services:
  landing-centauro:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: scram-landing-centauro
    restart: unless-stopped
    environment:
      - NODE_ENV=production
      - NEXT_PUBLIC_GTM_ID=${NEXT_PUBLIC_GTM_ID}
      - NEXT_PUBLIC_GOOGLE_ADS_ID=${NEXT_PUBLIC_GOOGLE_ADS_ID}
      - NEXT_PUBLIC_SITE_URL=https://arquitectura-software.scram2k.com
      - MAUTIC_BASE_URL=${MAUTIC_BASE_URL}
      - MAUTIC_API_TOKEN=${MAUTIC_API_TOKEN}
    networks:
      - traefik-public
    deploy:
      resources:
        limits:
          cpus: '0.50'
          memory: 512M
        reservations:
          memory: 256M
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.landing-centauro.rule=Host(`arquitectura-software.scram2k.com`)"
      - "traefik.http.routers.landing-centauro.entrypoints=websecure"
      - "traefik.http.routers.landing-centauro.tls.certresolver=letsencrypt"
      - "traefik.http.services.landing-centauro.loadbalancer.server.port=3000"

networks:
  traefik-public:
    external: true
```

---

## 🚀 DEPLOY A PRODUCCIÓN

### `.dockerignore`

```
node_modules
.next
.git
.gitignore
*.md
.env*.local
npm-debug.log*
.DS_Store
```

---

## ⚡ COMANDOS DE DEPLOY

```bash
# 1. Crear .env en servidor
cp .env.example .env
# Editar .env con valores reales

# 2. Build de imagen Docker
docker-compose build

# 3. Deploy
docker-compose up -d

# 4. Ver logs
docker-compose logs -f landing-centauro

# 5. Verificar salud
curl https://arquitectura-software.scram2k.com
```

---

## 📊 NEXT STEPS

1. **Completar Secciones:**
   - Pain Section (3 patologías)
   - Solution Section (Centauro + Glass Box)
   - Try & Buy Section
   - FAQ Section

2. **Integrar Mautic:**
   - Crear `lib/integrations/mautic.ts`
   - API endpoint `/api/contact`

3. **Testing:**
   - Probar personalización con URLs:
     - `?intent=high&industry=manufacturing`
     - `?utm_source=google-ads&utm_medium=cpc`

4. **Analytics:**
   - Configurar GTM container
   - Setup Google Ads conversions
   - Configurar eventos personalizados

---

**🎯 La base está lista para escalar a unicornio. Ahora solo queda ejecutar.**
