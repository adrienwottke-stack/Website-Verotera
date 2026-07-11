"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import VModelFunnel from "./VModelFunnel";
import { useLang } from "@/components/LangProvider";
import type { Lang } from "@/lib/i18n";

const COPY: Record<
  Lang,
  { delivers: string[]; moduleAlt: string; teaser: string; headline: string; body: string }
> = {
  de: {
    delivers: [
      "Anforderungsanalyse",
      "Ideation",
      "Safety & Security Konzepte",
      "Design-Exploration",
      "Strukturierte Ergebnisse",
    ],
    moduleAlt: "VEROTERA Wide-Bandgap Leistungsmodul",
    teaser: "Schneller. Präziser. Besser.",
    headline: "Produktentwicklung mit agentischer KI",
    body:
      "Orchestrierte Intelligenz für das Systems Engineering: Unsere KI-Agenten begleiten den gesamten Entwicklungszyklus – von der Anforderungsanalyse über Ideation, Safety- & Security-Konzepte und Design-Exploration bis zu strukturierten Ergebnissen.",
  },
  en: {
    delivers: [
      "Requirements analysis",
      "Ideation",
      "Safety & security concepts",
      "Design exploration",
      "Structured deliverables",
    ],
    moduleAlt: "VEROTERA wide-bandgap power module",
    teaser: "Faster. More precise. Better.",
    headline: "Product development with agentic AI",
    body:
      "Orchestrated intelligence for systems engineering: our AI agents support the entire development cycle — from requirements analysis through ideation, safety & security concepts and design exploration to structured deliverables.",
  },
};

/** Power-module thumbnail + the agentic-AI deliverables list. */
function ModuleAndDelivers({
  className = "",
  delivers,
  moduleAlt,
  showImage = true,
}: {
  className?: string;
  delivers: string[];
  moduleAlt: string;
  showImage?: boolean;
}) {
  return (
    <div className={className}>
      {showImage && (
        <div className="relative w-[130px] aspect-[4/3] rounded-lg overflow-hidden border border-brand-navy/8 bg-surface-light shadow-sm mb-5">
          <Image
            src="/images/power-module-black.png"
            alt={moduleAlt}
            fill
            className="object-cover"
            sizes="130px"
          />
        </div>
      )}
      <ul className="space-y-2 list-none m-0 p-0">
        {delivers.map((item) => (
          <li key={item} className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan shrink-0" />
            <span className="text-sm font-semibold text-brand-navy/80">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

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

        {/* Interactive vector V-model funnel (V-signet at the centre); module + delivers overlaid on the left */}
        <Reveal>
          <div className="relative">
            <VModelFunnel />

            {/* Desktop: floated into the funnel's empty lower-left */}
            <ModuleAndDelivers
              className="hidden lg:block absolute left-0 bottom-[6%] z-10"
              delivers={t.delivers}
              moduleAlt={t.moduleAlt}
            />
          </div>
        </Reveal>

        {/* Mobile / tablet: stacked below the funnel */}
        <ModuleAndDelivers
          className="lg:hidden mt-10 max-w-xs mx-auto"
          delivers={t.delivers}
          moduleAlt={t.moduleAlt}
          showImage={false}
        />

      </div>
    </section>
  );
}
