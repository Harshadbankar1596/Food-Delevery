import React from "react";
import { assets } from "../../assets/frontend_assets/assets";
import Name from "../Name";
const Footer = () => {
  return (
    <div
      id="footer"
      className="w-full bg-gray-100 mt-16 pt-12 pb-6 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Left Section */}
        <div className="flex flex-col gap-5">
          <Name />
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
            nostrum iure suscipit maiores non harum incidunt unde magnam
            molestias ipsum qui vel aut natus aspernatur ipsa dignissimos,
            numquam assumenda deserunt.
          </p>

          <div className="flex gap-4 mt-2">
            <img
              src={assets.facebook_icon}
              alt="facebook"
              className="w-7 cursor-pointer hover:opacity-75"
            />
            <img
              src={assets.twitter_icon}
              alt="twitter"
              className="w-7 cursor-pointer hover:opacity-75"
            />
            <img
              src={assets.linkedin_icon}
              alt="linkedin"
              className="w-7 cursor-pointer hover:opacity-75"
            />
          </div>
        </div>

        {/* Middle Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Company</h2>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="cursor-pointer hover:text-orange-500">Home</li>
            <li className="cursor-pointer hover:text-orange-500">About us</li>
            <li className="cursor-pointer hover:text-orange-500">Delivery</li>
            <li className="cursor-pointer hover:text-orange-500">
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Get in touch</h2>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="cursor-pointer">+92-308-4900522</li>
            <li className="cursor-pointer hover:text-orange-500">
              contact@optimizeddfood.com
            </li>
          </ul>
        </div>

      </div>

      <hr className="my-8 border-gray-300" />

      <p className="text-center text-gray-600">
        Copyright 2024 @ optimizeddfood.com - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;