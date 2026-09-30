import { motion } from "framer-motion";
import { profile } from "../content.js";
import { stagger } from "../motion.js";
import { MagneticButton } from "./MagneticButton.jsx";
import { Word } from "./Word.jsx";

const pitchWords = profile.pitch.split(" ");

export function Hero() {
  return (
    <header className="hero" id="top">
      <motion.div
        className="wrap hero-top"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="label">Open to work</p>
        <p className="hero-loc">{profile.location}</p>
      </motion.div>

      <div className="wrap hero-bottom">
        <motion.h1
          className="name"
          aria-label={`${profile.given} ${profile.family}`}
          variants={stagger(0.09, 0.04)}
          initial="hidden"
          animate="show"
        >
          <Word>{profile.given}</Word>
          <Word accent>{profile.family}</Word>
        </motion.h1>
        <motion.p className="pitch" variants={stagger(0.035, 0.22)} initial="hidden" animate="show">
          <span className="sr-only">{profile.pitch}</span>
          {pitchWords.map((word, index) => (
            <Word key={`${word}-${index}`} quiet>
              {word}
            </Word>
          ))}
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.72, ease: [0.22, 1, 0.36, 1] }}
        >
          <MagneticButton href="#work" className="btn btn-primary">
            See selected work <span className="arrow" aria-hidden="true">→</span>
          </MagneticButton>
          <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
            GitHub <span className="sr-only">(opens in a new tab)</span>
          </a>
        </motion.div>
        <motion.p
          className="hero-school"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <span>{profile.school}</span>
          <span>{profile.degree}</span>
          <span>{profile.years}</span>
        </motion.p>
      </div>
    </header>
  );
}
