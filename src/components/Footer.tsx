"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === "/" && href.startsWith("/#")) {
      e.preventDefault();
      const anchorId = href.replace("/", ""); // e.g. '#contact'
      const el = document.querySelector(anchorId);
      if (el) {
        const top = (el as HTMLElement).offsetTop - 90;
        window.scrollTo({
          top,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <footer className="relative bg-[#020617] border-t border-white/5 pt-16 pb-12 overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start mb-16">
        
        {/* Logo and Description Area */}
        <div className="md:col-span-5 flex flex-col items-start text-left">
          <Link
            href="/"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="relative w-36 h-9">
              <Image
                src="https://verotera.com/images/verotera-logo2.png"
                alt="VEROTERA Logo"
                fill
                className="object-contain"
                sizes="144px"
              />
            </div>
          </Link>
          <p className="font-sans text-sm text-slate-400 max-w-sm leading-relaxed mb-6">
            Driving a smarter, cleaner future through advanced semiconductors, AI-driven systems engineering, and sustainable power electronics.
          </p>
          <div className="flex gap-4 text-xs font-semibold text-brand-cyan tracking-wider uppercase">
            <span>HQ · Germany</span>
            <span className="text-slate-600">|</span>
            <span>Global Market Reach</span>
          </div>
        </div>

        {/* Columns Grid */}
        <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 w-full">
          {/* Column 1: Solutions */}
          <div className="flex flex-col text-left">
            <span className="text-xs font-bold text-white uppercase tracking-wider mb-6">
              Solutions
            </span>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/solutions#power-modules"
                  className="font-sans text-sm text-slate-400 hover:text-brand-cyan transition-colors"
                >
                  Power Modules
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions#systems-engineering"
                  className="font-sans text-sm text-slate-400 hover:text-brand-cyan transition-colors"
                >
                  Systems Engineering
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions#ai-solutions"
                  className="font-sans text-sm text-slate-400 hover:text-brand-cyan transition-colors"
                >
                  AI Software Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div className="flex flex-col text-left">
            <span className="text-xs font-bold text-white uppercase tracking-wider mb-6">
              Company
            </span>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="font-sans text-sm text-slate-400 hover:text-brand-cyan transition-colors"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/about#leadership"
                  className="font-sans text-sm text-slate-400 hover:text-brand-cyan transition-colors"
                >
                  Leadership
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  onClick={(e) => handleScroll(e, "/#contact")}
                  className="font-sans text-sm text-slate-400 hover:text-brand-cyan transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="flex flex-col text-left col-span-2 sm:col-span-1">
            <span className="text-xs font-bold text-white uppercase tracking-wider mb-6">
              Legal Info
            </span>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/impressum"
                  className="font-sans text-sm text-slate-400 hover:text-brand-cyan transition-colors"
                >
                  Impressum (Legal Notice)
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="font-sans text-sm text-slate-400 hover:text-brand-cyan transition-colors"
                >
                  Datenschutz (Privacy)
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="font-sans text-sm text-slate-400 hover:text-brand-cyan transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* Footer Bottom Block */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="font-sans text-xs text-slate-500 text-center sm:text-left">
          © 2025 VEROTERA GmbH. All rights reserved. Registered in Germany.
        </span>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-slate-500">
          <Mail className="w-3.5 h-3.5" />
          <span className="text-[10px] font-semibold uppercase tracking-wider">
            info@verotera.com
          </span>
        </div>
      </div>
    </footer>
  );
}
