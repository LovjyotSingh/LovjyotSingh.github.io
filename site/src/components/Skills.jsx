import { skillGroups, skills } from "../content.js";
import { Reveal, Spark, Stagger, staggerItem } from "../effects.jsx";
import { motion } from "framer-motion";

export function SkillsMarquee() {
  return (
    <div className="marquee" role="presentation">
      <div className="marquee-track">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}

function Row({ hidden = false }) {
  return (
    <ul className="marquee-row" aria-hidden={hidden ? "true" : undefined}>
      {skills.map((skill, index) => (
        <li key={skill}>
          <span className={index % 3 === 1 ? "marquee-italic" : undefined}>{skill}</span>
          <Spark className="spark spark-sm" />
        </li>
      ))}
    </ul>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section skills" aria-labelledby="skills-title">
      <div className="container">
        <Reveal className="section-head">
          <p className="kicker">Skills</p>
          <h2 id="skills-title">
            What I build <span className="serif-muted">with.</span>
          </h2>
          <p className="lede">The tools I reach for across the client, the API, and the data layer.</p>
        </Reveal>

        <Stagger className="skill-grid" as="ul">
          {skillGroups.map((group) => (
            <motion.li key={group.title} className="skill-card" variants={staggerItem}>
              <h3>{group.title}</h3>
              <ul className="chips">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.li>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
