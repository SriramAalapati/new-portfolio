import { motion } from "framer-motion";
import photo from "../assets/hero.png";
import resume from "../assets/sriram_aalapati_resume.pdf";
import "../styles/home.css";
import { useEffect } from "react";

function Home() {
  // In a real application, fonts are usually loaded in index.html.
  // We keep this here to ensure the Poppins/Inter fonts are available in this isolated environment.
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
      className="relative section-container flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-80px)] px-6 md:px-16 lg:px-24 py-24 gap-1 overflow-hidden  mt-0 md:mt-20 scroll-mt-20"
    >
      {/* Enhanced backdrop glow for visual depth */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-gray-50/70 to-transparent dark:via-indigo-950/40 blur-3xl"></div>
      <HeroImage />
      <HeroText />
    </section>
  );
}
export default Home;

// --- Waving Hand Component for a lively greeting ---
const WavingHand = () => (
    <motion.span
        className="inline-block origin-[70%_70%] text-5xl md:text-6xl lg:text-7xl mr-2"
        initial={{ rotate: 0 }}
        animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
        transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut", repeatDelay: 5 }}
    >
        👋
    </motion.span>
);

// --- HeroImage Component ---
const HeroImage = () => (
  <motion.div
    className="relative flex justify-center items-center w-full md:w-1/2 cursor-pointer" // Added cursor hint
    initial={{ opacity: 0, y: 40, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
  >
    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-cyan-400/10 to-transparent blur-3xl opacity-60 -z-10 rounded-3xl"></div>
    <img
      src={photo}
      alt="Sriram Aalapati - Full Stack and AI Developer"
      draggable="false"
      loading="eager"
      width={460}
      height={460}
      onContextMenu={(e) => e.preventDefault()}
      className="rounded-[2.5rem] object-cover object-top-right aspect-square w-full sm:w-[360px] md:w-[420px] lg:w-[460px] shadow-2xl shadow-blue-500/30 dark:shadow-cyan-900/50 transition-all duration-500 hover:scale-[1.03] select-none ring-2 ring-blue-300/40 dark:ring-indigo-400/30"
    />
  </motion.div>
);

// --- HeroText Component (Container) ---
const HeroText = () => (
  <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left w-full md:w-1/2 gap-6 md:gap-7">
    <GreetingText />
    <IntroduceText />
    <MainText />
    <motion.div
      className="flex flex-wrap justify-center md:justify-start mt-2 gap-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
    >
      <AnchorButton text="View Skills" href="#skills" primary />
      <AnchorButton text="Download Resume" href={resume} />
    </motion.div>
  </div>
);

// --- GreetingText Component (Increased Size and Added Waving Hand) ---
const GreetingText = () => {
  const parent = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.25 } },
  };
  const child = { initial: { opacity: 0, y: 15 }, animate: { opacity: 1, y: 0 } };
  const text = ["Hi,", "I'm", "Sriram"];

  return (
    <motion.h1
      variants={parent}
      initial="initial"
      animate="animate"
      // Font size increased for stronger impact
      className="font-[Poppins] font-bold tracking-tight leading-[1.05] text-5xl md:text-6xl lg:text-7xl flex items-center"
    >
        {/* <WavingHand />  */}
      {text.map((word, i) => (
        <motion.span
          key={i}
          variants={child}
          className={`inline-block mr-3 ${
            i === 2
              ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-400 to-cyan-400 dark:from-indigo-400 dark:via-sky-300 dark:to-cyan-200"
              : "text-gray-900 dark:text-gray-100"
          }`}
        >
          {word}
        </motion.span>
      ))}
      <motion.span variants={child} className="text-indigo-500 dark:text-cyan-400">
        !
      </motion.span>
    </motion.h1>
  );
};

// --- IntroduceText Component (Font weight font-medium/font-semibold maintained) ---
const IntroduceText = () => {
  const parent = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.4 } },
  };
  const child = { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 } };

  return (
    <motion.p
      variants={parent}
      initial="initial"
      animate="animate"
      className="font-[Inter] text-xl md:text-2xl lg:text-3xl font-medium leading-snug tracking-tight text-gray-800 dark:text-gray-200 max-w-2xl"
    >
      <motion.span variants={child}>Building </motion.span>
      <motion.span variants={child} className="text-blue-600 dark:text-cyan-300 font-semibold">
        scalable, aesthetic
      </motion.span>
      <motion.span variants={child}> digital interfaces as a </motion.span>
      <motion.span variants={child} className="text-indigo-600 dark:text-indigo-300 font-semibold">
        Full-Stack Developer
      </motion.span>
      <motion.span variants={child}> & </motion.span>
      <motion.span variants={child} className="text-indigo-600 dark:text-indigo-300 font-semibold">
        AI Engineer.
      </motion.span>
    </motion.p>
  );
};

// --- MainText Component (Font weight font-normal maintained) ---
const MainText = () => {
  const parent = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.9, delay: 0.7 } },
  };
  const content =
    "With over six months of hands-on experience, I specialize in crafting responsive and interactive web experiences using React, JavaScript, and modern frameworks. My focus is delivering visually refined, high-performance interfaces with precision in every detail.";

  return (
    <motion.p
      variants={parent}
      initial="initial"
      animate="animate"
      className="font-[Inter] lg:text-xl md:text-lg font-normal leading-relaxed text-gray-700 dark:text-gray-400 max-w-2xl"
    >
      {content}
    </motion.p>
  );
};

// --- AnchorButton Component (Font weight font-semibold maintained, Secondary style refined) ---
const AnchorButton = ({ text, href, primary }) => (
  <motion.a
    href={href}
    target={text.includes("Resume") ? "_blank" : undefined}
    rel={text.includes("Resume") ? "noopener noreferrer" : undefined}
    className={`font-[Inter] relative px-8 py-3 rounded-full font-semibold tracking-wide transition-all duration-300 text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer
      ${
        primary
          ? "text-white bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 focus:ring-blue-400 dark:from-indigo-500 dark:to-cyan-400"
          // Refined secondary style: no border, clear hover background
          : "text-gray-700 dark:text-cyan-300 bg-transparent ring-1 ring-gray-300 dark:ring-cyan-900 hover:bg-gray-100 dark:hover:bg-cyan-900/30 focus:ring-cyan-300"
      }`}
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 1.2 }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.96 }}
  >
    {text}
  </motion.a>
);
