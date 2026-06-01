"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProfileImageProps {
  size?: "hero" | "about";
  className?: string;
  priority?: boolean;
}

export function ProfileImage({
  size = "hero",
  className,
  priority = false,
}: ProfileImageProps) {
  const isHero = size === "hero";

  const sizeClasses = {
    hero: "h-[380px] w-[320px] md:h-[480px] md:w-[400px] lg:h-[560px] lg:w-[460px]",
    about: "h-[280px] w-[240px] md:h-[340px] md:w-[300px]",
  };

  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      {isHero && (
        <>
          {/* Neon geometric triangle behind image */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[45%]">
            <motion.div
              animate={{ rotate: [0, 1, -1, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Outer triangle glow */}
              <svg
                width="520"
                height="520"
                viewBox="0 0 520 520"
                fill="none"
                className="hidden md:block"
                style={{ filter: "drop-shadow(0 0 30px rgba(245, 197, 66, 0.3)) drop-shadow(0 0 60px rgba(245, 197, 66, 0.1))" }}
              >
                <path
                  d="M260 40 L480 440 L40 440 Z"
                  stroke="url(#tri-grad)"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.6"
                />
                <path
                  d="M260 80 L450 420 L70 420 Z"
                  stroke="url(#tri-grad-inner)"
                  strokeWidth="0.8"
                  fill="none"
                  opacity="0.3"
                />
                <defs>
                  <linearGradient id="tri-grad" x1="0" y1="0" x2="520" y2="520">
                    <stop offset="0%" stopColor="#f5c542" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#f59e42" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.3" />
                  </linearGradient>
                  <linearGradient id="tri-grad-inner" x1="520" y1="0" x2="0" y2="520">
                    <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#f5c542" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </div>

          {/* Neon ring behind profile */}
          <motion.div
            animate={{ scale: [1, 1.03, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[340px] w-[340px] md:h-[440px] md:w-[440px] lg:h-[500px] lg:w-[500px] rounded-full"
            style={{
              background: "conic-gradient(from 0deg, rgba(245,197,66,0.15), rgba(124,58,237,0.08), rgba(245,197,66,0.15))",
              filter: "blur(1px)",
            }}
          />

          {/* Deep ambient glow */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] md:h-[600px] md:w-[600px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(245,197,66,0.08) 0%, rgba(124,58,237,0.03) 40%, transparent 70%)",
            }}
          />
        </>
      )}

      {!isHero && (
        <>
          <div className="absolute inset-0 -m-8 rounded-full bg-brand-yellow/[0.04] blur-3xl" />
          <div className="absolute inset-0 -m-12 rounded-full bg-nebula-purple/[0.02] blur-3xl" />
        </>
      )}

      <motion.div
        animate={{
          y: [0, -8, 0],
          transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const },
        }}
        className={cn("relative", sizeClasses[size])}
      >
        {/* Gradient border */}
        <div className="absolute -inset-[2px] rounded-3xl overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
            style={{
              background: isHero
                ? "conic-gradient(from 0deg, #f5c542, rgba(124,58,237,0.4), #f59e42, rgba(124,58,237,0.4), #f5c542)"
                : "linear-gradient(135deg, rgba(245,197,66,0.3), rgba(124,58,237,0.15))",
            }}
          />
        </div>

        <div className="relative h-full w-full overflow-hidden rounded-3xl glass-strong">
          {/* Inner luminance overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-yellow/[0.03] via-transparent to-nebula-purple/[0.02]" />

          {/* Corner accents with glow */}
          <div className="absolute left-3 top-3 h-5 w-5 border-l border-t border-brand-yellow/30" style={{ boxShadow: "-2px -2px 8px rgba(245,197,66,0.1)" }} />
          <div className="absolute right-3 top-3 h-5 w-5 border-r border-t border-nebula-purple/25" />
          <div className="absolute bottom-3 left-3 h-5 w-5 border-b border-l border-nebula-purple/20" />
          <div className="absolute bottom-3 right-3 h-5 w-5 border-b border-r border-brand-yellow/30" style={{ boxShadow: "2px 2px 8px rgba(245,197,66,0.1)" }} />

          <div className="relative flex h-full w-full items-end justify-center overflow-hidden p-2 pt-4">
            <Image
              src="/images/profile.png"
              alt="Christian Suguitan - Web Developer and AI Engineer"
              width={460}
              height={560}
              priority={priority}
              className="h-auto w-full max-w-[95%] object-contain object-bottom mix-blend-lighten"
              style={{
                filter: isHero
                  ? "drop-shadow(0 0 40px rgba(245,197,66,0.12)) drop-shadow(0 0 80px rgba(124,58,237,0.06))"
                  : "drop-shadow(0 8px 40px rgba(245,197,66,0.1))",
              }}
            />
          </div>
        </div>

        {/* Status badge */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full glass-strong px-4 py-1.5 text-xs font-medium text-brand-yellow" style={{ boxShadow: "0 0 20px rgba(245,197,66,0.08)" }}>
          <span className="mr-1.5 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
          Available for opportunities
        </div>
      </motion.div>
    </div>
  );
}
