"use client";

import { Database, ExternalLink, Github, Globe, Lock, Server, Share2, Zap } from "lucide-react";
import type { Project } from "@/lib/constants";
import { MagneticCursor } from "@/components/ui/MagneticCursor";

const features = [
  { icon: Zap, title: "CRDT sync", desc: "Yjs merges concurrent edits with sub-50ms fanout." },
  { icon: Server, title: "Socket.io", desc: "WebSocket rooms with reconnect and live presence." },
  { icon: Database, title: "Redis persistence", desc: "Writes debounce at 700ms and expire after 30 days." },
  { icon: Lock, title: "Access control", desc: "JWT room auth, rotatable share links, and email invites." },
  { icon: Share2, title: "Presence & files", desc: "Live cursors plus member uploads capped at 10MB." },
  { icon: Globe, title: "Split deploy", desc: "Next.js on Vercel, Socket.io server on Render." },
];

const architecture = [
  { layer: "Client", tech: ["Next.js 16", "BlockNote", "Yjs"] },
  { layer: "Realtime", tech: ["Socket.io", "WebSocket"] },
  { layer: "Persistence", tech: ["Redis", "MongoDB"] },
  { layer: "Auth", tech: ["JWT", "Share tokens"] },
];

export function SyncFlowCard({ project }: { project: Project }) {
  return (
    <article className="card group h-full">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-sky-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
      <div className="relative flex h-full flex-col p-6 lg:p-8">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-caption font-medium text-violet-500 dark:text-violet-300">
              <Zap className="h-3 w-3" aria-hidden="true" />
              Real-time
            </span>
            <h3 className="text-heading-lg font-bold text-[var(--color-text-primary)]">{project.title}</h3>
            <p className="mt-1 text-body text-[var(--color-text-secondary)]">{project.tagline}</p>
          </div>
          <div className="flex gap-2">
            <MagneticCursor>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-[var(--color-bg-tertiary)] p-2 text-[var(--color-text-secondary)] transition hover:text-violet-500" aria-label="View SyncFlow live demo">
                <ExternalLink className="h-5 w-5" />
              </a>
            </MagneticCursor>
            <MagneticCursor>
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-[var(--color-bg-tertiary)] p-2 text-[var(--color-text-secondary)] transition hover:text-violet-500" aria-label="View SyncFlow source">
                <Github className="h-5 w-5" />
              </a>
            </MagneticCursor>
          </div>
        </div>

        <p className="mb-6 text-[var(--color-text-secondary)]">{project.description}</p>

        <dl className="mb-6 grid grid-cols-3 gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-tertiary)]/60 p-4">
          {Object.entries(project.metrics).map(([key, value]) => (
            <div key={key} className="text-center">
              <dt className="bg-gradient-to-r from-violet-500 to-sky-500 bg-clip-text font-display text-heading-md font-bold text-transparent">{value}</dt>
              <dd className="text-caption uppercase tracking-wide text-[var(--color-text-muted)]">{key}</dd>
            </div>
          ))}
        </dl>

        <div className="mb-6">
          <h4 className="mb-3 text-body-sm font-medium text-[var(--color-text-secondary)]">System architecture</h4>
          <ul className="space-y-2">
            {architecture.map((layer) => (
              <li key={layer.layer} className="flex items-center gap-3">
                <span className="w-24 text-right text-caption font-medium text-[var(--color-text-muted)]">{layer.layer}</span>
                <span className="h-6 w-px bg-[var(--color-border)]" aria-hidden="true" />
                <span className="flex flex-wrap gap-1.5">
                  {layer.tech.map((tech) => (
                    <span key={tech} className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-tertiary)] px-2.5 py-1 text-xs text-[var(--color-text-secondary)]">
                      {tech}
                    </span>
                  ))}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <ul className="space-y-2">
          {features.map((feature) => (
            <li key={feature.title} className="flex items-start gap-3 rounded-lg p-2">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-violet-500/10">
                <feature.icon className="h-4 w-4 text-violet-500" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-body-sm font-medium text-[var(--color-text-primary)]">{feature.title}</span>
                <span className="block text-caption text-[var(--color-text-muted)]">{feature.desc}</span>
              </span>
            </li>
          ))}
        </ul>
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
    </article>
  );
}
