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

export const metadata: Metadata = {
  title: 'Arquitectura de Software Centauro | Scram Consulting',
  description:
    'Software de clase mundial desplegado en semanas. Modelo Try & Buy con transparencia radical. Arquitectura Centauro: IA + Ingenieros Senior.',
  keywords: [
    'desarrollo software empresarial',
    'arquitectura centauro',
    'scram consulting',
    'try and buy',
    'glass box',
    'vibe working',
  ],
  openGraph: {
    title: 'Arquitectura de Software Centauro - Scram Consulting',
    description: 'Detenga el Secuestro Técnico. Software de Clase Mundial en Semanas.',
    url: 'https://arquitectura-software.scram2k.com',
    siteName: 'Scram Consulting',
    locale: 'es_MX',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="es-MX" className={`${asap.variable} ${cabin.variable}`}>
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
