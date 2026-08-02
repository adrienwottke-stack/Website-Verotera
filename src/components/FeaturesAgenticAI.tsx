"use client";

import Reveal from "./Reveal";
import VModelFunnel from "./VModelFunnel";
import { useLang } from "@/components/LangProvider";
import type { Lang } from "@/lib/i18n";

const COPY: Record<
  Lang,
  { teaser: string; headline: string; body: string }
> = {
  de: {
    teaser: "Früher. Belegbar. Belastbar.",
    headline: "Produktentwicklung mit agentischer KI",
    body:
      "Orchestrierte Intelligenz für das Systems Engineering: Unsere KI-Agenten begleiten den gesamten Entwicklungszyklus – von der Anforderungsanalyse über Ideation, Safety- & Security-Konzepte und Design-Exploration bis zu strukturierten Ergebnissen.",
  },
  en: {
    teaser: "Earlier. Documented. Dependable.",
    headline: "Product development with agentic AI",
    body:
      "Orchestrated intelligence for systems engineering: our AI agents support the entire development cycle — from requirements analysis through ideation, safety & security concepts and design exploration to structured deliverables.",
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

        {/* Interactive vector V-model funnel (V-signet at the centre) */}
        <Reveal>
          <VModelFunnel />
        </Reveal>

      </div>
    </section>
  );
}
