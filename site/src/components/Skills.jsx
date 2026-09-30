import { skills } from "../content.js";
import { Spark } from "../effects.jsx";

export function Skills() {
  return (
    <section id="skills" className="marquee" aria-label="Skills">
      <div className="marquee-track">
        <Row />
        <Row hidden />
      </div>
    </section>
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
