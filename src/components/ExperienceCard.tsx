"use client";

import { motion } from "framer-motion";
import { Briefcase, ArrowRight } from "lucide-react";

interface ExperienceCardProps {
  role: string;
  company: string;
  duration: string;
  points: string[];
}

export default function ExperienceCard({ role, company, duration, points }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="glass-panel p-8 rounded-2xl border-slate-800/80 hover:border-indigo-500/20 transition-all duration-300 relative overflow-hidden group"
    >
      {/* Decorative vertical colored stripe */}
      <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-indigo-500 to-pink-500 opacity-80" />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-indigo-400 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30 transition-all duration-300">
            <Briefcase size={22} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white leading-snug">{role}</h3>
            <span className="text-sm font-mono text-indigo-400 font-semibold">{company}</span>
          </div>
        </div>

        <span className="inline-flex items-center text-xs font-mono text-slate-400 bg-slate-900 border border-slate-800/60 px-3.5 py-1.5 rounded-full w-fit">
          {duration}
        </span>
      </div>

      <ul className="flex flex-col gap-3 ml-2">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
            <ArrowRight size={14} className="text-indigo-400 mt-1 shrink-0" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
