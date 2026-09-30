"use client";

import { useScroll } from "@/hooks/useScroll";
import { cn } from "@/lib/utils";

export function ScrollProgress({ className }: { className?: string }) {
  const { scrollProgress } = useScroll();

  return (
    <div
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-accent-600 via-accent-400 to-accent-300",
        className
      )}
      style={{ transform: `scaleX(${scrollProgress})` }}
      aria-hidden="true"
    />
  );
}
