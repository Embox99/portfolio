import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links, onSetActive, activeSection }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink
            href={link.path}
            title={link.title}
            isActive={activeSection === link.path}
            onSetActive={onSetActive}
          />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
