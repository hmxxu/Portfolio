import { motion } from "framer-motion";

interface skillIconProps {
  img: string;
  name: string;
  link?: string;
}

export default function SkillIcon({ img, name, link }: skillIconProps) {
  return (
    <motion.div
      id="skill-icon"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
      }}
    >
      <img
        src={img}
        alt={img}
        onClick={() => {
          if (link) {
            window.open(link, "_blank");
          }
        }}
      />
      <div>{name}</div>
    </motion.div>
  );
}
