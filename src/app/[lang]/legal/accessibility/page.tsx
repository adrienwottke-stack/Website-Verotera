import type { Metadata } from "next";
import { Accessibility, Eye, Keyboard, Contrast, MessageSquareWarning, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { hasLang, type Lang } from "@/lib/i18n";
import { buildMetadata, type PageMeta } from "@/lib/seo";

const MEASURE_ICONS = [Contrast, Keyboard, Eye];

const COPY: Record<
  Lang,
  {
    heroEyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    commitmentTitle: string;
    commitmentBody: string;
    measures: { title: string; text: string }[];
    conformanceTitle: string;
    conformance: string[];
    reportTitle: string;
    reportBody: string;
    emailLabel: string;
    phoneLabel: string;
  }
> = {
  de: {
    heroEyebrow: "Barrierefreiheit",
    heroTitle: "Barrierefreiheitserklärung",
    heroSubtitle:
      "VEROTERA ist bestrebt, seine Website für alle Menschen zugänglich zu gestalten – im Einklang mit den Web Content Accessibility Guidelines (WCAG) 2.1, Konformitätsstufe AA.",
    commitmentTitle: "Unser Engagement",
    commitmentBody:
      "Wir möchten, dass möglichst viele Menschen unsere Website ohne Einschränkungen nutzen können. Daher orientieren wir uns an den international anerkannten WCAG 2.1 auf Konformitätsstufe AA sowie an den Grundsätzen der EU-Richtlinie 2016/2102 und des Barrierefreiheitsstärkungsgesetzes (BFSG). Barrierefreiheit verstehen wir als fortlaufenden Prozess, den wir kontinuierlich verbessern.",
    measures: [
      {
        title: "Kontraste & Lesbarkeit",
        text: "Farbkontraste werden gegen die WCAG-AA-Schwellenwerte geprüft. Text bleibt skalierbar und auch bei 200 % Zoom nutzbar.",
      },
      {
        title: "Tastaturbedienung",
        text: "Alle interaktiven Elemente – Navigation, Dropdowns, Formulare und Diagramme – sind über die Tastatur erreichbar und mit sichtbarem Fokus versehen.",
      },
      {
        title: "Screenreader-Unterstützung",
        text: "Semantisches HTML, beschreibende Alternativtexte und ARIA-Attribute sorgen für eine verständliche Ausgabe in unterstützenden Technologien.",
      },
    ],
    conformanceTitle: "Umgesetzte Maßnahmen",
    conformance: [
      "Klare Dokumentstruktur mit genau einer Hauptüberschrift (h1) pro Seite",
      "Aussagekräftige Alternativtexte für informative Bilder",
      "Responsives Layout für Desktop, Tablet und Smartphone",
      "Sichtbare Fokus-Indikatoren für die Tastaturnavigation",
      "Verzicht auf rein farbabhängige Bedeutungsvermittlung",
    ],
    reportTitle: "Barrieren melden",
    reportBody:
      "Sind Ihnen Mängel beim barrierefreien Zugang zu Inhalten unserer Website aufgefallen? Oder benötigen Sie Informationen in einem barrierefreien Format? Bitte kontaktieren Sie uns – wir nehmen Ihr Feedback ernst und bemühen uns um eine zeitnahe Lösung.",
    emailLabel: "E-Mail",
    phoneLabel: "Telefon",
  },
  en: {
    heroEyebrow: "Accessibility",
    heroTitle: "Accessibility Statement",
    heroSubtitle:
      "VEROTERA strives to make its website accessible to everyone — in line with the Web Content Accessibility Guidelines (WCAG) 2.1, conformance level AA.",
    commitmentTitle: "Our Commitment",
    commitmentBody:
      "We want as many people as possible to be able to use our website without restrictions. We therefore follow the internationally recognized WCAG 2.1 at conformance level AA as well as the principles of EU Directive 2016/2102 and the German Accessibility Strengthening Act (BFSG). We see accessibility as an ongoing process that we continuously improve.",
    measures: [
      {
        title: "Contrast & Readability",
        text: "Color contrasts are checked against WCAG AA thresholds. Text remains scalable and usable even at 200% zoom.",
      },
      {
        title: "Keyboard Operation",
        text: "All interactive elements — navigation, dropdowns, forms and diagrams — are reachable via keyboard, with visible focus indicators.",
      },
      {
        title: "Screen Reader Support",
        text: "Semantic HTML, descriptive alternative texts and ARIA attributes ensure understandable output in assistive technologies.",
      },
    ],
    conformanceTitle: "Measures Implemented",
    conformance: [
      "Clear document structure with exactly one main heading (h1) per page",
      "Meaningful alternative texts for informative images",
      "Responsive layout for desktop, tablet and smartphone",
      "Visible focus indicators for keyboard navigation",
      "No meaning conveyed by color alone",
    ],
    reportTitle: "Report Barriers",
    reportBody:
      "Have you noticed shortcomings in the accessibility of our website's content? Or do you need information in an accessible format? Please contact us — we take your feedback seriously and aim to resolve issues promptly.",
    emailLabel: "Email",
    phoneLabel: "Phone",
  },
};

const META: Record<Lang, PageMeta> = {
  de: {
    title: "Barrierefreiheitserklärung - [VEROTERA]",
    description: "Erklärung zur Barrierefreiheit der VEROTERA Website.",
    keywords: ["Barrierefreiheit", "Accessibility"],
  },
  en: {
    title: "Accessibility Statement - [VEROTERA]",
    description: "Statement on the accessibility of the VEROTERA website.",
    keywords: ["Accessibility"],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const l = hasLang(lang) ? lang : "de";
  return buildMetadata(l, "/legal/accessibility", META[l]);
}

export default async function AccessibilityPage({
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
          eyebrow={t.heroEyebrow}
          icon={Accessibility}
          title={t.heroTitle}
          subtitle={t.heroSubtitle}
        />

        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6 space-y-8">

            <div className="glass-panel p-8 space-y-4 text-sm leading-relaxed text-brand-navy/70">
              <h2 className="font-display text-lg font-bold text-brand-navy">{t.commitmentTitle}</h2>
              <p>
                {t.commitmentBody}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {t.measures.map((m, i) => {
                const Icon = MEASURE_ICONS[i];
                return (
                  <div key={m.title} className="glass-panel glass-panel-hover p-6">
                    <div className="p-3 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan w-fit mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-base font-bold text-brand-navy mb-2">{m.title}</h3>
                    <p className="text-sm text-brand-navy/60 leading-relaxed">{m.text}</p>
                  </div>
                );
              })}
            </div>

            <div className="glass-panel p-8 space-y-4 text-sm leading-relaxed text-brand-navy/70">
              <h2 className="font-display text-lg font-bold text-brand-navy">{t.conformanceTitle}</h2>
              <ul className="space-y-3 list-none m-0 p-0">
                {t.conformance.map((c) => (
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
                {t.reportTitle}
              </h2>
              <p>
                {t.reportBody}
              </p>
              <p className="font-mono text-xs p-4 rounded-lg bg-surface-light text-brand-navy/80 border border-brand-navy/8 leading-relaxed">
                VEROTERA GmbH · Böhlerstraße 1, 40667 Meerbusch
                <br />
                {t.emailLabel}:{" "}
                <a href="mailto:info@verotera.com" className="text-brand-cyan hover:underline">
                  info@verotera.com
                </a>{" "}
                · {t.phoneLabel}: +49 173 1878630
              </p>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
