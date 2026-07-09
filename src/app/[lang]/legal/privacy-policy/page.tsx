import type { Metadata } from "next";
import { Shield, Lock, FileText, Cookie, Globe2, UserCheck, ServerCog, Clock, RefreshCw } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { hasLang, type Lang } from "@/lib/i18n";

const COPY: Record<
  Lang,
  {
    heroEyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    s1Title: string;
    s1Body: string;
    s1BoxLines: string[];
    s2Title: string;
    s2LogsTitle: string;
    s2LogsBody: string;
    s2LogsNote: string;
    s2ActiveTitle: string;
    s2ActiveBody: string;
    s2ActiveNote: string;
    s3Title: string;
    s3Body: string;
    s3Cols: [string, string, string];
    cookieCategories: { name: string; purpose: string; basis: string }[];
    s3Note: string;
    s4Title: string;
    s4Body1: string;
    s4Body2: string;
    s5Title: string;
    s5Intro: string;
    rights: [string, string][];
    s5Outro1: string;
    s5Outro2: string;
    s6Title: string;
    s6Body: string;
    s7Title: string;
    s7Body: string;
    s8Title: string;
    s8Body: string;
  }
> = {
  de: {
    heroEyebrow: "Datenschutz & Cookies",
    heroTitle: "Datenschutz- und Cookie-Richtlinie",
    heroSubtitle:
      "Diese Richtlinie informiert Sie gemäß DSGVO, wie wir personenbezogene Daten erheben, verarbeiten und schützen. Stand: Mai 2025.",
    s1Title: "1. Allgemeine Informationen und Verantwortlicher",
    s1Body:
      "Diese Datenschutz- und Cookie-Richtlinie informiert Sie darüber, wie die VEROTERA GmbH (nachfolgend „wir“ oder „VEROTERA“) personenbezogene Daten erhebt, verarbeitet und schützt, wenn Sie unsere Website besuchen.",
    s1BoxLines: [
      "VEROTERA GmbH",
      "Böhlerstraße 1, 40667 Meerbusch",
      "Vertreten durch den Geschäftsführer: Aly Mashaly",
      "E-Mail: info@verotera.com · Telefon: +49 173 1878630",
      "Registergericht: Amtsgericht Neuss · HRB 24862",
    ],
    s2Title: "2. Welche Daten wir erheben",
    s2LogsTitle: "2.1 Automatisch erfasste Daten (Server-Logs)",
    s2LogsBody:
      "Beim Aufruf unserer Website werden durch den Webserver automatisch Daten erfasst: IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene URL, übertragene Datenmenge, Referrer-URL, Browser-Typ und -Version sowie das Betriebssystem.",
    s2LogsNote:
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an Sicherheit und Funktionalität). Speicherdauer: i. d. R. 7–30 Tage, danach automatische Löschung.",
    s2ActiveTitle: "2.2 Aktiv bereitgestellte Daten",
    s2ActiveBody:
      "Wenn Sie uns über Kontaktformulare, E-Mail oder andere Wege kontaktieren, verarbeiten wir: Name und Vorname, E-Mail-Adresse, Nachrichteninhalt sowie ggf. weitere freiwillig angegebene Informationen.",
    s2ActiveNote:
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen / Vertragserfüllung) oder Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bearbeitung Ihrer Anfrage).",
    s3Title: "3. Cookies und Tracking",
    s3Body:
      "Cookies sind kleine Textdateien, die Ihr Browser auf Ihrem Endgerät speichert. Sie ermöglichen es, bestimmte Einstellungen oder Informationen zwischen Seitenaufrufen zu speichern.",
    s3Cols: ["Kategorie", "Zweck", "Rechtsgrundlage"],
    cookieCategories: [
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
    ],
    s3Note:
      "Hinweis: Das TDDDG gilt seit Dezember 2021 in Deutschland und regelt den Einsatz von Cookies. Für Marketing-Cookies ist eine vorherige Einwilligung (Opt-in) zwingend erforderlich. Sie können Ihre Cookie-Einstellungen jederzeit über Ihren Browser anpassen.",
    s4Title: "4. Drittanbieter und Datenübermittlung",
    s4Body1:
      "Mit unserem Hosting-Anbieter besteht ein Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO. Eingebettete Dienste werden – sofern eingesetzt – datenschutzkonform und nur nach Einwilligung eingebunden.",
    s4Body2:
      "Falls Daten in Länder außerhalb des Europäischen Wirtschaftsraums (EWR) übermittelt werden, erfolgt dies nur auf Basis geeigneter Garantien: EU-Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO), eines Angemessenheitsbeschlusses der EU-Kommission oder Ihrer ausdrücklichen Einwilligung (Art. 49 Abs. 1 lit. a DSGVO).",
    s5Title: "5. Ihre Rechte als betroffene Person",
    s5Intro: "Nach der DSGVO stehen Ihnen folgende Rechte zu:",
    rights: [
      ["Art. 15 DSGVO", "Auskunftsrecht über die zu Ihrer Person gespeicherten Daten."],
      ["Art. 16 DSGVO", "Recht auf Berichtigung unrichtiger Daten."],
      ["Art. 17 DSGVO", "Recht auf Löschung („Recht auf Vergessenwerden“)."],
      ["Art. 18 DSGVO", "Recht auf Einschränkung der Verarbeitung."],
      ["Art. 20 DSGVO", "Recht auf Datenübertragbarkeit."],
      ["Art. 21 DSGVO", "Widerspruchsrecht gegen Verarbeitungen auf Basis berechtigter Interessen."],
      ["Art. 7 Abs. 3 DSGVO", "Recht auf Widerruf erteilter Einwilligungen (ohne Rückwirkung)."],
      ["Art. 77 DSGVO", "Beschwerderecht bei einer Aufsichtsbehörde."],
    ],
    s5Outro1: "Zur Ausübung Ihrer Rechte wenden Sie sich an",
    s5Outro2:
      ". Zuständige Aufsichtsbehörde: Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (www.ldi.nrw.de).",
    s6Title: "6. Datensicherheit",
    s6Body:
      "Wir setzen technische und organisatorische Maßnahmen (TOMs) ein, um Ihre Daten gegen unbefugten Zugriff, Verlust oder Manipulation zu schützen. Die Datenübertragung auf unserer Website erfolgt über eine verschlüsselte HTTPS-Verbindung (TLS).",
    s7Title: "7. Speicherdauer",
    s7Body:
      "Wir speichern personenbezogene Daten nur so lange, wie es für den jeweiligen Verarbeitungszweck erforderlich ist oder gesetzliche Aufbewahrungspflichten dies verlangen (z. B. handels- und steuerrechtliche Fristen: 6–10 Jahre). Nach Ablauf der Speicherdauer werden die Daten routinemäßig gelöscht.",
    s8Title: "8. Änderungen dieser Richtlinie",
    s8Body:
      "Wir behalten uns vor, diese Datenschutz- und Cookie-Richtlinie bei Bedarf zu aktualisieren, z. B. bei Änderungen unserer Website, eingesetzter Dienste oder der Rechtslage. Die jeweils aktuelle Version ist auf unserer Website abrufbar.",
  },
  en: {
    heroEyebrow: "Privacy & Cookies",
    heroTitle: "Privacy and Cookie Policy",
    heroSubtitle:
      "In accordance with the GDPR, this policy explains how we collect, process and protect personal data. Last updated: May 2025.",
    s1Title: "1. General Information and Controller",
    s1Body:
      "This privacy and cookie policy explains how VEROTERA GmbH (hereinafter “we” or “VEROTERA”) collects, processes and protects personal data when you visit our website.",
    s1BoxLines: [
      "VEROTERA GmbH",
      "Böhlerstraße 1, 40667 Meerbusch, Germany",
      "Represented by the Managing Director: Aly Mashaly",
      "Email: info@verotera.com · Phone: +49 173 1878630",
      "Register court: Local Court (Amtsgericht) Neuss · HRB 24862",
    ],
    s2Title: "2. What Data We Collect",
    s2LogsTitle: "2.1 Automatically collected data (server logs)",
    s2LogsBody:
      "When you access our website, the web server automatically records data: IP address, date and time of access, requested URL, amount of data transferred, referrer URL, browser type and version, and the operating system.",
    s2LogsNote:
      "Legal basis: Art. 6 (1) (f) GDPR (legitimate interest in security and functionality). Retention period: usually 7–30 days, then automatic deletion.",
    s2ActiveTitle: "2.2 Data you actively provide",
    s2ActiveBody:
      "If you contact us via contact forms, email or other channels, we process: first and last name, email address, message content and any additional information provided voluntarily.",
    s2ActiveNote:
      "Legal basis: Art. 6 (1) (b) GDPR (pre-contractual measures / contract performance) or Art. 6 (1) (f) GDPR (legitimate interest in handling your inquiry).",
    s3Title: "3. Cookies and Tracking",
    s3Body:
      "Cookies are small text files that your browser stores on your device. They make it possible to retain certain settings or information between page visits.",
    s3Cols: ["Category", "Purpose", "Legal basis"],
    cookieCategories: [
      {
        name: "Strictly necessary cookies",
        purpose:
          "Essential for operating the website (e.g. session management, security). They cannot be disabled.",
        basis: "Art. 6 (1) (f) GDPR, Section 25 (2) no. 2 TDDDG",
      },
      {
        name: "Analytics and statistics cookies",
        purpose:
          "If analytics tools are used (e.g. Matomo, Plausible), we inform you separately in the cookie banner and obtain your consent.",
        basis: "Art. 6 (1) (a) GDPR, Section 25 (1) TDDDG",
      },
      {
        name: "Marketing and tracking cookies",
        purpose:
          "If advertising networks or remarketing tools are used, they are only set with your explicit consent.",
        basis: "Art. 6 (1) (a) GDPR, Section 25 (1) TDDDG",
      },
    ],
    s3Note:
      "Note: the TDDDG has applied in Germany since December 2021 and governs the use of cookies. Prior consent (opt-in) is mandatory for marketing cookies. You can adjust your cookie settings at any time in your browser.",
    s4Title: "4. Third Parties and Data Transfers",
    s4Body1:
      "A data processing agreement pursuant to Art. 28 GDPR is in place with our hosting provider. Embedded services — where used — are integrated in a privacy-compliant manner and only with consent.",
    s4Body2:
      "If data is transferred to countries outside the European Economic Area (EEA), this only takes place on the basis of appropriate safeguards: EU standard contractual clauses (Art. 46 (2) (c) GDPR), an adequacy decision of the EU Commission, or your explicit consent (Art. 49 (1) (a) GDPR).",
    s5Title: "5. Your Rights as a Data Subject",
    s5Intro: "Under the GDPR, you have the following rights:",
    rights: [
      ["Art. 15 GDPR", "Right of access to the data stored about you."],
      ["Art. 16 GDPR", "Right to rectification of inaccurate data."],
      ["Art. 17 GDPR", "Right to erasure (“right to be forgotten”)."],
      ["Art. 18 GDPR", "Right to restriction of processing."],
      ["Art. 20 GDPR", "Right to data portability."],
      ["Art. 21 GDPR", "Right to object to processing based on legitimate interests."],
      ["Art. 7 (3) GDPR", "Right to withdraw consent (without retroactive effect)."],
      ["Art. 77 GDPR", "Right to lodge a complaint with a supervisory authority."],
    ],
    s5Outro1: "To exercise your rights, contact",
    s5Outro2:
      ". Competent supervisory authority: the State Commissioner for Data Protection and Freedom of Information of North Rhine-Westphalia (www.ldi.nrw.de).",
    s6Title: "6. Data Security",
    s6Body:
      "We use technical and organizational measures (TOMs) to protect your data against unauthorized access, loss or manipulation. Data transmission on our website is encrypted via HTTPS (TLS).",
    s7Title: "7. Retention Period",
    s7Body:
      "We store personal data only as long as necessary for the respective processing purpose or as required by statutory retention obligations (e.g. commercial and tax law periods: 6–10 years). After the retention period expires, the data is routinely deleted.",
    s8Title: "8. Changes to this Policy",
    s8Body:
      "We reserve the right to update this privacy and cookie policy as needed, e.g. when our website, the services used or the legal situation change. The current version is available on our website.",
  },
};

const META: Record<Lang, Metadata> = {
  de: {
    title: "Datenschutzerklärung - [VEROTERA]",
    description: "Datenschutzerklärung und Cookie-Richtlinie der VEROTERA GmbH.",
    keywords: ["Datenschutz", "DSGVO", "Cookies", "Cookie-Richtlinie"],
  },
  en: {
    title: "Privacy Policy - [VEROTERA]",
    description: "Privacy and cookie policy of VEROTERA GmbH.",
    keywords: ["Privacy", "GDPR", "Cookies", "Cookie policy"],
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

export default async function PrivacyPolicyPage({
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
          icon={Shield}
          title={t.heroTitle}
          subtitle={t.heroSubtitle}
        />

        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6 space-y-8">

            <Section icon={Lock} title={t.s1Title}>
              <p>
                {t.s1Body}
              </p>
              <p className="font-mono text-xs p-4 rounded-lg bg-surface-light text-brand-navy/80 border border-brand-navy/8 leading-relaxed">
                {t.s1BoxLines.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < t.s1BoxLines.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </Section>

            <Section icon={FileText} title={t.s2Title}>
              <h3 className="font-bold text-brand-navy">{t.s2LogsTitle}</h3>
              <p>
                {t.s2LogsBody}
              </p>
              <p className="text-brand-navy/55 text-xs">
                {t.s2LogsNote}
              </p>
              <h3 className="font-bold text-brand-navy pt-2">{t.s2ActiveTitle}</h3>
              <p>
                {t.s2ActiveBody}
              </p>
              <p className="text-brand-navy/55 text-xs">
                {t.s2ActiveNote}
              </p>
            </Section>

            <Section icon={Cookie} title={t.s3Title}>
              <p>
                {t.s3Body}
              </p>
              <div className="overflow-x-auto border border-brand-navy/8 rounded-xl mt-2">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-surface-light border-b border-brand-navy/8 text-brand-navy font-semibold uppercase tracking-wider">
                      <th className="p-4">{t.s3Cols[0]}</th>
                      <th className="p-4">{t.s3Cols[1]}</th>
                      <th className="p-4">{t.s3Cols[2]}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-navy/8">
                    {t.cookieCategories.map((c) => (
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
                {t.s3Note}
              </p>
            </Section>

            <Section icon={Globe2} title={t.s4Title}>
              <p>
                {t.s4Body1}
              </p>
              <p>
                {t.s4Body2}
              </p>
            </Section>

            <Section icon={UserCheck} title={t.s5Title}>
              <p>{t.s5Intro}</p>
              <ul className="space-y-2.5 list-none m-0 p-0">
                {t.rights.map(([art, desc]) => (
                  <li key={art} className="flex flex-col sm:flex-row sm:gap-3">
                    <span className="font-semibold text-brand-cyan shrink-0 sm:w-40">{art}</span>
                    <span className="text-brand-navy/70">{desc}</span>
                  </li>
                ))}
              </ul>
              <p className="pt-2">
                {t.s5Outro1}{" "}
                <a href="mailto:info@verotera.com" className="text-brand-cyan hover:underline">
                  info@verotera.com
                </a>
                {t.s5Outro2}
              </p>
            </Section>

            <Section icon={ServerCog} title={t.s6Title}>
              <p>
                {t.s6Body}
              </p>
            </Section>

            <Section icon={Clock} title={t.s7Title}>
              <p>
                {t.s7Body}
              </p>
            </Section>

            <Section icon={RefreshCw} title={t.s8Title}>
              <p>
                {t.s8Body}
              </p>
            </Section>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
