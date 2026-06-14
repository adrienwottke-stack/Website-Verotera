import type { Metadata } from "next";
import { Layers3, Car, BatteryCharging, Factory, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SpotlightTable from "@/components/SpotlightTable";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "SiC – Power Semiconductor of the Electrification Age",
  description:
    "SiC: The Wide-Bandgap Platform Driving Efficiency in Electric Vehicles, Solar Energy, and Green Hydrogen – From Device to System",
  keywords: ["silicium carbide - SiC", "traction inverter", "hydrogen converters"],
};

const stats = [
  { value: "~$10B", label: "SiC-Markt 2030 (CAGR 20 %)" },
  { value: "~70 %", label: "Automotive-Anteil bis 2030" },
  { value: ">$30B", label: "Globale Investitionen 2019–2025" },
  { value: "$200M", label: "Data-Center-Potenzial (5 J.)" },
];

const foundation = [
  {
    title: "Bandgap 3,3 eV (3× Si)",
    text: "Das breite Bandgap erlaubt Betrieb mehrere hundert °C über Si. Aktuelle Sperrschichtgrenze 175 °C, Ziel 200 °C.",
  },
  {
    title: "Durchbruchfeld ~3,0 MV/cm",
    text: "10× höher als Si. Driftzone 10× dünner – Widerstand umgekehrt proportional zu E³, ~1.000× geringerer Driftwiderstand.",
  },
  {
    title: "Wärmeleitfähigkeit 3× Si",
    text: "Zieht Wärme schneller aus dem Chip – höhere Stromdichte bei gleicher Sperrschichttemperatur oder einfachere Kühlung.",
  },
  {
    title: "Normally-off SiC-MOSFET",
    text: "Niedriger RDS(on), bidirektionaler Strom, keine Minoritätsträger-Speicherung – kein Tail-Strom. Überlegen gegenüber IGBT bei Teillast.",
  },
];

const trends = [
  {
    icon: ShieldCheck,
    tag: "ROHM EcoSiC · 5. Generation",
    title: "5th-Gen SiC-MOSFETs",
    text: "RDS(on) bei Tj = 175 °C um ~30 % reduziert vs. 4. Gen. Trench-Architektur, kleinerer Cell-Pitch. Wafer-Durchmesser steigt: 6-Zoll Mainstream, 8-Zoll in Qualifizierung.",
  },
  {
    icon: Car,
    tag: "Automotive · 800 V EV",
    title: "SiC in Traktionsinvertern",
    text: "800-V-EV-Plattformen zeigen höhere SiC-Penetration als 400-V-Flotten. Volles SiC-Modul reduziert Inverterverluste um ~44 % vs. Si-IGBT + FRD.",
  },
  {
    icon: BatteryCharging,
    tag: "Industrie · Battery Disconnect",
    title: "Solid-State-Trennschalter",
    text: "SiC-MOSFET ideal für 400–1000 V DC-Busse: niedriger RDS(on), bidirektional, kein Latch-up. Keine Lichtbogen-Degradation – unbegrenzte Schaltzyklen.",
  },
];

const advantages = [
  "Niedriger Driftwiderstand (~1.000× vs. Si)",
  "Wärmeleitfähigkeit 3× Si und GaN",
  "Hohe Sperrschichttemperatur (175 → 200 °C)",
  "Keine Minoritätsträger-Speicherung – kein Tail-Strom",
  "Bis zu 44 % geringere Inverterverluste",
  "Erprobt bis 3,3 kV (Industrie / Netz)",
];

export default function SiCSpotlightPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-brand-navy antialiased">
      <Header />

      <main className="flex-grow">
        <PageHero
          eyebrow="Technology Spotlight"
          icon={Layers3}
          title="Siliziumkarbid (SiC)"
          subtitle="Die dominante Wide-Bandgap-Plattform für Hochspannungs- und Hochtemperatur-Leistungswandlung – von EV-Traktionsinvertern über industrielle Erneuerbare bis zu grünem Wasserstoff. Vom Bauelement zum System."
          width="wide"
        />

        {/* Market stats */}
        <section className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((s, i) => (
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
                Physikalische Grundlage
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-navy">
                Warum SiC die Hochspannung dominiert
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {foundation.map((f, i) => (
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
                Schlüsseltrends 2024 / 2025
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-navy">
                Wo SiC den Markt bewegt
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {trends.map((t, i) => (
                <Reveal key={t.title} delay={i * 0.1}>
                  <div className="glass-panel glass-panel-hover h-full p-7">
                    <div className="p-3 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan w-fit mb-4">
                      <t.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-navy/40 block mb-1">
                      {t.tag}
                    </span>
                    <h3 className="font-display text-base font-bold text-brand-navy mb-2">{t.title}</h3>
                    <p className="text-sm text-brand-navy/60 leading-relaxed">{t.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-8">
              <Factory className="w-6 h-6 text-brand-cyan" />
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-navy">
                Die wichtigsten Vorteile
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {advantages.map((a) => (
                <div key={a} className="flex items-start gap-2.5 rounded-xl border border-brand-navy/8 bg-surface-light px-5 py-4">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-cyan shrink-0" />
                  <span className="text-sm text-brand-navy/70">{a}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-brand-navy/55 leading-relaxed">
              Kurzfristige Korrektur: Die EV-Verlangsamung 2024–2025 drückt die Auslastung auf
              ~50–70 %, eine Erholung wird 2026–2028 erwartet. Der Übergang zu 8-Zoll-Wafern und die
              vertikale Integration (IDM-Modell) bleiben die strukturellen Treiber.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
