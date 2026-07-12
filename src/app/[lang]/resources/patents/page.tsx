import type { Metadata } from "next";
import Link from "next/link";
import { Lightbulb, Cpu, Layers, Bot, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { hasLang, localePath, type Lang } from "@/lib/i18n";
import { buildMetadata, type PageMeta } from "@/lib/seo";

const AREA_ICONS = [Cpu, Layers, Bot];

const COPY: Record<
  Lang,
  {
    heroEyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    introTitle: string;
    introBody: string;
    introNote: string;
    areas: { title: string; text: string }[];
    ctaText: string;
    ctaButton: string;
  }
> = {
  de: {
    heroEyebrow: "Ressourcen",
    heroTitle: "Patente",
    heroSubtitle:
      "Geschützte Innovationen entlang des gesamten Stacks – vom Halbleiter über das Packaging bis zum KI-gestützten Systems Engineering.",
    introTitle: "Innovation als Fundament",
    introBody:
      "Geistiges Eigentum ist ein zentraler Bestandteil der Wertschöpfung von VEROTERA. Unser Portfolio umfasst Technologien in der Wide-Bandgap-Leistungselektronik, im Packaging und im agentischen Systems Engineering.",
    introNote: "Hinweis: Eine detaillierte Übersicht des Patentportfolios wird hier sukzessive ergänzt.",
    areas: [
      {
        title: "Halbleiter & Module",
        text: "Innovationen rund um SiC- und GaN-Leistungsmodule, Aufbau- und Verbindungstechnik.",
      },
      {
        title: "Packaging-Technologie",
        text: "Verfahren für höhere Leistungsdichte, bessere Wärmeabfuhr und gesteigerte Zuverlässigkeit.",
      },
      {
        title: "KI-gestütztes Engineering",
        text: "Methoden im agentischen Systems Engineering zur Beschleunigung der Entwicklung.",
      },
    ],
    ctaText: "Interesse an Technologie-Kooperationen oder Lizenzthemen?",
    ctaButton: "Kontakt aufnehmen",
  },
  en: {
    heroEyebrow: "Resources",
    heroTitle: "Patents",
    heroSubtitle:
      "Protected innovations across the entire stack — from the semiconductor and packaging to AI-assisted systems engineering.",
    introTitle: "Innovation as a foundation",
    introBody:
      "Intellectual property is a core part of VEROTERA's value creation. Our portfolio covers technologies in wide-bandgap power electronics, packaging and agentic systems engineering.",
    introNote: "Note: a detailed overview of the patent portfolio will be added here over time.",
    areas: [
      {
        title: "Semiconductors & Modules",
        text: "Innovations around SiC and GaN power modules, assembly and interconnection technology.",
      },
      {
        title: "Packaging Technology",
        text: "Processes for higher power density, better heat dissipation and increased reliability.",
      },
      {
        title: "AI-Assisted Engineering",
        text: "Methods in agentic systems engineering that accelerate development.",
      },
    ],
    ctaText: "Interested in technology cooperations or licensing?",
    ctaButton: "Get in touch",
  },
};

const META: Record<Lang, PageMeta> = {
  de: {
    title: "Patente | VEROTERA",
    description:
      "Geistiges Eigentum und Patente von VEROTERA in der Wide-Bandgap-Leistungselektronik, im Packaging und im KI-gestützten Systems Engineering.",
    keywords: ["Patente", "Geistiges Eigentum", "Innovation", "WBG"],
  },
  en: {
    title: "Patents | VEROTERA",
    description:
      "VEROTERA's intellectual property and patents in wide-bandgap power electronics, packaging and AI-assisted systems engineering.",
    keywords: ["Patents", "Intellectual property", "Innovation", "WBG"],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const l = hasLang(lang) ? lang : "de";
  return buildMetadata(l, "/resources/patents", META[l]);
}

export default async function PatentsPage({
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
          icon={Lightbulb}
          title={t.heroTitle}
          subtitle={t.heroSubtitle}
        />

        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6 space-y-8">

            <div className="glass-panel p-8 space-y-4 text-sm leading-relaxed text-brand-navy/70">
              <h2 className="font-display text-lg font-bold text-brand-navy">{t.introTitle}</h2>
              <p>
                {t.introBody}
              </p>
              <p className="text-xs italic text-brand-navy/45">
                {t.introNote}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {t.areas.map((a, i) => {
                const Icon = AREA_ICONS[i];
                return (
                  <div key={a.title} className="glass-panel glass-panel-hover p-6">
                    <div className="p-3 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan w-fit mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-base font-bold text-brand-navy mb-2">{a.title}</h3>
                    <p className="text-sm text-brand-navy/60 leading-relaxed">{a.text}</p>
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
