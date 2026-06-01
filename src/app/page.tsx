"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { AISection } from "@/components/sections/AISection";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <AISection />
      <Services />
      <Contact />
    </motion.div>
  );
}
