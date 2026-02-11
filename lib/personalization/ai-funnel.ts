/**
 * Sistema de Personalización Inteligente basado en Query Strings
 * Inspirado en técnicas de Google Optimize y Anthropic Claude
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
    if (keywords.includes('precio') || keywords.includes('costo') || keywords.includes('cotización')) {
      return 'high';
    }
    if (keywords.includes('mejor') || keywords.includes('vs') || keywords.includes('comparar')) {
      return 'comparing';
    }
    return 'problem_aware';
  }

  if (utmSource === 'linkedin' && utmMedium === 'social') {
    return 'problem_aware';
  }

  if (utmCampaign.includes('retargeting') || utmCampaign.includes('remarketing')) {
    return 'comparing';
  }

  return 'unknown';
}

export function detectIndustry(searchParams: URLSearchParams): Industry {
  const industry = searchParams.get('industry')?.toLowerCase();
  const utmCampaign = searchParams.get('utm_campaign')?.toLowerCase() || '';
  const keywords = (searchParams.get('keywords') || '').toLowerCase();

  if (industry === 'manufacturing' || industry === 'manufactura') return 'manufacturing';
  if (industry === 'logistics' || industry === 'logistica') return 'logistics';
  if (industry === 'retail' || industry === 'comercio') return 'retail';
  if (industry === 'services' || industry === 'servicios') return 'services';

  if (keywords.includes('manufactura') || keywords.includes('planta') || keywords.includes('producción')) {
    return 'manufacturing';
  }
  if (keywords.includes('logística') || keywords.includes('almacén') || keywords.includes('wms')) {
    return 'logistics';
  }
  if (keywords.includes('retail') || keywords.includes('tienda') || keywords.includes('e-commerce')) {
    return 'retail';
  }

  if (utmCampaign.includes('manufacturing') || utmCampaign.includes('automotive')) {
    return 'manufacturing';
  }
  if (utmCampaign.includes('logistics') || utmCampaign.includes('warehouse')) {
    return 'logistics';
  }

  return 'unknown';
}

export function detectBudget(searchParams: URLSearchParams): BudgetRange {
  const budget = searchParams.get('budget')?.toLowerCase();
  const utmCampaign = searchParams.get('utm_campaign')?.toLowerCase() || '';

  if (budget === 'starter' || budget === 'pequeño') return 'starter';
  if (budget === 'growth' || budget === 'medio') return 'growth';
  if (budget === 'enterprise' || budget === 'grande') return 'enterprise';

  if (utmCampaign.includes('enterprise') || utmCampaign.includes('corp')) {
    return 'enterprise';
  }
  if (utmCampaign.includes('smb') || utmCampaign.includes('pyme')) {
    return 'starter';
  }

  return 'unknown';
}

export function detectPersona(searchParams: URLSearchParams): PersonaType {
  const persona = searchParams.get('persona')?.toLowerCase();
  const utmContent = searchParams.get('utm_content')?.toLowerCase() || '';

  if (persona === 'coo' || persona === 'director-operaciones') return 'coo';
  if (persona === 'cto' || persona === 'director-ti') return 'cto';
  if (persona === 'manager' || persona === 'gerente') return 'manager';
  if (persona === 'technical' || persona === 'tecnico') return 'technical';

  if (utmContent.includes('coo') || utmContent.includes('operations')) return 'coo';
  if (utmContent.includes('cto') || utmContent.includes('tech')) return 'cto';

  return 'unknown';
}

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

export function generatePersonalizationStrategy(profile: VisitorProfile): PersonalizationStrategy {
  const { intent, persona } = profile;

  if (intent === 'high') {
    return {
      heroVariant: 'roi',
      ctaText: 'Solicitar Sesión Try & Buy Ahora',
      ctaVariant: 'primary',
      showPricing: true,
      emphasizeSection: 'trybuy',
      testimonialType: persona === 'cto' ? 'cto' : 'coo',
      urgencyLevel: 'high',
      autoScrollTo: '#try-buy-form',
    };
  }

  if (intent === 'problem_aware') {
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

export function getStoredVisitorProfile(): VisitorProfile | null {
  if (typeof window === 'undefined') return null;

  try {
    const stored = localStorage.getItem('visitor_profile');
    const timestamp = localStorage.getItem('visitor_profile_timestamp');

    if (!stored || !timestamp) return null;

    const age = Date.now() - parseInt(timestamp, 10);
    const maxAge = 30 * 24 * 60 * 60 * 1000;

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
