import type { Metadata } from "next";
import Link from "next/link";
import { Car, ArrowRight, Gauge, BatteryCharging, Wind, TrendingDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SplitFeature from "@/components/SplitFeature";
import Reveal from "@/components/Reveal";
import { hasLang, localePath, type Lang } from "@/lib/i18n";
import { buildMetadata, type PageMeta } from "@/lib/seo";

const HIGHLIGHT_ICONS = [Gauge, BatteryCharging, Wind, TrendingDown];

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
    f3: Feature;
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
  }
> = {
  de: {
    heroEyebrow: "Automotive & E-Mobilität",
    heroTitle: "Elektrifizierung von Nutzfahrzeugen",
    heroSubtitle:
      "Siliziumkarbid (SiC) und Galliumnitrid (GaN) beschleunigen den Umstieg auf elektrifizierte Nutzfahrzeuge – von Antriebssträngen über Onboard-Charging bis zu Hilfsaggregaten.",
    highlights: [
      {
        title: "Antriebsstrang",
        text: "SiC-Traktionsinverter senken die Verluste um bis zu 44 % gegenüber Si-IGBT – mehr Reichweite bei gleicher Batterie.",
      },
      {
        title: "Megawatt-Laden",
        text: "Hochspannungs-SiC ermöglicht das Megawatt Charging System (MCS) für Nutzfahrzeuge mit minimalen Ladeverlusten.",
      },
      {
        title: "Hilfsinverter (ePTO)",
        text: "Effiziente Auxiliary-Inverter für Nebenaggregate und elektrische Power-Take-Off-Systeme erhöhen die Gesamteffizienz.",
      },
      {
        title: "TCO-Reduktion",
        text: "Höhere Effizienz, geringeres Gewicht und einfachere Kühlung senken die Total Cost of Ownership über die Fahrzeuglebensdauer.",
      },
    ],
    f1: {
      alt: "Elektrifizierter Lkw",
      eyebrow: "Powertrain",
      title: "Antriebsstränge für schwere Lasten",
      body: [
        "Nutzfahrzeuge stellen die härtesten Anforderungen an die Leistungselektronik: hohe Dauerleistung, große Temperaturspannen und lange Lebensdauer. SiC-Traktionsinverter liefern hier den entscheidenden Effizienzvorteil.",
        "Volle SiC-Module (MOSFET + Diode) reduzieren die Gesamtverluste um bis zu 44 % gegenüber Si-IGBT-Lösungen und ermöglichen kompaktere, leichtere Antriebe für 800-V-Plattformen.",
      ],
      bullets: [
        "800-V-Plattform-fähig",
        "−44 % Inverterverluste",
        "Hohe Dauerleistung & Lebensdauer",
        "Funktionale Sicherheit nach ISO 26262",
      ],
    },
    f2: {
      alt: "Megawatt-Ladeinfrastruktur",
      eyebrow: "Charging",
      title: "Megawatt-Charging & Onboard-Charger",
      body: [
        "Die Elektrifizierung des Schwerlastverkehrs erfordert Ladeleistungen im Megawattbereich. Wide-Bandgap-Halbleiter ermöglichen kompakte, hocheffiziente DC-Ladesäulen und Onboard-Charger.",
        "Hohe Schaltfrequenzen verkleinern Magnetik und Filter, senken die Verluste und verkürzen die Standzeiten im Fuhrpark.",
      ],
      bullets: [
        "Megawatt Charging System (MCS)",
        "Kompakte Onboard-Charger",
        "Hohe Leistungsdichte",
        "Geringe Lade- & Wandlungsverluste",
      ],
    },
    f3: {
      alt: "Elektrischer Power-Take-Off",
      eyebrow: "Auxiliary",
      title: "Hilfsinverter & TCO",
      body: [
        "Neben dem Hauptantrieb entscheiden Nebenaggregate über die reale Effizienz. Unsere Auxiliary-Inverter und ePTO-Systeme versorgen Kompressoren, Pumpen und Arbeitshydraulik elektrisch und verlustarm.",
        "In Summe senken höhere Effizienz, geringeres Gewicht und vereinfachte Kühlung die Total Cost of Ownership (TCO) über die gesamte Fahrzeuglebensdauer.",
      ],
      bullets: [
        "Elektrische Nebenaggregate",
        "ePTO für Arbeitsmaschinen",
        "Weniger Gewicht & Kühlaufwand",
        "Niedrigere TCO",
      ],
    },
    ctaTitle: "Elektrifizieren Sie Ihre Fahrzeugplattform",
    ctaBody: "Wir entwickeln zertifizierte SiC-/GaN-Leistungselektronik für Ihren Antriebsstrang.",
    ctaButton: "Kontakt aufnehmen",
  },
  en: {
    heroEyebrow: "Automotive & E-Mobility",
    heroTitle: "Electrification of Commercial Vehicles",
    heroSubtitle:
      "Silicon carbide (SiC) and gallium nitride (GaN) accelerate the transition to electrified commercial vehicles — from powertrains and onboard charging to auxiliary systems.",
    highlights: [
      {
        title: "Powertrain",
        text: "SiC traction inverters cut losses by up to 44% versus Si IGBTs — more range from the same battery.",
      },
      {
        title: "Megawatt Charging",
        text: "High-voltage SiC enables the Megawatt Charging System (MCS) for commercial vehicles with minimal charging losses.",
      },
      {
        title: "Auxiliary Inverters (ePTO)",
        text: "Efficient auxiliary inverters for ancillary units and electric power take-off systems raise overall efficiency.",
      },
      {
        title: "TCO Reduction",
        text: "Higher efficiency, lower weight and simpler cooling reduce total cost of ownership over the vehicle's lifetime.",
      },
    ],
    f1: {
      alt: "Electrified truck",
      eyebrow: "Powertrain",
      title: "Powertrains for heavy loads",
      body: [
        "Commercial vehicles place the toughest demands on power electronics: high continuous power, wide temperature ranges and long service life. SiC traction inverters deliver the decisive efficiency advantage here.",
        "Full SiC modules (MOSFET + diode) reduce total losses by up to 44% compared with Si IGBT solutions and enable more compact, lighter drives for 800 V platforms.",
      ],
      bullets: [
        "800 V platform ready",
        "−44% inverter losses",
        "High continuous power & lifetime",
        "Functional safety per ISO 26262",
      ],
    },
    f2: {
      alt: "Megawatt charging infrastructure",
      eyebrow: "Charging",
      title: "Megawatt charging & onboard chargers",
      body: [
        "Electrifying heavy-duty transport requires charging power in the megawatt range. Wide-bandgap semiconductors enable compact, highly efficient DC charging stations and onboard chargers.",
        "High switching frequencies shrink magnetics and filters, cut losses and shorten fleet downtime.",
      ],
      bullets: [
        "Megawatt Charging System (MCS)",
        "Compact onboard chargers",
        "High power density",
        "Low charging & conversion losses",
      ],
    },
    f3: {
      alt: "Electric power take-off",
      eyebrow: "Auxiliary",
      title: "Auxiliary inverters & TCO",
      body: [
        "Beyond the main drive, auxiliary units determine real-world efficiency. Our auxiliary inverters and ePTO systems power compressors, pumps and working hydraulics electrically and with minimal loss.",
        "Taken together, higher efficiency, lower weight and simplified cooling reduce total cost of ownership (TCO) over the entire vehicle lifetime.",
      ],
      bullets: [
        "Electric auxiliary units",
        "ePTO for work machines",
        "Less weight & cooling effort",
        "Lower TCO",
      ],
    },
    ctaTitle: "Electrify your vehicle platform",
    ctaBody: "We develop certified SiC/GaN power electronics for your powertrain.",
    ctaButton: "Get in touch",
  },
};

const META: Record<Lang, PageMeta> = {
  de: {
    title: "Advancing Technologies for Zero-Emission e-Mobility",
    description:
      "Silicon Carbide (SiC) and Gallium Nitride (GaN) are accelerating the transition to electrified commercial vehicles",
    keywords: ["powertrain", "aux-inverter", "onboard-charging", "commercial vehicles", "TCO"],
  },
  en: {
    title: "Advancing Technologies for Zero-Emission e-Mobility",
    description:
      "Silicon Carbide (SiC) and Gallium Nitride (GaN) are accelerating the transition to electrified commercial vehicles",
    keywords: ["powertrain", "aux-inverter", "onboard-charging", "commercial vehicles", "TCO"],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const l = hasLang(lang) ? lang : "de";
  return buildMetadata(l, "/applications/automotive-emobility", META[l]);
}

export default async function AutomotiveEmobilityPage({
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
          icon={Car}
          title={t.heroTitle}
          subtitle={t.heroSubtitle}
          width="wide"
        />

        {/* Highlights */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.highlights.map((h, i) => {
              const Icon = HIGHLIGHT_ICONS[i];
              return (
                <Reveal key={h.title} delay={i * 0.08}>
                  <div className="glass-panel glass-panel-hover h-full p-7">
                    <div className="p-3 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan w-fit mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-base font-bold text-brand-navy mb-2">{h.title}</h3>
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
              image="/images/electric-truck.png"
              alt={t.f1.alt}
              imageSide="right"
              eyebrow={t.f1.eyebrow}
              title={t.f1.title}
              body={t.f1.body}
              bullets={t.f1.bullets}
            />

            <SplitFeature
              image="/images/charging-infrastructure.jpg"
              alt={t.f2.alt}
              imageSide="left"
              eyebrow={t.f2.eyebrow}
              title={t.f2.title}
              body={t.f2.body}
              bullets={t.f2.bullets}
            />

            <SplitFeature
              image="/images/ePTO.png"
              alt={t.f3.alt}
              imageSide="right"
              eyebrow={t.f3.eyebrow}
              title={t.f3.title}
              body={t.f3.body}
              bullets={t.f3.bullets}
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
