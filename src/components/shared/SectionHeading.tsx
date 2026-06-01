"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const prefersReduced = useReducedMotion();

  const anim = prefersReduced
    ? {}
    : {
        initial: { opacity: 0, y: 20, filter: "blur(6px)" },
        whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
        viewport: { once: true },
      };

  return (
    <div
      className={cn(
        "mb-16 max-w-3xl md:mb-20",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <motion.span
        {...anim}
        transition={{ duration: 0.6 }}
        className="mb-4 inline-block rounded-full border border-brand-yellow/15 bg-brand-yellow/[0.06] px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-yellow"
      >
        {label}
      </motion.span>
      <motion.h2
        {...anim}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-3xl font-bold tracking-tight text-brand-white md:text-4xl lg:text-5xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          {...anim}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-5 text-base leading-relaxed text-brand-muted md:text-lg"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
