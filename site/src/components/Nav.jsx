import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { profile } from "../content.js";
import { EASE, Spark } from "../effects.jsx";

const links = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 12);
    setHidden(latest > 240 && latest > previous && !open);
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
    <motion.header
      className={scrolled || open ? "nav scrolled" : "nav"}
      animate={{ y: hidden ? -110 : 0 }}
      transition={{ duration: 0.45, ease: EASE }}
    >
      <div className="nav-shell">
        <div className="wrap nav-inner">
          <a className="brand" href="#top">
            <span className="brand-mark">
              <span className="brand-glow" />
              <Spark className="spark" />
            </span>
            <span>Lovjyot Singh</span>
          </a>
          <nav className="nav-links" aria-label="Sections">
            {links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="nav-right">
            <a className="btn btn-ghost btn-small nav-resume" href={profile.resumeHref} download={profile.resumeName}>
              Resume
            </a>
            <button
              className="nav-toggle btn btn-ghost"
              type="button"
              aria-expanded={open}
              aria-controls="site-menu"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.div
            className="nav-panel"
            id="site-menu"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            <nav className="wrap panel-links" aria-label="Mobile">
              {links.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              ))}
              <a href={profile.github} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
                GitHub
              </a>
              <a className="btn btn-primary panel-resume" href={profile.resumeHref} download={profile.resumeName} onClick={() => setOpen(false)}>
                Download resume
              </a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
