import "../styles/infobox.css";
import { useDarkMode } from "../DarkModeContext";
import { motion } from "framer-motion";
import open from "../assets/open.svg";
import openDark from "../assets/openDark.svg";
import useMediaQuery from "../hooks/useMediaQuery";

interface infoBoxProps {
  image: string;
  header: string;
  bullets: string[];
  addition?: string;
  date: string;
  link?: string;
  project?: boolean;
}

export default function InfoBox({
  image,
  header,
  bullets,
  addition,
  date,
  link,
  project = false,
}: infoBoxProps) {
  const { isDarkMode } = useDarkMode();
  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");

  const popIn = (delay: number) => ({
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.2 },
    variants: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          delay,
          duration: 0.5,
        },
      },
    },
  });

  // Medium Resolution Format
  if (isAboveMediumScreens)
    return (
      <div
        className="infobox"
        id={project ? "infobox-projects" : "infobox-aboutme"}
      >
        {/* Left: Image */}
        <motion.div id="infobox-left" {...popIn(0.05)}>
          <img src={image} alt="image2" id="image" />
        </motion.div>
        {/* Mid: Header and Description */}
        <motion.div id="infobox-mid" {...popIn(0.1)}>
          <div id="infobox-mid-header">{header}</div>
          <div id="infobox-mid-bullets">
            <ul>
              {bullets.map((element, index) => (
                <li key={index}>{element}</li>
              ))}
            </ul>
            {addition}
          </div>
        </motion.div>
        {/* Right: Time and Link */}
        <motion.div id="infobox-right" {...popIn(0.15)}>
          <div>{date}</div>
          {link && (
            <div id="open-wrapper">
              <img
                src={isDarkMode ? openDark : open}
                className="clickable-icon"
                id="open"
                alt="open"
                onClick={() => window.open(link, "_blank")}
              />
            </div>
          )}
        </motion.div>
      </div>
    );

  // Small Resolution Format
  return (
    <div
      className="infobox-small"
      id={project ? "infobox-projects" : "infobox-aboutme"}
    >
      {/* Top: image */}
      <motion.div id="infobox-small-top" {...popIn(0)}>
        <img src={image} alt="image2" id="image" />
      </motion.div>
      {/* Mid: Time and Link */}
      <motion.div id="infobox-small-mid" {...popIn(0)}>
        <div id="infobox-small-mid-left">{date}</div>
        {link && (
          <div id="open-wrapper">
            <img
              src={isDarkMode ? openDark : open}
              className="clickable-icon"
              id="open"
              alt="open"
              onClick={() => window.open(link, "_blank")}
            />
          </div>
        )}
      </motion.div>
      {/* Bot: Header and Description */}
      <motion.div id="infobox-small-bot" {...popIn(0)}>
        <div id="infobox-mid-header">{header}</div>
        <div id="infobox-mid-bullets">
          <ul>
            {bullets.map((element, index) => (
              <li key={index}>{element}</li>
            ))}
          </ul>
          {addition}
        </div>
      </motion.div>
    </div>
  );
}
