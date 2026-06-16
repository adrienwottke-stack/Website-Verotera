import Reveal from "@/components/Reveal";
import BrandWatermark from "@/components/BrandWatermark";

export default function ElectrifiedWorld() {
  return (
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
      <BrandWatermark position="top-right" tint="blue" size={460} opacity={0.05} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Reveal>
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-4 block">
              Die Welt wird elektrisch – mit beispieloser Geschwindigkeit.
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy mb-10">
              The Electrified World
            </h2>

            <p className="font-display text-7xl sm:text-8xl font-extrabold text-brand-cyan leading-none mb-6">
              +40%
            </p>

            <p className="font-display text-3xl sm:text-4xl font-bold text-brand-navy mb-3">
              Anstieg des Strombedarfs bis 2035
            </p>

            <p className="font-sans text-sm text-brand-navy/40 mb-4">
              IEA World Energy Outlook 2025
            </p>

            <p className="font-sans text-base text-brand-navy/60 leading-relaxed max-w-2xl mx-auto">
              angetrieben durch Elektrofahrzeuge, Wärmepumpen, KI-Rechenzentren und
              die Industrie
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
