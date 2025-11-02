import { useEffect, useState } from "react";
import { NavLinksData } from "../../Data/NavLinksData";
import NavLinkComponent from "./NavLinkComponent";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
    <nav
      className={`fixed w-full z-50 px-5 sm:px-10 md:px-20 lg:px-36
     flex justify-between items-center gap-2 text-xl py-5  transition-colors duration-500
     ${
       isScroll
         ? "bg-white text-purple-400 "
         : "bg-white/10 backdrop-blur-md text-white"
     }`}
    >
      <h1 className="font-bold text-2xl min-[992px]:text-3xl">
        Entessar Trife
      </h1>
      <ul className="hidden min-[992px]:flex justify-between items-center gap-12">
        {NavLinksData.map((link, index) => (
          <NavLinkComponent key={index} href={link.href} text={link.text} />
        ))}
      </ul>

      {/* responsive navbar */}
      <ul
        className={`flex flex-col min-[992px]:hidden justify-between items-center gap-12
          absolute right-0 w-full z-50 p-20 bg-white text-purple-400
        transition-transform duration-800 ease-in-out
        ${isOpen ? "translate-y-[245px]" : "-translate-y-full"}`}
      >
        {NavLinksData.map((link, index) => (
          <NavLinkComponent key={index} href={link.href} text={link.text} />
        ))}
      </ul>

      {isOpen ? (
        <IoMdClose
          className="text-3xl cursor-pointer"
          onClick={() => setIsOpen(false)}
        />
      ) : (
        <FaBarsStaggered
          className="text-3xl min-[992px]:hidden cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
      )}
    </nav>
  );
};

export default NavBar;
