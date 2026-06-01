"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, UserRound, Send, CheckCircle } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { GlassCard } from "@/components/effects/GlassCard";
import { NebulaBackground } from "@/components/effects/NebulaBackground";
import { StarField } from "@/components/effects/StarField";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
  { icon: UserRound, label: "LinkedIn", value: personalInfo.linkedin, href: personalInfo.linkedinUrl },
  { icon: MapPin, label: "Location", value: personalInfo.location, href: undefined },
];

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden" aria-label="Contact section">
      <NebulaBackground variant="subtle" />
      <StarField count={30} />
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading label="Contact" title="Let's Build Something Together" description="Have a project in mind or want to connect? I'd love to hear from you." />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimatedReveal direction="left">
            <div className="space-y-5">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-start gap-4 rounded-xl glass glass-hover p-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-yellow/[0.08]">
                      <Icon size={20} className="text-brand-yellow" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-muted">{item.label}</p>
                      <p className="mt-1 text-sm font-medium text-brand-white md:text-base">{item.value}</p>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a key={item.label} href={item.href} target={item.label === "LinkedIn" ? "_blank" : undefined} rel={item.label === "LinkedIn" ? "noopener noreferrer" : undefined} className="block">
                    {content}
                  </a>
                ) : <div key={item.label}>{content}</div>;
              })}

              <GlassCard glow gradient>
                <div className="p-6">
                  <p className="text-lg font-semibold text-brand-white">Ready to collaborate?</p>
                  <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                    Whether it&apos;s a freelance project, internship opportunity, or full-time role — let&apos;s talk about how I can contribute.
                  </p>
                  <div className="mt-5">
                    <MagneticButton href={`mailto:${personalInfo.email}`} variant="primary">Send an Email</MagneticButton>
                  </div>
                </div>
              </GlassCard>
            </div>
          </AnimatedReveal>

          <AnimatedReveal direction="right" delay={0.1}>
            <GlassCard tilt={false}>
              <form onSubmit={handleSubmit} className="p-6 md:p-8">
                <h3 className="mb-6 text-xl font-bold text-brand-white">Send a Message</h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-brand-muted">Name</label>
                    <Input id="name" type="text" required placeholder="Your name" value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="border-white/[0.06] bg-white/[0.02] text-brand-white placeholder:text-brand-muted/40 focus:border-brand-yellow/40 focus:ring-brand-yellow/15" />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-brand-muted">Email</label>
                    <Input id="email" type="email" required placeholder="your@email.com" value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="border-white/[0.06] bg-white/[0.02] text-brand-white placeholder:text-brand-muted/40 focus:border-brand-yellow/40 focus:ring-brand-yellow/15" />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-brand-muted">Message</label>
                    <Textarea id="message" required rows={5} placeholder="Tell me about your project or opportunity..." value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="resize-none border-white/[0.06] bg-white/[0.02] text-brand-white placeholder:text-brand-muted/40 focus:border-brand-yellow/40 focus:ring-brand-yellow/15" />
                  </div>
                  <MagneticButton type="submit" variant="primary" className="w-full">
                    {isSubmitted ? (
                      <span className="flex items-center gap-2"><CheckCircle size={18} />Opening email client...</span>
                    ) : (
                      <span className="flex items-center gap-2"><Send size={18} />Send Message</span>
                    )}
                  </MagneticButton>
                </div>
              </form>
            </GlassCard>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}
