import { useRef } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { profile } from "../content.js";
import { EASE, Magnetic, Spark, WordReveal } from "../effects.jsx";
import { PreviewCard } from "./PreviewCard.jsx";

const CHIPS = ["React", "Express", "MongoDB", "Vercel"];

export function Hero() {
  const heroRef = useRef(null);
  const copyRef = useRef(null);
  const cardRef = useRef(null);
  const glowX = useSpring(useMotionValue(-600), { stiffness: 60, damping: 20 });
  const glowY = useSpring(useMotionValue(-600), { stiffness: 60, damping: 20 });

  const onMove = (event) => {
    const rect = heroRef.current.getBoundingClientRect();
    glowX.set(event.clientX - rect.left);
    glowY.set(event.clientY - rect.top);
  };

  const { scrollYProgress: heroProgress } = useScroll({ target: copyRef, offset: ["start start", "end start"] });
  const textY = useTransform(heroProgress, [0, 1], [0, -48]);
  const textOpacity = useTransform(heroProgress, [0, 0.7, 1], [1, 1, 0.2]);

  const { scrollYProgress: cardProgress } = useScroll({ target: cardRef, offset: ["start end", "center center"] });
  const rotateX = useTransform(cardProgress, [0, 1], [12, 0]);
  const scale = useTransform(cardProgress, [0, 1], [0.96, 1]);
  const cardY = useTransform(cardProgress, [0, 1], [28, 0]);

  return (
    <header className="hero" id="top" ref={heroRef} onMouseMove={onMove}>
      <motion.div aria-hidden="true" className="hero-glow" style={{ x: glowX, y: glowY }} />

      <motion.div ref={copyRef} className="wrap hero-copy" style={{ y: textY, opacity: textOpacity }}>
        <div className="hero-top">
          <motion.p className="chip" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: EASE }}>
            <motion.span initial={{ scale: 0, rotate: -90 }} animate={{ scale: 1, rotate: 0 }} transition={{ duration: 1.2, ease: EASE }}>
              <Spark className="spark spark-sm" />
            </motion.span>
            Open to work
          </motion.p>
          <p className="hero-loc">{profile.location}</p>
        </div>

        <h1 className="name">
          <WordReveal text={profile.given} delay={0.12} />
          <WordReveal text={profile.family} delay={0.28} wordClassName="ember-word" />
        </h1>
        <WordReveal text={profile.pitch} className="pitch" delay={0.55} gap={0.04} />

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: EASE }}
        >
          <Magnetic>
            <a className="btn btn-primary" href="#work">
              See selected work <span className="arrow" aria-hidden="true">→</span>
            </a>
          </Magnetic>
          <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
            GitHub <span className="sr-only">(opens in a new tab)</span>
          </a>
        </motion.div>
        <motion.p className="hero-school" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.05, duration: 0.8 }}>
          <span>{profile.school}</span>
          <span>{profile.degree}</span>
          <span>{profile.years}</span>
        </motion.p>
        <ul className="hero-chips">
          {CHIPS.map((chip, index) => (
            <motion.li
              key={chip}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: [0, -6, 0] }}
              transition={{
                opacity: { duration: 0.6, delay: 1.1 + index * 0.08 },
                y: { duration: 5.5, delay: index * 0.4, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              {chip}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <div className="wrap hero-stage" ref={cardRef}>
        <motion.div
          className="hero-tilt"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1, ease: EASE }}
          style={{ rotateX, scale, y: cardY, transformOrigin: "center top" }}
        >
          <PreviewCard />
        </motion.div>
      </div>
    </header>
  );
}
