import HeroCard from "../components/home/HeroCard";
import StatusCard from "../components/home/StatusCard";
import ContactCard from "../components/home/ContactCard";
import AboutCard from "../components/home/AboutCard";
import TimelineCard from "../components/home/TimelineCard";
import SkillsCard from "../components/home/SkillsCard";
import AcademicProjectsCard from "../components/home/AcademicProjectsCard";
import ProjectCard from "../components/home/ProjectCard";
import QuoteCard from "../components/home/QuoteCard";

function Home() {
  return (
    <main className="text-black p-6 font-sans">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        <HeroCard />
        <StatusCard />
        <ContactCard />
        <AboutCard />
        <TimelineCard />
        <SkillsCard />
        <AcademicProjectsCard />
        <ProjectCard />
        <QuoteCard />
      </div>
    </main>
  );
}

export default Home;