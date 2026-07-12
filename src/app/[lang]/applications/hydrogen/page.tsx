import type { Metadata } from "next";
import Link from "next/link";
import { Droplets, ArrowRight, Grid3x3, Waves, Activity } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SplitFeature from "@/components/SplitFeature";
import Reveal from "@/components/Reveal";
import { hasLang, localePath, type Lang } from "@/lib/i18n";
import { buildMetadata, type PageMeta } from "@/lib/seo";

const HIGHLIGHT_ICONS = [Grid3x3, Activity, Waves];

type Feature = { alt: string; eyebrow: string; title: string; body: string[]; bullets: string[] };

const COPY: Record<
  Lang,
  {
    heroEyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    highlights: { title: string; text: string }[];
    f1: Feature;
    f2: Feature;
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
  }
> = {
  de: {
    heroEyebrow: "Grüner Wasserstoff",
    heroTitle: "Effiziente Leistungselektronik für grünen Wasserstoff",
    heroSubtitle:
      "Die Effizienz der grünen Wasserstoffproduktion hängt an der Leistungselektronik. Wide-Bandgap-Halbleiter steigern Wirkungsgrad und Leistungsdichte entlang des gesamten DC-Energiepfads.",
    highlights: [
      {
        title: "Netzkopplung",
        text: "AC/DC-Gleichrichter koppeln Elektrolyseure ans Netz und an erneuerbare Quellen – netzkonform und mit hohem Leistungsfaktor.",
      },
      {
        title: "Hochfrequente DC-DC-Wandler",
        text: "WBG-basierte DC-DC-Stufen liefern den hohen Strom bei niedriger Spannung, den PEM- und AEM-Elektrolyseure benötigen.",
      },
      {
        title: "Reduzierte Oberwellen",
        text: "Höhere Schaltfrequenzen und präzise Regelung minimieren Stromrippel und Oberwellenverluste im Elektrolyseur-Stack.",
      },
    ],
    f1: {
      alt: "Anlage für grünen Wasserstoff",
      eyebrow: "Grid Coupling",
      title: "Vom Netz zum Elektrolyseur",
      body: [
        "Grüner Wasserstoff entsteht durch Elektrolyse mit Strom aus erneuerbaren Quellen. Die entscheidende Schnittstelle ist die Leistungselektronik, die volatilen Wind- und Solarstrom in den präzise geregelten Gleichstrom des Elektrolyseurs überführt.",
        "SiC-basierte Gleichrichter koppeln den Elektrolyseur netzkonform an und halten den Leistungsfaktor hoch – bei minimalen Wandlungsverlusten.",
      ],
      bullets: [
        "Netzkonforme AC/DC-Stufe",
        "Kopplung an Wind & Solar",
        "Hoher Leistungsfaktor",
        "Minimale Wandlungsverluste",
      ],
    },
    f2: {
      alt: "AEM-Elektrolyseur",
      eyebrow: "DC-DC Conversion",
      title: "Hochstrom für PEM- und AEM-Stacks",
      body: [
        "Elektrolyseur-Stacks benötigen sehr hohe Ströme bei niedriger Spannung. Hochfrequente DC-DC-Wandler mit Wide-Bandgap-Halbleitern liefern diese Leistung kompakt und mit hohem Wirkungsgrad.",
        "Die hohe Schaltfrequenz reduziert Stromrippel und Oberwellenverluste im Stack – das verbessert sowohl den Systemwirkungsgrad als auch die Lebensdauer der Membran.",
      ],
      bullets: [
        "Hochstrom bei niedriger Spannung",
        "Geringer Stromrippel",
        "Reduzierte Oberwellenverluste",
        "Längere Membran-Lebensdauer",
      ],
    },
    ctaTitle: "Skalieren Sie Ihre Elektrolyse-Leistungselektronik",
    ctaBody: "Wir entwickeln effiziente Umrichter- und DC-DC-Lösungen für PEM- und AEM-Elektrolyseure.",
    ctaButton: "Kontakt aufnehmen",
  },
  en: {
    heroEyebrow: "Green Hydrogen",
    heroTitle: "Efficient power electronics for green hydrogen",
    heroSubtitle:
      "The efficiency of green hydrogen production hinges on power electronics. Wide-bandgap semiconductors increase efficiency and power density along the entire DC energy path.",
    highlights: [
      {
        title: "Grid Coupling",
        text: "AC/DC rectifiers couple electrolyzers to the grid and to renewable sources — grid-compliant and with a high power factor.",
      },
      {
        title: "High-Frequency DC-DC Converters",
        text: "WBG-based DC-DC stages deliver the high current at low voltage that PEM and AEM electrolyzers require.",
      },
      {
        title: "Reduced Harmonics",
        text: "Higher switching frequencies and precise control minimize current ripple and harmonic losses in the electrolyzer stack.",
      },
    ],
    f1: {
      alt: "Green hydrogen plant",
      eyebrow: "Grid Coupling",
      title: "From the grid to the electrolyzer",
      body: [
        "Green hydrogen is produced by electrolysis powered by renewable electricity. The decisive interface is the power electronics that turn volatile wind and solar power into the precisely regulated direct current the electrolyzer needs.",
        "SiC-based rectifiers couple the electrolyzer to the grid in a compliant way and keep the power factor high — with minimal conversion losses.",
      ],
      bullets: [
        "Grid-compliant AC/DC stage",
        "Coupling to wind & solar",
        "High power factor",
        "Minimal conversion losses",
      ],
    },
    f2: {
      alt: "AEM electrolyzer",
      eyebrow: "DC-DC Conversion",
      title: "High current for PEM and AEM stacks",
      body: [
        "Electrolyzer stacks require very high currents at low voltage. High-frequency DC-DC converters with wide-bandgap semiconductors deliver this power compactly and with high efficiency.",
        "The high switching frequency reduces current ripple and harmonic losses in the stack — improving both system efficiency and membrane lifetime.",
      ],
      bullets: [
        "High current at low voltage",
        "Low current ripple",
        "Reduced harmonic losses",
        "Longer membrane lifetime",
      ],
    },
    ctaTitle: "Scale your electrolysis power electronics",
    ctaBody: "We develop efficient converter and DC-DC solutions for PEM and AEM electrolyzers.",
    ctaButton: "Get in touch",
  },
};

const META: Record<Lang, PageMeta> = {
  de: {
    title: "Efficient Power Electronics for Green Hydrogen",
    description:
      "The efficiency of green hydrogen production hinges on power electronics. Wide-bandgap semiconductors increase efficiency and power density",
    keywords: ["power electronics", "green hydrogen", "electrolyzers", "DC-DC converter"],
  },
  en: {
    title: "Efficient Power Electronics for Green Hydrogen",
    description:
      "The efficiency of green hydrogen production hinges on power electronics. Wide-bandgap semiconductors increase efficiency and power density",
    keywords: ["power electronics", "green hydrogen", "electrolyzers", "DC-DC converter"],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const l = hasLang(lang) ? lang : "de";
  return buildMetadata(l, "/applications/hydrogen", META[l]);
}

export default async function HydrogenPage({
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
          icon={Droplets}
          title={t.heroTitle}
          subtitle={t.heroSubtitle}
          width="wide"
        />

        {/* Highlights */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.highlights.map((h, i) => {
              const Icon = HIGHLIGHT_ICONS[i];
              return (
                <Reveal key={h.title} delay={i * 0.1}>
                  <div className="glass-panel glass-panel-hover h-full p-7">
                    <div className="p-3 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan w-fit mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-brand-navy mb-2">{h.title}</h3>
                    <p className="text-sm text-brand-navy/60 leading-relaxed">{h.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* Features */}
        <section className="py-16 sm:py-24 bg-surface-light border-y border-brand-navy/8">
          <div className="max-w-7xl mx-auto px-6 space-y-24">
            <SplitFeature
              image="/images/green-hydrogen.png"
              alt={t.f1.alt}
              imageSide="right"
              eyebrow={t.f1.eyebrow}
              title={t.f1.title}
              body={t.f1.body}
              bullets={t.f1.bullets}
            />

            <SplitFeature
              image="/images/hydrogen-aem-electrolyzer.jpg"
              alt={t.f2.alt}
              imageSide="left"
              eyebrow={t.f2.eyebrow}
              title={t.f2.title}
              body={t.f2.body}
              bullets={t.f2.bullets}
            />
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white border-t border-brand-navy/8">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-navy mb-4">
              {t.ctaTitle}
            </h2>
            <p className="text-brand-navy/60 mb-8">
              {t.ctaBody}
            </p>
            <Link
              href={localePath(lang, "/contacts")}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-brand-navy text-white font-semibold text-sm hover:bg-brand-navy/90 transition-colors"
            >
              {t.ctaButton} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
