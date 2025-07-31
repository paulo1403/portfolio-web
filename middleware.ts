import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

const locales = ['en', 'es'];
const defaultLocale = 'en';

function getLocale(request: NextRequest): string {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // The negotiator library expects a plain object for headers, not a Headers object.
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  // Match the user's preferred languages with our available locales.
  return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the path already contains a supported locale.
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return;
  }

  // If no locale is present, determine the best locale from the request headers
  // and redirect to the corresponding path with the locale prefix.
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;

  // For example, a request to /about will be redirected to /en/about.
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // This matcher is designed to skip paths for Next.js internal files (_next)
    // and static assets (files with an extension like .png, .jpg, .ico).
    // This ensures that only page routes are processed by the middleware for i18n.
    '/((?!_next|.*\\..*).*)'
  ],
};
