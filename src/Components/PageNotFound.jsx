import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 px-4 text-center">
      
      {/* Big 404 Text */}
      <h1 className="text-9xl font-extrabold text-[#71644D] drop-shadow-lg">404</h1>
      
      {/* Message */}
      <h2 className="mt-6 text-3xl md:text-4xl font-semibold text-gray-800">
        Oops! Page Not Found
      </h2>
      <p className="mt-3 text-gray-600 max-w-md">
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      {/* Back to Home Button */}
      <Link
        to="/"
        className="mt-8 inline-flex items-center px-6 py-3 bg-[#71644D] text-white rounded-lg shadow-md hover:bg-[#5a503e] transition-all duration-300"
      >
        <FaHome className="mr-2" /> Back to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
