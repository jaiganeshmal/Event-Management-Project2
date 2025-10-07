import React, { useState } from "react";
import { assets } from "../assets/global";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact" },
  ];

  // fixed top-0 left-0 z-50
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <div>
          <img
            src={assets.logo}
            alt="Lili's Events Logo"
            loading="lazy"
            className="h-20 w-auto"
          />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-[#212121] font-medium pr-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `transition cursor-pointer  ${
                    isActive ? "font-semibold text-black" : "font-normal"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

       

        {/* Mobile Hamburger */}
        <div className="md:hidden text-4xl text-[#71644D] cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-6 shadow-lg">
          <ul className="flex flex-col space-y-3 text-[#71644D] font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  onClick={() => setMenuOpen(false)} // Close on click
                  className={({ isActive }) =>
                    `block transition cursor-pointer ${
                      isActive ? "font-semibold text-black" : "font-normal"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

         
        </div>
      )}
    </nav>
  );
};

export default Navbar;
