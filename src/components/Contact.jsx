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
} from "lucide-react";

const contactMethods = [
  {
    name: "WhatsApp",
    description: "Direct communication for quick responses",
    icon: MessageCircle,
    href: "https://wa.me/9121085596",
    color: "#25D366",
    category: "Primary Contact",
  },
  {
    name: "Email",
    description: "Formal communication for opportunities and discussions",
    icon: Mail,
    href: "mailto:sriramaalapati4@gmail.com",
    color: "#EA4335",
    category: "Primary Contact",
  },
  {
    name: "LinkedIn",
    description: "Professional networking and career opportunities",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/sriramaalapati/",
    color: "#0A66C2",
    category: "Primary Contact",
  },
  {
    name: "Phone",
    description: "Direct contact for urgent communication",
    icon: Phone,
    href: "tel:9121085596",
    color: "#16A34A",
    category: "Primary Contact",
  },
  {
    name: "GitHub",
    description: "Source code and engineering projects",
    icon: Github,
    href: "https://github.com/SriramAalapati",
    color: "#111827",
    category: "Engineering Profiles",
  },
  {
    name: "LeetCode",
    description: "Data structures and algorithm practice",
    icon: Code2,
    href: "https://leetcode.com/u/SriramAalapati/",
    color: "#FFA116",
    category: "Engineering Profiles",
  },
  {
    name: "CodeChef",
    description: "Competitive programming profile",
    icon: Code2,
    href: "https://www.codechef.com/users/sriramaalapati",
    color: "#5B4638",
    category: "Engineering Profiles",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  const grouped = contactMethods.reduce((acc, item) => {
    acc[item.category] = acc[item.category] || [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <section
      id="contact"
      className="relative py-20 px-6 md:px-10 max-w-6xl mx-auto min-h-screen"
    >
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Contact
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Open to full-stack product engineering opportunities, frontend/backend collaboration, and cloud-focused product development roles.
        </p>
      </motion.div>

      {/* Groups */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-12"
      >
        {Object.entries(grouped).map(([category, items]) => (
          <motion.div key={category} variants={item}>
            {/* Category Title */}
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                {category}
              </h3>
              <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-2 gap-5">
              {items.map((c, i) => (
                <motion.a
                  key={i}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={item}
                  whileHover={{ scale: 1.02 }}
                  className="group relative p-5 rounded-xl border border-gray-200 dark:border-gray-700
                  bg-white/60 dark:bg-gray-900/40 backdrop-blur-md
                  hover:border-gray-400 dark:hover:border-gray-500
                  transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    <div
                      className="p-3 rounded-lg"
                      style={{ backgroundColor: `${c.color}15` }}
                    >
                      <c.icon
                        size={22}
                        style={{ color: c.color }}
                      />
                    </div>

                    {/* Text */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {c.name}
                        </h4>
                        <ExternalLink
                          size={16}
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {c.description}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer */}
      <div className="mt-16 text-center text-sm text-gray-500 dark:text-gray-400">
        Built with React, Framer Motion, and Tailwind CSS
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-500 text-center"> Last updated: {new Date(__BUILD_TIME__).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', timeZoneName: 'short' })} </p>
    </section>
  );
}