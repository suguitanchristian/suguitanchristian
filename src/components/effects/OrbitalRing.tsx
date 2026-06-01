"use client";

import { cn } from "@/lib/utils";

interface OrbitalRingProps {
  size?: number;
  duration?: number;
  className?: string;
  color?: string;
  dotCount?: number;
}

export function OrbitalRing({
  size = 300,
  duration = 30,
  className,
  color = "rgba(245, 197, 66, 0.12)",
  dotCount = 3,
}: OrbitalRingProps) {
  return (
    <div
      className={cn("pointer-events-none absolute", className)}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {/* Ring path */}
      <div
        className="absolute inset-0 rounded-full"
        style={{ border: `1px solid ${color}` }}
      />
      {/* Orbiting dots */}
      <div
        className="absolute inset-0"
        style={{ animation: `orbit ${duration}s linear infinite` }}
      >
        {Array.from({ length: dotCount }).map((_, i) => {
          const angle = (360 / dotCount) * i;
          const rad = (angle * Math.PI) / 180;
          const r = size / 2;
          const x = r + r * Math.cos(rad) - 2;
          const y = r + r * Math.sin(rad) - 2;
          return (
            <div
              key={i}
              className="absolute h-[4px] w-[4px] rounded-full bg-brand-yellow"
              style={{
                left: x,
                top: y,
                boxShadow: "0 0 8px rgba(245, 197, 66, 0.4)",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
