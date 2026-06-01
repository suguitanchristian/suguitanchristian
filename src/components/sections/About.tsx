"use client";

import { GraduationCap, MapPin } from "lucide-react";
import { personalInfo, aboutNarrative } from "@/data/portfolio";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";
import { ProfileImage } from "@/components/shared/ProfileImage";
import { GlassCard } from "@/components/effects/GlassCard";
import { StarField } from "@/components/effects/StarField";

export function About() {
  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden"
      aria-label="About section"
    >
      <StarField count={40} />
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-nebula-purple/[0.02] blur-3xl" />
      <div className="pointer-events-none absolute left-0 bottom-0 h-[400px] w-[400px] rounded-full bg-brand-yellow/[0.02] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          label="About Me"
          title={`Hi, I'm ${personalInfo.name.split(" ")[0]}`}
          description="A developer who bridges code, AI, and real-world problem solving."
        />

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <AnimatedReveal direction="left" className="flex justify-center lg:col-span-4 lg:justify-start">
            <ProfileImage size="about" />
          </AnimatedReveal>

          <div className="lg:col-span-8">
            <AnimatedReveal delay={0.1}>
              <div className="mb-8 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-brand-muted">
                  <MapPin size={14} className="text-brand-yellow" />
                  {personalInfo.location}
                </div>
                <div className="flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-brand-muted">
                  <GraduationCap size={14} className="text-brand-yellow" />
                  {personalInfo.education.school}
                </div>
              </div>
            </AnimatedReveal>

            <div className="space-y-5">
              {aboutNarrative.map((paragraph, i) => (
                <AnimatedReveal key={i} delay={0.15 + i * 0.08}>
                  <p className="text-base leading-[1.8] text-brand-muted md:text-lg">
                    {paragraph}
                  </p>
                </AnimatedReveal>
              ))}
            </div>

            <AnimatedReveal delay={0.5}>
              <GlassCard className="mt-10" glow>
                <div className="p-6 md:p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-yellow/[0.08]">
                      <GraduationCap size={20} className="text-brand-yellow" />
                    </div>
                    <h3 className="text-lg font-semibold text-brand-white">Education</h3>
                  </div>
                  <div className="space-y-1.5">
                    <p className="font-medium text-brand-white">{personalInfo.education.degree}</p>
                    <p className="text-sm text-brand-yellow">{personalInfo.education.major}</p>
                    <p className="text-sm text-brand-muted">
                      {personalInfo.education.school} &middot; {personalInfo.education.period}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </AnimatedReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
