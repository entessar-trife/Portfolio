import MainTitle from "../components/MainTitle";
import ProjectCardComponent from "../components/ProjectCardComponent";
import { projectsData } from "../data/projectsData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";

const ProjectsSection = () => {
  return (
    <section id="projects" className="pt-24 text-center">
      <MainTitle title="My Projects" />

      {/* PROJECTS CARDS */}
      <div className="grid gap-9 md:grid-cols-2 lg:grid-cols-3 mb-10">
        {projectsData.slice(0, 3).map((project) => (
          <ProjectCardComponent key={project.id} {...project} />
        ))}
      </div>

      {/* VIEW ALL PROJECTS BUTTON */}
      <Link
        to="projects"
        className="bg-purple-400 rounded-xl py-2.5 px-6 sm:px-10 text-lg font-medium
  text-white hover:bg-purple-600 hover:shadow-lg hover:scale-105
   inline-flex gap-2.5 items-center justify-center 
  transition-all duration-500 cursor-pointer"
        onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
      >
        View All Projects
        <motion.span
          className="inline-block"
          animate={{ x: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
        >
          <FaArrowRightLong />
        </motion.span>
      </Link>
    </section>
  );
};

export default ProjectsSection;
