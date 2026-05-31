"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2, Sparkles, Building2, User } from "lucide-react";

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
    <section id="contact" className="relative py-24 sm:py-32 bg-[#020617] overflow-hidden">
      {/* Decorative blurred background orb */}
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-brand-cyan/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Claims & Info */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-3 block">
                Connect with Us
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
                Tell us your goal.<br />
                We'll bring the tech.
              </h2>
              <p className="font-sans text-brand-cyan text-lg font-semibold tracking-wide uppercase mb-8">
                Your goal. Our tech. One vision.
              </p>
              <p className="font-sans text-base text-slate-300 leading-relaxed mb-12">
                Whether you need specialized wide-bandgap modules, functional safety HIL testing for ISO 26262, or wish to explore our AI layout tools - our engineering team is ready to assist.
              </p>
            </div>

            {/* Direct Details */}
            <div className="space-y-6 pt-6 border-t border-white/5">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-brand-navy-light border border-white/5 text-brand-cyan shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">
                    Location & Headquarters
                  </span>
                  <span className="font-sans text-sm text-slate-200">
                    VEROTERA GmbH · NRW, Germany
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-brand-navy-light border border-white/5 text-brand-cyan shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">
                    Email Inquiry
                  </span>
                  <a href="mailto:info@verotera.com" className="font-sans text-sm text-slate-200 hover:text-brand-cyan transition-colors">
                    info@verotera.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Glassmorphism Interactive Form */}
          <div className="lg:col-span-7">
            <div className="relative h-full min-h-[460px] rounded-3xl border border-white/5 bg-brand-navy/60 backdrop-blur-md p-8 sm:p-10 shadow-2xl flex flex-col justify-center">
              
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
                      {/* Name input */}
                      <div className="relative flex flex-col">
                        <label htmlFor="name" className="text-xs font-semibold text-slate-300 uppercase tracking-wide mb-2.5">
                          Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-3.5 w-4 h-4 text-slate-500" />
                          <input
                            id="name"
                            type="text"
                            required
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full pl-11 pr-4 py-3 bg-[#030816] rounded-xl border border-white/5 text-slate-200 text-sm placeholder:text-slate-600 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/20 transition-all"
                          />
                        </div>
                      </div>

                      {/* Email input */}
                      <div className="relative flex flex-col">
                        <label htmlFor="email" className="text-xs font-semibold text-slate-300 uppercase tracking-wide mb-2.5">
                          Email *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-3.5 w-4 h-4 text-slate-500" />
                          <input
                            id="email"
                            type="email"
                            required
                            placeholder="you@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full pl-11 pr-4 py-3 bg-[#030816] rounded-xl border border-white/5 text-slate-200 text-sm placeholder:text-slate-600 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/20 transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Company input */}
                    <div className="relative flex flex-col">
                      <label htmlFor="company" className="text-xs font-semibold text-slate-300 uppercase tracking-wide mb-2.5">
                        Company
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-4 top-3.5 w-4 h-4 text-slate-500" />
                        <input
                          id="company"
                          type="text"
                          placeholder="Your Organization"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full pl-11 pr-4 py-3 bg-[#030816] rounded-xl border border-white/5 text-slate-200 text-sm placeholder:text-slate-600 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/20 transition-all"
                        />
                      </div>
                    </div>

                    {/* Message input */}
                    <div className="relative flex flex-col">
                      <label htmlFor="message" className="text-xs font-semibold text-slate-300 uppercase tracking-wide mb-2.5">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        placeholder="Tell us about your power electronics requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 bg-[#030816] rounded-xl border border-white/5 text-slate-200 text-sm placeholder:text-slate-600 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/20 transition-all resize-none"
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
                          <span>Establishing Connection...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
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
                    
                    <h3 className="font-display text-2xl font-bold text-white">
                      Message Sent Successfully!
                    </h3>
                    
                    <p className="font-sans text-sm text-slate-300 max-w-md leading-relaxed">
                      Thank you for contacting **VEROTERA**. Our engineering team will review your application specifications and get in touch with you within 24 business hours.
                    </p>

                    <button
                      onClick={() => setStatus("idle")}
                      className="px-6 py-2.5 rounded-full font-display text-xs font-semibold tracking-wider text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
