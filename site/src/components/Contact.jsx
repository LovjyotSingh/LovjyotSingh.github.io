import toast from "react-hot-toast";
import { profile } from "../content.js";
import { Magnetic, Reveal } from "../effects.jsx";

const rows = [
  { label: "Email", href: `mailto:${profile.email}`, value: profile.email },
  { label: "GitHub", href: profile.github, value: profile.githubLabel, external: true },
  { label: "LinkedIn", href: profile.linkedin, value: profile.linkedinLabel, external: true },
  { label: "Phone", href: profile.phoneHref, value: profile.phoneDisplay },
];

export function Contact() {
  async function copyEmail() {
    const ok = await writeClipboard(profile.email);
    if (ok) toast.success("Email copied");
    else toast.error("Could not copy the email");
  }

  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="contact-glow" aria-hidden="true" />
      <Reveal className="contact-copy">
        <p className="kicker">Contact</p>
        <h2 id="contact-title">
          Say <span className="ember-word">hello.</span>
        </h2>
        <p className="lede">Delhi NCR. I am looking for a software engineer role.</p>
        <div className="contact-actions">
          <Magnetic>
            <a className="btn btn-primary btn-lg" href={profile.resumeHref} download={profile.resumeName}>
              Download resume
            </a>
          </Magnetic>
          <a className="btn btn-ghost btn-lg" href={`mailto:${profile.email}`}>
            Email me
          </a>
          <button className="btn btn-ghost btn-lg" type="button" onClick={copyEmail}>
            Copy email
          </button>
        </div>
      </Reveal>

      <Reveal className="contact-list" delay={0.1}>
        {rows.map((row) => (
          <a key={row.label} className="contact-row" href={row.href} target={row.external ? "_blank" : undefined} rel={row.external ? "noreferrer" : undefined}>
            <span>{row.label}</span>
            <strong>{row.value}</strong>
            <i className="contact-arrow" aria-hidden="true">
              ↗
            </i>
          </a>
        ))}
      </Reveal>
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
