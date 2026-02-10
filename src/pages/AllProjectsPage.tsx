import { Link } from "react-router-dom";
import LayoutWrapper from "../components/LayoutWrapper";
import MainTitle from "../components/MainTitle";
import ProjectCardComponent from "../components/ProjectCardComponent";
import { projectsData } from "../data/projectsData";
import { FaArrowLeftLong } from "react-icons/fa6";

const AllProjectsPage = () => {
  return (
    <LayoutWrapper>
      <div className="py-14 text-center">
        <MainTitle title="All Projects" />
        <div className="grid gap-9 md:grid-cols-2 xl:grid-cols-3 mb-10">
          {projectsData.map((project) => (
            <ProjectCardComponent key={project.id} {...project} />
          ))}
        </div>

        {/* BACK TO HOME PAGE BUTTON */}
        <Link
          to="/Portfolio/"
          className="bg-purple-400 rounded-xl py-2.5 px-6 sm:px-10 text-lg font-medium
  text-white hover:bg-purple-600 hover:shadow-lg hover:scale-105
   inline-flex gap-2.5 items-center justify-center 
  transition-all duration-500 cursor-pointer"
          onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
        >
          <FaArrowLeftLong />
          Back To Home
        </Link>
      </div>
    </LayoutWrapper>
  );
};

export default AllProjectsPage;
