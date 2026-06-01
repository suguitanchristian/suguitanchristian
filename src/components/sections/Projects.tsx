"use client";

import { ArrowUpRight } from "lucide-react";
import { featuredProjects, webProjects, mobileProjects } from "@/data/portfolio";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";
import { GlassCard } from "@/components/effects/GlassCard";
import { StarField } from "@/components/effects/StarField";
import { Badge } from "@/components/ui/badge";

function ProjectCard({
  title,
  description,
  problem,
  role,
  highlights,
  tech,
  outcomes,
  category,
  featured = false,
}: {
  title: string;
  description: string;
  problem?: string;
  role: string;
  highlights?: string[];
  tech: string[];
  outcomes?: string[];
  category?: string;
  featured?: boolean;
}) {
  return (
    <GlassCard
      tilt
      glow={featured}
      gradient={featured}
      className={`h-full ${featured ? "lg:col-span-2" : ""}`}
    >
      <div className="group relative flex h-full flex-col p-6 md:p-8">
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-yellow/[0.03] opacity-0 blur-3xl transition-opacity group-hover:opacity-100" />
        <div className="relative flex flex-1 flex-col">
          <div className="mb-4 flex items-start justify-between">
            <div>
              {category && (
                <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-brand-yellow">
                  {category}
                </span>
              )}
              <h3 className="text-xl font-bold text-brand-white md:text-2xl">
                {title}
              </h3>
            </div>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full glass transition-all group-hover:bg-brand-yellow/[0.08]">
              <ArrowUpRight
                size={18}
                className="text-brand-muted transition-colors group-hover:text-brand-yellow"
              />
            </div>
          </div>

          <p className="mb-4 text-sm leading-relaxed text-brand-muted md:text-base">
            {description}
          </p>

          {problem && (
            <div className="mb-4 rounded-lg border border-white/[0.04] bg-white/[0.02] p-3">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.15em] text-brand-yellow">
                Problem
              </p>
              <p className="text-sm text-brand-muted">{problem}</p>
            </div>
          )}

          <p className="mb-4 text-sm text-brand-white">
            <span className="text-brand-muted">Role: </span>
            {role}
          </p>

          {highlights && (
            <ul className="mb-4 space-y-1.5">
              {highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-center gap-2.5 text-sm text-brand-muted"
                >
                  <span
                    className="h-1 w-1 rounded-full bg-brand-yellow"
                    style={{ boxShadow: "0 0 4px rgba(245,197,66,0.4)" }}
                  />
                  {h}
                </li>
              ))}
            </ul>
          )}

          {outcomes && (
            <div className="mb-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-brand-yellow">
                Key Outcomes
              </p>
              <ul className="space-y-1">
                {outcomes.map((o) => (
                  <li key={o} className="text-sm text-brand-muted">
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-auto flex flex-wrap gap-2 pt-2">
            {tech.map((t) => (
              <Badge
                key={t}
                variant="secondary"
                className="border-white/[0.06] bg-white/[0.03] text-brand-muted hover:bg-brand-yellow/[0.08] hover:text-brand-yellow"
              >
                {t}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </GlassCard>
  );
}

function CompactProjectCard({
  title,
  description,
  role,
  tech,
  outcomes,
}: {
  title: string;
  description: string;
  role: string;
  tech: string[];
  outcomes?: string[];
}) {
  return (
    <GlassCard tilt className="h-full">
      <div className="group flex h-full flex-col p-5">
        <h4 className="mb-2 font-semibold text-brand-white transition-colors group-hover:text-brand-yellow">
          {title}
        </h4>
        <p className="mb-3 text-sm leading-relaxed text-brand-muted">
          {description}
        </p>
        <p className="mb-3 text-xs text-brand-muted">
          <span className="text-brand-white/40">Role:</span> {role}
        </p>
        {outcomes && outcomes.length > 0 && (
          <p className="mb-3 text-xs text-brand-muted">{outcomes[0]}</p>
        )}
        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-md bg-white/[0.03] px-2 py-0.5 text-xs text-brand-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="section-padding relative overflow-hidden"
      aria-label="Projects section"
    >
      <StarField count={35} />
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-30" />
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-nebula-blue/[0.02] blur-3xl" />
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          label="Featured Projects"
          title="Work That Delivers Impact"
          description="From enterprise systems to mobile apps — solutions built to solve real problems."
        />

        {/* Featured */}
        <div className="mb-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <AnimatedReveal key={project.title} delay={i * 0.1} className="h-full">
              <ProjectCard {...project} />
            </AnimatedReveal>
          ))}
        </div>

        {/* Web */}
        <AnimatedReveal>
          <h3 className="mb-6 text-xl font-bold text-brand-white md:text-2xl">
            Web Applications &amp; Systems
          </h3>
        </AnimatedReveal>
        <div className="mb-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {webProjects.map((project, i) => (
            <AnimatedReveal key={project.title} delay={i * 0.05} className="h-full">
              <CompactProjectCard {...project} />
            </AnimatedReveal>
          ))}
        </div>

        {/* Mobile */}
        <AnimatedReveal>
          <h3 className="mb-6 text-xl font-bold text-brand-white md:text-2xl">
            Mobile Applications
          </h3>
        </AnimatedReveal>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {mobileProjects.map((project, i) => (
            <AnimatedReveal key={project.title} delay={i * 0.05} className="h-full">
              <CompactProjectCard {...project} />
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
