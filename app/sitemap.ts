import { MetadataRoute } from 'next';
import { locales, localeTags } from '@/lib/i18n/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://arquitectura-software.scram2k.com';
  const now = new Date().toISOString();

  const languages = Object.fromEntries(
    locales.map((l) => [
      localeTags[l],
      `${baseUrl}${l === 'es' ? '' : `/${l}`}`,
    ])
  );

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: { languages },
    },
    ...locales
      .filter((l) => l !== 'es')
      .map((l) => ({
        url: `${baseUrl}/${l}`,
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: 1.0,
        alternates: { languages },
      })),
  ];
}
