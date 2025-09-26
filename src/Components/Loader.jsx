import React from "react";

const Loader = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-white z-[9999]">
      {/* Spinner */}
      <div className="w-16 h-16 border-4 border-[#71644D] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
