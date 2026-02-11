'use client';

import { useEffect, useState, useCallback } from 'react';
import {
  buildVisitorProfile,
  generatePersonalizationStrategy,
  saveVisitorProfile,
  getStoredVisitorProfile,
  type VisitorProfile,
  type PersonalizationStrategy,
} from './ai-funnel';
import { tracker } from '@/lib/tracking/universal-tracker';

/**
 * Hook: useAIFunnel
 *
 * Conecta los query strings de la URL (utm_source, utm_medium, utm_campaign,
 * intent, industry, persona, keywords, budget) con el sistema de personalización
 * y trackea el perfil del visitante en todas las plataformas configuradas.
 *
 * Ejemplos de URLs que activan personalización:
 *
 * Google Ads (CPC):
 *   ?utm_source=google-ads&utm_medium=cpc&utm_campaign=manufactura&keywords=erp,manufactura&intent=high
 *
 * Facebook Ads:
 *   ?utm_source=facebook&utm_medium=paid-social&utm_campaign=retargeting&industry=logistics&persona=coo
 *
 * LinkedIn Ads:
 *   ?utm_source=linkedin&utm_medium=sponsored&utm_campaign=enterprise&persona=cto&budget=enterprise
 *
 * Directo con parámetros de personalización:
 *   ?industry=manufacturing&persona=coo&intent=comparing
 *
 * El hook:
 * 1. Lee query strings de la URL
 * 2. Construye perfil del visitante (intent, industry, budget, persona)
 * 3. Genera estrategia de personalización (hero variant, CTA text, section emphasis)
 * 4. Guarda en localStorage (30 días de persistencia)
 * 5. Trackea el perfil en GTM, Meta Pixel, LinkedIn, Mautic
 * 6. Retorna { profile, strategy, getCTAText, getSectionEmphasis }
 */
export function useAIFunnel() {
  const [profile, setProfile] = useState<VisitorProfile | null>(null);
  const [strategy, setStrategy] = useState<PersonalizationStrategy | null>(null);

  useEffect(() => {
    // 1. Intentar recuperar perfil guardado
    const stored = getStoredVisitorProfile();
    if (stored) {
      setProfile(stored);
      setStrategy(generatePersonalizationStrategy(stored));
      return;
    }

    // 2. Construir nuevo perfil desde URL params
    const searchParams = new URLSearchParams(window.location.search);
    const newProfile = buildVisitorProfile(searchParams);

    // Solo guardar si hay info útil (no todo 'unknown')
    const hasData =
      newProfile.intent !== 'unknown' ||
      newProfile.industry !== 'unknown' ||
      newProfile.persona !== 'unknown' ||
      newProfile.source !== 'direct';

    if (hasData) {
      saveVisitorProfile(newProfile);
      setProfile(newProfile);
      const newStrategy = generatePersonalizationStrategy(newProfile);
      setStrategy(newStrategy);

      // 3. Trackear perfil en todas las plataformas
      tracker.trackVisitorProfile({
        intent: newProfile.intent,
        industry: newProfile.industry,
        persona: newProfile.persona,
        budget: newProfile.budget,
        source: newProfile.source,
        medium: newProfile.medium,
        campaign: newProfile.campaign,
      });
    }
  }, []);

  /**
   * Retorna el texto del CTA personalizado o el fallback
   */
  const getCTAText = useCallback(
    (fallback: string) => {
      if (!strategy) return fallback;
      return strategy.ctaText;
    },
    [strategy]
  );

  /**
   * Retorna true si la sección debe ser enfatizada
   */
  const isSectionEmphasized = useCallback(
    (section: 'problem' | 'solution' | 'trybuy' | 'socialproof') => {
      if (!strategy) return false;
      return strategy.emphasizeSection === section;
    },
    [strategy]
  );

  /**
   * Retorna el nivel de urgencia para el visitante
   */
  const getUrgencyLevel = useCallback(() => {
    if (!strategy) return 'medium';
    return strategy.urgencyLevel;
  }, [strategy]);

  return {
    profile,
    strategy,
    getCTAText,
    isSectionEmphasized,
    getUrgencyLevel,
    isPersonalized: !!strategy,
  };
}
