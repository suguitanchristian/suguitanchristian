"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  type?: "button" | "submit";
}

export function MagneticButton({
  children,
  className,
  onClick,
  href,
  variant = "primary",
  type = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const prefersReduced = useReducedMotion();

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (prefersReduced || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      setPosition({ x: x * 0.2, y: y * 0.2 });
    },
    [prefersReduced]
  );

  const handleMouseLeave = useCallback(() => setPosition({ x: 0, y: 0 }), []);

  const variants = {
    primary:
      "bg-brand-yellow text-space-void font-semibold shadow-[0_0_24px_rgba(245,197,66,0.15)] hover:shadow-[0_0_40px_rgba(245,197,66,0.25)]",
    secondary:
      "glass-strong text-brand-white hover:border-brand-yellow/20",
    ghost: "text-brand-muted hover:text-brand-yellow",
  };

  const content = (
    <motion.span
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn(
        "inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3 text-sm transition-all duration-300 md:px-8 md:py-3.5 md:text-base",
        variants[variant]
      )}
    >
      {children}
    </motion.span>
  );

  const wrapperCn = cn("inline-block", className);

  if (href) {
    return (
      <div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className={wrapperCn}>
        <a href={href} className="block">{content}</a>
      </div>
    );
  }

  return (
    <div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className={wrapperCn}>
      <button type={type} onClick={onClick} className="block w-full">{content}</button>
    </div>
  );
}
