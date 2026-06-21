"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <a
      href="#about"
      className="inline-flex flex-col items-center gap-2 text-slate-500 hover:text-indigo-400 transition-colors duration-300 group"
      aria-label="Scroll to About"
    >
      <span className="text-xs font-mono tracking-widest uppercase">Scroll Down</span>
      <div className="w-6 h-10 border-2 border-slate-700 group-hover:border-indigo-500/50 rounded-full flex justify-center p-1 transition-colors duration-300">
        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-1.5 h-1.5 bg-indigo-400 rounded-full"
        />
      </div>
    </a>
  );
}
