import SectionHeader from "../components/SectionHeader";
import { learningItems, timelineMilestones } from "../data/portfolioData";
import { BookOpen, Milestone, Sparkles } from "lucide-react";

export default function JourneySection() {
  return (
    <section id="journey" className="py-20 border-b border-stone-200">
      <SectionHeader
        number="03"
        label="JOURNEY & LEARNING"
        title="Learning Trajectory & Milestones"
        description="Software engineering is an ongoing apprenticeship. Here is where I started, where I am studying, and the technical topics I am actively unpacking."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left: Currently Exploring / Learning Ledger */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-stone-500">
            <BookOpen className="w-4 h-4 text-emerald-700" />
            <span>Currently Exploring (Active Ledger)</span>
          </div>

          <div className="space-y-4">
            {learningItems.map((item, idx) => (
              <div
                key={idx}
                className="border border-stone-200 bg-white/70 rounded-lg p-5 shadow-2xs hover:border-stone-300 transition-colors"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h4 className="font-semibold text-sm text-stone-900">
                    {item.topic}
                  </h4>
                  <span
                    className={`font-mono text-[10px] px-2 py-0.5 rounded-full border shrink-0 ${
                      item.status === "Active Exploration"
                        ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                        : item.status === "In Progress"
                        ? "bg-amber-50 text-amber-800 border-amber-200"
                        : "bg-stone-50 text-stone-600 border-stone-200"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed font-sans">
                  {item.context}
                </p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-lg bg-emerald-50/50 border border-emerald-100 text-xs text-emerald-950 flex items-start gap-3">
            <Sparkles className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              This portfolio is treated as an evolving desk. As I build more projects and grasp deeper system principles, this log updates alongside my GitHub commits.
            </p>
          </div>
        </div>

        {/* Right: Academic & Programming Timeline */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-stone-500">
            <Milestone className="w-4 h-4 text-stone-700" />
            <span>Academic & Programming Timeline</span>
          </div>

          <div className="relative border-l border-stone-200 ml-3 pl-6 space-y-8">
            {timelineMilestones.map((milestone, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline node */}
                <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-white border-2 border-stone-900 group-hover:scale-125 transition-transform" />

                <div className="flex flex-wrap items-baseline gap-2 mb-1">
                  <span className="font-mono text-xs font-semibold text-stone-900">
                    {milestone.year}
                  </span>
                  {milestone.badge && (
                    <span className="font-mono text-[10px] uppercase px-1.5 py-0.2 rounded bg-stone-100 text-stone-600 border border-stone-200">
                      {milestone.badge}
                    </span>
                  )}
                </div>

                <h4 className="text-base font-semibold text-stone-900 tracking-tight">
                  {milestone.title}
                </h4>

                <p className="font-mono text-xs text-stone-500 mb-2">
                  {milestone.institution}
                </p>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
