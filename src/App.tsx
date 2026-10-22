import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { ScrollHeroSection } from './components/sections/ScrollHeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ContactSection } from './components/sections/ContactSection';

export default function App() {
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveSection(id.charAt(0).toUpperCase() + id.slice(1));
        }
      });
    }, { threshold: 0.3 });

    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <Header activeSection={activeSection} />
      <main className="relative w-full">
        <ScrollHeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </>
  );
}
