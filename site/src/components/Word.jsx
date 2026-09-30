import { motion } from "framer-motion";
import { wordReveal } from "../motion.js";

export function Word({ children, accent = false, quiet = false }) {
  return (
    <span className="word-mask" aria-hidden={quiet ? "true" : undefined}>
      <motion.span className="word" variants={wordReveal}>
        {accent ? <span className="ember-word">{children}</span> : children}
      </motion.span>
    </span>
  );
}
