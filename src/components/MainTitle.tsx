import { motion } from "framer-motion";

interface MainTitleProps {
  title: string;
}

const MainTitle = ({ title }: MainTitleProps) => {
  return (
    <div className="relative inline-block mb-10 md:mb-16">
      <motion.h2
        className="text-3xl sm:text-5xl font-bold text-gray-900 px-4 relative z-10"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {title}
      </motion.h2>

      <motion.div
        className="absolute left-0 right-0 bottom-1 h-2 bg-purple-300 rounded-full"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        style={{ originX: 0 }}
      />
    </div>
  );
};

export default MainTitle;
