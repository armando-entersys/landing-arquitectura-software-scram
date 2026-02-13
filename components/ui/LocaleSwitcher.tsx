'use client';

import { useContent } from '@/lib/i18n/ContentContext';
import { locales, localeNames, type Locale } from '@/lib/i18n/config';

export function LocaleSwitcher() {
  const { locale: current } = useContent();

  function switchLocale(target: Locale) {
    if (target === current) return;
    document.cookie = `NEXT_LOCALE=${target};path=/;max-age=${60 * 60 * 24 * 365}`;
    const href = target === 'es' ? '/' : `/${target}`;
    window.location.href = href;
  }

  return (
    <div className="flex items-center gap-1">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          className={`px-3 py-1.5 rounded-pill text-xs font-semibold transition-all duration-200 ${
            loc === current
              ? 'bg-scram-primary text-white'
              : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
          }`}
        >
          {localeNames[loc]}
        </button>
      ))}
    </div>
  );
}
