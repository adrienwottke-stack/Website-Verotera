import type { Metadata } from "next";
import { MessageSquare, MapPin, Mail, Phone, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us - [VEROTERA]",
  description: "Send us a message and we'll get back to you as soon as possible.",
  keywords: ["Kontakt VEROTERA", "Support", "Office Meerbusch"],
};

const details = [
  {
    icon: MapPin,
    label: "Standort & Hauptsitz",
    value: "VEROTERA GmbH\nBöhlerstraße 1\n40667 Meerbusch, Deutschland",
  },
  {
    icon: Mail,
    label: "E-Mail",
    value: "info@verotera.com",
    href: "mailto:info@verotera.com",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+49 173 1878630",
    href: "tel:+491731878630",
  },
  {
    icon: Clock,
    label: "Erreichbarkeit",
    value: "Mo–Fr · 09:00–17:00 Uhr (MEZ)",
  },
];

export default function ContactsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-brand-navy antialiased">
      <Header />

      <main className="flex-grow">
        <PageHero
          eyebrow="Kontakt aufnehmen"
          icon={MessageSquare}
          title="Sprechen Sie mit unserem Engineering-Team"
          subtitle="Senden Sie uns eine Nachricht und wir melden uns so schnell wie möglich bei Ihnen zurück."
          width="wide"
        />

        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Office details */}
            <div className="lg:col-span-5">
              <p className="font-sans text-brand-cyan text-base font-semibold tracking-wide uppercase mb-4">
                Ihr Ziel. Unsere Technik. Eine Vision.
              </p>
              <p className="font-sans text-base text-brand-navy/60 leading-relaxed mb-10">
                Ob spezialisierte Wide-Bandgap-Module, funktionale Sicherheitstests nach ISO 26262
                oder unsere KI-Entwicklungswerkzeuge – unser Team in Meerbusch steht bereit.
              </p>

              <div className="space-y-5">
                {details.map((d) => (
                  <div key={d.label} className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-surface-light border border-brand-navy/8 text-brand-cyan shrink-0">
                      <d.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-brand-navy/50 uppercase tracking-widest block mb-1">
                        {d.label}
                      </span>
                      {d.href ? (
                        <a
                          href={d.href}
                          className="font-sans text-sm text-brand-navy/80 hover:text-brand-cyan transition-colors"
                        >
                          {d.value}
                        </a>
                      ) : (
                        <span className="font-sans text-sm text-brand-navy/80 whitespace-pre-line leading-relaxed">
                          {d.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
