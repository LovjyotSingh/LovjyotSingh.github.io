"use client";

import { motion } from "framer-motion";
import { ExternalLink, Plus, Zap } from "lucide-react";
import { PROJECTS, type Project } from "@/lib/constants";
import { OfferForgeCard } from "@/components/project-cards/OfferForgeCard";
import { SyncFlowCard } from "@/components/project-cards/SyncFlowCard";
import { MagneticCursor } from "@/components/ui/MagneticCursor";

const ease = [0.16, 1, 0.3, 1] as const;

const cards: Record<Project["id"], (props: { project: Project }) => JSX.Element> = {
  offerforge: OfferForgeCard,
  syncflow: SyncFlowCard,
};

export function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-heading">
      <div className="container-custom">
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent-500/20 bg-accent-500/10 px-4 py-2 text-body-sm font-medium text-accent">
            <Zap className="h-4 w-4" aria-hidden="true" />
            Featured Projects
          </span>
          <h2 id="projects-heading" className="section-title mb-4 text-gradient-subtle">
            Production-grade applications
          </h2>
          <p className="section-subtitle">
            Two live products. Real-time collaboration, AI-backed grading, and deploys you can open right now.
          </p>
        </motion.div>

        <div className="grid items-start gap-8 lg:grid-cols-2">
          {PROJECTS.map((project, index) => {
            const Card = cards[project.id];
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease, delay: index * 0.08 }}
              >
                <Card project={project} />
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-10"
        >
          <div className="card p-8 text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-500/10">
              <Plus className="h-7 w-7 text-accent" aria-hidden="true" />
            </div>
            <h3 className="mb-2 text-heading-lg font-semibold text-[var(--color-text-primary)]">More projects on the way</h3>
            <p className="mx-auto mb-6 max-w-md text-[var(--color-text-muted)]">
              I keep building. The next ones are aimed at AI agents, distributed systems, and developer tools.
            </p>
            <MagneticCursor>
              <a
                href="https://github.com/LovjyotSingh"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                View GitHub
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </MagneticCursor>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
