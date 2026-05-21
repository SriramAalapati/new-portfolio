import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Globe } from "lucide-react";

import chatbotImg from "../assets/projects/ai-healthcare-chatbot.png";
import dairyImg from "../assets/projects/dairy.png";
import crmImg from "../assets/projects/crm.png";
import dataprocessor from "../assets/projects/dataprocessor.png";

/* ---------------- PROJECT DATA ---------------- */

const projects = [
  {
    name: "DataProcessor - Unified Backend Data Engine",
    description:
      "A production-style unified data processing engine built on top of MongoTemplate, designed to abstract multi-database operations into a single consistent API layer supporting CRUD, filtering, projections, pagination, and transactional workflows.",
    tech: [
      "Spring Boot",
      "MongoTemplate",
      "Java",
      "REST APIs",
      "Transaction Management",
      "Logging Layer",
    ],
    github: "https://github.com/SriramAalapati/dataprocessor",
    link: "",
    image: dataprocessor,
    category: "Backend System / Architecture Layer",
    role: "Backend Engineering (Core System Design)",
    bg: "from-blue-900/30 via-blue-600/10 to-transparent",
    keyFeatures: [
      "Unified CRUD abstraction across multiple data sources",
      "Dynamic query builder (filter, projection, pagination, limit)",
      "Transaction-safe save/update pipeline",
      "Centralized logging and request tracing layer",
      "Extensible connector-based DB architecture",
      "Built on MongoTemplate with custom abstraction layer",
    ],
  },

  {
    name: "Business CRM - Lead Management Platform",
    description:
      "Enterprise CRM system for managing sales pipelines, lead tracking, and workflow automation with modular backend architecture and secure authentication.",
    tech: [
      "React.js",
      "Node.js (Express)",
      "MySQL",
      "Sequelize ORM",
      "JWT Authentication",
      "Tailwind CSS",
    ],
    github: "https://github.com/SriramAalapati/business-crm",
    link: "https://sriramaalapati.github.io/business-crm/",
    image: crmImg,
    category: "Full-Stack System",
    role: "Full Stack Engineering",
    bg: "from-indigo-900/20 via-indigo-500/10 to-transparent",
    keyFeatures: [
      "Role-based authentication system",
      "Kanban pipeline for leads",
      "Modular REST API design",
      "Secure JWT session handling",
      "Analytics dashboard",
    ],
  },

  {
    name: "Healthcare AI Chatbot",
    description:
      "AI-powered healthcare assistant using Gemini API for conversational symptom analysis and health guidance.",
    tech: ["React.js", "Tailwind CSS", "Gemini API"],
    github: "https://github.com/SriramAalapati/Healthcare-chatbot",
    link: "https://sriramaalapati.github.io/Healthcare-chatbot/",
    image: chatbotImg,
    category: "AI Integration System",
    role: "Frontend + AI Integration",
    bg: "from-cyan-900/20 via-cyan-500/10 to-transparent",
    keyFeatures: [
      "Natural language health interaction",
      "AI-based symptom analysis",
      "Responsive chat UI",
      "Real-time API communication",
    ],
  },

  {
    name: "Productivity & Finance Tracker",
    description:
      "Full-stack productivity system for managing tasks, expenses, and financial tracking with authentication and cloud persistence.",
    tech: [
      "React.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "Tailwind CSS",
    ],
    github: "https://github.com/SriramAalapati/diary",
    link: "https://sriramaalapati.github.io/diary/",
    image: dairyImg,
    category: "Full-Stack Application",
    role: "Full Stack Engineering",
    bg: "from-purple-900/20 via-purple-500/10 to-transparent",
    keyFeatures: [
      "Task management system",
      "Expense tracking module",
      "Auth-protected user system",
      "Cloud-based persistence",
      "Dashboard analytics",
    ],
  },
];

/* ---------------- ANIMATION ---------------- */

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

/* ---------------- COMPONENT ---------------- */

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-20 px-6 md:px-10 lg:px-16 max-w-7xl mx-auto"
    >
      {/* Header */}
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-gray-900 via-blue-800 to-blue-600 dark:from-white dark:via-blue-300 dark:to-blue-500 bg-clip-text text-transparent">
          Engineering Projects
        </h2>
        <p className="mt-5 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Backend systems, full-stack platforms, and AI integrations built with production-level thinking.
        </p>
      </motion.div>

      {/* GRID */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-16"
      >
        {projects.map((project, i) => (
          <motion.div
            key={i}
            variants={item}
            className={`rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-xl bg-gradient-to-r ${project.bg}`}
          >
            <div className="p-8 md:p-12 grid md:grid-cols-2 gap-10">

              {/* IMAGE */}
              <div className="rounded-2xl overflow-hidden bg-black/5 dark:bg-black/30 flex items-center justify-center">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-[280px] object-full"
                  />
                ) : (
                  <div className="text-gray-500 text-sm">
                    Architecture-level backend system (no UI)
                  </div>
                )}
              </div>

              {/* CONTENT */}
              <div className="space-y-5">

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {project.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 text-sm">
                    {project.role}
                  </p>
                </div>

                <p className="text-gray-700 dark:text-gray-300">
                  {project.description}
                </p>

                {/* FEATURES */}
                <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-300">
                  {project.keyFeatures.map((f, idx) => (
                    <li key={idx}>• {f}</li>
                  ))}
                </ul>

                {/* TECH */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full bg-white/60 dark:bg-gray-800 text-blue-700 dark:text-blue-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* LINKS */}
                <div className="flex gap-5 pt-2">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      className="flex items-center gap-2 text-blue-600 font-medium"
                    >
                      Live <Globe size={16} />
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="flex items-center gap-2 text-gray-900 dark:text-white font-medium"
                    >
                      Code <Github size={16} />
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