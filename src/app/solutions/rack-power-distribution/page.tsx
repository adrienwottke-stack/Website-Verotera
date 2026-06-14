import type { Metadata } from "next";
import Link from "next/link";
import { Server, ArrowRight, Gauge, Activity, Cable } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SplitFeature from "@/components/SplitFeature";
import PduFlowchart from "@/components/PduFlowchart";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Wide-Bandgap Technology for the Future of AI Data Centers",
  description:
    "The Full-GaN DC/DC converter is a key enabling technology for the Power Shelf, replacing silicon MOSFETs with Gallium Nitride (GaN) devices.",
  keywords: ["rack power distribution unit", "AI data center", "power shelf"],
};

const highlights = [
  {
    icon: Cable,
    title: "800 V DC-Verteilung",
    text: "Höhere Busspannung senkt Ströme und I²R-Verluste – kompaktere Stromschienen bei höherer Rack-Leistung.",
  },
  {
    icon: Gauge,
    title: "Power-Shelf-Effizienz",
    text: "Full-GaN-DC/DC-Wandler erreichen > 98 % Wirkungsgrad und ersetzen klassische Silizium-MOSFETs.",
  },
  {
    icon: Activity,
    title: "Aktives Lastmanagement",
    text: "Echtzeit-Telemetrie und Solid-State-Breaker priorisieren Lasten dynamisch und schalten sicher ab.",
  },
];

export default function RackPowerDistributionPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-brand-navy antialiased">
      <Header />

      <main className="flex-grow">
        <PageHero
          eyebrow="KI-Rechenzentren"
          icon={Server}
          title="Rack Power Distribution Unit (PDU)"
          subtitle="Der Full-GaN-DC/DC-Wandler ist eine Schlüsseltechnologie für das Power Shelf – er ersetzt konventionelle Silizium-MOSFETs durch Galliumnitrid (GaN) und ebnet den Weg zur 800-V-DC-Rack-Architektur."
          width="wide"
        />

        {/* Highlights */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {highlights.map((h, i) => (
                <Reveal key={h.title} delay={i * 0.1}>
                  <div className="glass-panel glass-panel-hover h-full p-7">
                    <div className="p-3 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan w-fit mb-4">
                      <h.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-brand-navy mb-2">{h.title}</h3>
                    <p className="text-sm text-brand-navy/60 leading-relaxed">{h.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Flowchart */}
        <section className="py-16 sm:py-20 bg-surface-light border-y border-brand-navy/8">
          <div className="max-w-7xl mx-auto px-6">
            <PduFlowchart />
          </div>
        </section>

        {/* Narrative features */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 space-y-24">
            <SplitFeature
              image="/images/ai-data-center-rack.png"
              alt="800 V DC Rack-Architektur"
              imageSide="right"
              eyebrow="Architektur"
              title="Vom Netz bis zum GPU-Shelf"
              body={[
                "Moderne KI-Racks ziehen Leistungen im Bereich von 100 kW und mehr. Eine 800-V-DC-Verteilung – wie in der NVIDIA-Rack-Architektur und bei OCP 2025 vorgestellt – reduziert die Verteilungsverluste drastisch gegenüber klassischen 48-V-Bussen.",
                "Ein Solid-State-Transformer wandelt die Netz-Wechselspannung mit GaN-Bauelementen direkt in 800 V DC. Die Smart PDU verteilt diese Energie verlustarm und intelligent an die GPU-Shelves.",
              ]}
              bullets={[
                "100 kW+ Rack-Leistung",
                "OCP-/NVIDIA-konforme 800-V-Architektur",
                "GaN-SST mit 98,5 % Wirkungsgrad",
                "Point-of-Load 48 V / 12 V",
              ]}
            />

            <SplitFeature
              image="/images/data-center-power.png"
              alt="Full-GaN Power Shelf"
              imageSide="left"
              eyebrow="Power Shelf"
              title="Full-GaN DC/DC-Wandler"
              body={[
                "Im Power Shelf ersetzen GaN-HEMTs die Silizium-MOSFETs. Topologien wie die 3-Level-Halbbrücke mit Matrix-Transformator schalten bei rund 1 MHz und erreichen Systemwirkungsgrade um 98 %.",
                "Die hohe Schaltfrequenz schrumpft die Magnetik und ermöglicht Leistungsdichten von mehreren tausend Watt pro Kubikzoll – entscheidend für die Packungsdichte im Rack.",
              ]}
              bullets={[
                "GaN-HEMTs statt Si-MOSFETs",
                "~1 MHz Schaltfrequenz",
                "Systemwirkungsgrad ~98 %",
                "Sehr hohe Leistungsdichte",
              ]}
            />
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-surface-light border-t border-brand-navy/8">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-navy mb-4">
              Planen Sie eine 800-V-DC-Rack-Infrastruktur?
            </h2>
            <p className="text-brand-navy/60 mb-8">
              Wir unterstützen Sie bei Auslegung, Wandlertopologie und Validierung Ihrer
              Power-Shelf-Lösung.
            </p>
            <Link
              href="/contacts"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-brand-navy text-white font-semibold text-sm hover:bg-brand-navy/90 transition-colors"
            >
              Kontakt aufnehmen <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
