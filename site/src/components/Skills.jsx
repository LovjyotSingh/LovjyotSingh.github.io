import { motion } from "framer-motion";
import { profile, skills } from "../content.js";
import { fadeUp } from "../motion.js";

export function Skills() {
  return (
    <motion.section id="skills" className="skills" {...fadeUp}>
      <div className="wrap">
        <p className="label">02</p>
        <h2>
          The <span className="ember-word">stack</span>
        </h2>
      </div>
      <div className="marquee">
        <div className="marquee-track">
          <SkillRow />
          <SkillRow hidden />
        </div>
      </div>
      <div className="wrap">
        <p className="skills-note">{profile.training}</p>
      </div>
    </motion.section>
  );
}

function SkillRow({ hidden = false }) {
  return (
    <ul className="skill-row" aria-hidden={hidden ? "true" : undefined}>
      {skills.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  );
}
