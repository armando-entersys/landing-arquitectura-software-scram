import type { Metadata } from 'next';
import { Asap, Cabin } from 'next/font/google';
import './globals.css';

// SCRAM Brand Fonts
const asap = Asap({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-asap',
});

const cabin = Cabin({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cabin',
});

const baseUrl = 'https://arquitectura-software.scram2k.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Agentic Architect | Software Empresarial | Scram Consulting',
    template: '%s | Scram Consulting',
  },
  description:
    'Software empresarial desplegado en semanas, no en meses. IA + Ingenieros Senior con presupuesto cerrado. Manufactura, logística y distribución en todo México. Metodología Try & Buy.',
  keywords: [
    'desarrollo software empresarial México',
    'software a la medida manufactura',
    'sistema de gestión logística',
    'ERP personalizado México',
    'integración Oracle SAP',
    'desarrollo software industrial',
    'consultora software México',
    'agentic architect',
    'scram consulting',
    'software presupuesto cerrado',
    'try and buy software',
    'glass box desarrollo',
    'WMS México',
    'sistema gestión almacén',
    'app logística México',
  ],
  authors: [{ name: 'Scram Consulting', url: baseUrl }],
  creator: 'Scram Consulting',
  publisher: 'Scram Consulting',
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: 'Software Empresarial en Semanas | Scram Consulting',
    description:
      'Agentic Architect: IA + Ingenieros Senior. Presupuesto cerrado, transparencia total. Manufactura, logística y distribución en todo México.',
    url: baseUrl,
    siteName: 'Scram Consulting',
    locale: 'es_MX',
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
    title: 'Software Empresarial en Semanas | Scram Consulting',
    description:
      'IA + Ingenieros Senior. Presupuesto cerrado. Manufactura, logística y distribución en todo México.',
    images: [`${baseUrl}/logo.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
  category: 'technology',
};

// JSON-LD Structured Data
function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Scram Consulting',
    alternateName: 'Agentic Architect',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description:
      'Firma mexicana de ingeniería de software empresarial. Desarrollo a la medida para manufactura, logística y distribución con presupuesto cerrado.',
    foundingDate: '2010',
    areaServed: {
      '@type': 'Country',
      name: 'México',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+52-221-106-5056',
      contactType: 'sales',
      availableLanguage: ['Spanish'],
    },
    sameAs: [
      'https://github.com/armando-entersys',
    ],
    knowsAbout: [
      'Desarrollo de software empresarial',
      'Integración de sistemas ERP',
      'Software para manufactura',
      'Sistemas de gestión logística',
      'Aplicaciones móviles industriales',
      'Inteligencia artificial aplicada',
      'Oracle Cloud integration',
      'CFDI facturación electrónica',
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Desarrollo de Software Empresarial',
    provider: {
      '@type': 'Organization',
      name: 'Scram Consulting',
    },
    areaServed: {
      '@type': 'Country',
      name: 'México',
    },
    description:
      'Agentic Architect: IA + Ingenieros Senior desplegando software empresarial para manufactura, logística y distribución. Presupuesto cerrado. Metodología Try & Buy.',
    offers: {
      '@type': 'Offer',
      description: 'Diagnóstico técnico y blueprint de arquitectura',
      price: '0',
      priceCurrency: 'MXN',
      availability: 'https://schema.org/InStock',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de Ingeniería de Software',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'ERP y Sistemas de Gestión',
            description: 'Desarrollo de ERP a la medida con integración Oracle, SAP y facturación CFDI',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Sistemas de Gestión Logística',
            description: 'WMS, optimización de rutas con IA, tracking en tiempo real, apps móviles offline-first',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Plataformas de Onboarding y Certificación',
            description: 'Sistemas de capacitación digital con video, exámenes y certificación QR',
          },
        },
      ],
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Cómo funciona el modelo Try & Buy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Realizamos un diagnóstico técnico y te presentamos un blueprint de arquitectura con presupuesto cerrado. Si nuestra propuesta hace sentido, procedemos. Si no, te quedas con el análisis completo sin compromiso.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué pasa si el proyecto no cumple mis expectativas?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Solo avanzamos cuando estás satisfecho con los entregables de cada fase. Sin letras chicas, sin compromisos forzados. El código es tuyo desde el día uno.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Trabajan presencial o remoto?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Operamos 100% remoto con arquitectos e ingenieros senior distribuidos en diferentes estados de México. Si el proyecto requiere presencia física, nos desplazamos a donde sea necesario.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cómo garantizan que no van a desaparecer a mitad del proyecto?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Protocolo Glass Box: tienes acceso en tiempo real a repositorios y tableros de gestión. Ves cada commit, cada avance, cada obstáculo. Es imposible desaparecer cuando el cliente ve todo.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué incluye el soporte post-lanzamiento?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Los primeros 3 meses de soporte y ajustes están incluidos. Después puedes contratar mantenimiento mensual o administrarlo tú mismo — el código es 100% tuyo, documentado y sin dependencias ocultas.',
        },
      },
    ],
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Agentic Architect | Software Empresarial | Scram Consulting',
    description: 'Software empresarial desplegado en semanas con presupuesto cerrado para manufactura, logística y distribución en México.',
    url: baseUrl,
    inLanguage: 'es-MX',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Scram Consulting',
      url: baseUrl,
    },
    about: {
      '@type': 'Thing',
      name: 'Desarrollo de Software Empresarial en México',
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', '.font-body'],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="es-MX" className={`${asap.variable} ${cabin.variable}`}>
      <head>
        <StructuredData />
        <link rel="canonical" href={baseUrl} />
        <meta name="geo.region" content="MX" />
        <meta name="geo.placename" content="México" />
        <meta name="theme-color" content="#FF6B00" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className="font-body antialiased">
        {gtmId && (
          <>
            <script
              id="gtm-script"
              dangerouslySetInnerHTML={{
                __html: `
                  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','${gtmId}');
                `,
              }}
            />
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
              />
            </noscript>
          </>
        )}
        {children}
      </body>
    </html>
  );
}
