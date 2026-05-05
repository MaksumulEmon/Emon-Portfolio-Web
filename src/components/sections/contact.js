"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Code, Globe, Briefcase } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="max-w-container-max mx-auto px-6 py-20">
      <div className="glass-card rounded-[40px] p-8 md:p-16 relative overflow-hidden">
        <div className="ambient-glow -top-40 -left-40" />
        
        <div className="grid md:grid-cols-2 gap-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl font-headline font-bold text-foreground mb-6">Send a Message</h2>
              <p className="text-lg text-text-secondary mb-12 leading-relaxed">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email Me", value: "hello@ridwan.dev", color: "text-violet-400" },
                { icon: MapPin, label: "Location", value: "London, United Kingdom", color: "text-blue-400" },
              ].map((info, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 glass-card rounded-xl flex items-center justify-center transition-transform group-hover:scale-110">
                    <info.icon size={20} className={info.color} />
                  </div>
                  <div>
                    <div className="text-[10px] text-text-secondary opacity-70 uppercase tracking-widest font-bold">{info.label}</div>
                    <div className="text-foreground font-semibold">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-6">
              {[Code, Globe, Briefcase].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                  className="p-3 glass-card rounded-xl text-foreground transition-all"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              { label: "Your Name", type: "text", placeholder: "John Doe" },
              { label: "Email Address", type: "email", placeholder: "john@example.com" },
            ].map((field, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="space-y-2"
              >
                <label className="text-sm font-semibold text-text-secondary">{field.label}</label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full bg-foreground/5 border border-glass-border rounded-xl px-6 py-4 text-foreground focus:outline-none focus:border-violet-500 transition-all focus:ring-1 focus:ring-violet-500"
                />
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-2"
            >
              <label className="text-sm font-semibold text-text-secondary">Message</label>
              <textarea
                placeholder="How can I help you?"
                rows={4}
                className="w-full bg-foreground/5 border border-glass-border rounded-xl px-6 py-4 text-foreground focus:outline-none focus:border-violet-500 transition-all focus:ring-1 focus:ring-violet-500"
              />
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-violet-600 to-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-violet-500/20 transition-all"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
