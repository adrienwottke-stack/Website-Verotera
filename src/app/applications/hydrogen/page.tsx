import type { Metadata } from "next";
import Link from "next/link";
import { Droplets, ArrowRight, Grid3x3, Waves, Activity } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SplitFeature from "@/components/SplitFeature";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Efficient Power Electronics for Green Hydrogen",
  description:
    "The efficiency of green hydrogen production hinges on power electronics. Wide-bandgap semiconductors increase efficiency and power density",
  keywords: ["power electronics", "green hydrogen", "electrolyzers", "DC-DC converter"],
};

const highlights = [
  {
    icon: Grid3x3,
    title: "Netzkopplung",
    text: "AC/DC-Gleichrichter koppeln Elektrolyseure ans Netz und an erneuerbare Quellen – netzkonform und mit hohem Leistungsfaktor.",
  },
  {
    icon: Activity,
    title: "Hochfrequente DC-DC-Wandler",
    text: "WBG-basierte DC-DC-Stufen liefern den hohen Strom bei niedriger Spannung, den PEM- und AEM-Elektrolyseure benötigen.",
  },
  {
    icon: Waves,
    title: "Reduzierte Oberwellen",
    text: "Höhere Schaltfrequenzen und präzise Regelung minimieren Stromrippel und Oberwellenverluste im Elektrolyseur-Stack.",
  },
];

export default function HydrogenPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-brand-navy antialiased">
      <Header />

      <main className="flex-grow">
        <PageHero
          eyebrow="Grüner Wasserstoff"
          icon={Droplets}
          title="Effiziente Leistungselektronik für grünen Wasserstoff"
          subtitle="Die Effizienz der grünen Wasserstoffproduktion hängt an der Leistungselektronik. Wide-Bandgap-Halbleiter steigern Wirkungsgrad und Leistungsdichte entlang des gesamten DC-Energiepfads."
          width="wide"
        />

        {/* Highlights */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
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
        </section>

        {/* Features */}
        <section className="py-16 sm:py-24 bg-surface-light border-y border-brand-navy/8">
          <div className="max-w-7xl mx-auto px-6 space-y-24">
            <SplitFeature
              image="/images/green-hydrogen.png"
              alt="Anlage für grünen Wasserstoff"
              imageSide="right"
              eyebrow="Grid Coupling"
              title="Vom Netz zum Elektrolyseur"
              body={[
                "Grüner Wasserstoff entsteht durch Elektrolyse mit Strom aus erneuerbaren Quellen. Die entscheidende Schnittstelle ist die Leistungselektronik, die volatilen Wind- und Solarstrom in den präzise geregelten Gleichstrom des Elektrolyseurs überführt.",
                "SiC-basierte Gleichrichter koppeln den Elektrolyseur netzkonform an und halten den Leistungsfaktor hoch – bei minimalen Wandlungsverlusten.",
              ]}
              bullets={[
                "Netzkonforme AC/DC-Stufe",
                "Kopplung an Wind & Solar",
                "Hoher Leistungsfaktor",
                "Minimale Wandlungsverluste",
              ]}
            />

            <SplitFeature
              image="/images/hydrogen-aem-electrolyzer.jpg"
              alt="AEM-Elektrolyseur"
              imageSide="left"
              eyebrow="DC-DC Conversion"
              title="Hochstrom für PEM- und AEM-Stacks"
              body={[
                "Elektrolyseur-Stacks benötigen sehr hohe Ströme bei niedriger Spannung. Hochfrequente DC-DC-Wandler mit Wide-Bandgap-Halbleitern liefern diese Leistung kompakt und mit hohem Wirkungsgrad.",
                "Die hohe Schaltfrequenz reduziert Stromrippel und Oberwellenverluste im Stack – das verbessert sowohl den Systemwirkungsgrad als auch die Lebensdauer der Membran.",
              ]}
              bullets={[
                "Hochstrom bei niedriger Spannung",
                "Geringer Stromrippel",
                "Reduzierte Oberwellenverluste",
                "Längere Membran-Lebensdauer",
              ]}
            />
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white border-t border-brand-navy/8">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-navy mb-4">
              Skalieren Sie Ihre Elektrolyse-Leistungselektronik
            </h2>
            <p className="text-brand-navy/60 mb-8">
              Wir entwickeln effiziente Umrichter- und DC-DC-Lösungen für PEM- und AEM-Elektrolyseure.
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
