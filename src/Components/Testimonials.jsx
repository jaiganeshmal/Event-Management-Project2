import React from "react";
import { assets } from "../assets/global";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
    {
        text: "UC Events turned our dream wedding into a fairytale reality! From the breathtaking venue to the smallest details, they infused elegance and magic into every moment. Our special day was truly unforgettable, thanks to their exceptional team!",
        name: "Sarah and John",
        role: "Wedding Celebration",
    },
    {
        text: "Working with UC Events was a game-changer for our corporate gathering. Their innovative approach and meticulous planning ensured a seamless and sophisticated event that left a lasting impression on our clients and colleagues. I highly recommend their services!",
        name: "Mark",
        role: "Corporate Event Organizer",
    },
    {
        text: "UC Events made my birthday celebration truly special! They personalized every detail, turning my vision into a joyful reality. From the themed décor to the intimate atmosphere, they crafted moments that I'll cherish forever. Thank you for making my day unforgettable!",
        name: "Emily",
        role: "Birthday Celebration Client",
    },
    {
        text: "UC Events orchestrated a magical engagement party that exceeded all expectations! From the warm setting to the grand gestures, they captured the essence of our love story perfectly. It was a moment we'll treasure for a lifetime, thanks to their expertise and dedication.",
        name: "David",
        role: "Engagement Party Host",
    },
    {
        text: "Liliis Events helped us rekindle our love story with a premium anniversary celebration. They added a touch of elegance and sentiment to every detail, ensuring our special day was a reflection of enduring love and cherished memories. We couldn't be happier with the experience they provided!",
        name: "Aisha and Ahmed",
        role: "Anniversary Celebration",
    },
    {
        text: "The decorations by UC Events were absolutely breathtaking! From the elegant centerpieces to the intricate table settings, every detail was meticulously crafted. It transformed the venue into a fairytale setting, and we couldn't have been happier!",
        name: "Jessica Lee",
        role: "Wedding Celebration",
    },
    {
        text: "UC Events did an incredible job with the decorations for my birthday party! The theme was brought to life with vibrant colors, beautiful balloons, and creative signage. It truly set the perfect atmosphere for a memorable celebration.",
        name: "Michael Nguyen",
        role: "Birthday Celebration Client",
    },
    {
        text: "UC Events nailed it with the decorations for my bridal shower! The floral arrangements were stunning, and the overall aesthetic was exactly what I had envisioned. It added a touch of elegance and charm to the event that was simply magical.",
        name: "Anna Patel",
        role: "Bridal Shower",
    },
    {
        text: "The decorations by UC Events brought the holiday spirit to life at our party! From the festive lighting to the cozy winter-themed decor, it created a warm and inviting atmosphere that had everyone in high spirits. Truly top-notch work!",
        name: "David Thompson",
        role: "Holiday Celebration",
    },
];

const Testimonials = () => {
    return (
        <section
            className="w-full h-[80vh] bg-cover bg-center flex items-center justify-center px-6"
            style={{ backgroundImage: `url(${assets.image21})` }}
        >
            <div className="w-full max-w-5xl">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    pagination={{ clickable: true, el: ".custom-pagination" }} // 👈 custom class
                    loop={true}
                    spaceBetween={30}
                    slidesPerView={1}
                >
                    {testimonials.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col items-center">
                                <p className="text-lg text-center md:text-xl italic leading-relaxed mb-6 text-white">
                                    “{item.text}”
                                </p>
                                <h3 className="text-2xl font-bold mb-2 text-white">{item.name}</h3>
                                <p className="text-sm uppercase tracking-wide text-white">
                                    {item.role}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* 👇 custom pagination container */}
                <div className="custom-pagination flex justify-center mt-6"></div>

            </div>
        </section>
    );
};

export default Testimonials;
