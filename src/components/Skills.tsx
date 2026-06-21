"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import SectionTitle from "./SectionTitle";
import { Code2, Monitor, Database, Terminal, GitBranch, Cpu } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Monitor className="text-indigo-400" size={20} />,
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"],
    },
    {
      title: "Languages & Backend",
      icon: <Terminal className="text-indigo-400" size={20} />,
      skills: ["Python", "Java", "SQL"],
    },
    {
      title: "Tools & Version Control",
      icon: <GitBranch className="text-indigo-400" size={20} />,
      skills: ["Git", "GitHub", "VS Code"],
    },
  ];

  // Config for the circular orbit nodes
  const orbitSkills = [
    { name: "HTML", angle: 0, radius: 100, speed: 20 },
    { name: "CSS", angle: 72, radius: 100, speed: 20 },
    { name: "JS", angle: 144, radius: 100, speed: 20 },
    { name: "Python", angle: 216, radius: 100, speed: 20 },
    { name: "Java", angle: 288, radius: 100, speed: 20 },
    { name: "React", angle: 30, radius: 160, speed: -30 },
    { name: "Git", angle: 150, radius: 160, speed: -30 },
    { name: "Tailwind", angle: 270, radius: 160, speed: -30 },
  ];

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle title="Skills" subtitle="Tech Stack & Tools" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-8">
          {/* Skill Lists */}
          <motion.div
            variants={fadeIn("right", 0.2, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            {skillCategories.map((category, catIndex) => (
              <div
                key={category.title}
                className="glass-panel p-6 rounded-xl border-slate-800/80 hover:border-indigo-500/20 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30 transition-all duration-300">
                    {category.icon}
                  </div>
                  <h3 className="font-bold text-white text-base">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="text-xs font-mono px-3 py-1.5 rounded-md bg-slate-900/50 border border-slate-800/80 text-slate-300 hover:text-white hover:border-indigo-500/30 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Interactive Skill Orbit Display */}
          <motion.div
            variants={fadeIn("left", 0.3, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-6 flex justify-center items-center h-[400px] sm:h-[450px] relative select-none"
          >
            {/* Ambient Background Radial Glow */}
            <div className="absolute w-72 h-72 bg-indigo-500/10 rounded-full blur-[80px]" />

            {/* Orbit Container */}
            <div className="relative w-[360px] h-[360px] flex items-center justify-center">
              {/* Outer Orbit Path */}
              <div className="absolute w-[320px] h-[320px] rounded-full border border-dashed border-slate-800/60 pointer-events-none" />

              {/* Inner Orbit Path */}
              <div className="absolute w-[200px] h-[200px] rounded-full border border-dashed border-slate-800/80 pointer-events-none" />

              {/* Central Hub */}
              <div className="relative z-10 w-16 h-16 rounded-full bg-slate-950 border border-slate-850 flex items-center justify-center shadow-lg shadow-indigo-500/5 border-indigo-500/20">
                <Code2 className="text-indigo-400 animate-pulse" size={26} />
              </div>

              {/* Orbiting Orbs */}
              {orbitSkills.map((orb, index) => {
                const isInner = orb.radius === 100;
                
                // Animation settings based on inner/outer speed
                const duration = Math.abs(orb.speed);
                const isClockwise = orb.speed > 0;
                const rotationArray = isClockwise ? [0, 360] : [360, 0];

                return (
                  <motion.div
                    key={orb.name}
                    className="absolute top-1/2 left-1/2"
                    style={{
                      width: orb.radius * 2,
                      height: orb.radius * 2,
                      marginLeft: -orb.radius,
                      marginTop: -orb.radius,
                    }}
                    animate={{ rotate: rotationArray }}
                    transition={{
                      repeat: Infinity,
                      duration: duration,
                      ease: "linear",
                    }}
                  >
                    {/* The actual orb node */}
                    <div
                      className="absolute w-12 h-12 rounded-full glass-panel border-slate-800 flex items-center justify-center font-mono text-[10px] font-bold text-slate-300 hover:text-indigo-300 hover:border-indigo-500/40 hover:scale-110 shadow-sm cursor-pointer select-none transition-all duration-200"
                      style={{
                        left: `${Math.round(orb.radius + orb.radius * Math.cos((orb.angle * Math.PI) / 180) - 24)}px`,
                        top: `${Math.round(orb.radius + orb.radius * Math.sin((orb.angle * Math.PI) / 180) - 24)}px`,
                        transform: "rotate(inherit)", // Keep names upright (we can offset rotation)
                      }}
                      title={orb.name}
                    >
                      {/* Sub-counter-rotation to keep the text upright */}
                      <motion.div
                        animate={{ rotate: isClockwise ? [0, -360] : [-360, 0] }}
                        transition={{
                          repeat: Infinity,
                          duration: duration,
                          ease: "linear",
                        }}
                      >
                        {orb.name}
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
