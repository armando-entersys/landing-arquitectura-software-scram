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
import { useContent } from '@/lib/i18n/ContentContext';

export function useAIFunnel() {
  const { locale } = useContent();
  const [profile, setProfile] = useState<VisitorProfile | null>(null);
  const [strategy, setStrategy] = useState<PersonalizationStrategy | null>(null);

  useEffect(() => {
    // 1. Intentar recuperar perfil guardado
    const stored = getStoredVisitorProfile();
    if (stored) {
      setProfile(stored);
      setStrategy(generatePersonalizationStrategy(stored, locale));
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
      const newStrategy = generatePersonalizationStrategy(newProfile, locale);
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
  }, [locale]);

  const getCTAText = useCallback(
    (fallback: string) => {
      if (!strategy) return fallback;
      return strategy.ctaText;
    },
    [strategy]
  );

  const isSectionEmphasized = useCallback(
    (section: 'problem' | 'solution' | 'trybuy' | 'socialproof') => {
      if (!strategy) return false;
      return strategy.emphasizeSection === section;
    },
    [strategy]
  );

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
