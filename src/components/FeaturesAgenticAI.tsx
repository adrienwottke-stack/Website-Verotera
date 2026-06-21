import Image from "next/image";
import Reveal from "./Reveal";

const DELIVERS = [
  "Anforderungsanalyse",
  "Ideation",
  "Safety & Security Konzepte",
  "Design-Exploration",
  "Strukturierte Ergebnisse",
];

/** Power-module thumbnail + the agentic-AI deliverables list. */
function ModuleAndDelivers({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <div className="relative w-[130px] aspect-[4/3] rounded-lg overflow-hidden border border-brand-navy/8 bg-surface-light shadow-sm mb-5">
        <Image
          src="/images/power-module-black.png"
          alt="VEROTERA Wide-Bandgap Leistungsmodul"
          fill
          className="object-cover"
          sizes="130px"
        />
      </div>
      <ul className="space-y-2 list-none m-0 p-0">
        {DELIVERS.map((item) => (
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
  return (
    <section id="features" className="relative py-24 sm:py-32 bg-white overflow-hidden">
      {/* Decorative blurred background light */}
      <div className="absolute left-1/4 top-0 w-[420px] h-[420px] bg-brand-cyan/[0.06] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header — bold tagline as title, orchestration line below (matches reference) */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy leading-tight">
            Schneller. Präziser. Besser. Produktentwicklung mit agentischer KI
          </h2>
          <p className="mt-4 font-sans text-lg sm:text-xl text-brand-navy/60">
            Orchestrierte Intelligenz für das Systems Engineering
          </p>
        </div>

        {/* V-model funnel hero (V-signet at the centre); module + delivers overlaid on the left */}
        <Reveal>
          <div className="relative">
            <Image
              src="/images/v-model-agentic.png"
              alt="Agentische KI über den gesamten V-Modell-Entwicklungszyklus – von Product Innovation Ideation über System Architecture Design bis Verification & Validation und End-of-Life"
              width={4294}
              height={1507}
              className="w-full h-auto"
              sizes="(max-width: 1280px) 100vw, 1180px"
            />

            {/* Desktop: floated into the funnel's empty lower-left */}
            <ModuleAndDelivers className="hidden lg:block absolute left-0 top-[40%]" />
          </div>
        </Reveal>

        {/* Mobile / tablet: stacked below the funnel */}
        <ModuleAndDelivers className="lg:hidden mt-10 max-w-xs mx-auto" />

      </div>
    </section>
  );
}
