import { motion } from "framer-motion";
import photo from "/hero.png";
import resume from "/sriram_aalapati_resume.pdf";
import "../styles/home.css";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => document.head.removeChild(link);
  }, []);

  return (
    <section
      id="home"
      className="mt-20 md:mt-0 relative w-full h-screen flex items-center justify-center px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Background Depth */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-gray-50/70 to-transparent dark:via-indigo-950/40 blur-3xl" />

      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10">
        <HeroText />
        <HeroImage />
      </div>
    </section>
  );
}

export default Home;

/* ---------------- IMAGE ---------------- */

const HeroImage = () => (
  <motion.div
    className="w-full md:w-1/2 flex justify-center"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
  >
    <img
      src={photo}
      alt="Sriram Aalapati - Backend-Focused Full Stack Engineer"
      loading="eager"
      draggable="false"
      onContextMenu={(e) => e.preventDefault()}
      className="w-56 sm:w-64 md:w-80 lg:w-[420px] aspect-square object-cover object-right-top rounded-3xl shadow-2xl ring-2 ring-blue-300/40 dark:ring-indigo-400/30"
    />
  </motion.div>
);

/* ---------------- TEXT ---------------- */

const HeroText = () => (
  <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-6">
    <Title />
    <Summary />
    <div className="flex flex-wrap gap-2 text-sm font-medium text-gray-700 dark:text-gray-200">
      {['React', 'TypeScript', 'Node.js', 'Express', 'Azure', 'Product Delivery'].map((item) => (
        <span key={item} className="rounded-full border border-blue-200 bg-blue-50/80 px-3 py-1.5 dark:border-cyan-700 dark:bg-cyan-950/30">
          {item}
        </span>
      ))}
    </div>
    <ActionButtons />
  </div>
);

const Title = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="space-y-3"
  >
    <p className="text-sm sm:text-base font-semibold uppercase tracking-[0.24em] text-blue-600 dark:text-cyan-300">
      Full Stack Engineer
    </p>
    <h1 className="font-[Poppins] font-bold text-4xl sm:text-5xl md:text-6xl leading-tight text-gray-900 dark:text-white">
      Sriram Aalapati
    </h1>
  </motion.div>
);

const Summary = () => (
  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3 }}
    className="font-[Inter] text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl"
  >
    I am a full-stack engineer focused on building scalable, product-oriented web applications using TypeScript, React, Next.js, Node.js, and Express. I enjoy working across the stack to design clean, maintainable systems and bring cloud-native product ideas from concept to deployment.
  </motion.p>
);

const ActionButtons = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5 }}
    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
  >
    <AnchorButton text="View Work" href="#projects" primary />
    <AnchorButton text="Download Resume" href={resume} />
  </motion.div>
);

/* ---------------- BUTTON ---------------- */

const AnchorButton = ({ text, href, primary }) => (
  <motion.a
    href={href}
    target={text.includes("Resume") ? "_blank" : undefined}
    rel={text.includes("Resume") ? "noopener noreferrer" : undefined}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`px-6 py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 text-center
      ${
        primary
          ? "text-white bg-gradient-to-r from-blue-600 to-cyan-500 shadow-md hover:shadow-lg focus:ring-blue-400"
          : "text-gray-800 dark:text-cyan-300 ring-1 ring-gray-300 dark:ring-cyan-900 hover:bg-gray-100 dark:hover:bg-cyan-900/20 focus:ring-cyan-300"
      }`}
  >
    {text}
  </motion.a>
);