import "../styles/projects.css";
import InfoBox from "../components/InfoBox";
import beatbuddy from "../assets/beatbuddy.png";
import dog from "../assets/dog.jpg";

export default function Projects() {
  const bbBullets: string[] = [
    `BeatBuddy is a music recommendation application that leverages the Spotify Web API to provide personalized music suggestions based on a given sample`,
    `Developed, tested, and optimized backend code to enhance system efficiency and performance, fostering seamless communication with frontend counterparts;`,
    `Analyzed, averaged, and vectorized crucial audio features from each mood to develop a sophisticated mood recommendation algorithm, offering playlist suggestions based on mood and liked song inputs`,
    `Obtained quota extension and OAuth of scopes to eliminate rate limitations, enabling users to seamlessly sample music and save custom playlists to their Spotify accounts
`,
  ];
  const bbAdditional: string =
    "Tech Stack: TypeScript, React, Node.js, Jest, HTML/CSS";

  const dogBullets: string[] = [
    `Leveraged various neural network frameworks in Python to train models on over 20,000+ images, enabling precise classification of dog breeds from input images with a tested 90% accuracy`,
    `Developed a functional website and interactive demo, allowing users to test trained models with their own images`,
  ];
  const dogAddition: string = "Python, PyTorch, HTML";

  return (
    <div id="project-body">
      <div id="projects-inner-body" className="inner-body">
        {/* Top section */}
        <div id="projects-top">
          <div id="infotag">Projects</div>
          <div id="projects-top-text">Check out some of my projects:</div>
        </div>
        {/* Project boxes */}
        <div id="project-boxes">
          <InfoBox
            image={beatbuddy}
            header="Beat Buddy"
            bullets={bbBullets}
            addition={bbAdditional}
            date="April 2023 – June 2023"
            link="https://hmxxu.github.io/BeatBuddy/"
            project={true}
          />
          <InfoBox
            image={dog}
            header="Dog Breed Identification"
            bullets={dogBullets}
            addition={dogAddition}
            date="June 2024 – Sept. 2024"
            link="https://hmxxu.github.io/Dog-Breed-Identification/"
            project={true}
          />
        </div>
      </div>
    </div>
  );
}
