import type { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck, ShieldCheck, Gauge, Recycle, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { hasLang, localePath, type Lang } from "@/lib/i18n";
import { buildMetadata, type PageMeta } from "@/lib/seo";

const PILLAR_ICONS = [Gauge, ShieldCheck, Recycle];

const COPY: Record<
  Lang,
  {
    heroEyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    claimTitle: string;
    claimBody: string;
    claimNote: string;
    pillars: { title: string; text: string }[];
    commitmentsTitle: string;
    commitments: string[];
    ctaText: string;
    ctaButton: string;
  }
> = {
  de: {
    heroEyebrow: "Ressourcen",
    heroTitle: "Qualitätsrichtlinie & Zertifizierungen",
    heroSubtitle:
      "Höchste Qualität und funktionale Sicherheit sind die Basis zuverlässiger Wide-Bandgap-Leistungselektronik.",
    claimTitle: "Unser Qualitätsanspruch",
    claimBody:
      "Qualität entsteht bei VEROTERA nicht am Ende der Entwicklung, sondern wird über den gesamten Prozess hinweg sichergestellt – von der physikalischen Auslegung der Halbleiter bis zum zertifizierbaren Komplettsystem.",
    claimNote: "Hinweis: Detaillierte Zertifikatsnachweise werden ergänzt, sobald verfügbar.",
    pillars: [
      {
        title: "Qualität in jeder Phase",
        text: "Strukturierte Entwicklungs- und Verifikationsprozesse sichern Reproduzierbarkeit von der Chip-Auswahl bis zum geprüften System.",
      },
      {
        title: "Funktionale Sicherheit",
        text: "Berücksichtigung von Anforderungen nach ISO 26262 und IEC 61508 für sicherheitsrelevante Leistungselektronik.",
      },
      {
        title: "Nachhaltigkeit",
        text: "Energieeffizienz und Ressourcenschonung sind feste Bestandteile unseres Qualitätsverständnisses.",
      },
    ],
    commitmentsTitle: "Unsere Selbstverpflichtung",
    commitments: [
      "Kundenanforderungen vollständig verstehen und nachvollziehbar umsetzen",
      "Kontinuierliche Verbesserung von Prozessen und Produkten",
      "Lückenlose Nachvollziehbarkeit über den gesamten Entwicklungszyklus",
      "Einhaltung relevanter Normen und regulatorischer Anforderungen",
    ],
    ctaText: "Fragen zu Qualität, Normen oder Zertifizierungen?",
    ctaButton: "Kontakt aufnehmen",
  },
  en: {
    heroEyebrow: "Resources",
    heroTitle: "Quality Policy & Certifications",
    heroSubtitle:
      "Uncompromising quality and functional safety are the foundation of reliable wide-bandgap power electronics.",
    claimTitle: "Our quality standard",
    claimBody:
      "At VEROTERA, quality is not created at the end of development — it is ensured throughout the entire process, from the physical design of the semiconductors to the certifiable complete system.",
    claimNote: "Note: detailed certification records will be added as they become available.",
    pillars: [
      {
        title: "Quality at every stage",
        text: "Structured development and verification processes ensure reproducibility from chip selection to the tested system.",
      },
      {
        title: "Functional safety",
        text: "Consideration of ISO 26262 and IEC 61508 requirements for safety-relevant power electronics.",
      },
      {
        title: "Sustainability",
        text: "Energy efficiency and resource conservation are integral parts of our understanding of quality.",
      },
    ],
    commitmentsTitle: "Our commitment",
    commitments: [
      "Fully understand customer requirements and implement them traceably",
      "Continuous improvement of processes and products",
      "Complete traceability across the entire development cycle",
      "Compliance with relevant standards and regulatory requirements",
    ],
    ctaText: "Questions about quality, standards or certifications?",
    ctaButton: "Get in touch",
  },
};

const META: Record<Lang, PageMeta> = {
  de: {
    title: "Qualitätsrichtlinie & Zertifizierungen | VEROTERA",
    description:
      "Qualitätsanspruch, funktionale Sicherheit und Zertifizierungen von VEROTERA für zuverlässige Wide-Bandgap-Leistungselektronik.",
    keywords: ["Qualität", "Zertifizierung", "ISO 9001", "funktionale Sicherheit"],
  },
  en: {
    title: "Quality Policy & Certifications | VEROTERA",
    description:
      "VEROTERA's quality standards, functional safety and certifications for reliable wide-bandgap power electronics.",
    keywords: ["Quality", "Certification", "ISO 9001", "Functional safety"],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const l = hasLang(lang) ? lang : "de";
  return buildMetadata(l, "/resources/quality-certifications", META[l]);
}

export default async function QualityCertificationsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Lang = hasLang(rawLang) ? rawLang : "de";
  const t = COPY[lang];

  return (
    <div className="flex flex-col min-h-screen bg-white text-brand-navy antialiased">
      <Header />

      <main className="flex-grow">
        <PageHero
          eyebrow={t.heroEyebrow}
          icon={BadgeCheck}
          title={t.heroTitle}
          subtitle={t.heroSubtitle}
        />

        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6 space-y-8">

            <div className="glass-panel p-8 space-y-4 text-sm leading-relaxed text-brand-navy/70">
              <h2 className="font-display text-lg font-bold text-brand-navy">{t.claimTitle}</h2>
              <p>
                {t.claimBody}
              </p>
              <p className="text-xs italic text-brand-navy/45">
                {t.claimNote}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {t.pillars.map((p, i) => {
                const Icon = PILLAR_ICONS[i];
                return (
                  <div key={p.title} className="glass-panel glass-panel-hover p-6">
                    <div className="p-3 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan w-fit mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-base font-bold text-brand-navy mb-2">{p.title}</h3>
                    <p className="text-sm text-brand-navy/60 leading-relaxed">{p.text}</p>
                  </div>
                );
              })}
            </div>

            <div className="glass-panel p-8 space-y-4 text-sm leading-relaxed text-brand-navy/70">
              <h2 className="font-display text-lg font-bold text-brand-navy">{t.commitmentsTitle}</h2>
              <ul className="space-y-3 list-none m-0 p-0">
                {t.commitments.map((c) => (
                  <li key={c} className="flex items-start gap-2.5">
                    <BadgeCheck className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-panel p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-sm text-brand-navy/70">
                {t.ctaText}
              </p>
              <Link
                href={localePath(lang, "/contacts")}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-brand-navy hover:bg-brand-navy/85 transition-colors shrink-0"
              >
                {t.ctaButton}
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
