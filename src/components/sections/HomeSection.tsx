import { ShaderBackground } from '../ShaderBackground';
import { ThreeWireframe } from '../ThreeWireframe';

export function HomeSection() {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden flex flex-col justify-center bg-background text-on-background">
      <div className="absolute inset-0 z-0 opacity-50">
        <ShaderBackground className="w-full h-full" />
      </div>
      
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10 pointer-events-none select-none overflow-hidden">
        <h1 
          className="text-[200px] md:text-[300px] lg:text-[400px] font-headline-lg text-[#D31027] tracking-tighter opacity-15" 
          style={{ whiteSpace: 'nowrap' }}
        >
          DEVELOPER
        </h1>
      </div>
      
      <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-edge-mobile md:px-margin-edge flex flex-col md:flex-row items-center justify-between gap-12 pt-20">
        <div className="flex-1 flex flex-col items-start max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></div>
            <span className="text-label-caps text-on-surface-variant tracking-[0.2em]">OPEN TO INTERNSHIPS / COLLABORATIONS</span>
          </div>
          
          <h2 className="text-headline-lg-mobile md:text-headline-lg text-on-surface leading-[0.95] mb-6 tracking-tighter">
            HELLO, I'M UZI.<br/>
            <span className="text-secondary-container">COMPUTER ENGINEERING STUDENT</span><br/> & DEVELOPER.
          </h2>
          
          <p className="text-body-lg text-on-surface-variant max-w-lg mb-10 border-l border-secondary-container pl-4 ml-[2px]">
            Third-year Diploma Computer Engineering student building modern interfaces, applications, databases and interactive digital experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="#projects" className="group relative inline-flex items-center justify-center h-14 px-8 bg-secondary-container text-white text-label-caps tracking-widest overflow-hidden transition-colors hover:bg-secondary-fixed-variant">
              <span className="relative z-10">VIEW WORK</span>
              <div className="absolute inset-0 h-full w-0 bg-white/20 transition-all duration-300 ease-out group-hover:w-full"></div>
            </a>
            <a href="#contact" className="group relative inline-flex items-center justify-center h-14 px-8 bg-transparent text-on-surface border border-outline-variant text-label-caps tracking-widest transition-colors hover:border-secondary-container hover:text-secondary-container">
              <span>CONTACT</span>
            </a>
          </div>
        </div>
        
        <div className="flex-1 relative w-full max-w-md aspect-[0.67] flex justify-center items-center">
          <div className="absolute inset-0 z-0 -translate-x-4 -translate-y-4">
            <ThreeWireframe className="w-full h-full opacity-60" />
          </div>
          
          <div className="relative z-10 w-full h-full p-2 bg-surface-container border border-outline-variant">
            <img 
              alt="Uzi Portrait" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMRhxFMBkJvnWcWPgcRahSVvEQjYgQBJPnoytZtCEgn9aekob-pDd01l-_f-5PGH6X3oTygarvosD8wyDy8aUJzD1XvwoZIWo-5EI4ws3_4qGfPFf1LuqnWiSwOFeENlpexljDVBrhkIsOOyO4gh1zT5JRVjmqKs3x_WSmqb8dOO3OnTItiagyJovM5GMUJbwBKSlUrMi5gQnrbsCkXx13qSdRaC-I6uywTNamu9wwZ8BHZUGHwa0h" 
            />
            <div className="absolute bottom-6 right-6 text-mono-metadata text-secondary-container bg-surface-container-high px-3 py-1 border border-outline-variant/50">
              VS_0.1 // INIT
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-margin-edge-mobile md:left-margin-edge flex flex-col items-center gap-4 z-20">
        <span className="text-label-caps text-[10px] text-on-surface-variant tracking-[0.2em] transform -rotate-90 origin-bottom-left absolute bottom-16 left-2 whitespace-nowrap">
          SCROLL TO EXPLORE
        </span>
        <div className="w-[1px] h-24 bg-outline-variant relative overflow-hidden mt-24">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-secondary-container animate-[scroll-down_2s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </section>
  );
}
