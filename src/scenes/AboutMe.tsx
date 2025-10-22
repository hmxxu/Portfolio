import "../styles/aboutme.css";
import { motion } from "framer-motion";
import pic from "../assets/portfolio-pic2.png";
import InfoBox from "../components/InfoBox";
import appliedMetadata from "../assets/applied_metadata.png";
import uw from "../assets/uw.svg";

export default function Aboutme() {
  const amBullets: string[] = [
    `Developed a full-stack Progressive Web App for financial product
        calculations, delivering an improved user experience and increased
        accuracy for loan payments, mortgage rates, and other financial
        scenarios in the services industry`,
    `Engineered and implemented a MySQL database to allow users to
        efficiently save, view, delete, and load previous calculations`,
    `Leveraged LangChain and the OpenAI API to build a fine-tuned
        chatbot that assists users with financial inquiries`,
  ];
  const amAddition: string = `Tech Stack: JavaScript, React, Node.js, Express.js, LangChain, MySQL, HTML/CSS`;

  const uwBullets: string[] = [
    `Bachelor of Science in Computer Science`,
    `Overall GPA: 3.50, In Major GPA: 3.44`,
  ];
  const uwAddition: string = `Relevant Coursework: Data Structures and Parallelism, 
        Software Engineering, Distributed Systems, Database 
        Systems Internals, Distributed Systems, Computer Vision`;

  return (
    <div id="aboutme-body">
      {/* Inner body */}
      <div id="aboutme-inner-body" className="inner-body">
        {/* Left side + Pic and shadow */}
        <motion.div
          id="aboutme-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div id="pic2-wrapper">
            <img src={pic} id="pic2" alt="pic" />
            <div id="img-shadow2" />
          </div>
        </motion.div>
        {/* Right side + text */}
        <div id="aboutme-right">
          <div id="aboutme-right-info">
            <div id="infotag">Work Experience</div>
            <InfoBox
              image={appliedMetadata}
              header="Software Developer"
              bullets={amBullets}
              addition={amAddition}
              date="Jun. 2024 – Oct. 2024"
              link="https://www.linkedin.com/company/applied-metadata/"
            />
          </div>
          <div id="aboutme-right-info">
            <div id="infotag">Education</div>
            <InfoBox
              image={uw}
              header="University of Washington"
              bullets={uwBullets}
              addition={uwAddition}
              date="Sept. 2021 – Jun. 2024"
              link="https://www.washington.edu/"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
