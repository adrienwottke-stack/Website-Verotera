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

        {/* V-Model lifecycle diagram */}
        <Reveal>
          <div className="relative rounded-3xl border border-brand-navy/8 bg-surface-light p-6 sm:p-10">
            <Image
              src="/images/v-model.png"
              alt="Agentische KI über den gesamten V-Modell-Entwicklungszyklus – von Product Innovation Ideation über System Architecture Design bis Verification & Validation und End-of-Life"
              width={1083}
              height={395}
              className="w-full h-auto"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
        </Reveal>

        {/* What agentic AI delivers in the early phases */}
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3">
            {DELIVERS.map((item) => (
              <span key={item} className="flex items-center gap-2.5 text-sm font-semibold text-brand-navy/70">
                <Check className="w-5 h-5 text-brand-cyan shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
}
