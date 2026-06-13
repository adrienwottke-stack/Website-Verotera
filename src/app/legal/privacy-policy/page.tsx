import type { Metadata } from "next";
import { Shield, Lock, FileText, Cookie, Globe2, UserCheck, ServerCog, Clock, RefreshCw } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Datenschutzerklärung - [VEROTERA]",
  description: "Datenschutzerklärung und Cookie-Richtlinie der VEROTERA GmbH.",
  keywords: ["Datenschutz", "DSGVO", "Cookies", "Cookie-Richtlinie"],
};

const cookieCategories = [
  {
    name: "Technisch notwendige Cookies",
    purpose:
      "Für den Betrieb der Website zwingend erforderlich (z. B. Session-Management, Sicherheit). Sie können nicht deaktiviert werden.",
    basis: "Art. 6 Abs. 1 lit. f DSGVO, § 25 Abs. 2 Nr. 2 TDDDG",
  },
  {
    name: "Analyse- und Statistik-Cookies",
    purpose:
      "Falls Analytics-Tools eingesetzt werden (z. B. Matomo, Plausible), informieren wir Sie separat im Cookie-Banner und holen Ihre Einwilligung ein.",
    basis: "Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG",
  },
  {
    name: "Marketing- und Tracking-Cookies",
    purpose:
      "Falls Werbenetzwerke oder Remarketing-Tools eingesetzt werden, werden diese nur nach ausdrücklicher Einwilligung gesetzt.",
    basis: "Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG",
  },
];

const dataSubjectRights = [
  ["Art. 15 DSGVO", "Auskunftsrecht über die zu Ihrer Person gespeicherten Daten."],
  ["Art. 16 DSGVO", "Recht auf Berichtigung unrichtiger Daten."],
  ["Art. 17 DSGVO", "Recht auf Löschung („Recht auf Vergessenwerden“)."],
  ["Art. 18 DSGVO", "Recht auf Einschränkung der Verarbeitung."],
  ["Art. 20 DSGVO", "Recht auf Datenübertragbarkeit."],
  ["Art. 21 DSGVO", "Widerspruchsrecht gegen Verarbeitungen auf Basis berechtigter Interessen."],
  ["Art. 7 Abs. 3 DSGVO", "Recht auf Widerruf erteilter Einwilligungen (ohne Rückwirkung)."],
  ["Art. 77 DSGVO", "Beschwerderecht bei einer Aufsichtsbehörde."],
];

function Section({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Lock;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="glass-panel p-8 space-y-4 text-sm leading-relaxed text-brand-navy/70">
      <h2 className="font-display text-lg font-bold text-brand-navy flex items-center gap-2.5">
        <Icon className="w-5 h-5 text-brand-cyan shrink-0" />
        {title}
      </h2>
      {children}
    </div>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-brand-navy antialiased">
      <Header />

      <main className="flex-grow">
        <PageHero
          eyebrow="Datenschutz & Cookies"
          icon={Shield}
          title="Datenschutz- und Cookie-Richtlinie"
          subtitle="Diese Richtlinie informiert Sie gemäß DSGVO, wie wir personenbezogene Daten erheben, verarbeiten und schützen. Stand: Mai 2025."
        />

        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6 space-y-8">

            <Section icon={Lock} title="1. Allgemeine Informationen und Verantwortlicher">
              <p>
                Diese Datenschutz- und Cookie-Richtlinie informiert Sie darüber, wie die VEROTERA GmbH
                (nachfolgend „wir“ oder „VEROTERA“) personenbezogene Daten erhebt, verarbeitet und
                schützt, wenn Sie unsere Website besuchen.
              </p>
              <p className="font-mono text-xs p-4 rounded-lg bg-surface-light text-brand-navy/80 border border-brand-navy/8 leading-relaxed">
                VEROTERA GmbH
                <br />
                Böhlerstraße 1, 40667 Meerbusch
                <br />
                Vertreten durch den Geschäftsführer: Aly Mashaly
                <br />
                E-Mail: info@verotera.com · Telefon: +49 173 1878630
                <br />
                Registergericht: Amtsgericht Neuss · HRB 24862
              </p>
            </Section>

            <Section icon={FileText} title="2. Welche Daten wir erheben">
              <h3 className="font-bold text-brand-navy">2.1 Automatisch erfasste Daten (Server-Logs)</h3>
              <p>
                Beim Aufruf unserer Website werden durch den Webserver automatisch Daten erfasst:
                IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene URL, übertragene Datenmenge,
                Referrer-URL, Browser-Typ und -Version sowie das Betriebssystem.
              </p>
              <p className="text-brand-navy/55 text-xs">
                Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an Sicherheit und
                Funktionalität). Speicherdauer: i. d. R. 7–30 Tage, danach automatische Löschung.
              </p>
              <h3 className="font-bold text-brand-navy pt-2">2.2 Aktiv bereitgestellte Daten</h3>
              <p>
                Wenn Sie uns über Kontaktformulare, E-Mail oder andere Wege kontaktieren, verarbeiten
                wir: Name und Vorname, E-Mail-Adresse, Nachrichteninhalt sowie ggf. weitere freiwillig
                angegebene Informationen.
              </p>
              <p className="text-brand-navy/55 text-xs">
                Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen /
                Vertragserfüllung) oder Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der
                Bearbeitung Ihrer Anfrage).
              </p>
            </Section>

            <Section icon={Cookie} title="3. Cookies und Tracking">
              <p>
                Cookies sind kleine Textdateien, die Ihr Browser auf Ihrem Endgerät speichert. Sie
                ermöglichen es, bestimmte Einstellungen oder Informationen zwischen Seitenaufrufen zu
                speichern.
              </p>
              <div className="overflow-x-auto border border-brand-navy/8 rounded-xl mt-2">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-surface-light border-b border-brand-navy/8 text-brand-navy font-semibold uppercase tracking-wider">
                      <th className="p-4">Kategorie</th>
                      <th className="p-4">Zweck</th>
                      <th className="p-4">Rechtsgrundlage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-navy/8">
                    {cookieCategories.map((c) => (
                      <tr key={c.name} className="align-top">
                        <td className="p-4 font-semibold text-brand-navy">{c.name}</td>
                        <td className="p-4 text-brand-navy/65">{c.purpose}</td>
                        <td className="p-4 text-brand-navy/55 text-xs">{c.basis}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-brand-navy/55 text-xs">
                Hinweis: Das TDDDG gilt seit Dezember 2021 in Deutschland und regelt den Einsatz von
                Cookies. Für Marketing-Cookies ist eine vorherige Einwilligung (Opt-in) zwingend
                erforderlich. Sie können Ihre Cookie-Einstellungen jederzeit über Ihren Browser
                anpassen.
              </p>
            </Section>

            <Section icon={Globe2} title="4. Drittanbieter und Datenübermittlung">
              <p>
                Mit unserem Hosting-Anbieter besteht ein Auftragsverarbeitungsvertrag gemäß Art. 28
                DSGVO. Eingebettete Dienste werden – sofern eingesetzt – datenschutzkonform und nur
                nach Einwilligung eingebunden.
              </p>
              <p>
                Falls Daten in Länder außerhalb des Europäischen Wirtschaftsraums (EWR) übermittelt
                werden, erfolgt dies nur auf Basis geeigneter Garantien: EU-Standardvertragsklauseln
                (Art. 46 Abs. 2 lit. c DSGVO), eines Angemessenheitsbeschlusses der EU-Kommission oder
                Ihrer ausdrücklichen Einwilligung (Art. 49 Abs. 1 lit. a DSGVO).
              </p>
            </Section>

            <Section icon={UserCheck} title="5. Ihre Rechte als betroffene Person">
              <p>Nach der DSGVO stehen Ihnen folgende Rechte zu:</p>
              <ul className="space-y-2.5 list-none m-0 p-0">
                {dataSubjectRights.map(([art, desc]) => (
                  <li key={art} className="flex flex-col sm:flex-row sm:gap-3">
                    <span className="font-semibold text-brand-cyan shrink-0 sm:w-40">{art}</span>
                    <span className="text-brand-navy/70">{desc}</span>
                  </li>
                ))}
              </ul>
              <p className="pt-2">
                Zur Ausübung Ihrer Rechte wenden Sie sich an{" "}
                <a href="mailto:info@verotera.com" className="text-brand-cyan hover:underline">
                  info@verotera.com
                </a>
                . Zuständige Aufsichtsbehörde: Landesbeauftragte für Datenschutz und
                Informationsfreiheit Nordrhein-Westfalen (www.ldi.nrw.de).
              </p>
            </Section>

            <Section icon={ServerCog} title="6. Datensicherheit">
              <p>
                Wir setzen technische und organisatorische Maßnahmen (TOMs) ein, um Ihre Daten gegen
                unbefugten Zugriff, Verlust oder Manipulation zu schützen. Die Datenübertragung auf
                unserer Website erfolgt über eine verschlüsselte HTTPS-Verbindung (TLS).
              </p>
            </Section>

            <Section icon={Clock} title="7. Speicherdauer">
              <p>
                Wir speichern personenbezogene Daten nur so lange, wie es für den jeweiligen
                Verarbeitungszweck erforderlich ist oder gesetzliche Aufbewahrungspflichten dies
                verlangen (z. B. handels- und steuerrechtliche Fristen: 6–10 Jahre). Nach Ablauf der
                Speicherdauer werden die Daten routinemäßig gelöscht.
              </p>
            </Section>

            <Section icon={RefreshCw} title="8. Änderungen dieser Richtlinie">
              <p>
                Wir behalten uns vor, diese Datenschutz- und Cookie-Richtlinie bei Bedarf zu
                aktualisieren, z. B. bei Änderungen unserer Website, eingesetzter Dienste oder der
                Rechtslage. Die jeweils aktuelle Version ist auf unserer Website abrufbar.
              </p>
            </Section>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
