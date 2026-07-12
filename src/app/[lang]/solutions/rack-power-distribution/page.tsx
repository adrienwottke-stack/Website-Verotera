import type { Metadata } from "next";
import Link from "next/link";
import { Server, ArrowRight, Gauge, Activity, Cable } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SplitFeature from "@/components/SplitFeature";
import PduFlowchart from "@/components/PduFlowchart";
import Reveal from "@/components/Reveal";
import { hasLang, localePath, type Lang } from "@/lib/i18n";
import { buildMetadata, type PageMeta } from "@/lib/seo";

const HIGHLIGHT_ICONS = [Cable, Gauge, Activity];

const COPY: Record<
  Lang,
  {
    heroTitle: string;
    heroSubtitle: string;
    highlights: { title: string; text: string }[];
    f1: { alt: string; eyebrow: string; title: string; body: string[]; bullets: string[] };
    f2: { alt: string; eyebrow: string; title: string; body: string[]; bullets: string[] };
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
  }
> = {
  de: {
    heroTitle: "Stromverteilereinheit - Rack Power Distribution Unit (PDU)",
    heroSubtitle: "Wide-Bandgap SiC/GaN-Technologie gestaltet die Zukunft moderner KI-Rechenzentren.",
    highlights: [
      {
        title: "800 V DC-Verteilung",
        text: "Höhere Busspannung senkt Ströme und I²R-Verluste – kompaktere Stromschienen bei höherer Rack-Leistung.",
      },
      {
        title: "Power-Shelf-Effizienz",
        text: "Full-GaN-DC/DC-Wandler erreichen > 98 % Wirkungsgrad und ersetzen klassische Silizium-MOSFETs.",
      },
      {
        title: "Aktives Lastmanagement",
        text: "Echtzeit-Telemetrie und Solid-State-Breaker priorisieren Lasten dynamisch und schalten sicher ab.",
      },
    ],
    f1: {
      alt: "800 V DC Rack-Architektur",
      eyebrow: "Architektur",
      title: "Vom Netz bis zum GPU-Shelf",
      body: [
        "Moderne KI-Racks ziehen Leistungen im Bereich von 100 kW und mehr. Eine 800-V-DC-Verteilung – wie in der NVIDIA-Rack-Architektur und bei OCP 2025 vorgestellt – reduziert die Verteilungsverluste drastisch gegenüber klassischen 48-V-Bussen.",
        "Ein Solid-State-Transformer wandelt die Netz-Wechselspannung mit GaN-Bauelementen direkt in 800 V DC. Die Smart PDU verteilt diese Energie verlustarm und intelligent an die GPU-Shelves.",
      ],
      bullets: [
        "100 kW+ Rack-Leistung",
        "OCP-/NVIDIA-konforme 800-V-Architektur",
        "GaN-SST mit 98,5 % Wirkungsgrad",
        "Point-of-Load 48 V / 12 V",
      ],
    },
    f2: {
      alt: "Full-GaN Power Shelf",
      eyebrow: "Power Shelf",
      title: "Full-GaN DC/DC-Wandler",
      body: [
        "Im Power Shelf ersetzen GaN-HEMTs die Silizium-MOSFETs. Topologien wie die 3-Level-Halbbrücke mit Matrix-Transformator schalten bei rund 1 MHz und erreichen Systemwirkungsgrade um 98 %.",
        "Die hohe Schaltfrequenz schrumpft die Magnetik und ermöglicht Leistungsdichten von mehreren tausend Watt pro Kubikzoll – entscheidend für die Packungsdichte im Rack.",
      ],
      bullets: [
        "GaN-HEMTs statt Si-MOSFETs",
        "~1 MHz Schaltfrequenz",
        "Systemwirkungsgrad ~98 %",
        "Sehr hohe Leistungsdichte",
      ],
    },
    ctaTitle: "Planen Sie eine 800-V-DC-Rack-Infrastruktur?",
    ctaBody: "Wir unterstützen Sie bei Auslegung, Wandlertopologie und Validierung Ihrer Power-Shelf-Lösung.",
    ctaButton: "Kontakt aufnehmen",
  },
  en: {
    heroTitle: "Power Distribution Unit - Rack Power Distribution Unit (PDU)",
    heroSubtitle: "Wide-bandgap SiC/GaN technology shapes the future of modern AI data centers.",
    highlights: [
      {
        title: "800 V DC Distribution",
        text: "Higher bus voltage cuts currents and I²R losses — more compact busbars at higher rack power.",
      },
      {
        title: "Power Shelf Efficiency",
        text: "Full-GaN DC/DC converters reach > 98% efficiency, replacing classic silicon MOSFETs.",
      },
      {
        title: "Active Load Management",
        text: "Real-time telemetry and solid-state breakers prioritize loads dynamically and disconnect safely.",
      },
    ],
    f1: {
      alt: "800 V DC rack architecture",
      eyebrow: "Architecture",
      title: "From the grid to the GPU shelf",
      body: [
        "Modern AI racks draw power in the range of 100 kW and beyond. An 800 V DC distribution — as introduced in the NVIDIA rack architecture and at OCP 2025 — drastically reduces distribution losses compared with classic 48 V buses.",
        "A solid-state transformer converts grid AC directly into 800 V DC using GaN devices. The smart PDU distributes this power to the GPU shelves — intelligently and with minimal loss.",
      ],
      bullets: [
        "100 kW+ rack power",
        "OCP/NVIDIA-compliant 800 V architecture",
        "GaN SST with 98.5% efficiency",
        "Point-of-load 48 V / 12 V",
      ],
    },
    f2: {
      alt: "Full-GaN power shelf",
      eyebrow: "Power Shelf",
      title: "Full-GaN DC/DC converters",
      body: [
        "In the power shelf, GaN HEMTs replace silicon MOSFETs. Topologies like the 3-level half-bridge with matrix transformer switch at around 1 MHz and reach system efficiencies near 98%.",
        "The high switching frequency shrinks the magnetics and enables power densities of several thousand watts per cubic inch — decisive for packing density in the rack.",
      ],
      bullets: [
        "GaN HEMTs instead of Si MOSFETs",
        "~1 MHz switching frequency",
        "System efficiency ~98%",
        "Very high power density",
      ],
    },
    ctaTitle: "Planning an 800 V DC rack infrastructure?",
    ctaBody: "We support you with sizing, converter topology and validation of your power shelf solution.",
    ctaButton: "Get in touch",
  },
};

const META: Record<Lang, PageMeta> = {
  de: {
    title: "Wide-Bandgap Technology for the Future of AI Data Centers",
    description:
      "The Full-GaN DC/DC converter is a key enabling technology for the Power Shelf, replacing silicon MOSFETs with Gallium Nitride (GaN) devices.",
    keywords: ["rack power distribution unit", "AI data center", "power shelf"],
  },
  en: {
    title: "Wide-Bandgap Technology for the Future of AI Data Centers",
    description:
      "The Full-GaN DC/DC converter is a key enabling technology for the Power Shelf, replacing silicon MOSFETs with Gallium Nitride (GaN) devices.",
    keywords: ["rack power distribution unit", "AI data center", "power shelf"],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const l = hasLang(lang) ? lang : "de";
  return buildMetadata(l, "/solutions/rack-power-distribution", META[l]);
}

export default async function RackPowerDistributionPage({
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
          eyebrow="Sustainable AI Data Center"
          icon={Server}
          title={t.heroTitle}
          subtitle={t.heroSubtitle}
          width="wide"
        />

        {/* Highlights */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
          </div>
        </section>

        {/* Interactive Flowchart */}
        <section className="py-16 sm:py-20 bg-surface-light border-y border-brand-navy/8">
          <div className="max-w-7xl mx-auto px-6">
            <PduFlowchart />
          </div>
        </section>

        {/* Narrative features */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 space-y-24">
            <SplitFeature
              image="/images/ai-data-center-rack.png"
              alt={t.f1.alt}
              imageSide="right"
              eyebrow={t.f1.eyebrow}
              title={t.f1.title}
              body={t.f1.body}
              bullets={t.f1.bullets}
            />

            <SplitFeature
              image="/images/data-center-power.png"
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
        <section className="py-16 bg-surface-light border-t border-brand-navy/8">
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
