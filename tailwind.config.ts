import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          50: "#eff4fc",
          100: "#dbe8fa",
          200: "#b8d1f5",
          300: "#85b1ed",
          400: "#4d8ae2",
          500: "#0a3ca0",
          600: "#083080",
          700: "#072663",
          800: "#07204f",
          900: "#061d41",
          950: "#041126",
        },
        surface: {
          light: "#ffffff",
          dark: "#0a0f1a",
          "dark-elevated": "#111827",
        },
        border: {
          light: "#e5e7eb",
          dark: "#1f2937",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3.2rem, 8vw, 5.75rem)", { lineHeight: "1.02", letterSpacing: "-0.035em" }],
        "display-lg": ["clamp(2.5rem, 5vw, 4rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(2rem, 4vw, 3rem)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-sm": ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "heading-lg": ["clamp(1.5rem, 2.5vw, 2rem)", { lineHeight: "1.3" }],
        "heading-md": ["clamp(1.25rem, 2vw, 1.5rem)", { lineHeight: "1.35" }],
        "heading-sm": ["clamp(1.125rem, 1.5vw, 1.25rem)", { lineHeight: "1.4" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        body: ["1rem", { lineHeight: "1.65" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
        caption: ["0.75rem", { lineHeight: "1.5" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        "glow-sm": "0 0 20px rgba(10, 60, 160, 0.15)",
        glow: "0 0 40px rgba(10, 60, 160, 0.25), 0 0 80px rgba(10, 60, 160, 0.1)",
        "glow-lg": "0 0 60px rgba(10, 60, 160, 0.3), 0 0 120px rgba(10, 60, 160, 0.15)",
        "inner-glow": "inset 0 0 40px rgba(10, 60, 160, 0.1)",
        card: "0 4px 24px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.04)",
        "card-dark": "0 4px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)",
        "card-hover": "0 12px 48px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06)",
        "card-hover-dark": "0 12px 48px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.08)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "mesh-gradient": "linear-gradient(135deg, var(--tw-gradient-stops))",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "fade-in-down": "fadeInDown 0.8s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "rotate-slow": "rotateSlow 20s linear infinite",
        shimmer: "shimmer 2s ease-in-out infinite",
        "text-reveal": "textReveal 1s ease-out forwards",
        "border-beam": "borderBeam 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(10, 60, 160, 0.2)" },
          "50%": { boxShadow: "0 0 40px rgba(10, 60, 160, 0.4), 0 0 80px rgba(10, 60, 160, 0.2)" },
        },
        rotateSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        textReveal: {
          "0%": { opacity: "0", transform: "translateY(100%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        borderBeam: {
          "0%, 100%": { opacity: "0", transform: "translateX(-100%)" },
          "50%": { opacity: "1", transform: "translateX(100%)" },
        },
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "ease-out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [typography],
};

export default config;
