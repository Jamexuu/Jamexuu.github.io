import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X, Terminal } from "lucide-react";
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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Work", href: "#work" },
    { label: "Stack", href: "#stack" },
    { label: "Journey", href: "#journey" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#faf9f6]/92 backdrop-blur-md border-b border-stone-200/80 py-3 shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
          : "bg-[#faf9f6]/70 backdrop-blur-sm border-b border-stone-200/40 py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-stone-900 transition-colors"
        >
          <div className="w-7 h-7 rounded border border-stone-300 bg-white flex items-center justify-center text-stone-800 shadow-2xs group-hover:border-stone-500 transition-colors">
            <Terminal className="w-3.5 h-3.5 text-stone-700" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-semibold text-sm tracking-tight text-stone-900 group-hover:text-stone-700">
              {personalInfo.preferredName.toUpperCase()}
            </span>
            <span className="font-mono text-xs text-stone-400 font-normal">
              /
            </span>
            <span className="font-mono text-xs text-stone-500 lowercase">
              {personalInfo.role.toLowerCase()}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 font-mono text-xs">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`px-3 py-1.5 rounded transition-colors text-stone-600 hover:text-stone-950 hover:bg-stone-100 ${
                activeSection === link.href.slice(1) ? "text-stone-950 font-semibold bg-stone-100" : ""
              }`}
            >
              {link.label.toUpperCase()}
            </a>
          ))}

          <div className="h-4 w-px bg-stone-200 mx-1" />

          <a
            href="https://github.com/Jamexuu"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 px-3 py-1.5 rounded text-stone-700 hover:text-stone-950 hover:bg-stone-100 transition-colors"
          >
            <span>GITHUB</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-stone-500" />
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-stone-700 hover:text-stone-950 rounded-lg hover:bg-stone-100 transition-colors"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-stone-200 bg-[#faf9f6] px-6 py-4 shadow-sm animate-in fade-in duration-200">
          <div className="flex flex-col gap-1 font-mono text-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-stone-700 hover:text-stone-950 transition-colors border-b border-stone-100 last:border-0"
              >
                {link.label.toUpperCase()}
              </a>
            ))}

            <a
              href="https://github.com/Jamexuu"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2 text-stone-800 font-medium pt-3"
            >
              <span>GITHUB PROFILE</span>
              <ArrowUpRight className="w-4 h-4 text-stone-500" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
