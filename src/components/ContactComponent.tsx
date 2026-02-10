import type { contactData } from "../data/contactData";
import SocialIconComponent from "./SocialIconComponent";
import { motion } from "framer-motion";

const ContactComponent = ({
  index,
  icon,
  title,
  url,
  text,
  social,
  border,
}: contactData) => {
  return (
    <motion.div
      className={`flex flex-col items-center justify-center lg:h-[95px] py-5
    ${border ? "max-lg:border-t lg:border-l border-purple-500" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <div className="flex items-center gap-2.5 text-purple-500 text-2xl">
        {icon}
        {title}
      </div>
      <a href={url} className="text-lg mt-3">
        {text}
      </a>
      <div className="flex gap-2.5 items-center">
        {social?.map((e, index) => (
          <SocialIconComponent key={index} icon={e.icon} link={e.link} />
        ))}
      </div>
    </motion.div>
  );
};

export default ContactComponent;
