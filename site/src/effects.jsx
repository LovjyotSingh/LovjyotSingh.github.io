import { useEffect, useId, useRef, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

export const EASE = [0.16, 1, 0.3, 1];

export function Reveal({ children, delay = 0, y = 24, className, as = "div", amount = 0.2 }) {
  const Component = motion[as];
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount, margin: "0px 0px -6% 0px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </Component>
  );
}

export function Stagger({ children, className, as = "div", delay = 0, gap = 0.09, amount = 0.15 }) {
  const Component = motion[as];
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap, delayChildren: delay } } }}
    >
      {children}
    </Component>
  );
}

export const staggerItem = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

export function WordReveal({ text, className, delay = 0, gap = 0.06, wordClassName }) {
  const words = text.split(" ");
  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} aria-hidden="true" className="word-mask">
          <motion.span
            className="word"
            initial={{ y: "110%", rotate: 4 }}
            animate={{ y: "0%", rotate: 0 }}
            transition={{ duration: 1, delay: delay + i * gap, ease: EASE }}
          >
            <span className={wordClassName || undefined}>{word}</span>
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

const canHover = () => typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches;

export function Magnetic({ children, strength = 0.25, className = "" }) {
  const ref = useRef(null);
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 18, mass: 0.4 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 18, mass: 0.4 });

  const onMove = (event) => {
    if (!ref.current || !canHover()) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * strength);
    y.set((event.clientY - rect.top - rect.height / 2) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div ref={ref} style={{ x, y }} onMouseMove={onMove} onMouseLeave={reset} className={`magnetic ${className}`}>
      {children}
    </motion.div>
  );
}

export function Spotlight({ as: Component = "div", className = "", children, ...props }) {
  const onMove = (event) => {
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };
  return (
    <Component onMouseMove={onMove} className={`spotlight ${className}`} {...props}>
      {children}
    </Component>
  );
}

export function PageTransition({ children, className }) {
  return (
    <motion.main
      id="main"
      className={className}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: EASE }}
    >
      {children}
    </motion.main>
  );
}

export function useTypewriter(items, { typeMs = 28, holdMs = 2600 } = {}) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(0);
  const full = items[index];

  useEffect(() => {
    if (reduce) return undefined;
    if (length < full.length) {
      const timer = setTimeout(() => setLength((value) => value + 1), typeMs);
      return () => clearTimeout(timer);
    }
    const timer = setTimeout(() => {
      setIndex((value) => (value + 1) % items.length);
      setLength(0);
    }, holdMs);
    return () => clearTimeout(timer);
  }, [length, full, items.length, typeMs, holdMs, reduce]);

  const shown = reduce ? full : full.slice(0, length);
  return { index, typed: shown, done: reduce || length >= full.length };
}

export function useActiveSection(ids) {
  const [active, setActive] = useState(null);
  const key = ids.join("|");

  useEffect(() => {
    const nodes = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!nodes.length) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    nodes.forEach((node) => observer.observe(node));
    const onScroll = () => {
      if (window.scrollY < 200) setActive(null);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return active;
}

export function Spark({ className = "spark" }) {
  const raw = useId().replace(/:/g, "");
  const id = `spark-${raw}`;
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="14" y1="10" x2="50" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFDDA8" />
          <stop offset="0.5" stopColor="#FF9A3D" />
          <stop offset="1" stopColor="#E5480B" />
        </linearGradient>
      </defs>
      <path
        d="M32 6c2 15.5 8.5 22 26 26-17.5 4-24 10.5-26 26-2-15.5-8.5-22-26-26 17.5-4 24-10.5 26-26Z"
        fill={`url(#${id})`}
      />
    </svg>
  );
}
