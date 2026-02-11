'use client';

import { useEffect } from 'react';
import { tracker } from '@/lib/tracking/universal-tracker';

/**
 * TrackingProvider
 *
 * Inicializa todos los pixels/tags una sola vez al cargar la app.
 * Se coloca en page.tsx envolviendo el contenido.
 *
 * Plataformas soportadas (se activan automáticamente si el env var tiene valor):
 * - Google Tag Manager → NEXT_PUBLIC_GTM_ID
 * - Google Ads → NEXT_PUBLIC_GOOGLE_ADS_ID
 * - Meta (Facebook) Pixel → NEXT_PUBLIC_META_PIXEL_ID
 * - LinkedIn Insight Tag → NEXT_PUBLIC_LINKEDIN_PARTNER_ID
 * - Mautic CRM → NEXT_PUBLIC_MAUTIC_BASE_URL
 *
 * Conversiones configurables:
 * - NEXT_PUBLIC_GADS_FORM_LABEL → Label para conversión de formulario en Google Ads
 * - NEXT_PUBLIC_GADS_WHATSAPP_LABEL → Label para conversión de WhatsApp en Google Ads
 * - NEXT_PUBLIC_LINKEDIN_FORM_CONVERSION → ID conversión LinkedIn para forms
 * - NEXT_PUBLIC_LINKEDIN_WHATSAPP_CONVERSION → ID conversión LinkedIn para WhatsApp
 */
export function TrackingProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    tracker.init();
  }, []);

  return <>{children}</>;
}
