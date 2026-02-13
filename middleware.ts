import { NextResponse, type NextRequest } from 'next/server';
import { locales, defaultLocale, type Locale } from '@/lib/i18n/config';

const PUBLIC_FILE = /\.(.*)$/;

function getPreferredLocale(request: NextRequest): Locale {
  // 1. Cookie takes priority
  const cookie = request.cookies.get('NEXT_LOCALE')?.value;
  if (cookie && locales.includes(cookie as Locale)) {
    return cookie as Locale;
  }

  // 2. Accept-Language header
  const acceptLang = request.headers.get('accept-language') || '';
  for (const part of acceptLang.split(',')) {
    const lang = part.split(';')[0]?.trim().toLowerCase() ?? '';
    if (lang.startsWith('is')) return 'is';
    if (lang.startsWith('en')) return 'en';
    if (lang.startsWith('es')) return 'es';
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip API routes, Next internals, and static files
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname === '/favicon.png' ||
    pathname === '/favicon.ico' ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml' ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Check if the path already starts with a locale prefix
  const pathnameLocale = locales.find(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (pathnameLocale) {
    // Already has a locale prefix — rewrite to [locale] route
    return NextResponse.next();
  }

  // No locale prefix — detect and route
  const preferred = getPreferredLocale(request);

  if (preferred === defaultLocale) {
    // Spanish: rewrite internally to /es (URL stays as /)
    const url = request.nextUrl.clone();
    url.pathname = `/es${pathname}`;
    return NextResponse.rewrite(url);
  }

  // Non-default: redirect 302 to /<locale> path, preserving query strings
  const url = request.nextUrl.clone();
  url.pathname = `/${preferred}${pathname}`;
  // search is already part of nextUrl
  return NextResponse.redirect(url, 302);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|images|favicon).*)'],
};
