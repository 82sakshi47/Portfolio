"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Code, ExternalLink, X, Cpu, Layers } from "lucide-react";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  gradientClass: string;
  caseStudyDetails: {
    overview: string;
    features: string[];
    architecture: string[];
  };
}

export default function ProjectCard({
  title,
  subtitle,
  description,
  tech,
  gradientClass,
  caseStudyDetails,
}: ProjectCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="glass-panel rounded-2xl overflow-hidden flex flex-col h-full border-slate-800/80 hover:border-indigo-500/20 transition-all duration-300 group"
      >
        {/* Card Header with Graphic Background */}
        <div className={`p-8 min-h-[160px] flex flex-col justify-end relative overflow-hidden ${gradientClass}`}>
          {/* Subtle overlay grid for tech feel */}
          <div className="absolute inset-0 bg-black/10 mix-blend-overlay opacity-30 bg-grid" />
          
          <span className="text-xs font-mono font-bold tracking-wider text-white/80 uppercase mb-1">
            {subtitle}
          </span>
          <h3 className="text-2xl font-bold text-white tracking-tight leading-snug drop-shadow-sm">
            {title}
          </h3>
        </div>

        {/* Card Body */}
        <div className="p-6 sm:p-8 flex flex-col flex-1 bg-slate-950/20">
          <p className="text-slate-350 text-sm leading-relaxed mb-6 flex-1">
            {description}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tech.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-indigo-400 group-hover:border-indigo-500/20 transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Button */}
          <button
            onClick={() => setModalOpen(true)}
            className="w-fit flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 group-hover:text-indigo-300 transition-colors"
          >
            <span>View Case Study</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </motion.div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative w-full max-w-2xl bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl z-10 max-h-[85vh] flex flex-col"
            >
              {/* Top Bar */}
              <div className={`p-6 ${gradientClass} flex justify-between items-center text-white relative`}>
                <div>
                  <span className="text-xs font-mono opacity-80 uppercase tracking-widest">{subtitle}</span>
                  <h3 className="text-xl font-bold leading-tight mt-0.5">{title}</h3>
                </div>
                <button
                  onClick={() => setModalOpen(false)}
                  className="p-2 rounded-full bg-black/10 hover:bg-black/25 text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="p-6 sm:p-8 overflow-y-auto flex-1 flex flex-col gap-6 scroll-smooth">
                {/* Section: Overview */}
                <div className="flex flex-col gap-2">
                  <h4 className="text-sm font-mono font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Code size={14} />
                    <span>Project Overview</span>
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {caseStudyDetails.overview}
                  </p>
                </div>

                {/* Section: Features */}
                <div className="flex flex-col gap-2">
                  <h4 className="text-sm font-mono font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Cpu size={14} />
                    <span>Key Features & Implementations</span>
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-1">
                    {caseStudyDetails.features.map((feat, index) => (
                      <li key={index} className="flex gap-2 text-slate-350 text-xs bg-slate-900/50 border border-slate-850 p-2.5 rounded-lg">
                        <span className="text-indigo-400 font-bold">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Section: Technical Architecture */}
                <div className="flex flex-col gap-2">
                  <h4 className="text-sm font-mono font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Layers size={14} />
                    <span>Tech Architecture & Learnings</span>
                  </h4>
                  <ul className="flex flex-col gap-2 text-xs text-slate-350">
                    {caseStudyDetails.architecture.map((arch, index) => (
                      <li key={index} className="flex items-start gap-2 bg-slate-900/20 border border-slate-800/40 p-2.5 rounded-md">
                        <span className="text-indigo-500 font-mono">0{index + 1}.</span>
                        <span>{arch}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Footer */}
              <div className="p-4 bg-slate-900/60 border-t border-slate-900 flex justify-end">
                <button
                  onClick={() => setModalOpen(false)}
                  className="bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-md transition-colors"
                >
                  Close Case Study
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
