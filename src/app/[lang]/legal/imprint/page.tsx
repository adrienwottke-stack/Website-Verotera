import type { Metadata } from "next";
import { Scale, Building, Globe, Mail, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { hasLang, type Lang } from "@/lib/i18n";
import { buildMetadata, type PageMeta } from "@/lib/seo";

const COPY: Record<
  Lang,
  {
    heroEyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    addressLabel: string;
    address: string[];
    mdLabel: string;
    registryTitle: string;
    courtLabel: string;
    court: string;
    numberLabel: string;
    contactTitle: string;
    emailLabel: string;
    phoneLabel: string;
    responsibleTitle: string;
    responsibleAddress: string[];
    liabilityContentTitle: string;
    liabilityContent: string;
    liabilityLinksTitle: string;
    liabilityLinks: string;
    copyrightTitle: string;
    copyright: string;
  }
> = {
  de: {
    heroEyebrow: "Rechtliche Angaben",
    heroTitle: "Impressum",
    heroSubtitle: "Angaben gemäß § 5 TMG (Telemediengesetz).",
    addressLabel: "Anschrift",
    address: ["Böhlerstraße 1", "40667 Meerbusch", "Deutschland"],
    mdLabel: "Vertretungsberechtigter Geschäftsführer",
    registryTitle: "Registereintrag",
    courtLabel: "Registergericht",
    court: "Amtsgericht Neuss",
    numberLabel: "Registernummer",
    contactTitle: "Kontakt",
    emailLabel: "E-Mail",
    phoneLabel: "Telefon",
    responsibleTitle: "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV",
    responsibleAddress: ["Aly Mashaly", "Böhlerstraße 1", "40667 Meerbusch, Deutschland"],
    liabilityContentTitle: "Haftung für Inhalte",
    liabilityContent:
      "Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.",
    liabilityLinksTitle: "Haftung für Links",
    liabilityLinks:
      "Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.",
    copyrightTitle: "Urheberrecht",
    copyright:
      "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.",
  },
  en: {
    heroEyebrow: "Legal Information",
    heroTitle: "Imprint",
    heroSubtitle: "Information in accordance with Section 5 of the German Telemedia Act (TMG).",
    addressLabel: "Address",
    address: ["Böhlerstraße 1", "40667 Meerbusch", "Germany"],
    mdLabel: "Authorized Managing Director",
    registryTitle: "Commercial Register",
    courtLabel: "Register court",
    court: "Local Court (Amtsgericht) Neuss",
    numberLabel: "Registration number",
    contactTitle: "Contact",
    emailLabel: "Email",
    phoneLabel: "Phone",
    responsibleTitle: "Responsible for content pursuant to Section 18 (2) MStV",
    responsibleAddress: ["Aly Mashaly", "Böhlerstraße 1", "40667 Meerbusch, Germany"],
    liabilityContentTitle: "Liability for content",
    liabilityContent:
      "As a service provider, we are responsible for our own content on these pages in accordance with general law pursuant to Section 7 (1) TMG. However, pursuant to Sections 8 to 10 TMG, we are not obligated as a service provider to monitor transmitted or stored third-party information or to investigate circumstances indicating unlawful activity.",
    liabilityLinksTitle: "Liability for links",
    liabilityLinks:
      "Our website contains links to external third-party websites over whose content we have no control. We therefore cannot accept any liability for this third-party content. The respective provider or operator of the linked pages is always responsible for their content.",
    copyrightTitle: "Copyright",
    copyright:
      "The content and works created by the site operators on these pages are subject to German copyright law. Reproduction, editing, distribution and any kind of use beyond the limits of copyright law require the written consent of the respective author or creator.",
  },
};

const META: Record<Lang, PageMeta> = {
  de: {
    title: "Impressum - [VEROTERA]",
    description: "Impressum und rechtliche Angaben der VEROTERA GmbH.",
    keywords: ["Impressum", "Legal", "VEROTERA"],
  },
  en: {
    title: "Imprint - [VEROTERA]",
    description: "Imprint and legal information of VEROTERA GmbH.",
    keywords: ["Imprint", "Legal", "VEROTERA"],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const l = hasLang(lang) ? lang : "de";
  return buildMetadata(l, "/legal/imprint", META[l]);
}

export default async function ImprintPage({
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
          icon={Scale}
          title={t.heroTitle}
          subtitle={t.heroSubtitle}
        />

        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6 space-y-8">

            {/* Company */}
            <div className="glass-panel p-8 space-y-6">
              <div className="flex items-center gap-3 border-b border-brand-navy/8 pb-3">
                <Building className="w-5 h-5 text-brand-cyan" />
                <h2 className="font-display text-lg font-bold text-brand-navy">VEROTERA GmbH</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div>
                  <span className="text-[10px] font-bold text-brand-navy/50 uppercase tracking-widest block mb-1">
                    {t.addressLabel}
                  </span>
                  <p className="text-brand-navy/80 leading-relaxed">
                    {t.address[0]}<br />
                    {t.address[1]}<br />
                    {t.address[2]}
                  </p>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-brand-navy/50 uppercase tracking-widest block mb-1">
                    {t.mdLabel}
                  </span>
                  <p className="text-brand-navy/80 font-semibold leading-relaxed">Aly Mashaly</p>
                </div>
              </div>
            </div>

            {/* Registry */}
            <div className="glass-panel p-8 space-y-6">
              <div className="flex items-center gap-3 border-b border-brand-navy/8 pb-3">
                <Globe className="w-5 h-5 text-brand-cyan" />
                <h2 className="font-display text-lg font-bold text-brand-navy">{t.registryTitle}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div>
                  <span className="text-[10px] font-bold text-brand-navy/50 uppercase tracking-widest block mb-1">
                    {t.courtLabel}
                  </span>
                  <p className="text-brand-navy/80 leading-relaxed">{t.court}</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-brand-navy/50 uppercase tracking-widest block mb-1">
                    {t.numberLabel}
                  </span>
                  <p className="text-brand-cyan font-mono font-semibold leading-relaxed">HRB 24862</p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="glass-panel p-8 space-y-6">
              <div className="flex items-center gap-3 border-b border-brand-navy/8 pb-3">
                <Mail className="w-5 h-5 text-brand-cyan" />
                <h2 className="font-display text-lg font-bold text-brand-navy">{t.contactTitle}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-brand-cyan shrink-0" />
                  <div>
                    <span className="text-[10px] font-bold text-brand-navy/50 uppercase tracking-widest block">
                      {t.emailLabel}
                    </span>
                    <a href="mailto:info@verotera.com" className="text-brand-navy/80 hover:text-brand-cyan transition-colors">
                      info@verotera.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-brand-cyan shrink-0" />
                  <div>
                    <span className="text-[10px] font-bold text-brand-navy/50 uppercase tracking-widest block">
                      {t.phoneLabel}
                    </span>
                    <a href="tel:+491731878630" className="text-brand-navy/80 hover:text-brand-cyan transition-colors">
                      +49 173 1878630
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Responsibility */}
            <div className="glass-panel p-8 space-y-3 text-sm leading-relaxed text-brand-navy/70">
              <h3 className="font-display text-base font-bold text-brand-navy">
                {t.responsibleTitle}
              </h3>
              <p>
                {t.responsibleAddress[0]}<br />
                {t.responsibleAddress[1]}<br />
                {t.responsibleAddress[2]}
              </p>
            </div>

            {/* Disclaimers */}
            <div className="space-y-6 text-xs text-brand-navy/55 leading-relaxed border-t border-brand-navy/8 pt-8">
              <div>
                <h3 className="font-bold text-brand-navy/70 mb-1">{t.liabilityContentTitle}</h3>
                <p>
                  {t.liabilityContent}
                </p>
              </div>
              <div>
                <h3 className="font-bold text-brand-navy/70 mb-1">{t.liabilityLinksTitle}</h3>
                <p>
                  {t.liabilityLinks}
                </p>
              </div>
              <div>
                <h3 className="font-bold text-brand-navy/70 mb-1">{t.copyrightTitle}</h3>
                <p>
                  {t.copyright}
                </p>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
