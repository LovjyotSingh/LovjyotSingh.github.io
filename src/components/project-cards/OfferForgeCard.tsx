"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import {
  Brain,
  Database,
  Layers,
  Shield,
  Users,
  Zap,
} from "lucide-react";
import type { Project } from "@/lib/constants";
import { MagneticCursor } from "@/components/ui/MagneticCursor";

const features = [
  { icon: Brain, title: "AI rubric grading", desc: "Gemini and OpenRouter score answers on a 4-point rubric." },
  { icon: Shield, title: "Session integrity", desc: "JWT auth, atomic updates, and a server-held question flow." },
  { icon: Users, title: "7 interview tracks", desc: "SDE, frontend, backend, data, and product loops." },
  { icon: Database, title: "Persistent state", desc: "MongoDB stores sessions, dashboards, and history." },
  { icon: Zap, title: "Fallback bank", desc: "Curated questions stay available if an AI provider fails." },
  { icon: Layers, title: "Modern stack", desc: "React/Vite and Express, deployed on Vercel." },
];

const techCategories = {
  Frontend: ["React", "Vite", "TypeScript"],
  Backend: ["Node.js", "Express", "JWT", "MongoDB"],
  AI: ["Gemini API", "OpenRouter"],
  DevOps: ["Vercel", "Git"],
};

export function OfferForgeCard({ project }: { project: Project }) {
  return (
    <article className="card group h-full">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
      <div className="relative flex h-full flex-col p-6 lg:p-8">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-accent-500/10 px-3 py-1 text-caption font-medium text-accent">
              <Zap className="h-3 w-3" aria-hidden="true" />
              Featured
            </span>
            <h3 className="text-heading-lg font-bold text-[var(--color-text-primary)]">{project.title}</h3>
            <p className="mt-1 text-body text-[var(--color-text-secondary)]">{project.tagline}</p>
          </div>
          <div className="flex gap-2">
            <MagneticCursor>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-[var(--color-bg-tertiary)] p-2 text-[var(--color-text-secondary)] transition hover:text-accent" aria-label="View OfferForge AI live demo">
                <ExternalLink className="h-5 w-5" />
              </a>
            </MagneticCursor>
            <MagneticCursor>
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-[var(--color-bg-tertiary)] p-2 text-[var(--color-text-secondary)] transition hover:text-accent" aria-label="View OfferForge AI source">
                <Github className="h-5 w-5" />
              </a>
            </MagneticCursor>
          </div>
        </div>

        <p className="mb-6 text-[var(--color-text-secondary)]">{project.description}</p>

        <dl className="mb-6 grid grid-cols-3 gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-tertiary)]/60 p-4">
          {Object.entries(project.metrics).map(([key, value]) => (
            <div key={key} className="text-center">
              <dt className="font-display text-heading-md font-bold text-gradient">{value}</dt>
              <dd className="text-caption uppercase tracking-wide text-[var(--color-text-muted)]">{key}</dd>
            </div>
          ))}
        </dl>

        <ul className="mb-6 space-y-2">
          {features.map((feature) => (
            <li key={feature.title} className="flex items-start gap-3 rounded-lg p-2">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-accent-500/10">
                <feature.icon className="h-4 w-4 text-accent" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-body-sm font-medium text-[var(--color-text-primary)]">{feature.title}</span>
                <span className="block text-caption text-[var(--color-text-muted)]">{feature.desc}</span>
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-auto border-t border-[var(--color-border)] pt-5">
          <div className="space-y-3">
            {Object.entries(techCategories).map(([category, techs]) => (
              <div key={category}>
                <p className="mb-1.5 text-caption font-medium uppercase tracking-wider text-[var(--color-text-muted)]">{category}</p>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <span key={tech} className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-tertiary)] px-2.5 py-1 text-xs text-[var(--color-text-secondary)]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary !px-4 !py-2">
              Live demo
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary !px-4 !py-2">
              Source
              <Github className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
