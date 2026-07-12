"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BrandWatermark from "@/components/BrandWatermark";
import { useLang, useLocalePath } from "@/components/LangProvider";
import type { Lang } from "@/lib/i18n";

const COPY: Record<
  Lang,
  { eyebrow: string; title: string; body: string; home: string; contact: string }
> = {
  de: {
    eyebrow: "Fehler 404",
    title: "Diese Seite wurde nicht gefunden",
    body:
      "Die angeforderte Seite existiert nicht oder wurde verschoben. Über die Startseite erreichen Sie alle Lösungen, Applikationen und Ressourcen.",
    home: "Zur Startseite",
    contact: "Kontakt aufnehmen",
  },
  en: {
    eyebrow: "Error 404",
    title: "This page could not be found",
    body:
      "The requested page does not exist or has been moved. From the homepage you can reach all solutions, applications and resources.",
    home: "Back to homepage",
    contact: "Contact us",
  },
};

export default function NotFound() {
  const lang = useLang();
  const p = useLocalePath();
  const t = COPY[lang];

  return (
    <div className="flex flex-col min-h-screen bg-white text-brand-navy antialiased">
      <Header />

      <main className="flex-grow">
        <section className="relative flex min-h-[70vh] items-center pt-32 pb-20 sm:pt-40 bg-surface-light border-b border-brand-navy/8 overflow-hidden">
          <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-brand-cyan/[0.06] rounded-full blur-[120px] pointer-events-none" />
          <BrandWatermark position="top-right" tint="blue" size={460} opacity={0.05} />

          <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-cyan/25 bg-brand-cyan/5 text-brand-cyan text-xs font-semibold uppercase tracking-widest mb-6">
              {t.eyebrow}
            </span>

            <p className="font-display text-7xl sm:text-8xl font-bold tracking-tight text-brand-navy/15 mb-4">
              404
            </p>

            <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy mb-5">
              {t.title}
            </h1>

            <p className="font-sans text-base sm:text-lg leading-relaxed text-brand-navy/60 mb-10">
              {t.body}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href={p("/")}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-brand-navy text-white font-semibold text-sm hover:bg-brand-navy/90 transition-colors"
              >
                {t.home}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={p("/contacts")}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-lg border border-brand-navy/15 text-brand-navy font-semibold text-sm hover:border-brand-cyan hover:text-brand-cyan transition-colors"
              >
                {t.contact}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
