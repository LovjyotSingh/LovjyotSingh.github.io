"use client";

import { useEffect, useRef, useState } from "react";

export function useScroll() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const [scrollProgress, setScrollProgress] = useState(0);
  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const currentScrollY = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollY(currentScrollY);
      setScrollDirection(currentScrollY > lastScrollY.current ? "down" : "up");
      setScrollProgress(max > 0 ? Math.min(Math.max(currentScrollY / max, 0), 1) : 0);
      lastScrollY.current = currentScrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return { scrollY, scrollDirection, scrollProgress };
}

export function useScrollPosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setPosition({ x: window.scrollX, y: window.scrollY });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return position;
}
