"use client";

import SectionTitle from "./SectionTitle";
import AchievementCard from "./AchievementCard";

export default function Achievements() {
  const achievements = [
    {
      icon: "🏆",
      title: "Miss Evening 2024",
      description: "Crowned at Fresher's Felicitation event, recognized for personality, confidence, and stage presence. Mentored junior students in grooming and public speaking.",
    },
    {
      icon: "🚀",
      title: "Smart India Hackathon",
      description: "Selected participant for SIH 2025. Developed innovative AgriTech solutions addressing rural supply chain and crop quality challenges under the Agriculture & FoodTech theme.",
    },
    {
      icon: "📚",
      title: "Strong Academic Record",
      description: "Achieved a CGPA of 8.56 after completing the 2nd year of B.Tech CSE, demonstrating consistent academic excellence and technical focus.",
    },
  ];

  return (
    <section id="achievements" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle title="Achievements" subtitle="Recognition & Accolades" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {achievements.map((ach, index) => (
            <AchievementCard
              key={index}
              icon={ach.icon}
              title={ach.title}
              description={ach.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
