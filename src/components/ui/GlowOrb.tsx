"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

interface GlowOrbProps {
  className?: string;
  size?: number;
  color?: string;
  intensity?: number;
  blur?: number;
  duration?: string;
  delay?: string;
}

function withAlpha(hex: string, alpha: number) {
  const channel = Math.max(0, Math.min(255, Math.round(alpha * 255)))
    .toString(16)
    .padStart(2, "0");
  return `${hex}${channel}`;
}

export function GlowOrb({
  className,
  size = 400,
  color = "#0a3ca0",
  intensity = 0.3,
  blur = 80,
  duration = "8s",
  delay = "0s",
}: GlowOrbProps) {
  return (
    <div
      className={cn("pointer-events-none absolute rounded-full animate-float", className)}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle at center, ${withAlpha(color, intensity)} 0%, ${color}00 70%)`,
        filter: `blur(${blur}px)`,
        animationDuration: duration,
        animationDelay: delay,
      }}
      aria-hidden="true"
    />
  );
}

const ORBS = [
  { size: 540, color: "#0a3ca0", intensity: 0.28, blur: 90, className: "-top-24 -left-16", duration: "9s", delay: "0s", depth: 1.1 },
  { size: 420, color: "#4d8ae2", intensity: 0.22, blur: 80, className: "top-[42%] -right-20", duration: "11s", delay: "1s", depth: 0.7 },
  { size: 320, color: "#85b1ed", intensity: 0.32, blur: 70, className: "bottom-[-8%] left-[28%]", duration: "8s", delay: "0.4s", depth: 1.4 },
];

export function GlowOrbGroup({ count = 3, className }: { count?: number; className?: string }) {
  const reducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || reducedMotion) return;

    const onMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 36;
      const y = (event.clientY / window.innerHeight - 0.5) * 28;
      node.style.setProperty("--mx", `${x}px`);
      node.style.setProperty("--my", `${y}px`);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [reducedMotion]);

  return (
    <div ref={ref} className={cn("absolute inset-0 overflow-hidden", className)} aria-hidden="true">
      {ORBS.slice(0, count).map((orb) => (
        <div
          key={orb.className}
          className={cn("absolute transition-transform duration-700 ease-out", orb.className)}
          style={{ transform: `translate3d(calc(var(--mx) * ${orb.depth}), calc(var(--my) * ${orb.depth}), 0)` }}
        >
          <GlowOrb
            size={orb.size}
            color={orb.color}
            intensity={orb.intensity}
            blur={orb.blur}
            duration={orb.duration}
            delay={orb.delay}
          />
        </div>
      ))}
    </div>
  );
}
