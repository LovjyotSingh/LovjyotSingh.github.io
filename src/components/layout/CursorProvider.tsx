"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { ReactNode } from "react";

export function CursorProvider({ children }: { children: ReactNode }) {
  const reducedMotion = useReducedMotion();
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reducedMotion) return;
    const el = glowRef.current;
    if (!el) return;

    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;
    let frame = 0;
    let running = false;

    const loop = () => {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      el.style.transform = `translate3d(${currentX - 170}px, ${currentY - 170}px, 0)`;
      if (Math.abs(targetX - currentX) > 0.4 || Math.abs(targetY - currentY) > 0.4) {
        frame = requestAnimationFrame(loop);
      } else {
        running = false;
      }
    };

    const onMove = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      el.style.opacity = "1";
      if (!running) {
        running = true;
        frame = requestAnimationFrame(loop);
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, [reducedMotion]);

  return (
    <>
      {children}
      <div ref={glowRef} className="cursor-glow" aria-hidden="true" />
    </>
  );
}
