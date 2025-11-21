import React from "react";
import { assets } from "../../assets/frontend_assets/assets";

const AppDownload = () => {
  return (
    <div
      id="app-download"
      className="w-full mt-20 px-6 md:px-16 flex flex-col items-center text-center"
    >
      {/* Title */}
      <p className="text-2xl md:text-3xl font-semibold text-gray-800 leading-snug">
        For Better Experience Download <br /> 
        <span className="text-orange-500 font-bold">
          optimizedd food App
        </span>
      </p>

      {/* Store Buttons */}
      <div className="flex gap-6 mt-8">
        <img
          src={assets.play_store}
          alt="Play Store"
          className="w-36 cursor-pointer hover:scale-105 transition"
        />
        <img
          src={assets.app_store}
          alt="App Store"
          className="w-36 cursor-pointer hover:scale-105 transition"
        />
      </div>
    </div>
  );
};

export default AppDownload;
