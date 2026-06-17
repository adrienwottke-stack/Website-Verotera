import Image from "next/image";
import Reveal from "@/components/Reveal";
import BrandWatermark from "@/components/BrandWatermark";

const images = [
  {
    src: "/images/ai-data-center-header.png",
    alt: "KI-Rechenzentrum Header",
  },
  {
    src: "/images/ai-data-center-rack.png",
    alt: "KI-Rechenzentrum Rack Power Distribution",
  },
  {
    src: "/images/emobility-automotive.png",
    alt: "Elektromobilität und Automotive",
  },
  {
    src: "/images/green-hydrogen.png",
    alt: "Erneuerbare Energie und grüner Wasserstoff",
  },
  {
    src: "/images/robotics-production.png",
    alt: "Industrielle Automatisierung und Robotik",
  },
];

export default function ValueStatement() {
  return (
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
      <BrandWatermark position="bottom-right" tint="blue" size={460} opacity={0.05} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Reveal>
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-lg font-bold uppercase tracking-widest text-brand-cyan mb-4 block">
              Advanced Semiconductors. Applied Engineering. Sustainable Impact.
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy mb-8">
              Der Wert einer Technologie zeigt sich in dem, was sie ermöglicht.
            </h2>
            <p className="font-sans text-base text-brand-navy/60 leading-relaxed max-w-3xl mx-auto mb-6">
              Bei VEROTERA bemisst sich der Wert einer Technologie an dem, was sie
              ermöglicht. Wir überführen Wide-Bandgap-Bauelemente SiC &amp; GaN in
              robuste, effiziente Leistungssysteme und verbinden Bauteil-Know-how
              mit Applikations-Engineering, damit unsere Kunden Systeme entwickeln,
              die effizienter, zuverlässiger und nachhaltiger sind.
            </p>
            <p className="font-sans text-base sm:text-lg font-semibold text-brand-navy leading-relaxed max-w-3xl mx-auto">
              Vom Prototyp bis zur Serie treiben wir die Elektrifizierung von
              Mobilität, Industrie, Energie und Rechenzentren voran.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-5">
            {images.map((image) => (
              <div
                key={image.src}
                className="relative aspect-[4/3] overflow-hidden rounded-xl border border-brand-navy/8 bg-surface-light shadow-sm"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
