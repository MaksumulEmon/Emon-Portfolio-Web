"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import img1 from "../../assets/emon2.jpg"
import pro1 from "../../assets/pro1.png"
import pro2 from "../../assets/pro2.png"
import pro3 from "../../assets/pro3.png"
import Image from "next/image";

const projects = [
  {
    title: "Tiles-Gallery",
    desc: "A modern Next.js Tiles Gallery web application featuring dynamic image grids, smooth transitions, and high-performance rendering.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    image: pro1,
    live: "https://tiles-gallery-three.vercel.app/",
    github: "https://github.com/MaksumulEmon/Tiles-Gallery",
    gradient: "from-violet-500/20 to-blue-500/20",
  },
  {
    title: "Keen-Keeper",
    desc: "KeenKeeper is a modern and intuitive friend tracking application that helps users monitor, manage, and stay connected with their friends' activities in real time. It provides a clean interface with categorized interaction types like calls, texts, and video activities.",
    tags: ["React.js", "Tailwind CSS + DaisyUI", "API"],
    image: pro2,
    live: "https://b13-a07-keen-keeper.vercel.app/",
    github: "https://github.com/MaksumulEmon/Keen-Keeper",
    gradient: "from-blue-500/20 to-emerald-500/20",
  },
  {
    title: "DigiTools-Platform",
    desc: "This project is a responsive and feature-rich web platform that allows users to browse and buy subscriptions for various digital tools, software, and online services. It offers a seamless user experience with organized categories, clear pricing options, and easy navigation, making it simple for users to find and select the right digital solutions efficiently.",
    tags: [" React.js", "Tailwind CSS","JavaScript (ES6+)"],
    image: pro3,
    live: "https://your-live-link.com",
    github: "https://github.com/your-repo",
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "DigiTools-Platformjkfskgj",
    desc: "This project is a responsive  xc cxand feature-rich web platform that allows users to browse and buy subscriptions for various digital tools, software, and online services. It offers a seamless user experience with organized categories, clear pricing options, and easy navigation, making it simple for users to find and select the right digital solutions efficiently.",
    tags: [" React.jsdfsf", "Tailwind CSS","JavaScript (ES6+)"],
    image: pro3,
    live: "https://your-live-link.comfgdf",
    github: "https://github.com/your-repo",
    gradient: "from-orange-500/20 to-red-500/20",
  },
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

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Projects() {
  return (
    <section id="work" className="max-w-container-max mx-auto px-6 py-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
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

        <motion.button
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.95 }}
          className="flex text-violet-400 font-semibold items-center gap-2 hover:underline decoration-2 underline-offset-8 transition-all group"
        >
          View All Projects
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="glass-card rounded-[2.5rem] overflow-hidden group flex flex-col h-full border border-glass-border hover:border-violet-500/30 transition-colors"
          >
            {/* Image Section */}
            <div className={`h-64 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>

            {/* Content Section */}
            <div className="p-8 space-y-6 flex-grow flex flex-col">
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-violet-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-base leading-relaxed line-clamp-3">
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

              {/* Action Buttons */}
              <div className="flex flex-col md:flex-row gap-3 ">
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold text-sm shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 transition-all"
                >
                  <ExternalLink size={18} />
                  Live Site
                </motion.a>

                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded bg-white/5 hover:bg-white/10 border border-glass-border text-foreground font-bold text-sm backdrop-blur-md transition-all"
                >
                  <FaGithub size={18} />
                  Source Code
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}