import React from "react";
import { FaRegCalendarCheck } from "react-icons/fa"; // calendar icon for "Book Now"

const EventHighlight = () => {
  return (
    <section className="w-full py-20 px-6 bg-white text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold text-[#71644D] mb-6">
        Elevate Your Events with Lilis!
      </h2>

      {/* Paragraph */}
      <p className="max-w-3xl mx-auto text-[#71644D] text-lg md:text-xl leading-relaxed mb-10">
        Experience inspiration and excitement with Lilis Events, the top event
        management company in Dubai. We specialize in bringing sophistication
        and expertise to every occasion, ensuring a breathtaking and
        unforgettable experience. Let’s turn your ordinary event into something
        truly extraordinary!
      </p>

      {/* Button */}
      <button className="flex items-center gap-2 mx-auto px-8 py-3 bg-[#71644D] text-white rounded-full text-lg font-semibold hover:bg-black transition">
        <FaRegCalendarCheck size={20} />
        Book Now
      </button>
    </section>
  );
};

export default EventHighlight;
