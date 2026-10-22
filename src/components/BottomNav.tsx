import { Home, User, FolderGit2, TerminalSquare, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

export function BottomNav() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      let currentActive = activeSection;
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          currentActive = entry.target.id;
        }
      });
      setActiveSection(currentActive);
    }, { threshold: 0.3 });

    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, [activeSection]);

  const navItems = [
    { id: 'home', icon: Home, label: 'HOME' },
    { id: 'about', icon: User, label: 'ABOUT' },
    { id: 'projects', icon: FolderGit2, label: 'PROJECTS' },
    { id: 'skills', icon: TerminalSquare, label: 'SKILLS' },
    { id: 'contact', icon: Mail, label: 'CONTACT' }
  ];

  return (
    <nav className="fixed bottom-0 w-full z-50 bg-surface/90 backdrop-blur-md pb-safe">
      <div className="h-16 flex items-center justify-around border-t border-outline/10">
        {navItems.map(({ id, icon: Icon, label }) => {
          const isActive = activeSection === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              className={`flex flex-col items-center justify-center gap-1 w-full h-full font-label-caps text-label-caps transition-colors ${
                isActive ? 'text-on-surface border-t-2 border-secondary-container' : 'text-on-surface-variant'
              }`}
            >
              <Icon className="w-6 h-6" strokeWidth={isActive ? 2.5 : 1.5} />
              <span>{label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
