import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

export function TypingLine({ phrases }) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduce !== false) return undefined;
    const full = phrases[index];
    const done = count === full.length;
    const empty = count === 0;
    let delay = deleting ? 26 : 40;
    if (!deleting && done) delay = 1700;
    if (deleting && empty) delay = 380;

    const timer = window.setTimeout(() => {
      if (!deleting && done) {
        setDeleting(true);
        return;
      }
      if (deleting && empty) {
        setDeleting(false);
        setIndex((current) => (current + 1) % phrases.length);
        return;
      }
      setCount((current) => current + (deleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [count, deleting, index, phrases, reduce]);

  const text = reduce !== false ? phrases[0] : phrases[index].slice(0, count);

  return (
    <p className="typing">
      <span className="sr-only">{phrases[0]}</span>
      <span className="typing-text" aria-hidden="true">
        {text}
        {reduce !== false ? null : <span className="caret" />}
      </span>
    </p>
  );
}
