import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 300;
const FRAME_DIR = "/ezgif-8ee1c28d66cf5af3-jpg/";
const pad = (n: number) => String(n).padStart(3, "0");

// Text overlays: [startFrame, endFrame, leftText, rightText]
const TEXT_BEATS: [number, number, string, string][] = [
  [0,   60,  "VISION",       "DRIVEN"],
  [60,  120, "CREATIVE",     "FORCE"],
  [120, 180, "BUILT TO",     "INSPIRE"],
  [180, 240, "CODE",         "CULTURE"],
  [240, 300, "UZI",          "PORTFOLIO"],
];

export function ScrollHeroSection() {
  const wrapperRef   = useRef<HTMLDivElement>(null);
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const loaderRef    = useRef<HTMLDivElement>(null);
  const loaderBarRef = useRef<HTMLDivElement>(null);
  const loaderPctRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const hintRef      = useRef<HTMLDivElement>(null);
  const counterRef   = useRef<HTMLDivElement>(null);
  const leftTextRef  = useRef<HTMLDivElement>(null);
  const rightTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx    = canvas.getContext("2d")!;
    let currentFrame = 0;
    let currentBeat  = -1;
    const imgs: HTMLImageElement[] = [];

    function resize() {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      draw(currentFrame);
    }

    function draw(i: number) {
      const img = imgs[i];
      if (!img || !img.complete || !img.naturalWidth) return;
      const cw = canvas.width, ch = canvas.height;
      const iw = img.naturalWidth, ih = img.naturalHeight;
      const s  = Math.max(cw / iw, ch / ih);
      const sw = iw * s, sh = ih * s;
      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, (cw - sw) / 2, (ch - sh) / 2, sw, sh);
      if (counterRef.current)
        counterRef.current.textContent = pad(i + 1) + " / " + TOTAL_FRAMES;
    }

    function updateText(frame: number) {
      const beat = TEXT_BEATS.findIndex(([s, e]) => frame >= s && frame < e);
      if (beat === currentBeat) return;
      currentBeat = beat;

      const left  = leftTextRef.current;
      const right = rightTextRef.current;
      if (!left || !right) return;

      if (beat === -1) {
        gsap.to([left, right], { opacity: 0, duration: 0.3, ease: "power2.out" });
        return;
      }
      const [, , l, r] = TEXT_BEATS[beat];

      // Animate out then in with new words
      gsap.timeline()
        .to([left, right], { opacity: 0, y: 20, duration: 0.2, ease: "power2.in" })
        .call(() => {
          left.textContent  = l;
          right.textContent = r;
        })
        .to([left, right], { opacity: 1, y: 0, duration: 0.35, ease: "power3.out" });
    }

    function preload(): Promise<void> {
      return new Promise((resolve) => {
        let done = 0;
        for (let i = 0; i < TOTAL_FRAMES; i++) {
          const img = new Image();
          img.src = FRAME_DIR + "ezgif-frame-" + pad(i + 1) + ".jpg";
          img.onload = img.onerror = () => {
            done++;
            const p = Math.round((done / TOTAL_FRAMES) * 100);
            if (loaderBarRef.current) loaderBarRef.current.style.width = p + "%";
            if (loaderPctRef.current) loaderPctRef.current.textContent = p + "%";
            if (done === TOTAL_FRAMES) resolve();
          };
          imgs[i] = img;
        }
      });
    }

    preload().then(() => {
      if (loaderRef.current) {
        loaderRef.current.style.opacity = "0";
        setTimeout(() => {
          if (loaderRef.current) loaderRef.current.style.display = "none";
        }, 700);
      }

      resize();
      window.addEventListener("resize", resize);
      draw(0);
      updateText(0);

      const obj = { frame: 0 };
      gsap.to(obj, {
        frame: TOTAL_FRAMES - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
          onUpdate(self) {
            const f = Math.round(obj.frame);
            if (f !== currentFrame) {
              currentFrame = f;
              draw(currentFrame);
              updateText(currentFrame);
            }
            if (progressBarRef.current)
              progressBarRef.current.style.width = (self.progress * 100) + "%";
            if (hintRef.current)
              hintRef.current.style.opacity = self.progress > 0.04 ? "0" : "1";
          },
        },
      });
    });

    return () => {
      window.removeEventListener("resize", resize);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <>
      {/* ── Loading overlay ── */}
      <div
        ref={loaderRef}
        style={{
          position: "fixed", inset: 0, background: "#000", zIndex: 9999,
          display: "flex", flexDirection: "column", alignItems: "center",
          justifyContent: "center", gap: "1.5rem", transition: "opacity 0.6s ease",
        }}
      >
        <div ref={loaderPctRef} style={{ color: "rgba(255,255,255,.75)", fontSize: "2rem", fontWeight: 900, letterSpacing: "-0.02em" }}>0%</div>
        <div style={{ width: 240, height: 2, background: "rgba(255,255,255,.08)", borderRadius: 2, overflow: "hidden" }}>
          <div ref={loaderBarRef} style={{ height: "100%", width: "0%", background: "linear-gradient(90deg,#cc0000,#ff4444)", borderRadius: 2, boxShadow: "0 0 8px rgba(204,0,0,.6)", transition: "width .08s linear" }} />
        </div>
        <div style={{ color: "rgba(255,255,255,.3)", fontSize: ".7rem", letterSpacing: ".25em", textTransform: "uppercase" }}>Loading frames</div>
      </div>

      {/* ── Top progress bar ── */}
      <div ref={progressBarRef} style={{ position: "fixed", top: 0, left: 0, height: 2, width: "0%", background: "linear-gradient(90deg,#cc0000,#ff4444)", zIndex: 1001, boxShadow: "0 0 8px rgba(204,0,0,.7)", transition: "width .05s linear" }} />

      {/* ── Canvas scroll section ── */}
      <div ref={wrapperRef} id="home" style={{ position: "relative", height: "600vh" }}>
        <div style={{ position: "sticky", top: 0, left: 0, width: "100%", height: "100dvh", overflow: "hidden" }}>
          {/* Canvas — true full-bleed, sits behind everything */}
          <canvas
            ref={canvasRef}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }}
          />

          {/* ── Left overlay text ── */}
          <div
            ref={leftTextRef}
            style={{
              position: "absolute",
              left: "clamp(16px, 4vw, 60px)",
              top: "50%",
              transform: "translateY(-50%)",
              fontFamily: "'Anton', sans-serif",
              fontSize: "clamp(3rem, 7vw, 7rem)",
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: "-0.02em",
              color: "#fff",
              textTransform: "uppercase",
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              rotate: "180deg",
              opacity: 0,
              mixBlendMode: "difference",
              pointerEvents: "none",
              userSelect: "none",
              zIndex: 10,
              textShadow: "0 0 40px rgba(204,0,0,0.4)",
            }}
          />

          {/* ── Right overlay text ── */}
          <div
            ref={rightTextRef}
            style={{
              position: "absolute",
              right: "clamp(16px, 4vw, 60px)",
              top: "50%",
              transform: "translateY(-50%)",
              fontFamily: "'Anton', sans-serif",
              fontSize: "clamp(3rem, 7vw, 7rem)",
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: "-0.02em",
              color: "#fff",
              textTransform: "uppercase",
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              opacity: 0,
              mixBlendMode: "difference",
              pointerEvents: "none",
              userSelect: "none",
              zIndex: 10,
              textShadow: "0 0 40px rgba(204,0,0,0.4)",
            }}
          />
        </div>
      </div>

      {/* ── Scroll hint ── */}
      <div
        ref={hintRef}
        style={{
          position: "fixed", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: ".5rem",
          zIndex: 50, transition: "opacity .5s ease", pointerEvents: "none",
        }}
      >
        <span style={{ color: "rgba(255,255,255,.55)", fontSize: ".7rem", letterSpacing: ".2em", textTransform: "uppercase" }}>Scroll</span>
        <div style={{ width: 1, height: 48, background: "linear-gradient(to bottom, rgba(204,0,0,.8), transparent)", animation: "arrowDrop 1.4s ease-in-out infinite" }} />
      </div>

      {/* ── Frame counter ── */}
      <div ref={counterRef} style={{ position: "fixed", bottom: "2rem", right: "2rem", fontFamily: "monospace", fontSize: ".65rem", letterSpacing: ".1em", color: "rgba(255,255,255,.15)", zIndex: 50, pointerEvents: "none" }}>
        001 / 300
      </div>

      <style>{`
        @keyframes arrowDrop {
          0%   { transform: scaleY(0); transform-origin: top; opacity: 0; }
          50%  { transform: scaleY(1); transform-origin: top; opacity: 1; }
          100% { transform: scaleY(1); transform-origin: bottom; opacity: 0; }
        }
      `}</style>
    </>
  );
}
