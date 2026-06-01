"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  tilt?: boolean;
  glow?: boolean;
  gradient?: boolean;
  as?: "div" | "article";
}

export function GlassCard({
  children,
  className,
  tilt = true,
  glow = false,
  gradient = false,
  as: Tag = "div",
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!tilt || !cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const rotateX = (y - 0.5) * -6;
      const rotateY = (x - 0.5) * 6;
      setTransform(`perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`);
      setGlarePos({ x: x * 100, y: y * 100 });
    },
    [tilt]
  );

  const handleMouseLeave = useCallback(() => {
    setTransform("perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setGlarePos({ x: 50, y: 50 });
  }, []);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: "transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }}
      className={cn(
        "relative overflow-hidden rounded-2xl",
        gradient ? "gradient-border-subtle" : "glass glass-hover",
        glow && "glow-cosmic",
        className
      )}
    >
      {tilt && (
        <div
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(245,197,66,0.04) 0%, transparent 50%)`,
          }}
          aria-hidden="true"
        />
      )}
      <Tag className="relative z-[1] h-full">{children}</Tag>
    </motion.div>
  );
}
