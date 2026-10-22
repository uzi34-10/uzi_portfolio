import { ArrowRight, MapPin } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="pt-section-gap bg-background">
      <div className="flex flex-col w-full bg-background text-on-background relative overflow-hidden">
        <div 
          className="absolute inset-0 pointer-events-none opacity-20" 
          style={{ backgroundImage: "radial-gradient(circle at 10% 20%, rgba(211, 16, 39, 0.15) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 40%)" }}
        ></div>
        
        <div className="px-margin-edge-mobile md:px-margin-edge pt-24 pb-12 flex flex-col gap-6 relative z-10">
          <h1 className="text-headline-lg-mobile md:text-headline-lg uppercase text-on-background leading-none tracking-tighter max-w-[12ch]">
            LET'S<br/>BUILD<br/>SOMETHING.
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mt-4 border-l-2 border-secondary-container pl-6 py-2">
            I'm currently exploring internships, collaborations, freelance opportunities and interesting technical projects.
          </p>
        </div>

        <div className="px-margin-edge-mobile md:px-margin-edge py-16 grid grid-cols-1 md:grid-cols-12 gap-gutter relative z-10">
          <div className="md:col-span-8 flex flex-col gap-0 border-y border-outline/20">
            <a href="mailto:uzair.momin2014@gmail.com" className="group flex items-center justify-between py-8 px-4 border-b border-outline/20 hover:bg-surface-container transition-colors duration-300">
              <div className="flex flex-col gap-1">
                <span className="text-label-caps text-secondary-container tracking-[0.15em]">01 // EMAIL</span>
                <span className="text-headline-md text-on-background group-hover:text-primary transition-colors">uzair.momin2014@gmail.com</span>
              </div>
              <ArrowRight className="w-10 h-10 text-outline-variant group-hover:text-secondary-container transform group-hover:translate-x-2 transition-all duration-300" />
            </a>
            <a href="https://github.com/uzi34-10" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between py-8 px-4 border-b border-outline/20 hover:bg-surface-container transition-colors duration-300">
              <div className="flex flex-col gap-1">
                <span className="text-label-caps text-secondary-container tracking-[0.15em]">02 // GITHUB</span>
                <span className="text-headline-md text-on-background group-hover:text-primary transition-colors">github.com/uzi34-10</span>
              </div>
              <ArrowRight className="w-10 h-10 text-outline-variant group-hover:text-secondary-container transform group-hover:translate-x-2 transition-all duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/uzair-momin-64b125389/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between py-8 px-4 hover:bg-surface-container transition-colors duration-300">
              <div className="flex flex-col gap-1">
                <span className="text-label-caps text-secondary-container tracking-[0.15em]">03 // LINKEDIN</span>
                <span className="text-headline-md text-on-background group-hover:text-primary transition-colors">linkedin.com/in/uzair-momin-64b125389</span>
              </div>
              <ArrowRight className="w-10 h-10 text-outline-variant group-hover:text-secondary-container transform group-hover:translate-x-2 transition-all duration-300" />
            </a>
          </div>
          
          <div className="md:col-span-4 mt-12 md:mt-0 flex flex-col justify-end">
            <div className="bg-surface-container p-6 border border-outline/10 flex flex-col gap-4 relative overflow-hidden group">
              <div className="absolute inset-0 bg-secondary-container translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] z-0"></div>
              <div className="relative z-10 flex flex-col gap-4 group-hover:text-on-secondary-container transition-colors duration-300">
                <MapPin className="w-8 h-8" />
                <div className="flex flex-col">
                  <span className="text-label-caps opacity-70">LOCATION</span>
                  <span className="text-body-lg font-bold">Mumbai, India</span>
                </div>
                <p className="text-mono-metadata opacity-80 mt-2">
                  Available for remote work worldwide. Based in IST (UTC+5:30).
                </p>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-auto px-margin-edge-mobile md:px-margin-edge py-8 border-t border-outline/20 bg-surface-container-lowest flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-8">
            <span className="text-label-caps text-on-surface-variant tracking-[0.2em]">UZI — COMPUTER ENGINEERING</span>
          </div>
          <span className="text-mono-metadata text-outline">© 2026</span>
        </footer>
      </div>
    </section>
  );
}
