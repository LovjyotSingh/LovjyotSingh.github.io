"use client";

import { MotionConfig } from "framer-motion";
import { ThemeProvider } from "@/hooks/useTheme";
import { CursorProvider } from "@/components/layout/CursorProvider";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <CursorProvider>{children}</CursorProvider>
      </MotionConfig>
    </ThemeProvider>
  );
}
