import { motion, useReducedMotion } from "framer-motion";
import { projects } from "../content.js";
import { useTypewriter } from "../effects.jsx";

const project = projects[0];

export function PreviewCard() {
  const reduce = useReducedMotion();
  const { typed } = useTypewriter(project.lines, { typeMs: 32, holdMs: 2200 });

  return (
    <div className="live-card">
      <div className="live-bar">
        <span className="live-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="live-host">{project.host}</span>
        <span className="live-pill">
          <span className="status-dot" aria-hidden="true" />
          Live
        </span>
      </div>
      <div className="live-body">
        <p className="kicker">OfferForge AI</p>
        <p className="live-line">
          <span className="sr-only">{project.lines[0]}</span>
          <span aria-hidden="true">
            {typed}
            {reduce ? null : <span className="caret" />}
          </span>
        </p>
        <div className="live-foot">
          <span>React · Vite · Express · MongoDB</span>
          <a href={project.live} target="_blank" rel="noreferrer">
            Open the app <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
