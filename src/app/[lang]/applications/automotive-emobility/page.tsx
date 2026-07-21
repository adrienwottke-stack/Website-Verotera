import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Truck,
  Check,
  ArrowRight,
  Scale,
  BatteryCharging,
  TrendingDown,
  PlugZap,
  Bus,
  Users,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import BrandWatermark from "@/components/BrandWatermark";
import ContactSection from "@/components/ContactSection";
import { hasLang, localePath, type Lang } from "@/lib/i18n";
import { buildMetadata, type PageMeta } from "@/lib/seo";

const DRIVER_ICONS = [Scale, BatteryCharging, TrendingDown, PlugZap, Bus, Users];

const STRIP_IMAGES = [
  "/images/electrified-bus.jpg",
  "/images/charging-infrastructure.jpg",
  "/images/sic-wafer.jpg",
  "/images/construction-machinery-excavator.jpg",
  "/images/electric-truck.png",
];

const COPY: Record<
  Lang,
  {
    heroEyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    techTeaser: string;
    techHeadline: string;
    techLead: string;
    techBullets: string[];
    techImageAlt: string;
    techCta: string;
    stripAlts: string[];
    driversTeaser: string;
    driversHeadline: string;
    drivers: { num: string; title: string; text: string }[];
  }
> = {
  de: {
    heroEyebrow: "Automotive / E-Mobility",
    heroTitle: "Elektrifizierung von Nutzfahrzeugen – Antriebstechnologie der nächsten Generation",
    heroSubtitle: "Wegweisende Technologien für emissionsfreie E-Mobilität.",
    techTeaser: "Siliziumkarbid (SiC) & Galliumnitrid (GaN)",
    techHeadline: "Schlüsseltechnologien für die Elektrifizierung von Nutzfahrzeugen",
    techLead: "OEMs integrieren WBG-SiC/GaN kontinuierlich zur Effizienzsteigerung",
    techBullets: [
      "SiC für Antriebsstrang und AUX-Wechselrichter (Nebenaggregate)",
      "GaN für DC-DC-Wandler und OBC-Charging",
      "Substratpreise sanken 2024 um 20–30 %",
      "SiC hat einen realen Preisaufschlag – derzeit rund 2–3× gegenüber Si-IGBT",
    ],
    techImageAlt: "Elektroauto und elektrifizierter Bus mit Antriebsstrang- und Leistungselektronik-Blueprints",
    techCta: "Kontakt aufnehmen",
    stripAlts: [
      "Elektrifizierter Bus – Elektrifizierung von Nutzfahrzeugen",
      "Ladeinfrastruktur für elektrische Nutzfahrzeuge",
      "SiC-Wafer für Leistungshalbleiter",
      "Elektrifizierte Baumaschine – Bagger",
      "Elektrischer Lkw für den Schwerlastverkehr",
    ],
    driversTeaser: "Elektrifizierung von Nutzfahrzeugen",
    driversHeadline: "Wesentliche Marktreiber",
    drivers: [
      {
        num: "01",
        title: "Regulierung & Emissionsziele",
        text: "EU: −45 % Lkw-CO₂ bis 2030, −90 % bis 2040 (vs. 2019). Fahrverbote für Verbrennungsfahrzeuge in Innenstädten. US-EPA-Standards, chinesische NEV-Mandate. Mautbefreiung für E-Lkw bis 2031.",
      },
      {
        num: "02",
        title: "Sinkende Batteriekosten",
        text: "Batteriekosten gesunken von ~USD 1.400/kWh (2008) auf ~USD 115/kWh (2024). Zielwerte: ~USD 80/kWh bis 2026. TCO-Parität BEV vs. Diesel im Kurzstreckenbereich bereits erreicht; Langstrecke bis 2030.",
      },
      {
        num: "03",
        title: "TCO-Vorteile",
        text: "E-Nutzfahrzeuge bis 2030 in nahezu allen Fällen günstiger im Betrieb als Diesel (TNO-Studie). Kurzstrecke: 22–27 % TCO-Einsparung. Schwerer Langstreckenverkehr: bis zu 23 % Einsparung. Depotladung als zentraler Kostenhebel.",
      },
      {
        num: "04",
        title: "Ausbau der Ladeinfrastruktur",
        text: "Europa: Masterplan Ladeinfrastruktur 2030. Bis zu 1.410 Ladepunkte für schwere E-Lkw an über 120 Autobahnraststätten. AFIF-EU-Kofinanzierung. IEA: Verdopplung öffentlicher Ladepunkte in Europa auf 2 Mio. bis 2030.",
      },
      {
        num: "05",
        title: "Wachsende OEM-Fahrzeugportfolios",
        text: "Lkw der 3. Generation ab 2025 mit Reichweiten bis zu 1.000 km (BEV). Alle großen OEMs (Volvo, Daimler, MAN, Scania, DAF) elektrifizieren ihre Flotten. Chinesische Exportoffensive mit wettbewerbsfähigen Preisen.",
      },
      {
        num: "06",
        title: "Nachfrage der Flottenoperatoren",
        text: "Bereits fast zwei Drittel der Flottenoperatoren halten einen Elektroanteil von über 10 %. Großaufträge: DSV plant über 2.000 E-Lkw. Logistikunternehmen nutzen Depotladung und digitales Flottenmanagement als Wettbewerbsvorteil.",
      },
    ],
  },
  en: {
    heroEyebrow: "Automotive / E-Mobility",
    heroTitle: "Electrification of Commercial Vehicles – Next Gen Drive Technology",
    heroSubtitle: "Advancing technologies for zero-emission e-mobility.",
    techTeaser: "Silicon Carbide (SiC) & Gallium Nitride (GaN)",
    techHeadline: "Key technologies for the electrification of commercial vehicles",
    techLead: "OEMs are continuously integrating WBG SiC/GaN to increase efficiency",
    techBullets: [
      "SiC for the powertrain and AUX inverters (auxiliary units)",
      "GaN for DC-DC converters and OBC charging",
      "Substrate prices fell by 20–30% in 2024",
      "SiC carries a real price premium — currently around 2–3× versus Si IGBT",
    ],
    techImageAlt: "Electric car and electrified bus with powertrain and power electronics blueprints",
    techCta: "Get in touch",
    stripAlts: [
      "Electric bus — commercial vehicle electrification",
      "Charging infrastructure for electric commercial vehicles",
      "SiC wafer for power semiconductors",
      "Electrified construction machinery — excavator",
      "Electric truck for heavy-duty transport",
    ],
    driversTeaser: "Electrification of Commercial Vehicles",
    driversHeadline: "Key Market Drivers",
    drivers: [
      {
        num: "01",
        title: "Regulation & Emission Targets",
        text: "EU: −45% truck CO₂ by 2030, −90% by 2040 (vs. 2019). Combustion-vehicle bans in inner cities. US EPA standards and Chinese NEV mandates. Toll exemption for e-trucks until 2031.",
      },
      {
        num: "02",
        title: "Falling Battery Costs",
        text: "Battery costs down from ~USD 1,400/kWh (2008) to ~USD 115/kWh (2024). Targets: ~USD 80/kWh by 2026. BEV vs. diesel TCO parity already reached in short-haul; long-haul by 2030.",
      },
      {
        num: "03",
        title: "TCO Advantages",
        text: "By 2030, electric commercial vehicles will be cheaper to operate than diesel in almost all cases (TNO study). Short-haul: 22–27% TCO savings. Heavy long-haul: up to 23% savings. Depot charging as the key cost lever.",
      },
      {
        num: "04",
        title: "Charging Infrastructure Build-Out",
        text: "Europe: Charging Infrastructure Masterplan 2030. Up to 1,410 charging points for heavy e-trucks at more than 120 motorway service areas. AFIF EU co-funding. IEA: public charging points in Europe to double to 2 million by 2030.",
      },
      {
        num: "05",
        title: "Growing OEM Vehicle Portfolios",
        text: "Third-generation trucks from 2025 with ranges of up to 1,000 km (BEV). All major OEMs (Volvo, Daimler, MAN, Scania, DAF) are electrifying their fleets. Chinese export offensive with competitive pricing.",
      },
      {
        num: "06",
        title: "Fleet Operator Demand",
        text: "Almost two thirds of fleet operators already run an electric share above 10%. Major orders: DSV plans more than 2,000 e-trucks. Logistics companies use depot charging and digital fleet management as a competitive edge.",
      },
    ],
  },
};

const META: Record<Lang, PageMeta> = {
  de: {
    title: "Advancing Technologies for Zero-Emission e-Mobility",
    description:
      "Silicon Carbide (SiC) and Gallium Nitride (GaN) are accelerating the transition to electrified commercial vehicles",
    keywords: [
      "powertrain",
      "aux-inverter",
      "onboard-charging",
      "SiC for powertrain",
      "GaN for DC-DC converter",
      "OBC",
    ],
  },
  en: {
    title: "Advancing Technologies for Zero-Emission e-Mobility",
    description:
      "Silicon Carbide (SiC) and Gallium Nitride (GaN) are accelerating the transition to electrified commercial vehicles",
    keywords: [
      "powertrain",
      "aux-inverter",
      "onboard-charging",
      "SiC for powertrain",
      "GaN for DC-DC converter",
      "OBC",
    ],
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
          icon={Truck}
          title={t.heroTitle}
          subtitle={t.heroSubtitle}
          width="wide"
        />

        {/* SiC & GaN als Schlüsseltechnologien — Pattern B (Split Bild ↔ Text) + Bildleiste */}
        <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
          <BrandWatermark position="bottom-left" tint="navy" size={460} opacity={0.045} />
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-brand-cyan/[0.07] rounded-full blur-[110px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <Reveal className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-4 block">
                {t.techTeaser}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy leading-tight">
                {t.techHeadline}
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <Reveal className="lg:col-span-6 lg:order-1">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-brand-navy leading-tight mb-6">
                  {t.techLead}
                </h3>
                <ul className="space-y-3 list-none p-0 m-0">
                  {t.techBullets.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                      <span className="font-sans text-sm text-brand-navy/70">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link
                    href={localePath(lang, "/contacts")}
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-brand-navy text-white font-semibold text-sm hover:bg-brand-navy/90 transition-colors"
                  >
                    {t.techCta} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={0.12} className="lg:col-span-6 lg:order-2">
                <div className="relative aspect-[4/3] min-h-[260px] rounded-2xl overflow-hidden border border-brand-navy/8 bg-surface-light shadow-sm">
                  <Image
                    src="/images/emobility-automotive.png"
                    alt={t.techImageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </Reveal>
            </div>

            {/* Bildleiste: Anwendungsfelder der Folie */}
            <Reveal delay={0.24}>
              <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-5">
                {STRIP_IMAGES.map((src, i) => (
                  <div
                    key={src}
                    className="relative aspect-[4/3] rounded-xl border border-brand-navy/8 bg-surface-light overflow-hidden"
                  >
                    <Image
                      src={src}
                      alt={t.stripAlts[i]}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                    />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Wesentliche Marktreiber — Pattern C (Icon-Card-Grid, 6 Karten) */}
        <section className="relative py-20 sm:py-28 bg-white overflow-hidden">
          <BrandWatermark position="top-right" tint="blue" size={460} opacity={0.05} />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <Reveal className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-4 block">
                {t.driversTeaser}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy leading-tight">
                {t.driversHeadline}
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.drivers.map((driver, i) => {
                const Icon = DRIVER_ICONS[i];
                return (
                  <Reveal key={driver.num} delay={i * 0.08}>
                    <div className="h-full p-6 rounded-2xl border border-brand-navy/8 bg-white shadow-sm">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[9px] font-bold text-brand-navy tracking-wider uppercase block">
                            {driver.num}
                          </span>
                          <h3 className="font-display text-base font-bold text-brand-navy leading-tight">
                            {driver.title}
                          </h3>
                        </div>
                      </div>
                      <p className="font-sans text-sm text-brand-navy/60 leading-relaxed">
                        {driver.text}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Kontakt-Schluss */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
