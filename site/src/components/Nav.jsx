import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { profile } from "../content.js";
import { EASE, Spark, useActiveSection } from "../effects.jsx";
import useTheme from "../hooks/useTheme.js";

const links = [
  { href: "#work", label: "Work" },
  { href: "#journey", label: "Journey" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];
const ids = links.map((link) => link.href.slice(1));

export function Nav() {
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);
  const { theme, toggle } = useTheme();
  const next = theme === "light" ? "dark" : "light";

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 12);
    setHidden(latest > 240 && latest > previous + 2 && !open);
  });

  useEffect(() => {
    const media = window.matchMedia("(max-width: 760px)");
    const onChange = () => {
      if (!media.matches) setOpen(false);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <motion.div className="progress" style={{ scaleX: progress }} aria-hidden="true" />
      <motion.header className="nav" animate={{ y: hidden ? -110 : 0 }} transition={{ duration: 0.45, ease: EASE }}>
        <div className={scrolled || open ? "nav-shell is-solid" : "nav-shell"}>
          <a className="brand" href="#top" aria-label="Lovjyot Singh, back to top">
            <span className="brand-mark">
              <span className="brand-glow" />
              <Spark className="spark" />
            </span>
            <span className="brand-name">
              Lovjyot <span className="brand-serif">Singh</span>
            </span>
          </a>

          <nav className="nav-links" aria-label="Sections">
            {links.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <a key={link.href} href={link.href} className={isActive ? "is-active" : undefined} aria-current={isActive ? "true" : undefined}>
                  {isActive ? <motion.span layoutId="nav-pill" className="nav-pill" transition={{ duration: 0.45, ease: EASE }} /> : null}
                  <span className="nav-label">{link.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="nav-end">
            <button className="theme-toggle" type="button" onClick={toggle} aria-label={`Switch to ${next} theme`} title={`Switch to ${next} theme`}>
              {theme === "light" ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7Z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" />
                </svg>
              )}
            </button>
            <a className="btn btn-primary nav-resume" href={profile.resumeHref} download={profile.resumeName}>
              Resume
            </a>
            <button className="nav-toggle" type="button" aria-expanded={open} aria-controls="site-menu" onClick={() => setOpen((value) => !value)}>
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              id="site-menu"
              className="nav-panel"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.3, ease: EASE }}
            >
              {links.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              ))}
              <a href={profile.github} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
                GitHub
              </a>
              <a className="btn btn-primary" href={profile.resumeHref} download={profile.resumeName} onClick={() => setOpen(false)}>
                Download resume
              </a>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
