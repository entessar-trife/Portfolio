import "./App.css";
import Footer from "./components/Footer";
import HandleLoadingComponent from "./components/HandleLoadingComponent";
import Hero from "./components/Hero";
import LayoutWrapper from "./components/LayoutWrapper";
import NavBar from "./components/NavBar/NavBar";
import ScrollComponent from "./components/ScrollComponent";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";

function App() {
  return (
    <HandleLoadingComponent>
      <ScrollComponent />
      <NavBar />
      <Hero />
      <LayoutWrapper>
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </LayoutWrapper>
      <Footer />
    </HandleLoadingComponent>
  );
}

export default App;
