import { FaDownload } from "react-icons/fa6";
import TypingLoop from "./TypingLoop";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white overflow-hidden px-5 text-center">
      {/* Background shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-400 rounded-full opacity-30 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full opacity-20 translate-x-1/4 translate-y-1/4 animate-pulse"></div>

      <TypingLoop phrases={["Hi again! My name is Entessar"]} />

      <motion.p
        className="mt-4 text-lg sm:text-xl md:text-2xl max-w-xl font-pacifico"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        I'am a Frontend Developer, I love turning ideas into interactive web
        experiences.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row items-center gap-4 mt-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-lg text-white">
          CV for full details:
        </span>

        <a
          href="/Entessar CV.pdf"
          download="Entessar CV"
          className="flex items-center gap-2.5 bg-purple-500 border border-white rounded-xl py-2.5 px-6 sm:px-10
              hover:scale-105  hover:text-white hover:shadow-lg transition-all duration-500"
          aria-label="Download Entessar CV"
        >
          <FaDownload className="text-lg transition-transform duration-300" />
          Download CV
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;
