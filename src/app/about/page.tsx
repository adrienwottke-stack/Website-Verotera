import type { Metadata } from "next";
import Image from "next/image";
import { Compass, Eye, Rocket, Target, MapPin, Quote, CheckCircle2, Server, Car, Sun, Factory, Droplets } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About VEROTERA – Wide-Bandgap Semiconductor Modules",
  description:
    "VEROTERA's advanced WBG power modules deliver unmatched performance for smarter, more efficient systems across e-mobility, renewable energy and data centers.",
  keywords: ["Über VEROTERA", "Aly Mashaly", "Vision", "Mission", "WBG Halbleiter"],
};

const objectives = [
  "Leistungsdichte erhöhen und Bauraum auf Systemebene reduzieren.",
  "Wirkungsgrad steigern und thermische Verlustleistung minimieren.",
  "Zuverlässigkeit, Nachvollziehbarkeit und Zertifizierbarkeit von WBG-Lösungen stärken.",
  "Entwicklungszyklen durch agentische KI, strukturierte Wissensmodelle und Human-in-the-Loop-Prozesse beschleunigen.",
  "Europäische und globale Wertschöpfung in kritischen Elektrifizierungsanwendungen unterstützen.",
];

const impactAreas = [
  { icon: Server, title: "AI Data Centers", text: "Kompakte und effiziente Stromversorgungsarchitekturen für Hochleistungsrechenzentren." },
  { icon: Car, title: "E-Mobility", text: "Robuste WBG-Leistungselektronik für elektrische Antriebs- und Ladeinfrastrukturen." },
  { icon: Sun, title: "Renewable Energy", text: "Effiziente Umrichterlösungen für Wind, Solar und Energiespeicher." },
  { icon: Factory, title: "Industrial Electrification", text: "Höhere Leistungsdichte und Zuverlässigkeit für die industrielle Automatisierung." },
  { icon: Droplets, title: "Green Hydrogen", text: "Effiziente Leistungselektronik für Elektrolyseur-Systeme und DC-basierte Energiepfade." },
];

const credentials = [
  "25+ Jahre Erfahrung in der WBG-Leistungselektronik",
  "Entwickler von 100+ System-Produkten",
  "Experte für funktionale Sicherheit (ISO 26262, IEC 61508)",
  "Pionier des KI-gestützten Systems Engineering",
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-brand-navy antialiased">
      <Header />

      <main className="flex-grow">
        <PageHero
          eyebrow="Über VEROTERA"
          icon={Compass}
          title={
            <>
              Advanced Semiconductor Technologies.
              <br />
              <span className="text-brand-cyan">Wide-Bandgap at the Core.</span>
            </>
          }
          subtitle="VEROTERA entwickelt und ermöglicht fortschrittliche WBG-Leistungselektronik für anspruchsvolle Elektrifizierungsanwendungen. Durch die Verbindung von SiC/GaN-Technologien, innovativem Packaging und agentischer KI schlagen wir die Brücke zwischen technologischer Komplexität und industrieller Umsetzung."
          width="wide"
        />

        {/* Vision & Mission */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Reveal>
              <div className="glass-panel h-full p-8 sm:p-10 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-brand-cyan to-transparent" />
                <div className="p-4 rounded-2xl bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan w-fit mb-6">
                  <Eye className="w-6 h-6" />
                </div>
                <h2 className="font-display text-2xl font-bold text-brand-navy mb-4">Unsere Vision</h2>
                <p className="font-sans text-brand-navy/65 leading-relaxed">
                  Unsere Vision ist es, ein globaler Deep-Tech-Enabler für
                  Wide-Bandgap-Leistungselektronik und agentische KI-gestützte Engineering-Systeme zu
                  werden. Wir sehen Wide-Bandgap-Technologien als Kernbaustein für eine effizientere,
                  resilientere und elektrifizierte industrielle Zukunft.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="glass-panel h-full p-8 sm:p-10 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-brand-emerald to-transparent" />
                <div className="p-4 rounded-2xl bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald w-fit mb-6">
                  <Rocket className="w-6 h-6" />
                </div>
                <h2 className="font-display text-2xl font-bold text-brand-navy mb-4">Unsere Mission</h2>
                <p className="font-sans text-brand-navy/65 leading-relaxed">
                  VEROTERA verbindet SiC- und GaN-Technologien, innovatives Packaging und eine Agentic
                  AI Ecosystem Architecture. Ziel ist es, komplexe Entwicklungsaufgaben in der
                  Leistungselektronik schneller, nachvollziehbarer und systematischer zu lösen.
                  Cognitive Orchestration bildet dabei den methodischen Kern.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Objectives */}
        <section className="py-16 sm:py-20 bg-surface-light border-y border-brand-navy/8">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-8">
              <Target className="w-6 h-6 text-brand-cyan" />
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-navy">Unsere Ziele</h2>
            </div>
            <ul className="space-y-4 list-none m-0 p-0">
              {objectives.map((o) => (
                <li key={o} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-emerald shrink-0 mt-0.5" />
                  <span className="text-brand-navy/70">{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Why it matters */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-2 block">
              Warum es relevant ist
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-navy mb-5">
              Integration entscheidet über die nächste Phase der Elektrifizierung
            </h2>
            <p className="text-brand-navy/65 leading-relaxed">
              Die nächste Phase der Elektrifizierung wird nicht allein durch bessere Halbleiter
              entschieden, sondern durch deren erfolgreiche Integration in leistungsfähige Systeme. AI
              Data Centers, E-Mobility, Renewable Energy und Industrial Electrification erhöhen die
              Anforderungen an Effizienz, Kompaktheit, thermische Beherrschbarkeit und Verfügbarkeit.
              Wide-Bandgap-Technologien sind dafür ein zentraler Enabler – sie benötigen aber tiefes
              Packaging-, Applikations- und Systemverständnis.
            </p>
          </div>
        </section>

        {/* Impact areas */}
        <section className="py-16 sm:py-20 bg-surface-light border-y border-brand-navy/8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-2 block">
                Wo wir Wirkung erzeugen
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-navy">
                Anwendungsfelder & Systemnutzen
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {impactAreas.map((a, i) => (
                <Reveal key={a.title} delay={i * 0.07}>
                  <div className="glass-panel glass-panel-hover h-full p-7">
                    <div className="p-3 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan w-fit mb-4">
                      <a.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-base font-bold text-brand-navy mb-2">{a.title}</h3>
                    <p className="text-sm text-brand-navy/60 leading-relaxed">{a.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section id="leadership" className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-2 block">
                Leadership
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-navy mb-3">
                Pionierarbeit in der Leistungselektronik
              </h2>
              <p className="text-brand-navy/60">
                Expertengeführtes Halbleiterdesign und Systems Engineering mit jahrzehntelanger
                technischer Erfahrung für globale OEMs.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Founder card */}
              <div className="lg:col-span-5">
                <div className="glass-panel p-8 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-cyan to-brand-blue" />
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="relative w-32 h-32 rounded-3xl overflow-hidden bg-surface-light border border-brand-navy/10 mb-4">
                      <Image
                        src="https://verotera.com/images/aly-mashaly-founder-2.png"
                        alt="Aly Mashaly – Founder & CEO"
                        fill
                        className="object-cover"
                        sizes="128px"
                      />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-brand-navy mb-1">Aly Mashaly</h3>
                    <p className="font-sans text-xs text-brand-cyan font-bold uppercase tracking-wider">
                      Founder &amp; CEO
                    </p>
                  </div>
                  <div className="relative p-6 rounded-2xl bg-surface-light border border-brand-navy/8">
                    <Quote className="absolute top-3 left-3 w-9 h-9 text-brand-cyan/10 pointer-events-none" />
                    <p className="font-sans text-sm text-brand-navy/70 italic leading-relaxed relative z-10">
                      „Wir haben VEROTERA gegründet, um die Fragmentierung heutiger
                      Hardware-Entwicklungspipelines aufzubrechen. Indem wir physikalische
                      Halbleitereigenschaften direkt mit Zertifizierungsanforderungen verknüpfen,
                      entwickeln wir maßgeschneiderte Leistungslösungen mit deutlich kürzeren
                      Entwicklungszyklen.“
                    </p>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="lg:col-span-7 space-y-6">
                <h3 className="font-display text-2xl font-bold text-brand-navy">
                  Gründer- & Führungserfahrung
                </h3>
                <p className="font-sans text-brand-navy/65 leading-relaxed">
                  Aly Mashaly ist ein international anerkannter Experte für die Entwicklung
                  hochdichter, energieeffizienter Leistungsmodule. Im Laufe seiner Karriere hat er
                  F&amp;E-Initiativen mit signifikanten Umsätzen vorangetrieben und strategische
                  Partnerschaften zwischen Tier-1-Halbleiterunternehmen und globalen Automotive- und
                  Netz-OEMs koordiniert.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {credentials.map((c) => (
                    <div key={c} className="flex items-start gap-2.5 rounded-xl border border-brand-navy/8 bg-surface-light px-5 py-4">
                      <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                      <span className="text-sm text-brand-navy/70">{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* R&D location */}
        <section className="py-16 bg-surface-light border-t border-brand-navy/8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="glass-panel p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 text-left">
                <div className="p-3.5 rounded-2xl bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-brand-navy mb-1">
                    R&amp;D-Center Meerbusch (NRW), Deutschland
                  </h3>
                  <p className="font-sans text-sm text-brand-navy/55">
                    Im Hightech-Korridor Deutschlands – Entwicklung und Verifikation von
                    Leistungselektronik der nächsten Generation.
                  </p>
                </div>
              </div>
              <span className="px-5 py-2 rounded-full border border-brand-navy/10 bg-white text-xs text-brand-navy/60 font-semibold uppercase tracking-wider shrink-0">
                Strategischer EU-Hub
              </span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
