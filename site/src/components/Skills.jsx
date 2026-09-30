import { profile, skills } from "../content.js";
import { Reveal, Spark } from "../effects.jsx";

export function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="wrap">
        <Reveal>
          <p className="label">02</p>
          <h2>
            The <span className="ember-word">stack</span>
          </h2>
        </Reveal>
      </div>
      <div className="marquee mask-fade-x">
        <div className="marquee-track">
          <SkillRow />
          <SkillRow hidden />
        </div>
      </div>
      <div className="wrap">
        <p className="skills-note">{profile.training}</p>
      </div>
    </section>
  );
}

function SkillRow({ hidden = false }) {
  return (
    <ul className="skill-row" aria-hidden={hidden ? "true" : undefined}>
      {skills.map((skill, index) => (
        <li key={skill} className={index % 3 === 1 ? "skill-italic" : undefined}>
          <span>{skill}</span>
          <Spark className="spark spark-xs" />
        </li>
      ))}
    </ul>
  );
}
