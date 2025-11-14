import React from "react";
import { assets } from "../assets/global";

const clientLogos = [
  assets.image22,
  assets.image23,
  assets.image24,
  assets.image25,
  assets.image26,
  assets.image27,
  assets.image57,
  assets.image58,
  assets.image59,
  assets.image60,
  assets.image61,
  assets.image62,
  assets.image63,
  assets.image64,
  assets.image65,
  assets.image66,
  assets.image67,
];

const Clients = () => {
  return (
    <section className="w-full py-8 bg-white overflow-hidden">
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
                  className="max-h-full max-w-[150px] object-cover transition-all duration-300"
                  // grayscale hover:grayscale-0 
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
