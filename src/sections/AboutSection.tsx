import SectionHeader from "../components/SectionHeader";
import { personalInfo } from "../data/portfolioData";
import { Clock, Laptop, Compass } from "lucide-react";
import { useState, useEffect } from "react";

export default function AboutSection() {
  const [phTime, setPhTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Manila",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setPhTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-20 border-b border-stone-200">
      <SectionHeader
        number="04"
        label="ABOUT"
        title="Background & Engineering Mindset"
        description="A look into my background, how I got into programming, and how I approach writing software."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Narrative */}
        <div className="lg:col-span-7 space-y-5 text-stone-700 text-sm sm:text-base leading-relaxed">
          {personalInfo.bio.map((paragraph, index) => (
            <p key={index} className="text-stone-700">
              {paragraph}
            </p>
          ))}

          <div className="pt-3 border-t border-stone-200/80">
            <h4 className="font-mono text-xs uppercase tracking-wider text-stone-500 mb-2">
              What I Value in Software
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded border border-stone-200 bg-white/60">
                <span className="font-semibold text-stone-900 block mb-1">
                  1. Readable, Predictable Code
                </span>
                <span className="text-stone-500">
                  Preferring clarity, explicit typing, and maintainable project structures over clever hacks.
                </span>
              </div>
              <div className="p-3 rounded border border-stone-200 bg-white/60">
                <span className="font-semibold text-stone-900 block mb-1">
                  2. Practical Problem Solving
                </span>
                <span className="text-stone-500">
                  Building software that solves actual headaches for real users, students, or organizations.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Engineering Desk Sidebar */}
        <div className="lg:col-span-5 bg-white border border-stone-200 rounded-lg p-6 space-y-6 shadow-2xs">
          <div className="flex items-center justify-between pb-3 border-b border-stone-100">
            <span className="font-mono text-xs uppercase tracking-wider text-stone-500">
              Desk Snapshot
            </span>
            <span className="font-mono text-[11px] text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
              LIVE METRICS
            </span>
          </div>

          <div className="space-y-4 font-mono text-xs">
            <div className="flex items-center justify-between py-1 border-b border-stone-100">
              <span className="text-stone-500 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-stone-400" />
                Local Time (PH)
              </span>
              <span className="text-stone-900 font-medium">
                {phTime || "12:00:00 AM"} (PHT)
              </span>
            </div>

            <div className="flex items-center justify-between py-1 border-b border-stone-100">
              <span className="text-stone-500 flex items-center gap-1.5">
                <Laptop className="w-3.5 h-3.5 text-stone-400" />
                Development Setup
              </span>
              <span className="text-stone-900 font-medium">
                VS Code · Git CLI · Windows/Linux
              </span>
            </div>

            <div className="flex items-center justify-between py-1 border-b border-stone-100">
              <span className="text-stone-500 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-stone-400" />
                Working Model
              </span>
              <span className="text-stone-900 font-medium text-right">
                Remote & Asynchronous Friendly
              </span>
            </div>
          </div>

          <div className="pt-2">
            <p className="text-[11px] text-stone-500 italic leading-relaxed">
              "Building software with curiosity and discipline — one commit, one project, and one lesson at a time."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
