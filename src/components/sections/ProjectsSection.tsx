import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: string; num: string; title: string;
  category: string; description: string;
  tags: string[]; url: string; image: string;
}

const PROJECTS: Project[] = [
  { id:"silver-arrow", num:"01", title:"Silver Arrow Rentals",
    category:"Luxury Automotive · UAE",
    description:"Premium car rental in the UAE — luxury, exotic & everyday vehicles with free delivery, zero hidden charges, and white-glove concierge service.",
    tags:["HTML/CSS","GSAP","Lenis"], url:"https://silverarrow-rentals.vercel.app/", image:"/projects/silver_arrow.jpg" },
  { id:"tce", num:"02", title:"TCE — The Crazy Entrepreneur",
    category:"Influencer Marketing · India",
    description:"India's premier influencer marketing agency connecting ambitious brands with 1M+ creators across Instagram, YouTube & TikTok for campaigns that deliver real ROI.",
    tags:["HTML/CSS","JS","Lenis"], url:"https://tce-the-crazy-entrepreneur.vercel.app/", image:"/projects/tce.jpg" },
  { id:"tce-sf", num:"03", title:"TCE San Francisco",
    category:"Influencer Marketing · USA",
    description:"San Francisco's top influencer marketing agency — 500+ campaigns, 160+ markets, connecting brands with the creator economy from the Bay Area.",
    tags:["HTML/CSS","JS","SEO"], url:"https://tcesanfrancisco.vercel.app/", image:"/projects/tce_sf.jpg" },
  { id:"elite-arch", num:"04", title:"Elite Architectural Estates",
    category:"Luxury Real Estate · Dubai",
    description:"Curating the world's most exceptional properties — an ultra-luxury real estate platform with cinematic property showcases and exclusive listings.",
    tags:["React","Tailwind","Three.js"], url:"https://axtraittest.vercel.app/", image:"/projects/axtrait1.jpg" },
  { id:"elite-dubai", num:"05", title:"Elite Real Estate Dubai",
    category:"Luxury Real Estate · Dubai",
    description:"Dubai's most prestigious luxury property agency — buy, rent and invest in elite properties across the UAE with an editorial-grade experience.",
    tags:["React","Vite","GSAP"], url:"https://axtrait-test2.vercel.app/", image:"/projects/axtrait2.jpg" },
  { id:"axtrait", num:"06", title:"AXTRAIT Digital Agency",
    category:"Digital Growth · Web Dev",
    description:"A digital growth agency specializing in web development, lead generation, and app development — helping brands scale through bold digital experiences.",
    tags:["HTML/CSS","JS","Lenis"], url:"https://axtrait-two.vercel.app/", image:"/projects/axtrait_two.jpg" },
  { id:"monster", num:"07", title:"Monster Energy Ultra",
    category:"Brand Experience · FMCG",
    description:"Cinematic brand experience for Monster Energy Ultra — zero sugar, full force. An immersive scroll-driven product reveal with dramatic visual storytelling.",
    tags:["HTML/CSS","GSAP","Canvas"], url:"https://monster-ultra-eight.vercel.app/", image:"/projects/monster.jpg" },
  { id:"cozyy", num:"08", title:"Cozyy — Find Your Perfect Stay",
    category:"Travel & Hospitality",
    description:"Discover breathtaking handpicked stays worldwide — from mountain chalets to tropical villas. A premium travel booking discovery platform.",
    tags:["HTML/CSS","Lenis","JS"], url:"https://axtrait-test4.vercel.app/", image:"/projects/cozyy.jpg" },
  { id:"transcend", num:"09", title:"Transcend Healthcare Dubai",
    category:"Luxury Healthcare · Dubai",
    description:"Premium concierge-led care for longevity, wellness, and recovery — designing every step of your health journey with clarity, privacy, and purpose.",
    tags:["HTML/CSS","Swiper","JS"], url:"https://transcend1.vercel.app/", image:"/projects/transcend.jpg" },
];

const N = PROJECTS.length;

export function ProjectsSection() {
  const sectionRef  = useRef<HTMLElement>(null);
  const trackRef    = useRef<HTMLDivElement>(null);
  const cursorRef   = useRef<HTMLDivElement>(null);
  const counterRef  = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [hovered, setHovered]   = useState(false);
  const progressRef = useRef(0);

  /* ── GSAP horizontal scroll ─────────────────────────────── */
  useEffect(() => {
    const section = sectionRef.current;
    const track   = trackRef.current;
    if (!section || !track) return;

    const getTravel = () => -(N - 1) * window.innerWidth;

    const st = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: () => `+=${(N - 1) * window.innerHeight}`,
      pin: true,
      anticipatePin: 1,
      scrub: 1,
      invalidateOnRefresh: true,
      onUpdate(self) {
        progressRef.current = self.progress;
        gsap.set(track, { x: self.progress * getTravel() });
        const idx = Math.round(self.progress * (N - 1));
        if (counterRef.current)
          counterRef.current.textContent = `${String(idx+1).padStart(2,"0")} / ${String(N).padStart(2,"0")}`;
        // close detail panel when scrolling changes slide
        setActiveId(null);
      },
    });

    return () => { st.kill(); };
  }, []);

  /* ── Custom cursor ──────────────────────────────────────── */
  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cursorRef.current) return;
    cursorRef.current.style.transform =
      `translate(${e.clientX}px, ${e.clientY}px)`;
  }, []);

  /* ── Click logic ────────────────────────────────────────── */
  const handleSlideClick = (id: string, url: string) => {
    if (activeId === id) {
      // Second click → redirect
      window.open(url, "_blank", "noopener");
      setActiveId(null);
    } else {
      // First click → reveal details
      setActiveId(id);
    }
  };

  return (
    <>
      <style>{`
        /* ──── Section & track ──── */
        #projects { cursor: none !important; }
        #projects * { cursor: none !important; }

        /* ──── Custom circular cursor ──── */
        .sw-cursor {
          position: fixed;
          top: 0; left: 0;
          width: 72px; height: 72px;
          border-radius: 50%;
          background: #cc0000;
          color: #fff;
          font-family: 'Inter', sans-serif;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          z-index: 99999;
          margin-left: -36px;
          margin-top: -36px;
          opacity: 0;
          scale: 0.5;
          transition: opacity 0.25s ease, scale 0.25s ease, background 0.2s ease;
          will-change: transform;
          text-align: center;
          line-height: 1.2;
        }
        .sw-cursor.visible { opacity: 1; scale: 1; }
        .sw-cursor.active  { background: #ff1a1a; }

        /* ──── Each slide ──── */
        .sw-slide {
          position: relative;
          flex-shrink: 0;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          background: #000;
        }

        /* ──── Image: grayscale by default ──── */
        .sw-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          display: block;
          filter: grayscale(1) brightness(0.75);
          transition: filter 0.65s cubic-bezier(0.25,0.46,0.45,0.94),
                      transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94);
          will-change: filter, transform;
        }
        /* hover: color returns */
        .sw-slide:hover .sw-img,
        .sw-slide.active .sw-img {
          filter: grayscale(0) brightness(0.6);
          transform: scale(1.04);
        }

        /* ──── Always-on gradient ──── */
        .sw-grad {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.88) 0%,
            rgba(0,0,0,0.25) 55%,
            rgba(0,0,0,0.1) 100%
          );
          pointer-events: none;
          z-index: 1;
        }

        /* ──── Big number watermark ──── */
        .sw-num {
          position: absolute;
          top: clamp(1rem,3vh,2.5rem);
          right: clamp(1.5rem,4vw,4rem);
          font-family: 'Anton', sans-serif;
          font-size: clamp(4rem,10vw,10rem);
          font-weight: 900;
          line-height: 1;
          letter-spacing: -0.04em;
          color: rgba(204,0,0,0.12);
          pointer-events: none;
          user-select: none;
          z-index: 2;
          transition: color 0.4s ease;
        }
        .sw-slide:hover .sw-num,
        .sw-slide.active .sw-num { color: rgba(204,0,0,0.5); }

        /* ──── Bottom content ──── */
        .sw-content {
          position: absolute;
          bottom: clamp(2rem,5vh,4.5rem);
          left: clamp(1.5rem,5vw,5rem);
          right: clamp(1.5rem,5vw,5rem);
          z-index: 3;
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
        }

        .sw-cat {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.6rem,0.85vw,0.75rem);
          letter-spacing: 0.2em;
          color: rgba(255,255,255,0.4);
          text-transform: uppercase;
        }

        .sw-title {
          font-family: 'Anton', sans-serif;
          font-size: clamp(1.8rem,4.5vw,5.5rem);
          font-weight: 900;
          color: #fff;
          letter-spacing: -0.02em;
          line-height: 1;
          text-transform: uppercase;
          margin: 0;
        }

        /* ──── Reveal panel (click-triggered) ──── */
        .sw-reveal {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transform: translateY(12px);
          transition:
            max-height 0.5s cubic-bezier(0.25,0.46,0.45,0.94),
            opacity 0.4s ease 0.1s,
            transform 0.4s ease 0.1s;
        }
        .sw-slide.active .sw-reveal {
          max-height: 300px;
          opacity: 1;
          transform: translateY(0);
        }

        .sw-desc {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.8rem,1.1vw,1rem);
          color: rgba(255,255,255,0.65);
          line-height: 1.65;
          max-width: 560px;
        }

        .sw-tags {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }
        .sw-tag {
          padding: 4px 12px;
          border: 1px solid rgba(255,255,255,0.18);
          background: rgba(255,255,255,0.07);
          backdrop-filter: blur(8px);
          font-family: 'Inter', sans-serif;
          font-size: 10px;
          letter-spacing: 0.1em;
          color: rgba(255,255,255,0.55);
          text-transform: uppercase;
        }

        .sw-hint {
          font-family: 'Inter', sans-serif;
          font-size: 10px;
          letter-spacing: 0.12em;
          color: rgba(204,0,0,0.7);
          text-transform: uppercase;
        }

        /* ──── Counter HUD ──── */
        .sw-counter {
          position: absolute;
          bottom: clamp(2rem,5vh,4.5rem);
          right: clamp(1.5rem,4vw,4rem);
          font-family: 'Inter', monospace;
          font-size: 11px;
          letter-spacing: 0.12em;
          color: rgba(255,255,255,0.2);
          z-index: 3;
          pointer-events: none;
        }

        /* ──── Section label ──── */
        .sw-label {
          position: absolute;
          top: clamp(1.5rem,4vh,3rem);
          left: clamp(1.5rem,5vw,5rem);
          z-index: 3;
          pointer-events: none;
        }
      `}</style>

      {/* ── Custom cursor (fixed, outside section) ── */}
      <div
        ref={cursorRef}
        className={`sw-cursor${hovered ? " visible" : ""}${activeId ? " active" : ""}`}
      >
        {activeId ? "OPEN\n↗" : "CLICK"}
      </div>

      <section
        ref={sectionRef}
        id="projects"
        style={{ position:"relative", width:"100vw", height:"100vh", overflow:"hidden", background:"#000" }}
        onMouseMove={onMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { setHovered(false); }}
      >
        {/* Section label */}
        <div className="sw-label">
          <p style={{ fontFamily:"'Inter',sans-serif", fontSize:"10px", letterSpacing:"0.2em", color:"rgba(255,255,255,0.3)", textTransform:"uppercase", marginBottom:"4px" }}>
            Selected Works
          </p>
          <div style={{ width:32, height:1, background:"#cc0000" }} />
        </div>

        {/* Counter */}
        <div className="sw-counter" ref={counterRef}>01 / 09</div>

        {/* ── Track ── */}
        <div
          ref={trackRef}
          style={{
            display: "flex",
            width: `${N * 100}vw`,
            height: "100vh",
            willChange: "transform",
          }}
        >
          {PROJECTS.map((p) => {
            const isActive = activeId === p.id;
            return (
              <div
                key={p.id}
                className={`sw-slide${isActive ? " active" : ""}`}
                onClick={() => handleSlideClick(p.id, p.url)}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="sw-img"
                  draggable={false}
                />
                <div className="sw-grad" />
                <div className="sw-num">{p.num}</div>

                <div className="sw-content">
                  <div className="sw-cat">{p.category}</div>
                  <h3 className="sw-title">{p.title}</h3>

                  {/* Click-revealed details */}
                  <div className="sw-reveal">
                    <p className="sw-desc">{p.description}</p>
                    <div className="sw-tags">
                      {p.tags.map(t => <span key={t} className="sw-tag">{t}</span>)}
                    </div>
                    <p className="sw-hint">↑ Click again to visit live site</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
