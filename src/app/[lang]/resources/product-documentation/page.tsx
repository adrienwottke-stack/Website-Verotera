import type { Metadata } from "next";
import Link from "next/link";
import { FileText, FileBadge, BookOpen, Wrench, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { hasLang, localePath, type Lang } from "@/lib/i18n";
import { buildMetadata, type PageMeta } from "@/lib/seo";

const DOC_ICONS = [FileBadge, BookOpen, Wrench];

const COPY: Record<
  Lang,
  {
    heroEyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    requestTitle: string;
    requestBody: string;
    requestNote: string;
    documents: { title: string; text: string }[];
    ctaText: string;
    ctaButton: string;
  }
> = {
  de: {
    heroEyebrow: "Ressourcen",
    heroTitle: "Produktdokumentation",
    heroSubtitle:
      "Technische Unterlagen zu unseren Wide-Bandgap-Leistungsmodulen – von Datenblättern bis zu Integrationsleitfäden.",
    requestTitle: "Dokumentation anfragen",
    requestBody:
      "Eine projektspezifische Produktdokumentation stellen wir Ihnen gerne zur Verfügung. Die folgenden Unterlagen werden derzeit fortlaufend aufbereitet und sind auf Anfrage erhältlich.",
    requestNote: "Hinweis: Ein öffentlicher Download-Bereich befindet sich im Aufbau.",
    documents: [
      {
        title: "Datenblätter",
        text: "Elektrische und thermische Kennwerte, Grenzwerte und Pinbelegungen unserer Leistungsmodule.",
      },
      {
        title: "Application Notes",
        text: "Hinweise zu Ansteuerung, Gate-Treibern, Layout und thermischem Design für SiC- und GaN-Module.",
      },
      {
        title: "Integrationsleitfäden",
        text: "Empfehlungen zu Montage, Kontaktierung und Systemintegration für einen zuverlässigen Betrieb.",
      },
    ],
    ctaText: "Sie benötigen Datenblätter oder technische Unterlagen für Ihr Projekt?",
    ctaButton: "Dokumentation anfragen",
  },
  en: {
    heroEyebrow: "Resources",
    heroTitle: "Product Documentation",
    heroSubtitle:
      "Technical documents for our wide-bandgap power modules — from datasheets to integration guides.",
    requestTitle: "Request documentation",
    requestBody:
      "We are happy to provide project-specific product documentation. The following documents are continuously being prepared and are available on request.",
    requestNote: "Note: a public download area is under construction.",
    documents: [
      {
        title: "Datasheets",
        text: "Electrical and thermal characteristics, limits and pinouts of our power modules.",
      },
      {
        title: "Application Notes",
        text: "Guidance on control, gate drivers, layout and thermal design for SiC and GaN modules.",
      },
      {
        title: "Integration Guides",
        text: "Recommendations on mounting, contacting and system integration for reliable operation.",
      },
    ],
    ctaText: "Need datasheets or technical documents for your project?",
    ctaButton: "Request documentation",
  },
};

const META: Record<Lang, PageMeta> = {
  de: {
    title: "Produktdokumentation | VEROTERA",
    description:
      "Datenblätter, Application Notes und Integrationsleitfäden zu VEROTERA Wide-Bandgap-Leistungsmodulen – auf Anfrage erhältlich.",
    keywords: ["Produktdokumentation", "Datenblatt", "Application Note", "WBG"],
  },
  en: {
    title: "Product Documentation | VEROTERA",
    description:
      "Datasheets, application notes and integration guides for VEROTERA wide-bandgap power modules — available on request.",
    keywords: ["Product documentation", "Datasheet", "Application note", "WBG"],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const l = hasLang(lang) ? lang : "de";
  return buildMetadata(l, "/resources/product-documentation", META[l]);
}

export default async function ProductDocumentationPage({
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
          icon={FileText}
          title={t.heroTitle}
          subtitle={t.heroSubtitle}
        />

        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6 space-y-8">

            <div className="glass-panel p-8 space-y-4 text-sm leading-relaxed text-brand-navy/70">
              <h2 className="font-display text-lg font-bold text-brand-navy">{t.requestTitle}</h2>
              <p>
                {t.requestBody}
              </p>
              <p className="text-xs italic text-brand-navy/45">
                {t.requestNote}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {t.documents.map((d, i) => {
                const Icon = DOC_ICONS[i];
                return (
                  <div key={d.title} className="glass-panel glass-panel-hover p-6">
                    <div className="p-3 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan w-fit mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-base font-bold text-brand-navy mb-2">{d.title}</h3>
                    <p className="text-sm text-brand-navy/60 leading-relaxed">{d.text}</p>
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
