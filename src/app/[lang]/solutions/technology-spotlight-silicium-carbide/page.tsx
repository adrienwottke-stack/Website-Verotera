import type { Metadata } from "next";
import Image from "next/image";
import {
  Layers3,
  Atom,
  Zap,
  Thermometer,
  CircuitBoard,
  Cpu,
  Car,
  BatteryCharging,
  Gauge,
  Flame,
  Timer,
  TrendingDown,
  PlugZap,
  Check,
  CheckCircle2,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import BrandWatermark from "@/components/BrandWatermark";
import SpotlightTable from "@/components/SpotlightTable";
import ContactSection from "@/components/ContactSection";
import { hasLang, type Lang } from "@/lib/i18n";
import { buildMetadata, type PageMeta } from "@/lib/seo";

const FOUNDATION_ICONS = [Atom, Zap, Thermometer, CircuitBoard];
const TREND_ICONS = [Cpu, Car, BatteryCharging];
const ADVANTAGE_ICONS = [Gauge, Thermometer, Flame, Timer, TrendingDown, PlugZap];

const COPY: Record<
  Lang,
  {
    heroEyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    market: {
      teaser: string;
      headline: string;
      body: string;
      stats: { value: string; label: string }[];
      source: string;
    };
    profile: {
      teaser: string;
      headline: string;
      body: string;
      subEyebrow: string;
      title: string;
      paragraphs: string[];
      listLabel: string;
      items: string[];
      imageAlt: string;
      techLabel: string;
      rows: { label: string; value: string }[];
    };
    foundation: {
      teaser: string;
      headline: string;
      cards: { title: string; text: string }[];
      source: string;
    };
    trends: {
      teaser: string;
      headline: string;
      cards: { tag: string; title: string; points: string[]; source: string }[];
    };
    outlook: {
      teaser: string;
      headline: string;
      cols: { title: string; stat: string; text: string }[];
    };
    advantages: {
      teaser: string;
      headline: string;
      cards: { title: string; text: string }[];
      sources: string;
      closing: string;
    };
    roadmap: {
      subEyebrow: string;
      title: string;
      body: string;
      bullets: string[];
      imageAlt: string;
    };
  }
> = {
  de: {
    heroEyebrow: "Lösungen",
    heroTitle: "Technologie Spotlight Siliziumkarbid (SiC)",
    heroSubtitle:
      "Die dominante Wide-Bandgap-Plattform für Hochspannungs- und Hochtemperatur-Leistungswandlung – von EV-Traktionswechselrichtern über industrielle Erneuerbare bis zu KI-Rechenzentren.",
    market: {
      teaser: "Globaler Markt SiC-Devices",
      headline: "Auf dem Weg zum 10-Milliarden-Dollar-Markt",
      body: "SiC: Die Wide-Bandgap-Plattform, die Effizienz in Elektrofahrzeugen, Solarenergie und industriellen Antrieben vorantreibt – vom Bauelement bis zum System.",
      stats: [
        { value: "$10,3 Mrd.", label: "SiC-Bauteilmarkt 2030" },
        { value: "20 %", label: "CAGR 2026–2030" },
        { value: "$6,3 Mrd.", label: "Automotive 2030" },
        { value: "$1,0 Mrd.", label: "Renewables & Energie 2030" },
      ],
      source: "Quelle: Yole Group – Power SiC 2025",
    },
    profile: {
      teaser: "Anwendungsprofil",
      headline: "Optimiert für Hochspannung, hohe Leistung und hohe Temperatur",
      body: "SiC kombiniert hohe Durchbruchfeldstärke mit guter Wärmeleitfähigkeit und robuster Funktion unter anspruchsvollen elektrischen und thermischen Randbedingungen.",
      subEyebrow: "Design Impact",
      title: "Vom Bauelement zum System",
      paragraphs: [
        "Der Einsatz von SiC kann die Leistungsverluste in Hochspannungs-Wandlerstufen deutlich reduzieren. Dadurch werden kleinere Kühlsysteme, höhere Schaltfrequenzen und kompaktere Leistungseinheiten möglich.",
        "In automobilen und erneuerbaren Energiesystemen entsteht der Nutzen nicht nur auf Bauelementebene, sondern auf Systemebene: geringere thermische Belastung, niedrigeres Gewicht und bessere Energienutzung.",
      ],
      listLabel: "SiC eignet sich besonders für",
      items: [
        "Traktionswechselrichter für Elektrofahrzeuge",
        "On-Board-Charger",
        "DC-Schnellladen",
        "Solarwechselrichter",
        "Energiespeichersysteme",
        "Industrieantriebe",
        "Netzgekoppelte Leistungswandlung",
      ],
      imageAlt: "WBG-Leistungsmodul SiC",
      techLabel: "Technisches Profil",
      rows: [
        { label: "Material", value: "Siliziumkarbid" },
        { label: "Typische Stärke", value: "Hohe Spannung, hohe Temperatur und hohe Robustheit" },
        { label: "Typische Bauelemente", value: "SiC-MOSFETs, SiC-Schottky-Dioden und SiC-Leistungsmodule" },
        { label: "Typische Spannungsklassen", value: "650 V, 750 V, 1.200 V, 1.700 V und darüber" },
        { label: "Systemnutzen", value: "Geringere Verluste und höhere Effizienz in Hochleistungs-Wandlerstufen" },
      ],
    },
    foundation: {
      teaser: "Physikalische Grundlagen",
      headline: "Warum SiC die Hochspannungs- und Hochtemperatur-Leistungswandlung dominiert",
      cards: [
        {
          title: "Bandlücke: 3,3 eV (3× Si)",
          text: "Die breite Bandlücke ermöglicht den Betrieb mehrere hundert Grad Celsius über den Si-Grenzen. Aktuelles Sperrschichtlimit: 175 °C – Zielwert 200 °C.",
        },
        {
          title: "Durchbruchfeldstärke: ~3,0 MV/cm",
          text: "10-mal höher als Si. Die Driftzone wird 10-mal dünner – der Widerstand ist umgekehrt proportional zu E³, was zu einem ~1.000-fach niedrigeren Driftwiderstand führt.",
        },
        {
          title: "Wärmeleitfähigkeit: 3× Si",
          text: "3-mal besser als Si und GaN. Leitet Wärme schneller vom Chip ab – ermöglicht höhere Stromstärken bei gleicher Sperrschichttemperatur oder vereinfachte Kühlung.",
        },
        {
          title: "Normally-off SiC-MOSFET",
          text: "Niedriger RDS(on), bidirektionaler Strom (1. und 3. Quadrant), keine Minoritätsträgerspeicherung – kein Schweifstrom. Überlegen gegenüber IGBT bei Teillast.",
        },
      ],
      source: "Quelle: Microchip Technology; Bodo's Power Systems Sep. 2024; Yole Group",
    },
    trends: {
      teaser: "Berichtet in Bodo's Power Systems",
      headline: "Schlüsseltrends 2024 / 2025",
      cards: [
        {
          tag: "ROHM EcoSiC · April 2026",
          title: "SiC-MOSFETs der 5. Generation",
          points: [
            "RDS(on) um ~30 % reduziert bei Tj = 175 °C vs. 4. Generation – bei gleicher Sperrspannung und Chipfläche",
            "Trench-SiC-MOSFET-Architektur: kleinere Zellteilung, optimiertes Trägerdotierungsprofil",
            "Zielanwendungen: xEV-Traktionswechselrichter, OBCs, DC-DC-Wandler, KI-Server-Netzteile, PV, ESS, UPS, eVTOL",
            "Waferdurchmesser wächst weiter: 6-Zoll (150 mm) Mainstream, 8-Zoll (200 mm) in Qualifikation",
          ],
          source: "ROHM EcoSiC 5th Gen – Bodo's Power Systems, April 2026",
        },
        {
          tag: "PCIM-2025-Panel · Automotive",
          title: "SiC in 800-V-EV-Traktionswechselrichtern",
          points: [
            "800-V-EV-Plattformen zeigen höhere SiC-Durchdringung als 400-V-Flotten – mehr 800-V-Modelle in 2025 eingeführt",
            "ST Gen-4 STPOWER SiC: 750-V- und 1.200-V-Klassen für Traktionswechselrichter; Gen-5-Planarstruktur in Entwicklung",
            "Vollständiges SiC-Modul (SiC-MOSFET + SiC-Diode) senkt die Gesamtwechselrichterverluste um ~44 % vs. Si-IGBT + FRD",
            "Automotive bleibt bis 2030 ~70 % der globalen SiC-Nachfrage – trotz kurzfristiger EV-Marktabschwächung",
          ],
          source: "STMicroelectronics Sep. 2024; Bodo's PCIM-2025-SiC-Panel; Yole Group",
        },
        {
          tag: "Bodo's Sep. 2024 · Industrie",
          title: "Hochvolt-SiC-Battery-Disconnect-Schalter",
          points: [
            "SiC-MOSFET ideal für Solid-State-Disconnect an 400–1.000-V-DC-Bussen: niedriger RDS(on), bidirektional, kein Latch-up",
            "Wärmeleitfähigkeit 3× Si: niedrigerer Rth junction-to-case – mehr Strom oder einfachere Kühlung",
            "mSiC-Module (Microchip): AlN-Substrat + Cu-Bodenplatte Standard; Si₃N₄ + AlSiC-Bodenplatte für DO-160-Qualifikation",
            "Keine Lichtbogen-Degradation vs. Relais/Schütze – unbegrenzte Schaltzyklen, vorgelagerte Sicherung entfällt",
          ],
          source: "Microchip Technology / Bodo's Power Systems, September 2024",
        },
      ],
    },
    outlook: {
      teaser: "Marktausblick",
      headline: "Korrektur, 8-Zoll-Übergang, vertikale Integration",
      cols: [
        {
          title: "Kurzfristige Korrektur",
          stat: "~50–70 %",
          text: "Fab-Auslastung während der EV-Verlangsamung 2024–2025 – Erholung 2026–2028 erwartet.",
        },
        {
          title: "8-Zoll-Wafer-Übergang",
          stat: "200 mm",
          text: "Wolfspeed erzielt bereits mehr Umsatz mit 8-Zoll- als mit 6-Zoll-Wafern; Infineon und Bosch starten 2025 in die 8-Zoll-Produktion.",
        },
        {
          title: "Vertikale Integration",
          stat: ">$30 Mrd.",
          text: "IDM-Modell (Design + Fab + Packaging) ist Standard für Automotive-SiC – angekündigte globale Investitionen 2019–2025.",
        },
        {
          title: "Data-Center-Chance",
          stat: "$200 Mio.",
          text: "SiC in der Hochleistungs-DC-Stromversorgung von Rechenzentren – Marktpotenzial über fünf Jahre.",
        },
      ],
    },
    advantages: {
      teaser: "Entscheidende Vorteile",
      headline: "Warum SiC der Leistungshalbleiter ist, den die E-Mobilität nicht ignorieren kann",
      cards: [
        {
          title: "Niedriger Driftwiderstand (~1.000× vs. Si)",
          text: "Das hohe elektrische Feld potenziert den Durchbruchvorteil – ultra-niedriger RDS(on) bei 650–3.300 V.",
        },
        {
          title: "Wärmeleitfähigkeit 3× Si und GaN",
          text: "Schnellere Wärmeabfuhr – ermöglicht höhere Stromdichte oder vereinfachte Kühlung bei gleicher Sperrschichttemperatur.",
        },
        {
          title: "Höhere Sperrschichttemperatur (175 → 200 °C)",
          text: "Die breite Bandlücke erlaubt den Betrieb weit oberhalb der Si-Grenzen – entscheidend für automobile Unterhauben-Designs.",
        },
        {
          title: "Keine Minoritätsträgerspeicherung",
          text: "Kein Schweifstrom beim Abschalten. Überlegene Teillasteffizienz vs. IGBT – kritisch für die EV-Reichweite.",
        },
        {
          title: "Bis zu 44 % geringere Wechselrichterverluste",
          text: "Vollständiges SiC-Modul vs. Si-IGBT + FRD: Gesamtverluste halbiert, Schaltverluste um ~80 % reduziert.",
        },
        {
          title: "Bewährt bis 3.300 V (Industrie/Netz)",
          text: "Spannungsbereich jenseits von GaN. Dominiert Traktion, EV-Ladetechnik, PV, ESS und Halbleiter-Leistungsschalter.",
        },
      ],
      sources:
        "Quellen: Bodo's Power Systems Sep. 2024 & Apr. 2026; ROHM; STMicroelectronics; Yole Group Power SiC 2025; Microchip Technology",
      closing: "SiC wird zum Leistungshalbleiter des Elektrifizierungszeitalters.",
    },
    roadmap: {
      subEyebrow: "Ausblick & Technologie-Roadmap",
      title: "SiC in erneuerbaren Energien & netzgekoppelten Speichern",
      body: "Neue Bauelementearchitekturen gestalten die Zukunft der Leistungskonvertierung – von Utility-Scale-Photovoltaik bis zu netzgekoppelten Speichern.",
      bullets: [
        "1.500-V-Utility-Scale-PV: SiC-ANPC-Topologie bei 48 kHz ermöglicht über 99 % Spitzenwirkungsgrad",
        "Netzmaßstäbliche ESS: bidirektionale Wandler mit 1.200-V-SiC-MOSFETs in 3-Level-Topologie ersetzen IGBT + FRD",
      ],
      imageAlt: "Erneuerbare Energien und netzgekoppelte Speicher mit SiC-Leistungselektronik",
    },
  },
  en: {
    heroEyebrow: "Solutions",
    heroTitle: "Technology Spotlight Silicon Carbide (SiC)",
    heroSubtitle:
      "The dominant wide-bandgap platform for high-voltage, high-temperature power conversion — from EV traction inverters to industrial renewables and AI data centers.",
    market: {
      teaser: "Global SiC Device Market",
      headline: "On the way to a $10 billion market",
      body: "SiC: the wide-bandgap platform driving efficiency in electric vehicles, solar energy and industrial drives — from device to system.",
      stats: [
        { value: "$10.3B", label: "SiC device market 2030" },
        { value: "20%", label: "CAGR 2026–2030" },
        { value: "$6.3B", label: "Automotive 2030" },
        { value: "$1.0B", label: "Renewables & energy 2030" },
      ],
      source: "Source: Yole Group – Power SiC 2025",
    },
    profile: {
      teaser: "Application Profile",
      headline: "Optimized for high voltage, high power and high temperature",
      body: "SiC combines a high breakdown field with good thermal conductivity and robust operation under demanding electrical and thermal boundary conditions.",
      subEyebrow: "Design Impact",
      title: "From device to system",
      paragraphs: [
        "Using SiC can significantly reduce power losses in high-voltage conversion stages. This enables smaller cooling systems, higher switching frequencies and more compact power units.",
        "In automotive and renewable-energy systems, the benefit arises not only at device level but at system level: lower thermal stress, lower weight and better energy utilization.",
      ],
      listLabel: "SiC is particularly suited for",
      items: [
        "EV traction inverters",
        "On-board chargers",
        "DC fast charging",
        "Solar inverters",
        "Energy storage systems",
        "Industrial drives",
        "Grid-tied power conversion",
      ],
      imageAlt: "WBG power module SiC",
      techLabel: "Technical Profile",
      rows: [
        { label: "Material", value: "Silicon carbide" },
        { label: "Typical strength", value: "High voltage, high temperature and high robustness" },
        { label: "Typical devices", value: "SiC MOSFETs, SiC Schottky diodes and SiC power modules" },
        { label: "Typical voltage classes", value: "650 V, 750 V, 1,200 V, 1,700 V and above" },
        { label: "System benefit", value: "Lower losses and higher efficiency in high-power conversion stages" },
      ],
    },
    foundation: {
      teaser: "Physical Foundation",
      headline: "Why SiC dominates high-voltage, high-temperature power conversion",
      cards: [
        {
          title: "Bandgap: 3.3 eV (3× Si)",
          text: "The wide bandgap enables operation several hundred °C above the Si limits. Current junction limit: 175 °C — targeting 200 °C.",
        },
        {
          title: "Breakdown field: ~3.0 MV/cm",
          text: "10× higher than Si. The drift region becomes 10× thinner — resistance is inversely proportional to E³, yielding ~1,000× lower drift resistance.",
        },
        {
          title: "Thermal conductivity: 3× Si",
          text: "3× better than Si and GaN. Draws heat from the chip faster — enabling higher current at the same junction temperature, or simpler cooling.",
        },
        {
          title: "Normally-off SiC MOSFET",
          text: "Low RDS(on), bidirectional current (1st and 3rd quadrant), no minority-carrier storage — no tail current. Superior to IGBTs at partial load.",
        },
      ],
      source: "Source: Microchip Technology; Bodo's Power Systems Sep. 2024; Yole Group",
    },
    trends: {
      teaser: "Reported in Bodo's Power Systems",
      headline: "Key Trends 2024 / 2025",
      cards: [
        {
          tag: "ROHM EcoSiC · April 2026",
          title: "5th-generation SiC MOSFETs",
          points: [
            "RDS(on) reduced by ~30% at Tj = 175 °C vs. 4th gen — at equivalent breakdown voltage and chip area",
            "Trench SiC MOSFET architecture: lower cell pitch, optimized carrier doping profile",
            "Targets xEV traction inverters, OBCs, DC-DC converters, AI server power supplies, PV, ESS, UPS, eVTOL",
            "Wafer diameters keep growing: 6-inch (150 mm) mainstream, 8-inch (200 mm) in qualification",
          ],
          source: "ROHM EcoSiC 5th Gen — Bodo's Power Systems, April 2026",
        },
        {
          tag: "PCIM 2025 panel · Automotive",
          title: "SiC in 800 V EV traction inverters",
          points: [
            "800 V EV platforms show higher SiC penetration than 400 V fleets — more 800 V models launched in 2025",
            "ST Gen-4 STPOWER SiC: 750 V and 1,200 V classes targeting traction inverters; Gen-5 planar structure in development",
            "A full SiC module (SiC MOSFET + SiC diode) cuts total inverter losses by ~44% vs. Si IGBT + FRD",
            "Automotive remains ~70% of global SiC demand through 2030 — despite the short-term EV slowdown",
          ],
          source: "STMicroelectronics Sep. 2024; Bodo's PCIM 2025 SiC panel; Yole Group",
        },
        {
          tag: "Bodo's Sep. 2024 · Industrial",
          title: "High-voltage SiC battery disconnect switches",
          points: [
            "SiC MOSFETs are ideal for solid-state disconnects on 400–1,000 V DC buses: low RDS(on), bidirectional, no latch-up",
            "Thermal conductivity 3× Si: lower junction-to-case Rth — higher current or simpler cooling",
            "mSiC modules (Microchip): AlN substrate + Cu baseplate standard; Si₃N₄ + AlSiC baseplate for DO-160 qualification",
            "No arcing degradation vs. relays/contactors — unlimited switching cycles, no upstream fuse required",
          ],
          source: "Microchip Technology / Bodo's Power Systems, September 2024",
        },
      ],
    },
    outlook: {
      teaser: "Market Outlook",
      headline: "Correction, 8-inch transition, vertical integration",
      cols: [
        {
          title: "Short-term correction",
          stat: "~50–70%",
          text: "Fab utilization during the 2024–2025 EV slowdown — recovery expected 2026–2028.",
        },
        {
          title: "8-inch wafer transition",
          stat: "200 mm",
          text: "Wolfspeed already generates more revenue on 8-inch than on 6-inch wafers; Infineon and Bosch enter 8-inch production in 2025.",
        },
        {
          title: "Vertical integration",
          stat: ">$30B",
          text: "The IDM model (design + fab + packaging) is standard for automotive SiC — announced global investments 2019–2025.",
        },
        {
          title: "Data center opportunity",
          stat: "$200M",
          text: "SiC in high-power DC power delivery for data centers — market potential over five years.",
        },
      ],
    },
    advantages: {
      teaser: "Key Advantages",
      headline: "Why SiC is the power semiconductor e-mobility cannot ignore",
      cards: [
        {
          title: "Low drift resistance (~1,000× vs. Si)",
          text: "The high electric field cubes the breakdown advantage — ultra-low RDS(on) at 650–3,300 V.",
        },
        {
          title: "Thermal conductivity 3× Si and GaN",
          text: "Faster heat extraction — enables higher current density or simpler cooling at the same junction temperature.",
        },
        {
          title: "High junction temperature (175 → 200 °C)",
          text: "The wider bandgap allows operation far above Si limits — crucial for automotive underhood designs.",
        },
        {
          title: "No minority-carrier storage",
          text: "No tail current at turn-off. Superior partial-load efficiency vs. IGBT — critical for EV range.",
        },
        {
          title: "Up to 44% lower inverter losses",
          text: "Full SiC module vs. Si IGBT + FRD: total losses halved, switching losses reduced by ~80%.",
        },
        {
          title: "Proven to 3,300 V (industrial/grid)",
          text: "A voltage range beyond GaN. Dominates traction, EV charging, PV, ESS and solid-state breakers.",
        },
      ],
      sources:
        "Sources: Bodo's Power Systems Sep. 2024 & Apr. 2026; ROHM; STMicroelectronics; Yole Group Power SiC 2025; Microchip Technology",
      closing: "SiC is becoming the power semiconductor of the electrification age.",
    },
    roadmap: {
      subEyebrow: "Outlook & Technology Roadmap",
      title: "SiC in renewable energy & grid-tied storage",
      body: "New device architectures are shaping the future of power conversion — from utility-scale photovoltaics to grid-tied storage.",
      bullets: [
        "1,500 V utility-scale PV: SiC ANPC topology at 48 kHz enables >99% peak efficiency",
        "Grid-scale ESS: bidirectional converters with 1,200 V SiC MOSFETs in 3-level topology replace IGBT + FRD",
      ],
      imageAlt: "Renewable energy and grid-tied storage powered by SiC power electronics",
    },
  },
};

const META: Record<Lang, PageMeta> = {
  de: {
    title: "SiC – Power Semiconductor of the Electrification Age",
    description:
      "SiC: The Wide-Bandgap Platform Driving Efficiency in Electric Vehicles, Solar Energy, and Industrial Drives – From Device to System",
    keywords: ["silicium carbide - SiC", "powertrain", "electrification", "aux-inverter", "power modules"],
  },
  en: {
    title: "SiC – Power Semiconductor of the Electrification Age",
    description:
      "SiC: The Wide-Bandgap Platform Driving Efficiency in Electric Vehicles, Solar Energy, and Industrial Drives – From Device to System",
    keywords: ["silicium carbide - SiC", "powertrain", "electrification", "aux-inverter", "power modules"],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const l = hasLang(lang) ? lang : "de";
  return buildMetadata(l, "/solutions/technology-spotlight-silicium-carbide", META[l]);
}

export default async function SiCSpotlightPage({
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
          icon={Layers3}
          title={t.heroTitle}
          subtitle={t.heroSubtitle}
          width="wide"
        />

        {/* Globaler Markt — Pattern D (Stat-Spalten) */}
        <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
          <BrandWatermark position="bottom-left" tint="navy" size={460} opacity={0.045} />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <Reveal className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-4 block">
                {t.market.teaser}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy leading-tight mb-6">
                {t.market.headline}
              </h2>
              <p className="font-sans text-base sm:text-lg font-semibold text-brand-navy leading-relaxed max-w-3xl mx-auto">
                {t.market.body}
              </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.market.stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.12}>
                  <div className="flex flex-col items-center text-center">
                    <p className="font-display text-4xl sm:text-5xl font-extrabold text-brand-cyan mb-4">
                      {s.value}
                    </p>
                    <p className="font-sans text-base text-brand-navy/70 leading-relaxed">
                      {s.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <p className="font-sans text-sm text-brand-navy/40 text-center mt-12">
                {t.market.source}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Anwendungsprofil & Design Impact — Pattern B (Split Bild ↔ Text) */}
        <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
          <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-brand-cyan/[0.07] rounded-full blur-[110px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <Reveal className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-4 block">
                {t.profile.teaser}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy leading-tight mb-6">
                {t.profile.headline}
              </h2>
              <p className="font-sans text-base sm:text-lg text-brand-navy/60 leading-relaxed max-w-3xl mx-auto">
                {t.profile.body}
              </p>
            </Reveal>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <Reveal className="lg:col-span-7">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-navy/40 mb-2 block">
                  {t.profile.subEyebrow}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-brand-navy leading-tight mb-6">
                  {t.profile.title}
                </h3>
                {t.profile.paragraphs.map((p) => (
                  <p
                    key={p}
                    className="font-sans text-sm sm:text-base text-brand-navy/70 leading-relaxed mb-4"
                  >
                    {p}
                  </p>
                ))}
                <span className="text-xs font-bold uppercase tracking-wider text-brand-navy/40 mt-6 mb-3 block">
                  {t.profile.listLabel}
                </span>
                <ul className="grid sm:grid-cols-2 gap-3 list-none m-0 p-0">
                  {t.profile.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                      <span className="font-sans text-sm text-brand-navy/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.12} className="lg:col-span-5">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-brand-navy/8 bg-surface-light shadow-sm flex items-center justify-center p-6">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/power-module-sic.png"
                      alt={t.profile.imageAlt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Technisches Profil */}
            <div className="mt-14">
              <Reveal>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-navy/40 mb-6 block text-center">
                  {t.profile.techLabel}
                </span>
              </Reveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {t.profile.rows.map((row, i) => (
                  <Reveal key={row.label} delay={i * 0.08}>
                    <div className="h-full p-6 rounded-2xl border border-brand-navy/8 bg-white shadow-sm">
                      <span className="text-[9px] font-bold text-brand-navy tracking-wider uppercase block mb-2">
                        {row.label}
                      </span>
                      <p className="font-sans text-sm text-brand-navy/60 leading-relaxed">
                        {row.value}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Physikalische Grundlagen — Pattern C (Icon-Card-Grid) + J (Parametermatrix) */}
        <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
          <BrandWatermark position="top-right" tint="blue" size={460} opacity={0.05} />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <Reveal className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-4 block">
                {t.foundation.teaser}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy leading-tight">
                {t.foundation.headline}
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.foundation.cards.map((card, i) => {
                const Icon = FOUNDATION_ICONS[i];
                return (
                  <Reveal key={card.title} delay={i * 0.1}>
                    <div className="h-full p-6 rounded-2xl border border-brand-navy/8 bg-white shadow-sm">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="font-display text-base font-bold text-brand-navy leading-tight">
                          {card.title}
                        </h3>
                      </div>
                      <p className="font-sans text-sm text-brand-navy/60 leading-relaxed">
                        {card.text}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.15} className="mt-14">
              <SpotlightTable />
            </Reveal>

            <Reveal delay={0.2}>
              <p className="font-sans text-sm text-brand-navy/40 text-center mt-8">
                {t.foundation.source}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Schlüsseltrends 2024/2025 — Pattern C (3 Karten) */}
        <section className="relative py-24 sm:py-32 bg-surface-light border-y border-brand-navy/8 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <Reveal className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-4 block">
                {t.trends.teaser}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy leading-tight">
                {t.trends.headline}
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {t.trends.cards.map((card, i) => {
                const Icon = TREND_ICONS[i];
                return (
                  <Reveal key={card.title} delay={i * 0.12}>
                    <div className="h-full p-6 rounded-2xl border border-brand-navy/8 bg-white shadow-sm flex flex-col">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[9px] font-bold text-brand-navy tracking-wider uppercase block mb-1">
                            {card.tag}
                          </span>
                          <h3 className="font-display text-lg font-bold text-brand-navy leading-tight">
                            {card.title}
                          </h3>
                        </div>
                      </div>
                      <ul className="space-y-3 list-none m-0 p-0">
                        {card.points.map((point) => (
                          <li key={point} className="flex items-start gap-2.5">
                            <Check className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                            <span className="font-sans text-sm text-brand-navy/70">{point}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="font-sans text-xs text-brand-navy/55 mt-auto pt-5">
                        {card.source}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Marktausblick — Pattern D (Stat-Spalten) */}
        <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
          <BrandWatermark position="bottom-left" tint="navy" size={460} opacity={0.045} />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <Reveal className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-4 block">
                {t.outlook.teaser}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy leading-tight">
                {t.outlook.headline}
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.outlook.cols.map((col, i) => (
                <Reveal key={col.title} delay={i * 0.12}>
                  <div className="flex flex-col items-center text-center">
                    <h3 className="font-display text-base font-semibold text-brand-navy leading-snug mb-6 min-h-[3rem]">
                      {col.title}
                    </h3>
                    <p className="font-display text-4xl sm:text-5xl font-extrabold text-brand-blue mb-4">
                      {col.stat}
                    </p>
                    <p className="font-sans text-sm sm:text-base text-brand-navy/70 leading-relaxed">
                      {col.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Entscheidende Vorteile — Pattern C (6 Karten) + großes Fazit */}
        <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
          <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-brand-blue/[0.05] rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <Reveal className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-4 block">
                {t.advantages.teaser}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy leading-tight">
                {t.advantages.headline}
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.advantages.cards.map((card, i) => {
                const Icon = ADVANTAGE_ICONS[i];
                return (
                  <Reveal key={card.title} delay={i * 0.08}>
                    <div className="h-full p-6 rounded-2xl border border-brand-navy/8 bg-white shadow-sm">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="font-display text-base font-bold text-brand-navy leading-tight">
                          {card.title}
                        </h3>
                      </div>
                      <p className="font-sans text-sm text-brand-navy/60 leading-relaxed">
                        {card.text}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.15}>
              <p className="font-sans text-sm text-brand-navy/40 text-center mt-10">
                {t.advantages.sources}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="font-display text-2xl sm:text-3xl font-bold text-brand-navy text-center max-w-4xl mx-auto mt-16 sm:mt-20 leading-snug">
                {t.advantages.closing}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Ausblick & Technologie-Roadmap — Pattern G (Navy-Emphasis-Split) */}
        <section className="relative py-20 sm:py-28 bg-brand-navy overflow-hidden">
          <BrandWatermark position="top-right" tint="light" size={460} opacity={0.06} />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <Reveal delay={0.12} className="lg:col-span-6 order-2 lg:order-1">
                <div className="relative min-h-[260px] lg:min-h-[420px] rounded-3xl overflow-hidden border border-white/10 bg-brand-navy-light shadow-lg">
                  <Image
                    src="/images/renewables-solar-wind.png"
                    alt={t.roadmap.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </Reveal>

              <Reveal className="lg:col-span-6 order-1 lg:order-2">
                <span className="text-xs font-bold uppercase tracking-wider text-white/50 mb-2 block">
                  {t.roadmap.subEyebrow}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight mb-6">
                  {t.roadmap.title}
                </h3>
                <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed mb-6">
                  {t.roadmap.body}
                </p>
                <ul className="space-y-3 list-none m-0 p-0">
                  {t.roadmap.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                      <span className="font-sans text-sm sm:text-base text-white/80">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Kontakt aufnehmen */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
