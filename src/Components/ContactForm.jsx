import React from "react";

const ContactForm = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2
          className="text-4xl font-bold mb-12"
          style={{ color: "#71644D" }}
        >
          Get in Touch to Plan Your Next Event!
        </h2>

        {/* Form */}
        <form className="max-w-4xl mx-auto space-y-8">
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
              style={{
                borderColor: "#71644D",
                color: "#71644D",
              }}
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
              style={{
                borderColor: "#71644D",
                color: "#71644D",
              }}
            />
            <input
              type="text"
              placeholder="Location"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
              style={{
                borderColor: "#71644D",
                color: "#71644D",
              }}
            />
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="number"
              placeholder="Number of Guests"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
              style={{
                borderColor: "#71644D",
                color: "#71644D",
              }}
            />
            <input
              type="date"
              placeholder="Date"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
              style={{
                borderColor: "#71644D",
                color: "#71644D",
              }}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="px-8 py-3 rounded-lg text-white font-semibold transition-all duration-300"
            style={{ backgroundColor: "#71644D" }}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
