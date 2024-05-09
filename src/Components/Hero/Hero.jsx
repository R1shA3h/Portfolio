import AnchorLink from "react-anchor-link-smooth-scroll";
import { UpdateFollower } from "react-mouse-follower";
import "./Hero.css";
const Hero = () => {
  const handleClick = () => {
    window.open(
      "https://drive.google.com/file/d/1VQmKbJ2tCNKzv3hFgdQbic9ISE1TQiWK/view?usp=sharing",
      "_blank"
    ); // Change the URL to the link you want to open
  };
  return (
    <div id="home" className="hero">
      <UpdateFollower
       style={{
        display: "flex",
        justifyContent: "center"
       }}
        mouseOptions={{
          zIndex: 10,
          mixBlendMode:"difference",
          backgroundColor: "black",
          rotate: 360,
          backgroundElement: (
            <div className="video-container">
              <video src="/video.mp4" autoPlay muted loop></video>
            </div>
          ),
          scale: 20,
        }}
      >
        <h1>
          <span>I am Rishabh Jain,</span> Frontend Developer based in India
        </h1>
      </UpdateFollower>

      <p>
        I am a prefinal year student of computer science and engineering from
        Ramdeobaba College and Management.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume" onClick={handleClick}>
          My Resume
        </div>
      </div>
    </div>
  );
};

export default Hero;
