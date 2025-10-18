import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { assets } from "../assets/global";

const HeroSection = () => {
  // ✅ form ke state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventType: "Corporate Events",
  });

  // ✅ input change handler
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // ✅ submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, eventType } = formData;

    if (!name || !phone) {
      alert("Please fill all fields before sending!");
      return;
    }

    // ✅ WhatsApp message setup
    const phoneNumber = "923009296413"; // 👈 apna WhatsApp number (with country code)
    const message = `Hello! I would like to book an event.%0A
Name: ${name}%0A
Phone: ${phone}%0A
Event Type: ${eventType}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    // ✅ Open WhatsApp chat
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="relative w-full h-[85vh] flex items-center justify-between overflow-hidden">
      {/* Background Video */}
      <video
        src={assets.hero}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay Dark Shade */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>

      {/* Form Section */}
      <div className="relative z-10 w-[80%] md:w-[320px] bg-white/80 rounded-2xl shadow-xl p-8 md:mr-6 md:ml-auto mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Book Your Event
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="Enter your phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Event Type */}
          <div className="flex flex-col">
            <label htmlFor="eventType" className="text-sm font-medium text-gray-700">
              Select Event Type
            </label>
            <select
              id="eventType"
              value={formData.eventType}
              onChange={handleChange}
              className="mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue="Corporate Events"
            >
              <option>Corporate Events</option>
              <option>Wedding Events</option>
              <option>Catering</option>
              <option>Birthday Party</option>
              <option>Concert</option>

            </select>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-[#C62828] hover:bg-[#FBC02D] cursor-pointer text-white font-semibold py-2 rounded-lg transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* ✅ Bottom Section (Unchanged) */}
      <div className="hidden md:block absolute bottom-1 left-1/2 -translate-x-1/2 text-white z-10 w-full px-4">
        <div className="flex flex-col lg:items-center md:items-start pl-10 md:justify-center gap-4">
          {/* Column 1 */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-4 sm:gap-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#C62828] text-white hover:bg-blue-500 transition shadow-md"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#C62828] text-white hover:text-blue-500 transition shadow-md"
              >
                <FaInstagram />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#C62828] text-white hover:text-blue-500 transition shadow-md"
              >
                <FaYoutube />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#C62828] text-white hover:text-blue-500 transition shadow-md"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <p className="uppercase tracking-widest font-semibold text-sm sm:text-lg">
              Corporate
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-4 sm:gap-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#C62828] text-white hover:text-blue-500 transition shadow-md"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#C62828] text-white hover:text-blue-500 transition shadow-md"
              >
                <FaInstagram />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#C62828] text-white hover:text-blue-500 transition shadow-md"
              >
                <FaYoutube />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#C62828] text-white hover:text-blue-500 transition shadow-md"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <p className="uppercase tracking-widest font-semibold text-sm sm:text-lg">
              Personalize
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
