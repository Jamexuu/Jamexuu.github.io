import type { Project } from "../types/portfolio";
import { ArrowUpRight, CheckCircle2, Globe } from "lucide-react";
import { GithubIcon } from "./SocialIcons";

interface ProjectItemProps {
  project: Project;
  isLast?: boolean;
}

export default function ProjectItem({ project, isLast = false }: ProjectItemProps) {
  const contributions = project.contributions || project.highlights || [];

  const getLiveLabel = (url: string) => {
    try {
      return new URL(url).hostname.replace(/^www\./, "").toUpperCase();
    } catch {
      return "LIVE SITE";
    }
  };

  const renderTechStack = () => (
    <div>
      <span className="block font-mono text-[11px] uppercase tracking-wider text-stone-400 mb-2">
        Technologies
      </span>
      <div className="flex flex-wrap gap-1.5">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="font-mono text-[11px] sm:text-xs px-2.5 py-1 rounded bg-white border border-stone-200 hover:border-brand-200 text-stone-800 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );

  const renderLinks = () => {
    if (!project.liveUrl && !project.githubUrl) return null;

    return (
      <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 pt-1">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 sm:py-2 rounded bg-brand-700 hover:bg-brand-800 text-white text-xs font-mono transition-colors shadow-xs"
          >
            <Globe className="w-3.5 h-3.5 opacity-90 shrink-0" />
            <span>{getLiveLabel(project.liveUrl)}</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-85 shrink-0" />
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 sm:py-2 rounded border border-stone-300 bg-white hover:border-brand-300 hover:bg-brand-50/40 text-stone-800 text-xs font-mono transition-colors shadow-xs"
          >
            <GithubIcon className="w-3.5 h-3.5 text-stone-700 shrink-0" />
            <span>REPOSITORY</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
          </a>
        )}
      </div>
    );
  };

  return (
    <article
      className={`group transition-all duration-200 ${
        !isLast ? "border-b border-stone-200/90 pb-8 mb-8 sm:pb-12 sm:mb-12" : "pb-2 sm:pb-4"
      }`}
    >
      {/* Header bar: Project Index & Metadata */}
      <div className="flex items-center justify-between gap-3 mb-3 sm:mb-4">
        <div className="flex items-center gap-2 sm:gap-2.5 font-mono text-[11px] sm:text-xs text-stone-500 tracking-wider min-w-0">
          <span className="px-2 py-0.5 rounded bg-brand-50 border border-brand-200/80 text-brand-800 font-semibold shrink-0 whitespace-nowrap">
            PROJECT {project.number}
          </span>
          <span className="text-stone-300 hidden sm:inline">/</span>
          <span className="uppercase text-stone-600 leading-snug hidden sm:inline truncate">
            {project.category}
          </span>
        </div>

        <span className="font-mono text-xs text-stone-400 whitespace-nowrap shrink-0">
          {project.period}
        </span>
      </div>

      {/* Main Title, Mobile Category & Role */}
      <div className="mb-4 sm:mb-5">
        <h3 className="text-xl sm:text-2xl font-semibold text-stone-900 tracking-tight leading-snug group-hover:text-brand-800 transition-colors">
          {project.title}
        </h3>
        <div className="mt-1 sm:mt-1.5 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 font-mono text-xs text-stone-500">
          <span className="sm:hidden text-[11px] uppercase tracking-wider text-stone-500 font-medium">
            {project.category}
          </span>
          <p>
            Role: <span className="text-stone-800 font-medium">{project.role}</span>
          </p>
        </div>
      </div>

      {/* Content Grid:
          - Desktop: 2-column layout with Description, Tech Stack, & Links on the left (col-span-5)
            and Contributions card on the right (col-span-7).
          - Mobile: Linear narrative sequence: Description -> Contributions -> Technologies -> Links.
      */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-start">
        {/* Overview & Description */}
        <div className="lg:col-span-5 space-y-4 min-w-0">
          <p className="text-stone-600 text-sm leading-relaxed">
            {project.description}
          </p>

          {/* Desktop-only: Technologies & Action Links */}
          <div className="hidden lg:block space-y-4 pt-1">
            {renderTechStack()}
            {renderLinks()}
          </div>
        </div>

        {/* Contributions Card */}
        <div className="lg:col-span-7 bg-white/80 border border-stone-200 group-hover:border-brand-200/90 rounded-lg p-4 sm:p-6 space-y-3 shadow-xs transition-colors min-w-0">
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-brand-800 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0"></span>
            <span>Contributions & Architecture</span>
          </div>

          <ul className="space-y-2.5">
            {contributions.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-stone-700 leading-relaxed">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-600/80 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile-only: Technologies & Action Links placed after Contributions */}
        <div className="lg:hidden space-y-4 pt-1">
          {renderTechStack()}
          {renderLinks()}
        </div>
      </div>
    </article>
  );
}
