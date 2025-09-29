import React from "react";
import { assets } from "../assets/global"; // yahan se hero.mp4 aayegi
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={assets.hero}   // 🔹 video ka path global.js se
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/40"></div> */}

      {/* Content */}
      {/* <div className="relative z-10 px-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to <span className="text-yellow-400">UC Events</span>
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Crafting unforgettable experiences with elegance and precision.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/services"
            className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            Explore Services
          </Link>
          <Link
            to="/contact"
            className="border border-yellow-400 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition"
          >
            Contact Us
          </Link>
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;
