"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="relative rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-tertiary)] p-2"
        aria-label="Toggle theme"
        disabled
      >
        <span className="block h-5 w-5" />
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-tertiary)] p-2",
        "transition-all duration-300 hover:border-accent-500/40",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
      )}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
    >
      <span className="relative flex h-5 w-5 items-center justify-center">
        <Sun
          className={cn(
            "absolute h-5 w-5 transition-all duration-300 ease-out-expo",
            isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
          )}
          aria-hidden="true"
        />
        <Moon
          className={cn(
            "absolute h-5 w-5 transition-all duration-300 ease-out-expo",
            isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
          )}
          aria-hidden="true"
        />
      </span>
    </button>
  );
}
