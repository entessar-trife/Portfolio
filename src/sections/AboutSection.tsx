import { motion } from "framer-motion";
import MainTitle from "../components/MainTitle";

const AboutSection = () => {
  return (
    <section id="about" className="pt-24 text-center">
      <MainTitle title="About me" />
      <motion.p
        className="text-lg md:text-2xl w-[90%] text-center mx-auto md:leading-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Hi, I’m Entessar, a Front-End Developer passionate about building modern
        and responsive websites.I started my journey with Focal X, completing
        both the beginner and advanced front-end training with top scores (98%
        and 97%). I have hands-on experience with HTML, CSS, JavaScript, React,
        and Next.js, and I’m constantly eager to learn new technologies and
        improve my skills. My experience level is intermediate, and I’m excited
        to contribute to creative projects and continue growing as a developer.
      </motion.p>
    </section>
  );
};

export default AboutSection;
