import React from "react";
import { motion } from "framer-motion";

// === Import Tech Icons ===
import reactIcon from "../assets/skills/React.png";
import nextIcon from "../assets/skills/Next.js.png";
import tailwindIcon from "../assets/skills/Tailwind CSS.png";
import jsIcon from "../assets/skills/JavaScript.png";
import htmlIcon from "../assets/skills/HTML5.png";
import cssIcon from "../assets/skills/purple-css-logo.png";
import tsIcon from "../assets/skills/TypeScript.png";

import expressIcon from "../assets/skills/Express.png";
import springIcon from "../assets/skills/Spring.png";
import djangoIcon from "../assets/skills/Django.png";
import nodeIcon from "../assets/skills/Node.js.png";
import mongodbIcon from "../assets/skills/MongoDB.png";
import sqlIcon from "../assets/skills/Azure SQL Database.png";
import sequelizeIcon from "../assets/skills/Sequelize.png";
import mySQLIcon from "../assets/skills/MySQL.png";

import pythonIcon from "../assets/skills/Python.png";
import javaIcon from "../assets/skills/Java.png";
import cIcon from "../assets/skills/C.png";

import azureIcon from "../assets/skills/Azure.png";
import linuxIcon from "../assets/skills/Linux.png";
import gitIcon from "../assets/skills/Git.png";
import powershellIcon from "../assets/skills/Powershell.png";
import githubActionIcon from "../assets/skills/GithubActions.png";

import numpyIcon from "../assets/skills/NumPy.png";
import pandasIcon from "../assets/skills/Pandas.png";
import tfIcon from "../assets/skills/TensorFlow.png";
import seleniumIcon from "../assets/skills/Selenium.png";
import scikitIcon from "../assets/skills/scikit-learn.png";
import matplotlibIcon from "../assets/skills/Matplotlib.png";

import vscodeIcon from "../assets/skills/vscode.png";
import pycharmIcon from "../assets/skills/PyCharm.png";
import githubIcon from "../assets/skills/github.png";
import intellijIcon from "../assets/skills/IntelliJ.png";

const skillCategories = [
  {
    name: "Frontend Engineering",
    tech: [
      { name: "React", icon: reactIcon, level: 90 },
      { name: "Next.js", icon: nextIcon, level: 80 },
      { name: "TypeScript", icon: tsIcon, level: 85 },
      { name: "JavaScript", icon: jsIcon, level: 85 },
      { name: "Tailwind CSS", icon: tailwindIcon, level: 85 },
      { name: "HTML / CSS", icon: htmlIcon, level: 90 },
    ],
  },
  {
    name: "Backend & APIs",
    tech: [
      { name: "Node.js", icon: nodeIcon, level: 85 },
      { name: "Express", icon: expressIcon, level: 85 },
      { name: "REST APIs", icon: expressIcon, level: 85 },
      { name: "JWT / Auth", icon: expressIcon, level: 80 },
      { name: "MySQL", icon: mySQLIcon, level: 80 },
      { name: "MongoDB", icon: mongodbIcon, level: 75 },
      { name: "Spring Boot", icon: springIcon, level: 75 },
    ],
  },
  {
    name: "Cloud & Product Delivery",
    tech: [
      { name: "Azure", icon: azureIcon, level: 70 },
      { name: "Linux", icon: linuxIcon, level: 70 },
      { name: "Git", icon: gitIcon, level: 75 },
      { name: "GitHub Actions", icon: githubActionIcon, level: 65 },
      { name: "CI / CD", icon: azureIcon, level: 65 },
      { name: "Deployment", icon: linuxIcon, level: 65 },
    ],
  },
  {
    name: "Software Fundamentals",
    tech: [
      { name: "Java", icon: javaIcon, level: 75 },
      { name: "Python", icon: pythonIcon, level: 70 },
      { name: "Data Structures", icon: javaIcon, level: 75 },
      { name: "Algorithms", icon: cIcon, level: 70 },
      { name: "System Design", icon: springIcon, level: 70 },
      { name: "Clean Architecture", icon: nodeIcon, level: 70 },
    ],
  },
  {
    name: "Engineering Tools",
    tech: [
      { name: "VS Code", icon: vscodeIcon, level: 100 },
      { name: "GitHub", icon: githubIcon, level: 100 },
      { name: "PyCharm", icon: pycharmIcon, level: 100 },
      { name: "IntelliJ", icon: intellijIcon, level: 100 },
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

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-20 px-6 md:px-8 lg:px-12 max-w-8xl mx-auto min-h-screen overflow-hidden"
    >
      {/* === Background Gradient === */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-blue-950/20 -z-10" />

      {/* === Floating Icons Background === */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.3] dark:opacity-[0.05] -z-10">
        {skillCategories.flatMap((category) =>
          // Limit to 10 random icons for better performance
          category.tech.slice(0, 2).map((tech, i) => (
            <motion.img
              key={`float-${tech.name}-${i}`}
              src={tech.icon}
              alt=""
              loading="lazy"
              width={48}
              height={48}
              className="absolute w-12 h-12 object-contain"
              initial={{
                x: `${Math.random() * 100}vw`,
                y: `${Math.random() * 100}vh`,
              }}
              animate={{
                x: `${Math.random() * 100}vw`,
                y: `${Math.random() * 100}vh`,
                rotate: Math.random() * 360,
              }}
              transition={{
                duration: Math.random() * 15 + 15,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
            />
          ))
        )}
      </div>

      {/* === Main Content === */}
      <motion.div
        className="relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* === Section Header === */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-extrabold bg-gradient-to-r from-gray-900 via-blue-800 to-blue-600 dark:from-white dark:via-blue-300 dark:to-blue-500 bg-clip-text text-transparent pb-2">
            Core Stack & Engineering Strengths
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Focused on TypeScript, React, Node.js, Express, cloud deployment, and product engineering workflows that translate business needs into scalable software.
          </p>
        </motion.div>

        {/* === Skill Categories === */}
        <div className="grid gap-12">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="p-6 md:p-8 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-blue-100/50 dark:border-blue-900/50"
            >
              {/* === Category Header === */}
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 dark:from-blue-300 dark:to-blue-500 bg-clip-text text-transparent">
                  {category.name}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-blue-500/50 to-transparent dark:from-blue-400/30" />
              </div>

              {/* === Tech Grid === */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
                {category.tech.map((tech, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="group relative p-6 rounded-xl 
                      bg-white/40 dark:bg-gray-800/40
                      backdrop-blur-sm
                      border border-blue-100 dark:border-blue-900
                      hover:border-blue-300 dark:hover:border-blue-700
                      shadow-lg hover:shadow-blue-200/40 dark:hover:shadow-blue-900/40
                      transition-all duration-300"
                  >
                    {/* Hover Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-blue-900/30 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Icon */}
                    <div className="relative flex flex-col items-center">
                      <div
                        className="w-16 h-16 flex items-center justify-center 
                          rounded-xl overflow-hidden
                          bg-gradient-to-br from-blue-100 to-white dark:from-blue-900 dark:to-gray-800
                          group-hover:from-blue-200 group-hover:to-blue-50
                          dark:group-hover:from-blue-800 dark:group-hover:to-blue-950
                          shadow-inner transition-all duration-300"
                      >
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="w-12 h-12 object-contain transform group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>

                      {/* Tech Name + Progress */}
                      <div className="mt-4 text-center">
                        <p className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                          {tech.name}
                        </p>

                        {/* <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${tech.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              delay: 0.5,
                              duration: 1,
                              ease: "easeOut",
                            }}
                            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-400 dark:from-blue-400 dark:to-blue-500"
                          />
                        </div>
                        <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                          {tech.level}% proficiency
                        </p> */}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
