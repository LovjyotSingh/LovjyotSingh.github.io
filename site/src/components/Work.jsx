import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { profile, projects } from "../content.js";
import { Reveal, Spotlight } from "../effects.jsx";

const STEPS = [
  {
    title: "USICT, GGSIPU",
    body: "B.Tech in Computer Science and Engineering, 2022 to 2026. IBM front-end engineering in 2025.",
  },
  {
    title: "OfferForge AI",
    body: "A structured AI mock-interview platform. Role-based sections, rubric grading, and MongoDB auth. React and Vite on the client, Express on the API, both on Vercel.",
  },
  {
    title: "SyncFlow",
    body: "A real-time collaborative workspace. Socket.io keeps edits in sync, MongoDB stores the documents, and Redis covers the hot cache.",
  },
  {
    title: "What I want next",
    body: "A software engineer role. I am in Delhi NCR and I can start.",
  },
];

export function Work() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="work" className="work">
      <div className="container work-grid" ref={ref}>
        <div className="work-intro">
          <Reveal>
            <p className="kicker">Selected work</p>
            <h2>
              Two products.
              <br />
              <span className="serif-muted">Both live.</span>
            </h2>
            <p className="lede">
              Open OfferForge AI first. It is the one I want you to use. SyncFlow is the other product I shipped.
            </p>
          </Reveal>
        </div>

        <div className="rail">
          <div className="rail-line" />
          <motion.div className="rail-line rail-fill" style={{ scaleY: fill }} />
          <div className="rail-steps">
            {STEPS.map((step, index) => (
              <Step key={step.title} step={step} index={index} progress={scrollYProgress} total={STEPS.length} />
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="project-grid">
          {projects.map((project) => (
            <Spotlight key={project.name} as="article" className="project-card">
              <div className="project-top">
                <h3>{project.name}</h3>
                <span className="project-arrow" aria-hidden="true">
                  →
                </span>
              </div>
              <p>{project.summary}</p>
              <ul>
                {project.stack.map((item, index) => (
                  <li key={item}>
                    <span className="idx">{index + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="project-links">
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live
                </a>
                <a href={project.source} target="_blank" rel="noreferrer">
                  Code
                </a>
              </div>
            </Spotlight>
          ))}
        </div>
        <p className="training">{profile.training}</p>
      </div>
    </section>
  );
}

function Step({ step, index, progress, total }) {
  const at = index / (total - 1 || 1);
  const lit = useTransform(progress, [Math.max(0, at - 0.15), at], [0, 1]);
  const dotScale = useTransform(lit, [0, 1], [0.65, 1]);

  return (
    <div className="rail-step">
      <div className="rail-dot" aria-hidden="true">
        <span className="rail-dot-base" />
        <motion.span className="rail-dot-lit" style={{ opacity: lit, scale: dotScale }} />
        <span className="rail-num">{index + 1}</span>
      </div>
      <Reveal amount={0.5}>
        <h3>{step.title}</h3>
        <p>{step.body}</p>
      </Reveal>
    </div>
  );
}
