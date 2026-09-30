export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
] as const;

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    href: "https://github.com/LovjyotSingh",
    icon: "github",
    label: "View my GitHub profile",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/lovjyotsingh",
    icon: "linkedin",
    label: "Connect on LinkedIn",
  },
  {
    name: "Email",
    href: "mailto:lovjyotsinghofficial@gmail.com",
    icon: "mail",
    label: "Send me an email",
  },
] as const;

export const SKILLS = {
  languages: [
    { name: "TypeScript", level: 95, icon: "typescript" },
    { name: "JavaScript", level: 95, icon: "javascript" },
    { name: "Java", level: 85, icon: "java" },
    { name: "SQL", level: 80, icon: "database" },
    { name: "HTML/CSS", level: 95, icon: "code" },
  ],
  frameworks: [
    { name: "React.js", level: 95, icon: "react" },
    { name: "Next.js 15", level: 90, icon: "nextjs" },
    { name: "Node.js", level: 90, icon: "nodejs" },
    { name: "Express.js", level: 88, icon: "express" },
    { name: "Socket.io", level: 85, icon: "socket" },
    { name: "Tailwind CSS", level: 95, icon: "tailwind" },
  ],
  databases: [
    { name: "MongoDB", level: 90, icon: "mongodb" },
    { name: "MySQL", level: 80, icon: "mysql" },
    { name: "Redis", level: 85, icon: "redis" },
  ],
  tools: [
    { name: "Docker", level: 75, icon: "docker" },
    { name: "Git", level: 90, icon: "git" },
    { name: "CI/CD", level: 80, icon: "cicd" },
    { name: "Postman", level: 85, icon: "postman" },
    { name: "Vercel", level: 90, icon: "vercel" },
    { name: "Render", level: 80, icon: "render" },
  ],
  fundamentals: [
    "Data Structures & Algorithms (150+ problems solved)",
    "System Design (HLD/LLD)",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks",
    "Microservices Architecture",
    "RESTful APIs & Webhooks",
    "JWT Authentication",
  ],
} as const;

export const PROJECTS = [
  {
    id: "offerforge",
    title: "OfferForge AI",
    tagline: "Full-Stack AI Mock Interview Platform",
    description:
      "Structured interview loops for 7 tracks with rubric-based grading using Gemini & OpenRouter. Real-time session integrity with JWT auth and atomic operations.",
    longDescription:
      "OfferForge AI is a comprehensive mock interview platform that simulates real interview experiences across 7 career tracks: SDE, Frontend, Backend, Data, Product, and more. Each track features structured interview rounds including DSA, System Design, OOP, SQL, and Behavioral sections with configurable difficulty levels. The platform uses a sophisticated AI grading pipeline powered by Gemini and OpenRouter that evaluates responses against a 4-criterion rubric, providing detailed feedback including strengths, gaps, model answers, and hire recommendations. A fallback curated question bank ensures reliability even when AI services are unavailable. Built with React/Vite on the frontend and Express on the backend, deployed on Vercel with MongoDB for persistence and JWT-based authentication for session integrity.",
    tech: ["React", "Vite", "TypeScript", "Node.js", "Express", "MongoDB", "Gemini API", "OpenRouter", "JWT", "Vercel"],
    liveUrl: "https://offer-forge-ai.vercel.app/",
    repoUrl: "https://github.com/LovjyotSingh/OfferForge-AI",
    image: "/images/offerforge.png",
    featured: true,
    metrics: {
      users: "500+",
      interviews: "1.2k+",
      uptime: "99.9%",
    },
  },
  {
    id: "syncflow",
    title: "SyncFlow",
    tagline: "Real-Time Collaborative Workspace",
    description:
      "Multiplayer block editor with Yjs CRDT sync, Socket.io broadcasting, Redis persistence, and granular access control. Next.js 16 + TypeScript.",
    longDescription:
      "SyncFlow is a real-time collaborative workspace featuring a Notion-style block editor built with BlockNote. Multiple users can simultaneously edit documents with conflict-free merging powered by Yjs CRDTs, with changes broadcast instantly via Socket.io. The backend implements a sophisticated persistence layer: document state is written to Redis after a 700ms quiet period with a 30-day TTL, while membership, share tokens, and file uploads are stored in MongoDB. This ensures instant reloads with full document restoration. Access control features include rotatable share links, email invitations, live presence indicators, and member-only file uploads capped at 10MB. The web app runs on Vercel while the Socket.io server operates as a long-lived Node.js process on Render.",
    tech: ["Next.js 16", "TypeScript", "BlockNote", "Yjs", "Socket.io", "Redis", "MongoDB", "Express", "JWT", "Vercel", "Render"],
    liveUrl: "https://syncflow-sss.vercel.app",
    repoUrl: "https://github.com/lovjyotsingh/syncflow",
    image: "/images/syncflow.png",
    featured: true,
    metrics: {
      concurrent: "50+",
      documents: "2.5k+",
      latency: "<50ms",
    },
  },
] as const;

export type Project = (typeof PROJECTS)[number];

export const EXPERIENCE = [
  {
    id: "ibm",
    role: "Front-End Engineering Trainee",
    company: "IBM Web Development Program",
    period: "Jul 2025 – Aug 2025",
    location: "Remote",
    type: "Certification",
    highlights: [
      "Completed industry-led, project-based training in React.js, TypeScript, and Tailwind CSS",
      "Applied production-grade patterns including component architecture, state management, and accessibility standards",
      "Built responsive, performant UIs following modern front-end best practices",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Accessibility", "Testing"],
  },
  {
    id: "offerforge-exp",
    role: "Full-Stack Developer (Personal Project)",
    company: "OfferForge AI",
    period: "2024 – Present",
    location: "Faridabad, India",
    type: "Project",
    highlights: [
      "Architected and deployed a full-stack AI mock interview platform serving 500+ users",
      "Implemented rubric-based AI grading pipeline with Gemini/OpenRouter and fallback systems",
      "Designed scalable MongoDB schema with JWT auth and atomic operation handling",
    ],
    tech: ["React", "Node.js", "MongoDB", "Gemini API", "Vercel"],
  },
  {
    id: "syncflow-exp",
    role: "Full-Stack Developer (Personal Project)",
    company: "SyncFlow",
    period: "2024 – Present",
    location: "Faridabad, India",
    type: "Project",
    highlights: [
      "Built real-time collaborative editor with Yjs CRDTs and Socket.io broadcasting",
      "Implemented Redis-backed persistence with 700ms debounce and 30-day TTL",
      "Designed granular access control with share links, invites, and presence",
    ],
    tech: ["Next.js", "TypeScript", "Yjs", "Socket.io", "Redis", "MongoDB"],
  },
] as const;

export const EDUCATION = [
  {
    degree: "Bachelor of Technology – Computer Science and Engineering",
    school: "USICT, Guru Gobind Singh Indraprastha University, New Delhi",
    period: "Jul 2022 – Jul 2026",
    location: "New Delhi, India",
    highlights: [
      "Relevant Coursework: Data Structures & Algorithms, System Design, DBMS, Operating Systems, Computer Networks",
      "150+ DSA problems solved on LeetCode/Codeforces",
      "Active participant in hackathons and coding competitions",
    ],
  },
] as const;

export const CONTACT_INFO = {
  email: "lovjyotsinghofficial@gmail.com",
  phone: "+91-9958473062",
  location: "Faridabad, Haryana (Delhi NCR), India",
  availability: "Immediate joiner",
} as const;

export const RESUME_URL = "/Lovjyot%20Singh%20Resume.pdf";
