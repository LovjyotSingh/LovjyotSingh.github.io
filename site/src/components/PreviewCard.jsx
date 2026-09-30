import { motion, useReducedMotion } from "framer-motion";
import { projects } from "../content.js";
import { FillBars, ScoreRing, Spark, useTypewriter } from "../effects.jsx";

const project = projects[0];

export function PreviewCard() {
  const reduce = useReducedMotion();
  const { typed, done, progress } = useTypewriter(project.lines);

  return (
    <div className="live-card">
      <div className="live-card-bar">
        <span className="live-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="live-host">{project.host}</span>
        <span className="live-status">
          <motion.span
            className="spark-spin"
            animate={
              reduce
                ? undefined
                : {
                    rotate: 360,
                    scale: [1, 1.15, 1],
                  }
            }
            transition={
              reduce
                ? undefined
                : {
                    rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                    scale: { duration: 1.5, repeat: Infinity },
                  }
            }
          >
            <Spark className="spark spark-sm" />
          </motion.span>
          Live
        </span>
      </div>
      <div className="live-progress" aria-hidden="true">
        <div className="live-progress-track">
          <motion.div className="live-progress-fill" animate={{ width: `${Math.round(progress * 100)}%` }} transition={{ duration: 0.15 }} />
        </div>
      </div>
      <div className="live-card-body">
        <div className="live-copy">
          <p className="label">OfferForge AI</p>
          <p className="live-typed">
            <span className="sr-only">{project.lines[0]}</span>
            <span aria-hidden="true">
              {typed}
              {reduce ? null : <span className="caret" />}
            </span>
          </p>
          <motion.span className="live-ready" animate={{ opacity: done ? 1 : 0.35 }}>
            Open when you are ready
          </motion.span>
        </div>
        <div className="score-block">
          <ScoreRing score={2} max={2} size={104} />
          <span className="label">Shipped</span>
        </div>
      </div>
      <FillBars items={project.stack} />
    </div>
  );
}
