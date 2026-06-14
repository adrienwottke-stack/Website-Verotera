"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2, Sparkles, Building2, User } from "lucide-react";
import BrandWatermark from "./BrandWatermark";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("submitting");

    // Simulate backend api response delay
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setStatus("success");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-surface-light overflow-hidden">
      {/* Decorative blurred background orb */}
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-brand-cyan/[0.07] rounded-full blur-[110px] pointer-events-none" />
      <BrandWatermark position="top-left" tint="navy" size={460} opacity={0.045} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">

          {/* Left Column: Claims & Info */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-3 block">
                Kontakt aufnehmen
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-brand-navy mb-6">
                Schildern Sie uns Ihr Ziel.<br />
                Wir bringen die Technik.
              </h2>
              <p className="font-sans text-brand-cyan text-lg font-semibold tracking-wide uppercase mb-8">
                Ihr Ziel. Unsere Technik. Eine Vision.
              </p>
              <p className="font-sans text-base text-brand-navy/60 leading-relaxed mb-12">
                Ob Sie spezialisierte Wide-Bandgap-Module, funktionale Sicherheitstests nach ISO 26262 benötigen oder unsere KI-Entwicklungswerkzeuge erkunden möchten – unser Engineering-Team steht bereit.
              </p>
            </div>

            {/* Direct Details */}
            <div className="space-y-6 pt-6 border-t border-brand-navy/8">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-white border border-brand-navy/8 text-brand-cyan shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-brand-navy/50 uppercase tracking-widest block mb-0.5">
                    Standort & Hauptsitz
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
                <div>
                  <span className="text-[10px] font-bold text-brand-navy/50 uppercase tracking-widest block mb-0.5">
                    E-Mail Anfrage
                  </span>
                  <a href="mailto:info@verotera.com" className="font-sans text-sm text-brand-navy/80 hover:text-brand-cyan transition-colors">
                    info@verotera.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Glassmorphism Interactive Form */}
          <div className="lg:col-span-7">
            <div className="relative h-full min-h-[460px] rounded-3xl border border-brand-navy/8 bg-white p-8 sm:p-10 shadow-sm flex flex-col justify-center">

              {status !== "success" ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name input */}
                      <div className="relative flex flex-col">
                        <label htmlFor="name" className="text-xs font-semibold text-brand-navy/60 uppercase tracking-wide mb-2.5">
                          Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-3.5 w-4 h-4 text-brand-navy/30" />
                          <input
                            id="name"
                            type="text"
                            required
                            placeholder="Ihr Name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full pl-11 pr-4 py-3 bg-white rounded-xl border border-brand-navy/15 text-brand-navy text-sm placeholder:text-brand-navy/30 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/20 transition-all"
                          />
                        </div>
                      </div>

                      {/* Email input */}
                      <div className="relative flex flex-col">
                        <label htmlFor="email" className="text-xs font-semibold text-brand-navy/60 uppercase tracking-wide mb-2.5">
                          E-Mail *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-3.5 w-4 h-4 text-brand-navy/30" />
                          <input
                            id="email"
                            type="email"
                            required
                            placeholder="sie@unternehmen.de"
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
                        Unternehmen
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-4 top-3.5 w-4 h-4 text-brand-navy/30" />
                        <input
                          id="company"
                          type="text"
                          placeholder="Ihr Unternehmen"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full pl-11 pr-4 py-3 bg-white rounded-xl border border-brand-navy/15 text-brand-navy text-sm placeholder:text-brand-navy/30 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/20 transition-all"
                        />
                      </div>
                    </div>

                    {/* Message input */}
                    <div className="relative flex flex-col">
                      <label htmlFor="message" className="text-xs font-semibold text-brand-navy/60 uppercase tracking-wide mb-2.5">
                        Nachricht *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        placeholder="Beschreiben Sie Ihr Projekt oder Ihr Anliegen…"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 bg-white rounded-xl border border-brand-navy/15 text-brand-navy text-sm placeholder:text-brand-navy/30 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/20 transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-display text-sm font-semibold tracking-wide text-[#020617] bg-brand-cyan hover:bg-brand-cyan/90 transition-all duration-300 shadow-[0_0_20px_rgba(45,212,191,0.2)] disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none"
                    >
                      {status === "submitting" ? (
                        <>
                          <div className="w-5 h-5 rounded-full border-2 border-[#020617] border-t-transparent animate-spin" />
                          <span>Wird gesendet...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Nachricht senden</span>
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-brand-navy/45">
                      Antwort i.&nbsp;d.&nbsp;R. innerhalb von 24&nbsp;Geschäftsstunden · kein Verkaufsdruck
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
                      Nachricht erfolgreich gesendet!
                    </h3>

                    <p className="font-sans text-sm text-brand-navy/60 max-w-md leading-relaxed">
                      Vielen Dank für Ihre Kontaktaufnahme. Unser Engineering-Team wird Ihre Anfrage prüfen und sich innerhalb von 24 Geschäftsstunden bei Ihnen melden.
                    </p>

                    <button
                      onClick={() => setStatus("idle")}
                      className="px-6 py-2.5 rounded-full font-display text-xs font-semibold tracking-wider text-brand-navy/60 hover:text-brand-navy bg-brand-navy/5 hover:bg-brand-navy/10 border border-brand-navy/10 hover:border-brand-navy/20 transition-all"
                    >
                      Weitere Nachricht senden
                    </button>
                  </motion.div>
                )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
