import { ImageResponse } from "next/og";

export const alt = "AI Pick — Find the right AI tool for the job";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div style={{
        width: "100%", height: "100%", display: "flex", flexDirection: "column",
        justifyContent: "space-between", padding: "76px 84px",
        background: "linear-gradient(135deg, #0b1220 0%, #132d45 55%, #176b70 100%)",
        color: "#f8fafc", fontFamily: "Arial, sans-serif"
      }}>
        <div style={{ display: "flex", alignItems: "center", fontSize: 38, fontWeight: 800, letterSpacing: "-1px" }}>
          AI <span style={{ color: "#6ee7c8", marginLeft: 10 }}>Pick</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 980 }}>
          <div style={{ fontSize: 25, letterSpacing: "5px", color: "#6ee7c8", marginBottom: 22 }}>AI TOOL DISCOVERY</div>
          <div style={{ fontSize: 66, lineHeight: 1.12, fontWeight: 800, letterSpacing: "-2px" }}>
            Find the right AI tool for the job.
          </div>
          <div style={{ fontSize: 29, lineHeight: 1.4, color: "#d5e3ec", marginTop: 28 }}>
            Compare tools, free plans, pricing and practical creator workflows in India.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 22, color: "#c4d8e4" }}>ai-pick-alen317.vercel.app</div>
      </div>
    ),
    { ...size }
  );
}
