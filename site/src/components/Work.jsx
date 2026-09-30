import { motion } from "framer-motion";
import { projects } from "../content.js";
import { fadeUp } from "../motion.js";
import { TypingLine } from "./TypingLine.jsx";

export function Work() {
  return (
    <motion.section id="work" className="section work" {...fadeUp}>
      <div className="wrap">
        <header className="section-head">
          <p className="label">01</p>
          <h2>
            Selected <span className="ember-word">work</span>
          </h2>
          <p className="lede">Two products I have shipped. OfferForge AI is the one to open.</p>
        </header>
        <div className="work-list">
          {projects.map((project) => (
            <article key={project.name} className={project.featured ? "card card-feature" : "card"}>
              <div className="card-top">
                <p className="label">{project.index}</p>
                {project.featured ? null : (
                  <a className="card-url" href={project.live} target="_blank" rel="noreferrer">
                    {project.host}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                )}
              </div>
              <h3>{project.name}</h3>
              {project.featured ? (
                <div className="card-main">
                  <div>
                    <p className="card-copy">{project.summary}</p>
                    <div className="card-actions">
                      <a className="btn btn-primary" href={project.live} target="_blank" rel="noreferrer">
                        Open live site <span className="arrow" aria-hidden="true">→</span>
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                      <a className="btn btn-ghost" href={project.source} target="_blank" rel="noreferrer">
                        View code
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    </div>
                    <Stack items={project.stack} />
                  </div>
                  <div className="preview">
                    <div className="preview-bar">
                      <span className="typing-dot" aria-hidden="true" />
                      <span className="label">Live</span>
                      <span className="preview-host">{project.host}</span>
                    </div>
                    <TypingLine phrases={project.lines} />
                  </div>
                </div>
              ) : (
                <>
                  <p className="card-copy">{project.summary}</p>
                  <div className="card-actions">
                    <a className="btn btn-ghost" href={project.live} target="_blank" rel="noreferrer">
                      Open live demo
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                    <a className="btn btn-ghost" href={project.source} target="_blank" rel="noreferrer">
                      View code
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </div>
                  <Stack items={project.stack} />
                </>
              )}
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function Stack({ items }) {
  return (
    <ul className="stack">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
