import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import type { ContactComponentProps } from "../components/ContactComponent";
import { AiFillInstagram } from "react-icons/ai";

export const ContactData: ContactComponentProps[] = [
  {
    index: 0,
    icon: <MdEmail />,
    title: "Email:",
    text: "entessartrefie4@gmail.com",
  },
  {
    index: 1,
    icon: <FaPhoneAlt />,
    title: "Phone Number:",
    text: "0930949671",
    border: true,
  },
  {
    index: 2,
    icon: <IoShareSocialSharp />,
    title: "Social:",
    border: true,
    social: [
      {
        icon: <FaFacebookF />,
        link: "https://www.facebook.com/share/1A7YSwmbPM/",
      },
      {
        icon: <FaLinkedinIn />,
        link: "https://www.linkedin.com/in/entessar-trife-a69793249/",
      },
      {
        icon: <AiFillInstagram />,
        link: "https://www.instagram.com/entessar_tr?igsh=M2VrdWw2b3pzZ2p5",
      },
      {
        icon: <FaGithub />,
        link: "https://github.com/entessar-trife",
      },
    ],
  },
];
