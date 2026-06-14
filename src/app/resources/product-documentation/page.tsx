import type { Metadata } from "next";
import Link from "next/link";
import { FileText, FileBadge, BookOpen, Wrench, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Produktdokumentation | VEROTERA",
  description:
    "Datenblätter, Application Notes und Integrationsleitfäden zu VEROTERA Wide-Bandgap-Leistungsmodulen – auf Anfrage erhältlich.",
  keywords: ["Produktdokumentation", "Datenblatt", "Application Note", "WBG"],
};

const documents = [
  {
    icon: FileBadge,
    title: "Datenblätter",
    text: "Elektrische und thermische Kennwerte, Grenzwerte und Pinbelegungen unserer Leistungsmodule.",
  },
  {
    icon: BookOpen,
    title: "Application Notes",
    text: "Hinweise zu Ansteuerung, Gate-Treibern, Layout und thermischem Design für SiC- und GaN-Module.",
  },
  {
    icon: Wrench,
    title: "Integrationsleitfäden",
    text: "Empfehlungen zu Montage, Kontaktierung und Systemintegration für einen zuverlässigen Betrieb.",
  },
];

export default function ProductDocumentationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-brand-navy antialiased">
      <Header />

      <main className="flex-grow">
        <PageHero
          eyebrow="Ressourcen"
          icon={FileText}
          title="Produktdokumentation"
          subtitle="Technische Unterlagen zu unseren Wide-Bandgap-Leistungsmodulen – von Datenblättern bis zu Integrationsleitfäden."
        />

        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6 space-y-8">

            <div className="glass-panel p-8 space-y-4 text-sm leading-relaxed text-brand-navy/70">
              <h2 className="font-display text-lg font-bold text-brand-navy">Dokumentation anfragen</h2>
              <p>
                Eine projektspezifische Produktdokumentation stellen wir Ihnen gerne zur Verfügung.
                Die folgenden Unterlagen werden derzeit fortlaufend aufbereitet und sind auf Anfrage
                erhältlich.
              </p>
              <p className="text-xs italic text-brand-navy/45">
                Hinweis: Ein öffentlicher Download-Bereich befindet sich im Aufbau.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {documents.map((d) => (
                <div key={d.title} className="glass-panel glass-panel-hover p-6">
                  <div className="p-3 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan w-fit mb-4">
                    <d.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-base font-bold text-brand-navy mb-2">{d.title}</h3>
                  <p className="text-sm text-brand-navy/60 leading-relaxed">{d.text}</p>
                </div>
              ))}
            </div>

            <div className="glass-panel p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-sm text-brand-navy/70">
                Sie benötigen Datenblätter oder technische Unterlagen für Ihr Projekt?
              </p>
              <Link
                href="/contacts"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-brand-navy hover:bg-brand-navy/85 transition-colors shrink-0"
              >
                Dokumentation anfragen
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
