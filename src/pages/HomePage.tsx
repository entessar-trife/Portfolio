import Footer from "../components/Footer";
import Hero from "../components/Hero";
import LayoutWrapper from "../components/LayoutWrapper";
import NavBar from "../components/NavBar/NavBar";
import AboutSection from "../sections/AboutSection";
import ContactSection from "../sections/ContactSection";
import ProjectsSection from "../sections/ProjectsSection";
import SkillsSection from "../sections/SkillsSection";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <LayoutWrapper>
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </LayoutWrapper>
      <Footer />
    </>
  );
};

export default HomePage;
