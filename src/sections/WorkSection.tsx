import SectionHeader from "../components/SectionHeader";
import ProjectItem from "../components/ProjectItem";
import { projects } from "../data/portfolioData";
import { FolderGit2 } from "lucide-react";

export default function WorkSection() {
  return (
    <section id="work" className="scroll-mt-16 sm:scroll-mt-20 py-12 sm:py-16 lg:py-20 border-b border-stone-200">
      <SectionHeader
        number="01"
        label="SELECTED WORK"
        title="Academic Case Studies & Software Projects"
        description="Detailed breakdowns of academic systems, team collaborations, and software platforms engineered with real problems and practical architecture in mind."
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
      <div className="mt-8 p-4 rounded-lg border border-dashed border-brand-200 bg-brand-50/35 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-start sm:items-center gap-2.5 text-stone-700 min-w-0">
          <FolderGit2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5 sm:mt-0" />
          <span className="leading-relaxed">More experimental scripts, coursework repositories, and prototypes on GitHub</span>
        </div>
        <a
          href="https://github.com/Jamexuu?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="text-brand-800 hover:text-brand-600 font-semibold hover:underline underline-offset-4 transition-colors shrink-0 whitespace-nowrap self-start sm:self-auto"
        >
          VIEW ALL REPOSITORIES ↗
        </a>
      </div>
    </section>
  );
}
