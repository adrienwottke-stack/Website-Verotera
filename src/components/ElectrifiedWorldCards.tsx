"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";

const CARDS = [
  {
    label: "Elektromobilität",
    description:
      "Bis 2030 werden mehr als 300 Millionen Elektrofahrzeuge erwartet. Jedes Elektrofahrzeug benötigt etwa drei- bis fünfmal mehr Leistungselektronik als ein Fahrzeug mit Verbrennungsmotor.",
    image: "/images/e-mobility.png",
  },
  {
    label: "Industrielle Elektrifizierung",
    description:
      "Auf die Industrie entfallen 40 % des weltweiten Energieverbrauchs. Die Elektrifizierung von Motoren und Antrieben schreitet immer schneller voran.",
    image: "/images/industrial-automation.png",
  },
  {
    label: "Erneuerbare Energien",
    description:
      "Erneuerbare Energien sollen bis 2035 mehr als 55 % des weltweiten Strombedarfs decken.",
    image: "/images/renewable-energy.png",
  },
  {
    label: "KI Rechenzentren",
    description:
      "Der weltweite Strombedarf von Rechenzentren wird sich bis 2030 verdoppeln. Die Energieeffizienz ist die wichtigste Planungsvorgabe.",
    image: "/images/ai-data-center.png",
  },
];

export default function ElectrifiedWorldCards() {
  return (
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CARDS.map((card, index) => (
            <Reveal key={card.label} delay={index * 0.1}>
              <div className="relative h-72 rounded-2xl overflow-hidden group shadow-lg">
                {/* Background image */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={card.image}
                    alt={card.label}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Dark gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/80 via-[#020617]/50 to-[#020617]/20" />
                </div>

                {/* Two-column inner layout over the image */}
                <div className="relative z-10 h-full grid grid-cols-1 sm:grid-cols-2 items-center gap-4 p-7 sm:p-8">
                  {/* Label (left) */}
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight group-hover:text-brand-cyan transition-colors duration-300">
                    {card.label}
                  </h3>

                  {/* Description (right) */}
                  <p className="font-sans text-sm text-slate-200 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
