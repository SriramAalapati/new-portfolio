import React from "react";
import { motion } from "framer-motion";
import fundrakshaLogo from "../assets/experiences/fundraksha.png"
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
    role: "Software Engineer Intern",
    company: "FundRaksha LegalTech Pvt Ltd",
    companyUrl: "https://fundraksha.com",
    location: "Hyderabad, India",
    type: "Internship",
    period: "May 2025 – Present",
    description:
      "Leading frontend development for B2B legal-tech platforms, focusing on scalable React applications and optimal user experiences.",
    logo: fundrakshaLogo,
    color: "#2563eb",
    skills: ["React.js", "TailwindCSS", "RESTful APIs", "JavaScript", "Git"],
    highlights: [
      "Developed and deployed production-ready React.js applications",
      "Designed responsive landing pages and dashboards",
      "Integrated RESTful APIs for real-time data visualization",
      "Optimized UI workflows and reduced render time",
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
      className="relative py-20 px-6 md:px-8 lg:px-12 max-w-8xl mx-auto min-h-screen overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-blue-950/20" />
        <div
          className="absolute inset-0 opacity-[0.15] dark:opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgb(59 130 246 / 0.15) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative"
      >
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-extrabold bg-gradient-to-r from-gray-900 via-blue-800 to-blue-600 dark:from-white dark:via-blue-300 dark:to-blue-500 bg-clip-text text-transparent pb-2">
            Professional Experience
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            My journey in software development and engineering
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          {experienceData.reverse().map((exp, idx) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="mb-12 last:mb-0"
            >
              <div
                className="group relative p-6 md:p-8 rounded-2xl
                bg-white/40 dark:bg-gray-800/40
                backdrop-blur-sm
                border border-blue-100 dark:border-blue-900
                hover:border-blue-300 dark:hover:border-blue-700
                shadow-lg hover:shadow-blue-200/40 dark:hover:shadow-blue-900/40
                transition-all duration-300"
              >
                {/* Company & Role Header */}
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden bg-white/80 dark:bg-gray-900/80 p-2 shadow-md">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                      {exp.role}
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 inline-flex items-center"
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
                    </h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                      {exp.company}
                    </p>
                  </div>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-600 dark:text-gray-300">
                      {exp.period}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-600 dark:text-gray-300">
                      {exp.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-600 dark:text-gray-300">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {exp.description}
                </p>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-blue-500" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm rounded-full
                          bg-blue-100 dark:bg-blue-900/30
                          text-blue-700 dark:text-blue-300
                          border border-blue-200 dark:border-blue-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Highlights */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" />
                    Key Achievements
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {exp.highlights.map((highlight, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 p-1"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                        <span className="flex-1">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Timeline Connector */}
              {idx !== experienceData.length - 1 && (
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: 40 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="w-px bg-gradient-to-b from-blue-500 to-transparent mx-auto my-2"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Experience Insights */}
        {/* <motion.div
          variants={itemVariants}
          className="mt-20 p-6 md:p-8 rounded-2xl
            bg-white/40 dark:bg-gray-800/40
            backdrop-blur-sm border border-blue-100 dark:border-blue-900"
        >
          <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 dark:from-blue-300 dark:to-blue-500 bg-clip-text text-transparent mb-6">
            Professional Growth
          </h3>
          <div className="max-w-none text-gray-700 dark:text-gray-300 leading-relaxed">
            Through my professional experience, I've built a strong foundation
            in modern web development and software engineering practices. Each
            role has enhanced my teamwork, problem-solving, and ability to
            deliver scalable, high-quality solutions that make a tangible impact.
          </div>
        </motion.div> */}
      </motion.div>
    </section>
  );
}
