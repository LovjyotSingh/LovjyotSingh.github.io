"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  color: string;
}

export function ParticleBackground({
  className,
  particleCount = 48,
  connectionDistance = 150,
  accentColor = "#0a3ca0",
}: {
  className?: string;
  particleCount?: number;
  connectionDistance?: number;
  accentColor?: string;
}) {
  const reducedMotion = useReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const colors = [accentColor, "#4d8ae2", "#85b1ed"];
    const mouse = { x: -1000, y: -1000 };
    const size = { width: 0, height: 0 };
    let particles: Particle[] = [];
    let frame = 0;
    let running = true;

    const init = (width: number, height: number) => {
      const count = width < 768 ? Math.min(24, particleCount) : particleCount;
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.8 + 0.6,
        opacity: Math.random() * 0.45 + 0.15,
        color: colors[Math.floor(Math.random() * colors.length)],
      }));
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = parent.clientWidth;
      const height = parent.clientHeight;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      size.width = width;
      size.height = height;
      init(width, height);
    };

    const draw = () => {
      if (!running) return;
      const { width, height } = size;
      const dark = document.documentElement.classList.contains("dark");
      ctx.clearRect(0, 0, width, height);

      for (const particle of particles) {
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 180 && dist > 0) {
          const force = ((180 - dist) / 180) * 0.02;
          particle.vx += (dx / dist) * force;
          particle.vy += (dy / dist) * force;
        }
        particle.vx *= 0.99;
        particle.vy *= 0.99;
        particle.x += particle.vx;
        particle.y += particle.vy;
        if (particle.x < 0 || particle.x > width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > height) particle.vy *= -1;
        particle.x = Math.max(0, Math.min(width, particle.x));
        particle.y = Math.max(0, Math.min(height, particle.y));

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = dark ? particle.color : accentColor;
        ctx.globalAlpha = dark ? particle.opacity : particle.opacity * 0.7;
        ctx.fill();
      }

      ctx.strokeStyle = dark ? "#8eb6f5" : accentColor;
      ctx.lineWidth = 0.6;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.hypot(dx, dy);
          if (dist < connectionDistance) {
            ctx.globalAlpha = (1 - dist / connectionDistance) * (dark ? 0.22 : 0.12);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
      frame = requestAnimationFrame(draw);
    };

    const onMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(frame);
      } else if (!running && !reducedMotion) {
        running = true;
        frame = requestAnimationFrame(draw);
      }
    };

    resize();
    if (!reducedMotion) frame = requestAnimationFrame(draw);

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [accentColor, connectionDistance, particleCount, reducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }}
      aria-hidden="true"
    />
  );
}
