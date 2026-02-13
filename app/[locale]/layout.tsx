import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { locales, localeTags, ogLocales, isValidLocale } from '@/lib/i18n/config';
import type { Locale } from '@/lib/i18n/config';
import { getContent } from '@/content';
import { ContentProvider } from '@/lib/i18n/ContentContext';

const baseUrl = 'https://arquitectura-software.scram2k.com';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isValidLocale(rawLocale)) return {};
  const locale = rawLocale as Locale;
  const content = getContent(locale);
  const localePrefix = locale === 'es' ? '' : `/${locale}`;
  const pageUrl = `${baseUrl}${localePrefix}`;

  return {
    title: content.metadata.title,
    description: content.metadata.description,
    alternates: {
      canonical: pageUrl,
      languages: Object.fromEntries(
        locales.map((l) => [
          localeTags[l],
          `${baseUrl}${l === 'es' ? '' : `/${l}`}`,
        ])
      ),
    },
    openGraph: {
      title: content.metadata.ogTitle,
      description: content.metadata.ogDescription,
      url: pageUrl,
      siteName: 'Scram Consulting',
      locale: ogLocales[locale],
      type: 'website',
      images: [
        {
          url: `${baseUrl}/logo.png`,
          width: 400,
          height: 120,
          alt: 'Scram Consulting - Agentic Architect',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: content.metadata.twitterTitle,
      description: content.metadata.twitterDescription,
      images: [`${baseUrl}/logo.png`],
    },
  };
}

function StructuredData({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const localePrefix = locale === 'es' ? '' : `/${locale}`;
  const pageUrl = `${baseUrl}${localePrefix}`;

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Scram Consulting',
    alternateName: 'Agentic Architect',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description: content.metadata.description,
    foundingDate: '2010',
    areaServed: { '@type': 'Country', name: 'México' },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+52-221-106-5056',
      contactType: 'sales',
      availableLanguage: ['Spanish', 'English', 'Icelandic'],
    },
    sameAs: ['https://github.com/armando-entersys'],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: content.metadata.title,
    description: content.metadata.description,
    url: pageUrl,
    inLanguage: localeTags[locale],
    isPartOf: { '@type': 'WebSite', name: 'Scram Consulting', url: baseUrl },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
    </>
  );
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isValidLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const content = getContent(locale);

  return (
    <>
      <StructuredData locale={locale} />
      <ContentProvider content={content} locale={locale}>
        {children}
      </ContentProvider>
    </>
  );
}
