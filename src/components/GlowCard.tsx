import React, { useCallback, useState, useRef } from "react";
import { motion } from "framer-motion";
interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  as?: "div" | "a";
}
export function GlowCard({
  children,
  className = "",
  href,
  as = "div",
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glowPosition, setGlowPosition] = useState({
    x: 50,
    y: 50,
  });
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGlowPosition({
      x,
      y,
    });
  }, []);
  const content = (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{
        scale: 1.02,
        transition: {
          duration: 0.3,
        },
      }}
      className={`relative overflow-hidden rounded-2xl ${className}`}
      style={{
        background: "rgba(255, 255, 255, 0.04)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      {/* Glow border overlay */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${glowPosition.x}% ${glowPosition.y}%, rgba(168, 85, 247, 0.15), rgba(59, 130, 246, 0.08), transparent 40%)`,
        }}
      />
      {/* Border */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-500"
        style={{
          border: "1px solid",
          borderColor: isHovered
            ? "rgba(168, 85, 247, 0.3)"
            : "rgba(255, 255, 255, 0.08)",
        }}
      />
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
  if (as === "a" && href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {content}
      </a>
    );
  }
  return content;
}
