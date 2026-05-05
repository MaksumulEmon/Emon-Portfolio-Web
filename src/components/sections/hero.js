"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import emon from "../../assets/emon.png";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { Spotlight } from "../animations/spotlight";
import { Magnetic } from "../animations/magnetic";
import { Reveal } from "../animations/reveal";

export default function Hero() {
  const texts = ["Md Maksumul Haque Emon", "MERN Stack Developer", "Future Full Stack Developer"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Spotlight className="min-h-[90vh] flex items-center justify-center pt-20 mb-20">
      <section id="hero" className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 font-semibold text-sm w-fit mt-5 lg:mt-0"
          >
            <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse " />
            Available for New Opportunities
          </motion.div>

          <div className="space-y-4">
            <Reveal delay={0.2}>
              <h2 className="text-2xl md:text-3xl font-medium text-text-secondary">Hello, I'm</h2>
            </Reveal>
            <div className="relative h-[120px] md:h-[140px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={index}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  className="text-5xl md:text-7xl font-headline font-extrabold text-foreground leading-tight"
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-blue-400 to-emerald-400">
                    {texts[index]}
                  </span>
                </motion.h1>
              </AnimatePresence>
            </div>
            <Reveal delay={0.4}>
              <p className="text-lg md:text-xl text-text-secondary max-w-lg leading-relaxed">
                Building high-performance web applications with refined aesthetics and modern technologies.
              </p>
            </Reveal>
          </div>

          <div className="flex gap-6 items-center">
            <div className="flex gap-4">
              {[
                { icon: FaFacebookF, href: "https://www.facebook.com/share/1B8gFDCrLm/" },
                { icon: GrInstagram, href: "https://www.instagram.com/em_on37x?igsh=N29tZWE3ZmFzZHk2" },
                { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/maksumulemon/" },
                { icon: FaGithub, href: "https://github.com/MaksumulEmon" }
              ].map((social, i) => (
                <Magnetic key={i}>
                  <motion.a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 glass-card rounded-2xl text-foreground hover:text-violet-400 transition-colors block border border-white/5"
                  >
                    <social.icon size={20} />
                  </motion.a>
                </Magnetic>
              ))}
            </div>

            {/* <Magnetic strength={0.2}>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-3 bg-violet-600 text-white rounded-xl font-bold overflow-hidden transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10">Get in Touch</span>
              </motion.button>
            </Magnetic> */}

          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-violet-500 to-blue-500 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="w-72 h-72 md:w-[400px] md:h-[400px] rounded-[2rem] border border-white/10 p-2 overflow-hidden relative z-10 bg-white/5 backdrop-blur-sm">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={emon.src}
                alt="Md Maksumul Haque Emon"
                className="w-full h-full object-cover rounded-[1.5rem]"
              />
            </div>

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 p-4 glass-card rounded-2xl border border-white/10 z-20 hidden md:block"
            >
              <span className="text-2xl">🚀</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 p-4 glass-card rounded-2xl border border-white/10 z-20 hidden md:block"
            >
              <span className="text-2xl">💻</span>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </Spotlight>
  );
}