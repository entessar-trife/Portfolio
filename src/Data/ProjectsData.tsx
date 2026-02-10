import { v4 as uuidv4 } from "uuid";
import toursCover from "../assets/images/tours.png";
import blogCover from "../assets/images/blog.png";
import floraCover from "../assets/images/flora.png";
import LittleLearnersCover from "../assets/images/little_learners.png";
import booksawCover from "../assets/images/booksaw.png";
import medicioCover from "../assets/images/medicio.png";
import ExtechCover from "../assets/images/extech.png";
import bankCover from "../assets/images/bank.png";
import EstateinCover from "../assets/images/estatein.png";
import procoursesCover from "../assets/images/procourses.png";
import nutritionistCover from "../assets/images/nutritionist.png";

export interface projectsData {
  id: string;
  index: number;
  image: string;
  title: string;
  githubLink: string;
  demoLink: string;
}

export const projectsData: projectsData[] = [
  {
    id: uuidv4(),
    index: 1,
    title: "Nutritionist",
    image: nutritionistCover,
    githubLink: "https://github.com/entessar-trife/nutritionist",
    demoLink: "https://nutritionist-vl63.vercel.app/",
  },
  {
    id: uuidv4(),
    index: 2,
    title: "ProCourses",
    image: procoursesCover,
    githubLink: "https://github.com/entessar-trife/proCourses",
    demoLink: "https://pro-courses-bice.vercel.app/",
  },
  {
    id: uuidv4(),
    index: 3,
    title: "Estatein",
    image: EstateinCover,
    githubLink: "https://github.com/entessar-trife/Estatein",
    demoLink: "https://entessar-trife.github.io/Estatein/",
  },
  {
    id: uuidv4(),
    index: 4,
    title: "Your Bank",
    image: bankCover,
    githubLink: "https://github.com/entessar-trife/YourBank",
    demoLink: "https://entessar-trife.github.io/YourBank/",
  },
  {
    id: uuidv4(),
    index: 5,
    title: "Tours To Tuscany",
    image: toursCover,
    githubLink: "https://github.com/entessar-trife/Tours-To-Tuscany",
    demoLink: "https://task-7-coral.vercel.app/",
  },
  {
    id: uuidv4(),
    index: 6,
    title: "The Blog",
    image: blogCover,
    githubLink: "https://github.com/entessar-trife/The-Blog",
    demoLink: "https://entessar-trife.github.io/The-Blog/",
  },
  {
    id: uuidv4(),
    index: 7,
    title: "Flora",
    image: floraCover,
    githubLink: "https://github.com/entessar-trife/Flora",
    demoLink: "https://entessar-trife.github.io/Flora/",
  },
  {
    id: uuidv4(),
    index: 8,
    title: "Little Learners",
    image: LittleLearnersCover,
    githubLink: "https://github.com/entessar-trife/Little-Learners-2",
    demoLink: "https://entessar-trife.github.io/Little-Learners/",
  },
  {
    id: uuidv4(),
    index: 9,
    title: "BOOKSAW",
    image: booksawCover,
    githubLink: "https://github.com/entessar-trife/BOOKSAW",
    demoLink: "https://entessar-trife.github.io/BOOKSAW/",
  },
  {
    id: uuidv4(),
    index: 10,
    title: "MEDICIO",
    image: medicioCover,
    githubLink: "https://github.com/entessar-trife/MEDICIO",
    demoLink: "https://entessar-trife.github.io/MEDICIO/",
  },
  {
    id: uuidv4(),
    index: 11,
    title: "Extech",
    image: ExtechCover,
    githubLink: "https://github.com/entessar-trife/Extech",
    demoLink: "https://entessar-trife.github.io/Extech/",
  },
];
