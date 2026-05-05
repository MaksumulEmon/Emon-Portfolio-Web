"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code, ArrowRight, Recycle, Navigation, BarChart3 } from "lucide-react";
import img1 from "../../assets/emon2.jpg"
import pro1 from "../../assets/pro1.png"
import Image from "next/image";

const projects = [
  {
    title: "Tiles-Gallery",
    desc: "A modern Next.js Tiles Gallery web application...",
    tags: ["Next.js", "TensorFlow"],
    image: pro1,
    live: "https://tiles-gallery-three.vercel.app/",
    github: "https://github.com/MaksumulEmon/Tiles-Gallery",
    gradient: "from-violet-500/20 to-blue-500/20",
  },
  {
    title: "Vectra",
    desc: "High-speed vector navigation for complex datasets with real-time visualization.",
    tags: ["Vue", "D3.js"],
    image: img1,
    live: "https://your-live-link.com",
    github: "https://github.com/your-repo",
    gradient: "from-blue-500/20 to-emerald-500/20",
  },
  {
    title: "Affiliated Pro",
    desc: "Comprehensive affiliate management dashboard with automated payouts.",
    tags: ["Node.js", "Stripe"],
    image: img1,
    live: "https://your-live-link.com",
    github: "https://github.com/your-repo",
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "jkdfjhjdhf",
    desc: "Comprehensive affiliate management dashboard with automated payoutsdfsdgggggds.",
    tags: ["Node.js", "Stripe.fjhhgjfg"],
    image: img1,
    live: "https://your-live-link.comdsgsd",
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
      <div className="flex justify-between items-end mb-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-headline font-bold text-foreground ">
            Featured Projects
          </h2>
          <p className="text-text-secondary mt-2">
            A selection of my recent works across different sectors.
          </p>
        </motion.div>

        <motion.button
          whileHover={{ x: 5 }}
          className="hidden md:flex text-violet-400 font-semibold items-center gap-2 hover:underline decoration-2 underline-offset-8 transition-all"
        >
          View All Projects <ArrowRight size={18} />
        </motion.button>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-8"
      >
        {projects.map((project, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="glass-card rounded-3xl overflow-hidden group flex flex-col h-full"
          >
            <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
              
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover rounded-xl opacity-70 group-hover:scale-110 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                
                <a href={project.live} target="_blank">
                  <button className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform">
                    <ExternalLink size={20} />
                  </button>
                </a>

                <a href={project.github} target="_blank">
                  <button className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform">
                    <Code size={20} />
                  </button>
                </a>

              </div>
            </div>

            <div className="p-6 space-y-4 flex-grow flex flex-col">
              <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{project.desc}</p>
              <div className="flex gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[10px] px-2 py-1 bg-foreground/5 rounded font-semibold text-text-secondary opacity-80 uppercase tracking-widest border border-glass-border">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}