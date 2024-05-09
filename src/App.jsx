import Navbar from "./Components/Nav Bar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import MyWork from "./Components/MyWork/MyWork";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { MouseFollower, UpdateFollower } from "react-mouse-follower";

const App = () => {
  return (
    <div>
      <MouseFollower />
      <UpdateFollower mouseOptions={{
        backgroundColor: "white",
      }}>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <MyWork />
        <Contact />
        <Footer />
      </UpdateFollower>
    </div>
  );
};

export default App;
