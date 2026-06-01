"use client";

import { cn } from "@/lib/utils";

interface NebulaBackgroundProps {
  className?: string;
  variant?: "hero" | "section" | "subtle";
}

export function NebulaBackground({ className, variant = "hero" }: NebulaBackgroundProps) {
  const configs = {
    hero: {
      blob1: "from-brand-yellow/[0.06] to-brand-amber/[0.03]",
      blob2: "from-nebula-purple/[0.04] to-nebula-blue/[0.02]",
      blob3: "from-nebula-cyan/[0.03] to-nebula-purple/[0.02]",
      size: "w-[700px] h-[700px] md:w-[900px] md:h-[900px]",
    },
    section: {
      blob1: "from-brand-yellow/[0.04] to-transparent",
      blob2: "from-nebula-purple/[0.03] to-transparent",
      blob3: "from-nebula-blue/[0.02] to-transparent",
      size: "w-[500px] h-[500px] md:w-[700px] md:h-[700px]",
    },
    subtle: {
      blob1: "from-brand-yellow/[0.02] to-transparent",
      blob2: "from-nebula-purple/[0.015] to-transparent",
      blob3: "from-nebula-blue/[0.01] to-transparent",
      size: "w-[400px] h-[400px] md:w-[600px] md:h-[600px]",
    },
  };

  const c = configs[variant];

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden="true">
      <div
        className={cn("absolute -left-1/4 -top-1/4 rounded-full bg-gradient-radial blur-3xl", c.blob1, c.size)}
        style={{ animation: "nebula-drift 20s ease-in-out infinite", background: `radial-gradient(circle, var(--color-brand-yellow, #f5c542) 0%, transparent 70%)`, opacity: variant === "hero" ? 0.06 : 0.03 }}
      />
      <div
        className={cn("absolute -right-1/4 top-1/4 rounded-full blur-3xl", c.size)}
        style={{ animation: "nebula-drift-alt 25s ease-in-out infinite", background: "radial-gradient(circle, rgba(124, 58, 237, 0.5) 0%, transparent 70%)", opacity: variant === "hero" ? 0.05 : 0.025 }}
      />
      <div
        className={cn("absolute bottom-0 left-1/3 rounded-full blur-3xl", c.size)}
        style={{ animation: "nebula-drift 22s ease-in-out infinite reverse", background: "radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, transparent 70%)", opacity: variant === "hero" ? 0.04 : 0.02 }}
      />
    </div>
  );
}
