import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Why should I choose UC Event Planner for my event?",
      answer:
        "With 7+ years of experience and 1,600+ successful projects, Uc ensures every event is seamless, creative, and memorable. We focus on making your special day stress-free and truly remarkable.",
    },
    {
      question: "What types of events do you plan?",
      answer:
        "We handle all kinds of events, including corporate functions, weddings, private parties, and catering services. Whether small or large, our team delivers with precision and creativity.",
    },
    {
      question: "Can UC customize event themes?",
      answer:
        "Yes, we design personalized themes, décor, and activities tailored to your style and vision, making each event unique and unforgettable.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-[90%] mx-auto py-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      {/* Left Side */}
      <div className="flex flex-col space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-[#212121] leading-snug">
          Looking for the Best Event Organizer in Karachi, Pakistan
        </h2>
        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
          Looking for reliable event organizers in Karachi? Your struggle ends
          here! Trust UC to transform your vision into a flawless reality.
          As a leading choice in Pakistan. We strictly make sure every details
          exceeds your expectations.
        </p>
        <button className="w-fit bg-[#C62828] hover:bg-[#FBC02D] text-white px-4 py-2 rounded-lg shadow-md  transition-all duration-300">
          Get Your Quote
        </button>
      </div>

      {/* Right Side - FAQ */}
      <div className="space-y-6">
        <span className="px-4 py-1 bg-[#F4F4F4] text-[#C62828] text-sm font-semibold rounded-md w-fit">
          FAQS
        </span>
        <h3 className="text-xl md:text-2xl font-bold text-[#212121] mt-2">
          <span className="text-[#C62828]">Most</span> Common Questions
        </h3>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full flex justify-between items-center px-5 py-4 bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-sm md:text-base font-medium text-gray-800 text-left">
                  {faq.question}
                </span>
                <FaChevronDown
                  className={`text-gray-600 transform transition-transform duration-300 ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`px-5 text-gray-600 text-sm md:text-base leading-relaxed transition-all duration-500 ease-in-out ${
                  openIndex === idx ? "max-h-40 py-3" : "max-h-0 overflow-hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
