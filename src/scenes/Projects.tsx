import "../styles/projects.css";
import InfoBox from "../components/InfoBox";
import beatbuddy from "../assets/beatbuddy.png";
import dog from "../assets/dog.jpg";
import ordersup from "../assets/ordersup.png";

export default function Projects() {
  // Bullet points for each InfoBox
  const ouBullets: string[] = [
    `Engineered a mobile POS app for a local restaurant to process 200+ daily transactions, streamlining the order checkout process while avoiding the high cost of traditional POS systems and transaction fees`,
    `Pioneered automated receipt printing functionality via StarXpand SDK, shortening order fulfillment times by an average of 7 seconds per order and allowing the restaurant to service more customers`,
    `Implemented a real-time menu and transaction system using Supabase, enabling users to view order history and customize menu items with image upload support
`,
  ];

  const bbBullets: string[] = [
    `Developed, tested, and optimized backend code to enhance system efficiency and performance, fostering seamless communication with frontend counterparts;`,
    `Analyzed, averaged, and vectorized crucial audio features from each mood to develop a sophisticated mood recommendation algorithm, offering playlist suggestions based on mood and liked song inputs`,
    `Obtained quota extension and OAuth of scopes to eliminate rate limitations, enabling users to seamlessly sample music and save custom playlists to their Spotify accounts
`,
  ];

  const dogBullets: string[] = [
    `Leveraged various neural network frameworks in Python to train models on over 20,000+ images, enabling precise classification of dog breeds from input images with a tested 90% accuracy`,
    `Developed a functional website and interactive demo, allowing users to test trained models with their own images`,
  ];

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
            image={ordersup}
            header="Orders Up"
            desc="Customized mobile POS — free to use, zero fees"
            bullets={ouBullets}
            addition="Tech Stack: React Native, Expo, TypeScript, Supabase, Nativewind"
            date="Feb. 2025 – Sept. 2025"
            project={true}
          />
          <InfoBox
            image={beatbuddy}
            header="Beat Buddy"
            desc="Music recommender app using Spotify Web API to suggest songs from a sample"
            bullets={bbBullets}
            addition="Tech Stack: TypeScript, React, Node.js, Jest, HTML/CSS"
            date="Apr. 2023 – Jun. 2023"
            link="https://hmxxu.github.io/BeatBuddy/"
            project={true}
          />
          <InfoBox
            image={dog}
            header="Dog Breed Identification"
            desc="Image-based dog breed identifier"
            bullets={dogBullets}
            addition="Tech Stack: Python, PyTorch, CUDA, HTML/CSS"
            date="Jun. 2024 – Sept. 2024"
            link="https://hmxxu.github.io/Dog-Breed-Identification/"
            project={true}
          />
        </div>
      </div>
    </div>
  );
}
