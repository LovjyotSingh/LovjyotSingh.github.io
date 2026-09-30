import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const siteDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(siteDir, "dist");
const repoRoot = path.resolve(siteDir, "..");

if (!fs.existsSync(path.join(dist, "index.html"))) {
  console.error("Missing site/dist/index.html. Vite build did not finish.");
  process.exit(1);
}

fs.rmSync(path.join(repoRoot, "assets"), { recursive: true, force: true });
fs.cpSync(path.join(dist, "assets"), path.join(repoRoot, "assets"), { recursive: true });
fs.copyFileSync(path.join(dist, "index.html"), path.join(repoRoot, "index.html"));

for (const file of [".nojekyll", "favicon.svg"]) {
  const from = path.join(dist, file);
  if (fs.existsSync(from)) fs.copyFileSync(from, path.join(repoRoot, file));
}

console.log("Published the static site to the repository root for GitHub Pages.");
