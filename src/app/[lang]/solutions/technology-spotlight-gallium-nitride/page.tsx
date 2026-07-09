import type { Metadata } from "next";
import { Atom, Cpu, ServerCog, Bot, Rocket } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SpotlightTable from "@/components/SpotlightTable";
import Reveal from "@/components/Reveal";
import { hasLang, type Lang } from "@/lib/i18n";

const TREND_ICONS = [Cpu, ServerCog, Bot];

const COPY: Record<
  Lang,
  {
    heroTitle: string;
    heroSubtitle: string;
    stats: { value: string; label: string }[];
    foundationEyebrow: string;
    foundationTitle: string;
    foundation: { title: string; text: string }[];
    trendsEyebrow: string;
    trendsTitle: string;
    trends: { tag: string; title: string; text: string }[];
    advantagesTitle: string;
    advantages: string[];
    quote: string;
    quoteSource: string;
  }
> = {
  de: {
    heroTitle: "Galliumnitrid (GaN)",
    heroSubtitle:
      "Vom Schnellladegerät bis zum Megawatt-KI-Rack: Wie GaN die Physik der Leistungswandlung über alle wichtigen Anwendungsdomänen hinweg neu definiert. NVIDIAs 800-VDC-Rack-Architektur ist ein struktureller Wendepunkt für GaN.",
    stats: [
      { value: "$355M", label: "Markt Power-GaN 2024" },
      { value: "~$3B", label: "Prognose 2030 (42 % CAGR)" },
      { value: "73 %", label: "Automotive CAGR 2024–2030" },
      { value: "53 %", label: "Data Center + Telecom CAGR" },
    ],
    foundationEyebrow: "Physikalische Grundlage",
    foundationTitle: "Warum GaN Silizium übertrifft",
    foundation: [
      {
        title: "Bandgap 3,4 eV",
        text: "Das breite Bandgap (vs. 1,1 eV bei Si) ermöglicht eine kritische Feldstärke von ~3,3 MV/cm – 11× höher als Silizium. Hochspannungssperrung in deutlich kleinerer Chipgeometrie.",
      },
      {
        title: "AlGaN/GaN-HEMT (2DEG)",
        text: "Die Heterostruktur erzeugt ein zweidimensionales Elektronengas. Elektronenmobilität ~2.000 cm²/Vs ohne Dotierung – niedriger RDS(on) bei hoher Spannung.",
      },
      {
        title: "Zero QRR",
        text: "Keine Minoritätsträger in der GaN-Leitung. 10–100× schnelleres Schalten als Si-MOSFETs. Totzeiten auf einstellige Nanosekunden reduzierbar.",
      },
      {
        title: "GaN-on-Si: der Kostenpfad",
        text: "Epitaxie auf 8-Zoll-Si-Wafern senkt die Substratkosten auf ~$1/cm². Kompatibel mit bestehenden CMOS-Fabs und damit volumentauglich.",
      },
    ],
    trendsEyebrow: "Schlüsseltrends 2024 / 2025",
    trendsTitle: "Wo GaN den Markt bewegt",
    trends: [
      {
        tag: "Trend 1 · Fraunhofer IAF",
        title: "Vertikale GaN Power-ICs",
        text: "Die CAVET-Struktur erhöht die Durchbruchspannung ohne Vergrößerung der Chipfläche. Fraunhofer IAF demonstrierte 500 kHz / 40 V im Doppelpuls-Test auf einem einzigen GaN-on-GaN-Wafer.",
      },
      {
        tag: "Trend 2 · OCP 2025",
        title: "GaN & 800-VDC-Rack",
        text: "1.250-V- und 1.700-V-GaN-HEMTs in Serienproduktion (Power Integrations). Navitas zeigt 10 kW 800 V→50 V bei 1 MHz und 98 % Wirkungsgrad. STM/NVIDIA: 12 kW In-Rack-Board.",
      },
      {
        tag: "Trend 3 · EPC",
        title: "GaN in humanoider Robotik",
        text: "Motorsteuerung für ~40 BLDC-Motoren je Roboter, LiDAR-Laser­treiber > 100 MHz und DC-DC-Wandler mit > 5.000 W/in³ – GaN ersetzt Si in jeder Leistungsdomäne.",
      },
    ],
    advantagesTitle: "Die wichtigsten Vorteile",
    advantages: [
      "Zero QRR – fundamentaler Verlust eliminiert",
      "Wirkungsgrade von 98–99 % in LLC/Totem-Pole-PFC",
      "Leistungsdichte > 5.000 W/in³",
      "MHz-Schalten – Magnetik um 10–100× kleiner",
      "Monolithische GaN-IC-Integration",
      "Si-Fab-kompatibel (GaN-on-Si, ~$1/cm²)",
    ],
    quote:
      "„Die Kombination aus KI, Elektrifizierung und Nachhaltigkeitszielen macht GaN in Server- und Telekommunikations-Stromversorgungen der nächsten Generation unverzichtbar.“",
    quoteSource: "— Roy Dagher, Yole Group",
  },
  en: {
    heroTitle: "Gallium Nitride (GaN)",
    heroSubtitle:
      "From fast chargers to megawatt AI racks: how GaN redefines the physics of power conversion across all major application domains. NVIDIA's 800 VDC rack architecture is a structural turning point for GaN.",
    stats: [
      { value: "$355M", label: "Power GaN market 2024" },
      { value: "~$3B", label: "Forecast 2030 (42% CAGR)" },
      { value: "73%", label: "Automotive CAGR 2024–2030" },
      { value: "53%", label: "Data center + telecom CAGR" },
    ],
    foundationEyebrow: "Physical Foundation",
    foundationTitle: "Why GaN outperforms silicon",
    foundation: [
      {
        title: "Bandgap 3.4 eV",
        text: "The wide bandgap (vs. 1.1 eV for Si) enables a critical field strength of ~3.3 MV/cm — 11× higher than silicon. High-voltage blocking in a much smaller chip geometry.",
      },
      {
        title: "AlGaN/GaN HEMT (2DEG)",
        text: "The heterostructure creates a two-dimensional electron gas. Electron mobility of ~2,000 cm²/Vs without doping — low RDS(on) at high voltage.",
      },
      {
        title: "Zero QRR",
        text: "No minority carriers in GaN conduction. Switching 10–100× faster than Si MOSFETs. Dead times can be reduced to single-digit nanoseconds.",
      },
      {
        title: "GaN-on-Si: the cost path",
        text: "Epitaxy on 8-inch Si wafers cuts substrate cost to ~$1/cm². Compatible with existing CMOS fabs — and therefore volume-ready.",
      },
    ],
    trendsEyebrow: "Key Trends 2024 / 2025",
    trendsTitle: "Where GaN is moving the market",
    trends: [
      {
        tag: "Trend 1 · Fraunhofer IAF",
        title: "Vertical GaN power ICs",
        text: "The CAVET structure increases breakdown voltage without enlarging the chip area. Fraunhofer IAF demonstrated 500 kHz / 40 V in double-pulse testing on a single GaN-on-GaN wafer.",
      },
      {
        tag: "Trend 2 · OCP 2025",
        title: "GaN & the 800 VDC rack",
        text: "1,250 V and 1,700 V GaN HEMTs in series production (Power Integrations). Navitas demonstrates 10 kW 800 V→50 V at 1 MHz and 98% efficiency. STM/NVIDIA: 12 kW in-rack board.",
      },
      {
        tag: "Trend 3 · EPC",
        title: "GaN in humanoid robotics",
        text: "Motor control for ~40 BLDC motors per robot, LiDAR laser drivers > 100 MHz and DC-DC converters with > 5,000 W/in³ — GaN replaces Si in every power domain.",
      },
    ],
    advantagesTitle: "Key Advantages",
    advantages: [
      "Zero QRR — a fundamental loss eliminated",
      "98–99% efficiency in LLC/totem-pole PFC",
      "Power density > 5,000 W/in³",
      "MHz switching — magnetics 10–100× smaller",
      "Monolithic GaN IC integration",
      "Si-fab compatible (GaN-on-Si, ~$1/cm²)",
    ],
    quote:
      "“The combination of AI, electrification and sustainability goals makes GaN indispensable in next-generation server and telecom power supplies.”",
    quoteSource: "— Roy Dagher, Yole Group",
  },
};

const META: Record<Lang, Metadata> = {
  de: {
    title: "GaN in AI Data Center Power Distribution",
    description:
      "GaN in AI data center power distribution: NVIDIA's 800 VDC rack architecture is a structural inflection point for GaN.",
    keywords: ["gallium nitride - GaN", "NVIDIA 800V DC rack", "high speed switching"],
  },
  en: {
    title: "GaN in AI Data Center Power Distribution",
    description:
      "GaN in AI data center power distribution: NVIDIA's 800 VDC rack architecture is a structural inflection point for GaN.",
    keywords: ["gallium nitride - GaN", "NVIDIA 800V DC rack", "high speed switching"],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return META[hasLang(lang) ? lang : "de"];
}

export default async function GaNSpotlightPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = COPY[hasLang(lang) ? lang : "de"];

  return (
    <div className="flex flex-col min-h-screen bg-white text-brand-navy antialiased">
      <Header />

      <main className="flex-grow">
        <PageHero
          eyebrow="Technology Spotlight"
          icon={Atom}
          title={t.heroTitle}
          subtitle={t.heroSubtitle}
          width="wide"
        />

        {/* Market stats */}
        <section className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-5">
            {t.stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="text-center rounded-2xl border border-brand-navy/8 bg-surface-light py-7 px-3">
                  <div className="font-display text-3xl font-bold text-brand-cyan mb-1">{s.value}</div>
                  <div className="text-xs text-brand-navy/60 leading-snug">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Physical foundation */}
        <section className="py-16 sm:py-20 bg-surface-light border-y border-brand-navy/8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-2 block">
                {t.foundationEyebrow}
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-navy">
                {t.foundationTitle}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.foundation.map((f, i) => (
                <Reveal key={f.title} delay={i * 0.08}>
                  <div className="glass-panel glass-panel-hover h-full p-7">
                    <h3 className="font-display text-lg font-bold text-brand-navy mb-2">{f.title}</h3>
                    <p className="text-sm text-brand-navy/60 leading-relaxed">{f.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison matrix */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <SpotlightTable />
          </div>
        </section>

        {/* Trends */}
        <section className="py-16 sm:py-20 bg-surface-light border-y border-brand-navy/8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-2 block">
                {t.trendsEyebrow}
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-navy">
                {t.trendsTitle}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {t.trends.map((trend, i) => {
                const Icon = TREND_ICONS[i];
                return (
                  <Reveal key={trend.title} delay={i * 0.1}>
                    <div className="glass-panel glass-panel-hover h-full p-7">
                      <div className="p-3 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan w-fit mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-brand-navy/40 block mb-1">
                        {trend.tag}
                      </span>
                      <h3 className="font-display text-base font-bold text-brand-navy mb-2">{trend.title}</h3>
                      <p className="text-sm text-brand-navy/60 leading-relaxed">{trend.text}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-8">
              <Rocket className="w-6 h-6 text-brand-cyan" />
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-navy">
                {t.advantagesTitle}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.advantages.map((a) => (
                <div key={a} className="flex items-start gap-2.5 rounded-xl border border-brand-navy/8 bg-surface-light px-5 py-4">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-cyan shrink-0" />
                  <span className="text-sm text-brand-navy/70">{a}</span>
                </div>
              ))}
            </div>
            <blockquote className="mt-10 border-l-2 border-brand-cyan pl-5 text-brand-navy/70 italic">
              {t.quote} <span className="not-italic text-brand-navy/45 text-sm">{t.quoteSource}</span>
            </blockquote>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
