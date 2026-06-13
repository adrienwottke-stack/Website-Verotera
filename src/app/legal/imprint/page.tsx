import type { Metadata } from "next";
import { Scale, Building, Globe, Mail, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Impressum - [VEROTERA]",
  description: "Impressum und rechtliche Angaben der VEROTERA GmbH.",
  keywords: ["Impressum", "Legal", "VEROTERA"],
};

export default function ImprintPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-brand-navy antialiased">
      <Header />

      <main className="flex-grow">
        <PageHero
          eyebrow="Rechtliche Angaben"
          icon={Scale}
          title="Impressum"
          subtitle="Angaben gemäß § 5 TMG (Telemediengesetz)."
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
                    Anschrift
                  </span>
                  <p className="text-brand-navy/80 leading-relaxed">
                    Böhlerstraße 1<br />
                    40667 Meerbusch<br />
                    Deutschland
                  </p>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-brand-navy/50 uppercase tracking-widest block mb-1">
                    Vertretungsberechtigter Geschäftsführer
                  </span>
                  <p className="text-brand-navy/80 font-semibold leading-relaxed">Aly Mashaly</p>
                </div>
              </div>
            </div>

            {/* Registry */}
            <div className="glass-panel p-8 space-y-6">
              <div className="flex items-center gap-3 border-b border-brand-navy/8 pb-3">
                <Globe className="w-5 h-5 text-brand-cyan" />
                <h2 className="font-display text-lg font-bold text-brand-navy">Registereintrag</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div>
                  <span className="text-[10px] font-bold text-brand-navy/50 uppercase tracking-widest block mb-1">
                    Registergericht
                  </span>
                  <p className="text-brand-navy/80 leading-relaxed">Amtsgericht Neuss</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-brand-navy/50 uppercase tracking-widest block mb-1">
                    Registernummer
                  </span>
                  <p className="text-brand-cyan font-mono font-semibold leading-relaxed">HRB 24862</p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="glass-panel p-8 space-y-6">
              <div className="flex items-center gap-3 border-b border-brand-navy/8 pb-3">
                <Mail className="w-5 h-5 text-brand-cyan" />
                <h2 className="font-display text-lg font-bold text-brand-navy">Kontakt</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-brand-cyan shrink-0" />
                  <div>
                    <span className="text-[10px] font-bold text-brand-navy/50 uppercase tracking-widest block">
                      E-Mail
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
                      Telefon
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
                Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
              </h3>
              <p>
                Aly Mashaly<br />
                Böhlerstraße 1<br />
                40667 Meerbusch, Deutschland
              </p>
            </div>

            {/* Disclaimers */}
            <div className="space-y-6 text-xs text-brand-navy/55 leading-relaxed border-t border-brand-navy/8 pt-8">
              <div>
                <h3 className="font-bold text-brand-navy/70 mb-1">Haftung für Inhalte</h3>
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen
                  Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
                  als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                  Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
                  rechtswidrige Tätigkeit hinweisen.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-brand-navy/70 mb-1">Haftung für Links</h3>
                <p>
                  Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir
                  keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
                  Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
                  Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-brand-navy/70 mb-1">Urheberrecht</h3>
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                  unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
                  Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
                  bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
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
