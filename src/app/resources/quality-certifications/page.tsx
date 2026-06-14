import type { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck, ShieldCheck, Gauge, Recycle, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Qualitätsrichtlinie & Zertifizierungen | VEROTERA",
  description:
    "Qualitätsanspruch, funktionale Sicherheit und Zertifizierungen von VEROTERA für zuverlässige Wide-Bandgap-Leistungselektronik.",
  keywords: ["Qualität", "Zertifizierung", "ISO 9001", "funktionale Sicherheit"],
};

const pillars = [
  {
    icon: Gauge,
    title: "Qualität in jeder Phase",
    text: "Strukturierte Entwicklungs- und Verifikationsprozesse sichern Reproduzierbarkeit von der Chip-Auswahl bis zum geprüften System.",
  },
  {
    icon: ShieldCheck,
    title: "Funktionale Sicherheit",
    text: "Berücksichtigung von Anforderungen nach ISO 26262 und IEC 61508 für sicherheitsrelevante Leistungselektronik.",
  },
  {
    icon: Recycle,
    title: "Nachhaltigkeit",
    text: "Energieeffizienz und Ressourcenschonung sind feste Bestandteile unseres Qualitätsverständnisses.",
  },
];

const commitments = [
  "Kundenanforderungen vollständig verstehen und nachvollziehbar umsetzen",
  "Kontinuierliche Verbesserung von Prozessen und Produkten",
  "Lückenlose Nachvollziehbarkeit über den gesamten Entwicklungszyklus",
  "Einhaltung relevanter Normen und regulatorischer Anforderungen",
];

export default function QualityCertificationsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-brand-navy antialiased">
      <Header />

      <main className="flex-grow">
        <PageHero
          eyebrow="Ressourcen"
          icon={BadgeCheck}
          title="Qualitätsrichtlinie & Zertifizierungen"
          subtitle="Höchste Qualität und funktionale Sicherheit sind die Basis zuverlässiger Wide-Bandgap-Leistungselektronik."
        />

        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6 space-y-8">

            <div className="glass-panel p-8 space-y-4 text-sm leading-relaxed text-brand-navy/70">
              <h2 className="font-display text-lg font-bold text-brand-navy">Unser Qualitätsanspruch</h2>
              <p>
                Qualität entsteht bei VEROTERA nicht am Ende der Entwicklung, sondern wird über den
                gesamten Prozess hinweg sichergestellt – von der physikalischen Auslegung der Halbleiter
                bis zum zertifizierbaren Komplettsystem.
              </p>
              <p className="text-xs italic text-brand-navy/45">
                Hinweis: Detaillierte Zertifikatsnachweise werden ergänzt, sobald verfügbar.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pillars.map((p) => (
                <div key={p.title} className="glass-panel glass-panel-hover p-6">
                  <div className="p-3 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan w-fit mb-4">
                    <p.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-base font-bold text-brand-navy mb-2">{p.title}</h3>
                  <p className="text-sm text-brand-navy/60 leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>

            <div className="glass-panel p-8 space-y-4 text-sm leading-relaxed text-brand-navy/70">
              <h2 className="font-display text-lg font-bold text-brand-navy">Unsere Selbstverpflichtung</h2>
              <ul className="space-y-3 list-none m-0 p-0">
                {commitments.map((c) => (
                  <li key={c} className="flex items-start gap-2.5">
                    <BadgeCheck className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-panel p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-sm text-brand-navy/70">
                Fragen zu Qualität, Normen oder Zertifizierungen?
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
