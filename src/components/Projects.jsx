import React, { useState, useEffect } from "react";
import { motion, useMotionTemplate, useSpring } from "framer-motion";
import { 
  ExternalLink, 
  Github, 
  Code2, 
  Rocket, 
  Globe, 
  Braces,
  Server,
  Database,
  Shield,LayoutDashboard
} from "lucide-react";

import chatbotImg from "../assets/projects/ai-healthcare-chatbot.png";
import dairyImg from "../assets/whatsapp.png";

const projects = [
  {
    name: "Healthcare Chatbot",
    description:
      "AI-powered healthcare assistant using Gemini API to provide personalized health conversations, symptom analysis, and lifestyle insights with a sleek, responsive UI.",
    tech: ["React", "Tailwind CSS", "Gemini API"],
    link: "https://sriramaalapati.github.io/Healthcare-chatbot/",
    github: "https://github.com/SriramAalapati/Healthcare-chatbot",
    image: chatbotImg,
    category: "AI & Healthcare",
    keyFeatures: [
      "Real-time AI-powered health analysis",
      "Natural language conversation",
      "Responsive medical insights",
      "Secure data handling"
    ],
    impact: "Enhancing healthcare accessibility through AI",
    role: "Front-end Application",
    techIcons: {
      frontend: [Code2, Globe],
      ai: [Rocket],
      deployment: [Shield]
    }
  },
  {
    name: "Dairy: Productivity & Finance Tracker",
    description:
      "Full-stack web app managing daily tasks, reminders, loan tracking, and expenses with integrated self-motivation features. Built with Express, React, Sequelize, and Azure SQL.",
    tech: [
      "React",
      "Express.js",
      "Sequelize",
      "Azure SQL",
      "Tailwind CSS",
      "JWT Auth",
    ],
    github: "https://github.com/SriramAalapati/dairy",
    image: dairyImg,
    category: "Full-stack Application",
    keyFeatures: [
      "Task management system",
      "Financial tracking",
      "Data visualization",
      "Cloud synchronization"
    ],
    impact: "Boosting personal productivity and financial management",
    role: "Full-stack Application",
    techIcons: {
      frontend: [Code2, Braces],
      backend: [Server],
      database: [Database],
      security: [Shield]
    }
  },
  {
  name: "Business CRM – Lead Management Platform",
  description:
    "A professional-grade CRM platform built for B2B use cases, enabling efficient lead generation, pipeline tracking, task automation, and Kanban-based workflow management. Designed with a modular architecture and enterprise-level UI/UX consistency.",
  tech: [
    "React.js",
    "Node.js (Express)",
    "Sequelize ORM",
    "MySQL",
    "Tailwind CSS",
    "Framer Motion",
    "JWT Authentication"
  ],
  github: "https://github.com/SriramAalapati/CRM",
  image: dairyImg, // replace with your CRM preview image
  category: "Full-stack Application",
  keyFeatures: [
    "Lead generation and pipeline management",
    "Interactive Kanban board for sales tracking",
    "Dynamic dashboard with real-time analytics",
    "User authentication and role-based access",
    "API-driven architecture with modular services",
    "Modern UI with transitions, charts, and tooltips"
  ],
  impact:
    "Designed to streamline B2B client engagement and sales operations, reducing manual tracking and improving sales efficiency.",
  role: "Full-Stack Application (Backend in progress)",
  techIcons: {
    frontend: [Code2],
    backend: [Server],
    database: [Database],
    security: [Shield],
    ui: [LayoutDashboard],
  },
  status: "Frontend Completed – Backend Development in Progress"
}

];

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const item = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

// Custom Cursor Component
const ProjectCursor = ({ mouseX, mouseY, active }) => {
  const mouseXSpring = useSpring(mouseX);
  const mouseYSpring = useSpring(mouseY);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{
        transform: useMotionTemplate`translate(${mouseXSpring}px, ${mouseYSpring}px) translate(-50%, -50%)`
      }}
    >
      {/* Outer ring */}
      <motion.div
        className="relative flex items-center justify-center"
        animate={{
          scale: active ? 1 : 0,
          opacity: active ? 1 : 0,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-md opacity-30" 
             style={{ width: 100, height: 100 }} />
        <motion.div
          className="absolute rounded-full border-2 border-white mix-blend-difference"
          style={{ width: 80, height: 80 }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute rounded-full border border-white/30 backdrop-blur-sm"
          style={{ width: 60, height: 60 }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [360, 270, 180, 90, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <div className="relative flex flex-col items-center justify-center text-white mix-blend-difference">
          <Rocket className="w-4 h-4 mb-1" />
          <span className="text-xs font-medium tracking-wider">Explore</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Projects() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [cursorActive, setCursorActive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="projects"
      className="relative section-container py-20 px-6 md:px-10 lg:px-16 max-w-8xl mx-auto min-h-screen overflow-hidden"
    >
      {/* Custom Cursor */}
      <ProjectCursor mouseX={mouseX} mouseY={mouseY} active={cursorActive} />

      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-blue-950/20" />
        <div
          className="absolute inset-0 opacity-[0.15] dark:opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59,130,246,0.15) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Section Header */}
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl xl:text-6xl font-extrabold bg-gradient-to-r from-gray-900 via-blue-800 to-blue-600 dark:from-white dark:via-blue-300 dark:to-blue-500 bg-clip-text text-transparent pb-2">
          Featured Projects
        </h2>
        <p className="mt-6 text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
          Full-stack and AI-integrated projects demonstrating scalable design,
          professional UI, and modern web technologies.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="grid gap-16 md:gap-24"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            variants={item}
            className="group relative rounded-3xl overflow-hidden bg-gradient-to-b from-white/90 to-white/50 dark:from-gray-800/90 dark:to-gray-800/50 backdrop-blur-xl shadow-2xl hover:shadow-3xl hover:shadow-blue-200/30 dark:hover:shadow-blue-900/30 transition-all duration-500"
            onMouseEnter={() => setCursorActive(true)}
            onMouseLeave={() => setCursorActive(false)}
          >
            {/* Project Card Inner Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.015] group-hover:opacity-[0.03] transition-opacity duration-500" />

            <div className="relative grid md:grid-cols-2 items-start gap-8 p-8 md:p-12">
              {/* Image Section */}
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-blue-200/30 dark:group-hover:shadow-blue-900/30 transition-shadow duration-500"
                whileHover={{ scale: 1.02, rotate: -1 }}
                transition={{ duration: 0.4 }}
              >
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-4 py-2 text-sm font-semibold rounded-full 
                    bg-black/60 text-white backdrop-blur-md
                    border border-white/10 shadow-lg">
                    {project.category}
                  </span>
                </div>

                {/* Image with Overlay */}
                <div className="relative group/image">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300" />
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-[300px] md:h-[400px] object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </motion.div>

              {/* Content Section */}
              <div className="flex flex-col justify-start space-y-6">
                {/* Project Title */}
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 dark:from-blue-300 dark:to-blue-500 bg-clip-text text-transparent">
                    {project.name}
                  </h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">{project.role}</p>
                </div>

                {/* Project Description */}
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features List */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Key Features</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {project.keyFeatures.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm font-medium rounded-full
                          bg-gradient-to-r from-blue-50 to-blue-100/50 dark:from-blue-900/50 dark:to-blue-800/30
                          text-blue-700 dark:text-blue-300
                          border border-blue-200/50 dark:border-blue-700/50
                          shadow-sm hover:shadow-md hover:scale-105
                          transition-all duration-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Icons */}
                <div className="flex flex-wrap gap-6">
                  {Object.entries(project.techIcons).map(([category, icons]) => (
                    <div key={category} className="flex items-center gap-2">
                      {icons.map((Icon, i) => (
                        <Icon
                          key={i}
                          className="w-5 h-5 text-blue-600 dark:text-blue-400"
                        />
                      ))}
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-2">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl
                        bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600
                        text-white shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30
                        transform hover:-translate-y-0.5 transition-all duration-300"
                    >
                      Live Demo
                      <Globe size={16} className="transform group-hover:rotate-45 transition-transform duration-300" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl
                        bg-gray-900 dark:bg-gray-700 text-white
                        shadow-lg shadow-gray-900/10 hover:shadow-xl hover:shadow-gray-900/20
                        transform hover:-translate-y-0.5 transition-all duration-300"
                    >
                      View Code
                      <Github size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
