import type { Metadata } from "next";
import { Accessibility, Eye, Keyboard, Contrast, MessageSquareWarning, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Barrierefreiheitserklärung - [VEROTERA]",
  description: "Erklärung zur Barrierefreiheit der VEROTERA Website.",
  keywords: ["Barrierefreiheit", "Accessibility"],
};

const measures = [
  {
    icon: Contrast,
    title: "Kontraste & Lesbarkeit",
    text: "Farbkontraste werden gegen die WCAG-AA-Schwellenwerte geprüft. Text bleibt skalierbar und auch bei 200 % Zoom nutzbar.",
  },
  {
    icon: Keyboard,
    title: "Tastaturbedienung",
    text: "Alle interaktiven Elemente – Navigation, Dropdowns, Formulare und Diagramme – sind über die Tastatur erreichbar und mit sichtbarem Fokus versehen.",
  },
  {
    icon: Eye,
    title: "Screenreader-Unterstützung",
    text: "Semantisches HTML, beschreibende Alternativtexte und ARIA-Attribute sorgen für eine verständliche Ausgabe in unterstützenden Technologien.",
  },
];

const conformance = [
  "Klare Dokumentstruktur mit genau einer Hauptüberschrift (h1) pro Seite",
  "Aussagekräftige Alternativtexte für informative Bilder",
  "Responsives Layout für Desktop, Tablet und Smartphone",
  "Sichtbare Fokus-Indikatoren für die Tastaturnavigation",
  "Verzicht auf rein farbabhängige Bedeutungsvermittlung",
];

export default function AccessibilityPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-brand-navy antialiased">
      <Header />

      <main className="flex-grow">
        <PageHero
          eyebrow="Barrierefreiheit"
          icon={Accessibility}
          title="Barrierefreiheitserklärung"
          subtitle="VEROTERA ist bestrebt, seine Website für alle Menschen zugänglich zu gestalten – im Einklang mit den Web Content Accessibility Guidelines (WCAG) 2.1, Konformitätsstufe AA."
        />

        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6 space-y-8">

            <div className="glass-panel p-8 space-y-4 text-sm leading-relaxed text-brand-navy/70">
              <h2 className="font-display text-lg font-bold text-brand-navy">Unser Engagement</h2>
              <p>
                Wir möchten, dass möglichst viele Menschen unsere Website ohne Einschränkungen nutzen
                können. Daher orientieren wir uns an den international anerkannten WCAG 2.1 auf
                Konformitätsstufe AA sowie an den Grundsätzen der EU-Richtlinie 2016/2102 und des
                Barrierefreiheitsstärkungsgesetzes (BFSG). Barrierefreiheit verstehen wir als
                fortlaufenden Prozess, den wir kontinuierlich verbessern.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {measures.map((m) => (
                <div key={m.title} className="glass-panel glass-panel-hover p-6">
                  <div className="p-3 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan w-fit mb-4">
                    <m.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-base font-bold text-brand-navy mb-2">{m.title}</h3>
                  <p className="text-sm text-brand-navy/60 leading-relaxed">{m.text}</p>
                </div>
              ))}
            </div>

            <div className="glass-panel p-8 space-y-4 text-sm leading-relaxed text-brand-navy/70">
              <h2 className="font-display text-lg font-bold text-brand-navy">Umgesetzte Maßnahmen</h2>
              <ul className="space-y-3 list-none m-0 p-0">
                {conformance.map((c) => (
                  <li key={c} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-panel p-8 space-y-4 text-sm leading-relaxed text-brand-navy/70">
              <h2 className="font-display text-lg font-bold text-brand-navy flex items-center gap-2.5">
                <MessageSquareWarning className="w-5 h-5 text-brand-cyan" />
                Barrieren melden
              </h2>
              <p>
                Sind Ihnen Mängel beim barrierefreien Zugang zu Inhalten unserer Website aufgefallen?
                Oder benötigen Sie Informationen in einem barrierefreien Format? Bitte kontaktieren Sie
                uns – wir nehmen Ihr Feedback ernst und bemühen uns um eine zeitnahe Lösung.
              </p>
              <p className="font-mono text-xs p-4 rounded-lg bg-surface-light text-brand-navy/80 border border-brand-navy/8 leading-relaxed">
                VEROTERA GmbH · Böhlerstraße 1, 40667 Meerbusch
                <br />
                E-Mail:{" "}
                <a href="mailto:info@verotera.com" className="text-brand-cyan hover:underline">
                  info@verotera.com
                </a>{" "}
                · Telefon: +49 173 1878630
              </p>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
