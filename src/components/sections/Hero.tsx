"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, Sparkles, Terminal, Zap } from "lucide-react";
import { MagneticCursor } from "@/components/ui/MagneticCursor";
import { GlowOrbGroup } from "@/components/ui/GlowOrb";
import { NoiseTexture } from "@/components/ui/NoiseTexture";
import { RESUME_URL } from "@/lib/constants";

const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

const STACK = ["Next.js 15", "TypeScript", "Tailwind", "Yjs", "Socket.io", "Redis", "MongoDB"];

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0" aria-hidden="true">
        <GlowOrbGroup count={3} />
        <NoiseTexture opacity={0.025} />
        <div className="grid-pattern opacity-60" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10">
          <div className="text-center lg:text-left">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-500/20 bg-accent-500/10 px-4 py-2 text-body-sm font-medium text-accent">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                2026 Graduate · Immediate Joiner
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)]/80 px-4 py-2 text-body-sm font-medium text-[var(--color-text-secondary)]">
                <Zap className="h-4 w-4 text-accent" aria-hidden="true" />
                Full-Stack Engineer
              </span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-6 font-display text-display-xl font-bold text-[var(--color-text-primary)]"
            >
              Building
              <br />
              <span className="text-gradient">digital experiences</span>
              <span className="ml-1 inline-block h-[0.72em] w-[3px] translate-y-1 bg-accent-500 align-middle animate-pulse" aria-hidden="true" />
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mx-auto mb-10 max-w-xl text-body-lg leading-relaxed text-[var(--color-text-secondary)] lg:mx-0"
            >
              CSE student at USICT, GGSIPU. I ship production apps with{" "}
              <strong className="font-semibold text-[var(--color-text-primary)]">React, Next.js, and Node.js</strong>
              , from real-time collaboration to AI interview loops.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-12 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            >
              <MagneticCursor>
                <a href="#projects" className="btn-primary group">
                  View Projects
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </a>
              </MagneticCursor>
              <MagneticCursor>
                <a href="#contact" className="btn-secondary">
                  Get in Touch
                </a>
              </MagneticCursor>
              <MagneticCursor>
                <a href={RESUME_URL} className="btn-ghost">
                  <FileText className="h-4 w-4" aria-hidden="true" />
                  Resume
                </a>
              </MagneticCursor>
            </motion.div>

            <motion.dl
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-wrap items-center justify-center gap-8 lg:justify-start"
            >
              {[
                ["2", "Live products"],
                ["7", "Interview tracks"],
                ["<50ms", "Sync latency"],
              ].map(([value, label], index) => (
                <div key={label} className="flex items-center gap-8">
                  {index > 0 && <span className="hidden h-10 w-px bg-[var(--color-border)] sm:block" aria-hidden="true" />}
                  <div>
                    <dt className="font-display text-display-sm font-bold text-gradient">{value}</dt>
                    <dd className="text-body-sm text-[var(--color-text-muted)]">{label}</dd>
                  </div>
                </div>
              ))}
            </motion.dl>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.15 }}
            className="relative mx-auto hidden h-[540px] w-full max-w-xl sm:block"
          >
            <div className="absolute left-0 top-16 w-[86%] rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)]/80 shadow-card backdrop-blur-xl dark:shadow-card-dark">
              <div className="flex h-10 items-center gap-1.5 border-b border-[var(--color-border)] px-4">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="ml-3 font-mono text-[11px] text-[var(--color-text-muted)]">sync-engine.ts</span>
              </div>
              <pre className="overflow-hidden px-5 py-4 font-mono text-[11px] leading-6 text-[var(--color-text-secondary)]">
                <code>{`class SyncEngine {
  constructor() {
    this.doc = new Y.Doc();
    this.awareness = new Awareness(this.doc);
  }

  connect(roomId: string) {
    this.provider = new WebsocketProvider(
      "wss://syncflow.io",
      roomId,
      this.doc
    );
  }
}`}</code>
              </pre>
            </div>

            <motion.div
              className="absolute left-6 top-0 z-20 w-64 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-primary)]/90 p-4 shadow-card backdrop-blur-xl dark:shadow-card-dark"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/10">
                  <Terminal className="h-5 w-5 text-accent" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold text-[var(--color-text-primary)]">Tech stack</p>
                  <p className="text-caption text-[var(--color-text-muted)]">Production ready</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {STACK.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-tertiary)] px-2 py-1 text-[11px] text-[var(--color-text-secondary)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-2 right-0 z-20 w-[19rem] rounded-2xl border border-[var(--color-border)] bg-[#0c1222] p-4 text-emerald-300 shadow-card-dark"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            >
              <p className="mb-2 font-mono text-[11px] text-slate-400">deploy.sh</p>
              <pre className="font-mono text-[11px] leading-5">{`$ npm run deploy
✓ Building application
✓ Deploying to Vercel
✓ SyncFlow live
✓ OfferForge AI live

All systems operational`}</pre>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
