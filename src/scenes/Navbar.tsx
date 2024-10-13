import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Navbar.css";
import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";
import resume from "../assets/Resume.pdf";
import menu from "../assets/menu.svg";
import menuDark from "../assets/menuDark.svg";
import close from "../assets/close.svg";
import { useDarkMode } from "../DarkModeContext";
import useMediaQuery from "../hooks/useMediaQuery";

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
  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

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

  const ThemeChangeIcon = () => (
    <div>
      {!isDarkMode ? (
        <img
          src={sun}
          id="sun"
          className="clickable-icon"
          alt="sun"
          onClick={() => {
            toggleDarkMode(true);
            setIsMenuToggled(false);
          }}
        />
      ) : (
        <img
          src={moon}
          id="moon"
          className="clickable-icon"
          alt="moon"
          onClick={() => {
            toggleDarkMode(false);
            setIsMenuToggled(false);
          }}
        />
      )}
    </div>
  );

  const DownloadCV = () => (
    <button id="resume-button" onClick={() => window.open(resume, "_blank")}>
      Download CV
    </button>
  );

  if (isAboveMediumScreens)
    return (
      <div id="navbar" className={isScrolled ? "scrolled" : ""}>
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
              <ThemeChangeIcon />
              {/* Download CV */}
              <DownloadCV />
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <div id="navbar" className={isScrolled ? "scrolled" : ""}>
      {/* Inner body */}
      <div id="nav-menu" className="inner-body">
        {/* Left side */}
        <div id="nav-menu-left">{`<HMX />`}</div>
        {/* Right side */}
        <div id="nav-menu-right">
          <img
            src={isDarkMode ? menuDark : menu}
            alt="menu"
            className="clickable-icon"
            onClick={() => setIsMenuToggled(true)}
          />
        </div>
      </div>

      {/* Translucent Background */}
      <AnimatePresence mode="wait" onExitComplete={() => null}>
        {isMenuToggled && (
          <motion.div
            id="mobile-menu-wrapper"
            onClick={() => setIsMenuToggled(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </AnimatePresence>

      {/* Slide out menu */}
      <AnimatePresence mode="wait" onExitComplete={() => null}>
        {isMenuToggled && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
          >
            {/* Top: Logo and Close icon */}
            <div id="mobile-menu-top">
              <div id="nav-menu-left">{`<HMX />`}</div>
              <img
                src={close}
                alt="close"
                className="clickable-icon"
                onClick={() => setIsMenuToggled(false)}
              />
            </div>
            {/* Mid: Sections */}
            <div id="mobile-menu-mid">
              <div
                className={`nav-menu-item ${
                  selectedSection === "about" ? "active" : ""
                }`}
                onClick={() => {
                  scrollTo(aboutMeRef);
                  setIsMenuToggled(false);
                }}
              >
                About
              </div>
              <div
                className={`nav-menu-item ${
                  selectedSection === "projects" ? "active" : ""
                }`}
                onClick={() => {
                  scrollTo(projectsRef);
                  setIsMenuToggled(false);
                }}
              >
                Projects
              </div>
              <div
                className={`nav-menu-item ${
                  selectedSection === "contact" ? "active" : ""
                }`}
                onClick={() => {
                  scrollTo(contactRef);
                  setIsMenuToggled(false);
                }}
              >
                Contact
              </div>
            </div>
            {/* Bot: Change Theme and Resume */}
            <div id="mobile-menu-bot">
              <div id="mobile-menu-bot-theme">
                <div
                  onClick={() => {
                    toggleDarkMode(!isDarkMode);
                    setIsMenuToggled(false);
                  }}
                >
                  Switch Theme
                </div>
                <ThemeChangeIcon />
              </div>
              {/* Download CV */}
              <DownloadCV />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
