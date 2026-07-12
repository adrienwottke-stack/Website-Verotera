import { NextResponse, type NextRequest } from "next/server";

// German is served at the unprefixed URLs (rewritten internally to /de),
// English lives under /en. Direct /de requests redirect to the clean URL
// so every page has exactly one canonical address per language.
const NON_DEFAULT_LANGS = ["en"];
const DEFAULT_LANG = "de";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    NON_DEFAULT_LANGS.some(
      (lang) => pathname === `/${lang}` || pathname.startsWith(`/${lang}/`)
    )
  ) {
    return;
  }

  if (pathname === `/${DEFAULT_LANG}` || pathname.startsWith(`/${DEFAULT_LANG}/`)) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(`/${DEFAULT_LANG}`.length) || "/";
    return NextResponse.redirect(url, 308);
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${DEFAULT_LANG}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    // Skip Next internals, API routes, the Sentry tunnel and any file with an
    // extension (favicon.ico, sitemap.xml, robots.txt, /images/*, fonts, ...)
    "/((?!_next|api|monitoring|.*\\..*).*)",
  ],
};
