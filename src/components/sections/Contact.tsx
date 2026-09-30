"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/lib/constants";
import { MagneticCursor } from "@/components/ui/MagneticCursor";

const ease = [0.16, 1, 0.3, 1] as const;

function SocialIcon({ icon }: { icon: string }) {
  if (icon === "github") return <Github className="h-5 w-5" />;
  if (icon === "linkedin") return <Linkedin className="h-5 w-5" />;
  return <Mail className="h-5 w-5" />;
}

const fieldClass =
  "w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-tertiary)] px-4 py-3 text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-accent-500";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(formData.subject || "Portfolio inquiry");
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section bg-[var(--color-bg-secondary)]/70" aria-labelledby="contact-heading">
      <div className="container-custom">
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent-500/20 bg-accent-500/10 px-4 py-2 text-body-sm font-medium text-accent">
            <Mail className="h-4 w-4" aria-hidden="true" />
            Get in Touch
          </span>
          <h2 id="contact-heading" className="section-title mb-4 text-gradient-subtle">
            Let&apos;s build something great
          </h2>
          <p className="section-subtitle">
            Open to full-time roles, collaborations, and technical conversations. The form opens your email client with the message filled in.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease }}
            className="space-y-4"
          >
            {[
              { icon: Mail, label: "Email", value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
              { icon: Phone, label: "Phone", value: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone}` },
              { icon: MapPin, label: "Location", value: CONTACT_INFO.location, href: "" },
            ].map((item) => (
              <article key={item.label} className="card p-5">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent-500/10">
                    <item.icon className="h-5 w-5 text-accent" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-[var(--color-text-primary)]">{item.label}</h3>
                    {item.href ? (
                      <a href={item.href} className="link-underline break-all text-[var(--color-text-secondary)] hover:text-accent">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-[var(--color-text-secondary)]">{item.value}</p>
                    )}
                  </div>
                </div>
              </article>
            ))}

            <article className="card p-5">
              <h3 className="mb-4 font-semibold text-[var(--color-text-primary)]">Connect</h3>
              <div className="flex flex-wrap gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <MagneticCursor key={social.name}>
                    <a
                      href={social.href}
                      target={social.icon === "mail" ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-tertiary)] px-4 py-2 text-[var(--color-text-secondary)] transition hover:border-accent-500/40 hover:text-accent"
                      aria-label={social.label}
                    >
                      <SocialIcon icon={social.icon} />
                      {social.name}
                    </a>
                  </MagneticCursor>
                ))}
              </div>
            </article>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease, delay: 0.08 }}
            className="card p-6 lg:p-8"
            noValidate={false}
          >
            <div className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-body-sm font-medium">
                    Name <span className="text-accent">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
                    className={fieldClass}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-body-sm font-medium">
                    Email <span className="text-accent">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
                    className={fieldClass}
                    placeholder="you@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-body-sm font-medium">
                  Subject <span className="text-accent">*</span>
                </label>
                <div className="relative">
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={(event) => setFormData((prev) => ({ ...prev, subject: event.target.value }))}
                    className={`${fieldClass} appearance-none pr-10`}
                  >
                    <option value="">Select a topic</option>
                    <option value="Job Opportunity">Job opportunity</option>
                    <option value="Freelance Project">Freelance project</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="Technical Question">Technical question</option>
                    <option value="Other">Other</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-text-muted)]" aria-hidden="true" />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-body-sm font-medium">
                  Message <span className="text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
                  className={`${fieldClass} min-h-[140px] resize-y`}
                  placeholder="Tell me about the role or project."
                />
              </div>

              <MagneticCursor className="w-full sm:w-auto">
                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Send message
                  <Send className="h-4 w-4" aria-hidden="true" />
                </button>
              </MagneticCursor>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
