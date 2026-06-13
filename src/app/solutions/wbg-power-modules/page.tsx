import type { Metadata } from "next";
import Link from "next/link";
import { Cpu, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SplitFeature from "@/components/SplitFeature";

export const metadata: Metadata = {
  title: "High-Efficiency Power Module Solutions for a Sustainable Future",
  description:
    "VEROTERA operates across the full stack – from chip physics to complete systems – and design technologies that reflect the actual needs and constraints of modern applications",
  keywords: ["wide bandgap semiconductors", "SiC modules", "GaN technology"],
};

export default function WbgPowerModulesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-brand-navy antialiased">
      <Header />

      <main className="flex-grow">
        <PageHero
          eyebrow="WBG-Leistungsmodule"
          icon={Cpu}
          title="Hocheffiziente Leistungsmodule für eine nachhaltige Zukunft"
          subtitle="VEROTERA arbeitet über den gesamten Stack hinweg – von der Chip-Physik bis zum Komplettsystem – und entwickelt Technologien, die die realen Anforderungen und Randbedingungen moderner Applikationen abbilden."
          width="wide"
        />

        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 space-y-24">
            <SplitFeature
              image="/images/power-module-sic.png"
              alt="VeroCore SiC Leistungsmodul"
              imageSide="right"
              eyebrow="VeroCore SiC"
              title="SiC-Module für höchste Spannungen"
              body={[
                "Unsere VeroCore-SiC-Module verkapseln Siliziumkarbid-Chips für Spannungsklassen bis 3,3 kV. Das breite Bandgap (3,3 eV) ermöglicht ultraniedrige Durchlasswiderstände und Sperrschichttemperaturen bis 175 °C – bei einer Wärmeleitfähigkeit, die das Dreifache von Silizium beträgt.",
                "Volle SiC-Module (SiC-MOSFET + SiC-Diode) senken die Gesamtverluste eines Wechselrichters um bis zu 44 % gegenüber Si-IGBT-Lösungen.",
              ]}
              bullets={[
                "Spannungsklassen 650 V – 3,3 kV",
                "Tj bis 175 °C (Ziel 200 °C)",
                "Bidirektional, kein Tail-Strom",
                "Bis −44 % Wechselrichterverluste",
              ]}
            />

            <SplitFeature
              image="/images/power-module-gan-white.png"
              alt="VeroCore GaN Leistungsmodul"
              imageSide="left"
              eyebrow="VeroCore GaN"
              title="GaN-Module für höchste Schaltfrequenzen"
              body={[
                "Galliumnitrid kennt keine Reverse-Recovery-Ladung (QRR = 0) und schaltet 10–100× schneller als Silizium. Das ermöglicht resonante Wandler im MHz-Bereich und damit um Größenordnungen kleinere Magnetik.",
                "Durch monolithische Integration von Transistor, Gate-Treiber, Sensorik und Schutz auf einem Die sinken Bauteilanzahl, BOM-Kosten und Parasitäten gleichermaßen.",
              ]}
              bullets={[
                "Zero QRR – minimierte Schaltverluste",
                "Schaltfrequenzen bis in den MHz-Bereich",
                "Monolithische GaN-IC-Integration",
                "Leistungsdichte > 5.000 W/in³",
              ]}
            />

            <SplitFeature
              image="/images/wbg-power-module-fol.png"
              alt="Niederinduktives Package-Design"
              imageSide="right"
              eyebrow="Packaging"
              title="Niederinduktive Verkapselung"
              body={[
                "Parasitäre Induktivitäten begrenzen die nutzbare Schaltgeschwindigkeit von WBG-Halbleitern. Unser Package-Design mit optimierter Die-Anordnung, Dünnschicht-Thermallagen und direkten Kupferanbindungen hält die Streuinduktivität unter 5 nH.",
                "AlN-Keramiksubstrate und direkt gebundene Kupfer-Baseplates minimieren den thermischen Widerstand und maximieren die Stromtragfähigkeit auf kleinstem Bauraum.",
              ]}
              bullets={[
                "Streuinduktivität < 5 nH",
                "AlN-Keramiksubstrat",
                "Direkte Kupferanbindung",
                "Optimierte Die-Layout-Geometrie",
              ]}
            />

            <SplitFeature
              image="/images/power-module-ai-fol.png"
              alt="Integrierte Sensor-Telemetrie im Modul"
              imageSide="left"
              eyebrow="Telemetrie"
              title="Integrierte Sensorik & Telemetrie"
              body={[
                "Eingebettete Strom-, Spannungs- und Temperatursensoren liefern Echtzeit-Telemetrie direkt aus dem Modul. So lassen sich Lastprofile überwachen, Degradation früh erkennen und vorausschauende Wartung umsetzen.",
                "Die Sensordaten speisen unsere KI-gestützten Engineering-Werkzeuge und schließen den Kreis zwischen Feldverhalten und Designoptimierung.",
              ]}
              bullets={[
                "On-Die Temperatur- & Stromsensorik",
                "Echtzeit-Zustandsüberwachung",
                "Vorausschauende Wartung",
                "Datenrückführung ins KI-Engineering",
              ]}
            />
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-surface-light border-t border-brand-navy/8">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-navy mb-4">
              Bereit für ein maßgeschneidertes WBG-Modul?
            </h2>
            <p className="text-brand-navy/60 mb-8">
              Unsere Applikations- und Technologieexperten begleiten Sie von der Auslegung bis zum
              zertifizierten System.
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
