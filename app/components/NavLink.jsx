import { Link as ScrollLink } from "react-scroll";

const NavLink = ({ href, title, isActive, onSetActive }) => {
  return (
    <ScrollLink
      to={href}
      spy={true}
      smooth={true}
      duration={500}
      onSetActive={() => onSetActive(href)}
      className={`block cursor-pointer py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white ${
        isActive ? "text-primary-500 font-bold" : "text-[#ADB7BE]"
      }`}
    >
      {title}
    </ScrollLink>
  );
};

export default NavLink;
