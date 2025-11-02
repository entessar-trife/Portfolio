import SocialComponent from "./SocialComponent";
import { motion } from "framer-motion";

export interface ContactComponentProps {
  index: number;
  icon: React.ReactNode;
  title: string;
  text?: string;
  border?: boolean;
  social?: social[];
}

interface social {
  icon: React.ReactNode;
  link: string;
}

const ContactComponent = ({
  index,
  icon,
  title,
  text,
  social,
  border,
}: ContactComponentProps) => {
  return (
    <motion.div
      className={`flex flex-col items-center justify-center min-lg:h-[95px] py-5
    ${border ? "max-lg:border-t lg:border-l border-purple-500" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <div className="flex items-center gap-2.5 text-purple-500 text-2xl">
        {icon}
        {title}
      </div>
      <span className="text-lg mt-3">{text}</span>
      <div className="flex gap-2.5 items-center">
        {social?.map((e, index) => (
          <SocialComponent key={index} icon={e.icon} link={e.link} />
        ))}
      </div>
    </motion.div>
  );
};

export default ContactComponent;
