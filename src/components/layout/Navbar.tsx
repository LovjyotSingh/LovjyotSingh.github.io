"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Github, Linkedin, Mail, FileText } from "lucide-react";
import { NAV_LINKS, RESUME_URL, SOCIAL_LINKS } from "@/lib/constants";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { MagneticCursor } from "@/components/ui/MagneticCursor";
import { cn } from "@/lib/utils";

function SocialIcon({ icon }: { icon: string }) {
  if (icon === "github") return <Github className="h-5 w-5" />;
  if (icon === "linkedin") return <Linkedin className="h-5 w-5" />;
  return <Mail className="h-5 w-5" />;
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        isScrolled || isOpen
          ? "border-b border-[var(--color-border)]/70 bg-[var(--color-bg-primary)]/80 shadow-card backdrop-blur-xl dark:shadow-card-dark"
          : "bg-transparent"
      )}
    >
      <nav className="container-custom" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between lg:h-[4.25rem]">
          <Link
            href="#top"
            className="font-display text-heading-sm font-bold tracking-tight text-[var(--color-text-primary)]"
            aria-label="Lovjyot Singh - Home"
          >
            <MagneticCursor>
              <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500 text-sm text-white shadow-glow-sm">
                LS
              </span>
            </MagneticCursor>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((link) => (
              <MagneticCursor key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative text-body-sm font-medium text-[var(--color-text-secondary)]",
                    "transition-colors duration-200 hover:text-[var(--color-text-primary)]",
                    "after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:w-full",
                    "after:origin-bottom-right after:scale-x-0 after:bg-accent-500",
                    "after:transition-transform after:duration-300 after:ease-out-expo",
                    "hover:after:origin-bottom-left hover:after:scale-x-100"
                  )}
                >
                  {link.label}
                </Link>
              </MagneticCursor>
            ))}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            {SOCIAL_LINKS.slice(0, 2).map((social) => (
              <MagneticCursor key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg p-2 text-[var(--color-text-muted)] transition-all duration-200 hover:bg-accent-500/10 hover:text-accent"
                  aria-label={social.label}
                >
                  <SocialIcon icon={social.icon} />
                </a>
              </MagneticCursor>
            ))}
            <ThemeToggle />
            <a href={RESUME_URL} className="btn-primary !px-4 !py-2">
              <FileText className="h-4 w-4" aria-hidden="true" />
              Resume
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen((open) => !open)}
              className="rounded-lg p-2 text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-tertiary)] hover:text-[var(--color-text-primary)]"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={cn(
            "overflow-hidden transition-all duration-300 ease-out-expo lg:hidden",
            isOpen ? "max-h-[32rem] pb-6 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="flex flex-col gap-1 border-t border-[var(--color-border)] pt-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-2 py-3 text-body font-medium text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-tertiary)] hover:text-[var(--color-text-primary)]"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex items-center gap-2 border-t border-[var(--color-border)] pt-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg p-2 text-[var(--color-text-muted)] transition-all hover:bg-accent-500/10 hover:text-accent"
                  aria-label={social.label}
                >
                  <SocialIcon icon={social.icon} />
                </a>
              ))}
              <a href={RESUME_URL} className="btn-primary ml-auto !px-4 !py-2" onClick={() => setIsOpen(false)}>
                <FileText className="h-4 w-4" aria-hidden="true" />
                Resume
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
