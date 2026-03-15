import { useEffect, useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";

const CursorSpotlight = () => {
  const { theme } = useTheme();
  const [pos, setPos] = useState({ x: -9999, y: -9999 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const gradient =
    theme === "dark"
      ? `radial-gradient(circle at ${pos.x}px ${pos.y}px, rgba(255,255,255,0.07), transparent 80px)`
      : `radial-gradient(circle at ${pos.x}px ${pos.y}px, rgba(0,0,0,0.04), transparent 80px)`;

  const cursorColor =
    theme === "dark" ? "rgba(255,255,255,0.85)" : "rgba(0,0,0,0.7)";
  const cursorGlow =
    theme === "dark" ? "0 0 8px rgba(255,255,255,0.35)" : "none";

  return (
    <>
      {/* Spotlight overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 9999,
          background: gradient,
        }}
        aria-hidden="true"
      />

      {/* Custom >_ cursor */}
      <div
        style={{
          position: "fixed",
          left: pos.x,
          top: pos.y,
          transform: "translate(2px, -50%)",
          pointerEvents: "none",
          zIndex: 10000,
          display: "flex",
          alignItems: "center",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "14px",
          fontWeight: 600,
          lineHeight: 1,
          userSelect: "none",
          color: cursorColor,
          textShadow: cursorGlow,
        }}
        aria-hidden="true"
      >
        <span>&gt;</span>
        <span style={{ animation: "cursor-blink 1s step-end infinite" }}>_</span>
      </div>
    </>
  );
};

export default CursorSpotlight;
