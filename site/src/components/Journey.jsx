import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { journey } from "../content.js";
import { Reveal } from "../effects.jsx";

export function Journey() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="journey" className="section journey" aria-labelledby="journey-title">
      <div className="container journey-grid" ref={ref}>
        <Reveal className="journey-intro">
          <p className="kicker">Journey</p>
          <h2 id="journey-title">
            Four <span className="ember-word">stops.</span>
          </h2>
          <p className="lede">School, two shipped products, and the role I want next.</p>
        </Reveal>

        <ol className="rail">
          <li className="rail-line" aria-hidden="true" />
          <motion.li className="rail-line rail-fill" style={{ scaleY: fill }} aria-hidden="true" />
          {journey.map((step, index) => (
            <Step key={step.title} step={step} index={index} progress={scrollYProgress} total={journey.length} />
          ))}
        </ol>
      </div>
    </section>
  );
}

function Step({ step, index, progress, total }) {
  const at = index / (total - 1 || 1);
  const lit = useTransform(progress, [Math.max(0, at - 0.15), at], [0, 1]);
  const dotScale = useTransform(lit, [0, 1], [0.7, 1]);

  return (
    <li className="rail-step">
      <div className="rail-dot" aria-hidden="true">
        <span className="rail-dot-base" />
        <motion.span className="rail-dot-lit" style={{ opacity: lit, scale: dotScale }} />
        <span className="rail-num">{index + 1}</span>
      </div>
      <Reveal amount={0.4}>
        <p className="rail-meta">{step.meta}</p>
        <h3>{step.title}</h3>
        <p className="rail-body">{step.body}</p>
      </Reveal>
    </li>
  );
}
