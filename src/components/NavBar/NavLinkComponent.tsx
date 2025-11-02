import { useEffect, useState } from "react";

interface NavLinkComponentProps {
  text: string;
  href: string;
}

const NavLinkComponent = ({ text, href }: NavLinkComponentProps) => {
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <li>
      <a
        href={href}
        className={`p-2 duration-500 rounded-lg ${
          isScroll
            ? "hover:bg-purple-300 hover:text-white"
            : " hover:bg-white hover:text-purple-400"
        }`}
      >
        {text}
      </a>
    </li>
  );
};

export default NavLinkComponent;
