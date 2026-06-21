"use client";

import SectionTitle from "./SectionTitle";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  const experiences = [
    {
      role: "Web Developer Intern",
      company: "InternPe",
      duration: "Remote Internship | 2024",
      points: [
        "Developed responsive web applications using HTML, CSS, and JavaScript",
        "Built functional projects including a Calculator, To-Do List app, and fully responsive websites",
        "Enhanced front-end development, debugging, and problem-solving skills in a professional setting",
        "Gained practical experience in remote collaboration, version control, and project-based learning",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <SectionTitle title="Experience" subtitle="Professional Experience" />

        <div className="flex flex-col gap-8 mt-8">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              role={exp.role}
              company={exp.company}
              duration={exp.duration}
              points={exp.points}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
