import "../styles/intro.css";
import { motion } from "framer-motion";
import pic from "../assets/portfolio-pic1.jpg";
import location from "../assets/location.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import locationDark from "../assets/locationDark.svg";
import githubDark from "../assets/githubDark.svg";
import linkedinDark from "../assets/linkedinDark.svg";
import { useDarkMode } from "../DarkModeContext";

export default function Intro() {
  const { isDarkMode } = useDarkMode();

  const fadeIn = (delay: number, direction: string) => ({
    initial: "hidden",
    whileInView: "visible",
    transition: { delay, duration: 0.5 },
    viewport: { once: true, amount: 0.5 },
    variants: {
      hidden: { opacity: 0, x: direction === "left" ? -50 : 50 },
      visible: { opacity: 1, x: 0 },
    },
  });

  return (
    <div id="intro-body">
      <div id="intro-inner-body" className="inner-body">
        {/* Left side */}
        <div id="intro-left">
          {/* Main Text */}
          <div id="intro-left-text">
            <motion.div id="intro-left-text-main" {...fadeIn(0, "left")}>
              Hi, I'm HaoMing👋
            </motion.div>
            <motion.div id="intro-left-text-desc" {...fadeIn(0.1, "left")}>
              I am a full-stack developer specializing in front end engineering,
              with expertise in React and Node.js. I recently graduated from the
              University of Washington and am currently interning while actively
              seeking full-time employment opportunities.
            </motion.div>

            {/* Location + Work status */}
            <motion.div id="intro-left-info" {...fadeIn(0.2, "left")}>
              <div className="intro-left-info-item">
                <img
                  src={isDarkMode ? locationDark : location}
                  id="location"
                  alt="location"
                />
                <div>Greater Seattle Area</div>
              </div>
              <div className="intro-left-info-item">
                <div id="green-circle-wrapper">
                  <div id="green-circle" />
                </div>
                <div>Available to Work</div>
              </div>
            </motion.div>
            {/* Links */}
            <motion.div id="intro-left-links" {...fadeIn(0.3, "left")}>
              <img
                src={isDarkMode ? githubDark : github}
                className="clickable-icon"
                alt="github"
                onClick={() =>
                  window.open("https://github.com/hmxxu", "_blank")
                }
              />
              <img
                src={isDarkMode ? linkedinDark : linkedin}
                className="clickable-icon"
                alt="linkedin"
                onClick={() =>
                  window.open("https://linkedin.com/in/haomingxu", "_blank")
                }
              />
            </motion.div>
          </div>
        </div>
        {/* Right side + Pic and shadow */}
        <motion.div id="pic-wrapper" {...fadeIn(0.2, "right")}>
          <img src={pic} id="pic" alt="pic" />
          <div id="img-shadow" />
        </motion.div>
      </div>
    </div>
  );
}
