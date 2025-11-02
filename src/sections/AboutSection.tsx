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
        I’m Entessar, a passionate Front-End Developer dedicated to creating
        modern, responsive, and user-friendly websites. I began my journey with
        Focal X, where I successfully completed both the beginner and advanced
        front-end training programs. I have
        hands-on experience with HTML, CSS, JavaScript, React, and Next.js, and
        I’m always eager to explore new technologies and refine my skills.
        Currently, I consider myself at an intermediate level, and I’m excited
        to collaborate on creative projects and continue growing as a developer.
      </motion.p>
    </section>
  );
};

export default AboutSection;
