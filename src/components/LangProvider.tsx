"use client";

import { createContext, useContext } from "react";
import { DEFAULT_LANG, localePath, type Lang } from "@/lib/i18n";

const LangContext = createContext<Lang>(DEFAULT_LANG);

export function LangProvider({
  lang,
  children,
}: {
  lang: Lang;
  children: React.ReactNode;
}) {
  return <LangContext.Provider value={lang}>{children}</LangContext.Provider>;
}

/** Current locale, provided by the [lang] layout. */
export function useLang(): Lang {
  return useContext(LangContext);
}

/** Locale-aware href helper for client components. */
export function useLocalePath(): (href: string) => string {
  const lang = useLang();
  return (href: string) => localePath(lang, href);
}
