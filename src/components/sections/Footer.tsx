"use client";

import { BadgeCheck, Code, Github, Heart, Linkedin, Mail, MapPin, Phone, Zap } from "lucide-react";
import { CONTACT_INFO, NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { MagneticCursor } from "@/components/ui/MagneticCursor";

function SocialIcon({ icon }: { icon: string }) {
  if (icon === "github") return <Github className="h-5 w-5" />;
  if (icon === "linkedin") return <Linkedin className="h-5 w-5" />;
  return <Mail className="h-5 w-5" />;
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)]/80" role="contentinfo">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center" aria-hidden="true">
        <div className="h-48 w-[36rem] rounded-full bg-accent-500/10 blur-3xl" />
      </div>
      <div className="container-custom relative py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500 font-display text-sm font-bold text-white">
              LS
            </p>
            <p className="mb-6 max-w-xs text-[var(--color-text-secondary)]">
              Full-stack engineer building production apps with React, Next.js, and Node.js. Real-time systems and clean interfaces.
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <MagneticCursor key={social.name}>
                  <a
                    href={social.href}
                    target={social.icon === "mail" ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] transition hover:border-accent-500/40 hover:text-accent"
                    aria-label={social.label}
                  >
                    <SocialIcon icon={social.icon} />
                  </a>
                </MagneticCursor>
              ))}
            </div>
          </div>

          <nav aria-label="Footer">
            <h2 className="mb-4 text-heading-sm font-semibold">Quick links</h2>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="link-underline text-[var(--color-text-secondary)] hover:text-accent">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="mb-4 text-heading-sm font-semibold">Contact</h2>
            <address className="space-y-3 not-italic text-[var(--color-text-secondary)]">
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-2 break-all hover:text-accent">
                <Mail className="h-4 w-4 flex-shrink-0 text-accent" aria-hidden="true" />
                {CONTACT_INFO.email}
              </a>
              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-2 hover:text-accent">
                <Phone className="h-4 w-4 flex-shrink-0 text-accent" aria-hidden="true" />
                {CONTACT_INFO.phone}
              </a>
              <p className="flex items-start gap-2">
                <MapPin className="mt-1 h-4 w-4 flex-shrink-0 text-accent" aria-hidden="true" />
                {CONTACT_INFO.location}
              </p>
              <p className="flex items-center gap-2 font-medium text-accent">
                <BadgeCheck className="h-4 w-4" aria-hidden="true" />
                {CONTACT_INFO.availability}
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-[var(--color-border)] pt-6 text-body-sm text-[var(--color-text-muted)] sm:flex-row">
          <p className="inline-flex flex-wrap items-center justify-center gap-1.5">
            © {year} Lovjyot Singh. Built with
            <Heart className="h-4 w-4 text-rose-500" aria-hidden="true" />
            <Code className="h-4 w-4 text-accent" aria-hidden="true" />
            <Zap className="h-4 w-4 text-amber-500" aria-hidden="true" />
            Next.js 15, TypeScript, and Tailwind CSS.
          </p>
          <a href="https://github.com/LovjyotSingh" target="_blank" rel="noopener noreferrer" className="link-underline hover:text-accent">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
