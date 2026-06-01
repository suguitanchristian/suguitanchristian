"use client";

import { motion } from "framer-motion";
import { Workflow, Plug, Sparkles, MessageSquare, Network, Cog, Zap, CheckCircle2 } from "lucide-react";
import { aiExpertise, aiBenefits } from "@/data/portfolio";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";
import { GlassCard } from "@/components/effects/GlassCard";
import { NebulaBackground } from "@/components/effects/NebulaBackground";
import { StarField } from "@/components/effects/StarField";

const iconMap = { workflow: Workflow, plug: Plug, sparkles: Sparkles, message: MessageSquare, network: Network, cog: Cog };

export function AISection() {
  return (
    <section id="ai" className="section-padding relative overflow-hidden" aria-label="AI Development section">
      <NebulaBackground variant="section" />
      <StarField count={50} />
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-nebula-purple/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading label="AI Development" title="Building with AI" description="Leveraging agentic AI workflows and intelligent automation to transform how software gets built." align="center" />

        <div className="mb-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {aiExpertise.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <AnimatedReveal key={item.title} delay={i * 0.08}>
                <GlassCard tilt className="h-full">
                  <div className="group p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-yellow/[0.08] transition-all group-hover:bg-brand-yellow/15 group-hover:shadow-[0_0_20px_rgba(245,197,66,0.1)]">
                      <Icon size={24} className="text-brand-yellow" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-brand-white">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-brand-muted">{item.description}</p>
                  </div>
                </GlassCard>
              </AnimatedReveal>
            );
          })}
        </div>

        <AnimatedReveal>
          <div className="rounded-3xl gradient-border-subtle glass-strong glow-cosmic p-8 md:p-12">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-yellow/[0.08]">
                    <Zap size={20} className="text-brand-yellow" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-white">How I Leverage AI</h3>
                </div>
                <p className="text-base leading-[1.8] text-brand-muted">
                  AI isn&apos;t just a tool — it&apos;s a force multiplier. I integrate intelligent workflows into every stage of development, from ideation to deployment, creating faster, smarter, and more reliable software.
                </p>
              </div>
              <ul className="space-y-4">
                {aiBenefits.map((benefit, i) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
                    whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-yellow" />
                    <span className="text-sm text-brand-white md:text-base">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Orbital workflow pipeline */}
            <div className="mt-10 flex items-center justify-center gap-2 overflow-x-auto py-4 md:gap-4">
              {["Ideate", "Build", "Debug", "Deploy", "Iterate"].map((step, i) => (
                <div key={step} className="flex items-center gap-2 md:gap-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.12 }}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full glass text-xs font-bold text-brand-yellow transition-all hover:bg-brand-yellow/[0.08] hover:shadow-[0_0_20px_rgba(245,197,66,0.1)] md:h-14 md:w-14 md:text-sm"
                      style={{ boxShadow: "0 0 8px rgba(245,197,66,0.06)" }}
                    >
                      {i + 1}
                    </div>
                    <span className="whitespace-nowrap text-xs text-brand-muted">{step}</span>
                  </motion.div>
                  {i < 4 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.12 }}
                      className="hidden h-px w-8 origin-left bg-gradient-to-r from-brand-yellow/30 to-nebula-purple/15 md:block lg:w-16"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
