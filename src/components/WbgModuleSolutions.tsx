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

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Centered header */}
        <Reveal className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan block mb-4">
            Vom Chip bis zum System – Technologiekompetenz für die elektrifizierte Welt.
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy">
            Hocheffiziente WBG Leistungsmodullösungen für eine nachhaltige Zukunft
          </h2>
        </Reveal>

        {/* Split: image left, navy panel right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Image */}
          <Reveal className="lg:col-span-6">
            <div className="relative h-full min-h-[320px] lg:min-h-[480px] rounded-2xl overflow-hidden">
              <Image
                src="/images/power-module-sic.png"
                alt="VEROTERA Wide-Bandgap Leistungsmodul"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>

          {/* Navy panel */}
          <Reveal delay={0.1} className="lg:col-span-6">
            <div className="bg-brand-navy rounded-2xl p-10 sm:p-14 h-full flex flex-col justify-center">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-6 leading-tight">
                Innovative Wide-Bandgap-Halbleiterlösungen
              </h3>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-4">
                Verotera steht für ein neues Verständnis von WBG-Halbleitertechnologie:
                präzise, systemdurchdacht und konsequent auf reale Anwendungen ausgerichtet.
                Unser Team vereint jahrelange Praxiserfahrung aus Wechselrichterentwicklung,
                Halbleiterdesign und Systemintegration – und denkt stets vom Gesamtsystem her.
                Von fortschrittlichen WBG-Technologien über innovative Packaging-Lösungen bis
                hin zu hocheffizienten Gesamtsystemen – wir entwickeln Lösungen, die nicht nur
                technisch überzeugen, sondern in der Praxis den Unterschied machen.
              </p>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                Diese einzigartige Positionierung ermöglicht es, Integrationskosten zu senken,
                Entwicklungszyklen zu beschleunigen und höhere Systemeffizienz zu liefern. Mit
                starken Branchennetzwerken und ausgewiesener Glaubwürdigkeit in der OEM- und
                Halbleiterwelt bauen wir die Brücke zwischen Nachfrage und Innovation – für eine
                schnelle Validierung, strategische Partnerschaften und eine zielgerichtete
                Markteinführung.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
