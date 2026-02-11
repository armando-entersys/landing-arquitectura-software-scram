/**
 * Universal Tracking Layer - Scram Consulting
 * Arquitectura: Single entry point → Multiple platform dispatch
 *
 * Flujo: Evento → UniversalTracker → [GTM, Meta Pixel, LinkedIn, Google Ads, Mautic CRM]
 *
 * Configuración: Todos los IDs se cargan desde variables de entorno.
 * Solo se disparan los pixels que tengan ID configurado.
 */

// ============================================================
// TIPOS
// ============================================================

export interface TrackingConfig {
  gtmId?: string;
  googleAdsId?: string;
  metaPixelId?: string;
  linkedinPartnerId?: string;
  mauticBaseUrl?: string;
  mauticFormId?: string;
}

export interface TrackingEvent {
  event: string;
  category: 'lead' | 'engagement' | 'conversion' | 'navigation';
  action: string;
  label?: string;
  value?: number;
  currency?: string;
  metadata?: Record<string, string | number | boolean>;
}

export interface LeadData {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  employees?: string;
  budget?: string;
  source?: string;
  medium?: string;
  campaign?: string;
  intent?: string;
  industry?: string;
  persona?: string;
}

// ============================================================
// CONFIGURACIÓN GLOBAL
// ============================================================

function getConfig(): TrackingConfig {
  if (typeof window === 'undefined') return {};
  return {
    gtmId: process.env.NEXT_PUBLIC_GTM_ID || undefined,
    googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || undefined,
    metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || undefined,
    linkedinPartnerId: process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID || undefined,
    mauticBaseUrl: process.env.NEXT_PUBLIC_MAUTIC_BASE_URL || undefined,
    mauticFormId: process.env.NEXT_PUBLIC_MAUTIC_FORM_ID || undefined,
  };
}

// ============================================================
// GOOGLE TAG MANAGER
// ============================================================

function pushToDataLayer(event: Record<string, unknown>) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    ...event,
    timestamp: new Date().toISOString(),
    page_path: window.location.pathname,
    page_url: window.location.href,
    page_search: window.location.search,
  });
}

export function initGTM(gtmId: string) {
  if (typeof window === 'undefined' || !gtmId) return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
}

// ============================================================
// META (FACEBOOK) PIXEL
// ============================================================

export function initMetaPixel(pixelId: string) {
  if (typeof window === 'undefined' || !pixelId) return;
  /* eslint-disable */
  (function(f: any,b: any,e: any,v: any,n?: any,t?: any,s?: any){
    if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)
  })(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
  /* eslint-enable */
  window.fbq('init', pixelId);
  window.fbq('track', 'PageView');
}

function trackMetaEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === 'undefined' || !window.fbq) return;
  if (params) {
    window.fbq('track', eventName, params);
  } else {
    window.fbq('track', eventName);
  }
}

// ============================================================
// LINKEDIN INSIGHT TAG
// ============================================================

export function initLinkedIn(partnerId: string) {
  if (typeof window === 'undefined' || !partnerId) return;
  window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
  window._linkedin_data_partner_ids.push(partnerId);

  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js';
  const first = document.getElementsByTagName('script')[0];
  if (first?.parentNode) {
    first.parentNode.insertBefore(script, first);
  } else {
    document.head.appendChild(script);
  }
}

function trackLinkedInConversion(conversionId?: string) {
  if (typeof window === 'undefined' || !window.lintrk) return;
  if (conversionId) {
    window.lintrk('track', { conversion_id: conversionId });
  }
}

// ============================================================
// GOOGLE ADS CONVERSION
// ============================================================

function trackGoogleAdsConversion(
  conversionId: string,
  conversionLabel: string,
  value?: number
) {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', 'conversion', {
    send_to: `${conversionId}/${conversionLabel}`,
    value: value || 0,
    currency: 'MXN',
  });
}

// ============================================================
// MAUTIC CRM
// ============================================================

export function initMautic(baseUrl: string) {
  if (typeof window === 'undefined' || !baseUrl) return;
  const script = document.createElement('script');
  script.innerHTML = `
    (function(w,d,t,u,n,a,m){w['MauticTrackingObject']=n;
    w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments)},a=d.createElement(t),
    m=d.getElementsByTagName(t)[0];a.async=1;a.src=u;m.parentNode.insertBefore(a,m)
    })(window,document,'script','${baseUrl}/mtc.js','mt');
    mt('send', 'pageview');
  `;
  document.head.appendChild(script);
}

function trackMauticEvent(eventName: string, data?: Record<string, string>) {
  if (typeof window === 'undefined' || !window.mt) return;
  window.mt('send', 'event', { name: eventName, ...data });
}

async function sendLeadToMautic(lead: LeadData) {
  const config = getConfig();
  if (!config.mauticBaseUrl) return;

  try {
    // Mautic form submission via tracking pixel
    if (window.mt) {
      window.mt('send', 'pageview', {
        email: lead.email,
        firstname: lead.name?.split(' ')[0] || '',
        lastname: lead.name?.split(' ').slice(1).join(' ') || '',
        phone: lead.phone,
        company: lead.company,
        tags: [lead.industry, lead.intent, lead.source].filter(Boolean).join(','),
      });
    }
  } catch (error) {
    console.error('[Mautic] Error sending lead:', error);
  }
}

// ============================================================
// UNIVERSAL TRACKER - ENTRY POINT
// ============================================================

export class UniversalTracker {
  private static instance: UniversalTracker;
  private initialized = false;
  private config: TrackingConfig = {};

  static getInstance(): UniversalTracker {
    if (!UniversalTracker.instance) {
      UniversalTracker.instance = new UniversalTracker();
    }
    return UniversalTracker.instance;
  }

  /**
   * Inicializa todos los pixels/tags configurados.
   * Llamar una sola vez desde el layout o provider.
   */
  init() {
    if (this.initialized || typeof window === 'undefined') return;
    this.config = getConfig();

    if (this.config.gtmId) initGTM(this.config.gtmId);
    if (this.config.metaPixelId) initMetaPixel(this.config.metaPixelId);
    if (this.config.linkedinPartnerId) initLinkedIn(this.config.linkedinPartnerId);
    if (this.config.mauticBaseUrl) initMautic(this.config.mauticBaseUrl);

    this.initialized = true;
  }

  /**
   * Trackea un evento genérico en TODAS las plataformas configuradas
   */
  track(event: TrackingEvent) {
    // 1. GTM (siempre - es el orquestador principal)
    pushToDataLayer({
      event: event.event,
      event_category: event.category,
      event_action: event.action,
      event_label: event.label || '',
      event_value: event.value || 0,
      ...event.metadata,
    });

    // 2. Meta Pixel - mapear a eventos estándar de Meta
    if (event.category === 'lead') {
      trackMetaEvent('Lead', { content_name: event.action, value: event.value });
    } else if (event.category === 'conversion') {
      trackMetaEvent('CompleteRegistration', { content_name: event.action });
    } else if (event.category === 'engagement') {
      trackMetaEvent('ViewContent', { content_name: event.action });
    }

    // 3. Mautic
    trackMauticEvent(event.event, {
      action: event.action,
      label: event.label || '',
    });
  }

  /**
   * CTA Click - trackea en todas las plataformas
   */
  trackCTA(ctaText: string, location: string, destination?: string) {
    this.track({
      event: 'cta_click',
      category: 'engagement',
      action: ctaText,
      label: location,
      metadata: {
        cta_text: ctaText,
        cta_location: location,
        cta_destination: destination || '',
      },
    });
  }

  /**
   * Scroll depth / Section view
   */
  trackSectionView(sectionName: string, scrollDepth: number) {
    this.track({
      event: 'section_view',
      category: 'engagement',
      action: sectionName,
      value: scrollDepth,
      metadata: {
        section_name: sectionName,
        scroll_depth: scrollDepth,
      },
    });
  }

  /**
   * WhatsApp click
   */
  trackWhatsAppClick(location: string) {
    this.track({
      event: 'whatsapp_click',
      category: 'lead',
      action: 'whatsapp_initiated',
      label: location,
    });

    // Google Ads conversion específica para WhatsApp
    if (this.config.googleAdsId) {
      trackGoogleAdsConversion(
        this.config.googleAdsId,
        process.env.NEXT_PUBLIC_GADS_WHATSAPP_LABEL || '',
        100
      );
    }

    // LinkedIn conversion
    trackLinkedInConversion(process.env.NEXT_PUBLIC_LINKEDIN_WHATSAPP_CONVERSION);
  }

  /**
   * Form submission - envía a TODAS las plataformas + CRM
   */
  async trackFormSubmit(formName: string, lead: LeadData) {
    // 1. GTM + todas las plataformas
    this.track({
      event: 'form_submit',
      category: 'conversion',
      action: formName,
      label: lead.email || '',
      value: 1,
      metadata: {
        form_name: formName,
        lead_company: lead.company || '',
        lead_employees: lead.employees || '',
        lead_budget: lead.budget || '',
        lead_industry: lead.industry || '',
        lead_intent: lead.intent || '',
        lead_source: lead.source || '',
        lead_medium: lead.medium || '',
        lead_campaign: lead.campaign || '',
      },
    });

    // 2. Meta Pixel - Lead event
    trackMetaEvent('Lead', {
      content_name: formName,
      content_category: lead.industry || 'general',
    });

    // 3. Google Ads conversion
    if (this.config.googleAdsId) {
      trackGoogleAdsConversion(
        this.config.googleAdsId,
        process.env.NEXT_PUBLIC_GADS_FORM_LABEL || '',
        500
      );
    }

    // 4. LinkedIn conversion
    trackLinkedInConversion(process.env.NEXT_PUBLIC_LINKEDIN_FORM_CONVERSION);

    // 5. Mautic CRM - enviar lead completo
    await sendLeadToMautic(lead);
  }

  /**
   * Trackea el perfil del visitante del embudo IA
   */
  trackVisitorProfile(profile: {
    intent: string;
    industry: string;
    persona: string;
    budget: string;
    source: string;
    medium: string;
    campaign: string;
  }) {
    pushToDataLayer({
      event: 'visitor_profiled',
      category: 'engagement' as const,
      action: 'ai_funnel_profile',
      visitor_intent: profile.intent,
      visitor_industry: profile.industry,
      visitor_persona: profile.persona,
      visitor_budget: profile.budget,
      utm_source: profile.source,
      utm_medium: profile.medium,
      utm_campaign: profile.campaign,
    });

    // Mautic - tag the visitor
    trackMauticEvent('visitor_profiled', {
      intent: profile.intent,
      industry: profile.industry,
      persona: profile.persona,
    });
  }

  /**
   * Extrae UTM params de la URL actual
   */
  static getUTMParams(): Record<string, string> {
    if (typeof window === 'undefined') return {};
    const params = new URLSearchParams(window.location.search);
    return {
      utm_source: params.get('utm_source') || 'direct',
      utm_medium: params.get('utm_medium') || 'none',
      utm_campaign: params.get('utm_campaign') || '',
      utm_content: params.get('utm_content') || '',
      utm_term: params.get('utm_term') || '',
      gclid: params.get('gclid') || '',
      fbclid: params.get('fbclid') || '',
      li_fat_id: params.get('li_fat_id') || '',
    };
  }
}

// Singleton export
export const tracker = UniversalTracker.getInstance();

// ============================================================
// TYPE DECLARATIONS PARA WINDOW
// ============================================================

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    fbq: (...args: unknown[]) => void;
    _linkedin_data_partner_ids: string[];
    lintrk: (action: string, data: Record<string, unknown>) => void;
    mt: (...args: unknown[]) => void;
  }
}
