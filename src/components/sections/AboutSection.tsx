export function AboutSection() {
  return (
    <section id="about" className="pt-section-gap pb-12 bg-background">
      {/* Hero Section */}
      <div className="px-margin-edge-mobile md:px-margin-edge pb-12">
        <h1 className="text-headline-lg-mobile uppercase text-on-background max-w-[90vw] leading-[0.95] tracking-tighter">
          BUILDING WITH CODE.<br/>
          <span className="text-secondary-container">DESIGNING WITH INTENT.</span>
        </h1>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-outline-variant opacity-30 my-4"></div>

      {/* Bio Section */}
      <div className="px-margin-edge-mobile md:px-margin-edge py-8">
        <p className="text-body-lg text-on-surface-variant max-w-prose leading-relaxed">
          I am a third-year Diploma Computer Engineering student developing my skills across software development, databases, web technologies, UI/UX, Android development and interactive experiences. I enjoy taking ideas from concept to working product and experimenting with modern tools and AI-assisted development.
        </p>
        
        <div className="mt-8 flex flex-wrap gap-3">
          <div className="border border-outline px-4 py-2 text-label-caps text-on-surface">TECHNOLOGY</div>
          <div className="border border-outline px-4 py-2 text-label-caps text-on-surface">DESIGN</div>
          <div className="border border-outline px-4 py-2 text-label-caps text-on-surface">INTERACTION</div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-outline-variant opacity-30 my-4 relative">
        <div className="absolute left-margin-edge-mobile md:left-margin-edge top-0 w-12 h-px bg-secondary-container"></div>
      </div>

      {/* Education Section */}
      <div className="px-margin-edge-mobile md:px-margin-edge py-12">
        <h2 className="text-headline-md uppercase text-on-background mb-8">EDUCATION</h2>
        
        <div className="flex flex-col gap-2 mb-6">
          <h3 className="text-headline-md text-[24px] uppercase text-on-surface">DIPLOMA IN COMPUTER ENGINEERING</h3>
          <p className="text-mono-metadata text-secondary-container tracking-wider">VIDYALANKAR POLYTECHNIC, WADALA // 3RD YEAR</p>
        </div>
        
        <div className="mt-8 border-t border-outline-variant/30">
          {[
            { name: 'Data Structures', num: '01' },
            { name: 'OOP', num: '02' },
            { name: 'DBMS', num: '03' },
            { name: 'Java', num: '04' },
            { name: 'Web Development', num: '05' },
            { name: 'Application Dev', num: '06' },
          ].map((item) => (
            <div key={item.num} className="py-4 border-b border-outline-variant/30 flex justify-between items-center group transition-colors">
              <span className="text-headline-md text-[20px] text-on-surface group-hover:text-secondary-container transition-colors uppercase">{item.name}</span>
              <span className="text-mono-metadata text-outline">{item.num}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
