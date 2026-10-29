import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

interface NavbarProps {
  activeSection?: string;
}

export default function Navbar({ activeSection = "" }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navLinks = [
    { label: "Work", href: "#work" },
    { label: "Stack", href: "#stack" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-t-2 border-t-brand-500 transition-all duration-300 ${
        scrolled
          ? "bg-[#f8faf7]/95 backdrop-blur-md border-b border-stone-200/80 py-2.5 sm:py-3 shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
          : "bg-[#f8faf7]/80 backdrop-blur-sm border-b border-stone-200/40 py-3 sm:py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
        {/* Brand / Logo */}
        <a
          href="#"
          onClick={() => setMobileMenuOpen(false)}
          className="group flex items-center gap-2 sm:gap-2.5 text-stone-900 transition-colors min-w-0"
        >
          <img
            src="/gitofjames_logo.svg"
            alt={`${personalInfo.preferredName} Logo`}
            className="w-7 h-7 sm:w-8 sm:h-8 object-contain shrink-0 transition-transform duration-200 group-hover:scale-105"
          />
          <div className="flex items-baseline gap-1.5 sm:gap-2 min-w-0">
            <span className="font-semibold text-sm tracking-tight text-stone-900 group-hover:text-brand-700 transition-colors shrink-0">
              {personalInfo.preferredName.toUpperCase()}
            </span>
            <span className="hidden min-[420px]:inline font-mono text-xs text-brand-500 font-normal shrink-0">
              /
            </span>
            <span className="hidden min-[420px]:inline font-mono text-xs text-stone-500 lowercase truncate">
              {personalInfo.role.toLowerCase()}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 font-mono text-xs shrink-0">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.label}
                href={link.href}
                className={`px-3 py-1.5 rounded transition-colors ${
                  isActive
                    ? "text-brand-800 font-semibold bg-brand-50 border border-brand-200/70"
                    : "text-stone-600 hover:text-brand-700 hover:bg-brand-50/60 border border-transparent"
                }`}
              >
                {link.label.toUpperCase()}
              </a>
            );
          })}

          <div className="h-4 w-px bg-stone-200 mx-1" />

          <a
            href="https://github.com/Jamexuu"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-1 px-3 py-1.5 rounded text-stone-700 hover:text-brand-800 hover:bg-brand-50/70 transition-colors"
          >
            <span>GITHUB</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-brand-600 transition-colors" />
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 -mr-1 text-stone-700 hover:text-brand-700 rounded-lg hover:bg-brand-50/70 transition-colors shrink-0"
          aria-label="Toggle navigation"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200/70 border-b border-stone-200 bg-[#f8faf7]/98 backdrop-blur-md px-4 sm:px-6 py-3 shadow-sm">
          <div className="flex flex-col gap-1 font-mono text-xs">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2.5 px-3 rounded transition-colors ${
                    isActive
                      ? "bg-brand-50 text-brand-800 font-semibold border border-brand-200/70"
                      : "text-stone-700 hover:text-brand-700 hover:bg-brand-50/50"
                  }`}
                >
                  {link.label.toUpperCase()}
                </a>
              );
            })}

            <div className="my-1 border-t border-stone-200/70" />

            <a
              href="https://github.com/Jamexuu"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2.5 px-3 rounded text-brand-800 hover:bg-brand-50/60 font-medium transition-colors"
            >
              <span>GITHUB PROFILE</span>
              <ArrowUpRight className="w-4 h-4 text-brand-600 shrink-0" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
