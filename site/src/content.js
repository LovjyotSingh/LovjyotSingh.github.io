export const profile = {
  name: "Lovjyot Singh",
  given: "Lovjyot",
  family: "Singh",
  pitch: "B.Tech CSE graduate looking for a software engineer role.",
  location: "Delhi NCR",
  school: "USICT, GGSIPU",
  degree: "B.Tech CSE",
  years: "2022–2026",
  email: "lovjyotsinghofficial@gmail.com",
  phoneDisplay: "+91 99584 73062",
  phoneHref: "tel:+919958473062",
  github: "https://github.com/LovjyotSingh",
  githubLabel: "github.com/LovjyotSingh",
  linkedin: "https://linkedin.com/in/lovjyotsingh",
  linkedinLabel: "linkedin.com/in/lovjyotsingh",
  resumeHref: "Lovjyot%20Singh%20Resume.pdf",
  resumeName: "Lovjyot Singh Resume.pdf",
};

export const projects = [
  {
    index: "01",
    name: "OfferForge AI",
    featured: true,
    live: "https://offer-forge-ai.vercel.app/",
    host: "offer-forge-ai.vercel.app",
    source: "https://github.com/LovjyotSingh/OfferForge-AI",
    summary:
      "A structured AI mock-interview platform. Interviews are split into role-based sections and graded with a rubric. Auth uses MongoDB. The client is React and Vite, the API is Express, and the app is deployed on Vercel.",
    stack: ["React", "Vite", "Express", "MongoDB", "Vercel"],
    lines: [
      "Role-based sections, graded with a rubric",
      "MongoDB auth for signed-in use",
      "React and Vite, with an Express API",
      "Client and API both deployed on Vercel",
    ],
  },
  {
    index: "02",
    name: "SyncFlow",
    featured: false,
    live: "https://syncflow-sss.vercel.app",
    host: "syncflow-sss.vercel.app",
    source: "https://github.com/LovjyotSingh/SyncFlow",
    summary:
      "A real-time collaborative workspace. Edits sync over Socket.io, documents are stored in MongoDB, and Redis keeps the hot cache short. Built with Next.js and TypeScript.",
    stack: ["Next.js", "TypeScript", "Socket.io", "MongoDB", "Redis"],
    lines: [
      "Edits sync in real time over Socket.io",
      "Documents stored in MongoDB",
      "Redis keeps the hot cache short",
      "Built with Next.js and TypeScript",
    ],
  },
];

export const journey = [
  {
    title: "USICT, GGSIPU",
    meta: "2022 – 2026",
    body: "B.Tech in Computer Science and Engineering, 2022 to 2026.",
  },
  {
    title: "OfferForge AI",
    meta: "Shipped",
    body: "A structured AI mock-interview platform. Role-based sections, rubric grading, and MongoDB auth. React and Vite on the client, Express on the API, both on Vercel.",
  },
  {
    title: "SyncFlow",
    meta: "Shipped",
    body: "A real-time collaborative workspace. Socket.io keeps edits in sync, MongoDB stores the documents, and Redis covers the hot cache.",
  },
  {
    title: "What I want next",
    meta: "Now",
    body: "A software engineer role. I am in Delhi NCR and I can start.",
  },
];

export const skillGroups = [
  { title: "Languages", items: ["JavaScript", "TypeScript", "Java", "SQL"] },
  { title: "Frontend", items: ["React", "Next.js", "Vite", "Tailwind CSS"] },
  { title: "Backend", items: ["Node.js", "Express", "Socket.io"] },
  { title: "Data", items: ["MongoDB", "Redis", "MySQL"] },
  { title: "Tooling and deploy", items: ["Docker", "Git", "Vercel", "Render"] },
];

export const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "Next.js",
  "Vite",
  "Node.js",
  "Express",
  "MongoDB",
  "Redis",
  "Socket.io",
  "SQL",
  "MySQL",
  "Java",
  "Tailwind CSS",
  "Docker",
  "Git",
  "Vercel",
  "Render",
];
