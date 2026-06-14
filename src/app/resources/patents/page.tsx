import type { Metadata } from "next";
import Link from "next/link";
import { Lightbulb, Cpu, Layers, Bot, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Patente | VEROTERA",
  description:
    "Geistiges Eigentum und Patente von VEROTERA in der Wide-Bandgap-Leistungselektronik, im Packaging und im KI-gestützten Systems Engineering.",
  keywords: ["Patente", "Geistiges Eigentum", "Innovation", "WBG"],
};

const areas = [
  {
    icon: Cpu,
    title: "Halbleiter & Module",
    text: "Innovationen rund um SiC- und GaN-Leistungsmodule, Aufbau- und Verbindungstechnik.",
  },
  {
    icon: Layers,
    title: "Packaging-Technologie",
    text: "Verfahren für höhere Leistungsdichte, bessere Wärmeabfuhr und gesteigerte Zuverlässigkeit.",
  },
  {
    icon: Bot,
    title: "KI-gestütztes Engineering",
    text: "Methoden im agentischen Systems Engineering zur Beschleunigung der Entwicklung.",
  },
];

export default function PatentsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-brand-navy antialiased">
      <Header />

      <main className="flex-grow">
        <PageHero
          eyebrow="Ressourcen"
          icon={Lightbulb}
          title="Patente"
          subtitle="Geschützte Innovationen entlang des gesamten Stacks – vom Halbleiter über das Packaging bis zum KI-gestützten Systems Engineering."
        />

        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6 space-y-8">

            <div className="glass-panel p-8 space-y-4 text-sm leading-relaxed text-brand-navy/70">
              <h2 className="font-display text-lg font-bold text-brand-navy">Innovation als Fundament</h2>
              <p>
                Geistiges Eigentum ist ein zentraler Bestandteil der Wertschöpfung von VEROTERA. Unser
                Portfolio umfasst Technologien in der Wide-Bandgap-Leistungselektronik, im Packaging und
                im agentischen Systems Engineering.
              </p>
              <p className="text-xs italic text-brand-navy/45">
                Hinweis: Eine detaillierte Übersicht des Patentportfolios wird hier sukzessive ergänzt.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {areas.map((a) => (
                <div key={a.title} className="glass-panel glass-panel-hover p-6">
                  <div className="p-3 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan w-fit mb-4">
                    <a.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-base font-bold text-brand-navy mb-2">{a.title}</h3>
                  <p className="text-sm text-brand-navy/60 leading-relaxed">{a.text}</p>
                </div>
              ))}
            </div>

            <div className="glass-panel p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-sm text-brand-navy/70">
                Interesse an Technologie-Kooperationen oder Lizenzthemen?
              </p>
              <Link
                href="/contacts"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-brand-navy hover:bg-brand-navy/85 transition-colors shrink-0"
              >
                Kontakt aufnehmen
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
