import Image from "next/image";
import { Check } from "lucide-react";
import Reveal from "./Reveal";
import BrandWatermark from "./BrandWatermark";

const DELIVERS = [
  "Anforderungsanalyse",
  "Ideation",
  "Safety & Security Konzepte",
  "Design-Exploration",
  "Strukturierte Ergebnisse",
];

export default function FeaturesAgenticAI() {
  return (
    <section id="features" className="relative py-24 sm:py-32 bg-white overflow-hidden">
      {/* Decorative blurred background light */}
      <div className="absolute left-1/4 top-0 w-[420px] h-[420px] bg-brand-cyan/[0.06] rounded-full blur-[130px] pointer-events-none" />
      <BrandWatermark position="top-right" tint="blue" size={460} opacity={0.05} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-3 block">
            Schneller. Präziser. Besser. Produktentwicklung mit agentischer KI
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy">
            Orchestrierte Intelligenz für das Systems Engineering
          </h2>
        </div>

        {/* Left: power module + delivers · Right: V-model lifecycle diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* Left column — power module image + what agentic AI delivers */}
          <Reveal className="lg:col-span-4 xl:col-span-3 order-2 lg:order-1">
            <div className="relative w-full max-w-[260px] mx-auto lg:mx-0 aspect-[4/3] rounded-xl overflow-hidden border border-brand-navy/8 bg-surface-light mb-8">
              <Image
                src="/images/power-module-black.png"
                alt="VEROTERA Wide-Bandgap Leistungsmodul"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 260px, 260px"
              />
            </div>
            <ul className="space-y-3 list-none m-0 p-0">
              {DELIVERS.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-brand-cyan shrink-0" />
                  <span className="text-sm sm:text-base font-semibold text-brand-navy/75">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Right column — V-model funnel graphic */}
          <Reveal delay={0.1} className="lg:col-span-8 xl:col-span-9 order-1 lg:order-2">
            <Image
              src="/images/v-model.png"
              alt="Agentische KI über den gesamten V-Modell-Entwicklungszyklus – von Product Innovation Ideation über System Architecture Design bis Verification & Validation und End-of-Life"
              width={1083}
              height={395}
              className="w-full h-auto"
              sizes="(max-width: 1024px) 100vw, 75vw"
            />
          </Reveal>

        </div>
      </div>
    </section>
  );
}
