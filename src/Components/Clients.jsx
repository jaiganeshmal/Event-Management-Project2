import React from "react";
import { assets } from "../assets/global";

const clientLogos = [
  assets.image22,
  assets.image23,
  assets.image24,
  assets.image25,
  assets.image26,
  assets.image27,
];

const Clients = () => {
  return (
    <section className="w-full py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-10" style={{ color: "#212121" }}>
          Our Clients
        </h2>

        {/* Infinite Scroll Wrapper */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll gap-12">
            {/* Duplicate logos twice for seamless loop */}
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <div key={index} className="flex items-center justify-center min-w-[160px] h-28">
                <img
                  src={logo}
                  alt={`Client ${index + 1}`}
                  loading="lazy"
                  className="max-h-full max-w-[150px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
