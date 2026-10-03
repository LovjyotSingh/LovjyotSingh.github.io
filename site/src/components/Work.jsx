import { motion } from "framer-motion";
import { projects } from "../content.js";
import { Reveal, Spotlight, staggerItem, Stagger } from "../effects.jsx";

export function Work() {
  return (
    <section id="work" className="section work" aria-labelledby="work-title">
      <div className="container">
        <Reveal className="section-head">
          <p className="kicker">Selected work</p>
          <h2 id="work-title">
            Two products. <span className="serif-muted">Both live.</span>
          </h2>
          <p className="lede">Open OfferForge AI first. It is the one I want you to use. SyncFlow is the other product I shipped.</p>
        </Reveal>

        <Stagger className="project-list" gap={0.14}>
          {projects.map((project) => (
            <Spotlight key={project.name} as={motion.article} variants={staggerItem} className={project.featured ? "project is-featured" : "project"}>
              <div className="project-main">
                <div className="project-meta">
                  <span className="project-index">{project.index}</span>
                  {project.featured ? <span className="tag">Featured</span> : null}
                  <span className="tag tag-live">
                    <span className="status-dot" aria-hidden="true" />
                    Live
                  </span>
                </div>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <ul className="chips" aria-label={`${project.name} stack`}>
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="project-actions">
                  <a className="btn btn-primary" href={project.live} target="_blank" rel="noreferrer">
                    Open live app <span aria-hidden="true">↗</span>
                  </a>
                  <a className="btn btn-ghost" href={project.source} target="_blank" rel="noreferrer">
                    View code
                  </a>
                </div>
              </div>

              <div className="project-side">
                <div className="project-window" aria-hidden="true">
                  <span className="live-dots">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className="project-host">{project.host}</span>
                </div>
                <ul className="project-lines">
                  {project.lines.map((line, index) => (
                    <li key={line}>
                      <span className="idx">{String(index + 1).padStart(2, "0")}</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Spotlight>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
