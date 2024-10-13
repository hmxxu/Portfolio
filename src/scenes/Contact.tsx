import "../styles/contact.css";
import { useDarkMode } from "../DarkModeContext";
import copy from "../assets/copy.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import copyDark from "../assets/copyDark.svg";
import githubDark from "../assets/githubDark.svg";
import linkedinDark from "../assets/linkedinDark.svg";

export default function Contact() {
  const { isDarkMode } = useDarkMode();

  return (
    <div id="contact-body">
      <div id="contact-inner-body" className="inner-body">
        <div id="infotag">Contact Information</div>
        {/* Email section */}
        <div id="contact-text">
          Feel free to send me a email at
          <div id="contact-email">
            <div>hmxu123@gmail.com</div>
            <img
              src={isDarkMode ? copyDark : copy}
              className="clickable-icon"
              alt="copy"
              onClick={() => navigator.clipboard.writeText("hmxu123@gmail.com")}
            />
          </div>
        </div>
        {/* Other links */}
        <div id="contact-text">
          or find me here:
          <div id="contact-icons">
            <img
              src={isDarkMode ? githubDark : github}
              className="clickable-icon"
              alt="github"
              onClick={() => window.open("https://github.com/hmxxu", "_blank")}
            />
            <img
              src={isDarkMode ? linkedinDark : linkedin}
              className="clickable-icon"
              alt="linkedin"
              onClick={() =>
                window.open("https://linkedin.com/in/haomingxu", "_blank")
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
