import { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import { personalInfo, socialLinks } from "../data/portfolioData";
import { Mail, Copy, Check, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, FacebookIcon } from "../components/SocialIcons";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("jamesfrancislmercado@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const getSocialIcon = (type: string) => {
    switch (type) {
      case "github":
        return <GithubIcon className="w-4 h-4" />;
      case "linkedin":
        return <LinkedinIcon className="w-4 h-4" />;
      case "facebook":
        return <FacebookIcon className="w-4 h-4" />;
      case "email":
      default:
        return <Mail className="w-4 h-4" />;
    }
  };

  return (
    <section id="contact" className="scroll-mt-16 sm:scroll-mt-20 py-12 sm:py-16 lg:py-20 border-b border-stone-200">
      <SectionHeader
        number="03"
        label="CONTACT"
        title="Get in Touch"
        description="Whether you have an internship opportunity, an interesting project, or just want to talk about software engineering, my inbox is always open."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-stretch">
        {/* Left Column: Direct Email Action Banner */}
        <div className="lg:col-span-7 border border-stone-200 hover:border-brand-200 bg-white rounded-lg p-5 sm:p-8 flex flex-col justify-between shadow-2xs transition-colors min-w-0">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-brand-50 border border-brand-200/80 text-brand-800 text-xs font-mono mb-4">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse shrink-0"></span>
              <span>DIRECT INBOX</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-semibold text-stone-900 tracking-tight mb-2">
              Have a project, role, or question?
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed mb-6 font-sans">
              {personalInfo.collaborationStatus}
            </p>
          </div>

          <div className="pt-4 border-t border-stone-100 space-y-3">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
              <a
                href="mailto:jamesfrancislmercado@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded bg-brand-700 hover:bg-brand-800 text-white text-xs font-mono tracking-wider transition-colors shadow-xs"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span>SEND AN EMAIL</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-80 shrink-0" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded border border-stone-300 hover:border-brand-300 hover:bg-brand-50/40 text-stone-800 text-xs font-mono transition-colors cursor-pointer"
                title="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-brand-700 shrink-0" />
                    <span className="text-brand-700 font-semibold">COPIED TO CLIPBOARD</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-brand-600 shrink-0" />
                    <span>COPY EMAIL ADDRESS</span>
                  </>
                )}
              </button>
            </div>

            <p className="font-mono text-[11px] text-stone-400 break-all sm:break-normal">
              jamesfrancislmercado@gmail.com
            </p>
          </div>
        </div>

        {/* Right Column: Social & Network Channels */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4 min-w-0">
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase tracking-wider text-stone-500 block mb-1">
              External Profiles
            </span>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-3">
              {socialLinks
                .filter((link) => link.type !== "email")
                .map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between gap-2 p-3.5 sm:p-4 rounded-lg border border-stone-200 bg-white/80 hover:bg-white hover:border-brand-300 transition-all shadow-2xs min-w-0"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="p-2 rounded bg-brand-50/80 border border-brand-100 text-brand-700 group-hover:bg-brand-700 group-hover:border-brand-700 group-hover:text-white transition-colors shrink-0">
                        {getSocialIcon(link.type)}
                      </div>
                      <div className="min-w-0">
                        <span className="text-xs font-semibold text-stone-900 block group-hover:text-brand-800 transition-colors truncate">
                          {link.label}
                        </span>
                        <span className="font-mono text-[11px] text-stone-500 block truncate">
                          {link.handle}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-brand-700 transition-colors shrink-0" />
                  </a>
                ))}
            </div>
          </div>

          <div className="p-3.5 rounded-lg border border-brand-200/70 bg-brand-50/35 font-mono text-xs text-stone-600 leading-relaxed">
            <span className="font-semibold text-brand-800 block mb-0.5">TURNAROUND</span>
            <span>Typically replies within 24–48 hours for opportunities and inquiries.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
