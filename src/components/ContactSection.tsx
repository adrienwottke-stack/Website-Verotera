"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2, Sparkles, Building2, User, Check } from "lucide-react";
import BrandWatermark from "./BrandWatermark";
import { useLang } from "@/components/LangProvider";
import type { Lang } from "@/lib/i18n";

const COPY: Record<
  Lang,
  {
    eyebrow: string;
    headline: string;
    tagline: string;
    intro: string;
    solutionsEyebrow: string;
    solutions: string[];
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    companyLabel: string;
    companyPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sending: string;
    send: string;
    errorBody: string;
    footnote: React.ReactNode;
    successTitle: string;
    successBody: string;
    successAgain: string;
    locationLabel: string;
    emailInquiryLabel: string;
  }
> = {
  de: {
    eyebrow: "Kontakt aufnehmen",
    headline: "Ihr Projekt. Unsere Expertise. Ein Ziel.",
    tagline:
      "Von der ersten Anforderung bis zur fertigen Lösung – wir sind Ihr Technologiepartner.",
    intro:
      "Wir vernetzen globale Fachkompetenz aus Leistungselektronik, WBG-Technologien und Systemapplikationen – für fundierte Engineering-Entscheidungen mit hoher Sicherheit. Unsere Lösungen verwandeln Komplexität in Klarheit: Sie beschleunigen Innovation und erschließen die kollektive Intelligenz von Engineering-Organisationen.",
    solutionsEyebrow: "Lösungen",
    solutions: [
      "Tiefe WBG-Halbleitertechnologie Expertise",
      "Fortschrittliches Engineering für SiC/GaN-basierte Leistungssysteme",
      "Ausgeprägte Anwendungs- und Systemkompetenz",
      "Zugang zu erfahrenen R&D Experten aus vielfältigen Fachdisziplinen",
      "Neutrale, technologiegetriebene Beratungsrolle",
    ],
    nameLabel: "Name *",
    namePlaceholder: "Ihr Name",
    emailLabel: "E-Mail *",
    emailPlaceholder: "sie@unternehmen.de",
    companyLabel: "Unternehmen",
    companyPlaceholder: "Ihr Unternehmen",
    messageLabel: "Nachricht *",
    messagePlaceholder: "Beschreiben Sie Ihr Projekt oder Ihr Anliegen…",
    sending: "Wird gesendet...",
    send: "Nachricht senden",
    errorBody:
      "Ihre Nachricht konnte gerade nicht übermittelt werden. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt an",
    footnote: (
      <>Antwort i.&nbsp;d.&nbsp;R. innerhalb von 24&nbsp;Geschäftsstunden · kein Verkaufsdruck</>
    ),
    successTitle: "Nachricht erfolgreich gesendet!",
    successBody:
      "Vielen Dank für Ihre Kontaktaufnahme. Unser Engineering-Team wird Ihre Anfrage prüfen und sich innerhalb von 24 Geschäftsstunden bei Ihnen melden.",
    successAgain: "Weitere Nachricht senden",
    locationLabel: "Standort & Hauptsitz",
    emailInquiryLabel: "E-Mail Anfrage",
  },
  en: {
    eyebrow: "Get in Touch",
    headline: "Your Project. Our Expertise. One Goal.",
    tagline:
      "From the first requirement to the finished solution — we are your technology partner.",
    intro:
      "We connect global expertise in power electronics, WBG technologies and system applications — for well-founded engineering decisions with high confidence. Our solutions turn complexity into clarity: they accelerate innovation and unlock the collective intelligence of engineering organizations.",
    solutionsEyebrow: "Solutions",
    solutions: [
      "Deep WBG semiconductor technology expertise",
      "Advanced engineering for SiC/GaN-based power systems",
      "Strong application and system competence",
      "Access to experienced R&D experts across many disciplines",
      "A neutral, technology-driven advisory role",
    ],
    nameLabel: "Name *",
    namePlaceholder: "Your name",
    emailLabel: "Email *",
    emailPlaceholder: "you@company.com",
    companyLabel: "Company",
    companyPlaceholder: "Your company",
    messageLabel: "Message *",
    messagePlaceholder: "Describe your project or inquiry…",
    sending: "Sending...",
    send: "Send message",
    errorBody:
      "Your message could not be delivered right now. Please try again or email us directly at",
    footnote: <>Typically answered within 24&nbsp;business hours · no sales pressure</>,
    successTitle: "Message sent successfully!",
    successBody:
      "Thank you for reaching out. Our engineering team will review your inquiry and get back to you within 24 business hours.",
    successAgain: "Send another message",
    locationLabel: "Location & Headquarters",
    emailInquiryLabel: "Email inquiry",
  },
};

export default function ContactSection() {
  const lang = useLang();
  const t = COPY[lang];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  // "website" is a honeypot only bots fill in; the API discards those quietly.
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, website: honeypot }),
      });
      if (!res.ok) throw new Error(`contact API responded ${res.status}`);
      setStatus("success");
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch {
      // Keep the entered data so the visitor can simply retry.
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-surface-light overflow-hidden">
      {/* Decorative blurred background orb */}
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-brand-cyan/[0.07] rounded-full blur-[110px] pointer-events-none" />
      <BrandWatermark position="top-left" tint="navy" size={460} opacity={0.045} />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        {/* Eyebrow */}
        <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-4 block">
          {t.eyebrow}
        </span>

        {/* Headline */}
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy leading-tight mb-6">
          {t.headline}
        </h2>

        {/* Lead */}
        <p className="font-sans text-base sm:text-lg text-brand-navy/60 leading-relaxed mb-6 max-w-2xl mx-auto">
          {t.tagline}
        </p>

        {/* Detailed Intro Text */}
        <p className="font-sans text-base text-brand-navy/60 leading-relaxed mb-10 max-w-3xl mx-auto">
          {t.intro}
        </p>

        {/* Solutions List */}
        <div className="mb-12 max-w-3xl mx-auto text-left bg-white/50 backdrop-blur-sm border border-brand-navy/8 rounded-2xl p-6 sm:p-8 shadow-sm">
          <span className="text-brand-cyan text-xs font-bold uppercase tracking-widest mb-4 block text-center sm:text-left">
            {t.solutionsEyebrow}
          </span>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none m-0 p-0">
            {t.solutions.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <Check className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                <span className="font-sans text-sm text-brand-navy/70">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Form Card */}
        <div className="max-w-2xl mx-auto mb-16 text-left">
          <div className="relative min-h-[460px] rounded-3xl border border-brand-navy/8 bg-white p-8 sm:p-10 shadow-sm flex flex-col justify-center">

            {status !== "success" ? (
              <motion.form
                key="contact-form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div aria-hidden="true" className="absolute -left-[9999px] top-0 h-px w-px overflow-hidden">
                  <label htmlFor="cs-website">Website</label>
                  <input
                    id="cs-website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name input */}
                  <div className="relative flex flex-col">
                    <label htmlFor="name" className="text-xs font-semibold text-brand-navy/60 uppercase tracking-wide mb-2.5">
                      {t.nameLabel}
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-3.5 w-4 h-4 text-brand-navy/30" />
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder={t.namePlaceholder}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-11 pr-4 py-3 bg-white rounded-xl border border-brand-navy/15 text-brand-navy text-sm placeholder:text-brand-navy/30 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Email input */}
                  <div className="relative flex flex-col">
                    <label htmlFor="email" className="text-xs font-semibold text-brand-navy/60 uppercase tracking-wide mb-2.5">
                      {t.emailLabel}
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-3.5 w-4 h-4 text-brand-navy/30" />
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder={t.emailPlaceholder}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-11 pr-4 py-3 bg-white rounded-xl border border-brand-navy/15 text-brand-navy text-sm placeholder:text-brand-navy/30 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/20 transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Company input */}
                <div className="relative flex flex-col">
                  <label htmlFor="company" className="text-xs font-semibold text-brand-navy/60 uppercase tracking-wide mb-2.5">
                    {t.companyLabel}
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-3.5 w-4 h-4 text-brand-navy/30" />
                    <input
                      id="company"
                      type="text"
                      placeholder={t.companyPlaceholder}
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 bg-white rounded-xl border border-brand-navy/15 text-brand-navy text-sm placeholder:text-brand-navy/30 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/20 transition-all"
                    />
                  </div>
                </div>

                {/* Message input */}
                <div className="relative flex flex-col">
                  <label htmlFor="message" className="text-xs font-semibold text-brand-navy/60 uppercase tracking-wide mb-2.5">
                    {t.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder={t.messagePlaceholder}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white rounded-xl border border-brand-navy/15 text-brand-navy text-sm placeholder:text-brand-navy/30 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/20 transition-all resize-none"
                  />
                </div>

                {status === "error" && (
                  <p
                    role="alert"
                    className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 font-sans text-sm text-red-700"
                  >
                    {t.errorBody}{" "}
                    <a href="mailto:info@verotera.com" className="font-semibold underline underline-offset-2">
                      info@verotera.com
                    </a>
                    .
                  </p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-display text-sm font-semibold tracking-wide text-[#020617] bg-brand-cyan hover:bg-brand-cyan/90 transition-all duration-300 shadow-[0_0_20px_rgba(45,212,191,0.2)] disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none"
                >
                  {status === "submitting" ? (
                    <>
                      <div className="w-5 h-5 rounded-full border-2 border-[#020617] border-t-transparent animate-spin" />
                      <span>{t.sending}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{t.send}</span>
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-brand-navy/45">
                  {t.footnote}
                </p>
              </motion.form>
            ) : (
              <motion.div
                key="success-screen"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-col items-center justify-center text-center p-6 space-y-6"
              >
                {/* Confetti decoration particles inside Success Frame */}
                <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
                  <div className="absolute top-10 left-10 w-2 h-2 rounded-full bg-brand-cyan animate-ping" />
                  <div className="absolute bottom-12 right-12 w-3 h-3 rounded-full bg-brand-emerald animate-ping" />
                  <div className="absolute top-1/2 left-2/3 w-1.5 h-1.5 rounded-full bg-brand-blue animate-ping" />
                </div>

                <div className="p-5 rounded-full bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald shadow-[0_0_25px_rgba(16,185,129,0.15)] mb-2 relative">
                  <CheckCircle2 className="w-10 h-10" />
                  <Sparkles className="absolute -top-1 -right-1 w-5 h-5 text-brand-cyan animate-bounce" />
                </div>

                <h3 className="font-display text-2xl font-bold text-brand-navy">
                  {t.successTitle}
                </h3>

                <p className="font-sans text-sm text-brand-navy/60 max-w-md leading-relaxed">
                  {t.successBody}
                </p>

                <button
                  onClick={() => setStatus("idle")}
                  className="px-6 py-2.5 rounded-full font-display text-xs font-semibold tracking-wider text-brand-navy/60 hover:text-brand-navy bg-brand-navy/5 hover:bg-brand-navy/10 border border-brand-navy/10 hover:border-brand-navy/20 transition-all"
                >
                  {t.successAgain}
                </button>
              </motion.div>
            )}

          </div>
        </div>

        {/* Direct Details at the bottom, centered */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 pt-8 border-t border-brand-navy/8 max-w-3xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-white border border-brand-navy/8 text-brand-cyan shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="text-[10px] font-bold text-brand-navy/50 uppercase tracking-widest block mb-0.5">
                {t.locationLabel}
              </span>
              <span className="font-sans text-sm text-brand-navy/80">
                VEROTERA GmbH · NRW, Germany
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-white border border-brand-navy/8 text-brand-cyan shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="text-[10px] font-bold text-brand-navy/50 uppercase tracking-widest block mb-0.5">
                {t.emailInquiryLabel}
              </span>
              <a href="mailto:info@verotera.com" className="font-sans text-sm text-brand-navy/80 hover:text-brand-cyan transition-colors">
                info@verotera.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
