"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionTitle({ title, subtitle, align = "center" }: SectionTitleProps) {
  return (
    <motion.div
      variants={fadeIn("up", 0.1, 0.6)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className={`mb-16 flex flex-col gap-3 ${align === "center" ? "items-center text-center" : "items-start text-left"}`}
    >
      <div className="flex items-center gap-2">
        <span className="h-[2px] w-8 bg-indigo-500 rounded-full" />
        <span className="text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase">
          {title}
        </span>
        <span className="h-[2px] w-8 bg-indigo-500 rounded-full" />
      </div>

      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
        {subtitle || title}
      </h2>
    </motion.div>
  );
}
