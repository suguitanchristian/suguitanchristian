"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skillCategories } from "@/data/portfolio";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";
import { StarField } from "@/components/effects/StarField";
import { cn } from "@/lib/utils";

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="section-padding relative overflow-hidden" aria-label="Skills section">
      <StarField count={30} />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-nebula-purple/[0.02] blur-3xl" />
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          label="Technical Skills"
          title="Tools & Technologies"
          description="A diverse toolkit spanning full-stack development, AI automation, and systems administration."
        />

        <AnimatedReveal>
          <div className="mb-10 flex flex-wrap gap-2">
            {skillCategories.map((category, index) => (
              <button
                key={category.title}
                type="button"
                onClick={() => setActiveCategory(index)}
                className={cn(
                  "relative rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-400",
                  activeCategory === index
                    ? "bg-brand-yellow text-space-void shadow-[0_0_24px_rgba(245,197,66,0.15)]"
                    : "glass text-brand-muted hover:text-brand-white"
                )}
              >
                {category.title}
              </button>
            ))}
          </div>
        </AnimatedReveal>

        <AnimatedReveal delay={0.1}>
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
          >
            {skillCategories[activeCategory].skills.map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
                whileHover={{ y: -6, scale: 1.04, transition: { duration: 0.25 } }}
                className="group flex items-center justify-center rounded-xl glass glass-hover px-4 py-4 text-center"
              >
                <span className="text-sm font-medium text-brand-white transition-colors group-hover:text-brand-yellow">
                  {skill}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedReveal>

        <AnimatedReveal delay={0.2}>
          <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl glass glass-hover p-6"
              >
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-brand-yellow">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="rounded-md bg-white/[0.03] px-2.5 py-1 text-xs text-brand-muted transition-colors hover:bg-brand-yellow/[0.08] hover:text-brand-yellow">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
