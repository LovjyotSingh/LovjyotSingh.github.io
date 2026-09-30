import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../content.js";
import { fadeUp } from "../motion.js";

export function Contact() {
  const [copyLabel, setCopyLabel] = useState("Copy");

  async function copyEmail() {
    const ok = await writeClipboard(profile.email);
    setCopyLabel(ok ? "Copied" : "Copy failed");
    window.setTimeout(() => setCopyLabel("Copy"), 1800);
  }

  return (
    <motion.section id="contact" className="section contact" {...fadeUp}>
      <div className="wrap contact-grid">
        <header>
          <p className="label">03</p>
          <h2>
            Say <span className="ember-word">hello</span>
          </h2>
          <p className="lede">Delhi NCR. Looking for a software engineer role.</p>
        </header>
        <div className="contact-list">
          <div className="contact-row">
            <span className="contact-label">Email</span>
            <span className="contact-actions">
              <a className="contact-value" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              <button className="copy-btn" type="button" onClick={copyEmail}>
                {copyLabel}
              </button>
            </span>
          </div>
          <a className="contact-row" href={profile.github} target="_blank" rel="noreferrer">
            <span className="contact-label">GitHub</span>
            <span className="contact-value">
              {profile.githubLabel}
              <span className="sr-only"> (opens in a new tab)</span>
            </span>
          </a>
          <div className="contact-row">
            <span className="contact-label">Resume</span>
            <a className="btn btn-primary" href={profile.resumeHref} download={profile.resumeName}>
              Download resume
            </a>
          </div>
          <a className="contact-row" href={profile.linkedin} target="_blank" rel="noreferrer">
            <span className="contact-label">LinkedIn</span>
            <span className="contact-value">
              {profile.linkedinLabel}
              <span className="sr-only"> (opens in a new tab)</span>
            </span>
          </a>
          <a className="contact-row" href={profile.phoneHref}>
            <span className="contact-label">Phone</span>
            <span className="contact-value">{profile.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </motion.section>
  );
}

async function writeClipboard(value) {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(value);
      return true;
    }
  } catch {
    /* fall through */
  }
  try {
    const input = document.createElement("textarea");
    input.value = value;
    input.setAttribute("readonly", "");
    input.style.position = "fixed";
    input.style.left = "-9999px";
    document.body.appendChild(input);
    input.select();
    const ok = document.execCommand("copy");
    input.remove();
    return ok;
  } catch {
    return false;
  }
}
