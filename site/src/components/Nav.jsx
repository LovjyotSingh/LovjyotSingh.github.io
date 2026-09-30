import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "../content.js";
import { easeOut } from "../motion.js";

const links = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const openRef = useRef(false);

  useEffect(() => {
    openRef.current = open;
  }, [open]);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      if (openRef.current) {
        last = y;
        return;
      }
      if (y < 12) {
        setHidden(false);
        last = y;
        return;
      }
      const delta = y - last;
      if (Math.abs(delta) < 8) return;
      setHidden(delta > 0);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  const shown = open || !hidden;

  return (
    <motion.header
      className={scrolled ? "nav scrolled" : "nav"}
      initial={{ y: "0%" }}
      animate={{ y: shown ? "0%" : "-110%" }}
      transition={{ duration: 0.4, ease: easeOut }}
    >
      <div className="wrap nav-inner">
        <a className="brand" href="#top">
          Lovjyot Singh
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
      <AnimatePresence>
        {open ? (
          <motion.div
            className="nav-panel"
            id="site-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: easeOut }}
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
              <a
                className="btn btn-primary panel-resume"
                href={profile.resumeHref}
                download={profile.resumeName}
                onClick={() => setOpen(false)}
              >
                Download resume
              </a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
