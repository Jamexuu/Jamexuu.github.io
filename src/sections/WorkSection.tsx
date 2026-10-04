import SectionHeader from "../components/SectionHeader";
import ProjectItem from "../components/ProjectItem";
import { projects } from "../data/portfolioData";
import { FolderGit2 } from "lucide-react";

export default function WorkSection() {
  return (
    <section id="work" className="py-20 border-b border-stone-200">
      <SectionHeader
        number="01"
        label="SELECTED WORK"
        title="Case Studies & Engineering Projects"
        description="Detailed breakdowns of software systems, academic platforms, and utilities built with real problems and architectural decisions in mind."
      />

      <div className="space-y-4">
        {projects.map((project, index) => (
          <ProjectItem
            key={project.id}
            project={project}
            isLast={index === projects.length - 1}
          />
        ))}
      </div>

      {/* GitHub Outbound Note */}
      <div className="mt-8 p-4 rounded-lg border border-dashed border-stone-300 bg-white/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-2 text-stone-600">
          <FolderGit2 className="w-4 h-4 text-stone-500" />
          <span>More experimental scripts, coursework repositories, and prototypes on GitHub</span>
        </div>
        <a
          href="https://github.com/Jamexuu?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="text-stone-900 font-semibold hover:underline underline-offset-4"
        >
          VIEW ALL REPOSITORIES ↗
        </a>
      </div>
    </section>
  );
}
