"use client";

import Reveal from "@/components/Reveal";
import BrandWatermark from "@/components/BrandWatermark";
import { useLang } from "@/components/LangProvider";
import type { Lang } from "@/lib/i18n";

const COPY: Record<
  Lang,
  { eyebrow: string; statLabel: string; source: string; body: string }
> = {
  de: {
    eyebrow: "Die Welt wird elektrisch – mit beispieloser Geschwindigkeit.",
    statLabel: "Anstieg des Strombedarfs bis 2035",
    source: "IEA World Energy Outlook 2025",
    body: "angetrieben durch Elektrofahrzeuge, Wärmepumpen, KI-Rechenzentren und die Industrie",
  },
  en: {
    eyebrow: "The world is going electric — at unprecedented speed.",
    statLabel: "Growth in electricity demand by 2035",
    source: "IEA World Energy Outlook 2025",
    body: "driven by electric vehicles, heat pumps, AI data centers and industry",
  },
};

export default function ElectrifiedWorld() {
  const lang = useLang();
  const t = COPY[lang];

  return (
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
      <BrandWatermark position="top-right" tint="blue" size={460} opacity={0.05} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Reveal>
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-4 block">
              {t.eyebrow}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy mb-10">
              The Electrified World
            </h2>

            <p className="font-display text-7xl sm:text-8xl font-extrabold text-brand-cyan leading-none mb-6">
              +40%
            </p>

            <p className="font-display text-3xl sm:text-4xl font-bold text-brand-navy mb-3">
              {t.statLabel}
            </p>

            <p className="font-sans text-sm text-brand-navy/40 mb-4">
              {t.source}
            </p>

            <p className="font-sans text-base text-brand-navy/60 leading-relaxed max-w-2xl mx-auto">
              {t.body}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
