import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Activity,
  ArrowRight,
  Atom,
  Box,
  Check,
  CheckCircle2,
  ChevronRight,
  CircuitBoard,
  Coins,
  Factory,
  Gauge,
  Globe,
  Layers,
  Thermometer,
  Zap,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import BrandWatermark from "@/components/BrandWatermark";
import ContactSection from "@/components/ContactSection";
import SpotlightTable from "@/components/SpotlightTable";
import { hasLang, localePath, type Lang } from "@/lib/i18n";
import { buildMetadata, type PageMeta } from "@/lib/seo";

const PHYSICS_ICONS = [Atom, Layers, Zap, Coins];
const ADVANTAGE_ICONS = [Zap, Gauge, Box, Activity, CircuitBoard, Factory, Thermometer, Globe];

const COPY: Record<
  Lang,
  {
    heroEyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    market: {
      eyebrow: string;
      headline: string;
      body: string;
      closing: string;
      stats: { title: string; value: string; label: string; source: string }[];
    };
    profile: {
      eyebrow: string;
      headline: string;
      body: string;
      subEyebrow: string;
      title: string;
      text: string;
      listLabel: string;
      applications: string[];
      imageAlt: string;
      techTitle: string;
      tech: { label: string; value: string }[];
    };
    physics: {
      eyebrow: string;
      headline: string;
      body: string;
      cards: { title: string; text: string }[];
      source: string;
    };
    matrix: {
      eyebrow: string;
      headline: string;
      body: string;
      source: string;
    };
    trend2: {
      eyebrow: string;
      headline: string;
      body: string;
      flow: { label: string; sub?: string; accent?: boolean }[];
      cards: { name: string; stat: string; statLabel: string; text: string }[];
      source: string;
      ctaTitle: string;
      ctaSub: string;
      ctaButton: string;
    };
    advantages: {
      eyebrow: string;
      headline: string;
      cards: { title: string; text: string }[];
      source: string;
    };
    roadmap: {
      eyebrow: string;
      headline: string;
      body: string;
      phases: { period: string; items: string[] }[];
      quote: string;
      quoteSource: string;
    };
  }
> = {
  de: {
    heroEyebrow: "Lösungen",
    heroTitle: "Technologie Spotlight Galliumnitrid (GaN)",
    heroSubtitle:
      "Von High-Power Charging bis hin zu Megawatt-KI-Racks: Wie GaN die Physik der Leistungskonvertierung in allen wichtigen Anwendungsbereichen neu definiert.",
    market: {
      eyebrow: "Technologie Spotlight",
      headline: "Globaler Markt GaN Devices",
      body: "Ausgehend von $355 Mio. im Jahr 2024 wächst der Markt für Power-GaN-Bauelemente bis 2030 auf rund $3 Mrd. (Yole Group).",
      closing:
        "GaN in der KI-Rechenzentrums-Stromverteilung: NVIDIAs 800-VDC-Rack-Architektur ist ein struktureller Wendepunkt für GaN.",
      stats: [
        { title: "GaN-Bauteilmarkt", value: "$3,0 Mrd.", label: "Prognose 2030", source: "Quelle: Yole Group" },
        { title: "Wachstum", value: "42 %", label: "CAGR 2026–2030", source: "Quelle: Yole Group" },
        { title: "Automotive", value: "$0,54 Mrd.", label: "Prognose 2030", source: "Quelle: Yole Group" },
        {
          title: "AI Data Center",
          value: "$4,2 Mrd.",
          label: "PDU-Gesamtmarkt 2031",
          source: "Quelle: Mordor Intelligence",
        },
      ],
    },
    profile: {
      eyebrow: "Anwendungsprofil",
      headline: "Optimiert für hochfrequente, kompakte und hocheffiziente Leistungswandlung",
      body: "Die Technologie ist besonders attraktiv, wenn sehr schnelles Schalten und hohe Leistungsdichte gefordert sind.",
      subEyebrow: "Design Impact",
      title: "Hohe Schaltfrequenzen, kleinere passive Komponenten",
      text: "GaN ermöglicht hohe Schaltfrequenzen. Dadurch können Magnetics, Kondensatoren und Filterkomponenten kleiner ausgelegt werden. Das ist besonders relevant für kompakte Netzteile und racknahe DC/DC-Architekturen, in denen Bauvolumen, thermische Dichte und Effizienz eng miteinander gekoppelt sind.",
      listLabel: "GaN eignet sich besonders für",
      applications: [
        "AC/DC-Netzteile",
        "Server- und Rechenzentrums-Leistungswandlung",
        "48-V- und 54-V-Architekturen",
        "Telekommunikations-Stromversorgungen",
        "Kompakte Ladegeräte",
        "DC/DC-Wandler",
        "Hochfrequente resonante Topologien (LLC/DCX)",
      ],
      imageAlt: "WBG-Leistungsmodul GaN",
      techTitle: "Technisches Profil",
      tech: [
        { label: "Material", value: "Galliumnitrid" },
        { label: "Typische Stärke", value: "Hohe Schaltgeschwindigkeit, geringe Schaltverluste und kompakte Designs" },
        { label: "Typische Bauelemente", value: "GaN-HEMTs, GaN-Power-ICs und GaN-Halbbrücken" },
        {
          label: "Typische Spannungsklassen",
          value: "100 V, 200 V und 650 V; höhere Spannungskonzepte entstehen",
        },
        {
          label: "Systemnutzen",
          value: "Sehr hochfrequenter Betrieb mit reduzierter Größe passiver Komponenten",
        },
      ],
    },
    physics: {
      eyebrow: "Physikalische Grundlagen",
      headline: "Warum GaN Silizium übertrifft",
      body: "Die materialphysikalische Betrachtung.",
      cards: [
        {
          title: "Bandlücke: 3,4 eV",
          text: "Die breite Bandlücke von GaN (vs. 1,1 eV bei Si) ermöglicht eine kritische Feldstärke von ~3,3 MV/cm – 11-mal höher als bei Silizium. Hochspannungssperrung in deutlich kleineren Chipgeometrien.",
        },
        {
          title: "AlGaN/GaN-HEMT-Struktur",
          text: "Die Heterostruktur erzeugt ein zweidimensionales Elektronengas (2DEG) an der Grenzfläche. Elektronenmobilität ~2.000 cm²/Vs ohne Dotierung – niedriger RDS(on) bei hoher Spannung.",
        },
        {
          title: "Keine Rückwärtserholung (QRR = 0)",
          text: "Keine Minoritätsträger in der GaN-Leitung. Schalten 10–100-mal schneller als Si-MOSFETs. Totzeit auf einstellige Nanosekunden reduzierbar – fundamentale Verluste eliminiert.",
        },
        {
          title: "GaN-on-Si: der Kostenpfad",
          text: "Epitaxie auf 8-Zoll-Si-Wafern reduziert die Substratkosten auf ~$1/cm². Kompatibel mit bestehenden CMOS-Fabs. Ermöglicht Volumenpreise für Massenanwendungen.",
        },
      ],
      source: "Quelle: Fraunhofer IAF; EPC; Innoscience – veröffentlicht in Bodo's Power Systems",
    },
    matrix: {
      eyebrow: "GaN vs. Si vs. SiC",
      headline: "Schlüsselparameter im Vergleich",
      body: "Hervorgehobene Zellen markieren den stärksten Vorteil in der jeweiligen Kategorie.",
      source: "Quelle: Yole Group; EPC; Infineon; Fraunhofer IAF",
    },
    trend2: {
      eyebrow: "Trend 2 · AI Data Centers – OCP Global Summit 2025",
      headline: "GaN & 800-VDC-Rack-Architektur",
      body: "Vom AC-Netz bis zur Serverschiene: Im 800-VDC-Rack übernimmt der GaN-DC-DC-Wandler die direkte Wandlung auf 48 V / 12 V – demonstriert von Power Integrations, Navitas und STMicroelectronics/NVIDIA.",
      flow: [
        { label: "AC-Netz", sub: "480 VAC" },
        { label: "SST / Gleichrichter" },
        { label: "800-VDC-Rack-Bus" },
        { label: "GaN DC-DC-Wandler", accent: true },
        { label: "48 V / 12 V", sub: "Server" },
      ],
      cards: [
        {
          name: "Power Integrations – 1.250 V PowiGaN",
          stat: "1.250 V",
          statLabel: "GaN-HEMTs in Volumenproduktion",
          text: "Branchenweit erste 1.250-V- und 1.700-V-GaN-HEMTs in Volumenproduktion. Direkt von 800 V auf 12 V in einer einfachen Halbbrücke, Wirkungsgrad >98 %. Ein einzelnes Bauelement übertrifft gestapelte 650-V-GaN- oder konkurrierende 1.200-V-SiC-Alternativen; die Cascode-Architektur verbessert die Kurzschlussfestigkeit.",
        },
        {
          name: "Navitas – 10-kW-Full-Brick 800 V–50 V",
          stat: "10 kW",
          statLabel: "bei 1 MHz und 98 % Wirkungsgrad",
          text: "3-Level-Halbbrücke mit 650-V-GaN-FETs auf der Primärseite, 100-V-GaN-SR sekundär. 8:1-Matrixtransformator, Schaltfrequenz 1 MHz, Systemwirkungsgrad 98 %. Demonstriert auf PCIM und OCP 2025; Multi-Output-LLC-Topologie minimiert sekundäre Leitverluste.",
        },
        {
          name: "STMicroelectronics / NVIDIA",
          stat: "12 kW",
          statLabel: "In-Rack Power-Delivery-Board",
          text: "650-V-GaN in gestapelter Halbbrücke, STM32G4-MCU mit unter 200 ps Timer-Auflösung für die SR-Regelung. 6-kW-Variante: 800 V auf 12 V bei 850 kHz, Spitzenwirkungsgrad 97,5 %, 2.500 W/in³ Leistungsdichte. Prototyp auf der OCP 2025.",
        },
      ],
      source:
        "Quellen: Power Integrations OCP-2025-Whitepaper; Navitas Semiconductor; STMicroelectronics / NVIDIA OCP 2025; Renesas, Oktober 2025",
      ctaTitle: "800-VDC-Architektur im Detail",
      ctaSub: "Wie die Smart PDU und der Full-GaN-DC/DC-Wandler das AI-Rack versorgen.",
      ctaButton: "Zur Rack Power Distribution Unit",
    },
    advantages: {
      eyebrow: "Entscheidende Vorteile",
      headline: "Warum GaN der bevorzugte Leistungshalbleiter für hochfrequente, hocheffiziente Leistungskonvertierung ist",
      cards: [
        {
          title: "Kein QRR – fundamentale Verluste eliminiert",
          text: "Keine Rückwärts-Erholungsladung. Schaltverluste in Brückentopologien sinken auf nahezu null – MHz-Resonanzwandlerbetrieb wird ermöglicht.",
        },
        {
          title: "Wirkungsgrad von 98–99 %",
          text: "LLC und Totem-Pole-PFC bei 1 MHz+ erzielen in demonstrierter Hardware konstant über 97,5 % Volllastwirkungsgrad.",
        },
        {
          title: "Leistungsdichte >5.000 W/in³",
          text: "EPC9159: 1 kW in 23 × 18 mm. AI-PSUs: 4,5 kW im CRPS185-Formfaktor – 40 % mehr Leistung bei gleicher Baugröße.",
        },
        {
          title: "MHz-Schalten – kleinere Magnetics",
          text: "10–100-fach höhere Schaltfrequenz ermöglicht 10–100-fach kleinere Magnetics – Systemgewicht und Bauvolumen werden deutlich reduziert.",
        },
        {
          title: "Monolithische GaN-IC-Integration",
          text: "Transistor + Gate-Treiber + Sensorik + Schutz auf einem Die. Weniger Komponenten, niedrigere Stücklistenkosten, höhere Systemzuverlässigkeit.",
        },
        {
          title: "Si-Fab-kompatibel (GaN-on-Si)",
          text: "8-Zoll-GaN-on-Si ermöglicht Produktion in bestehenden CMOS-Fabs zu ~$1/cm² – treibt Kostenparität mit Si auf dem Weg zur Volumenfertigung.",
        },
        {
          title: "Hochtemperaturbetrieb (bis ~200 °C)",
          text: "Höhere Sperrschichttemperatur als Si ermöglicht mehr Leistungsdichte pro Kühleinheit und einfacheres Thermomanagement in kompakten Systemen.",
        },
        {
          title: "Breites, wachsendes Anwendungsspektrum",
          text: "Bewährt in Schnellladen, AI-Server-PSUs, LiDAR, Motorantrieben und OBCs. Expansion in Industriewechselrichter und E-Mobility-Traktion.",
        },
      ],
      source:
        "Quellen: Bodo's Power Systems Okt. 2024 (EPC, Fraunhofer IAF); Yole Group 2025; Power Integrations; Navitas; STMicroelectronics; Renesas",
    },
    roadmap: {
      eyebrow: "Ausblick & Technologie-Roadmap",
      headline: "Von der Technologieverheißung zur Produktionsrealität",
      body: "Das Jahrzehnt der Leistungselektronik-Transformation.",
      phases: [
        {
          period: "Jetzt – 2026",
          items: [
            "800-VDC-KI-Rack-Deployments starten (NVIDIA, OCP)",
            "650-V-GaN Standard in AC-DC- und DC-DC-PSUs",
            "GaN-OBCs gehen in Automotive-Serienproduktion",
            "300-mm-GaN-on-Si-Volumenanlauf (Infineon 2025)",
          ],
        },
        {
          period: "2026 – 2028",
          items: [
            "1.250-V-GaN weitverbreitet in 800-VDC-Rechenzentren",
            "Automotive-GaN-Traktionswechselrichter-Prototypen",
            "Vertikale GaN-CAVETs in der Vorserie",
            "GaN-Stückkosten nähern sich Si-IGBT im mittleren Leistungsbereich",
          ],
        },
        {
          period: "2028 – 2030+",
          items: [
            "Power-GaN-Markt ~$3 Mrd. (Yole Group)",
            "Vertikales GaN fordert SiC oberhalb von 1.200 V heraus",
            "Vollständige End-to-End-HVDC-Architektur im KI-Rechenzentrum",
            "GaN Standardwahl für Leistungskonvertierung <800 V",
          ],
        },
      ],
      quote:
        "“The combination of AI, electrification, and sustainable development goals makes GaN indispensable in next-generation server and telecommunications power systems.”",
      quoteSource: "— Roy Dagher, Yole Group",
    },
  },
  en: {
    heroEyebrow: "Solutions",
    heroTitle: "Technology Spotlight Gallium Nitride (GaN)",
    heroSubtitle:
      "From fast chargers to megawatt AI racks: how GaN is redefining the physics of power conversion across every major application domain.",
    market: {
      eyebrow: "Technology Spotlight",
      headline: "Global GaN Device Market",
      body: "Starting from $355M in 2024, the power GaN device market grows to roughly $3B by 2030 (Yole Group).",
      closing:
        "GaN in AI data center power distribution: NVIDIA's 800 VDC rack architecture is a structural inflection point for GaN.",
      stats: [
        { title: "GaN device market", value: "$3.0B", label: "Forecast 2030", source: "Source: Yole Group" },
        { title: "Growth", value: "42%", label: "CAGR 2026–2030", source: "Source: Yole Group" },
        { title: "Automotive", value: "$0.54B", label: "Forecast 2030", source: "Source: Yole Group" },
        {
          title: "AI data center",
          value: "$4.2B",
          label: "Total PDU market 2031",
          source: "Source: Mordor Intelligence",
        },
      ],
    },
    profile: {
      eyebrow: "Application Profile",
      headline: "Optimized for high-frequency, compact, high-efficiency power conversion",
      body: "The technology is especially attractive wherever very fast switching and high power density are required.",
      subEyebrow: "Design Impact",
      title: "High switching frequencies, smaller passive components",
      text: "GaN enables high switching frequencies, allowing magnetics, capacitors and filter components to be sized smaller. This matters most in compact power supplies and near-rack DC/DC architectures, where build volume, thermal density and efficiency are tightly coupled.",
      listLabel: "GaN is particularly well suited for",
      applications: [
        "AC/DC power supplies",
        "Server and data center power conversion",
        "48 V and 54 V architectures",
        "Telecom power supplies",
        "Compact chargers",
        "DC/DC converters",
        "High-frequency resonant topologies (LLC/DCX)",
      ],
      imageAlt: "WBG power module GaN",
      techTitle: "Technical Profile",
      tech: [
        { label: "Material", value: "Gallium nitride" },
        { label: "Typical strength", value: "High switching speed, low switching losses and compact designs" },
        { label: "Typical devices", value: "GaN HEMTs, GaN power ICs and GaN half-bridges" },
        { label: "Typical voltage classes", value: "100 V, 200 V and 650 V; higher-voltage concepts emerging" },
        { label: "System benefit", value: "Very high-frequency operation with reduced passive component size" },
      ],
    },
    physics: {
      eyebrow: "Physical Foundation",
      headline: "Why GaN outperforms silicon",
      body: "The material physics case.",
      cards: [
        {
          title: "Bandgap: 3.4 eV",
          text: "GaN's wide bandgap (vs. 1.1 eV for Si) enables a critical field strength of ~3.3 MV/cm — 11× higher than silicon. High-voltage blocking in far smaller chip geometries.",
        },
        {
          title: "AlGaN/GaN HEMT structure",
          text: "The heterostructure creates a two-dimensional electron gas (2DEG) at the interface. Electron mobility of ~2,000 cm²/Vs without doping — low RDS(on) at high voltage.",
        },
        {
          title: "Zero reverse recovery (QRR = 0)",
          text: "No minority carriers in GaN conduction. Switching 10–100× faster than Si MOSFETs. Deadtime reducible to single-digit nanoseconds — a fundamental loss eliminated.",
        },
        {
          title: "GaN-on-Si: the cost path",
          text: "Epitaxy on 8-inch Si wafers reduces substrate cost to ~$1/cm². Compatible with existing CMOS fabs. Enables volume pricing for mass-market applications.",
        },
      ],
      source: "Source: Fraunhofer IAF; EPC; Innoscience — reported in Bodo's Power Systems",
    },
    matrix: {
      eyebrow: "GaN vs. Si vs. SiC",
      headline: "Key parameters compared",
      body: "Highlighted cells mark the strongest advantage in each category.",
      source: "Source: Yole Group; EPC; Infineon; Fraunhofer IAF",
    },
    trend2: {
      eyebrow: "Trend 2 · AI Data Centers — OCP Global Summit 2025",
      headline: "GaN & the 800 VDC Rack Power Architecture",
      body: "From the AC grid to the server rail: in the 800 VDC rack, the GaN DC-DC converter handles the direct conversion down to 48 V / 12 V — demonstrated by Power Integrations, Navitas and STMicroelectronics/NVIDIA.",
      flow: [
        { label: "AC grid", sub: "480 VAC" },
        { label: "SST / rectifier" },
        { label: "800 VDC rack bus" },
        { label: "GaN DC-DC converter", accent: true },
        { label: "48 V / 12 V", sub: "Server" },
      ],
      cards: [
        {
          name: "Power Integrations — 1,250 V PowiGaN",
          stat: "1,250 V",
          statLabel: "GaN HEMTs in volume production",
          text: "Industry-first 1,250 V and 1,700 V GaN HEMTs in volume production. Direct 800 V to 12 V in a simple half-bridge, efficiency >98%. A single device outperforms stacked 650 V GaN or competing 1,200 V SiC alternatives; the cascode architecture improves short-circuit tolerance.",
        },
        {
          name: "Navitas — 10 kW full-brick 800 V–50 V",
          stat: "10 kW",
          statLabel: "at 1 MHz and 98% efficiency",
          text: "3-level half-bridge using 650 V GaN FETs on the primary, 100 V GaN SR on the secondary. 8:1 matrix transformer, switching at 1 MHz, 98% system efficiency. Demonstrated at PCIM and OCP 2025; the multi-output LLC topology minimizes secondary conduction losses.",
        },
        {
          name: "STMicroelectronics / NVIDIA",
          stat: "12 kW",
          statLabel: "in-rack power delivery board",
          text: "650 V GaN in a stacked half-bridge, STM32G4 MCU with sub-200 ps timer resolution for SR control. 6 kW variant: 800 V to 12 V at 850 kHz, peak efficiency 97.5%, 2,500 W/in³ power density. Prototype at OCP 2025.",
        },
      ],
      source:
        "Sources: Power Integrations OCP 2025 whitepaper; Navitas Semiconductor; STMicroelectronics / NVIDIA OCP 2025; Renesas, October 2025",
      ctaTitle: "The 800 VDC architecture in detail",
      ctaSub: "How the smart PDU and the full-GaN DC/DC converter power the AI rack.",
      ctaButton: "Explore the rack power distribution unit",
    },
    advantages: {
      eyebrow: "Key Advantages",
      headline: "Why GaN is the power semiconductor of choice for high-frequency, high-efficiency conversion",
      cards: [
        {
          title: "Zero QRR — fundamental loss eliminated",
          text: "No reverse recovery charge. Switching losses in bridge topologies fall to near zero, enabling MHz resonant converter operation.",
        },
        {
          title: "Efficiency approaching 98–99%",
          text: "LLC and totem-pole PFC at 1 MHz+ consistently exceed 97.5% full-load efficiency in demonstrated hardware.",
        },
        {
          title: "Power density >5,000 W/in³",
          text: "EPC9159: 1 kW in 23 × 18 mm. AI PSUs: 4.5 kW in the CRPS185 form factor — 40% more power from the same footprint.",
        },
        {
          title: "MHz switching — smaller magnetics",
          text: "10–100× higher switching frequency allows magnetics to shrink by 10–100×, reducing system weight and volume.",
        },
        {
          title: "Monolithic GaN IC integration",
          text: "Transistor + gate driver + sensing + protection on one die. Fewer components, lower BOM cost, higher system reliability.",
        },
        {
          title: "Si-fab compatible (GaN-on-Si)",
          text: "8-inch GaN-on-Si enables production in existing CMOS fabs at ~$1/cm², driving cost parity with Si on a volume trajectory.",
        },
        {
          title: "High-temperature operation (up to ~200°C)",
          text: "Higher junction temperature than Si enables more power density per cooling unit and simpler thermal design in compact systems.",
        },
        {
          title: "Broad and growing application range",
          text: "Proven in fast chargers, AI server PSUs, LiDAR, motor drives and OBCs. Expanding into industrial inverters and EV traction.",
        },
      ],
      source:
        "Sources: Bodo's Power Systems Oct 2024 (EPC, Fraunhofer IAF); Yole Group 2025; Power Integrations; Navitas; STMicroelectronics; Renesas",
    },
    roadmap: {
      eyebrow: "Outlook & Technology Roadmap",
      headline: "From promise to production reality",
      body: "The decade of power electronics transformation.",
      phases: [
        {
          period: "Now – 2026",
          items: [
            "800 VDC AI rack deployments begin (NVIDIA, OCP)",
            "650 V GaN standard in AC-DC and DC-DC PSUs",
            "GaN OBCs enter automotive mass production",
            "300 mm GaN-on-Si volume ramp (Infineon 2025)",
          ],
        },
        {
          period: "2026 – 2028",
          items: [
            "1,250 V GaN widespread in 800 VDC data centers",
            "Automotive GaN traction inverter pilots",
            "Vertical GaN CAVETs at pre-commercial stage",
            "GaN unit cost approaches Si IGBT in mid-power",
          ],
        },
        {
          period: "2028 – 2030+",
          items: [
            "Power GaN market ~$3B (Yole Group)",
            "Vertical GaN challenges SiC above 1,200 V",
            "Full end-to-end HVDC data center architecture",
            "GaN default choice for <800 V power conversion",
          ],
        },
      ],
      quote:
        "“The combination of AI, electrification, and sustainable development goals makes GaN indispensable in next-generation server and telecommunications power systems.”",
      quoteSource: "— Roy Dagher, Yole Group",
    },
  },
};

const META: Record<Lang, PageMeta> = {
  de: {
    title: "GaN in AI data center power distribution",
    description:
      "GaN in AI data center power distribution: NVIDIA's 800 VDC rack architecture is a structural inflection point for GaN.",
    keywords: ["gallium nitride - GaN", "charging systems", "power conversion", "dc-dc-converter", "full-GaN"],
  },
  en: {
    title: "GaN in AI data center power distribution",
    description:
      "GaN in AI data center power distribution: NVIDIA's 800 VDC rack architecture is a structural inflection point for GaN.",
    keywords: ["gallium nitride - GaN", "charging systems", "power conversion", "dc-dc-converter", "full-GaN"],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const l = hasLang(lang) ? lang : "de";
  return buildMetadata(l, "/solutions/technology-spotlight-gallium-nitride", META[l]);
}

export default async function GaNSpotlightPage({
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
          icon={Atom}
          title={t.heroTitle}
          subtitle={t.heroSubtitle}
          width="wide"
        />

        {/* 1 — Globaler Markt GaN Devices (Pattern D: Stat-Spalten) */}
        <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
          <BrandWatermark position="bottom-left" tint="navy" size={460} opacity={0.045} />
          <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-brand-cyan/[0.07] rounded-full blur-[110px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <Reveal className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-4 block">
                {t.market.eyebrow}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy leading-tight mb-6">
                {t.market.headline}
              </h2>
              <p className="font-sans text-base sm:text-lg text-brand-navy/60 leading-relaxed max-w-3xl mx-auto">
                {t.market.body}
              </p>
              <p className="font-sans text-base sm:text-lg font-semibold text-brand-navy leading-relaxed max-w-3xl mx-auto mt-6">
                {t.market.closing}
              </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.market.stats.map((stat, i) => (
                <Reveal key={stat.title} delay={i * 0.12} className="flex flex-col items-center text-center">
                  <h3 className="font-display text-base font-semibold text-brand-navy leading-snug mb-6 min-h-[3rem] flex items-center justify-center">
                    {stat.title}
                  </h3>
                  <span className="font-display text-4xl sm:text-5xl font-extrabold text-brand-cyan leading-none mb-3">
                    {stat.value}
                  </span>
                  <span className="font-sans text-base text-brand-navy/70 mb-2">{stat.label}</span>
                  <p className="font-sans text-sm text-brand-navy/40">{stat.source}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 2 — Anwendungsprofil & Design Impact (Pattern B: Split Bild ↔ Text) */}
        <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <Reveal className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-4 block">
                {t.profile.eyebrow}
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
                <span className="text-xs font-bold uppercase tracking-wider text-brand-navy/40 block mb-3">
                  {t.profile.subEyebrow}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-brand-navy leading-tight mb-6">
                  {t.profile.title}
                </h3>
                <p className="font-sans text-sm sm:text-base text-brand-navy/70 leading-relaxed mb-8">
                  {t.profile.text}
                </p>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-navy/40 block mb-4">
                  {t.profile.listLabel}
                </span>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {t.profile.applications.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                      <span className="font-sans text-sm text-brand-navy/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.12} className="lg:col-span-5">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-brand-navy/8 bg-surface-light shadow-sm p-6">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/power-module-gan-white.png"
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
            <Reveal delay={0.12} className="mt-14">
              <div className="max-w-5xl mx-auto p-6 sm:p-8 rounded-2xl border border-brand-navy/8 bg-white shadow-sm">
                <h3 className="font-display text-base font-bold text-brand-navy leading-tight mb-4">
                  {t.profile.techTitle}
                </h3>
                <dl className="divide-y divide-brand-navy/8">
                  {t.profile.tech.map((row) => (
                    <div key={row.label} className="grid sm:grid-cols-[220px_1fr] gap-1 sm:gap-6 py-3">
                      <dt className="font-sans text-xs font-bold uppercase tracking-wider text-brand-navy/50 sm:pt-0.5">
                        {row.label}
                      </dt>
                      <dd className="font-sans text-sm text-brand-navy/70 leading-relaxed">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 3 — Physikalische Grundlagen (Pattern C: Icon-Cards 2×2) */}
        <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
          <BrandWatermark position="top-right" tint="blue" size={460} opacity={0.05} />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <Reveal className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-4 block">
                {t.physics.eyebrow}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy leading-tight mb-6">
                {t.physics.headline}
              </h2>
              <p className="font-sans text-base sm:text-lg text-brand-navy/60 leading-relaxed max-w-3xl mx-auto">
                {t.physics.body}
              </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.physics.cards.map((card, i) => {
                const Icon = PHYSICS_ICONS[i];
                return (
                  <Reveal key={card.title} delay={i * 0.12}>
                    <div className="h-full p-8 rounded-2xl border border-brand-navy/8 bg-white shadow-sm flex gap-5 items-start">
                      <div className="p-2.5 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-bold text-brand-navy leading-tight mb-2">
                          {card.title}
                        </h3>
                        <p className="font-sans text-sm text-brand-navy/60 leading-relaxed">{card.text}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <p className="mt-10 text-center font-sans text-sm text-brand-navy/40">{t.physics.source}</p>
          </div>
        </section>

        {/* 4 — GaN vs. Si vs. SiC (Pattern J: interaktive Parametermatrix) */}
        <section className="relative py-20 sm:py-28 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <Reveal className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-4 block">
                {t.matrix.eyebrow}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy leading-tight mb-6">
                {t.matrix.headline}
              </h2>
              <p className="font-sans text-base sm:text-lg text-brand-navy/60 leading-relaxed max-w-3xl mx-auto">
                {t.matrix.body}
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <SpotlightTable />
            </Reveal>

            <p className="mt-10 text-center font-sans text-sm text-brand-navy/40">{t.matrix.source}</p>
          </div>
        </section>

        {/* 6 — Trend 2: GaN & 800-VDC-Rack (Navy-Emphasis, Pattern G) */}
        <section className="relative py-20 sm:py-28 bg-brand-navy overflow-hidden">
          <BrandWatermark position="bottom-left" tint="light" size={460} opacity={0.06} />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <Reveal className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-4 block">
                {t.trend2.eyebrow}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight mb-6">
                {t.trend2.headline}
              </h2>
              <p className="font-sans text-base sm:text-lg text-white/70 leading-relaxed max-w-3xl mx-auto">
                {t.trend2.body}
              </p>
            </Reveal>

            {/* Architektur-Flow */}
            <Reveal delay={0.12}>
              <div className="flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-3 mb-14">
                {t.trend2.flow.map((step, i) => (
                  <div key={step.label} className="contents">
                    {i > 0 && <ArrowRight className="w-4 h-4 text-brand-cyan shrink-0 rotate-90 lg:rotate-0" />}
                    <div
                      className={`rounded-xl border px-5 py-3 text-center ${
                        step.accent ? "border-brand-cyan/50 bg-brand-cyan/15" : "border-white/10 bg-white/5"
                      }`}
                    >
                      <span className="font-display text-sm font-bold text-white block">{step.label}</span>
                      {step.sub && <span className="font-sans text-xs text-white/50 block">{step.sub}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Industrie-Demonstrationen */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {t.trend2.cards.map((card, i) => (
                <Reveal key={card.name} delay={i * 0.12}>
                  <div className="relative h-full rounded-2xl border border-white/10 bg-white/5 overflow-hidden pl-8 pr-6 py-6">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-cyan" />
                    <p className="font-display text-5xl font-extrabold text-brand-cyan leading-none mb-2">
                      {card.stat}
                    </p>
                    <p className="font-sans text-xs text-white/50 uppercase tracking-wider">{card.statLabel}</p>
                    <div className="w-10 h-px bg-white/20 my-4" />
                    <h3 className="font-display text-lg font-bold text-white leading-tight mb-2">{card.name}</h3>
                    <p className="font-sans text-sm text-white/70 leading-relaxed">{card.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <p className="mt-10 text-center font-sans text-xs text-white/50">{t.trend2.source}</p>

            {/* CTA-Bar */}
            <div className="mt-16 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center gap-6">
              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
                  {t.trend2.ctaTitle}
                </h3>
                <p className="font-sans text-base text-white/60 mt-2">{t.trend2.ctaSub}</p>
              </div>
              <Link
                href={localePath(lang, "/solutions/rack-power-distribution")}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-brand-cyan text-white font-semibold text-sm hover:bg-brand-cyan/90 transition-all shrink-0"
              >
                {t.trend2.ctaButton} <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* 9 — Entscheidende Vorteile (Pattern C: 8 Icon-Cards, Kontrastsektion) */}
        <section className="py-24 sm:py-32 bg-surface-light border-y border-brand-navy/8">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-4 block">
                {t.advantages.eyebrow}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy leading-tight">
                {t.advantages.headline}
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.advantages.cards.map((card, i) => {
                const Icon = ADVANTAGE_ICONS[i];
                return (
                  <Reveal key={card.title} delay={i * 0.06}>
                    <div className="h-full p-6 rounded-2xl border border-brand-navy/8 bg-white shadow-sm">
                      <div className="p-2.5 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan w-fit mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-display text-base font-bold text-brand-navy leading-tight mb-2">
                        {card.title}
                      </h3>
                      <p className="font-sans text-sm text-brand-navy/60 leading-relaxed">{card.text}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <p className="mt-10 text-center font-sans text-sm text-brand-navy/40">{t.advantages.source}</p>
          </div>
        </section>

        {/* 10 — Ausblick & Technologie-Roadmap (Pattern C: 3 Phasen + Zitat) */}
        <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
          <BrandWatermark position="bottom-left" tint="navy" size={460} opacity={0.045} />
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-brand-blue/[0.05] rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <Reveal className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-4 block">
                {t.roadmap.eyebrow}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy leading-tight mb-6">
                {t.roadmap.headline}
              </h2>
              <p className="font-sans text-base sm:text-lg text-brand-navy/60 leading-relaxed max-w-3xl mx-auto">
                {t.roadmap.body}
              </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {t.roadmap.phases.map((phase, i) => (
                <Reveal key={phase.period} delay={i * 0.12}>
                  <div className="h-full p-6 rounded-2xl border border-brand-navy/8 bg-white shadow-sm">
                    <h3 className="font-display text-lg font-bold text-brand-navy leading-tight mb-4">
                      {phase.period}
                    </h3>
                    <ul className="space-y-2.5">
                      {phase.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                          <span className="font-sans text-sm text-brand-navy/70">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-16 sm:mt-20">
              <blockquote className="font-display text-2xl sm:text-3xl font-bold text-brand-navy text-center max-w-4xl mx-auto leading-snug">
                {t.roadmap.quote}
              </blockquote>
              <p className="mt-4 text-center font-sans text-sm text-brand-navy/40">{t.roadmap.quoteSource}</p>
            </Reveal>
          </div>
        </section>

        {/* Kontakt */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
