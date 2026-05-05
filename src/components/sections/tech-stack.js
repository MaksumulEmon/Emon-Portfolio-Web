"use client";

import { motion } from "framer-motion";
import { Layout, Cloud, Globe } from "lucide-react";
import { Spotlight } from "../animations/spotlight";
import { Reveal } from "../animations/reveal";

const techData = [
  {
    category: "Frontend Development",
    icon: Layout,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    glow: "shadow-[0_0_20px_rgba(139,92,246,0.1)]",
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
  },
  {
    category: "Backend & DevOps",
    icon: Cloud,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    glow: "shadow-[0_0_20px_rgba(59,130,246,0.1)]",
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Docker", "AWS"],
  },
  {
    category: "Languages & Tools",
    icon: Globe,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    glow: "shadow-[0_0_20px_rgba(16,185,129,0.1)]",
    skills: ["JavaScript", "Python","typeScript", "Github", "Git", "Redis","vercel" ],
  },
];

const marqueeSkills = [
  "React", "Next.js", "Node.js", "TailwindCSS", "Framer Motion",
  "GraphQL", "AWS", "PostgreSQL", "Redis", "Python", "TypeScript", "Docker", "Express", "MongoDB"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function TechStack() {
  return (
    <section id="tech" className="max-w-7xl mx-auto px-6 py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-500/5 blur-[120px] -z-10 rounded-full" />

      <div className="text-center mb-20">
        <Reveal width="100%">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-6">Tech Stack</h2>
        </Reveal>
        <Reveal width="100%" delay={0.3}>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            A comprehensive set of tools and frameworks I leverage to build robust, scalable, and beautiful applications.
          </p>
        </Reveal>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-3 gap-8 mb-24"
      >
        {techData.map((tech, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="h-full"
          >
            <Spotlight
              spotlightColor={tech.bg.replace('10', '25')}
              className={`group h-full glass-card p-8 rounded-[2.5rem] border ${tech.border} ${tech.glow} hover:border-white/20 transition-all duration-500 relative`}
            >
              <div className="space-y-8 relative z-10">
                <div className={`w-14 h-14 ${tech.bg} rounded-2xl flex items-center justify-center ${tech.color} group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                  <tech.icon size={28} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all">
                    {tech.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {tech.skills.map((skill, skillIdx) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + (skillIdx * 0.05) }}
                        className="px-4 py-1.5 bg-white/5 rounded-full text-sm font-medium text-text-secondary border border-white/5 group-hover:border-white/20 group-hover:bg-white/10 transition-all duration-100"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative background glow */}
              <div className={`absolute -bottom-10 -right-10 w-32 h-32 ${tech.bg} blur-[60px] opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
            </Spotlight>
          </motion.div>
        ))}
      </motion.div>

      {/* Marquee Section */}
      <div className="relative flex overflow-x-hidden  border-y border-white/5">
        <div className="animate-marquee gap-12 flex items-center">
          {[...marqueeSkills, ...marqueeSkills,].map((skill, i) => (
            <div
              key={i}
              className="text-3xl md:text-5xl font-headline font-black text-white/300 hover:text-violet-500/40 transition-colors cursor-default select-none uppercase tracking-tighter"

            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

