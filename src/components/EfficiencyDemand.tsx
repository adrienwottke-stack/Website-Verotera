import Reveal from "@/components/Reveal";
import BrandWatermark from "@/components/BrandWatermark";

const cards = [
  {
    value: "+300%",
    label:
      "Forderung nach höherer Leistungsdichte bei Wechselrichtern für Elektrofahrzeuge (2015 → 2025)",
  },
  {
    value: "-60%",
    label: "Gewichtsreduktion",
  },
  {
    value: "-40%",
    label:
      "Geringere Energieverluste bei SiC/GaN im Vergleich zu herkömmlichem Silizium",
  },
];

export default function EfficiencyDemand() {
  return (
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
      <BrandWatermark position="bottom-left" tint="navy" size={460} opacity={0.05} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Reveal>
          <div className="text-center max-w-4xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-4 block">
              Mehr Leistung. Weniger Bauraum. Weniger Wärme. Die neue
              Effizienzanforderung.
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy">
              Wachsender Energiebedarf stellt neue Anforderungen an das Design der
              Leistungselektronik
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16">
          {cards.map((card, index) => (
            <Reveal key={card.value} delay={index * 0.12}>
              <div className="text-center h-full flex flex-col items-center justify-start">
                <p className="font-display text-5xl sm:text-6xl font-extrabold text-brand-blue mb-4">
                  {card.value}
                </p>
                <p className="font-sans text-sm sm:text-base text-brand-navy/70 leading-relaxed max-w-xs">
                  {card.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="font-display text-2xl sm:text-3xl font-bold text-brand-navy text-center max-w-4xl mx-auto mt-16 sm:mt-20 leading-snug">
            Silizium hat seine physikalischen Grenzen erreicht – nur Halbleiter mit
            großer Bandlücke (SiC &amp; GaN) können diese Anforderungen erfüllen.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
