import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import IntroAnimate from "./components/IntroAnimate";
import Navbar from "./components/Navbar";

import Home from "./components/Home";
import CustomCursor from "./components/CustomCursor";
import Educaton from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="relative cursor-none">
      <CustomCursor />
      <Navbar />
      <Home />
      <section id="about" className="relative py-16 px-6 md:px-8 lg:px-12 max-w-6xl mx-auto">
        <div className="rounded-3xl border border-blue-100 bg-white/70 p-8 shadow-lg backdrop-blur dark:border-blue-900 dark:bg-gray-900/60 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600 dark:text-cyan-300">About</p>
          <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Product-minded full-stack engineer with a strong focus on clean systems and user experience.
          </h2>
          <div className="mt-6 grid gap-5 text-lg text-gray-700 dark:text-gray-300 md:grid-cols-2">
            <p>
              I build end-to-end web products using TypeScript across the frontend and backend, with a strong emphasis on React, Next.js, Node.js, and Express-based systems.
            </p>
            <p>
              I care about maintainability, clear architecture, and deployment-ready engineering. My work combines scalable UI experiences with API design, cloud thinking, and practical product ownership.
            </p>
          </div>
        </div>
      </section>
      <Experience/>
      <Projects />
      <Skills />
      <Educaton />
      <Certifications/>
      <Contact />
    </div>
  </StrictMode>
);
