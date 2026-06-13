"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, CheckCircle2, Building2, User } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setStatus("success");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const inputClass =
    "w-full pl-11 pr-4 py-3 bg-white rounded-xl border border-brand-navy/15 text-brand-navy text-sm placeholder:text-brand-navy/30 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/20 transition-all";

  return (
    <div className="relative h-full min-h-[460px] rounded-3xl border border-brand-navy/8 bg-white p-8 sm:p-10 shadow-sm flex flex-col justify-center">
      <AnimatePresence mode="wait">
        {status !== "success" ? (
          <motion.form
            key="contact-form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="relative flex flex-col">
                <label htmlFor="cf-name" className="text-xs font-semibold text-brand-navy/60 uppercase tracking-wide mb-2.5">
                  Name *
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-3.5 w-4 h-4 text-brand-navy/30" />
                  <input
                    id="cf-name"
                    type="text"
                    required
                    placeholder="Ihr Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="relative flex flex-col">
                <label htmlFor="cf-email" className="text-xs font-semibold text-brand-navy/60 uppercase tracking-wide mb-2.5">
                  E-Mail *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-3.5 w-4 h-4 text-brand-navy/30" />
                  <input
                    id="cf-email"
                    type="email"
                    required
                    placeholder="sie@unternehmen.de"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={inputClass}
                  />
                </div>
              </div>
            </div>

            <div className="relative flex flex-col">
              <label htmlFor="cf-company" className="text-xs font-semibold text-brand-navy/60 uppercase tracking-wide mb-2.5">
                Unternehmen
              </label>
              <div className="relative">
                <Building2 className="absolute left-4 top-3.5 w-4 h-4 text-brand-navy/30" />
                <input
                  id="cf-company"
                  type="text"
                  placeholder="Ihr Unternehmen"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="relative flex flex-col">
              <label htmlFor="cf-message" className="text-xs font-semibold text-brand-navy/60 uppercase tracking-wide mb-2.5">
                Nachricht *
              </label>
              <textarea
                id="cf-message"
                required
                rows={4}
                placeholder="Beschreiben Sie Ihr Projekt oder Ihr Anliegen…"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-white rounded-xl border border-brand-navy/15 text-brand-navy text-sm placeholder:text-brand-navy/30 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/20 transition-all resize-none"
              />
            </div>

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
          </motion.form>
        ) : (
          <motion.div
            key="success-screen"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center text-center p-6 space-y-6"
          >
            <div className="p-5 rounded-full bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald shadow-[0_0_25px_rgba(16,185,129,0.15)]">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-display text-2xl font-bold text-brand-navy">
              Nachricht erfolgreich gesendet!
            </h3>
            <p className="font-sans text-sm text-brand-navy/60 max-w-md leading-relaxed">
              Vielen Dank für Ihre Kontaktaufnahme. Unser Engineering-Team prüft Ihre Anfrage und
              meldet sich innerhalb von 24 Geschäftsstunden bei Ihnen.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="px-6 py-2.5 rounded-full font-display text-xs font-semibold tracking-wider text-brand-navy/60 hover:text-brand-navy bg-brand-navy/5 hover:bg-brand-navy/10 border border-brand-navy/10 hover:border-brand-navy/20 transition-all"
            >
              Weitere Nachricht senden
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
