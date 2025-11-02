import { motion } from "framer-motion";

interface ProjectCardComponentProps {
  index: number;
  image: string;
  title: string;
  githubLink: string;
  demoLink: string;
}

const ProjectCardComponent = ({
  index,
  image,
  title,
  githubLink,
  demoLink,
}: ProjectCardComponentProps) => {
  return (
    <motion.div
      className="bg-white border-2 border-purple-200 rounded-xl shadow-md p-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <div className=" overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover mb-4 rounded hover:scale-105 transition duration-500"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="flex justify-center gap-3">
        <a
          href={githubLink}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:-translate-y-1 duration-500"
          target="_blank"
        >
          GitHub
        </a>
        <a
          href={demoLink}
          className="px-4 py-2 bg-purple-500 text-white rounded hover:-translate-y-1 duration-500"
          target="_blank"
        >
          Live
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCardComponent;
