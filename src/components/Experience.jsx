import React from "react";
import { motion } from "framer-motion";
import fundrakshaLogo from "../assets/experiences/fundraksha.png";
import finmktLogo from "../assets/experiences/finmkt.svg"; // add logo if available
import {
  Calendar,
  MapPin,
  Building2,
  Code2,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

const experienceData = [
  {
    id: 1,
    role: "Software Engineer - Backend",
    company: "FinMkt",
    companyUrl: "https://www.finmkt.io/", 
    location: "Hyderabad, India",
    type: "Full-Time",
    period: "Feb 2026 - Present",
    description:
      "Working on backend system design and unified data processing architecture using Spring Boot, MongoDB, and microservice principles.",
    logo: finmktLogo,
    color: "#2563eb",
    skills: [
      "Spring Boot",
      "MongoDB",
      "Apache Artemis",
      "Spring Security",
      "JWT",
      "Redis",
      "Microservices",
    ],
    highlights: [
      "Designed and implemented a unified data processing engine over MongoTemplate",
      // "Built dynamic filtering, projections, pagination, and lookup configurations",
      // "Implemented transactional support for write operations",
      // "Integrated Redis caching strategies for performance optimization",
      // "Worked with microservice architecture using service discovery",
    ],
  },
  {
    id: 2,
    role: "Software Engineer Intern",
    company: "FundRaksha LegalTech Pvt Ltd",
    companyUrl: "https://fundraksha.com",
    location: "Hyderabad, India",
    type: "Internship",
    period: "May 2025 - Feb 2026",
    description:
      "Led frontend development for scalable React-based B2B legal-tech platforms with focus on responsive design and API integration.",
    logo: fundrakshaLogo,
    color: "#2563eb",
    skills: [
      "React.js",
      "TailwindCSS",
      "RESTful APIs",
      "JavaScript",
      "Git",
    ],
    highlights: [
      "Developed production-ready React applications",
      "Designed responsive dashboards and landing pages",
      "Integrated RESTful APIs for real-time data",
      "Optimized UI rendering and improved performance",
      "Collaborated with cross-functional teams",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-20 px-6 md:px-8 lg:px-12 max-w-7xl mx-auto min-h-screen"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-gray-900 via-blue-800 to-blue-600 dark:from-white dark:via-blue-300 dark:to-blue-500 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Building scalable systems, secure architectures, and production-grade applications.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experienceData.map((exp) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="mb-12"
            >
              <div className="p-6 md:p-8 rounded-2xl bg-white/40 dark:bg-gray-800/40 backdrop-blur border border-blue-100 dark:border-blue-900 shadow-lg transition-all duration-300">
                
                {/* Header */}
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-white p-2 shadow-md">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                      {exp.role}
                      {exp.companyUrl !== "#" && (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500"
                        >
                          <ArrowUpRight className="w-5 h-5" />
                        </a>
                      )}
                    </h3>

                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {exp.company}
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-gray-600 dark:text-gray-300">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-blue-500" />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-500" />
                    {exp.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-blue-500" />
                    {exp.type}
                  </div>
                </div>

                {/* Description */}
                <p className="mb-6 text-gray-700 dark:text-gray-300">
                  {exp.description}
                </p>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-blue-500" />
                    Technologies
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div>
                  <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" />
                    Key Contributions
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {exp.highlights.map((highlight, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                      >
                        <div className="h-1.5 w-1.5 mt-2 rounded-full bg-blue-500 flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}