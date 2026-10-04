import type { Project } from "../types/portfolio";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "./SocialIcons";

interface ProjectItemProps {
  project: Project;
  isLast?: boolean;
}

export default function ProjectItem({ project, isLast = false }: ProjectItemProps) {
  return (
    <article
      className={`group transition-all duration-200 ${
        !isLast ? "border-b border-stone-200/90 pb-12 mb-12" : "pb-4"
      }`}
    >
      {/* Header bar: Project Index & Category Metadata */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-3 font-mono text-xs text-stone-500 tracking-wider">
          <span className="px-2 py-0.5 rounded bg-stone-100 border border-stone-200 text-stone-900 font-semibold">
            PROJECT {project.number}
          </span>
          <span className="text-stone-300">/</span>
          <span className="uppercase text-stone-600">{project.category}</span>
        </div>

        <div className="flex items-center gap-2">
          <span
            className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${
              project.status.toLowerCase().includes("active")
                ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                : "bg-stone-50 text-stone-700 border-stone-200"
            }`}
          >
            {project.status}
          </span>
          <span className="font-mono text-xs text-stone-400">
            {project.period}
          </span>
        </div>
      </div>

      {/* Main Title & Role */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 space-y-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-stone-900 tracking-tight leading-snug group-hover:text-stone-700 transition-colors">
              {project.title}
            </h3>
            <p className="mt-1 font-mono text-xs text-stone-500">
              Role: <span className="text-stone-800 font-medium">{project.role}</span>
            </p>
          </div>

          <p className="text-stone-600 text-sm leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack list */}
          <div className="pt-2">
            <span className="block font-mono text-[11px] uppercase tracking-wider text-stone-400 mb-2">
              Technologies
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-2.5 py-1 rounded bg-stone-100/80 border border-stone-200 text-stone-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="pt-2 flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded border border-stone-300 bg-white hover:bg-stone-50 text-stone-800 text-xs font-mono transition-colors shadow-xs"
              >
                <GithubIcon className="w-3.5 h-3.5 text-stone-700" />
                <span>REPOSITORY</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-stone-900 hover:bg-stone-800 text-white text-xs font-mono transition-colors shadow-xs"
              >
                <span>LIVE DEMO</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Case Study Details: Problem & Solution & Key Highlights */}
        <div className="lg:col-span-7 bg-white/70 border border-stone-200 rounded-lg p-5 sm:p-6 space-y-5 shadow-xs">
          <div>
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-stone-500 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
              <span>The Problem</span>
            </div>
            <p className="text-stone-700 text-sm leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="border-t border-stone-100 pt-4">
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-emerald-800 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
              <span>The Engineering Solution</span>
            </div>
            <p className="text-stone-700 text-sm leading-relaxed">
              {project.solution}
            </p>
          </div>

          <div className="border-t border-stone-100 pt-4">
            <div className="font-mono text-[11px] uppercase tracking-wider text-stone-500 mb-2">
              Implementation Highlights
            </div>
            <ul className="space-y-1.5">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-stone-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
