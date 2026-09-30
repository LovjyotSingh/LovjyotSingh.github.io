import toast from "react-hot-toast";
import { profile } from "../content.js";
import { Magnetic, Reveal } from "../effects.jsx";

export function Contact() {
  async function copyEmail() {
    const ok = await writeClipboard(profile.email);
    if (ok) toast.success("Email copied");
    else toast.error("Could not copy the email");
  }

  return (
    <section id="contact" className="section contact">
      <div className="contact-orb" aria-hidden="true" />
      <div className="wrap contact-grid">
        <Reveal>
          <p className="label">03</p>
          <h2>
            Say <span className="ember-word">hello</span>
          </h2>
          <p className="lede">Delhi NCR. Looking for a software engineer role.</p>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="contact-list">
            <div className="contact-row">
              <span className="contact-label">Email</span>
              <span className="contact-actions">
                <a className="contact-value" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
                <button className="copy-btn" type="button" onClick={copyEmail}>
                  Copy
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
              <Magnetic>
                <a className="btn btn-primary" href={profile.resumeHref} download={profile.resumeName}>
                  Download resume
                </a>
              </Magnetic>
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
        </Reveal>
      </div>
    </section>
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
