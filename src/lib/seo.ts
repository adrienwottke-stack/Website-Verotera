import type { Metadata } from "next";
import { DEFAULT_LANG, type Lang } from "./i18n";

export const SITE_URL = "https://verotera.com";
export const SITE_NAME = "VEROTERA";

/**
 * Public absolute URL of a page. German lives at the unprefixed URLs,
 * English under /en (see src/proxy.ts and src/app/sitemap.ts).
 */
export function pageUrl(lang: Lang, path: string): string {
  const suffix = path === "/" ? "" : path;
  return lang === DEFAULT_LANG ? `${SITE_URL}${suffix}` : `${SITE_URL}/en${suffix}`;
}

/**
 * schema.org Organization markup. Data mirrors the imprint
 * (src/app/[lang]/legal/imprint/page.tsx) — keep both in sync.
 * Serialized with < escaped so it is safe for dangerouslySetInnerHTML.
 */
export function organizationJsonLd(): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "VEROTERA GmbH",
    url: SITE_URL,
    logo: `${SITE_URL}/images/verotera-wordmark.png`,
    email: "info@verotera.com",
    telephone: "+49 173 1878630",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Böhlerstraße 1",
      postalCode: "40667",
      addressLocality: "Meerbusch",
      addressCountry: "DE",
    },
    founder: {
      "@type": "Person",
      name: "Aly Mashaly",
    },
    sameAs: ["https://www.linkedin.com/company/verotera"],
  }).replace(/</g, "\\u003c");
}

export type PageMeta = {
  title: string;
  description: string;
  keywords?: string[];
};

/**
 * Complete per-page metadata: title/description plus canonical, hreflang
 * alternates and Open Graph/Twitter fields pointing at the page's own URL.
 * `path` is the language-neutral route (e.g. "/solutions/wbg-power-modules").
 */
export function buildMetadata(lang: Lang, path: string, meta: PageMeta): Metadata {
  const url = pageUrl(lang, path);
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: url,
      languages: {
        de: pageUrl("de", path),
        en: pageUrl("en", path),
        "x-default": pageUrl(DEFAULT_LANG, path),
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url,
      siteName: SITE_NAME,
      locale: lang === "en" ? "en_US" : "de_DE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}
