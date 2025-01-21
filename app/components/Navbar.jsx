"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  { title: "Home", path: "home" },
  { title: "About", path: "about" },
  { title: "Projects", path: "projects" },
  { title: "Contact", path: "contact" },
];

const Navbar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] opacity-90">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto  px-4 py-2">
        <Link
          href={"/"}
          className="text-xl md:text-2xl text-white font-semibold"
        >
          E.Vilensky
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navBarOpen ? (
            <button
              onClick={() => setNavBarOpen(true)}
              className="flex  items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavBarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink href={link.path} title={link.title} isActive={activeSection === link.path}
                  onSetActive={setActiveSection} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navBarOpen ? <MenuOverlay links={navLinks} onSetActive={setActiveSection} activeSection={activeSection} /> : null}
    </nav>
  );
};

export default Navbar;
