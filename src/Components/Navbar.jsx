import React, { useState } from "react";
import { assets } from "../assets/global";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact Us", path: "/contact" },
  ];

  // fixed top-0 left-0 z-50
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
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
        <ul className="hidden md:flex space-x-8 text-[#212121] font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `transition cursor-pointer ${
                    isActive ? "font-semibold text-black" : "font-normal"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex space-x-4 text-[#C62828] text-lg">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
            <FaInstagram />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
            <FaYoutube />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
            <FaLinkedinIn />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden text-2xl text-[#71644D] cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
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

          {/* Socials on Mobile */}
          <div className="flex space-x-4 pt-4 text-[#71644D] text-lg">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
