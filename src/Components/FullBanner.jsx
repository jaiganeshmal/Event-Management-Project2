import React from "react";
import { assets } from "../assets/global";

const FullBanner = () => {
  return (
    <section
      className="relative w-full h-[80vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${assets.image20})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-wide">
          Your Dream Event Awaits
        </h2>
        <p className="max-w-2xl text-lg md:text-xl text-gray-200 mb-6">
          Creating unforgettable moments with elegance, style, and perfection.
        </p>
        <button className="px-8 py-3 bg-[#C62828] text-white rounded-full text-lg font-semibold hover:bg-[#FBC02D] transition">
          Explore More
        </button>
      </div>
    </section>
  );
};

export default FullBanner;
