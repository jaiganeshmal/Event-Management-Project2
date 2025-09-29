import React from "react";
import { assets } from "../assets/global";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className="bg-[#f9f9f9] text-[#71644D] py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Col 1 - Logo + text */}
        <div>
          <img src={assets.logo} alt="Lili's Events Logo" loading="lazy" className="h-14 mb-4" />
          <p className="text-sm leading-relaxed">
            Offering the best event management services in UAE.
          </p>
        </div>

        {/* Col 2 - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className="hover:text-black transition-colors"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 - Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-sm mb-2">Marina Plaza, Dubai United, Arab Emirates</p>
          <p className="text-sm mb-2">T: +971 502955667</p>
          <p className="text-sm">E: infoevent@gmail.com</p>
        </div>

        {/* Col 4 - Follow Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-xl mb-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">
              <FaInstagram />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">
              <FaYoutube />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">
              <FaLinkedinIn />
            </a>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">
              <FaMapMarkerAlt />
            </a>
          </div>
          <p className="text-xs">© Copyright UC Events 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
