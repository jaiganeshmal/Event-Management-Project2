import React from "react";
import { assets } from "../assets/global";
import { FaInstagram } from "react-icons/fa";

const socialLinks = [
  { img: assets.image28, url: "https://www.instagram.com/p/DQ60D-XiOme/?igsh=eXBrNXJ0NWZhZXU4" },
  { img: assets.image29, url: "https://www.instagram.com/reel/DNP9c70oVLr/?igsh=MWs3MTFseHdlNzl5ZA==" },
  { img: assets.image30, url: "https://www.instagram.com/unitedcatering_ucpakistan/" },
  { img: assets.image31, url: "https://www.instagram.com/p/DRABZ9riCbg/?igsh=aDI0NnZlYzRhejBo" },
  { img: assets.image32, url: "https://www.instagram.com/reel/DOLMjhnCIRw/?igsh=amtrZzZyZTZqaDBn" },
  { img: assets.image33, url: "https://www.instagram.com/p/DQ6zpn8iGTQ/?igsh=emczcWNsZXZsMnBr" },
  { img: assets.image34, url: "https://www.instagram.com/reel/DMcnuh1I1jG/?igsh=MWJ5dXVkZnUwaDZubg%3D%3D" },
  { img: assets.image35, url: "https://www.instagram.com/reel/DMapxaUo1_M/?igsh=dnE5aHM2NXNiYXVt" },
];

const SocialGallery = () => {
  return (
    <section className="w-full pt-4 bg-white">
      <div className="container mx-auto px-6">
        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
        {/* <div className="text-center mt-6">
          <a
            href="https://instagram.com/lilis_events"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg text-white font-semibold transition-all duration-300"
            style={{ backgroundColor: "#C62828" }}
          >
            <FaInstagram size={20} />
            Follow on Instagram
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default SocialGallery;
