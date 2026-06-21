"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import ScrollIndicator from "./ScrollIndicator";
import { FileText, Eye, MapPin, Award, BookOpen } from "lucide-react";
import { InteractiveRobotSpline } from "./InteractiveRobotSpline";

export default function Hero() {
  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
    link.href = `${basePath}/assets/Sakshi_Singh_Resume.pdf`;
    link.download = "Sakshi_Singh_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skills = [
    { name: "HTML", primary: true },
    { name: "CSS", primary: true },
    { name: "JavaScript", primary: true },
    { name: "Python", primary: false },
    { name: "Java", primary: false },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-between items-center pt-32 pb-12 px-6 relative overflow-hidden"
    >
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto relative z-10">
        {/* Text Content */}
        <motion.div
          variants={staggerContainer(0.15, 0.1)}
          initial="hidden"
          animate="show"
          className="lg:col-span-7 flex flex-col gap-6 text-left"
        >
          {/* Greeting Tag */}
          <motion.div
            variants={fadeIn("up", 0, 0.5)}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            Available for Internships & Projects
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeIn("up", 0.1, 0.6)}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-none"
          >
            Hi, I'm <span className="text-gradient font-extrabold">Sakshi Singh</span> 👋
          </motion.h1>

          {/* Subheading/Intro */}
          <motion.p
            variants={fadeIn("up", 0.2, 0.6)}
            className="text-lg text-slate-300 max-w-xl leading-relaxed"
          >
            A passionate <strong className="text-white font-semibold">Web Developer and Computer Science Student</strong> from Kashi Institute of Technology. I create responsive, user-friendly web applications using modern technologies.
          </motion.p>

          {/* Location & Institution Mini-Stats */}
          <motion.div
            variants={fadeIn("up", 0.3, 0.6)}
            className="flex flex-wrap gap-4 text-xs font-mono text-slate-400"
          >
            <div className="flex items-center gap-1.5 bg-slate-900/50 px-3 py-1.5 rounded-md border border-slate-800">
              <BookOpen size={14} className="text-indigo-400" />
              <span>B.Tech CSE | 3rd Year</span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-900/50 px-3 py-1.5 rounded-md border border-slate-800">
              <MapPin size={14} className="text-indigo-400" />
              <span>Varanasi, India</span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-900/50 px-3 py-1.5 rounded-md border border-slate-800">
              <Award size={14} className="text-indigo-400" />
              <span>CGPA: 8.56</span>
            </div>
          </motion.div>

          {/* Core Technologies Badges */}
          <motion.div
            variants={fadeIn("up", 0.4, 0.6)}
            className="flex flex-wrap gap-2.5 items-center"
          >
            <span className="text-xs font-mono text-slate-500 uppercase tracking-wider mr-2">Core:</span>
            {skills.map((skill) => (
              <span
                key={skill.name}
                className={`text-xs font-mono px-3.5 py-1.5 rounded-full border transition-all duration-300 ${
                  skill.primary
                    ? "bg-indigo-500/10 border-indigo-500/30 text-indigo-300 font-semibold"
                    : "bg-slate-900/60 border-slate-800/80 text-slate-400"
                }`}
              >
                {skill.name}
              </span>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={fadeIn("up", 0.5, 0.6)}
            className="flex flex-wrap gap-4 mt-2"
          >
            <button
              onClick={handleScrollToProjects}
              className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white font-medium px-7 py-3.5 rounded-full shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all duration-300 active:scale-95 group"
            >
              <Eye size={18} className="group-hover:translate-x-0.5 transition-transform duration-300" />
              <span>View Projects</span>
            </button>
            <button
              onClick={handleDownloadResume}
              className="flex items-center gap-2 bg-slate-900 hover:bg-slate-850 text-white border border-slate-800 hover:border-slate-700 font-medium px-7 py-3.5 rounded-full transition-all duration-300 active:scale-95 group"
            >
              <FileText size={18} className="text-slate-400 group-hover:text-white transition-colors" />
              <span>Download Resume</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Profile 3D Robot */}
        <motion.div
          variants={fadeIn("left", 0.2, 0.7)}
          initial="hidden"
          animate="show"
          className="lg:col-span-5 flex justify-center items-center w-full"
        >
          <div className="relative group select-none w-full max-w-[450px] aspect-square flex items-center justify-center">
            {/* Glowing border/background effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-35 transition-opacity duration-500" />
            
            <div id="spline-container" className="relative glass-panel rounded-3xl p-2 w-full h-full flex items-center justify-center border-slate-700/30 overflow-hidden">
              <InteractiveRobotSpline
                scene="https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode"
                className="w-full h-full"
              />

              {/* Float tag element */}
              <div className="absolute bottom-[25px] right-[28px] bg-slate-950 border border-slate-800 px-4 py-2.5 rounded-xl flex items-center justify-center gap-2 shadow-xl z-20 min-w-[148px] select-none">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono text-slate-200">Open to Work</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Hint */}
      <div className="relative z-10 mt-8">
        <ScrollIndicator />
      </div>
    </section>
  );
}
