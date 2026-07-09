"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLang, useLocalePath } from "@/components/LangProvider";

/** Locale-aware "back to homepage" link used in the PageHero. */
export default function BackHomeLink() {
  const lang = useLang();
  const p = useLocalePath();

  return (
    <Link
      href={p("/")}
      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-navy/60 hover:text-brand-cyan transition-colors group focus:outline-none"
    >
      <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
      {lang === "en" ? "Back to homepage" : "Zurück zur Startseite"}
    </Link>
  );
}
