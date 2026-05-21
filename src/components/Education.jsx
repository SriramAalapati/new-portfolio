import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Percent } from "lucide-react";
import narayana from '../assets/education/narayana.png';
import sasi from '../assets/education/sasi-logo1.png';
import site from '../assets/education/sasi.png';
const educationData = [
  {
    institution: "Sasi Institute of Technology and Engineering",
    degree: "Bachelor of Technology in Computer Science and Data Science",
    duration: "2022 - 2026",
    location: "Tadepalligudem, Andhra Pradesh",
    performance: "85%",
    description: "Building strong foundations in computer science and software development. Focusing on full-stack development, data structures, and modern web technologies.",
    logo: site,
    highlights: [
      "Core Computer Science fundamentals",
      "Full-stack web development",
      "Data Structures & Algorithms",
      "Software Engineering practices"
    ],
    color: "#2563eb"
  },
  {
    institution: "Sasi Junior College",
    degree: "Intermediate Education (MPC)",
    duration: "2020 - 2022",
    location: "Tadepalligudem, Andhra Pradesh",
    performance: "94.1%",
    description: "A transformative period of self-discovery and academic growth. Developed strong analytical and problem-solving skills through intensive study of Mathematics and Sciences.",
    logo: sasi,
    highlights: [
      "Advanced Mathematics",
      "Physics & Chemistry",
      "Analytical thinking",
      "Time management"
    ],
    color: "#0891b2"
  },
  {
    institution: "Narayana English Medium School",
    degree: "Secondary School Education",
    duration: "Up to 2020",
    location: "Neeladripuram, West Godavari, Andhra Pradesh",
    performance: "93.1%",
    description: "Foundation years that sparked curiosity and built confidence. Developed a strong academic base and discovered passion for learning.",
    logo: narayana,
    highlights: [
      "Strong academic foundation",
      "Leadership skills",
      "Extra-curricular activities",
      "Communication skills"
    ],
    color: "#059669"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function Education() {
    return (
      <section
        id="education"
        className="relative py-20 px-6 md:px-8 lg:px-12 max-w-8xl mx-auto min-h-screen overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-blue-950/20" />
          <div
            className="absolute inset-0 opacity-[0.15] dark:opacity-[0.05]"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(59 130 246 / 0.15) 1px, transparent 0)',
              backgroundSize: '40px 40px'
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
          <motion.div
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl md:text-5xl xl:text-6xl font-extrabold bg-gradient-to-r from-gray-900 via-blue-800 to-blue-600 dark:from-white dark:via-blue-300 dark:to-blue-500 bg-clip-text text-transparent pb-2">
              Education Journey
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
              My academic path and learning experiences
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            {educationData.map((edu, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="mb-12 last:mb-0"
              >
                <div className="group relative p-6 md:p-8 rounded-2xl
                  bg-white/40 dark:bg-gray-800/40
                  backdrop-blur-sm
                  border border-blue-100 dark:border-blue-900
                  hover:border-blue-300 dark:hover:border-blue-700
                  shadow-lg hover:shadow-blue-200/40 dark:hover:shadow-blue-900/40
                  transition-all duration-300"
                >
                  {/* Institution Header */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden bg-white/80 dark:bg-gray-900/80 p-2 shadow-md">
                      <img
                        src={edu.logo}
                        alt={`${edu.institution} logo`}
                        loading="lazy"
                        width={80}
                        height={80}
                        onError={(e) => {
                          e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="%234B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><path d="M7 2v20"/><path d="M17 2v20"/><path d="M2 12h20"/><path d="M2 7h20"/><path d="M2 17h20"/></svg>';
                        }}
                        className="w-full h-full object-contain transition-opacity duration-300"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {edu.institution}
                      </h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                        {edu.degree}
                      </p>
                    </div>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-blue-500" />
                      <span className="text-gray-600 dark:text-gray-300">{edu.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-blue-500" />
                      <span className="text-gray-600 dark:text-gray-300">{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Percent className="w-5 h-5 text-blue-500" />
                      <span className="text-gray-600 dark:text-gray-300">{edu.performance}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    {edu.description}
                  </p>

                  {/* Highlights */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {edu.highlights.map((highlight, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Timeline Connector */}
                {idx !== educationData.length - 1 && (
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

          {/* Learning Insights */}
          {/* <motion.div
            variants={itemVariants}
            className="mt-20 p-6 md:p-8 rounded-2xl
              bg-white/40 dark:bg-gray-800/40
              backdrop-blur-sm border border-blue-100 dark:border-blue-900"
          >
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 dark:from-blue-300 dark:to-blue-500 bg-clip-text text-transparent mb-6">
              Key Learning Insights
            </h3>
            <div className="prose prose-blue dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Throughout my 17-year academic journey, I've gained much more than textbook knowledge. 
                The real value lies in developing critical thinking, adaptability, and problem-solving skills. 
                Each challenge has contributed to my growth, teaching me to approach problems systematically 
                and think creatively. This foundation in continuous learning and analytical thinking has 
                prepared me well for a career in software development.
              </p>
            </div>
          </motion.div> */}
        </motion.div>
      </section>
    )
}

// Animation variants


const EducationPostText = () => {
    
    const EducationMaskedText = () => {
        return <motion.p className='lg:text-xl md:text-md text-sm  first-letter:text-2xl font-medium dark:!bg-[#ec4e39]  dark:!text-black'>{educationMaskedText}</motion.p>
    }
    return <motion.div >
        <MaskedText child={<EducationMaskedText />} maskSize={250} className="absolute" />
        <motion.p className='lg:text-xl md:text-md text-sm first-letter:text-2xl font-medium' whileInView={{ opacity: 1, y: 0, scale: 1 }} initial={{ opacity: 0, y: 100, scale: 0.3 }} transition={{ type: "tween", duration: 0.6, ease: "easeInOut" }} viewport={{ amount: 0.35, once: true }}>
            Each new subject I encountered over the 17 years  fueled my curiosity and strengthened my enthusiasm for learning. Along the way, I developed essential skills like time management, collaboration, and team building. Encouraging and inspiring others became a cornerstone of my journey, as I realized the power of collective growth and shared learning. Simplifying concepts through personal understanding made the process both enjoyable and impactful, driving my passion for continuous exploration. This foundation has equipped me with strong problem-solving and critical thinking skills, enabling me to approach challenges with a structured and analytical mindset. Navigating diverse academic challenges has fostered my adaptability and resilience, allowing me to thrive in dynamic environments. Throughout my studies, I've honed my communication and presentation skills, enabling me to effectively convey complex ideas to diverse audiences.
        </motion.p>
    </motion.div>
}

const Pretimeline = () => {
    return <motion.svg height={75}>
        <motion.line initial={{ y2: 0 }} whileInView={{ y2: 75 }} viewport={{ amount: 0.7 }} transition={{ type: "tween", duration: 1.75, ease: "easeInOut" }} x1={100} x2={100} y1={1} y2={75} className="stroke-indigo-500 h-fit w-fit" />
    </motion.svg>
}