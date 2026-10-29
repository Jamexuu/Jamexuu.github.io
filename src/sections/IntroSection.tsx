import { ArrowDown, Mail, GraduationCap, MapPin } from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import profilePic from "../assets/2_Mercado_JamesFrancis_Pic 2.png";

export default function IntroSection() {
  return (
    <section className="pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 border-b border-stone-200">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
        {/* Left Column: Intro copy & engineering metadata */}
        <div className="md:col-span-7 space-y-5 sm:space-y-6 min-w-0">
          {/* Location & Timezone Stamp */}
          <div className="inline-flex items-center gap-2 font-mono text-[11px] sm:text-xs text-stone-600">
            <span className="w-2 h-2 rounded-full bg-brand-500 ring-4 ring-brand-100 shrink-0"></span>
            <span>BATANGAS, PHILIPPINES (GMT+8)</span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-stone-900 tracking-tight leading-tight">
              Hi, I'm <span className="underline decoration-brand-400/70 underline-offset-6">James</span>.
              <span className="block text-xl sm:text-2xl lg:text-4xl font-normal text-stone-600 mt-1.5 sm:mt-2">
                Student Software Engineer
              </span>
            </h1>
          </div>

          {/* Statement */}
          <p className="text-stone-600 text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed">
            Information Technology undergraduate at the Polytechnic University of the Philippines.
            Focused on backend architecture, relational database design, and building reliable web systems.
          </p>

          {/* Institutional Badge (single instance, wraps cleanly on small phones) */}
          <div className="pt-0.5 font-mono text-xs max-w-full">
            <div className="inline-flex items-start sm:items-center gap-2 px-3 py-1.5 rounded border border-brand-200/80 bg-brand-50/50 text-stone-800 shadow-2xs max-w-full">
              <GraduationCap className="w-4 h-4 text-brand-600 shrink-0 mt-0.5 sm:mt-0" />
              <span className="font-medium leading-snug">
                BSIT · Polytechnic University of the Philippines
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-1 sm:pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 sm:py-2.5 rounded bg-brand-700 hover:bg-brand-800 text-white text-xs font-mono tracking-wide transition-colors shadow-xs"
            >
              <span>EXPLORE SELECTED WORK</span>
              <ArrowDown className="w-3.5 h-3.5 shrink-0" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 sm:py-2.5 rounded border border-stone-300 bg-white hover:border-brand-300 hover:bg-brand-50/40 text-stone-800 text-xs font-mono tracking-wide transition-colors shadow-2xs"
            >
              <Mail className="w-3.5 h-3.5 text-brand-600 shrink-0" />
              <span>GET IN TOUCH</span>
            </a>
          </div>
        </div>

        {/* Right Column: Clean Developer Portrait */}
        <div className="md:col-span-5 flex justify-center md:justify-end">
          <div className="w-full max-w-[260px] sm:max-w-xs md:max-w-sm rounded-xl border border-stone-200 hover:border-brand-200 bg-white p-2.5 sm:p-3 shadow-xs transition-colors">
            <div className="aspect-4/5 w-full overflow-hidden rounded-lg bg-stone-100 border border-stone-200/60">
              <img
                src={profilePic}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-2.5 sm:mt-3 px-1 flex items-center justify-between gap-2 font-mono text-xs text-stone-600">
              <span className="font-medium text-stone-900 truncate">{personalInfo.name}</span>
              <span className="text-stone-500 text-[11px] flex items-center gap-1 shrink-0">
                <MapPin className="w-3 h-3 text-brand-600 shrink-0" />
                <span>PH</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
