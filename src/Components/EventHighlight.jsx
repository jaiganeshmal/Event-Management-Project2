import React from "react";
import { FaRegCalendarCheck } from "react-icons/fa"; // calendar icon for "Book Now"

const EventHighlight = () => {
  return (
    <section className="w-full p-10 bg-white text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold text-[#212121] mb-4">
        Elevate Your Events with UC!
      </h2>

      {/* Paragraph */}
      <p className="max-w-3xl mx-auto text-gray-600 text-lg md:text-xl leading-relaxed mb-6">
        Experience inspiration and excitement with UC Events, the top event
        management company in Pakistan. We specialize in bringing sophistication
        and expertise to every occasion, ensuring a breathtaking and
        unforgettable experience. Let’s turn your ordinary event into something
        truly extraordinary!
      </p>

      {/* Button */}
      <button className="flex items-center gap-2 mx-auto px-8 py-3 bg-[#C62828] text-white rounded-full text-lg font-semibold hover:bg-[#FBC02D] transition">
        <FaRegCalendarCheck size={20} />
        Book Now
      </button>
    </section>
  );
};

export default EventHighlight;
