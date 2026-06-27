"use client";

import Image from "next/image";
import { RotateCcw } from "lucide-react";

const CARDS = [
  {
    label: "Elektromobilität",
    stat: "300 Mio.",
    statLabel: "Elektrofahrzeuge bis 2030",
    description:
      "Jedes Elektrofahrzeug benötigt etwa drei- bis fünfmal mehr Leistungselektronik als ein Fahrzeug mit Verbrennungsmotor.",
    image: "/images/e-mobility.png",
  },
  {
    label: "Industrielle Elektrifizierung",
    stat: "40 %",
    statLabel: "des weltweiten Energieverbrauchs",
    description:
      "Die Elektrifizierung von Motoren und Antrieben schreitet immer schneller voran.",
    image: "/images/industrial-automation.png",
  },
  {
    label: "Erneuerbare Energien",
    stat: "55 %",
    statLabel: "des Strombedarfs bis 2035",
    description:
      "Erneuerbare Energien sollen bis 2035 mehr als 55 % des weltweiten Strombedarfs decken.",
    image: "/images/renewable-energy.png",
  },
  {
    label: "KI Rechenzentren",
    stat: "×2",
    statLabel: "Strombedarf bis 2030",
    description:
      "Der weltweite Strombedarf von Rechenzentren wird sich bis 2030 verdoppeln. Die Energieeffizienz ist die wichtigste Planungsvorgabe.",
    image: "/images/ai-data-center.png",
  },
];

function FlipCard({ card }: { card: (typeof CARDS)[0] }) {
  return (
    <div className="h-72 [perspective:1000px] group cursor-pointer">
      <div className="relative w-full h-full transition-transform duration-700 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

        {/* ── Front: full bleed image + title ── */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg [backface-visibility:hidden]">
          <Image
            src={card.image}
            alt={card.label}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 1280px) 50vw, 640px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-[#020617]/25 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-between p-7">
            <div className="self-end flex items-center gap-1.5 text-white/50 text-xs font-sans transition-opacity duration-300 group-hover:opacity-0">
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Hover</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
              {card.label}
            </h3>
          </div>
        </div>

        {/* ── Back: accent stripe + stat + text ── */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#234554]">
          {/* Cyan left border stripe */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-cyan rounded-l-2xl" />

          <div className="h-full flex flex-col justify-center pl-8 pr-7 py-8">
            {/* Stat anchor */}
            <div className="mb-5">
              <p className="font-display text-5xl font-extrabold text-brand-cyan leading-none">
                {card.stat}
              </p>
              <p className="font-sans text-xs text-white/50 mt-1 tracking-wide">
                {card.statLabel}
              </p>
            </div>

            {/* Divider */}
            <div className="w-10 h-px bg-white/20 mb-5" />

            {/* Label + description */}
            <h3 className="font-display text-base font-bold text-white mb-2 leading-snug">
              {card.label}
            </h3>
            <p className="font-sans text-sm leading-relaxed text-white/70">
              {card.description}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function ElectrifiedWorldCards() {
  return (
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ── Desktop: 2×2 flip-card grid ── */}
        <div className="hidden md:grid grid-cols-2 gap-6">
          {CARDS.map((card) => (
            <FlipCard key={card.label} card={card} />
          ))}
        </div>

        {/* ── Mobile: horizontal snap carousel ── */}
        <div
          className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6"
          style={{ scrollbarWidth: "none" }}
        >
          {CARDS.map((card) => (
            <div
              key={card.label}
              className="snap-center flex-shrink-0 w-[85vw] rounded-2xl overflow-hidden shadow-lg"
            >
              {/* Image */}
              <div className="relative h-44">
                <Image
                  src={card.image}
                  alt={card.label}
                  fill
                  className="object-cover"
                  sizes="85vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/50 to-transparent" />
              </div>
              {/* Text panel with stripe */}
              <div className="bg-[#234554] flex">
                <div className="w-1 flex-shrink-0 bg-brand-cyan" />
                <div className="p-6">
                  <p className="font-display text-3xl font-extrabold text-brand-cyan leading-none mb-0.5">
                    {card.stat}
                  </p>
                  <p className="font-sans text-xs text-white/50 mb-4">
                    {card.statLabel}
                  </p>
                  <h3 className="font-display text-sm font-bold text-white mb-1.5">
                    {card.label}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed text-white/70">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll-indicator dots (mobile only) */}
        <div className="md:hidden flex justify-center gap-2 mt-5">
          {CARDS.map((card) => (
            <div
              key={card.label}
              className="w-1.5 h-1.5 rounded-full bg-brand-navy/20"
            />
          ))}
        </div>

      </div>
    </section>
  );
}
