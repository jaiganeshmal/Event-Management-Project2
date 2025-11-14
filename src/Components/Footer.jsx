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
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className="bg-[#f9f9f9] text-[#212121] py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Col 1 - Logo + text */}
        <div>
          <img src={assets.logo} alt="UC Events Logo" loading="lazy" className="h-24 mb-2" />
          <p className="text-sm leading-relaxed">
            Offering the best event management services in Pakistan.
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
          <p className="text-sm mb-2">Marina Plaza, Pakistan United, Arab Emirates</p>
          <p className="text-sm mb-2">T: +92 300 8214407 </p>
          <p className="text-sm">E: infoevent@gmail.com</p>
        </div>

        {/* Col 4 - Follow Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-xl mb-6">
            <a href="https://www.facebook.com/UnitedCatering/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FBC02D] text-[#C62828] transition">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/unitedcatering_ucpakistan/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FBC02D] text-[#C62828] transition">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/@ucpakistanofficial951" target="_blank" rel="noopener noreferrer" className="hover:text-[#FBC02D] text-[#C62828] transition">
              <FaYoutube />
            </a>
            <a href="https://www.linkedin.com/company/uc-pakistan" target="_blank" rel="noopener noreferrer" className="hover:text-[#FBC02D] text-[#C62828] transition">
              <FaLinkedinIn />
            </a>
            <a href="https://maps.app.goo.gl/wkMiZ67XfTMqh8a76" target="_blank" rel="noopener noreferrer" className="hover:text-[#FBC02D] text-[#C62828] transition">
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
