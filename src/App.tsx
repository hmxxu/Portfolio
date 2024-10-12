import { useRef } from "react";
import "./App.css";
import { DarkModeProvider } from "./DarkModeContext";
import Navbar from "./scenes/Navbar";
import Intro from "./scenes/Intro";
import AboutMe from "./scenes/AboutMe";
import Projects from "./scenes/Projects";
import Skills from "./scenes/Skills";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";

export default function App() {
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  return (
    <DarkModeProvider>
      <Navbar
        aboutMeRef={aboutMeRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <Intro />
      <div ref={aboutMeRef}>
        <AboutMe />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <Skills />
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </DarkModeProvider>
  );
}
