"use client";

import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projectList = [
    {
      title: "Smart Farming Assistant",
      subtitle: "AgriTech Platform (SIH 2025)",
      description: "An all-in-one AgriTech platform developed for the Smart India Hackathon 2025. Features a digital marketplace, weather-based crop advisory, soil quality analysis, ML-based price prediction, NLP chatbot, and multilingual learning hub.",
      tech: ["Python", "Java", "Machine Learning", "NLP"],
      gradientClass: "bg-gradient-to-r from-emerald-650 to-teal-700 text-emerald-100",
      caseStudyDetails: {
        overview: "Developed as a team project for the prestigious Smart India Hackathon 2025, this AgriTech platform addresses core pain points for rural Indian farmers. By consolidating multiple tools into a unified interface, it empowers farmers to grow smarter, sell directly, and learn continuously.",
        features: [
          "Digital Marketplace: Direct peer-to-peer trading between farmers and wholesalers to eliminate middlemen.",
          "Weather Crop Advisory: Algorithmic crop planning based on real-time and historical weather patterns.",
          "Soil Quality Analyzer: API integrations evaluating soil nutrients and proposing correction methods.",
          "ML Price Prediction: Machine Learning forecasting model to project crop market values up to 6 months in advance.",
          "NLP Chatbot: Multilingual voice-and-text chatbot to help non-tech-savvy farmers navigate the app.",
          "Learning Hub: Curated educational videos in regional languages about sustainable farming methods."
        ],
        architecture: [
          "Engineered the predictive pricing model using Python scikit-learn models based on 10 years of crop data.",
          "Built a robust, multi-layer service structure using Java Spring Boot to handle API requests and user accounts.",
          "Integrated Natural Language Processing (NLP) pipeline supporting Hindi, Marathi, and Tamil translation mapping.",
          "Designed the user interface around accessibility requirements, minimizing text complexity and maximizing voice/icon interactions."
        ]
      }
    },
    {
      title: "Online Code Editor",
      subtitle: "Web Development Sandbox",
      description: "A browser-based code editor that allows users to write, edit, and preview HTML, CSS, and JavaScript code in real time. Features live preview rendering, local workspace caching, and syntax highlighting.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      gradientClass: "bg-gradient-to-r from-indigo-500 to-pink-500 text-indigo-100",
      caseStudyDetails: {
        overview: "A lightweight front-end sandbox tool designed for students and developers to prototype web features instantly. It mimics platforms like CodePen, requiring no installations and executing code entirely client-side for immediate execution.",
        features: [
          "Tri-pane Editor: Split panes for writing HTML, CSS, and JS side-by-side with adjustable widths.",
          "Real-time Rendering: Automatic iframe refresh with debouncing to execute and preview code updates as you type.",
          "Local Storage Caching: Automatically saves working files locally to prevent work loss on page reload.",
          "Console Emulator: Embedded logger outputting JavaScript console statements directly in the preview UI."
        ],
        architecture: [
          "Utilized custom iframe rendering bindings to safely isolate and execute user-written scripts without affecting parent DOM contexts.",
          "Implemented change-listener debouncing (500ms) to ensure DOM refresh does not lock main browser threads during intensive edits.",
          "Designed a sleek glassmorphic dark interface with standard vanilla CSS variables for fluid layout resizing."
        ]
      }
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle title="Projects" subtitle="Featured Creations" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {projectList.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              tech={project.tech}
              gradientClass={project.gradientClass}
              caseStudyDetails={project.caseStudyDetails}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
