import type { Metadata } from "next";
import { FileCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Nutzungsbedingungen - [VEROTERA]",
  description: "Nutzungsbedingungen für die Website der VEROTERA GmbH.",
  keywords: ["Nutzungsbedingungen", "Terms of Use", "Website-Regeln"],
};

const permitted = [
  "Das Abrufen und Lesen von Inhalten zu privaten und beruflichen Informationszwecken",
  "Das Weiterleiten von Links auf diese Website",
  "Die Kontaktaufnahme über bereitgestellte Kontaktwege",
];

const prohibited = [
  "Das automatisierte Auslesen von Inhalten (Scraping, Crawling) ohne ausdrückliche schriftliche Genehmigung",
  "Das Verbreiten von Inhalten dieser Website ohne Quellenangabe oder entgegen dem Urheberrecht",
  "Jegliche Handlungen, die die Infrastruktur, Sicherheit oder Verfügbarkeit der Website gefährden können (z. B. DoS-Angriffe, Einschleusen von Schadsoftware)",
  "Die Nutzung der Website für kommerzielle Zwecke ohne ausdrückliche Genehmigung",
  "Das Einbringen rechtswidriger, beleidigender oder diskriminierender Inhalte über Kontaktformulare oder andere Eingabefelder",
];

const sections: { title: string; paragraphs: string[] }[] = [
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
];

export default function TermsOfUsePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-brand-navy antialiased">
      <Header />

      <main className="flex-grow">
        <PageHero
          eyebrow="Rechtliches"
          icon={FileCheck}
          title="Nutzungsbedingungen"
          subtitle="Regeln für den Zugang zu und die Nutzung der VEROTERA-Website. Stand: Mai 2025."
        />

        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6 space-y-8">
            {/* Section 1 + 2 */}
            {sections.slice(0, 2).map((s) => (
              <div key={s.title} className="glass-panel p-8 space-y-4 text-sm leading-relaxed text-brand-navy/70">
                <h2 className="font-display text-lg font-bold text-brand-navy">{s.title}</h2>
                {s.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            ))}

            {/* Section 3: Permitted / Prohibited */}
            <div className="glass-panel p-8 space-y-5 text-sm leading-relaxed text-brand-navy/70">
              <h2 className="font-display text-lg font-bold text-brand-navy">3. Erlaubte Nutzung</h2>
              <p>Die Nutzung dieser Website ist ausschließlich zu rechtmäßigen Zwecken gestattet.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-brand-navy mb-2">Gestattet ist</h3>
                  <ul className="space-y-2 list-disc pl-5 marker:text-brand-cyan">
                    {permitted.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-brand-navy mb-2">Nicht gestattet ist insbesondere</h3>
                  <ul className="space-y-2 list-disc pl-5 marker:text-brand-cyan">
                    {prohibited.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Remaining sections */}
            {sections.slice(2).map((s) => (
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
