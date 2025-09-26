import React from "react";

const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-white text-center">
      {/* Headings */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#71644D] mb-4">
        About UC Events
      </h2>
      <h3 className="text-xl md:text-2xl text-[#71644D] mb-6">
        Event Management Company in Dubai
      </h3>

      {/* Paragraph */}
      <p className="max-w-4xl mx-auto text-gray-700 leading-relaxed mb-8">
        UC Events epitomizes the art of crafting unforgettable moments with
        sophistication and precision. As a renowned event management company in
        Dubai, our unwavering commitment to excellence drives everything we do.
        We specialize in curating bespoke experiences that exceed expectations,
        particularly in the realm of dreamy weddings. Beyond weddings, we bring
        joy and elegance to corporate gatherings and all cherished celebrations,
        infusing each occasion with our signature attention to detail and
        heartfelt dedication.
      </p>

      {/* Button */}
      <button className="px-8 py-3 cursor-pointer border border-[#71644D] text-[#71644D] rounded-lg font-semibold hover:bg-[#71644D] hover:text-white transition">
        About Us
      </button>
    </section>
  );
};

export default AboutSection;
