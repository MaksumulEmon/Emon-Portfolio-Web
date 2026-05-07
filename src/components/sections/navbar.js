"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import Link from "next/link";
import { Magnetic } from "../animations/magnetic";
import { useLenis } from "lenis/react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skill", href: "#skill" },
  { name: "Education", href: "#education" },
  { name: "Project", href: "#work" },
  // { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  const activeSection = useScrollSpy(navItems.map((item) => item.href.slice(1)));

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const lenis = useLenis();

  const handleScroll = (e, href) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(href, {
        offset: 0,
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 w-full z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="bg-background/60 backdrop-blur-2xl border border-white/10 rounded-2xl md:rounded-[2rem] px-6 md:px-10 h-16 md:h-20 flex justify-between items-center shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl md:text-2xl font-headline font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400 cursor-pointer"
          >
            EMON.DEV
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex gap-8">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className={cn(
                      "text-sm font-bold transition-all relative py-2",
                      isActive
                        ? "text-foreground"
                        : "text-text-secondary hover:text-foreground"
                    )}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute -bottom-0.5 left-0 right-0 h-[3px] bg-gradient-to-r from-violet-500 to-blue-400 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            <div className="flex items-center gap-4 pl-8 border-l border-white/10">
              <Magnetic strength={0.2}>
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2.5 rounded-xl hover:bg-white/5 transition-all text-foreground border border-transparent hover:border-white/10"
                >
                  {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </Magnetic>

              <Magnetic strength={0.2}>

                <button
                  onClick={(e) => handleScroll(e, "#contact")}
                  className="relative group overflow-hidden bg-violet-600 text-white px-8 py-2.5 rounded-xl font-bold transition-all active:scale-95">
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative z-10">Hire Me</span>
                </button>

              </Magnetic>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2.5 rounded-xl text-foreground bg-white/5 border border-white/10"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 text-foreground bg-white/5 border border-white/10 rounded-xl"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute top-24 left-6 right-6 md:hidden"
          >
            <div className="bg-background/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 flex flex-col gap-6 shadow-2xl">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className={cn(
                    "text-xl font-bold tracking-tight",
                    activeSection === item.href.slice(1)
                      ? "text-violet-400"
                      : "text-text-secondary"
                  )}
                >
                  {item.name}
                </a>
              ))}
              <hr className="border-white/5" />
             
                <button
                 onClick={(e) => handleScroll(e, "#contact")}
                 className="w-full bg-gradient-to-r from-violet-600 to-blue-600 text-white px-6 py-4 rounded-2xl font-bold text-lg">
                  Hire Me
                </button>
             
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

