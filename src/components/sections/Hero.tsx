"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Bot, Code2, Headphones } from "lucide-react";
import { personalInfo, heroStats } from "@/data/portfolio";
import { ProfileImage } from "@/components/shared/ProfileImage";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { NebulaBackground } from "@/components/effects/NebulaBackground";
import { StarField } from "@/components/effects/StarField";

const statIcons = { code: Code2, bot: Bot, headphones: Headphones };

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

export function Hero() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden section-padding pt-32"
      aria-label="Hero section"
    >
      <NebulaBackground variant="hero" />
      <StarField count={100} />
      <div className="pointer-events-none absolute inset-0 grid-pattern" />

      {/* Horizon glow */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-yellow/20 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 right-1/4 h-32 bg-gradient-to-t from-brand-yellow/[0.03] to-transparent blur-2xl" />

      {/* Floating celestial bodies */}
      {!prefersReduced && (
        <>
          <motion.div
            className="pointer-events-none absolute right-[15%] top-[20%] h-2 w-2 rounded-full bg-brand-yellow/40"
            style={{ boxShadow: "0 0 12px rgba(245, 197, 66, 0.3)" }}
            animate={{ y: [0, -15, 0], x: [0, 5, 0], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="pointer-events-none absolute left-[10%] top-[60%] h-1.5 w-1.5 rounded-full bg-nebula-purple/50"
            style={{ boxShadow: "0 0 10px rgba(124, 58, 237, 0.3)" }}
            animate={{ y: [0, -10, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          <motion.div
            className="pointer-events-none absolute left-[60%] top-[15%] h-1 w-1 rounded-full bg-nebula-cyan/50"
            style={{ boxShadow: "0 0 8px rgba(6, 182, 212, 0.3)" }}
            animate={{ y: [0, -8, 0], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </>
      )}

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="order-2 lg:order-1"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm text-brand-yellow">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
              Open to opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold leading-[1.06] tracking-tight text-brand-white md:text-5xl lg:text-6xl xl:text-7xl"
          >
            Building{" "}
            <span className="text-gradient-cosmic">Intelligent Solutions</span>{" "}
            Through Code & AI
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-xl text-base leading-relaxed text-brand-muted md:text-lg"
          >
            {personalInfo.subheadline}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#projects" variant="primary">
              View Projects
            </MagneticButton>
            <MagneticButton href="#contact" variant="secondary">
              Contact Me
            </MagneticButton>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3"
          >
            {heroStats.map((stat) => {
              const Icon = statIcons[stat.icon];
              return (
                <div
                  key={stat.label}
                  className="group flex items-center gap-3 rounded-xl glass glass-hover px-4 py-3"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-yellow/[0.08] transition-colors group-hover:bg-brand-yellow/15">
                    <Icon size={18} className="text-brand-yellow" />
                  </div>
                  <span className="text-sm font-medium text-brand-white">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, filter: "blur(12px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="order-1 flex justify-center lg:order-2"
        >
          <ProfileImage size="hero" priority />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brand-muted transition-colors hover:text-brand-yellow"
        aria-label="Scroll to about section"
      >
        <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.a>
    </section>
  );
}
