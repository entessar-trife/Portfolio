import { FaJsSquare } from "react-icons/fa";
import { FaCss3Alt, FaGithub, FaHtml5, FaReact } from "react-icons/fa6";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

export const SkillsData = [
  {
    name: "HTML",
    icon: <FaHtml5 className="text-orange-500" />,
    desc: "Experience in writing clean and organized HTML code.",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="text-blue-500" />,
    desc: "Style and layout using modern CSS techniques.",
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare className="text-yellow-400" />,
    desc: "Interactive and dynamic front-end behavior.",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-400" />,
    desc: "Typed JavaScript for more robust code.",
  },
  {
    name: "React",
    icon: <FaReact className="text-cyan-400" />,
    desc: "Building user interface applications using React.js.",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black" />,
    desc: "Server-side rendering and static site generation.",
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss className="text-teal-400" />,
    desc: "Modern utility-first styling framework.",
  },
  {
    name: "Git",
    icon: <FaGithub className="text-black" />,
    desc: "Managing projects and collaboration using Git.",
  },
];
