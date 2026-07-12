import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, FileCheck2, Timer, LifeBuoy, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { hasLang, localePath, type Lang } from "@/lib/i18n";
import { buildMetadata, type PageMeta } from "@/lib/seo";

const POINT_ICONS = [FileCheck2, Timer, LifeBuoy];

const COPY: Record<
  Lang,
  {
    heroEyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    overviewTitle: string;
    overviewBody: string;
    overviewNote: string;
    points: { title: string; text: string }[];
    ctaText: string;
    ctaButton: string;
  }
> = {
  de: {
    heroEyebrow: "Ressourcen",
    heroTitle: "Garantie & Gewährleistung",
    heroSubtitle:
      "Verlässliche Konditionen und technischer Support für unsere Leistungsmodule und Systeme.",
    overviewTitle: "Überblick",
    overviewBody:
      "VEROTERA steht für die Qualität und Zuverlässigkeit der gelieferten Produkte. Die anwendbaren Garantie- und Gewährleistungsbedingungen ergeben sich aus dem jeweiligen Vertrag sowie unseren allgemeinen Geschäftsbedingungen.",
    overviewNote:
      "Hinweis: Eine ausführliche Garantieerklärung wird hier veröffentlicht, sobald finalisiert.",
    points: [
      {
        title: "Vertragliche Konditionen",
        text: "Die konkreten Garantie- und Gewährleistungsbedingungen werden projekt- bzw. produktspezifisch im jeweiligen Liefervertrag geregelt.",
      },
      {
        title: "Laufzeiten",
        text: "Garantiezeiträume richten sich nach Produkt, Einsatzprofil und vereinbarter Spezifikation.",
      },
      {
        title: "Support im Garantiefall",
        text: "Im Gewährleistungsfall unterstützt Sie unser technisches Team bei Analyse, Bewertung und Lösung.",
      },
    ],
    ctaText: "Fragen zu Garantie oder einem konkreten Gewährleistungsfall?",
    ctaButton: "Support kontaktieren",
  },
  en: {
    heroEyebrow: "Resources",
    heroTitle: "Warranty",
    heroSubtitle:
      "Reliable terms and technical support for our power modules and systems.",
    overviewTitle: "Overview",
    overviewBody:
      "VEROTERA stands for the quality and reliability of the products we deliver. The applicable warranty terms follow from the respective contract and our general terms and conditions.",
    overviewNote: "Note: a detailed warranty statement will be published here once finalized.",
    points: [
      {
        title: "Contractual terms",
        text: "The specific warranty conditions are defined per project or product in the respective supply contract.",
      },
      {
        title: "Durations",
        text: "Warranty periods depend on the product, its usage profile and the agreed specification.",
      },
      {
        title: "Support in a warranty case",
        text: "In a warranty case, our technical team supports you with analysis, assessment and resolution.",
      },
    ],
    ctaText: "Questions about warranty or a specific warranty case?",
    ctaButton: "Contact support",
  },
};

const META: Record<Lang, PageMeta> = {
  de: {
    title: "Garantie & Gewährleistung | VEROTERA",
    description:
      "Informationen zu Garantie, Gewährleistung und Support für VEROTERA Wide-Bandgap-Leistungsmodule und Systeme.",
    keywords: ["Garantie", "Gewährleistung", "Warranty", "Support"],
  },
  en: {
    title: "Warranty | VEROTERA",
    description:
      "Information on warranty and support for VEROTERA wide-bandgap power modules and systems.",
    keywords: ["Warranty", "Support"],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const l = hasLang(lang) ? lang : "de";
  return buildMetadata(l, "/resources/warranty", META[l]);
}

export default async function WarrantyPage({
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
          icon={ShieldCheck}
          title={t.heroTitle}
          subtitle={t.heroSubtitle}
        />

        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6 space-y-8">

            <div className="glass-panel p-8 space-y-4 text-sm leading-relaxed text-brand-navy/70">
              <h2 className="font-display text-lg font-bold text-brand-navy">{t.overviewTitle}</h2>
              <p>
                {t.overviewBody}
              </p>
              <p className="text-xs italic text-brand-navy/45">
                {t.overviewNote}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {t.points.map((p, i) => {
                const Icon = POINT_ICONS[i];
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
