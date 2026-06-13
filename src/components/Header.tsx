"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Lösungen",      href: "/solutions",   anchorId: null,          redirectOnly: true },
  { label: "Applikationen", href: "/#industries", anchorId: "#industries", redirectOnly: false },
  { label: "Support",       href: "/#contact",    anchorId: "#contact",    redirectOnly: false },
  { label: "Über uns",      href: "/about",       anchorId: null,          redirectOnly: true },
  { label: "Kontakt",       href: "/#contact",    anchorId: "#contact",    redirectOnly: false },
  { label: "News",          href: "/#news",       anchorId: null,          redirectOnly: true },
  { label: "Karriere",      href: "/karriere",    anchorId: null,          redirectOnly: true },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (pathname !== "/") {
        setActiveSection(pathname);
        return;
      }

      const scrollPos = window.scrollY + 90;
      let currentSection = "";

      for (const item of NAV_ITEMS) {
        if (!item.anchorId) continue;
        const el = document.querySelector(item.anchorId);
        if (el) {
          const top = (el as HTMLElement).offsetTop;
          const height = (el as HTMLElement).offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            currentSection = item.href;
            break;
          }
        }
      }

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60
      ) {
        currentSection = "/#contact";
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    anchorId: string | null,
    redirectOnly: boolean
  ) => {
    setIsOpen(false);
    if (anchorId && pathname === "/" && !redirectOnly) {
      e.preventDefault();
      const el = document.querySelector(anchorId);
      if (el) {
        const top = (el as HTMLElement).offsetTop - 70;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Main Navigation Bar */}
      <div
        className={`bg-white border-b border-gray-200 transition-shadow duration-300 ${
          isScrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            href="/"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                setActiveSection("");
              }
            }}
            className="flex items-center group focus:outline-none shrink-0"
          >
            <div className="flex items-center gap-2.5 bg-brand-navy rounded-lg px-3 py-2 transition-transform duration-300 group-hover:scale-[1.02]">
              <Image
                src="/images/v-signet-transparent.png"
                alt="VEROTERA Signet"
                width={24}
                height={24}
                priority
                className="object-contain h-6 w-6"
              />
              <Image
                src="/images/verotera-wordmark.png"
                alt="VEROTERA"
                width={139}
                height={16}
                priority
                className="object-contain h-4 w-auto"
              />
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav aria-label="Hauptnavigation" className="hidden md:flex">
            <ul className="flex items-center gap-5 list-none m-0 p-0">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={(e) =>
                      handleNavClick(e, item.href, item.anchorId, item.redirectOnly)
                    }
                    className={`font-sans text-sm tracking-wide transition-all duration-200 relative py-1 focus:outline-none ${
                      activeSection === item.href
                        ? "text-brand-navy font-semibold"
                        : "text-brand-navy/70 font-medium hover:text-brand-navy"
                    }`}
                  >
                    {item.label}
                    {activeSection === item.href && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-cyan rounded-full" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right-side controls */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            {/* Language Toggle */}
            <span className="text-sm font-medium text-brand-navy/60 select-none">
              DE{" "}
              <span className="text-brand-navy/30">|</span>{" "}
              EN
            </span>

            {/* My VEROTERA Login Button */}
            <Link
              href="/login"
              className="inline-flex items-center justify-center px-5 py-2 rounded-full text-sm font-semibold tracking-wide text-white bg-brand-navy hover:bg-brand-navy/85 transition-all duration-200 shadow-sm"
            >
              My VEROTERA Login
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-brand-navy/70 hover:text-brand-navy p-2 focus:outline-none"
            aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-y-0 right-0 z-40 w-full max-w-xs bg-white border-l border-gray-200 shadow-2xl transition-transform duration-300 transform md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: "64px" }}
      >
        <nav aria-label="Mobile Navigation">
          <ul className="flex flex-col gap-1 p-6 list-none m-0">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={(e) =>
                    handleNavClick(e, item.href, item.anchorId, item.redirectOnly)
                  }
                  className={`block font-sans text-base font-medium tracking-wide transition-colors py-2.5 px-2 rounded-lg focus:outline-none ${
                    activeSection === item.href
                      ? "text-brand-navy font-bold bg-brand-navy/5"
                      : "text-brand-navy/70 hover:text-brand-navy hover:bg-brand-navy/5"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="px-6 pb-4 flex items-center gap-3">
            <span className="text-sm font-medium text-brand-navy/60">
              DE <span className="text-brand-navy/30">|</span> EN
            </span>
          </div>

          <div className="px-6">
            <Link
              href="/login"
              className="flex items-center justify-center px-6 py-3 rounded-full text-base font-semibold tracking-wide text-white bg-brand-navy hover:bg-brand-navy/85 transition-colors shadow-sm"
            >
              My VEROTERA Login
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
