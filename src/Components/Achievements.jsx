import React from "react";
import { assets } from "../assets/global";

const stats = [
    { icon: assets.image52, title: "20+", text: "Years of Experience" },
    { icon: assets.image54, title: "5600+", text: "Projects Completed" },
    { icon: assets.image53, title: "100%", text: "Client Satisfaction" },
    { icon: assets.image54, title: "200+", text: "Events / Year" },
    { icon: assets.image55, title: "#1", text: "Ranking On Google" },
    { icon: assets.image56, title: "100+", text: "Venues Available" },
];

const Achievements = () => {
    return (
        <div
            className="relative w-[96%] mx-auto py-12 px-6 md:px-12 mt-10 rounded-2xl bg-cover bg-center text-white"
            style={{ backgroundImage: `url(${assets.image21})` }}
        >

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                {/* Left Content */}
                <div className=" space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">
                        Our Achievements
                    </h2>
                    <p className="text-base md:text-lg leading-relaxed max-w-md text-gray-100">
                        Passion, creativity, and flawless execution define us — transforming
                        ordinary gatherings into extraordinary experiences as UAE’s trusted
                        event planners.
                    </p>
                    <button className="relative overflow-hidden border border-[#C62828] bg-[#C62828] text-white cursor-pointer px-6 py-3 rounded-lg font-semibold shadow-lg transition-all duration-500 ">
                        Schedule a Call
                    </button>
                </div>

                {/* Right Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center bg-white/20 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 border border-[#71644D]/40"
                        >
                            {/* Icon */}
                            <img
                                src={stat.icon}
                                alt={stat.text}
                                loading="lazy"
                                className="w-14 h-14 object-contain mb-4"
                            />
                            {/* Title */}
                            <h3 className="text-2xl font-bold text-white relative inline-block mb-2">
                                {stat.title}
                                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-400"></span>
                            </h3>
                            {/* Subtitle */}
                            <p className="text-sm text-gray-100">{stat.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Achievements;
