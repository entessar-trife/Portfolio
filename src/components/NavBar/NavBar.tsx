import { useEffect, useState } from "react";
import { navLinksData } from "../../data/navLinksData";
import NavBarMenu from "./NavBarMenu";

const NavBar = () => {
  const [isScroll, setIsScroll] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
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
      className={`fixed w-full z-50 flex justify-between items-center
     px-5 sm:px-10 2xl:px-20 py-10 transition-colors duration-500 
     ${
       isScroll
         ? "bg-white text-purple-400 shadow-xl"
         : "bg-white/10 backdrop-blur-md text-white"
     }`}
    >
      <h1 className="font-bold text-2xl min-[992px]:text-3xl">
        Entessar Trife
      </h1>
      <ul className="hidden lg:flex justify-between items-center gap-5 text-lg lg:text-xl">
        {navLinksData.map((link, index) => (
          <li
            key={index}
            className={`transition-colors duration-500 rounded-lg px-5 py-3.5 
              hover:bg-purple-400
          ${isScroll ? "hover:text-white" : ""}`}
          >
            <a href={link.href}> {link.text} </a>
          </li>
        ))}
      </ul>
      {/* RESPONSIVE NAV */}
      <div className="block lg:hidden">
        <NavBarMenu />
      </div>
    </nav>
  );
};

export default NavBar;
