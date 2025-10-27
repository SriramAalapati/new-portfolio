import React from "react";
import { motion } from "framer-motion"; 

import {
  Phone,
  Mail,
  Github,
  Linkedin,
  MessageCircle,
  Code2,
  ExternalLink,
  Coffee
} from "lucide-react";

const contactMethods = [
  {
    name: "WhatsApp",
    description: "90% chance of reply within an hour",
    icon: MessageCircle,
    href: "https://wa.me/9121085596?text=Hi%20Sriram%2C%20I%20recently%20viewed%20your%20landing%20page%20and%20I%20would%20like%20to%20connect%20with%20you.",
    color: "#25D366",
    category: "Primary Contact"
  },
  {
    name: "Gmail",
    description: "100% chance of reply within one day",
    icon: Mail,
    href: "mailto:sriramaalapati4@gmail.com?subject=Impression%20of%20Landing%20page",
    color: "#EA4335",
    category: "Primary Contact"
  },
  {
    name: "LinkedIn",
    description: "Let's connect professionally",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/sriramaalapati/",
    color: "#0A66C2",
    category: "Primary Contact"
  },
  {
    name: "Phone",
    description: "Direct line for urgent matters",
    icon: Phone,
    href: "tel:9121085596",
    color: "#00C853",
    category: "Primary Contact"
  },
  {
    name: "GitHub",
    description: "Where I talk to myself in commit messages",
    icon: Github,
    href: "https://github.com/SriramAalapati",
    color: "#333",
    category: "Coding Profiles"
  },
  {
    name: "CodeChef",
    description: "Cooking up logic and burning test cases",
    icon: Code2,
    href: "https://www.codechef.com/users/sriramaalapati",
    color: "#5B4638",
    category: "Coding Profiles"
  },
  {
    name: "LeetCode",
    description: "Problem-solving journey",
    icon: Code2,
    href: "https://leetcode.com/u/SriramAalapati/",
    color: "#FFA116",
    category: "Coding Profiles"
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

export default function Contact() {
  const groupedContacts = contactMethods.reduce((acc, method) => {
    if (!acc[method.category]) {
      acc[method.category] = [];
    }
    acc[method.category].push(method);
    return acc;
  }, {});

  return (
    <section
      id="contact"
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
            Let's Connect
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Feel free to reach out for opportunities or just to say hi!
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <div className="grid gap-12">
          {Object.entries(groupedContacts).map(([category, methods], idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="p-6 md:p-8 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-blue-100/50 dark:border-blue-900/50"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 dark:from-blue-300 dark:to-blue-500 bg-clip-text text-transparent">
                  {category}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-blue-500/50 to-transparent dark:from-blue-400/30" />
              </div>

              {/* Contact Methods */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {methods.map((method, i) => (
                  <motion.a
                    key={i}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Contact via ${method.name}: ${method.description}`}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="group relative p-4 sm:p-6 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-blue-400
                      bg-white/40 dark:bg-gray-800/40
                      backdrop-blur-sm
                      border border-blue-100 dark:border-blue-900
                      hover:border-blue-300 dark:hover:border-blue-700
                      shadow-lg hover:shadow-blue-200/40 dark:hover:shadow-blue-900/40
                      transition-all duration-300"
                  >
                    {/* Hover Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-blue-900/30 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

                    <div className="relative flex items-start gap-4">
                      {/* Icon */}
                      <div
                        className="p-3 rounded-xl"
                        style={{ backgroundColor: `${method.color}20` }}
                      >
                        <method.icon
                          size={24}
                          style={{ color: method.color }}
                          className="transform group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1 flex items-center gap-2">
                          {method.name}
                          <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <div className="space-y-2">
            <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
              <Coffee size={20} className="text-yellow-600" />
              Designed and Developed with passion by{" "}
              <a
                href="https://github.com/SriramAalapati"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
              >
                Sriram Aalapati
              </a>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Last updated: {new Date(__BUILD_TIME__).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                timeZoneName: 'short'
              })}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}