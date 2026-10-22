import { useEffect, useRef } from 'react';

const processSteps = [
  { id: '01', title: 'Discover', description: 'Uncovering the core problem through deep research and stakeholder alignment.', leftLabel: 'Uncovering the core problem' },
  { id: '02', title: 'Plan', description: 'Architecting the solution and mapping the user journey before touching a single pixel.', leftLabel: 'Architecting the solution', rightAlign: true },
  { id: '03', title: 'Design', description: 'Crafting the visual language, interaction models, and high-fidelity prototypes.', leftLabel: 'Visual language & Interaction' },
  { id: '04', title: 'Build', description: 'Translating design into performant, scalable, and accessible code.', leftLabel: 'Scalable & accessible code', rightAlign: true },
  { id: '05', title: 'Test', description: 'Rigorous QA across devices, browsers, and edge cases to ensure stability.', leftLabel: 'Rigorous QA & Refinement' },
  { id: '06', title: 'Ship', description: 'Deploying to production, monitoring performance, and iterating based on data.', leftLabel: 'Deploy & Iterate', rightAlign: true }
];

export function SkillsSection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const timelineProgress = timelineRef.current;
    const sections = document.querySelectorAll('.process-group');
    
    if (timelineProgress && sections.length > 0) {
      const observer = new IntersectionObserver((entries) => {
        let visibleIndex = -1;
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            visibleIndex = Array.from(sections).indexOf(entry.target);
          }
        });
        
        if (visibleIndex >= 0) {
           const percentage = (visibleIndex / (sections.length - 1)) * 100;
           timelineProgress.style.height = `${percentage}%`;
        }
      }, { threshold: 0.5 });
      
      sections.forEach(section => observer.observe(section));
      
      return () => {
        sections.forEach(section => observer.unobserve(section));
      };
    }
  }, []);

  return (
    <section id="skills" className="pt-section-gap pb-12 bg-background">
      <div className="w-full px-margin-edge-mobile lg:px-margin-edge pb-32">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-gutter">
          <div className="lg:col-span-4 flex flex-col gap-8">
            <h2 className="text-headline-lg-mobile lg:text-headline-lg uppercase text-on-surface leading-none tracking-tighter">
              Arsenal<br/>
              <span className="text-secondary-container">_</span>
            </h2>
            <p className="text-body-lg text-on-surface-variant max-w-md">
              A focused curation of the languages, frameworks, and tools I use to bridge the gap between stark logic and visceral emotion.
            </p>
          </div>
          
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 mt-16 lg:mt-0">
            {/* Programming */}
            <div className="flex flex-col gap-6">
              <h3 className="text-headline-md uppercase text-on-surface">Programming</h3>
              <ul className="flex flex-col border-t border-outline/20">
                <li className="py-4 border-b border-outline/20 flex justify-between items-baseline">
                  <span className="text-headline-md text-[24px] uppercase tracking-wide">JavaScript</span>
                  <span className="text-mono-metadata text-on-surface-variant">Core</span>
                </li>
                <li className="py-4 border-b border-outline/20 flex justify-between items-baseline">
                  <span className="text-headline-md text-[24px] uppercase tracking-wide">TypeScript</span>
                  <span className="text-mono-metadata text-on-surface-variant">Strict</span>
                </li>
                <li className="py-4 border-b border-outline/20 flex justify-between items-baseline">
                  <span className="text-headline-md text-[24px] uppercase tracking-wide">Python</span>
                  <span className="text-mono-metadata text-on-surface-variant">Data / Scripting</span>
                </li>
              </ul>
            </div>
            
            {/* Web */}
            <div className="flex flex-col gap-6">
              <h3 className="text-headline-md uppercase text-on-surface">Web</h3>
              <ul className="flex flex-col border-t border-outline/20">
                <li className="py-4 border-b border-outline/20 flex justify-between items-baseline">
                  <span className="text-headline-md text-[24px] uppercase tracking-wide">React</span>
                  <span className="text-mono-metadata text-on-surface-variant">Framework</span>
                </li>
                <li className="py-4 border-b border-outline/20 flex justify-between items-baseline">
                  <span className="text-headline-md text-[24px] uppercase tracking-wide">Next.js</span>
                  <span className="text-mono-metadata text-on-surface-variant">App Router</span>
                </li>
                <li className="py-4 border-b border-outline/20 flex justify-between items-baseline">
                  <span className="text-headline-md text-[24px] uppercase tracking-wide">Tailwind CSS</span>
                  <span className="text-mono-metadata text-on-surface-variant">Styling</span>
                </li>
              </ul>
            </div>
            
            {/* Database */}
            <div className="flex flex-col gap-6">
              <h3 className="text-headline-md uppercase text-on-surface">Database</h3>
              <ul className="flex flex-col border-t border-outline/20">
                <li className="py-4 border-b border-outline/20 flex justify-between items-baseline">
                  <span className="text-headline-md text-[24px] uppercase tracking-wide">PostgreSQL</span>
                  <span className="text-mono-metadata text-on-surface-variant">Relational</span>
                </li>
                <li className="py-4 border-b border-outline/20 flex justify-between items-baseline">
                  <span className="text-headline-md text-[24px] uppercase tracking-wide">MongoDB</span>
                  <span className="text-mono-metadata text-on-surface-variant">NoSQL</span>
                </li>
                <li className="py-4 border-b border-outline/20 flex justify-between items-baseline">
                  <span className="text-headline-md text-[24px] uppercase tracking-wide">Redis</span>
                  <span className="text-mono-metadata text-on-surface-variant">Cache</span>
                </li>
              </ul>
            </div>
            
            {/* Design / UI */}
            <div className="flex flex-col gap-6">
              <h3 className="text-headline-md uppercase text-on-surface">Design / UI</h3>
              <ul className="flex flex-col border-t border-outline/20">
                <li className="py-4 border-b border-outline/20 flex justify-between items-baseline">
                  <span className="text-headline-md text-[24px] uppercase tracking-wide">Figma</span>
                  <span className="text-mono-metadata text-on-surface-variant">Prototyping</span>
                </li>
                <li className="py-4 border-b border-outline/20 flex justify-between items-baseline">
                  <span className="text-headline-md text-[24px] uppercase tracking-wide">Framer Motion</span>
                  <span className="text-mono-metadata text-on-surface-variant">Animation</span>
                </li>
                <li className="py-4 border-b border-outline/20 flex justify-between items-baseline">
                  <span className="text-headline-md text-[24px] uppercase tracking-wide">Three.js</span>
                  <span className="text-mono-metadata text-on-surface-variant">WebGL</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-secondary-container text-on-secondary-container py-32 px-margin-edge-mobile lg:px-margin-edge relative overflow-hidden group">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNHYtNGgtMnY0aC00djJoNHY0aDJ2LTRoNHYtMmgtNHptMC0zMFYwaC0ydjRoLTR2Mmg0djRoMnYtNGg0VjRoLTR6bS0yMCAwaC00djRIMHYyaDEydjRoMnYtNGg0VjRoLThWMHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvZz48L3N2Zz4=')" }}></div>
        <div className="max-w-container-max mx-auto relative z-10 text-center">
          <blockquote className="text-display-hero-mobile lg:text-display-hero uppercase leading-[0.9] tracking-tighter mix-blend-overlay opacity-90">
            "I don't just want to write code. <br className="hidden lg:block"/>I want to build experiences <br className="hidden lg:block"/>that people remember."
          </blockquote>
        </div>
      </div>

      <div className="w-full px-margin-edge-mobile lg:px-margin-edge py-section-gap relative">
        <div className="max-w-container-max mx-auto">
          <div className="flex flex-col gap-4 mb-24">
            <h2 className="text-headline-lg-mobile lg:text-headline-lg uppercase text-on-surface leading-none tracking-tighter">
              Method<br/>
              <span className="text-secondary-container">_</span>
            </h2>
          </div>
          
          <div className="relative flex flex-col gap-12 lg:gap-24">
            <div className="absolute left-[28px] lg:left-[50%] top-0 bottom-0 w-[1px] bg-outline/10 -translate-x-1/2"></div>
            <div ref={timelineRef} className="absolute left-[28px] lg:left-[50%] top-0 h-0 w-[2px] bg-secondary-container -translate-x-1/2 transition-all duration-1000 ease-out"></div>
            
            {processSteps.map((step) => (
              <div key={step.id} className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between process-group group">
                {step.rightAlign ? (
                  <>
                    <div className="w-full lg:w-[calc(50%-40px)] pl-16 lg:pl-0 flex flex-col gap-2 lg:text-right lg:items-end lg:pr-10 lg:pl-0">
                      <div className="text-label-caps text-secondary-container uppercase">{step.id}</div>
                      <h3 className="text-headline-md uppercase text-on-surface tracking-wide">{step.title}</h3>
                      <p className="text-body-md text-on-surface-variant max-w-md lg:hidden mt-2">{step.description}</p>
                    </div>
                    <div className="absolute left-[28px] lg:left-[50%] w-[16px] h-[16px] bg-surface border border-secondary-container rounded-full -translate-x-1/2 mt-2 lg:mt-0 z-10 group-hover:bg-secondary-container transition-colors duration-300"></div>
                    <div className="hidden lg:flex w-[calc(50%-40px)] justify-start text-left pl-10">
                      <div className="text-mono-metadata text-on-surface-variant uppercase tracking-widest mt-2">{step.leftLabel}</div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="hidden lg:flex w-[calc(50%-40px)] justify-end text-right pr-10">
                      <div className="text-mono-metadata text-on-surface-variant uppercase tracking-widest mt-2">{step.leftLabel}</div>
                    </div>
                    <div className="absolute left-[28px] lg:left-[50%] w-[16px] h-[16px] bg-surface border border-secondary-container rounded-full -translate-x-1/2 mt-2 lg:mt-0 z-10 group-hover:bg-secondary-container transition-colors duration-300"></div>
                    <div className="w-full lg:w-[calc(50%-40px)] pl-16 lg:pl-10 flex flex-col gap-2">
                      <div className="text-label-caps text-secondary-container uppercase">{step.id}</div>
                      <h3 className="text-headline-md uppercase text-on-surface tracking-wide">{step.title}</h3>
                      <p className="text-body-md text-on-surface-variant max-w-md lg:hidden mt-2">{step.description}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
