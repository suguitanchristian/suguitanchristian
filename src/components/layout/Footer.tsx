"use client";

import { personalInfo } from "@/data/portfolio";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.04] bg-space-void px-6 py-16 md:px-12 lg:px-20">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-yellow/[0.01] to-transparent" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
        <AnimatedReveal>
          <div className="text-center md:text-left">
            <p className="text-lg font-bold text-brand-white">
              {personalInfo.name}
            </p>
            <p className="mt-1 text-sm text-brand-muted">
              Building intelligent solutions through code & AI
            </p>
          </div>
        </AnimatedReveal>

        <AnimatedReveal delay={0.1}>
          <div className="flex items-center gap-6">
            <a href={`mailto:${personalInfo.email}`} className="rounded-full px-3 py-1.5 text-sm text-brand-muted transition-all hover:bg-white/[0.03] hover:text-brand-yellow">
              Email
            </a>
            <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className="rounded-full px-3 py-1.5 text-sm text-brand-muted transition-all hover:bg-white/[0.03] hover:text-brand-yellow">
              LinkedIn
            </a>
            <a href="#contact" className="rounded-full px-3 py-1.5 text-sm text-brand-muted transition-all hover:bg-white/[0.03] hover:text-brand-yellow">
              Contact
            </a>
          </div>
        </AnimatedReveal>

        <AnimatedReveal delay={0.2}>
          <p className="text-xs text-brand-muted/50">
            &copy; {currentYear} {personalInfo.name}
          </p>
        </AnimatedReveal>
      </div>
    </footer>
  );
}
