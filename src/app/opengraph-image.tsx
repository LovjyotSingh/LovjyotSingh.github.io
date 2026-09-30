import { ImageResponse } from "next/og";

export const alt = "Lovjyot Singh — Full-Stack Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(145deg, #071433 0%, #0a3ca0 55%, #4d8ae2 100%)",
          color: "white",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 4, textTransform: "uppercase", opacity: 0.85 }}>
          Lovjyot Singh
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -2, lineHeight: 1.05 }}>
            Full-Stack Engineer
          </div>
          <div style={{ marginTop: 24, fontSize: 30, opacity: 0.92 }}>
            React · Next.js · Node.js · Real-time systems
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
