import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, FileCheck2, Timer, LifeBuoy, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Garantie & Gewährleistung | VEROTERA",
  description:
    "Informationen zu Garantie, Gewährleistung und Support für VEROTERA Wide-Bandgap-Leistungsmodule und Systeme.",
  keywords: ["Garantie", "Gewährleistung", "Warranty", "Support"],
};

const points = [
  {
    icon: FileCheck2,
    title: "Vertragliche Konditionen",
    text: "Die konkreten Garantie- und Gewährleistungsbedingungen werden projekt- bzw. produktspezifisch im jeweiligen Liefervertrag geregelt.",
  },
  {
    icon: Timer,
    title: "Laufzeiten",
    text: "Garantiezeiträume richten sich nach Produkt, Einsatzprofil und vereinbarter Spezifikation.",
  },
  {
    icon: LifeBuoy,
    title: "Support im Garantiefall",
    text: "Im Gewährleistungsfall unterstützt Sie unser technisches Team bei Analyse, Bewertung und Lösung.",
  },
];

export default function WarrantyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-brand-navy antialiased">
      <Header />

      <main className="flex-grow">
        <PageHero
          eyebrow="Ressourcen"
          icon={ShieldCheck}
          title="Garantie & Gewährleistung"
          subtitle="Verlässliche Konditionen und technischer Support für unsere Leistungsmodule und Systeme."
        />

        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6 space-y-8">

            <div className="glass-panel p-8 space-y-4 text-sm leading-relaxed text-brand-navy/70">
              <h2 className="font-display text-lg font-bold text-brand-navy">Überblick</h2>
              <p>
                VEROTERA steht für die Qualität und Zuverlässigkeit der gelieferten Produkte. Die
                anwendbaren Garantie- und Gewährleistungsbedingungen ergeben sich aus dem jeweiligen
                Vertrag sowie unseren allgemeinen Geschäftsbedingungen.
              </p>
              <p className="text-xs italic text-brand-navy/45">
                Hinweis: Eine ausführliche Garantieerklärung wird hier veröffentlicht, sobald
                finalisiert.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {points.map((p) => (
                <div key={p.title} className="glass-panel glass-panel-hover p-6">
                  <div className="p-3 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan w-fit mb-4">
                    <p.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-base font-bold text-brand-navy mb-2">{p.title}</h3>
                  <p className="text-sm text-brand-navy/60 leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>

            <div className="glass-panel p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-sm text-brand-navy/70">
                Fragen zu Garantie oder einem konkreten Gewährleistungsfall?
              </p>
              <Link
                href="/contacts"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-brand-navy hover:bg-brand-navy/85 transition-colors shrink-0"
              >
                Support kontaktieren
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
