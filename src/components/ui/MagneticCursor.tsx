"use client";

import { useCallback, useState, type ReactNode } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

interface MagneticCursorProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export function MagneticCursor({ children, className, strength = 0.28 }: MagneticCursorProps) {
  const reducedMotion = useReducedMotion();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (reducedMotion) return;
      const rect = event.currentTarget.getBoundingClientRect();
      const x = Math.max(-16, Math.min(16, (event.clientX - rect.left - rect.width / 2) * strength));
      const y = Math.max(-12, Math.min(12, (event.clientY - rect.top - rect.height / 2) * strength));
      setPosition({ x, y });
    },
    [reducedMotion, strength]
  );

  return (
    <div
      className={cn("relative inline-block transition-transform duration-200 ease-out", className)}
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
    >
      {children}
    </div>
  );
}
