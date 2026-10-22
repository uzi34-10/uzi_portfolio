import { useEffect, useRef } from "react";

const NAV_ITEMS = [
  { id: "home",     label: "HOME" },
  { id: "about",    label: "ABOUT" },
  { id: "projects", label: "PROJECTS" },
  { id: "skills",   label: "SKILLS" },
  { id: "contact",  label: "CONTACT" },
];

export function Header({ activeSection }: { activeSection: string }) {
  const navRef = useRef<HTMLElement>(null);

  // Subtle hide-on-scroll-down, show-on-scroll-up
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const currentY = window.scrollY;
      const nav = navRef.current;
      if (!nav) return;
      // Always show at very top
      if (currentY < 80) {
        nav.style.transform = "translateX(-50%) translateY(0)";
        nav.style.opacity = "1";
      } else if (currentY > lastY) {
        // scrolling down – hide
        nav.style.transform = "translateX(-50%) translateY(-120%)";
        nav.style.opacity = "0";
      } else {
        // scrolling up – show
        nav.style.transform = "translateX(-50%) translateY(0)";
        nav.style.opacity = "1";
      }
      lastY = currentY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        .glass-nav {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1000;
          display: flex;
          align-items: center;
          gap: 2px;
          padding: 6px 8px;
          border-radius: 100px;
          background: rgba(10, 10, 10, 0.45);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow:
            0 8px 32px rgba(0, 0, 0, 0.6),
            0 0 0 0.5px rgba(255,255,255,0.04) inset,
            0 1px 0 rgba(255,255,255,0.06) inset;
          transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1),
                      opacity 0.4s ease;
        }

        .glass-nav-link {
          position: relative;
          padding: 8px 16px;
          border-radius: 100px;
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.55);
          text-decoration: none;
          transition: color 0.25s ease;
          white-space: nowrap;
        }

        .glass-nav-link::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 100px;
          background: rgba(255, 255, 255, 0.06);
          opacity: 0;
          transition: opacity 0.25s ease;
        }

        .glass-nav-link:hover { color: rgba(255,255,255,0.9); }
        .glass-nav-link:hover::before { opacity: 1; }

        .glass-nav-link.active {
          color: #fff;
          background: rgba(211, 16, 39, 0.85);
          box-shadow:
            0 2px 12px rgba(211, 16, 39, 0.45),
            0 1px 0 rgba(255,255,255,0.12) inset;
        }
        .glass-nav-link.active::before { display: none; }
      `}</style>

      <nav ref={navRef} className="glass-nav">
        {NAV_ITEMS.map(({ id, label }) => {
          const isActive = activeSection.toLowerCase() === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              className={`glass-nav-link${isActive ? " active" : ""}`}
              onClick={(e) => handleClick(e, id)}
            >
              {label}
            </a>
          );
        })}
      </nav>
    </>
  );
}
