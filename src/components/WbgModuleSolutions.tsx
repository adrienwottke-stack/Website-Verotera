import Image from "next/image";
import Reveal from "./Reveal";
import BrandWatermark from "./BrandWatermark";

/**
 * Slide 10 — Hocheffiziente WBG Leistungsmodullösungen.
 * White section with a centered header above an image-left / navy-panel-right
 * split, following the WhyVerotera navy-panel idiom.
 */
export default function WbgModuleSolutions() {
  return (
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
      <BrandWatermark position="top-right" tint="navy" size={480} opacity={0.045} />

      <div className="max-w-[1800px] mx-auto px-6 lg:px-10 relative z-10">
        {/* Centered header */}
        <Reveal className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan block mb-4">
            Vom Chip bis zum System – Technologiekompetenz für die elektrifizierte Welt.
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy">
            Hocheffiziente WBG Leistungsmodullösungen für eine nachhaltige Zukunft
          </h2>
        </Reveal>

        {/* Single unified layout: image left + text right, no background container */}
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Image half */}
            <div className="relative lg:col-span-5 min-h-[260px] lg:min-h-[480px] rounded-2xl overflow-hidden border border-brand-navy/8">
              <Image
                src="/images/ai-data-center-header.png"
                alt="VEROTERA Chip und Wafer – vom Wafer über das Leistungsmodul bis zum Rechenzentrum"
                fill
                quality={90}
                className="object-cover object-[20%_center]"
                sizes="100vw"
              />
            </div>

            {/* Text half */}
            <div className="lg:col-span-7 flex flex-col justify-center py-6">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-brand-navy mb-6 leading-tight">
                Innovative Wide-Bandgap-Halbleiterlösungen
              </h3>
              <p className="text-brand-navy/70 text-sm sm:text-base leading-relaxed mb-4">
                Verotera steht für ein neues Verständnis von WBG-Halbleitertechnologie:
                präzise, systemdurchdacht und konsequent auf reale Anwendungen ausgerichtet.
                Unser Team vereint jahrelange Praxiserfahrung aus Wechselrichterentwicklung,
                Halbleiterdesign und Systemintegration – und denkt stets vom Gesamtsystem her.
                Von fortschrittlichen WBG-Technologien über innovative Packaging-Lösungen bis
                hin zu hocheffizienten Gesamtsystemen – wir entwickeln Lösungen, die nicht nur
                technisch überzeugen, sondern in der Praxis den Unterschied machen.
              </p>
              <p className="text-brand-navy/70 text-sm sm:text-base leading-relaxed">
                Diese einzigartige Positionierung ermöglicht es, Integrationskosten zu senken,
                Entwicklungszyklen zu beschleunigen und höhere Systemeffizienz zu liefern. Mit
                starken Branchennetzwerken und ausgewiesener Glaubwürdigkeit in der OEM- und
                Halbleiterwelt bauen wir die Brücke zwischen Nachfrage und Innovation – für eine
                schnelle Validierung, strategische Partnerschaften und eine zielgerichtete
                Markteinführung.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
