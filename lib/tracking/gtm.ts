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

export function trackFormSubmit(data: Omit<FormSubmitEvent, 'event'>): void {
  trackEvent({
    event: 'form_submit',
    ...data,
  });
}

export function trackCTAClick(data: Omit<CTAClickEvent, 'event'>): void {
  trackEvent({
    event: 'cta_click',
    ...data,
  });
}

export function trackSectionView(data: Omit<SectionViewEvent, 'event'>): void {
  trackEvent({
    event: 'section_view',
    ...data,
  });
}

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

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
