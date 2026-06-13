import type { Metadata } from "next";
import Link from "next/link";
import { Car, ArrowRight, Gauge, BatteryCharging, Wind, TrendingDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SplitFeature from "@/components/SplitFeature";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Electrification of Commercial Vehicles – Next Gen Drive Technology",
  description:
    "Silicon Carbide (SiC) and Gallium Nitride (GaN) are accelerating the transition to electrified commercial vehicles",
  keywords: ["powertrain", "aux-inverter", "onboard-charging", "commercial vehicles", "TCO"],
};

const highlights = [
  {
    icon: Gauge,
    title: "Antriebsstrang",
    text: "SiC-Traktionsinverter senken die Verluste um bis zu 44 % gegenüber Si-IGBT – mehr Reichweite bei gleicher Batterie.",
  },
  {
    icon: BatteryCharging,
    title: "Megawatt-Laden",
    text: "Hochspannungs-SiC ermöglicht das Megawatt Charging System (MCS) für Nutzfahrzeuge mit minimalen Ladeverlusten.",
  },
  {
    icon: Wind,
    title: "Hilfsinverter (ePTO)",
    text: "Effiziente Auxiliary-Inverter für Nebenaggregate und elektrische Power-Take-Off-Systeme erhöhen die Gesamteffizienz.",
  },
  {
    icon: TrendingDown,
    title: "TCO-Reduktion",
    text: "Höhere Effizienz, geringeres Gewicht und einfachere Kühlung senken die Total Cost of Ownership über die Fahrzeuglebensdauer.",
  },
];

export default function AutomotiveEmobilityPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-brand-navy antialiased">
      <Header />

      <main className="flex-grow">
        <PageHero
          eyebrow="Automotive & E-Mobilität"
          icon={Car}
          title="Elektrifizierung von Nutzfahrzeugen"
          subtitle="Siliziumkarbid (SiC) und Galliumnitrid (GaN) beschleunigen den Umstieg auf elektrifizierte Nutzfahrzeuge – von Antriebssträngen über Onboard-Charging bis zu Hilfsaggregaten."
          width="wide"
        />

        {/* Highlights */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 0.08}>
                <div className="glass-panel glass-panel-hover h-full p-7">
                  <div className="p-3 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan w-fit mb-4">
                    <h.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-base font-bold text-brand-navy mb-2">{h.title}</h3>
                  <p className="text-sm text-brand-navy/60 leading-relaxed">{h.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="py-16 sm:py-24 bg-surface-light border-y border-brand-navy/8">
          <div className="max-w-7xl mx-auto px-6 space-y-24">
            <SplitFeature
              image="/images/electric-truck.png"
              alt="Elektrifizierter Lkw"
              imageSide="right"
              eyebrow="Powertrain"
              title="Antriebsstränge für schwere Lasten"
              body={[
                "Nutzfahrzeuge stellen die härtesten Anforderungen an die Leistungselektronik: hohe Dauerleistung, große Temperaturspannen und lange Lebensdauer. SiC-Traktionsinverter liefern hier den entscheidenden Effizienzvorteil.",
                "Volle SiC-Module (MOSFET + Diode) reduzieren die Gesamtverluste um bis zu 44 % gegenüber Si-IGBT-Lösungen und ermöglichen kompaktere, leichtere Antriebe für 800-V-Plattformen.",
              ]}
              bullets={[
                "800-V-Plattform-fähig",
                "−44 % Inverterverluste",
                "Hohe Dauerleistung & Lebensdauer",
                "Funktionale Sicherheit nach ISO 26262",
              ]}
            />

            <SplitFeature
              image="/images/charging-infrastructure.jpg"
              alt="Megawatt-Ladeinfrastruktur"
              imageSide="left"
              eyebrow="Charging"
              title="Megawatt-Charging & Onboard-Charger"
              body={[
                "Die Elektrifizierung des Schwerlastverkehrs erfordert Ladeleistungen im Megawattbereich. Wide-Bandgap-Halbleiter ermöglichen kompakte, hocheffiziente DC-Ladesäulen und Onboard-Charger.",
                "Hohe Schaltfrequenzen verkleinern Magnetik und Filter, senken die Verluste und verkürzen die Standzeiten im Fuhrpark.",
              ]}
              bullets={[
                "Megawatt Charging System (MCS)",
                "Kompakte Onboard-Charger",
                "Hohe Leistungsdichte",
                "Geringe Lade- & Wandlungsverluste",
              ]}
            />

            <SplitFeature
              image="/images/ePTO.png"
              alt="Elektrischer Power-Take-Off"
              imageSide="right"
              eyebrow="Auxiliary"
              title="Hilfsinverter & TCO"
              body={[
                "Neben dem Hauptantrieb entscheiden Nebenaggregate über die reale Effizienz. Unsere Auxiliary-Inverter und ePTO-Systeme versorgen Kompressoren, Pumpen und Arbeitshydraulik elektrisch und verlustarm.",
                "In Summe senken höhere Effizienz, geringeres Gewicht und vereinfachte Kühlung die Total Cost of Ownership (TCO) über die gesamte Fahrzeuglebensdauer.",
              ]}
              bullets={[
                "Elektrische Nebenaggregate",
                "ePTO für Arbeitsmaschinen",
                "Weniger Gewicht & Kühlaufwand",
                "Niedrigere TCO",
              ]}
            />
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white border-t border-brand-navy/8">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-navy mb-4">
              Elektrifizieren Sie Ihre Fahrzeugplattform
            </h2>
            <p className="text-brand-navy/60 mb-8">
              Wir entwickeln zertifizierte SiC-/GaN-Leistungselektronik für Ihren Antriebsstrang.
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
