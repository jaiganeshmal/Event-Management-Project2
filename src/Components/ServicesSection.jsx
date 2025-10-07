import React from "react";
import { assets } from "../assets/global";

const services = [
  {
    id: 1,
    title: "Private Events",
    img: assets.image1,
    desc: "At UC Events, we specialize in creating private events and celebrations tailored to your unique desires. Whether it's a private dinner, an anniversary party, or a chic soirée, we bring your vision to life with meticulous attention to detail.",
  },
  {
    id: 2,
    title: "Wedding Events",
    img: assets.image2,
    desc: "Let us curate your dream wedding, where breathtaking venues and personalized vows come together to reflect your unique love story. Our team adds elegance and magic to every moment, ensuring your special day is filled with joy and beauty.",
  },
  {
    id: 3,
    title: "Corporate Events",
    img: assets.image3,
    desc: "Take your corporate events to the highest levels with UC Events. From impactful conferences to luxurious gala evenings, we merge creativity with professionalism to deliver an unforgettable experience.",
  },
  {
    id: 4,
    title: "Birthday Parties",
    img: assets.image4,
    desc: "Make every birthday a celebration to remember with UC Events. From themed extravaganzas to intimate gatherings, our creative touch brings joy and excitement to every moment tailored to your preferences.",
  },
];

const ServicesSection = () => {
  return (
    <section className="p-8 bg-gray-50">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#212121] text-center mb-8">
        Our Services
      </h2>

      {/* Grid - 2 Cards per Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-4 max-w-6xl mx-auto">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden"
          >
            {/* Left - Image */}
            <div className="md:w-1/2 h-60 md:h-96 ">
              <img
                src={service.img}
                alt={service.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right - Content */}
            <div className="md:w-1/2 p-4 flex flex-col justify-start">
              <h3 className="text-2xl font-semibold text-[#212121] mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.desc}</p>
              <button className="self-start cursor-pointer px-3 py-2  text-sm bg-[#C62828] text-white rounded-lg font-semibold hover:bg-[#FBC02D] hover:text-white transition">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      {/* <div className="mt-8 text-center">
        <button className="px-8 py-3 cursor-pointer border border-[#C62828] text-[#212121] rounded-lg font-semibold hover:bg-[#FBC02D] hover:text-[#212121] transition">
          View All Services
        </button>
      </div> */}
    </section>
  );
};

export default ServicesSection;
