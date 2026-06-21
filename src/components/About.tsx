"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import SectionTitle from "./SectionTitle";
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";

export default function About() {
  const educationTimeline = [
    {
      institution: "Kashi Institute of Technology, Varanasi",
      degree: "Bachelor of Technology | Computer Science & Engineering",
      period: "3rd Year | 2024 - 2028",
      description: "Focusing on core computer science subjects, algorithms, web development, and participating in hackathons like SIH 2025. Currently maintaining an academic CGPA of 8.56.",
      active: true,
    },
    {
      institution: "Jusco School South Park, Jamshedpur",
      degree: "Higher Secondary Education (12th Standard)",
      period: "2022 - 2024",
      description: "Completed higher secondary education with a strong focus on science and mathematics foundations, preparing for engineering studies.",
      active: false,
    },
  ];

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle title="About Me" subtitle="My Journey & Education" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
          {/* Personal Bio Description */}
          <motion.div
            variants={fadeIn("right", 0.2, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <div className="glass-panel p-8 rounded-2xl border-slate-800/80 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 blur-xl rounded-full" />
              
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-gradient">Who I Am</span>
              </h3>
              
              <p className="text-slate-300 leading-relaxed mb-4">
                I am a passionate <strong className="text-white font-medium">Web Developer and B.Tech CSE student</strong> in my 3rd year at Kashi Institute of Technology. I specialize in crafting clean, responsive, and highly interactive user interfaces.
              </p>
              <p className="text-slate-300 leading-relaxed">
                My coding journey revolves around finding elegant solutions to real-world problems. Whether building accessible websites or designing AgriTech platforms for national hackathons, I enjoy learning new libraries, experimenting with designs, and refining my development workflow.
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-panel p-5 rounded-xl border-slate-800/50 flex flex-col gap-2">
                <span className="text-2xl">⚡</span>
                <h4 className="text-sm font-semibold text-white">Fast Learner</h4>
                <p className="text-xs text-slate-400">Eager to adapt to new web standards and modern libraries.</p>
              </div>
              <div className="glass-panel p-5 rounded-xl border-slate-800/50 flex flex-col gap-2">
                <span className="text-2xl">🎯</span>
                <h4 className="text-sm font-semibold text-white">Goal Oriented</h4>
                <p className="text-xs text-slate-400">Committed to writing clean code and meeting deliverables.</p>
              </div>
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            variants={fadeIn("left", 0.2, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-6"
          >
            <div className="glass-panel p-8 rounded-2xl border-slate-800/80">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <GraduationCap className="text-indigo-400" />
                <span>Education Pathway</span>
              </h3>

              {/* Vertical Timeline */}
              <div className="relative pl-6 border-l border-slate-800 flex flex-col gap-8">
                {educationTimeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.4 }}
                    className="relative"
                  >
                    {/* Circle Node */}
                    <div
                      className={`absolute left-[-31px] top-1.5 w-4.5 h-4.5 rounded-full border-2 flex items-center justify-center transition-colors duration-300 ${
                        item.active
                          ? "bg-indigo-500 border-indigo-400 shadow-md shadow-indigo-500/30"
                          : "bg-slate-950 border-slate-800"
                      }`}
                    >
                      {item.active && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <h4 className="font-semibold text-white text-base leading-tight">
                          {item.institution}
                        </h4>
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400 bg-slate-900/60 border border-slate-800/60 px-2 py-0.5 rounded w-fit">
                          <Calendar size={10} className="text-indigo-400" />
                          {item.period}
                        </span>
                      </div>
                      
                      <span className="text-xs font-mono text-indigo-400 font-medium">
                        {item.degree}
                      </span>
                      
                      <p className="text-xs text-slate-400 leading-relaxed mt-1">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
