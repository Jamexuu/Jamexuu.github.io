import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import IntroSection from "../sections/IntroSection";
import WorkSection from "../sections/WorkSection";
import StackSection from "../sections/StackSection";
import ContactSection from "../sections/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ["work", "stack", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            return;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar activeSection={activeSection} />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <IntroSection />
        <WorkSection />
        <StackSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}