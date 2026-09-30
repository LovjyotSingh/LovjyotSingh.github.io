"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, Calendar, CheckCircle2, Code, MapPin } from "lucide-react";
import { EXPERIENCE } from "@/lib/constants";

const ease = [0.16, 1, 0.3, 1] as const;

export function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-heading">
      <div className="container-custom">
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent-500/20 bg-accent-500/10 px-4 py-2 text-body-sm font-medium text-accent">
            <Briefcase className="h-4 w-4" aria-hidden="true" />
            Experience
          </span>
          <h2 id="experience-heading" className="section-title mb-4 text-gradient-subtle">
            Professional journey
          </h2>
          <p className="section-subtitle">
            From coursework to software people can open. Training, then two products that stayed up.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute bottom-0 left-[15px] top-0 w-px bg-gradient-to-b from-accent-500 via-accent-400 to-transparent" aria-hidden="true" />
          <ol className="space-y-8">
            {EXPERIENCE.map((exp, index) => (
              <motion.li
                key={exp.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: index * 0.06, duration: 0.45 }}
                className="relative pl-14"
              >
                <span className="absolute left-0 top-2 flex h-8 w-8 items-center justify-center rounded-full border-4 border-[var(--color-bg-primary)] bg-[var(--color-bg-primary)]">
                  <span className="h-3 w-3 rounded-full bg-accent-500" />
                </span>
                <article className="card p-6">
                  <span
                    className="mb-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-caption font-medium"
                    style={{
                      backgroundColor: exp.type === "Project" ? "rgba(10, 60, 160, 0.1)" : "rgba(139, 92, 246, 0.12)",
                      color: exp.type === "Project" ? "var(--color-accent)" : "#8b5cf6",
                    }}
                  >
                    {exp.type === "Project" ? <Code className="h-3 w-3" /> : <Award className="h-3 w-3" />}
                    {exp.type}
                  </span>
                  <h3 className="text-heading-md font-bold text-[var(--color-text-primary)]">{exp.role}</h3>
                  <p className="mb-2 mt-1 font-medium text-accent">{exp.company}</p>
                  <p className="mb-4 flex flex-wrap gap-4 text-body-sm text-[var(--color-text-muted)]">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" aria-hidden="true" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" aria-hidden="true" />
                      {exp.location}
                    </span>
                  </p>
                  <ul className="mb-5 space-y-2.5">
                    {exp.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2.5 text-body-sm text-[var(--color-text-secondary)]">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" aria-hidden="true" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span key={tech} className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-tertiary)] px-2.5 py-1 text-xs text-[var(--color-text-secondary)]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
