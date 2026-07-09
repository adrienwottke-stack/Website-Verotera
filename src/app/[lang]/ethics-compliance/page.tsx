import type { Metadata } from "next";
import Link from "next/link";
import {
  ScrollText,
  ShieldCheck,
  Scale,
  Link2,
  Megaphone,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { hasLang, localePath, type Lang } from "@/lib/i18n";

const PRINCIPLE_ICONS = [ScrollText, Scale, Link2];

const COPY: Record<
  Lang,
  {
    heroTitle: string;
    heroSubtitle: string;
    selfTitle: string;
    selfBody: string;
    principles: { title: string; text: string }[];
    commitmentsTitle: string;
    commitments: string[];
    whistleTitle: string;
    whistleBody: string;
    contactLink: string;
  }
> = {
  de: {
    heroTitle: "Ethik & Compliance",
    heroSubtitle:
      "Verantwortungsvolles, integres und regelkonformes Handeln ist die Grundlage des Vertrauens, das unsere Kunden und Partner in VEROTERA setzen.",
    selfTitle: "Unser Selbstverständnis",
    selfBody:
      "Als Deep-Tech-Unternehmen in der Leistungselektronik tragen wir Verantwortung gegenüber Kunden, Mitarbeitenden, Geschäftspartnern und der Gesellschaft. Compliance verstehen wir nicht als Pflichtübung, sondern als integralen Bestandteil unserer Unternehmenskultur. Unsere Grundsätze gelten für alle Mitarbeitenden und Organe von VEROTERA gleichermaßen.",
    principles: [
      {
        title: "Verhaltenskodex",
        text: "Unser Code of Conduct definiert verbindliche Standards für faires, ehrliches und respektvolles Verhalten gegenüber Kunden, Partnern und Kolleginnen und Kollegen.",
      },
      {
        title: "Antikorruption & Integrität",
        text: "Wir lehnen jede Form von Korruption, Bestechung und unlauterem Wettbewerb ab. Interessenkonflikte werden offengelegt und transparent gehandhabt.",
      },
      {
        title: "Lieferketten-Sorgfalt",
        text: "Im Sinne der menschenrechtlichen und ökologischen Sorgfaltspflichten erwarten wir von unseren Lieferanten die Einhaltung anerkannter Sozial- und Umweltstandards.",
      },
    ],
    commitmentsTitle: "Unsere Verpflichtungen",
    commitments: [
      "Einhaltung aller geltenden Gesetze und regulatorischen Anforderungen",
      "Schutz vertraulicher Informationen und geistigen Eigentums",
      "Verantwortungsvoller Umgang mit Ressourcen und Umwelt",
      "Diskriminierungsfreies, sicheres und respektvolles Arbeitsumfeld",
      "Sorgfältige Auswahl und Prüfung von Geschäftspartnern",
    ],
    whistleTitle: "Hinweisgebersystem",
    whistleBody:
      "Verstöße gegen geltendes Recht oder unsere internen Richtlinien können vertraulich gemeldet werden. Wir gehen jedem Hinweis sorgfältig nach und schützen hinweisgebende Personen vor Benachteiligung. Wenden Sie sich dazu bitte an die unten genannte Adresse.",
    contactLink: "Kontakt aufnehmen",
  },
  en: {
    heroTitle: "Ethics & Compliance",
    heroSubtitle:
      "Responsible conduct — with integrity and in compliance with the rules — is the foundation of the trust our customers and partners place in VEROTERA.",
    selfTitle: "How we see ourselves",
    selfBody:
      "As a deep-tech company in power electronics, we bear responsibility toward customers, employees, business partners and society. We see compliance not as a box-ticking exercise but as an integral part of our corporate culture. Our principles apply equally to all VEROTERA employees and corporate bodies.",
    principles: [
      {
        title: "Code of Conduct",
        text: "Our code of conduct defines binding standards for fair, honest and respectful behavior toward customers, partners and colleagues.",
      },
      {
        title: "Anti-Corruption & Integrity",
        text: "We reject every form of corruption, bribery and unfair competition. Conflicts of interest are disclosed and handled transparently.",
      },
      {
        title: "Supply Chain Due Diligence",
        text: "In line with human rights and environmental due diligence obligations, we expect our suppliers to comply with recognized social and environmental standards.",
      },
    ],
    commitmentsTitle: "Our Commitments",
    commitments: [
      "Compliance with all applicable laws and regulatory requirements",
      "Protection of confidential information and intellectual property",
      "Responsible use of resources and the environment",
      "A discrimination-free, safe and respectful work environment",
      "Careful selection and vetting of business partners",
    ],
    whistleTitle: "Whistleblower System",
    whistleBody:
      "Violations of applicable law or our internal guidelines can be reported confidentially. We follow up on every report carefully and protect whistleblowers from retaliation. Please use the address below.",
    contactLink: "Get in touch",
  },
};

const META: Record<Lang, Metadata> = {
  de: {
    title: "Ethik & Compliance | VEROTERA",
    description:
      "Verhaltenskodex, Integrität, Lieferketten-Sorgfalt und Hinweisgebersystem – wie VEROTERA verantwortungsvolles und regelkonformes Handeln sicherstellt.",
    keywords: ["Ethik", "Compliance", "Verhaltenskodex", "Integrität", "Lieferkette"],
  },
  en: {
    title: "Ethics & Compliance | VEROTERA",
    description:
      "Code of conduct, integrity, supply chain due diligence and whistleblower system — how VEROTERA ensures responsible, compliant conduct.",
    keywords: ["Ethics", "Compliance", "Code of Conduct", "Integrity", "Supply chain"],
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

export default async function EthicsCompliancePage({
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
          eyebrow="Corporate"
          icon={ShieldCheck}
          title={t.heroTitle}
          subtitle={t.heroSubtitle}
        />

        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6 space-y-8">

            <div className="glass-panel p-8 space-y-4 text-sm leading-relaxed text-brand-navy/70">
              <h2 className="font-display text-lg font-bold text-brand-navy">{t.selfTitle}</h2>
              <p>
                {t.selfBody}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {t.principles.map((p, i) => {
                const Icon = PRINCIPLE_ICONS[i];
                return (
                  <div key={p.title} className="glass-panel glass-panel-hover p-6">
                    <div className="p-3 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan w-fit mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-base font-bold text-brand-navy mb-2">{p.title}</h3>
                    <p className="text-sm text-brand-navy/60 leading-relaxed">{p.text}</p>
                  </div>
                );
              })}
            </div>

            <div className="glass-panel p-8 space-y-4 text-sm leading-relaxed text-brand-navy/70">
              <h2 className="font-display text-lg font-bold text-brand-navy">{t.commitmentsTitle}</h2>
              <ul className="space-y-3 list-none m-0 p-0">
                {t.commitments.map((c) => (
                  <li key={c} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-panel p-8 space-y-4 text-sm leading-relaxed text-brand-navy/70">
              <h2 className="font-display text-lg font-bold text-brand-navy flex items-center gap-2.5">
                <Megaphone className="w-5 h-5 text-brand-cyan" />
                {t.whistleTitle}
              </h2>
              <p>
                {t.whistleBody}
              </p>
              <p className="font-mono text-xs p-4 rounded-lg bg-surface-light text-brand-navy/80 border border-brand-navy/8 leading-relaxed">
                VEROTERA GmbH · Compliance
                <br />
                E-Mail:{" "}
                <a href="mailto:compliance@verotera.com" className="text-brand-cyan hover:underline">
                  compliance@verotera.com
                </a>
              </p>
              <Link
                href={localePath(lang, "/contacts")}
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-cyan hover:gap-3 transition-all"
              >
                {t.contactLink}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
