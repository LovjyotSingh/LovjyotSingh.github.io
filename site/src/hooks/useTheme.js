import { useCallback, useEffect, useState } from "react";

const COLORS = { dark: "#0B0A09", light: "#FAF6EF" };

const read = () => (document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark");

export default function useTheme() {
  const [theme, setTheme] = useState(read);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", COLORS[theme]);
  }, [theme]);

  const toggle = useCallback(() => {
    const root = document.documentElement;
    root.classList.add("theme-fade");
    window.setTimeout(() => root.classList.remove("theme-fade"), 450);
    setTheme((current) => {
      const next = current === "light" ? "dark" : "light";
      try {
        localStorage.setItem("theme", next);
      } catch {
        /* storage unavailable */
      }
      return next;
    });
  }, []);

  return { theme, toggle };
}
