import { projects } from "../Data/ProjectsData";
import MainTitle from "../components/MainTitle";
import ProjectCardComponent from "../components/ProjectCardComponent";

const ProjectsSection = () => {
  return (
    <section id="projects" className="pt-24 text-center">
      <MainTitle title="My Projects" />
      <div className="grid gap-9 md:grid-cols-2 lg:grid-cols-3 cursor-pointer ">
        {projects.map((project, index) => (
          <ProjectCardComponent
            index={index}
            image={project.image}
            title={project.title}
            demoLink={project.demoLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
