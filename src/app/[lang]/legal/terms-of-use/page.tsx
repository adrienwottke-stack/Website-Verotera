import type { Metadata } from "next";
import { FileCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { hasLang, type Lang } from "@/lib/i18n";

type Section = { title: string; paragraphs: string[] };

const COPY: Record<
  Lang,
  {
    heroEyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    s3Title: string;
    s3Intro: string;
    permittedTitle: string;
    permitted: string[];
    prohibitedTitle: string;
    prohibited: string[];
    sections: Section[];
  }
> = {
  de: {
    heroEyebrow: "Rechtliches",
    heroTitle: "Nutzungsbedingungen",
    heroSubtitle: "Regeln für den Zugang zu und die Nutzung der VEROTERA-Website. Stand: Mai 2025.",
    s3Title: "3. Erlaubte Nutzung",
    s3Intro: "Die Nutzung dieser Website ist ausschließlich zu rechtmäßigen Zwecken gestattet.",
    permittedTitle: "Gestattet ist",
    permitted: [
      "Das Abrufen und Lesen von Inhalten zu privaten und beruflichen Informationszwecken",
      "Das Weiterleiten von Links auf diese Website",
      "Die Kontaktaufnahme über bereitgestellte Kontaktwege",
    ],
    prohibitedTitle: "Nicht gestattet ist insbesondere",
    prohibited: [
      "Das automatisierte Auslesen von Inhalten (Scraping, Crawling) ohne ausdrückliche schriftliche Genehmigung",
      "Das Verbreiten von Inhalten dieser Website ohne Quellenangabe oder entgegen dem Urheberrecht",
      "Jegliche Handlungen, die die Infrastruktur, Sicherheit oder Verfügbarkeit der Website gefährden können (z. B. DoS-Angriffe, Einschleusen von Schadsoftware)",
      "Die Nutzung der Website für kommerzielle Zwecke ohne ausdrückliche Genehmigung",
      "Das Einbringen rechtswidriger, beleidigender oder diskriminierender Inhalte über Kontaktformulare oder andere Eingabefelder",
    ],
    sections: [
      {
        title: "1. Geltungsbereich und Anbieter",
        paragraphs: [
          "Diese Nutzungsbedingungen regeln den Zugang zu und die Nutzung der Website der VEROTERA GmbH (nachfolgend „VEROTERA“ oder „wir“) sowie aller damit verbundenen digitalen Angebote.",
          "Anbieter: VEROTERA GmbH, Böhlerstraße 1, 40667 Meerbusch. E-Mail: info@verotera.com. Registergericht: Amtsgericht Neuss, HRB 24862. Vertreten durch den Geschäftsführer Aly Mashaly.",
          "Mit der Nutzung dieser Website erklären Sie sich mit diesen Nutzungsbedingungen einverstanden. Wenn Sie mit diesen Bedingungen nicht einverstanden sind, nutzen Sie diese Website bitte nicht.",
        ],
      },
      {
        title: "2. Leistungsgegenstand und Verfügbarkeit",
        paragraphs: [
          "VEROTERA stellt über diese Website Informationen zu seinen Leistungen, Produkten und Unternehmensinhalten bereit. Die Inhalte dienen ausschließlich allgemeinen Informationszwecken.",
          "Wir bemühen uns, die Website dauerhaft erreichbar zu halten. Ein Anspruch auf ständige Verfügbarkeit besteht jedoch nicht. Wir behalten uns vor, den Betrieb der Website jederzeit – auch ohne vorherige Ankündigung – ganz oder teilweise einzuschränken, zu unterbrechen oder einzustellen, insbesondere für Wartungsarbeiten, Sicherheitsupdates oder bei technischen Störungen.",
        ],
      },
      {
        title: "4. Geistiges Eigentum und Urheberrecht",
        paragraphs: [
          "Sämtliche Inhalte dieser Website – einschließlich Texte, Grafiken, Logos, Bilder, Icons, Datenbankwerke und Software – sind urheberrechtlich geschützt und stehen im Eigentum der VEROTERA GmbH oder werden mit Erlaubnis der jeweiligen Rechteinhaber verwendet.",
          "Ohne ausdrückliche schriftliche Genehmigung ist es nicht gestattet, Inhalte dieser Website ganz oder teilweise zu vervielfältigen, zu verbreiten, öffentlich zugänglich zu machen, zu bearbeiten oder für kommerzielle Zwecke zu verwenden.",
          "Das Setzen von Hyperlinks auf diese Website ist gestattet, sofern die verlinkten Inhalte nicht aus ihrem Zusammenhang gelöst, verändert oder in einem irreführenden Kontext dargestellt werden.",
        ],
      },
      {
        title: "5. Haftungsausschluss",
        paragraphs: [
          "5.1 Haftung für Inhalte: Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte verantwortlich.",
          "5.2 Haftung für externe Links: Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.",
          "5.3 Haftungsbeschränkung: Die Haftung von VEROTERA für Schäden, die durch die Nutzung oder Nichtnutzung der bereitgestellten Informationen entstehen, ist auf Vorsatz und grobe Fahrlässigkeit beschränkt, soweit keine zwingenden gesetzlichen Regelungen entgegenstehen. Dies gilt nicht für Schäden aus der Verletzung von Leben, Körper oder Gesundheit sowie aus der Verletzung wesentlicher Vertragspflichten.",
        ],
      },
      {
        title: "6. Datenschutz",
        paragraphs: [
          "Informationen zur Erhebung, Verarbeitung und Nutzung personenbezogener Daten entnehmen Sie bitte unserer Datenschutzerklärung, die auf unserer Website abrufbar ist. Die Datenschutzerklärung ist Bestandteil dieser Nutzungsbedingungen.",
        ],
      },
      {
        title: "7. Cookies",
        paragraphs: [
          "Diese Website verwendet Cookies und ähnliche Technologien. Einzelheiten entnehmen Sie bitte unserer Datenschutz- und Cookie-Richtlinie sowie den Einstellungsmöglichkeiten in unserem Cookie-Banner.",
        ],
      },
      {
        title: "8. Änderungen der Nutzungsbedingungen",
        paragraphs: [
          "VEROTERA behält sich vor, diese Nutzungsbedingungen jederzeit mit Wirkung für die Zukunft zu ändern. Die jeweils aktuelle Fassung ist auf dieser Seite abrufbar. Die weitere Nutzung der Website nach Inkrafttreten geänderter Nutzungsbedingungen gilt als Zustimmung zu den geänderten Bedingungen.",
        ],
      },
      {
        title: "9. Anwendbares Recht und Gerichtsstand",
        paragraphs: [
          "Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts (CISG).",
          "Für Verbraucher in der Europäischen Union stellt die EU-Kommission eine Plattform zur Online-Streitbeilegung bereit: https://ec.europa.eu/consumers/odr. Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
        ],
      },
      {
        title: "10. Salvatorische Klausel",
        paragraphs: [
          "Sollten einzelne Bestimmungen dieser Nutzungsbedingungen ganz oder teilweise unwirksam oder undurchführbar sein oder werden, so berührt dies die Gültigkeit der übrigen Bestimmungen nicht.",
        ],
      },
      {
        title: "11. Kontakt",
        paragraphs: [
          "Bei Fragen zu diesen Nutzungsbedingungen wenden Sie sich bitte an: VEROTERA GmbH, Böhlerstraße 1, 40667 Meerbusch. E-Mail: info@verotera.com.",
        ],
      },
    ],
  },
  en: {
    heroEyebrow: "Legal",
    heroTitle: "Terms of Use",
    heroSubtitle: "Rules for accessing and using the VEROTERA website. Last updated: May 2025.",
    s3Title: "3. Permitted Use",
    s3Intro: "This website may be used for lawful purposes only.",
    permittedTitle: "Permitted",
    permitted: [
      "Accessing and reading content for private and professional informational purposes",
      "Sharing links to this website",
      "Contacting us via the contact channels provided",
    ],
    prohibitedTitle: "Not permitted, in particular",
    prohibited: [
      "Automated extraction of content (scraping, crawling) without express written permission",
      "Distributing content from this website without attribution or contrary to copyright law",
      "Any actions that may endanger the infrastructure, security or availability of the website (e.g. DoS attacks, injection of malware)",
      "Using the website for commercial purposes without express permission",
      "Submitting unlawful, offensive or discriminatory content via contact forms or other input fields",
    ],
    sections: [
      {
        title: "1. Scope and Provider",
        paragraphs: [
          "These terms of use govern access to and use of the website of VEROTERA GmbH (hereinafter “VEROTERA” or “we”) and all associated digital offerings.",
          "Provider: VEROTERA GmbH, Böhlerstraße 1, 40667 Meerbusch, Germany. Email: info@verotera.com. Register court: Local Court (Amtsgericht) Neuss, HRB 24862. Represented by Managing Director Aly Mashaly.",
          "By using this website, you agree to these terms of use. If you do not agree with these terms, please do not use this website.",
        ],
      },
      {
        title: "2. Scope of Services and Availability",
        paragraphs: [
          "VEROTERA provides information about its services, products and corporate content via this website. The content serves general informational purposes only.",
          "We endeavor to keep the website permanently available. However, there is no entitlement to constant availability. We reserve the right to restrict, interrupt or discontinue the operation of the website in whole or in part at any time — including without prior notice — in particular for maintenance, security updates or technical malfunctions.",
        ],
      },
      {
        title: "4. Intellectual Property and Copyright",
        paragraphs: [
          "All content on this website — including texts, graphics, logos, images, icons, database works and software — is protected by copyright and is owned by VEROTERA GmbH or used with the permission of the respective rights holders.",
          "Without express written permission, it is not allowed to reproduce, distribute, make publicly available, edit or use content from this website, in whole or in part, for commercial purposes.",
          "Hyperlinks to this website are permitted, provided the linked content is not taken out of context, modified or presented in a misleading context.",
        ],
      },
      {
        title: "5. Disclaimer",
        paragraphs: [
          "5.1 Liability for content: The content of this website has been created with the greatest care. However, we cannot guarantee its accuracy, completeness or timeliness. As a service provider, we are responsible for our own content pursuant to Section 7 (1) TMG.",
          "5.2 Liability for external links: This website contains links to external third-party websites over whose content we have no control. The respective provider or operator is always responsible for the content of linked pages. Upon becoming aware of legal violations, we will remove such links immediately.",
          "5.3 Limitation of liability: VEROTERA's liability for damages arising from the use or non-use of the information provided is limited to intent and gross negligence, unless mandatory statutory provisions apply. This does not apply to damages resulting from injury to life, body or health or from the breach of essential contractual obligations.",
        ],
      },
      {
        title: "6. Data Protection",
        paragraphs: [
          "For information on the collection, processing and use of personal data, please refer to our privacy policy, which is available on our website. The privacy policy forms part of these terms of use.",
        ],
      },
      {
        title: "7. Cookies",
        paragraphs: [
          "This website uses cookies and similar technologies. For details, please refer to our privacy and cookie policy as well as the settings in our cookie banner.",
        ],
      },
      {
        title: "8. Changes to these Terms of Use",
        paragraphs: [
          "VEROTERA reserves the right to change these terms of use at any time with effect for the future. The current version is available on this page. Continued use of the website after amended terms come into effect constitutes acceptance of the amended terms.",
        ],
      },
      {
        title: "9. Applicable Law and Jurisdiction",
        paragraphs: [
          "The law of the Federal Republic of Germany applies, excluding the UN Convention on Contracts for the International Sale of Goods (CISG).",
          "For consumers in the European Union, the EU Commission provides a platform for online dispute resolution: https://ec.europa.eu/consumers/odr. We are neither obligated nor willing to participate in dispute resolution proceedings before a consumer arbitration board.",
        ],
      },
      {
        title: "10. Severability Clause",
        paragraphs: [
          "Should individual provisions of these terms of use be or become wholly or partially invalid or unenforceable, this shall not affect the validity of the remaining provisions.",
        ],
      },
      {
        title: "11. Contact",
        paragraphs: [
          "If you have any questions about these terms of use, please contact: VEROTERA GmbH, Böhlerstraße 1, 40667 Meerbusch, Germany. Email: info@verotera.com.",
        ],
      },
    ],
  },
};

const META: Record<Lang, Metadata> = {
  de: {
    title: "Nutzungsbedingungen - [VEROTERA]",
    description: "Nutzungsbedingungen für die Website der VEROTERA GmbH.",
    keywords: ["Nutzungsbedingungen", "Terms of Use", "Website-Regeln"],
  },
  en: {
    title: "Terms of Use - [VEROTERA]",
    description: "Terms of use for the VEROTERA GmbH website.",
    keywords: ["Terms of Use", "Website rules"],
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

export default async function TermsOfUsePage({
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
          icon={FileCheck}
          title={t.heroTitle}
          subtitle={t.heroSubtitle}
        />

        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6 space-y-8">
            {/* Section 1 + 2 */}
            {t.sections.slice(0, 2).map((s) => (
              <div key={s.title} className="glass-panel p-8 space-y-4 text-sm leading-relaxed text-brand-navy/70">
                <h2 className="font-display text-lg font-bold text-brand-navy">{s.title}</h2>
                {s.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            ))}

            {/* Section 3: Permitted / Prohibited */}
            <div className="glass-panel p-8 space-y-5 text-sm leading-relaxed text-brand-navy/70">
              <h2 className="font-display text-lg font-bold text-brand-navy">{t.s3Title}</h2>
              <p>{t.s3Intro}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-brand-navy mb-2">{t.permittedTitle}</h3>
                  <ul className="space-y-2 list-disc pl-5 marker:text-brand-cyan">
                    {t.permitted.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-brand-navy mb-2">{t.prohibitedTitle}</h3>
                  <ul className="space-y-2 list-disc pl-5 marker:text-brand-cyan">
                    {t.prohibited.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Remaining sections */}
            {t.sections.slice(2).map((s) => (
              <div key={s.title} className="glass-panel p-8 space-y-4 text-sm leading-relaxed text-brand-navy/70">
                <h2 className="font-display text-lg font-bold text-brand-navy">{s.title}</h2>
                {s.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
