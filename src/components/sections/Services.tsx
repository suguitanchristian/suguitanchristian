"use client";

import { Globe, Smartphone, Brain, Wrench, Palette } from "lucide-react";
import { services } from "@/data/portfolio";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";
import { GlassCard } from "@/components/effects/GlassCard";
import { StarField } from "@/components/effects/StarField";

const iconMap = { globe: Globe, smartphone: Smartphone, brain: Brain, wrench: Wrench, palette: Palette };

export function Services() {
  return (
    <section id="services" className="section-padding relative overflow-hidden" aria-label="Services section">
      <StarField count={25} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-transparent via-nebula-purple/[0.01] to-transparent" />
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading label="Services" title="What I Can Do For You" description="From concept to deployment — comprehensive development and support services." align="center" />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <AnimatedReveal key={service.title} delay={i * 0.08}>
                <GlassCard tilt className="h-full">
                  <div className="group relative p-8">
                    <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-brand-yellow/[0.02] opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                    <div className="relative">
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-yellow/[0.08] transition-all group-hover:bg-brand-yellow/[0.12] group-hover:shadow-[0_0_24px_rgba(245,197,66,0.08)]">
                        <Icon size={28} className="text-brand-yellow" />
                      </div>
                      <h3 className="mb-3 text-xl font-bold text-brand-white">{service.title}</h3>
                      <p className="text-sm leading-relaxed text-brand-muted">{service.description}</p>
                    </div>
                  </div>
                </GlassCard>
              </AnimatedReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
