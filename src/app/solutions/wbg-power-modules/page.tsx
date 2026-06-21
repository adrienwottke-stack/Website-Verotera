import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Cpu, ArrowRight, Zap, Thermometer, Layers, CheckCircle2, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Innovative Wide-Bandgap Semiconductor Solutions",
  description:
    "VEROTERA operates across the full stack – from chip physics to complete systems, designing technologies for the real needs of modern applications.",
  keywords: ["wide bandgap semiconductors", "SiC modules", "GaN technology"],
};

export default function WbgPowerModulesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-brand-navy antialiased">
      <Header />      <main className="flex-grow">
        <PageHero
          eyebrow="WBG-Leistungsmodule"
          icon={Cpu}
          title="Hocheffiziente WBG Leistungsmodullösungen für eine nachhaltige Zukunft"
          subtitle="Vom Chip bis zum System – Technologiekompetenz für die elektrifizierte Welt."
          width="wide"
        />

        {/* Section 1: Technologie- & Systempartner */}
        <section className="py-20 sm:py-28 bg-white border-b border-brand-navy/8">
          <div className="max-w-7xl mx-auto px-6">
            
            {/* Title & Subtitle block */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-2 block">
                Kooperation & Entwicklung
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-navy leading-tight">
                Technologie- & Systempartner
              </h2>
              <p className="text-brand-navy/60 mt-3 text-base sm:text-lg">
                Innovative WBG-Halbleiterlösungen der nächsten Generation
              </p>
            </div>

            {/* Split layout (Row 1) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16">
              <Reveal>
                <div className="text-left space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-navy/40">
                      Advanced Semiconductor Technologies
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-brand-navy">
                      Wide-Bandgap at the Core
                    </h3>
                  </div>
                  <p className="font-sans text-base sm:text-lg text-brand-navy/65 leading-relaxed">
                    VEROTERA begleitet Kunden von den frühesten Entwicklungsphasen an und co-entwickelt WBG Leistungsmodullösungen der nächsten Generation. Wir agieren über den gesamten Stack und entwickeln Technologien, die den tatsächlichen Anforderungen und Randbedingungen moderner Applikationen entsprechen.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-brand-navy/8 bg-surface-light shadow-sm flex items-center justify-center p-6">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/sic-gan-car.png"
                      alt="SiC & GaN Wide-Bandgap Semiconductor Applications in Vehicles"
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </Reveal>
            </div>

            {/* 4 Cards Grid (Row 2) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Reveal delay={0.1}>
                <div className="glass-panel glass-panel-hover p-8 flex gap-5 items-start">
                  <div className="p-3 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold text-brand-navy mb-2">Höhere Effizienz</h4>
                    <p className="text-sm text-brand-navy/65 leading-relaxed">
                      Minimierte Schaltverluste für optimale Energieeinsparung.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="glass-panel glass-panel-hover p-8 flex gap-5 items-start">
                  <div className="p-3 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan shrink-0">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold text-brand-navy mb-2">Hohe Leistungsdichte</h4>
                    <p className="text-sm text-brand-navy/65 leading-relaxed">
                      Reduzierte Baugröße und geringeres Gewicht für platzkritische Systeme.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="glass-panel glass-panel-hover p-8 flex gap-5 items-start">
                  <div className="p-3 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan shrink-0">
                    <Thermometer className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold text-brand-navy mb-2">Überlegene thermische Performance</h4>
                    <p className="text-sm text-brand-navy/65 leading-relaxed">
                      Optimierte Wärmepfade für zuverlässigen Hochleistungsbetrieb.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.25}>
                <div className="glass-panel glass-panel-hover p-8 flex gap-5 items-start">
                  <div className="p-3 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan shrink-0">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold text-brand-navy mb-2">Integrationsoptimiert</h4>
                    <p className="text-sm text-brand-navy/65 leading-relaxed">
                      Maßgeschneiderte Konfigurationen für nahtlosen Einsatz auf Systemebene.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </section>

        {/* Section 2: Ihr Projekt. Unsere Expertise. Ein Ziel. */}
        <section className="relative py-20 sm:py-28 bg-brand-navy overflow-hidden">
          {/* Decorative watermark */}
          <div
            aria-hidden="true"
            className="v-watermark absolute z-0 top-0 left-0"
            style={{
              width: 420,
              height: 420,
              opacity: 0.06,
              backgroundColor: "#ffffff",
              transform: "translate(-25%, -25%) scaleX(-1)",
            }}
          />

          <div className="max-w-7xl mx-auto px-6 relative z-10">

            {/* Split layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <Reveal>
                <div className="text-left space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-white/50">
                      Advanced Semiconductor Technologies
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                      Wide-Bandgap at the Core
                    </h3>
                  </div>
                  <p className="font-sans text-base text-white/70 leading-relaxed">
                    Wir vernetzen globale Fachkompetenz aus Leistungselektronik, WBG-Technologien und Systemapplikationen – für fundierte Engineering-Entscheidungen mit hoher Sicherheit. Unsere Lösungen verwandeln Komplexität in Klarheit: Sie beschleunigen Innovation und erschließen die kollektive Intelligenz von Engineering-Organisationen.
                  </p>

                  {/* Bullets */}
                  <div className="space-y-4 pt-2">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-brand-cyan">Lösungen</h4>
                    <ul className="space-y-3 list-none p-0 m-0">
                      {[
                        "Tiefe WBG-Halbleitertechnologie Expertise",
                        "Fortschrittliches Engineering für SiC/GaN-basierte Leistungssysteme",
                        "Ausgeprägte Anwendungs- und Systemkompetenz",
                        "Zugang zu erfahrenen R&D Experten aus vielfältigen Fachdisziplinen",
                        "Neutrale, technologiegetriebene Beratungsrolle"
                      ].map((bullet, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                          <span className="font-sans text-sm sm:text-base text-white/80">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 bg-brand-navy-light shadow-lg flex items-center justify-center p-6">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/emobility-automotive.png"
                      alt="Elektrifizierter Bus / Nutzfahrzeug Technologie"
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </Reveal>
            </div>

            {/* CTA bar below the split */}
            <div className="mt-16 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
                  Ihr Projekt. Unsere Expertise. Ein Ziel.
                </h3>
                <p className="text-white/60 mt-2 text-base">
                  Von der ersten Anforderung bis zur fertigen Lösung – wir sind Ihr Technologiepartner.
                </p>
              </div>
              <Link
                href="/contacts"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-brand-cyan text-white font-semibold text-sm hover:bg-brand-cyan/90 transition-all shrink-0 focus:outline-none focus:ring-2 focus:ring-white/40"
              >
                Projekt starten <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white border-t border-brand-navy/8">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-navy mb-4">
              Benötigen Sie Expertenunterstützung für Ihre WBG-Halbleiterlösung?
            </h2>
            <p className="text-brand-navy/60 mb-8">
              Unsere Applikations- und Technologieexperten unterstützen Sie bei Auslegung, Validierung und Aufbau von SiC- und GaN-Lösungen, die exakt auf Ihre Systemanforderungen zugeschnitten sind.
            </p>
            <Link
              href="/contacts"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-brand-navy text-white font-semibold text-sm hover:bg-brand-navy/90 transition-colors"
            >
              Jetzt starten <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
