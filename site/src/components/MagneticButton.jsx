import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

export function MagneticButton({ href, className, children }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 260, damping: 22, mass: 0.35 });
  const y = useSpring(my, { stiffness: 260, damping: 22, mass: 0.35 });

  function onMove(event) {
    if (reduce) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = event.clientX - (rect.left + rect.width / 2);
    const dy = event.clientY - (rect.top + rect.height / 2);
    const limit = 12;
    mx.set(Math.max(-limit, Math.min(limit, dx * 0.22)));
    my.set(Math.max(-limit, Math.min(limit, dy * 0.22)));
  }

  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      className={className}
      style={{ x, y }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </motion.a>
  );
}
