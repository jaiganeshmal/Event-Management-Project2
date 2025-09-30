import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
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
    <section className="w-full py-8 bg-white">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-6" style={{ color: "#212121" }}>
          Our Clients
        </h2>

        {/* Swiper Wrapper with extra padding for dots */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            spaceBetween={30}
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            className="pb-8" // 👈 padding bottom for dots
          >
            {clientLogos.map((logo, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center h-28 mb-10">
                  <img
                    src={logo}
                    alt={`Client ${index + 1}`}
                    loading="lazy"
                    className="max-h-full max-w-[150px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Clients;
