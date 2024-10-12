import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";
import resume from "../assets/Resume.pdf";
import { useDarkMode } from "../DarkModeContext";

interface navbarProps {
  aboutMeRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

export default function Navbar({
  aboutMeRef,
  projectsRef,
  contactRef,
}: navbarProps) {
  const [selectedSection, setSelectedSection] = useState<string>("about");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  function handleScroll() {
    const sections = [
      { ref: aboutMeRef, name: "about" },
      { ref: projectsRef, name: "projects" },
      { ref: contactRef, name: "contact" },
    ];
    const remInPixels = parseFloat(
      getComputedStyle(document.documentElement).fontSize
    );
    const offsetAdjustment = remInPixels * 4;
    for (const { ref, name } of sections) {
      if (ref.current) {
        const sectionBottom =
          ref.current.offsetTop - offsetAdjustment + ref.current.clientHeight;
        if (sectionBottom > window.scrollY) {
          setSelectedSection(name);
          break;
        }
      }
    }

    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }

  function scrollTo(ref: React.RefObject<HTMLDivElement>) {
    if (ref.current) {
      const remInPixels = parseFloat(
        getComputedStyle(document.documentElement).fontSize
      );
      const offsetAdjustment = remInPixels * 4;
      window.scrollTo({
        top: ref.current.offsetTop - offsetAdjustment,
        behavior: "smooth",
      });
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="navbar"
      style={{
        boxShadow: isScrolled ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "",
      }}
    >
      {/* Inner body */}
      <div id="nav-menu" className="inner-body">
        {/* Left side */}
        <div id="nav-menu-left">{`<HMX />`}</div>
        {/* Right side */}
        <div id="nav-menu-right">
          {/* Right-left side (scenes) */}
          <div id="nav-menu-right-scenes">
            <div
              className={`nav-menu-item ${
                selectedSection === "about" ? "active" : ""
              }`}
              onClick={() => scrollTo(aboutMeRef)}
            >
              About
            </div>
            <div
              className={`nav-menu-item ${
                selectedSection === "projects" ? "active" : ""
              }`}
              onClick={() => scrollTo(projectsRef)}
            >
              Projects
            </div>
            <div
              className={`nav-menu-item ${
                selectedSection === "contact" ? "active" : ""
              }`}
              onClick={() => scrollTo(contactRef)}
            >
              Contact
            </div>
          </div>
          {/* Right-right side (action buttons) */}
          <div id="nav-menu-right-divider" />
          {/* Sun or Moon to toggle dark mode */}
          <div id="nav-menu-right-buttons">
            {!isDarkMode ? (
              <img
                src={sun}
                id="sun"
                className="clickable-icon"
                alt="sun"
                onClick={() => toggleDarkMode()}
              />
            ) : (
              <img
                src={moon}
                id="moon"
                className="clickable-icon"
                alt="moon"
                onClick={() => toggleDarkMode()}
              />
            )}
            {/* Download CV */}
            <button
              id="resume-button"
              onClick={() => window.open(resume, "_blank")}
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
