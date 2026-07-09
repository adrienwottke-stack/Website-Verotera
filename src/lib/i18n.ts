export const LANGS = ["de", "en"] as const;

export type Lang = (typeof LANGS)[number];

export const DEFAULT_LANG: Lang = "de";

export function hasLang(value: string): value is Lang {
  return (LANGS as readonly string[]).includes(value);
}

/**
 * Prefixes an internal href with the locale segment.
 * German lives at the unprefixed URLs, English under /en.
 */
export function localePath(lang: Lang, href: string): string {
  if (lang === DEFAULT_LANG) return href;
  if (href === "/") return `/${lang}`;
  // "/#contact" → "/en#contact" (avoid a trailing slash before the hash)
  if (href.startsWith("/#")) return `/${lang}${href.slice(1)}`;
  return `/${lang}${href}`;
}
