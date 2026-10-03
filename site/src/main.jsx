import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MotionConfig } from "framer-motion";
import { Toaster } from "react-hot-toast";
import App from "./App.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: "var(--raised)",
            color: "var(--text)",
            border: "1px solid var(--line-hi)",
            borderRadius: "14px",
            fontSize: "14px",
          },
          iconTheme: { primary: "#FF6B1A", secondary: "#0B0A09" },
        }}
      />
      <App />
    </MotionConfig>
  </StrictMode>
);
