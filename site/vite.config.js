import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const resumePath = path.resolve(root, "../Lovjyot Singh CV.pdf");

export default defineConfig({
  base: "./",
  plugins: [
    react(),
    {
      name: "serve-resume",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const pathname = decodeURIComponent(req.url.split("?")[0]);
          if (pathname !== "/Lovjyot Singh CV.pdf") {
            next();
            return;
          }
          res.setHeader("Content-Type", "application/pdf");
          fs.createReadStream(resumePath).pipe(res);
        });
      },
    },
  ],
});
