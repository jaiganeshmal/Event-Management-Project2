import React from "react";
import { assets } from "../assets/global";

const images = [
  assets.image5,
  assets.image6,
  assets.image7,
  assets.image8,
  assets.image9,
  assets.image10,
  assets.image11,
  assets.image12,
];

const GallerySection = () => {
  return (
    <section className="py-20 px-6 ">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#71644D] text-center mb-12">
        Our Event Gallery
      </h2>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-md cursor-pointer group"
          >
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              loading="lazy"
              className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
