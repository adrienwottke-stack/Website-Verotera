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
    headline: "Technologieentscheidungen in der Konzeptphase",
    body:
      "In der sehr frühen Konzeptphase werden Systemanforderungen und Randbedingungen normalisiert, implizite Annahmen und Zielkonflikte identifiziert und SiC/GaN-Technologiepfade gegen abgeleitete Kriterien bewertet – qualitativ bis semi-quantitativ, mit expliziter Unsicherheitskennzeichnung. Ausgabe ist ein System Design Concept samt Trade-off-Bewertung, Annahmen- und Risikoübersicht. Die Entscheidungsverantwortung verbleibt beim Ingenieur.",
  },
  en: {
    teaser: "Earlier. Documented. Dependable.",
    headline: "Technology decisions in the concept phase",
    body:
      "In the early concept phase, the impact of decisions is highest and the available data is most limited. System requirements and constraints are normalized, implicit assumptions and conflicting objectives are identified, and SiC/GaN technology paths are assessed against derived criteria – qualitatively to semi-qualitatively, with explicit flagging of uncertainty. The output is a System Design Concept with a trade-off assessment and an overview of assumptions and risks. Decision responsibility remains with the engineer.",
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
