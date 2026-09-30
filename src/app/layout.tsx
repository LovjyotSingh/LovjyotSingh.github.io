import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "600"],
});

const description =
  "CSE graduate from USICT, GGSIPU. Building production-grade applications with React, Next.js, and Node.js. Two live products: OfferForge AI and SyncFlow. Immediate joiner.";

export const metadata: Metadata = {
  metadataBase: new URL("https://lovjyotsingh.dev"),
  title: {
    default: "Lovjyot Singh | Full-Stack Engineer",
    template: "%s | Lovjyot Singh",
  },
  description,
  keywords: [
    "Full-Stack Engineer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Real-time Systems",
    "AI Integration",
    "Portfolio",
    "Lovjyot Singh",
  ],
  authors: [{ name: "Lovjyot Singh" }],
  creator: "Lovjyot Singh",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lovjyotsingh.dev",
    title: "Lovjyot Singh | Full-Stack Engineer",
    description,
    siteName: "Lovjyot Singh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lovjyot Singh | Full-Stack Engineer",
    description,
    creator: "@lovjyotsingh",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0f1a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const themeBootScript = `(function(){try{var t=localStorage.getItem("theme");var d=t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches);if(d)document.documentElement.classList.add("dark");}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://linkedin.com" />
        <link rel="dns-prefetch" href="https://vercel.com" />
      </head>
      <body className="min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] antialiased">
        <Providers>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent-500 focus:px-4 focus:py-2 focus:text-white"
          >
            Skip to content
          </a>
          <ScrollProgress />
          <Navbar />
          <main id="main-content">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
