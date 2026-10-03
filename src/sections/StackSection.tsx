import SectionHeader from "../components/SectionHeader";
import { techStackData } from "../data/portfolioData";
import { Layers, Database, Compass } from "lucide-react";

export default function StackSection() {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Layers className="w-4 h-4 text-emerald-700" />;
      case 1:
        return <Database className="w-4 h-4 text-stone-700" />;
      case 2:
      default:
        return <Compass className="w-4 h-4 text-stone-700" />;
    }
  };

  return (
    <section id="stack" className="py-20 border-b border-stone-200">
      <SectionHeader
        number="02"
        label="ENGINEERING STACK"
        title="Technology Map & Practical Tooling"
        description="An honest breakdown of the languages, frameworks, and infrastructure tools I use to build applications — organized by practical familiarity rather than arbitrary percentages."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {techStackData.map((category, idx) => (
          <div
            key={category.title}
            className="border border-stone-200 bg-white/70 rounded-lg p-6 flex flex-col justify-between shadow-2xs hover:border-stone-300 transition-colors"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center gap-2 mb-2">
                {getCategoryIcon(idx)}
                <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-stone-900">
                  {category.title}
                </h3>
              </div>

              <p className="text-xs text-stone-500 mb-6 leading-relaxed">
                {category.description}
              </p>

              {/* Technologies List */}
              <div className="space-y-3">
                {category.technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="p-2.5 rounded bg-stone-50/80 border border-stone-100 hover:border-stone-200 transition-colors"
                  >
                    <div className="flex items-center justify-between">
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

            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-[11px] font-mono text-stone-400">
              <span>CATEGORY {String(idx + 1).padStart(2, "0")}</span>
              <span>{category.technologies.length} TECHNOLOGIES</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
