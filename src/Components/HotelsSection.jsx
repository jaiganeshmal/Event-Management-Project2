import React from "react";
import { assets } from "../assets/global";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const hotels = [
  { id: 1, name: "One And Only Zabeel", img: assets.image5 },
  { id: 2, name: "One And Only Royal Mirage", img: assets.image6 },
  { id: 3, name: "St. Regis The Palm", img: assets.image7 },
  { id: 4, name: "The Royal Altantis", img: assets.image8 },
  { id: 5, name: "Raffels Palm", img: assets.image9 },
  { id: 6, name: "W Palm", img: assets.image10 },
  { id: 7, name: "Rits Carlton JBR", img: assets.image11 },
  { id: 8, name: "Four Season's, Jumerirah", img: assets.image12 },
  { id: 9, name: "Mandrian Jumerirah", img: assets.image13 },
  { id: 10, name: "Bulgari", img: assets.image14 },
  { id: 11, name: "Armani DownTown", img: assets.image15 },
  { id: 12, name: "Waldorf Astria Palm", img: assets.image16 },
  { id: 13, name: "Ritz Cartlon Rak", img: assets.image17 },
  { id: 14, name: "Anantara Rak", img: assets.image18 },
  { id: 15, name: "Waldorf Rak", img: assets.image19 },
];

const HotelsSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-10 bg-white relative">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#71644D] text-center mb-12">
        Hotels We Work With
      </h2>

      {/* Swiper Slider */}
      <div className="max-w-6xl mx-auto relative ">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          spaceBetween={24}
          breakpoints={{
            320: { slidesPerView: 1 }, // mobile
            640: { slidesPerView: 2 }, // small tablet
            1024: { slidesPerView: 3 }, // desktop
          }}
          className="relative"
        >
          {hotels.map((hotel) => (
            <SwiperSlide key={hotel.id}>
              <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition hover:scale-[1.02] hover:shadow-lg">
                {/* Hotel Image */}
                <div className="h-56 sm:h-64 md:h-72">
                  <img
                    src={hotel.img}
                    alt={hotel.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Content */}
                <div className="p-4 sm:p-6 text-center">
                  <h3 className="text-lg sm:text-xl font-semibold text-[#71644D] mb-3">
                    {hotel.name}
                  </h3>
                  <button className="px-4 sm:px-6 py-2 border border-[#71644D] text-[#71644D] rounded-lg font-semibold hover:bg-[#71644D] hover:text-white transition">
                    Book Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Arrows */}
        <button className="custom-prev absolute left-2 md:-left-10 top-1/2 transform -translate-y-1/2 bg-[#71644D] text-white p-3 rounded-full z-10 hover:bg-black transition">
          <FaArrowLeft size={18} />
        </button>
        <button className="custom-next absolute right-2 md:-right-10 top-1/2 transform -translate-y-1/2 bg-[#71644D] text-white p-3 rounded-full z-10 hover:bg-black transition">
          <FaArrowRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default HotelsSection;
