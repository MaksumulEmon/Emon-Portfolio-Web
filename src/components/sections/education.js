"use client";

import { motion } from "framer-motion";
import { School, BookText, GraduationCap } from "lucide-react";

const educationData = [
  {
    year: "2018 - 2022",
    title: "Diploma In Computer Science & Technology",
    desc: " Chapainawabganj polytechnic institute",
    icon: GraduationCap,
    color: "text-violet-400",
    side: "left",
  },
  {
    year: "2019 - 2021",
    title: "Secondary School Certificate (SSC)",
    desc: "R.B Govt High School, Joypurhat",
    icon: School,
    color: "text-blue-400",
    side: "right",
  },
  {
    year: "2016 - 2018",
    title: "Junior School Certificate",
    desc: "R.B Govt High School, Joypurhat",
    icon: BookText,
    color: "text-emerald-400",
    side: "left",
  },

];

export default function Education() {
  return (
    <section id="education" className="bg-surface py-20 overflow-hidden">
      <div className="max-w-container-max mx-auto px-6">
        <h2 className="text-4xl font-headline font-bold text-foreground mb-16 text-center">Education</h2>

        <div className="max-w-3xl mx-auto space-y-12 relative">
          {/* Vertical Line */}
          <div className="absolute left-[31px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 to-transparent" />

          {educationData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: item.side === "left" ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative pl-20 md:pl-0 flex flex-col ${item.side === "left" ? "md:items-end md:pr-1/2" : "md:items-start md:pl-1/2"
                }`}
            >
              {/* Dot Icon */}
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 w-12 h-12 glass-card rounded-full flex items-center justify-center z-10 bg-background group transition-transform hover:scale-110">
                <item.icon size={24} className={item.color} />
              </div>

              {/* Content Card */}
              <div className={`md:w-[calc(100%-2rem)] glass-card p-6 rounded-2xl ${item.side === "left" ? "md:mr-10" : "md:ml-10"
                }`}>
                <span className={`${item.color} text-sm font-semibold`}>{item.year}</span>
                <h3 className="text-xl font-bold text-foreground mt-1">{item.title}</h3>
                <p className="text-text-secondary mt-2 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
