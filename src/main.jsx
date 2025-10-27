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
      <Experience/>
      <Projects />
      <Skills />
      <Educaton />
      <Certifications/>
      <Contact />
    </div>
  </StrictMode>
);
