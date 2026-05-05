"use client";

import { motion } from "framer-motion";
import { User, Code, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import emon2 from "../../assets/emon2.jpg"

export default function About() {
  return (
    <section id="about" className="bg-surface  py-20 relative overflow-hidden">
      <div className="max-w-container-max mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.divs
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative group"
        >
          <div className="w-64 h-64 mx-auto md:mx-0 glass-card rounded-3xl rotate-3 group-hover:rotate-0 transition-transform duration-500 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-violet-600/20" />
            {/* <User size={96} className="text-violet-400" /> */}
            <Image src={emon2.src} alt="emon" fill className="object-cover">

            </Image>
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute -bottom-6 -right-6 md:right-32 w-24 h-24 glass-card rounded-2xl flex items-center justify-center shadow-xl"
          >
            <Code size={40} className="text-blue-400" />
          </motion.div>
        </motion.divs>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-headline font-bold text-foreground">About Me</h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            I am a Computer Science and Technology student. I am passionate about building modern and responsive web applications using Next.js and other modern web technologies. I enjoy learning new tools and technologies and continuously improving my development skills to create better user experiences.
          </p>

          <div className="grid grid-cols-2 gap-4 pb-4">
            {[
              { label: "Projects Done", value: "15+", color: "text-violet-400" },
              { label: "Tech Stack", value: "12+", color: "text-blue-400" },
            ].map((stat, i) => (
              <div key={i} className="p-4 glass-card rounded-xl">
                <div className={cn(stat.color, "text-2xl font-bold")}>{stat.value}</div>
                <div className="text-xs font-semibold uppercase tracking-wider text-text-secondary opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-foreground/5 hover:bg-foreground/10 border border-glass-border text-foreground px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-2 transition-all"
          >
            <Download size={20} />
            Download CV
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}


