"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import SectionTitle from "./SectionTitle";
import { Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";
import confetti from "canvas-confetti";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      console.warn("Web3Forms access key is missing in environment variables.");
      // Gracefully switch to error state to show instructions and fallback
      setStatus("error");
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: `${formData.name} via Portfolio`,
          subject: "New Message from Portfolio Website",
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        
        // Trigger confetti burst on success!
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#6366f1", "#8b5cf6", "#ec4899"],
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle title="Contact" subtitle="Let's Work Together" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8 items-start">
          {/* Direct Connection Card */}
          <motion.div
            variants={fadeIn("right", 0.2, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="glass-panel p-8 rounded-2xl border-slate-800/80">
              <h3 className="text-xl font-bold text-white mb-4">Get In Touch</h3>
              <p className="text-slate-350 text-sm leading-relaxed mb-8">
                I'm always open to discussing new web development projects, internship opportunities, or interesting coding ideas. Shoot me a message!
              </p>

              {/* Direct Info list */}
              <div className="flex flex-col gap-5">
                <a
                  href="mailto:sakshisingh122020@gmail.com"
                  className="flex items-center gap-4 group p-3 rounded-xl hover:bg-slate-900/60 border border-transparent hover:border-slate-800/50 transition-all duration-300"
                >
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-indigo-400 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30 transition-all duration-300">
                    <Mail size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Email</span>
                    <span className="text-sm font-medium text-slate-200 group-hover:text-indigo-300 transition-colors">
                      sakshisingh122020@gmail.com
                    </span>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/sakshi-singh-47659336b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group p-3 rounded-xl hover:bg-slate-900/60 border border-transparent hover:border-slate-800/50 transition-all duration-300"
                >
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-indigo-400 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30 transition-all duration-300 flex items-center justify-center w-11 h-11">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">LinkedIn</span>
                    <span className="text-sm font-medium text-slate-200 group-hover:text-indigo-300 transition-colors">
                      sakshi-singh-47659336b
                    </span>
                  </div>
                </a>

                <a
                  href="https://github.com/82sakshi47"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group p-3 rounded-xl hover:bg-slate-900/60 border border-transparent hover:border-slate-800/50 transition-all duration-300"
                >
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-indigo-400 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30 transition-all duration-300 flex items-center justify-center w-11 h-11">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">GitHub</span>
                    <span className="text-sm font-medium text-slate-200 group-hover:text-indigo-300 transition-colors">
                      82sakshi47
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeIn("left", 0.2, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-8 rounded-2xl border-slate-800/80">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-12 gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-2">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Message Sent Successfully!</h3>
                  <p className="text-slate-400 text-sm max-w-sm">
                    Thank you for reaching out, Sakshi. I will review your message and get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 font-mono text-xs font-bold uppercase tracking-wider text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : status === "error" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-12 gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 mb-2">
                    <AlertCircle size={36} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Form Submission Failed</h3>
                  <p className="text-slate-400 text-sm max-w-sm">
                    To enable automatic email forwarding, please obtain a free access key from <a href="https://web3forms.com" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">Web3Forms</a> and save it as `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in your `.env.local` file.
                  </p>
                  <div className="flex flex-col gap-3 w-full max-w-xs mt-4">
                    <a
                      href={`mailto:sakshisingh122020@gmail.com?subject=Portfolio Inquiry&body=${encodeURIComponent(formData.message || '')}`}
                      className="flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white font-medium py-3.5 px-6 rounded-xl transition-all shadow-md active:scale-98"
                    >
                      <span>Send Direct Email</span>
                    </a>
                    <button
                      onClick={() => setStatus("idle")}
                      className="text-slate-400 hover:text-white font-mono text-xs font-bold uppercase tracking-wider py-1.5 transition-colors"
                    >
                      Return to Form
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {/* Name Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={status === "submitting"}
                      className={`w-full bg-slate-900/60 border rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:ring-1 transition-all ${
                        errors.name
                          ? "border-red-500/50 focus:ring-red-500/30"
                          : "border-slate-800 focus:border-indigo-500/60 focus:ring-indigo-500/20"
                      }`}
                      placeholder="Your Name"
                    />
                    {errors.name && (
                      <span className="text-red-400 text-xs font-mono flex items-center gap-1.5 mt-1">
                        <AlertCircle size={12} />
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={status === "submitting"}
                      className={`w-full bg-slate-900/60 border rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:ring-1 transition-all ${
                        errors.email
                          ? "border-red-500/50 focus:ring-red-500/30"
                          : "border-slate-800 focus:border-indigo-500/60 focus:ring-indigo-500/20"
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <span className="text-red-400 text-xs font-mono flex items-center gap-1.5 mt-1">
                        <AlertCircle size={12} />
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Message Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      disabled={status === "submitting"}
                      className={`w-full bg-slate-900/60 border rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:ring-1 transition-all resize-none ${
                        errors.message
                          ? "border-red-500/50 focus:ring-red-500/30"
                          : "border-slate-800 focus:border-indigo-500/60 focus:ring-indigo-500/20"
                      }`}
                      placeholder="Hi, I'd love to chat about..."
                    />
                    {errors.message && (
                      <span className="text-red-400 text-xs font-mono flex items-center gap-1.5 mt-1">
                        <AlertCircle size={12} />
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="flex items-center justify-center gap-2 w-full sm:w-fit bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 disabled:from-indigo-500/50 disabled:to-pink-500/50 text-white font-medium px-8 py-3.5 rounded-xl shadow-lg shadow-indigo-500/10 transition-all duration-300 active:scale-98 group cursor-pointer"
                  >
                    {status === "submitting" ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
