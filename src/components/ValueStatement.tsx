"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import { useLang } from "@/components/LangProvider";
import type { Lang } from "@/lib/i18n";

const COPY: Record<
  Lang,
  {
    eyebrow: string;
    headline: string;
    body: string;
    alts: string[];
  }
> = {
  de: {
    eyebrow: "Unsere Mission",
    headline: "Der Wert einer Technologie zeigt sich in dem, was sie ermöglicht.",
    body:
      "Bei VEROTERA überführen wir Wide-Bandgap-Bauelemente SiC & GaN in robuste, effiziente Leistungssysteme und verbinden Bauteil-Know-how mit Applikations-Engineering, damit unsere Kunden Systeme entwickeln, die effizienter, zuverlässiger und nachhaltiger sind.",
    alts: [
      "Erneuerbare Energien – Wind- und Solarkraft",
      "KI-Rechenzentrum Rack Power Distribution",
      "Elektromobilität und Automotive",
      "Industrielle Automatisierung und Robotik",
    ],
  },
  en: {
    eyebrow: "Our Mission",
    headline: "The value of a technology lies in what it makes possible.",
    body:
      "At VEROTERA, we turn wide-bandgap SiC & GaN devices into robust, efficient power systems — combining component know-how with application engineering so our customers can build systems that are more efficient, more reliable and more sustainable.",
    alts: [
      "Renewable energy – wind and solar power",
      "AI data center rack power distribution",
      "E-mobility and automotive",
      "Industrial automation and robotics",
    ],
  },
};

const IMAGE_SOURCES = [
  "/images/aa_renewable_new.png",
  "/images/aa_data_center_new.png",
  "/images/aa_emobility_new.png",
  "/images/aa_robotics_new.png",
];

export default function ValueStatement() {
  const lang = useLang();
  const t = COPY[lang];

  return (
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden shadow-[0_-8px_30px_rgba(0,0,0,0.12)]">

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Reveal>
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-4 block">
              {t.eyebrow}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy leading-tight mb-6">
              {t.headline}
            </h2>
            <p className="font-sans text-base sm:text-lg text-brand-navy/60 leading-relaxed max-w-3xl mx-auto">
              {t.body}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4">
            {IMAGE_SOURCES.map((src, i) => (
              <div
                key={src}
                className="relative aspect-[4/3] overflow-hidden rounded-xl border border-brand-navy/8 bg-surface-light shadow-sm"
              >
                <Image
                  src={src}
                  alt={t.alts[i]}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                  quality={90}
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
