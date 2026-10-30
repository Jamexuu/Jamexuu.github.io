import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 sm:py-10 text-stone-500 font-mono text-xs border-t border-stone-200/70 mt-6 sm:mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 min-w-0">
        <img
          src="/gitofjames_logo.svg"
          alt="James Mercado Logo"
          className="w-5 h-5 object-contain opacity-90 shrink-0"
        />
        <span className="font-semibold text-stone-900 tracking-tight">
          JAMES FRANCIS L. MERCADO
        </span>
        <span className="text-brand-400 hidden min-[380px]:inline">/</span>
        <span className="text-stone-500 whitespace-nowrap">2021 - PRESENT</span>
      </div>

      <button
        onClick={scrollToTop}
        className="flex items-center gap-1.5 text-stone-600 hover:text-brand-700 transition-colors cursor-pointer shrink-0 py-1"
      >
        <span>BACK TO TOP</span>
        <ArrowUp className="w-3.5 h-3.5 text-brand-600 shrink-0" />
      </button>
    </footer>
  );
}
