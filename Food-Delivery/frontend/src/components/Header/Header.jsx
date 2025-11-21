import React from "react";

const Header = () => {
  return (
    <div className="w-full h-[500px] bg-[url('/header_img.png')] bg-center bg-cover flex items-center justify-start px-6 md:px-16">
      <div className="max-w-xl bg-white/70 backdrop-blur-md rounded-xl p-6 md:p-10 shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
          Order your favourite food here
        </h2>

        <p className="text-gray-700 mt-4 leading-relaxed">
          Choose from a diverse menu featuring a detectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our mission
          is to satisfy your cravings and elevate your dining experience, one
          delicious meal at a time.
        </p>

        <button className="mt-6 px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
