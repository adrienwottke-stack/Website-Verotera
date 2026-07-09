"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/components/LangProvider";
import { localePath, type Lang } from "@/lib/i18n";

type NavLeaf = { label: string; href: string };
type NavItem = { label: string; href?: string; children?: NavLeaf[] };

const NAV: Record<Lang, NavItem[]> = {
  de: [
    {
      label: "Lösungen",
      children: [
        { label: "WBG-Leistungsmodule", href: "/solutions/wbg-power-modules" },
        { label: "Stromverteilereinheit (Rack PDU)", href: "/solutions/rack-power-distribution" },
        { label: "Agentische KI im Systems Engineering", href: "/solutions/agentic-ai-engineering" },
        { label: "Spotlight: Galliumnitrid (GaN)", href: "/solutions/technology-spotlight-gallium-nitride" },
        { label: "Spotlight: Siliziumkarbid (SiC)", href: "/solutions/technology-spotlight-silicium-carbide" },
      ],
    },
    {
      label: "Applikationen",
      children: [
        { label: "WBG Leistungsmodule & Technologie", href: "/solutions/wbg-power-modules" },
        { label: "AI Data Center", href: "/solutions/rack-power-distribution" },
        { label: "Automotive & E-Mobilität", href: "/applications/automotive-emobility" },
        { label: "Grüner Wasserstoff", href: "/applications/hydrogen" },
      ],
    },
    {
      label: "Support",
      children: [
        { label: "Technische Unterstützung", href: "/contacts" },
        { label: "Kontakte", href: "/contacts" },
      ],
    },
    {
      label: "Über uns",
      children: [
        { label: "Über VEROTERA", href: "/about" },
        { label: "Company Contacts", href: "/contacts" },
        { label: "Führungsteam", href: "/about#leadership" },
        { label: "Ethik & Compliance", href: "/ethics-compliance" },
      ],
    },
    { label: "News", href: "/news" },
    { label: "Karriere", href: "/careers" },
    { label: "Kontakt", href: "/contacts" },
  ],
  en: [
    {
      label: "Solutions",
      children: [
        { label: "WBG Power Modules", href: "/solutions/wbg-power-modules" },
        { label: "Power Distribution Unit (Rack PDU)", href: "/solutions/rack-power-distribution" },
        { label: "Agentic AI in Systems Engineering", href: "/solutions/agentic-ai-engineering" },
        { label: "Spotlight: Gallium Nitride (GaN)", href: "/solutions/technology-spotlight-gallium-nitride" },
        { label: "Spotlight: Silicon Carbide (SiC)", href: "/solutions/technology-spotlight-silicium-carbide" },
      ],
    },
    {
      label: "Applications",
      children: [
        { label: "WBG Power Modules & Technology", href: "/solutions/wbg-power-modules" },
        { label: "AI Data Center", href: "/solutions/rack-power-distribution" },
        { label: "Automotive & E-Mobility", href: "/applications/automotive-emobility" },
        { label: "Green Hydrogen", href: "/applications/hydrogen" },
      ],
    },
    {
      label: "Support",
      children: [
        { label: "Technical Support", href: "/contacts" },
        { label: "Contacts", href: "/contacts" },
      ],
    },
    {
      label: "About us",
      children: [
        { label: "About VEROTERA", href: "/about" },
        { label: "Company Contacts", href: "/contacts" },
        { label: "Leadership Team", href: "/about#leadership" },
        { label: "Ethics & Compliance", href: "/ethics-compliance" },
      ],
    },
    { label: "News", href: "/news" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contacts" },
  ],
};

const UI: Record<
  Lang,
  { mainNav: string; mobileNav: string; menuOpen: string; menuClose: string; cta: string; login: string }
> = {
  de: {
    mainNav: "Hauptnavigation",
    mobileNav: "Mobile Navigation",
    menuOpen: "Menü öffnen",
    menuClose: "Menü schließen",
    cta: "Kontakt aufnehmen",
    login: "My VEROTERA Login",
  },
  en: {
    mainNav: "Main navigation",
    mobileNav: "Mobile navigation",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    cta: "Get in Touch",
    login: "My VEROTERA Login",
  },
};

function LangSwitch({
  lang,
  pathname,
  onNavigate,
}: {
  lang: Lang;
  pathname: string;
  onNavigate?: () => void;
}) {
  // Path without the /en prefix — base for both language variants
  const basePath = pathname === "/en" ? "/" : pathname.startsWith("/en/") ? pathname.slice(3) : pathname;

  const itemClass = (active: boolean) =>
    active
      ? "text-brand-navy font-semibold cursor-default"
      : "text-brand-navy/50 hover:text-brand-cyan transition-colors";

  return (
    <span className="text-sm font-medium select-none flex items-center gap-1.5">
      <Link
        href={basePath}
        aria-current={lang === "de" ? "true" : undefined}
        onClick={onNavigate}
        className={itemClass(lang === "de")}
      >
        DE
      </Link>
      <span className="text-brand-navy/30">|</span>
      <Link
        href={localePath("en", basePath)}
        aria-current={lang === "en" ? "true" : undefined}
        onClick={onNavigate}
        className={itemClass(lang === "en")}
      >
        EN
      </Link>
    </span>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const lang = useLang();
  const p = (href: string) => localePath(lang, href);
  const navItems = NAV[lang];
  const ui = UI[lang];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLeafActive = (href: string) => pathname === p(href);
  const isItemActive = (item: NavItem) => {
    if (item.href) return pathname === p(item.href);
    return item.children?.some((c) => pathname.startsWith(p(c.href))) ?? false;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`bg-white border-b border-gray-200 transition-shadow duration-300 ${
          isScrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

          {/* Logo */}
          <Link href={p("/")} className="flex items-center group focus:outline-none shrink-0">
            <div className="flex items-center gap-2.5 bg-brand-navy rounded-lg px-3 py-2 transition-transform duration-300 group-hover:scale-[1.02]">
              <Image
                src="/images/v-signet-transparent.png"
                alt="VEROTERA Signet"
                width={48}
                height={48}
                priority
                className="object-contain h-6 w-6 scale-150"
              />
              <Image
                src="/images/verotera-wordmark.png"
                alt="VEROTERA"
                width={824}
                height={95}
                priority
                className="object-contain h-4 w-auto"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav aria-label={ui.mainNav} className="hidden lg:flex">
            <ul className="flex items-center gap-1 list-none m-0 p-0">
              {navItems.map((item) => {
                const active = isItemActive(item);
                if (item.children) {
                  const isMenuOpen = openMenu === item.label;
                  return (
                    <li
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => setOpenMenu(item.label)}
                      onMouseLeave={() => setOpenMenu(null)}
                    >
                      <button
                        type="button"
                        aria-haspopup="true"
                        aria-expanded={isMenuOpen}
                        onClick={() => setOpenMenu(isMenuOpen ? null : item.label)}
                        className={`flex items-center gap-1 px-3 py-2 rounded-lg font-sans text-sm tracking-wide transition-colors duration-200 focus:outline-none ${
                          active
                            ? "text-brand-navy font-semibold"
                            : "text-brand-navy/70 font-medium hover:text-brand-navy"
                        }`}
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            isMenuOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Dropdown */}
                      <div
                        className={`absolute left-0 top-full pt-2 transition-all duration-200 ${
                          isMenuOpen
                            ? "opacity-100 visible translate-y-0"
                            : "opacity-0 invisible -translate-y-1 pointer-events-none"
                        }`}
                      >
                        <ul className="w-72 bg-white border border-gray-200 rounded-xl shadow-lg p-2 list-none m-0">
                          {item.children.map((leaf) => (
                            <li key={leaf.label}>
                              <Link
                                href={p(leaf.href)}
                                className={`block px-3 py-2.5 rounded-lg text-sm transition-colors duration-150 ${
                                  isLeafActive(leaf.href)
                                    ? "bg-brand-cyan/10 text-brand-navy font-semibold"
                                    : "text-brand-navy/75 hover:bg-brand-cyan/10 hover:text-brand-navy"
                                }`}
                              >
                                {leaf.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  );
                }

                return (
                  <li key={item.label}>
                    <Link
                      href={p(item.href!)}
                      className={`relative px-3 py-2 rounded-lg font-sans text-sm tracking-wide transition-colors duration-200 focus:outline-none ${
                        active
                          ? "text-brand-navy font-semibold"
                          : "text-brand-navy/70 font-medium hover:text-brand-navy"
                      }`}
                    >
                      {item.label}
                      {active && (
                        <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-brand-cyan rounded-full" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right-side controls */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <LangSwitch lang={lang} pathname={pathname} />
            <Link
              href={p("/login")}
              className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-semibold tracking-wide text-brand-navy border border-brand-navy/20 hover:border-brand-navy/40 hover:bg-brand-navy/5 transition-all duration-200"
            >
              Login
            </Link>
            <Link
              href={p("/contacts")}
              className="inline-flex items-center justify-center px-5 py-2 rounded-full text-sm font-semibold tracking-wide text-brand-navy bg-brand-cyan hover:bg-brand-cyan/90 transition-all duration-200 shadow-sm hover:shadow-[0_0_18px_rgba(34,184,207,0.35)]"
            >
              {ui.cta}
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-brand-navy/70 hover:text-brand-navy p-2 focus:outline-none"
            aria-label={isOpen ? ui.menuClose : ui.menuOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-40 w-full max-w-xs bg-white border-l border-gray-200 shadow-2xl transition-transform duration-300 transform lg:hidden overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: "64px" }}
      >
        <nav aria-label={ui.mobileNav}>
          <ul className="flex flex-col gap-1 p-6 list-none m-0">
            {navItems.map((item) => {
              if (item.children) {
                const expanded = mobileExpanded === item.label;
                return (
                  <li key={item.label}>
                    <button
                      type="button"
                      aria-expanded={expanded}
                      onClick={() => setMobileExpanded(expanded ? null : item.label)}
                      className="w-full flex items-center justify-between font-sans text-base font-medium tracking-wide text-brand-navy/80 hover:text-brand-navy py-2.5 px-2 rounded-lg hover:bg-brand-navy/5 transition-colors focus:outline-none"
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          expanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <ul
                      className={`list-none m-0 overflow-hidden transition-all duration-300 ${
                        expanded ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      {item.children.map((leaf) => (
                        <li key={leaf.label}>
                          <Link
                            href={p(leaf.href)}
                            onClick={() => setIsOpen(false)}
                            className={`block pl-6 pr-2 py-2.5 rounded-lg text-sm transition-colors ${
                              isLeafActive(leaf.href)
                                ? "text-brand-navy font-semibold bg-brand-cyan/10"
                                : "text-brand-navy/65 hover:text-brand-navy hover:bg-brand-navy/5"
                            }`}
                          >
                            {leaf.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }

              return (
                <li key={item.label}>
                  <Link
                    href={p(item.href!)}
                    onClick={() => setIsOpen(false)}
                    className={`block font-sans text-base font-medium tracking-wide py-2.5 px-2 rounded-lg transition-colors focus:outline-none ${
                      isItemActive(item)
                        ? "text-brand-navy font-bold bg-brand-navy/5"
                        : "text-brand-navy/70 hover:text-brand-navy hover:bg-brand-navy/5"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="px-6 pb-4 flex items-center gap-3">
            <LangSwitch lang={lang} pathname={pathname} onNavigate={() => setIsOpen(false)} />
          </div>

          <div className="px-6 pb-8 flex flex-col gap-3">
            <Link
              href={p("/contacts")}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center px-6 py-3 rounded-full text-base font-semibold tracking-wide text-brand-navy bg-brand-cyan hover:bg-brand-cyan/90 transition-colors shadow-sm"
            >
              {ui.cta}
            </Link>
            <Link
              href={p("/login")}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center px-6 py-3 rounded-full text-base font-semibold tracking-wide text-brand-navy border border-brand-navy/20 hover:bg-brand-navy/5 transition-colors"
            >
              {ui.login}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
