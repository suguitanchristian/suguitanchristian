"use client";

import { useEffect, useCallback } from "react";

export function CursorSpotlight() {
  const handleMouseMove = useCallback((e: MouseEvent) => {
    document.documentElement.style.setProperty("--cursor-x", `${e.clientX}px`);
    document.documentElement.style.setProperty("--cursor-y", `${e.clientY}px`);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 cursor-spotlight hidden md:block"
      aria-hidden="true"
    />
  );
}
