import logo from './logo.svg';
import './App.css';
import HeroSection from "./heroSection";
import AboutmeSection from "./aboutmeSection";
import SkillsSection from "./skillsSection";
import PortofolioSection from "./portofolioSection";
import FooterSection from "./footerSection";

function App() {
  return (
    <div className="App">
        <HeroSection/>
        <AboutmeSection/>
        <SkillsSection/>
        <PortofolioSection/>
        <FooterSection/>
    </div>
  );
}

export default App;
