import { motion } from "framer-motion";

interface SkillComponentProps {
  index: number;
  icon: React.ReactNode;
  name: string;
  desc: string;
}

const SkillComponent = ({ index, icon, name, desc }: SkillComponentProps) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center bg-white border-2 border-purple-200 shadow-md rounded-3xl p-6 hover:shadow-2xl 
            hover:scale-105 transition-transform duration-300 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <span className="text-6xl mb-4">{icon}</span>
      <h3 className="text-2xl font-semibold mb-2">{name}</h3>
      <p className=" text-black">{desc}</p>
    </motion.div>
  );
};

export default SkillComponent;
