import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="bg-white text-black text-center py-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 100, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <p className="text-sm ">
        Designed & built by
        {""}{" "}
        <span className="text-purple-400 font-medium">Entessar Trefie</span> ©
        2025
      </p>
    </motion.footer>
  );
};

export default Footer;
