import SectionHeader from "../components/SectionHeader";
import { techStackData } from "../data/portfolioData";
import { Layers, Database, Compass } from "lucide-react";

export default function StackSection() {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Layers className="w-3.5 h-3.5 text-brand-600" />;
      case 1:
        return <Database className="w-3.5 h-3.5 text-brand-600" />;
      case 2:
      default:
        return <Compass className="w-3.5 h-3.5 text-brand-600" />;
    }
  };

  return (
    <section id="stack" className="scroll-mt-16 sm:scroll-mt-20 py-12 sm:py-16 lg:py-20 border-b border-stone-200">
      <SectionHeader
        number="02"
        label="ENGINEERING STACK"
        title="Technology Map & Practical Tooling"
        description="An honest breakdown of the languages, frameworks, and infrastructure tools I use to build applications, organized by practical familiarity rather than arbitrary percentages."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {techStackData.map((category, idx) => {
          const isThirdCard = idx === 2;
          return (
            <div
              key={category.title}
              className={`border border-stone-200 bg-white/80 rounded-lg p-4 sm:p-6 flex flex-col justify-between shadow-2xs hover:border-brand-200 transition-colors min-w-0 ${
                isThirdCard ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-6 h-6 rounded bg-brand-50 border border-brand-200/70 flex items-center justify-center shrink-0">
                    {getCategoryIcon(idx)}
                  </div>
                  <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-stone-900 leading-snug">
                    {category.title}
                  </h3>
                </div>

                <p className="text-xs text-stone-500 mb-5 sm:mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Technologies List */}
                <div
                  className={
                    isThirdCard
                      ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-2.5 sm:gap-3"
                      : "space-y-2.5 sm:space-y-3"
                  }
                >
                  {category.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="p-2.5 rounded bg-stone-50/70 border border-stone-100 hover:border-brand-200/80 hover:bg-brand-50/25 transition-colors"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-xs font-semibold text-stone-900">
                          {tech.name}
                        </span>
                      </div>
                      {tech.note && (
                        <p className="text-[11px] text-stone-500 mt-1 leading-snug">
                          {tech.note}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 sm:mt-6 pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-stone-400">
                <span className="text-brand-700/80 whitespace-nowrap">CATEGORY {String(idx + 1).padStart(2, "0")}</span>
                <span className="whitespace-nowrap">{category.technologies.length} TECHNOLOGIES</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
