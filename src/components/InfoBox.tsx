import { useDarkMode } from "../DarkModeContext";
import { motion } from "framer-motion";
import open from "../assets/open.svg";
import openDark from "../assets/openDark.svg";

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

  const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      className="infobox"
      id={project ? "infobox-projects" : "infobox-aboutme"}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.2 },
        },
      }}
    >
      <motion.div id="infobox-left" variants={childVariant}>
        <img src={image} alt="appliedMetadata" width="192px" />
      </motion.div>
      <motion.div id="infobox-mid" variants={childVariant}>
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

      <motion.div id="infobox-right" variants={childVariant}>
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
    </motion.div>
  );
}
