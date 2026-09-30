import { useEffect, useId, useRef, useState } from "react";
import { animate, motion, useInView, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

export const EASE = [0.16, 1, 0.3, 1];

export function Reveal({ children, delay = 0, y = 24, className, as = "div", once = true, amount = 0.3 }) {
  const Component = motion[as];
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, amount }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </Component>
  );
}

export function Stagger({ children, className, delay = 0, gap = 0.08, amount = 0.2 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap, delayChildren: delay } } }}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: EASE } },
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

export function CountUp({ value, duration = 1.4, className, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || typeof value !== "number") return undefined;
    if (reduce) {
      setDisplay(value);
      return undefined;
    }
    const controls = animate(0, value, {
      duration,
      ease: EASE,
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, duration, reduce]);

  return (
    <span ref={ref} className={className}>
      {typeof value === "number" ? display : "—"}
      {typeof value === "number" ? suffix : ""}
    </span>
  );
}

export function Magnetic({ children, strength = 0.3, className }) {
  const ref = useRef(null);
  const x = useSpring(useMotionValue(0), { stiffness: 250, damping: 18, mass: 0.4 });
  const y = useSpring(useMotionValue(0), { stiffness: 250, damping: 18, mass: 0.4 });

  const onMove = (event) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * strength);
    y.set((event.clientY - rect.top - rect.height / 2) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div ref={ref} style={{ x, y }} onMouseMove={onMove} onMouseLeave={reset} className={`magnetic ${className || ""}`}>
      {children}
    </motion.div>
  );
}

export function Spotlight({ as: Component = "div", className = "", children, ...props }) {
  const onMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`);
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
      className={className}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: EASE }}
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
  const progress = full.length ? shown.length / full.length : 0;
  return { index, typed: shown, done: reduce || length >= full.length, progress };
}

export function ScoreRing({ score, max = 100, size = 112, stroke = 8, label, delay = 0.2 }) {
  const reduce = useReducedMotion();
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const portion = Math.max(0, Math.min(1, score / max));

  return (
    <div className="score-ring" style={{ width: size, height: size }}>
      <div className="score-ring-glow" />
      <svg width={size} height={size} className="score-ring-svg" aria-hidden="true">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="rgba(245,241,234,0.07)" strokeWidth={stroke} />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#FF6B1A"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: circumference * (1 - portion) }}
          viewport={{ once: true }}
          transition={{ duration: reduce ? 0 : 1.6, delay: reduce ? 0 : delay, ease: EASE }}
        />
      </svg>
      <div className="score-ring-label">
        <span className="score-ring-value">
          <CountUp value={score} duration={1.6} />
        </span>
        {label ? <span className="label">{label}</span> : null}
      </div>
    </div>
  );
}

export function FillBars({ items }) {
  return (
    <div className="fill-bars">
      {items.map((item, index) => (
        <div key={item}>
          <div className="fill-bars-meta">
            <span>{item}</span>
          </div>
          <div className="fill-track">
            <motion.div
              className="fill-bar"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.9, delay: 0.12 + index * 0.08, ease: EASE }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export function Accordion({ title, children }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="accordion">
      <button className="accordion-toggle" type="button" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
        <span>{title}</span>
        <svg className={open ? "chevron open" : "chevron"} width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>
      <motion.div
        className="accordion-panel"
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35, ease: EASE }}
      >
        <div className="accordion-inner">{children}</div>
      </motion.div>
    </div>
  );
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
