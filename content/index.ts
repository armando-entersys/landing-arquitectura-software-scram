import type { Locale } from '@/lib/i18n/config';
import type { SiteContent } from './types';
import { es } from './es';
import { en } from './en';
import { is } from './is';

const dictionary: Record<Locale, SiteContent> = { es, en, is };

export function getContent(locale: Locale): SiteContent {
  return dictionary[locale];
}
