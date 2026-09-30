"use client";

import { motion } from "framer-motion";
import { Brain, Code, Database, Layers, Server, Terminal, Zap, type LucideIcon } from "lucide-react";
import { SKILLS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const ease = [0.16, 1, 0.3, 1] as const;

const skillIcons: Record<string, LucideIcon> = {
  typescript: Code,
  javascript: Zap,
  java: Code,
  database: Database,
  code: Code,
  react: Layers,
  nextjs: Terminal,
  nodejs: Terminal,
  express: Layers,
  socket: Zap,
  tailwind: Code,
  mongodb: Database,
  mysql: Database,
  redis: Database,
  docker: Layers,
  git: Terminal,
  cicd: Zap,
  postman: Layers,
  vercel: Terminal,
  render: Server,
};

const categories = [
  { key: "languages", label: "Languages", icon: Code, bar: "from-accent-600 to-accent-400" },
  { key: "frameworks", label: "Frameworks", icon: Layers, bar: "from-violet-500 to-fuchsia-400" },
  { key: "databases", label: "Databases", icon: Database, bar: "from-emerald-500 to-teal-400" },
  { key: "tools", label: "Tools & DevOps", icon: Terminal, bar: "from-orange-500 to-rose-400" },
] as const;

export function Skills() {
  return (
    <section id="skills" className="section bg-[var(--color-bg-secondary)]/70" aria-labelledby="skills-heading">
      <div className="container-custom">
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent-500/20 bg-accent-500/10 px-4 py-2 text-body-sm font-medium text-accent">
            <Brain className="h-4 w-4" aria-hidden="true" />
            Technical Arsenal
          </span>
          <h2 id="skills-heading" className="section-title mb-4 text-gradient-subtle">
            Technologies I work with
          </h2>
          <p className="section-subtitle">
            Type-safe full-stack work, with extra time spent on real-time systems and the CS underneath them.
          </p>
        </motion.div>

        <div className="mb-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category, catIndex) => (
            <motion.article
              key={category.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.08, duration: 0.5 }}
              className="card h-full p-6"
            >
              <div className="mb-6 flex items-center gap-3">
                <span className={cn("flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br text-white", category.bar)}>
                  <category.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-heading-sm font-semibold text-[var(--color-text-primary)]">{category.label}</h3>
              </div>
              <ul className="space-y-4">
                {SKILLS[category.key].map((skill, index) => {
                  const Icon = skillIcons[skill.icon] ?? Code;
                  return (
                    <li key={skill.name}>
                      <div className="mb-1.5 flex items-center justify-between gap-3">
                        <span className="flex items-center gap-2 text-body-sm font-medium text-[var(--color-text-primary)]">
                          <Icon className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                          {skill.name}
                        </span>
                        <span className="font-mono text-caption text-accent">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-[var(--color-bg-tertiary)]">
                        <motion.div
                          className={cn("h-full rounded-full bg-gradient-to-r", category.bar)}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, ease, delay: catIndex * 0.05 + index * 0.04 }}
                        />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </motion.article>
          ))}
        </div>

        <div>
          <h3 className="mb-6 text-heading-lg font-semibold text-[var(--color-text-primary)]">Computer science fundamentals</h3>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SKILLS.fundamentals.map((fundamental, index) => (
              <motion.li
                key={fundamental}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="card p-4 text-center"
              >
                <span className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/10">
                  <Brain className="h-5 w-5 text-accent" aria-hidden="true" />
                </span>
                <p className="text-body-sm text-[var(--color-text-secondary)]">{fundamental}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
