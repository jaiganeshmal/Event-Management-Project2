import React from "react";
import { assets } from "../assets/global";
import { FaInstagram } from "react-icons/fa";

const socialLinks = [
  { img: assets.image28, url: "https://instagram.com" },
  { img: assets.image29, url: "https://instagram.com" },
  { img: assets.image30, url: "https://instagram.com" },
  { img: assets.image31, url: "https://instagram.com" },
  { img: assets.image32, url: "https://instagram.com" },
  { img: assets.image33, url: "https://instagram.com" },
  { img: assets.image34, url: "https://instagram.com" },
  { img: assets.image35, url: "https://instagram.com" },
];

const SocialGallery = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="overflow-hidden rounded-lg shadow-md group"
            >
              <img
                src={item.img}
                alt={`social-${index}`}
                loading="lazy"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
            </a>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <a
            href="https://instagram.com/lilis_events"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg text-white font-semibold transition-all duration-300"
            style={{ backgroundColor: "#71644D" }}
          >
            <FaInstagram size={20} />
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialGallery;
