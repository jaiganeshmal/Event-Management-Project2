import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { assets } from "../assets/global";
import toast from "react-hot-toast"; // ✅ Import toast

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventType: "Corporate Events",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, eventType } = formData;

    // ✅ Validation with toast instead of alert
    if (!name || !phone) {
      toast.error("⚠️ Please fill all fields before sending!");
      return;
    }

    const phoneNumber = "923222002791"; // 👈 apna WhatsApp number
    const message = `Hello! I would like to book an event.%0A
Name: ${name}%0A
Phone: ${phone}%0A
Event Type: ${eventType}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    // ✅ Open WhatsApp
    window.open(whatsappURL, "_blank");

    // ✅ Success toast
    toast.success("✅ Message sent successfully!");

    // ✅ Reset form after sending
    setFormData({
      name: "",
      phone: "",
      eventType: "Corporate Events",
    });
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
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/10 z-0"></div>

      {/* Form Section */}
      <div className="relative z-20 w-[80%] md:w-[320px] bg-white/80 rounded-2xl shadow-xl p-8 md:mr-6 md:ml-auto mx-auto">
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
              className="mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
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
            className="bg-[#C62828] hover:bg-[#FBC02D] text-white font-semibold py-2 rounded-lg transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Bottom Section (unchanged) */}
      <div className="hidden md:block absolute bottom-1 left-1/2 -translate-x-1/2 text-white z-10 w-full px-4">
        <div className="flex flex-col lg:items-center md:items-start pl-10 md:justify-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-4 sm:gap-6">
              {[FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#C62828] text-white hover:bg-[#FBC02D] transition shadow-md"
                >
                  <Icon />
                </a>
              ))}
            </div>
            <p className="uppercase tracking-widest font-semibold text-sm sm:text-lg">
              Corporate
            </p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-4 sm:gap-6">
              {[FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#C62828] text-white hover:bg-[#FBC02D] transition shadow-md"
                >
                  <Icon />
                </a>
              ))}
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
