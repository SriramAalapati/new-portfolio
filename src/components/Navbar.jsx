import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import resume from "/sriram_aalapati_resume.pdf";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import useIntersectionObserver from "./observer";
const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  useIntersectionObserver(setActive);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("theme") || "light"
      : "light"
  );
  // 🌙 Theme Setup
  useEffect(() => {
    if (typeof window === "undefined") return;
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);



  // 🌗 Toggle Theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // 🧭 Smooth Scroll with dynamic header offset
 const handleLinkClick = (id) => {
  setActive(id);
  setMenuOpen(false);

  requestAnimationFrame(() => {
    const section = document.getElementById(id);
    const header = document.querySelector("header");

    if (section) {
      const headerHeight = header ? header.offsetHeight:100;
      const isMobile = window.innerWidth < 768;

      const y =
        section.getBoundingClientRect().top +
        window.pageYOffset -
        headerHeight;

      window.scrollTo({
        top:isMobile ? y + 600 : y,
        behavior: "smooth",
      });
    }
  });
};

  const ctaIcons = [
    { Icon: FaGithub, href: "https://github.com/SriramAalapati", color: "#333" },
    { Icon: FaLinkedin, href: "https://www.linkedin.com/in/sriramaalapati/", color: "#0A66C2" },
    { Icon: FaEnvelope, href: "mailto:sriramaalapati4@gmail.com", color: "#EA4335" },
  ];

  return (
    <header className=" fixed top-0 left-0 w-full z-[100] bg-[var(--color-bg)]/95 backdrop-blur-3xl border-b border-[var(--color-border)] dark:bg-[var(--color-bg-dark)/0.6] transition-all duration-300 shadow-sm">
      <nav role="navigation" aria-label="Main navigation" className="max-w-7xl mx-auto px-6  h-[80px] flex items-center justify-between">
        {/* === Logo === */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 cursor-pointer select-none min-w-0"
          onClick={() => handleLinkClick("home")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") handleLinkClick("home");
          }}
        >
          {/* logo text block - stacked to avoid layout shift */}
          <div className="flex flex-col leading-tight min-w-0">
            <motion.h1
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="text-lg md:text-2xl font-bold font-heading bg-gradient-to-r from-blue-500 to-teal-400 dark:from-indigo-400 dark:to-cyan-300 bg-clip-text text-transparent tracking-tight whitespace-nowrap"
            >
              SRIRAM
            </motion.h1>
            <span className="text-[11px] md:text-sm text-muted dark:text-gray-400 font-body mt-0.5 opacity-90">
              Full Stack Engineer
            </span>
          </div>
        </motion.div>

        {/* === Desktop Menu === */}
        <div className="hidden md:flex items-center gap-6">
          {links.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleLinkClick(id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") handleLinkClick(id);
              }}
              aria-current={active === id ? "page" : undefined}
              aria-label={`Go to ${label}`}
              className={`relative group font-body font-medium text-[15px] tracking-wide transition-all duration-300 text-[var(--color-text)] dark:text-gray-200 hover:text-blue-600 dark:hover:text-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-300 dark:focus-visible:ring-cyan-400 rounded-sm px-1 py-2`}
            >
              {label}
              {active === id && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-[6px] h-[2px] w-full bg-gradient-to-r from-blue-500 to-teal-400 dark:from-indigo-400 dark:to-cyan-300 rounded-full"
                  transition={{ type: "spring", stiffness: 250, damping: 25 }}
                />
              )}
              <span className="absolute left-0 -bottom-[6px] h-[2px] w-0 bg-gradient-to-r from-blue-500 to-teal-400 dark:from-indigo-400 dark:to-cyan-300 rounded-full group-hover:w-full transition-all duration-300" />
            </button>
          ))}

          {/* === Resume Button === */}
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href={resume}
            target="_blank"
            className="relative px-4 py-2 text-sm rounded-lg font-semibold text-white dark:text-black bg-gradient-to-r from-blue-600 to-teal-400 dark:from-indigo-500 dark:to-cyan-400 shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-300"
            aria-label="Open resume / contact"
          >
            Resume
          </motion.a>

          {/* === Socials + Theme === */}
          <div className="flex items-center gap-3">
            {ctaIcons.map(({ Icon, href, color }, idx) => (
              <motion.a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={href}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-300"
                style={{ backgroundColor: color, color: "#fff" }}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
            <motion.button
              whileTap={{ rotate: 360 }}
              onClick={toggleTheme}
              className="ml-4 text-[var(--color-text)] dark:text-gray-200 hover:text-blue-500 dark:hover:text-cyan-400 transition-all duration-300"
            >
              {theme === "light" ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </div>
        </div>

        {/* === Mobile Menu Button === */}
        <div className="md:hidden flex items-center">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="text-[var(--color-text)] dark:text-gray-200 hover:text-blue-500 dark:hover:text-cyan-400 transition-all 
              p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </motion.button>
        </div>
      </nav>

      {/* === Mobile Menu === */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="navigation"
            aria-label="Mobile navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden flex flex-col bg-[var(--color-bg)] dark:bg-[var(--color-bg-dark)] backdrop-blur-md border-t border-[var(--color-border)] shadow-xl rounded-b-3xl overflow-hidden"
          >
            {links.map(({ id, label }) => (
              <motion.button
                key={id}
                onClick={() => handleLinkClick(id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") handleLinkClick(id);
                }}
                whileHover={{ scale: 1.03, x: 6 }}
                whileTap={{ scale: 0.97 }}
                aria-current={active === id ? "page" : undefined}
                className={`py-4 text-base font-medium text-left px-6 text-[var(--color-text)] dark:text-gray-200 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-300 rounded ${
                  active === id
                    ? "bg-gradient-to-r from-blue-500/10 to-teal-400/10 dark:from-indigo-400/10 dark:to-cyan-300/10"
                    : "hover:bg-gray-100 dark:hover:bg-white/5"
                }`}
              >
                {label}
              </motion.button>
            ))}

            <div className="flex flex-col gap-4 px-6 py-4">
              <motion.a
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
                href={resume}
                target="_blank"
                className="px-4 py-2 text-center text-md rounded-xl font-semibold text-white dark:text-black bg-gradient-to-r from-blue-500 to-teal-400 dark:from-indigo-400 dark:to-cyan-300 shadow-md hover:shadow-lg transition-all duration-300"
              >
                View My RESUME
              </motion.a>

              <div className="flex justify-between items-center">
                {ctaIcons.map(({ Icon, href, color }, idx) => (
                  <motion.a
                    key={idx}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300"
                    style={{ backgroundColor: color, color: "#fff" }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}

                <motion.button
                  whileTap={{ rotate: 360 }}
                  onClick={toggleTheme}
                  className="text-[var(--color-text)] dark:text-gray-200 hover:text-blue-500 dark:hover:text-cyan-400 transition-all duration-300"
                >
                  {theme === "light" ? <Sun size={20} /> : <Moon size={20} />}
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
