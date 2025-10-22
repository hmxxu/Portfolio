import "../styles/footer.css";
import { useDarkMode } from "../DarkModeContext";
import up from "../assets/up.svg";
import upDark from "../assets/upDark.svg";
import useMediaQuery from "../hooks/useMediaQuery";

export default function Footer() {
  const { isDarkMode } = useDarkMode();
  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");

  return (
    <div id="footer-body">
      <div id="footer-inner-body" className="inner-body">
        Coded by HaoMing Xu
        <div id="footer-divider" />
        <a
          href="https://www.figma.com/community/file/1262992249991763120/personal-portfolio-website-template-mobile-desktop"
          target="_blank"
          rel="noopener noreferrer"
        >
          Design by Sagar Shah
        </a>
        <div id="footer-divider" />
        Last Updated 10/25
        <div id="footer-divider" />
        <div id="up">
          {isAboveMediumScreens && "Back to Top"}
          <img
            src={isDarkMode ? upDark : up}
            className="clickable-icon"
            alt={up}
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          />
        </div>
      </div>
    </div>
  );
}
