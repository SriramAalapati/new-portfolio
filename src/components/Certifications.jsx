import React from "react";
import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink, ArrowUpRight, CheckCircle2, BookOpen, Trophy, Clock } from "lucide-react";

// === Certificate Imports ===
import cambridge from "../assets/certificates/cambridge.pdf";
import dataAnalyticsApsche from "../assets/certificates/data-analytics-apsche.pdf";
import fsdLinkedin from "../assets/certificates/fsd-linkedin.pdf";
import javaLinkedin from "../assets/certificates/java-linkedin.pdf";
import MLSkilldzire from "../assets/certificates/ML-skilldzire.pdf";
import mongodb from "../assets/certificates/mongodb.pdf";
import MTFWebDevelopment from "../assets/certificates/MTF-web-development.pdf";
import scrum from "../assets/certificates/scrum.pdf";
import smartInternz from "../assets/certificates/smartInternz.pdf";
import sqlLinkedin from "../assets/certificates/sql-linkedin.pdf";
import mongoDBISB from "../assets/certificates/mongodb-isb.pdf";
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

// Organize certifications by category and priority
const certifications = [
  {
    title: "MongoDB Python Developer Path",
    recipient: "Sriram Aalapati",
    date: "July 31, 2025",
    issuer: "MongoDB University",
    certificate: mongodb,
    link:"https://learn.mongodb.com/c/EJxAd7iXSCuF5q2uRAAorw",
    description: "Completed the MongoDB Python Developer Path, focusing on building scalable applications using Python and MongoDB.",
    category: "Technical Certifications",
    color: "#00ED64",
    priority: 1,
    skills: ["MongoDB", "Python", "Database Design", "Data Modeling"]
  },
  {
    title: "Cambridge English Interchange Level - 3",
    recipient: "Aalapati Sriram",
    issuer: "Cambridge University Press & Assessment",
    institution: "Sasi Institute of Technology and Engineering",
    certificate: cambridge,
    description: "Certified for successfully completing the Cambridge English Interchange Level - 3 Course, enhancing professional communication and English proficiency.",
    category: "Language & Communication",
    priority: 1,
    color: "#012169",
    skills: ["Business Communication", "Technical Writing", "Professional Presentation"]
  },
  {
    title: "Full-Stack Web Developer Certification",
    recipient: "Sriram Aalapati",
    issuer: "LinkedIn Learning",
    date: "May 20, 2025",
    certificate: fsdLinkedin,
    link:'https://www.linkedin.com/learning/certificates/70e457c9cc01cf82f965ae4647c0e744049fa0ff728b9c6f3807abb7d688d7da',
    description: "Comprehensive certification in full-stack development covering modern web technologies, architecture patterns, and best practices.",
    category: "Technical Certifications",
    priority: 2,
    color: "#0A66C2",
    skills: ["Full-Stack Development", "Web Architecture", "Frontend", "Backend", "DevOps"]
  },
  {
    title: "MongoDB",
    recipient: "Sriram Aalapati",
    date: "July 24, 2024",
    issuer: "Infosys Springboard",
    certificate: mongoDBISB,
    description: "Completed the MongoDB course, focusing on building scalable applications using MongoDB.",
    category: "Technical Certifications",
    color: "#00AD64",
    priority: 1,
    skills: ["MongoDB", "Database Design", "Data Modeling","MongoDB Aggregation Framework","Indexing Strategies","Replication and Sharding"]
  },
  {
    title: "ALTERYX DATA ANALYTICS PROCESS AUTOMATION",
    recipient: "Sriram Aalapati",
    issuer: "APSCHE",
    date: "May 04, 2024",
    certificate: dataAnalyticsApsche,
    link:'https://apschecert.eduskillsfoundation.org/pages/home/verify.php?cert=a14d0f5985cdd7c8affd58e5b5e56a9c',
    description: "Comprehensive certification in full-stack development covering modern web technologies, architecture patterns, and best practices.",
    category: "Technical Certifications",
    priority: 2,
    color: "#0A66C2",
    skills: ["Full-Stack Development", "Web Architecture", "Frontend", "Backend", "DevOps"]
  },
  {
    title: "Oracle Java Foundations",
    recipient: "Sriram Aalapati",
    issuer: "LinkedIn Learning",
    date: "May 20, 2025",
    duration: "7 hours 17 minutes",
    certificate: javaLinkedin,
    link:"https://www.linkedin.com/learning/certificates/eb008df6c4cbbd845b83a14cacb05250e56e60ae7a0c90d8ff55072af8822dfb?trk=share_certificate",
    description: "Learned object-oriented programming and Java fundamentals aligned with the Oracle Certified Foundations Associate exam (1Z0-811).",
    category: "Technical Certifications",
    priority: 3,
    color: "#FF0000",
    skills: ["Java", "Object-Oriented Programming", "Exception Handling", "Collections Framework", "Multithreading"]
  },
  {
    title: "Machine Learning Internship",
    recipient: "Aalapati Sriram",
    issuer: "SkillDzire in collaboration with APSCHE",
    institution: "Sasi Institute of Technology and Engineering",
    date: "2025",
    certificate: MLSkilldzire,
    description: "Intensive machine learning internship with hands-on experience in model development and real-world applications.",
    category: "Technical Certifications",
    priority: 3,
    color: "#FF6B6B",
    skills: ["Machine Learning", "Data Science", "Python", "Model Training", "Data Analysis"]
  },
  {
    title: "Web Development Professional Certification",
    recipient: "Sriram Aalapati",
    issuer: "MTF Institute (GTFI Instituto, Unipessoal LDA, Lisbon, Portugal)",
    certificate: MTFWebDevelopment,
    link:"https://edu.gtf.pt/admin/tool/certificate/index.php?code=2743990465SA",
    description: "Earned professional certification in web development covering frontend and backend technologies, best practices, and project deployment strategies.",
    category: "Technical Certifications",
    priority: 3,
    color: "#3182CE",
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Web Development Best Practices"]
  },
  {
    title: "Scrum Fundamentals Certified (SFC™)",
    recipient: "Sriram Aalapati",
    issuer: "SCRUMstudy (VMEdu, Inc.)",
    id: "1118724",
    date: "October 26, 2025",
    certificate: scrum,
    link:'https://www.scrumstudy.com/certification/verify?type=SFC&number=1118724',
    description: "Professional certification in Agile methodologies and Scrum framework for effective project management.",
    category: "Professional Development",
    priority: 1,
    color: "#6366F1",
    skills: ["Agile Methodology", "Scrum Framework", "Project Management", "Team Collaboration"]
  },
  {
    title: "Salesforce Developer Short-Term Internship",
    recipient: "Aalapati Sriram",
    issuer: "APSCHE & SmartBridge Educational Services Pvt. Ltd.",
    duration: "2 months",
    certificate: smartInternz,
    link:"https://apsche.smartinternz.com/certificate/student/a461555352c3f05a8a17c9d7aa9c0768",
    description: "Completed a 2-month Salesforce Developer internship, focusing on CRM application development and Apex-based backend logic.",
    category: "Technical Certifications",
    priority: 3,
    color: "#00A1E0",
    skills: ["Salesforce", "Apex", "Lightning Web Components", "CRM Development", "SOQL"]
  },
  {
    title: "Learning SQL Programming",
    recipient: "Sriram Aalapati",
    issuer: "LinkedIn Learning",
    date: "May 18, 2025",
    certificate: sqlLinkedin,
    link:"https://www.linkedin.com/learning/certificates/44f13f979104aa29a99992323d8c1e1bc6b5118a413a84e5340d84b4f8b65bf2?trk=share_certificate",
    description: "Completed SQL programming fundamentals course covering relational database design, query optimization, and data manipulation techniques.",
    category: "Technical Certifications",
    priority: 3,
    color: "#4169E1",
    skills: ["SQL Joins", "Views", "Stored Procedures", "Triggers", "Database Design", "Query Optimization", "Data Manipulation", "Indexing"]
  }
];

export default function Certifications() {
  // Group certificates by category
  const groupedCertifications = certifications.reduce((acc, cert) => {
    if (!acc[cert.category]) {
      acc[cert.category] = [];
    }
    acc[cert.category].push(cert);
    return acc;
  }, {});

  // Sort categories by priority
  Object.values(groupedCertifications).forEach(group => {
    group.sort((a, b) => (a.priority || 999) - (b.priority || 999));
  });

  return (
    <section
      id="certifications"
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
            Professional Certifications
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Validating expertise through industry-recognized credentials
          </p>
        </motion.div>

        {/* Certifications by Category */}
        <div className="max-w-4xl mx-auto space-y-16">
          {Object.entries(groupedCertifications).map(([category, certs]) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className="space-y-8"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4">
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 dark:from-blue-300 dark:to-blue-500 bg-clip-text text-transparent">
                  {category}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-blue-500/50 to-transparent dark:from-blue-400/30" />
              </div>

              {/* Certificates Grid */}
              <div className="grid gap-6">
                {certs.map((cert, index) => (
                  <motion.div
                    key={cert.id || index}
                    variants={itemVariants}
                    className="group"
                  >
                    <div className="relative p-6 md:p-8 rounded-2xl
                      bg-white/40 dark:bg-gray-800/40
                      backdrop-blur-sm
                      border border-blue-100 dark:border-blue-900
                      hover:border-blue-300 dark:hover:border-blue-700
                      shadow-lg hover:shadow-blue-200/40 dark:hover:shadow-blue-900/40
                      transition-all duration-300"
                    >
                      {/* Certificate Header */}
                      <div className="flex items-start justify-between gap-4 mb-6">
                        <div className="flex-1">
                          <div className="flex items-start gap-3">
                            <Award className="w-6 h-6 text-blue-500 mt-1" />
                            <div>
                              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                                {cert.title}
                              </h4>
                              <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                                {cert.issuer || cert.platform}
                              </p>
                            </div>
                          </div>
                        </div>
                        {cert.link && typeof cert.link === 'string' && cert.link.startsWith('http') && (
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors group"
                            title="View Verification"
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-blue-600 dark:text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                Verify
                              </span>
                              <ArrowUpRight className="w-5 h-5 text-blue-500" />
                            </div>
                          </a>
                        )}
                      </div>

                      {/* Certificate Details */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        {cert.date && (
                          <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-blue-500" />
                            <span className="text-gray-600 dark:text-gray-300">{cert.date}</span>
                          </div>
                        )}
                        {cert.duration && (
                          <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5 text-blue-500" />
                            <span className="text-gray-600 dark:text-gray-300">{cert.duration}</span>
                          </div>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 dark:text-gray-300 mb-6">
                        {cert.description}
                      </p>

                      {/* Skills */}
                      {cert.skills && (
                        <div>
                          <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-blue-500" />
                            Skills & Topics
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {cert.skills.map((skill, i) => (
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
                      )}

                      {/* View Certificate Link */}
                      {(cert.certificate) && (
                        <motion.a
                          href={cert.certificate}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-6 inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:underline"
                          whileHover={{ x: 4 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {'View Certificate'}
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Summary */}
        {/* <motion.div
          variants={itemVariants}
          className="mt-10 p-6 md:p-8 rounded-2xl
            bg-white/40 dark:bg-gray-800/40
            backdrop-blur-sm border border-blue-100 dark:border-blue-900"
        >
          <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 dark:from-blue-300 dark:to-blue-500 bg-clip-text text-transparent mb-6 flex items-center gap-3">
            <BookOpen className="w-8 h-8" />
            Continuous Learning
          </h3>
          <div className="prose prose-blue dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              These certifications represent my commitment to continuous learning and professional development.
              Each credential validates my expertise in specific domains while demonstrating my ability to
              adapt to new technologies and methodologies. I believe in keeping my skills current and
              relevant to deliver the best possible solutions in this rapidly evolving tech landscape.
            </p>
          </div>
        </motion.div> */}
      </motion.div>
    </section>
  );
}
