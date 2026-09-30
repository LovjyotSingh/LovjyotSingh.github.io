"use client";

import { motion } from "framer-motion";
import {
  Award,
  BadgeCheck,
  BookOpen,
  Brain,
  Code,
  GraduationCap,
  Layers,
  Mail,
  MapPin,
  Phone,
  Target,
  Zap,
} from "lucide-react";
import { CONTACT_INFO, EDUCATION } from "@/lib/constants";

const ease = [0.16, 1, 0.3, 1] as const;

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const FOCUS = [
  {
    title: "Real-Time Systems",
    desc: "WebSockets, Yjs CRDTs, and Socket.io for collaborative products.",
    icon: Zap,
  },
  {
    title: "AI Integration",
    desc: "LLM pipelines, rubric grading, and fallbacks when a model is down.",
    icon: Brain,
  },
  {
    title: "Full-Stack Architecture",
    desc: "Next.js, Node.js, MongoDB, Redis, and straightforward deploys.",
    icon: Layers,
  },
  {
    title: "Developer Experience",
    desc: "Type-safe APIs, component structure, and interfaces people can ship with.",
    icon: Code,
  },
];

export function About() {
  return (
    <section id="about" className="section bg-[var(--color-bg-secondary)]/70" aria-labelledby="about-heading">
      <div className="container-custom">
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={item}
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent-500/20 bg-accent-500/10 px-4 py-2 text-body-sm font-medium text-accent">
            <GraduationCap className="h-4 w-4" aria-hidden="true" />
            About Me
          </span>
          <h2 id="about-heading" className="section-title mb-4 text-gradient-subtle">
            Full-stack engineer and problem solver
          </h2>
          <p className="section-subtitle">
            CSE at USICT, GGSIPU, class of 2026. Two products in production, 150+ DSA problems solved, and a bias toward clear architecture.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-6">
            <h3 className="flex items-center gap-3 text-heading-lg font-semibold text-[var(--color-text-primary)]">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/10">
                <GraduationCap className="h-5 w-5 text-accent" aria-hidden="true" />
              </span>
              Education & certifications
            </h3>

            {EDUCATION.map((edu) => (
              <motion.article
                key={edu.degree}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={item}
                className="card p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent-500/10">
                    <Award className="h-6 w-6 text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-heading-sm font-semibold text-[var(--color-text-primary)]">{edu.degree}</h4>
                    <p className="text-body text-[var(--color-text-secondary)]">{edu.school}</p>
                    <p className="mt-1 text-body-sm text-[var(--color-text-muted)]">
                      {edu.period} · {edu.location}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {edu.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2 text-body-sm text-[var(--color-text-secondary)]">
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-500" aria-hidden="true" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}

            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={item}
              className="card border-accent-500/20 p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent-500/10">
                  <BookOpen className="h-6 w-6 text-accent" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="mb-1 text-heading-sm font-semibold text-[var(--color-text-primary)]">IBM Web Development Program</h4>
                  <p className="text-body text-[var(--color-text-secondary)]">Front-End Engineering Track</p>
                  <p className="mt-1 text-body-sm text-[var(--color-text-muted)]">Jul 2025 – Aug 2025 · Remote</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start gap-2 text-body-sm text-[var(--color-text-secondary)]">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-500" aria-hidden="true" />
                      Production-grade React, TypeScript, and Tailwind CSS patterns
                    </li>
                    <li className="flex items-start gap-2 text-body-sm text-[var(--color-text-secondary)]">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-500" aria-hidden="true" />
                      Component architecture, state management, and accessibility
                    </li>
                  </ul>
                </div>
              </div>
            </motion.article>
          </div>

          <div className="space-y-6">
            <h3 className="flex items-center gap-3 text-heading-lg font-semibold text-[var(--color-text-primary)]">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/10">
                <Target className="h-5 w-5 text-accent" aria-hidden="true" />
              </span>
              What I do
            </h3>

            <div className="grid gap-4 sm:grid-cols-2">
              {FOCUS.map((itemData) => (
                <motion.article
                  key={itemData.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={item}
                  className="card p-5"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/10">
                    <itemData.icon className="h-5 w-5 text-accent" aria-hidden="true" />
                  </div>
                  <h4 className="mb-1 font-semibold text-[var(--color-text-primary)]">{itemData.title}</h4>
                  <p className="text-body-sm text-[var(--color-text-secondary)]">{itemData.desc}</p>
                </motion.article>
              ))}
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={item}
              className="card border-accent-500/20 bg-gradient-to-br from-accent-500/5 to-transparent p-6"
            >
              <h4 className="mb-4 text-heading-sm font-semibold text-[var(--color-text-primary)]">Availability</h4>
              <div className="grid gap-4 sm:grid-cols-2">
                <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-3 text-body-sm text-[var(--color-text-secondary)] hover:text-accent">
                  <Mail className="h-5 w-5 flex-shrink-0 text-accent" aria-hidden="true" />
                  <span className="break-all">{CONTACT_INFO.email}</span>
                </a>
                <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-3 text-body text-[var(--color-text-secondary)] hover:text-accent">
                  <Phone className="h-5 w-5 flex-shrink-0 text-accent" aria-hidden="true" />
                  {CONTACT_INFO.phone}
                </a>
                <p className="flex items-center gap-3 text-body-sm text-[var(--color-text-secondary)]">
                  <MapPin className="h-5 w-5 flex-shrink-0 text-accent" aria-hidden="true" />
                  {CONTACT_INFO.location}
                </p>
                <p className="flex items-center gap-3 text-body font-medium text-accent">
                  <BadgeCheck className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                  {CONTACT_INFO.availability}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
