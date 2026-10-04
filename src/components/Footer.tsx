import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-10 text-stone-500 font-mono text-xs border-t border-stone-200/70 mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <span className="font-semibold text-stone-900 tracking-tight">
          JAMES FRANCIS L. MERCADO
        </span>
        <span className="text-stone-300">/</span>
        <span className="text-stone-500">2021–PRESENT</span>
      </div>

      <button
        onClick={scrollToTop}
        className="flex items-center gap-1.5 text-stone-600 hover:text-stone-950 transition-colors"
      >
        <span>BACK TO TOP</span>
        <ArrowUp className="w-3.5 h-3.5" />
      </button>
    </footer>
  );
}
