"use client";

import { motion, AnimatePresence } from "framer-motion";
import {Phone, Mail, MapPin, Code, Globe, Briefcase, Send, CheckCircle2, XCircle, Loader2 } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "success" });

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "success" }), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // NOTE: Replace these with your actual EmailJS credentials
      // You can get them by signing up at https://www.emailjs.com/
      const result = await emailjs.sendForm(
        "service_xxxxxx", // YOUR_SERVICE_ID
        "template_xxxxxx", // YOUR_TEMPLATE_ID
        formRef.current,
        "user_xxxxxxxxxxxx" // YOUR_PUBLIC_KEY
      );

      if (result.text === "OK") {
        showToast("Message sent successfully! I'll get back to you soon.", "success");
        formRef.current.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      showToast("Oops! Something went wrong. Please try again later.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="max-w-container-max w-full mx-auto px-6 py-20">
      <div className="glass-card rounded-[40px] p-8 md:p-16 relative overflow-hidden">
        <div className="ambient-glow -top-40 -left-40" />

        {/* Custom Toast Notification */}
        <AnimatePresence>
          {toast.show && (
            <motion.div
              initial={{ opacity: 0, y: 50, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 20, x: "-50%" }}
              className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl backdrop-blur-xl border ${
                toast.type === "success" 
                  ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-400" 
                  : "bg-red-500/20 border-red-500/50 text-red-400"
              }`}
            >
              {toast.type === "success" ? <CheckCircle2 size={20} /> : <XCircle size={20} />}
              <span className="font-semibold">{toast.message}</span>
            </motion.div>
          )}
        </AnimatePresence>
        
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
                { icon: Mail, label: "Email Me", value: "maksumulemon@gmail.com", color: "text-violet-400" },
                { icon: Phone, label: "Call Me", value: "+880 1882679316", color: "text-green-400" },
                { icon: MapPin, label: "Location", value: "Dhaka,Bangladesh", color: "text-blue-400" },
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
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              { label: "Your Name", type: "text", name: "user_name", placeholder: "John Doe" },
              { label: "Email Address", type: "email", name: "user_email", placeholder: "john@example.com" },
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
                  name={field.name}
                  placeholder={field.placeholder}
                  required
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
                name="message"
                placeholder="How can I help you?"
                rows={4}
                required
                className="w-full bg-foreground/5 border border-glass-border rounded-xl px-6 py-4 text-foreground focus:outline-none focus:border-violet-500 transition-all focus:ring-1 focus:ring-violet-500"
              />
            </motion.div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-violet-600 to-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-violet-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
