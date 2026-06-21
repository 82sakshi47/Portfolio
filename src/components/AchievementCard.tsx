"use client";

import { motion } from "framer-motion";

interface AchievementCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function AchievementCard({ icon, title, description }: AchievementCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4 }}
      className="glass-panel p-8 rounded-2xl border-slate-800/80 hover:border-indigo-500/20 glass-panel-hover text-center relative overflow-hidden group"
    >
      {/* Subtle hover background highlight */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/0 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300 select-none">
        {icon}
      </div>

      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
        {title}
      </h3>

      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
