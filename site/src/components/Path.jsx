import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Reveal } from "../effects.jsx";

const STEPS = [
  {
    title: "USICT, GGSIPU",
    body: "B.Tech in Computer Science and Engineering, finished in 2026.",
  },
  {
    title: "OfferForge AI",
    body: "A structured mock-interview platform. Role-based sections, rubric grading, MongoDB auth, React and Vite with Express, deployed on Vercel.",
  },
  {
    title: "SyncFlow",
    body: "A real-time workspace. Edits sync over Socket.io, documents sit in MongoDB, and Redis covers the hot cache.",
  },
  {
    title: "Looking now",
    body: "A software engineer role. I am based in Delhi NCR.",
  },
];

export function Path() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 65%", "end 55%"] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section className="path" id="path" ref={ref}>
      <div className="wrap path-grid">
        <div className="path-intro">
          <Reveal>
            <p className="label">Path</p>
            <h2>
              Four <span className="ember-word">stops</span>
            </h2>
            <p className="lede">School, two shipped products, and the role I want next.</p>
          </Reveal>
        </div>
        <div className="path-rail">
          <div className="path-line" />
          <motion.div className="path-line path-line-fill" style={{ scaleY: fill }} />
          <div className="path-steps">
            {STEPS.map((step, index) => (
              <Step key={step.title} step={step} index={index} progress={scrollYProgress} total={STEPS.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Step({ step, index, progress, total }) {
  const at = index / (total - 1 || 1);
  const lit = useTransform(progress, [Math.max(0, at - 0.12), at], [0, 1]);
  const dotScale = useTransform(lit, [0, 1], [0.6, 1]);

  return (
    <div className="path-step">
      <div className="path-dot" aria-hidden="true">
        <span className="path-dot-base" />
        <motion.span className="path-dot-lit" style={{ opacity: lit, scale: dotScale }} />
        <span className="path-dot-num">{index + 1}</span>
      </div>
      <Reveal amount={0.6}>
        <h3>{step.title}</h3>
        <p>{step.body}</p>
      </Reveal>
    </div>
  );
}
