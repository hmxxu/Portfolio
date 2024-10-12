import "../styles/skills.css";
import SkillIcon from "../components/SkillIcon";
// Programming Languages
import javascript from "../assets/skills-icons/javascript.png";
import typescript from "../assets/skills-icons/typescript.png";
import html from "../assets/skills-icons/html.png";
import python from "../assets/skills-icons/python.png";
import java from "../assets/skills-icons/java.png";
import sql from "../assets/skills-icons/sql.png";
// Other Skills
import react from "../assets/skills-icons/react.png";
import nodejs from "../assets/skills-icons/nodejs.png";
import expressjs from "../assets/skills-icons/expressjs.png";
import git from "../assets/skills-icons/git.png";
import langchain from "../assets/skills-icons/langchain.svg";

export default function Skills() {
  return (
    <div id="skills-body">
      <div id="skills-inner-body" className="inner-body">
        {/* Programming Languages */}
        <div className="skill-type">
          <div id="infotag">Programming Languages</div>
          <div className="skill-icons">
            <SkillIcon
              img={javascript}
              name="JavaScript"
              link="https://www.javascript.com/"
            />
            <SkillIcon
              img={typescript}
              name="TypeScript"
              link="https://www.typescriptlang.org/"
            />
            <SkillIcon img={html} name="HTML" />
            <SkillIcon
              img={python}
              name="Python"
              link="https://www.python.org/"
            />
            <SkillIcon img={java} name="Java" link="https://www.java.com/en/" />
            <SkillIcon img={sql} name="SQL" />
          </div>
        </div>
        {/* Other Skills */}
        <div className="skill-type">
          <div id="infotag">Other Skills</div>
          <div className="skill-icons">
            <SkillIcon img={react} name="React" link="https://reactjs.org" />
            <SkillIcon img={nodejs} name="Node.js" link="https://nodejs.org" />
            <SkillIcon
              img={expressjs}
              name="Express.js"
              link="https://expressjs.com"
            />
            <SkillIcon img={git} name="Git" link="https://git-scm.com" />
            <SkillIcon
              img={langchain}
              name="LangChain"
              link="https://www.langchain.com/"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
