"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const NAV_ITEMS = [
  { label: "What we do", href: "/#what-we-do", anchorId: "#what-we-do" },
  { label: "Industries", href: "/#industries", anchorId: "#industries" },
  { label: "Solutions", href: "/solutions", anchorId: "#solutions" },
  { label: "Why VEROTERA", href: "/#why-verotera", anchorId: "#why-verotera" },
  { label: "About", href: "/about", anchorId: null },
  { label: "Contact", href: "/#contact", anchorId: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (pathname !== "/") {
        setActiveSection(pathname);
        return;
      }

      const scrollPos = window.scrollY + 120; // offset for sticky header
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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, anchorId: string | null) => {
    setIsOpen(false);
    if (anchorId && pathname === "/") {
      e.preventDefault();
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || pathname !== "/"
          ? "bg-brand-navy/90 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
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
          className="flex items-center gap-2 group focus:outline-none"
        >
          <div className="relative w-36 h-9 transition-transform duration-300 group-hover:scale-[1.02]">
            <Image
              src="https://verotera.com/images/verotera-logo2.png"
              alt="VEROTERA Logo"
              fill
              priority
              className="object-contain"
              sizes="144px"
            />
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href, item.anchorId)}
              className={`font-sans text-sm font-medium tracking-wide transition-all duration-200 relative py-1 focus:outline-none hover:text-brand-cyan ${
                activeSection === item.href
                  ? "text-brand-cyan font-semibold"
                  : "text-slate-300"
              }`}
            >
              {item.label}
              {activeSection === item.href && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-cyan rounded-full shadow-[0_0_8px_rgba(45,212,191,0.6)]" />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/#contact"
            onClick={(e) => handleNavClick(e, "/#contact", "#contact")}
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full font-display text-sm font-semibold tracking-wide text-[#020617] bg-brand-cyan hover:bg-brand-cyan/90 transition-all duration-300 shadow-[0_0_15px_rgba(45,212,191,0.2)] hover:shadow-[0_0_25px_rgba(45,212,191,0.4)] transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Talk to us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300 hover:text-brand-cyan p-2 focus:outline-none"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer menu */}
      <div
        className={`fixed inset-y-0 right-0 z-40 w-full max-w-xs bg-brand-navy/95 backdrop-blur-lg border-l border-white/5 shadow-2xl transition-transform duration-300 transform md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: "72px" }}
      >
        <nav className="flex flex-col gap-6 p-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href, item.anchorId)}
              className={`font-sans text-lg font-medium tracking-wide transition-colors py-2 border-b border-white/5 focus:outline-none hover:text-brand-cyan ${
                activeSection === item.href ? "text-brand-cyan font-bold" : "text-slate-300"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={(e) => handleNavClick(e, "/#contact", "#contact")}
            className="mt-4 flex items-center justify-center px-6 py-3 rounded-full font-display text-base font-semibold tracking-wide text-[#020617] bg-brand-cyan hover:bg-brand-cyan/90 transition-colors shadow-lg"
          >
            Talk to us
          </Link>
        </nav>
      </div>
    </header>
  );
}
