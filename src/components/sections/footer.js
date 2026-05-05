"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-glass-border py-12 mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center px-6 gap-6"
      >
        <div className="text-lg font-bold text-foreground tracking-tighter">ALEX DEV</div>
        
        <div className="text-text-secondary text-sm font-medium">
          © {new Date().getFullYear()} Alex Dev. Built with precision.
        </div>
        
        <div className="flex gap-8">
          {["GitHub", "LinkedIn", "Twitter"].map((social) => (
            <a
              key={social}
              href="#"
              className="text-text-secondary hover:text-foreground transition-colors hover:underline decoration-violet-500 underline-offset-4 text-sm font-semibold"
            >
              {social}
            </a>
          ))}
        </div>
      </motion.div>
    </footer>
  );
}
