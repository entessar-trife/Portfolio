import { FaBarsStaggered } from "react-icons/fa6";
import { navLinksData } from "../../data/navLinksData";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const NavBarMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div>
      {isOpen ? (
        <IoMdClose
          className="text-3xl cursor-pointer"
          onClick={() => setIsOpen(false)}
        />
      ) : (
        <FaBarsStaggered
          className="text-3xl cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
      )}

      <ul
        className={`absolute right-0 left-0 top-[113px]
       text-2xl text-center px-10 transition-all duration-500
        bg-white text-purple-600 shadow-2xl font-semibold
       ${isOpen ? "" : "-translate-y-[1000px]"}`}
      >
        {navLinksData.map((link, index) => (
          <li
            key={index}
            className="border-b border-b-purple-600 last:border-0 py-10"
          >
            <a href={link.href}> {link.text} </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBarMenu;
