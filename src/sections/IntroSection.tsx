import { ArrowDown, Mail, GraduationCap, MapPin } from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import profilePic from "../assets/2_Mercado_JamesFrancis_Pic 2.png";

export default function IntroSection() {
  return (
    <section className="pt-28 pb-16 sm:pt-32 sm:pb-20 border-b border-stone-200">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Intro copy & engineering metadata */}
        <div className="lg:col-span-7 space-y-6">
          {/* Location & Timezone Stamp */}
          <div className="inline-flex items-center gap-2 font-mono text-xs text-stone-500">
            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
            <span>BATANGAS, PHILIPPINES (GMT+8)</span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-stone-900 tracking-tight leading-tight">
              Hi, I'm <span className="underline decoration-stone-300 underline-offset-6">James</span>.
              <span className="block text-2xl sm:text-3xl md:text-4xl font-normal text-stone-600 mt-2">
                Student Software Engineer
              </span>
            </h1>
          </div>

          {/* Statement */}
          <p className="text-stone-600 text-base sm:text-lg max-w-xl leading-relaxed">
            Information Technology undergraduate at the Polytechnic University of the Philippines.
            Focused on backend architecture, relational database design, and building reliable web systems.
          </p>

          {/* Institutional Badge (single instance, fully visible) */}
          <div className="pt-1 font-mono text-xs">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-stone-200 bg-white/80 text-stone-800 shadow-2xs">
              <GraduationCap className="w-4 h-4 text-stone-600 shrink-0" />
              <span className="font-medium whitespace-nowrap">
                BSIT · Polytechnic University of the Philippines
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-stone-900 hover:bg-stone-800 text-white text-xs font-mono tracking-wide transition-colors shadow-xs"
            >
              <span>EXPLORE SELECTED WORK</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded border border-stone-300 bg-white hover:bg-stone-50 text-stone-800 text-xs font-mono tracking-wide transition-colors shadow-2xs"
            >
              <Mail className="w-3.5 h-3.5 text-stone-600" />
              <span>GET IN TOUCH</span>
            </a>
          </div>
        </div>

        {/* Right Column: Clean Developer Portrait (No redundant tags or tech lists) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="w-full max-w-xs sm:max-w-sm rounded-xl border border-stone-200 bg-white p-3 shadow-xs">
            <div className="aspect-4/5 w-full overflow-hidden rounded-lg bg-stone-100 border border-stone-200/60">
              <img
                src={profilePic}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-3 px-1 flex items-center justify-between font-mono text-xs text-stone-600">
              <span className="font-medium text-stone-900">{personalInfo.name}</span>
              <span className="text-stone-400 text-[11px] flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span>PH</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
