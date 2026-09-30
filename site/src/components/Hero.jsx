import { useRef } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { profile } from "../content.js";
import { EASE, Magnetic, Spark, WordReveal } from "../effects.jsx";
import { PreviewCard } from "./PreviewCard.jsx";

export function Hero() {
  const heroRef = useRef(null);
  const cardRef = useRef(null);
  const glowX = useSpring(useMotionValue(-600), { stiffness: 60, damping: 20 });
  const glowY = useSpring(useMotionValue(-600), { stiffness: 60, damping: 20 });

  const onMove = (event) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    glowX.set(event.clientX - rect.left);
    glowY.set(event.clientY - rect.top);
  };

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  const { scrollYProgress: cardProgress } = useScroll({ target: cardRef, offset: ["start end", "center center"] });
  const rotateX = useTransform(cardProgress, [0, 1], [28, 0]);
  const scale = useTransform(cardProgress, [0, 1], [0.9, 1]);
  const cardY = useTransform(cardProgress, [0, 1], [48, 0]);

  return (
    <header className="hero" id="top" ref={heroRef} onMouseMove={onMove}>
      <motion.div aria-hidden="true" className="hero-glow" style={{ x: glowX, y: glowY }} />

      <motion.div className="hero-copy" style={{ y: textY, opacity: textOpacity }}>
        <motion.p className="chip" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: EASE }}>
          <Spark className="spark spark-sm" />
          Open to work · {profile.location}
        </motion.p>

        <h1 className="hero-title">
          <WordReveal text="Lovjyot" delay={0.12} />
          <br />
          <WordReveal text="Singh." delay={0.28} wordClassName="ember-word" />
        </h1>

        <motion.p className="hero-sub" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.7, ease: EASE }}>
          {profile.pitch} I studied computer science at USICT and I ship full-stack products you can open.
        </motion.p>

        <motion.div className="hero-actions" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.88, ease: EASE }}>
          <Magnetic>
            <a className="btn btn-primary btn-lg" href="#work">
              See selected work <span aria-hidden="true">→</span>
            </a>
          </Magnetic>
          <a className="btn btn-ghost btn-lg" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </motion.div>
      </motion.div>

      <div className="hero-stage" ref={cardRef}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.9, ease: EASE }}
          style={{ rotateX, scale, y: cardY, transformOrigin: "center top" }}
        >
          <PreviewCard />
        </motion.div>
      </div>
    </header>
  );
}
