"use client";

import { projects } from "@/lib/projects-data";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ExternalLink, 
  ArrowLeft, 
  Github, 
  ChevronRight,
  Monitor,
  Layout,
  Target,
  Lightbulb
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { use } from "react";

export default function ProjectDetail({ params: paramsPromise }) {
  const params = use(paramsPromise);
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0B0F19] text-white">
        <Link href="/#work" className="text-violet-400 hover:underline">Project not found. Go back.</Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0B0F19] text-white font-body selection:bg-violet-500/30 pb-24">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B0F19]/80 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/#work" className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white transition-colors group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
          <div className="flex gap-4">
            {/* <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/5 rounded-full transition-colors">
              <FaGithub size={20} />
            </a> */}
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-violet-600 hover:bg-violet-500 rounded-lg text-sm font-bold transition-all">
              Live Site <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 pt-32">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="inline-block px-3 py-1 bg-violet-500/10 border border-violet-500/20 rounded text-violet-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-4"
              >
                Case Study
              </motion.span>
              <h1 className="text-5xl md:text-7xl font-headline font-bold mb-6 leading-tight">
                {project.title}
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
                {project.desc}
              </p>

              {/* Prominent Action Buttons for Large Devices */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 px-5 py-2 bg-violet-600 hover:bg-violet-500 rounded-xl text-base font-bold transition-all shadow-lg shadow-violet-600/20 active:scale-95"
                >
                  Visit Live Site <ExternalLink size={18} />
                </a>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 px-5 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-base font-bold transition-all active:scale-95"
                >
                  <FaGithub size={20} /> View Source
                </a>
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6 flex items-center gap-2">
                <Layout size={16} />
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-xs font-semibold text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="grid gap-10">
              <section className="space-y-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Target className="text-violet-500" size={20} />
                  Challenges
                </h3>
                <ul className="space-y-3">
                  {project.challenges.map((item, i) => (
                    <li key={i} className="text-slate-400 text-sm leading-relaxed flex gap-3">
                      <span className="text-violet-500/50">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Lightbulb className="text-violet-500" size={20} />
                  Future Improvements
                </h3>
                <ul className="space-y-3">
                  {project.improvements.map((item, i) => (
                    <li key={i} className="text-slate-400 text-sm leading-relaxed flex gap-3">
                      <span className="text-violet-500/50">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </motion.div>

          {/* Visual Showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="sticky top-32"
          >
            <div className="relative group rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-violet-600/5 group-hover:bg-transparent transition-colors z-10" />
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            
          </motion.div>

        </div>
      </div>
    </main>
  );
}
