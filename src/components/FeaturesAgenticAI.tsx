"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import VModelFunnel from "./VModelFunnel";
import { useLang } from "@/components/LangProvider";
import type { Lang } from "@/lib/i18n";

const COPY: Record<
  Lang,
  {
    teaser: string;
    headline: string;
    body: string;
    lockup: string;
    boxTitle: string;
    boxLead: string;
    boxBody: string;
    closing: string;
  }
> = {
  de: {
    teaser: "Früher. Belegbar. Belastbar.",
    headline: "Technologieentscheidungen in der Konzeptphase",
    body:
      "In der frühen Konzeptphase werden Anforderungen und Randbedingungen strukturiert, implizite Annahmen und Zielkonflikte sichtbar gemacht und SiC/GaN-Technologiepfade gegen abgeleitete Kriterien bewertet, mit expliziter Unsicherheitskennzeichnung. Ergebnis ist eine belegte Entscheidungsgrundlage mit Trade-off-Bewertung, Annahmen- und Risikoübersicht. Die Entscheidung, und das Konzept, verantwortet der Ingenieur.",
    lockup: "AI-Enhanced Engineering",
    boxTitle: "Frühe Konzept- und Architekturphase",
    boxLead: "Hier setzt AI-enhanced engineering an",
    boxBody:
      "Optionen, Randbedingungen und Entscheidungen ableiten und prüfen → strukturierte Ergebnisse liefern.",
    closing:
      "Modelle berechnen, Regeln entscheiden. Im Urteil spielt kein Sprachmodell eine Rolle.",
  },
  en: {
    teaser: "Earlier. Documented. Dependable.",
    headline: "Technology decisions in the concept phase",
    body:
      "In the early concept phase, requirements and constraints are structured, implicit assumptions and conflicting goals are surfaced, and SiC/GaN technology paths are assessed against derived criteria, with explicit uncertainty labelling. The result is an evidenced decision basis with a trade-off assessment and an overview of assumptions and risks. The decision, and the concept, remain the engineer's responsibility.",
    lockup: "AI-Enhanced Engineering",
    boxTitle: "Early concept and architecture phase",
    boxLead: "This is where AI-enhanced engineering comes in",
    boxBody:
      "Derive and check options, constraints and decisions → deliver structured results.",
    closing:
      "Models compute, rules decide. No language model in the verdict.",
  },
};

export default function FeaturesAgenticAI() {
  const lang = useLang();
  const t = COPY[lang];

  return (
    <section id="features" className="relative py-24 sm:py-32 bg-white overflow-hidden">
      {/* Decorative blurred background light */}
      <div className="absolute left-1/4 top-0 w-[420px] h-[420px] bg-brand-cyan/[0.06] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header — Teaser → Headline → Body */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-4 block">
            {t.teaser}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy leading-tight mb-6">
            {t.headline}
          </h2>
          <p className="font-sans text-base sm:text-lg text-brand-navy/60 leading-relaxed max-w-3xl mx-auto">
            {t.body}
          </p>
        </div>

        {/* Lockup über dem Diagramm (#185) — stand vorher im Diagramm selbst */}
        <Reveal>
          <div className="flex items-center justify-center gap-3 mb-8 sm:mb-10">
            <Image
              src="/images/v-signet-transparent.png"
              alt=""
              width={40}
              height={40}
              className="h-9 w-auto sm:h-10"
            />
            <h3 className="font-display text-2xl sm:text-3xl font-bold italic tracking-tight text-brand-navy leading-tight">
              <span className="text-brand-cyan">AI</span>
              {t.lockup.slice(2)}
            </h3>
          </div>
        </Reveal>

        {/* Interactive vector V-model funnel (V-signet at the centre) */}
        <Reveal delay={0.12}>
          <VModelFunnel />
        </Reveal>

        {/* Einordnungs-Kasten (#185) */}
        <Reveal delay={0.24}>
          <div className="mt-12 sm:mt-14 mx-auto max-w-2xl p-6 rounded-2xl border border-brand-navy/8 bg-white shadow-sm text-center">
            <h3 className="font-display text-lg font-bold text-brand-navy leading-tight mb-2">
              {t.boxTitle}
            </h3>
            <p className="font-sans text-sm font-semibold text-brand-cyan mb-3">
              {t.boxLead}
            </p>
            <p className="font-sans text-sm text-brand-navy/60 leading-relaxed">
              {t.boxBody}
            </p>
          </div>
        </Reveal>

        {/* Fazit (#189) */}
        <Reveal delay={0.36}>
          <p className="mt-10 font-sans text-base sm:text-lg font-semibold text-brand-navy leading-relaxed max-w-3xl mx-auto text-center">
            {t.closing}
          </p>
        </Reveal>

      </div>
    </section>
  );
}
