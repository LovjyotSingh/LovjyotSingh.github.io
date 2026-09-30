import { motion } from "framer-motion";
import { projects } from "../content.js";
import { Accordion, FillBars, Magnetic, Reveal, Spotlight, Stagger, staggerItem } from "../effects.jsx";

export function Work() {
  return (
    <section id="work" className="section work">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="label">01</p>
          <h2>
            Selected <span className="ember-word">work</span>
          </h2>
          <p className="lede">Two products I have shipped. OfferForge AI is the one to open.</p>
        </Reveal>
        <Stagger className="work-list">
          {projects.map((project) => (
            <motion.div key={project.name} variants={staggerItem}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <Spotlight as="article" className={project.featured ? "card card-feature card-lift" : "card card-lift"}>
      <div className="card-top">
        <p className="label">{project.index}</p>
        <a className="card-url" href={project.live} target="_blank" rel="noreferrer">
          {project.host}
          <span className="sr-only"> (opens in a new tab)</span>
          <span className="slide-arrow" aria-hidden="true">
            →
          </span>
        </a>
      </div>
      <h3>{project.name}</h3>
      <p className="card-copy">{project.summary}</p>
      <div className="card-actions">
        {project.featured ? (
          <Magnetic>
            <a className="btn btn-primary" href={project.live} target="_blank" rel="noreferrer">
              Open live site <span className="arrow" aria-hidden="true">→</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </Magnetic>
        ) : (
          <a className="btn btn-ghost" href={project.live} target="_blank" rel="noreferrer">
            Open live demo
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        )}
        <a className="btn btn-ghost" href={project.source} target="_blank" rel="noreferrer">
          View code
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
      <Accordion title="Build notes">
        <FillBars items={project.stack} />
      </Accordion>
    </Spotlight>
  );
}
