"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Briefcase } from "lucide-react";
import { experience } from "@/data/portfolio";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";
import { NebulaBackground } from "@/components/effects/NebulaBackground";

export function Experience() {
  const [expandedRole, setExpandedRole] = useState<number | null>(0);

  return (
    <section
      id="experience"
      className="section-padding relative overflow-hidden"
      aria-label="Experience section"
    >
      <NebulaBackground variant="subtle" />

      {/* Depth separator */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          label="Experience"
          title="Professional Journey"
          description="Hands-on experience across development, AI, systems administration, and technical support."
        />

        {experience.map((job) => (
          <div key={job.company} className="relative">
            {/* Orbital timeline */}
            <div className="absolute left-[19px] top-0 hidden h-full w-px md:block">
              <div className="h-full w-full bg-gradient-to-b from-brand-yellow/30 via-nebula-purple/15 to-transparent" />
            </div>

            <AnimatedReveal>
              <div className="mb-8 flex items-start gap-6">
                <div className="relative z-10 hidden h-10 w-10 shrink-0 items-center justify-center rounded-full glass md:flex">
                  <div className="absolute inset-0 rounded-full bg-brand-yellow/15 animate-ping" style={{ animationDuration: "4s" }} />
                  <Briefcase size={16} className="relative text-brand-yellow" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-white md:text-3xl">{job.company}</h3>
                  <p className="mt-1 text-sm font-medium text-brand-yellow">{job.period}</p>
                </div>
              </div>
            </AnimatedReveal>

            <div className="space-y-3 md:ml-16">
              {job.roles.map((role, index) => {
                const isExpanded = expandedRole === index;
                return (
                  <AnimatedReveal key={role.title} delay={index * 0.06}>
                    <div className="overflow-hidden rounded-xl glass glass-hover">
                      <button
                        type="button"
                        onClick={() => setExpandedRole(isExpanded ? null : index)}
                        className="flex w-full items-center justify-between px-5 py-4 text-left"
                        aria-expanded={isExpanded}
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-1.5 w-1.5 rounded-full bg-brand-yellow" style={{ boxShadow: "0 0 6px rgba(245,197,66,0.4)" }} />
                          <span className="font-medium text-brand-white">{role.title}</span>
                        </div>
                        <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
                          <ChevronDown size={18} className="text-brand-muted" />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <ul className="space-y-2.5 border-t border-white/[0.04] px-5 py-4">
                              {role.responsibilities.map((item) => (
                                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-brand-muted">
                                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-yellow/50" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </AnimatedReveal>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
