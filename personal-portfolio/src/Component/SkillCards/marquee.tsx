import React from "react";

export interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  direction?: "left" | "right";
  className?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({
  children,
  speed = 50,
  direction = "left",
  className = "",
}) => {
  // Simple marquee effect using CSS animation
  const marqueeStyle: React.CSSProperties = {
    display: "inline-block",
    whiteSpace: "nowrap",
    animation: `marquee ${speed}s linear infinite`,
    animationDirection: direction === "left" ? "normal" : "reverse",
  };

  return (
    <div className={className} style={{ overflow: "hidden", width: "100%" }}>
      <div style={marqueeStyle}>{children}</div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
};
