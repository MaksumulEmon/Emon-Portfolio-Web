"use client";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { projects } from "../../lib/projects-data";
import Image from "next/image";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="work" className="max-w-container-max mx-auto px-6 py-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-foreground">
            Featured Projects
          </h2>
          <p className="text-text-secondary mt-4 text-lg">
            A selection of my recent works across different sectors, focusing on performance and user experience.
          </p>
        </motion.div>

        {!showAll && projects.length > 3 && (
          <motion.button
            onClick={() => setShowAll(true)}
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="flex text-violet-400 font-semibold items-center gap-2 hover:underline decoration-2 underline-offset-8 transition-all group"
          >
            View All Projects
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        )}
        {showAll && (
          <motion.button
            onClick={() => setShowAll(false)}
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex text-violet-400 font-semibold items-center gap-2 hover:underline decoration-2 underline-offset-8 transition-all group"
          >
            Show Less
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform rotate-180" />
          </motion.button>
        )}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        layout
      >
        <AnimatePresence mode="popLayout">
          {displayedProjects.map((project, i) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.9 }}
              layout
              className="glass-card rounded-3xl overflow-hidden group flex flex-col h-full border border-glass-border hover:border-violet-500/30 transition-colors"
            >
              {/* Image Section */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>

              {/* Content Section */}
              <div className="p-6 space-y-4 flex-grow flex flex-col">
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-violet-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">
                    {project.desc}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-3 py-1.5 bg-foreground/5 rounded-lg font-bold text-text-secondary uppercase tracking-widest border border-glass-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <div className="pt-2">
                  <Link href={`/project/${project.id}`} className="w-full block">
                    <motion.button
                      whileHover={{ scale: 1.02, backgroundColor: "rgba(139, 92, 246, 0.1)" }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-violet-500/30 text-violet-400 font-bold text-sm transition-all group-hover:border-violet-500/60"
                    >
                      View Project Details
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}