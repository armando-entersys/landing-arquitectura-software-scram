export const locales = ['es', 'en', 'is'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'es';

export const localeNames: Record<Locale, string> = {
  es: 'Español',
  en: 'English',
  is: 'Íslenska',
};

/** BCP-47 tags used in <html lang> and hreflang */
export const localeTags: Record<Locale, string> = {
  es: 'es-MX',
  en: 'en-US',
  is: 'is-IS',
};

/** OpenGraph locale strings */
export const ogLocales: Record<Locale, string> = {
  es: 'es_MX',
  en: 'en_US',
  is: 'is_IS',
};

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
