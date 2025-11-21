import React from "react";
import { menu_list } from "../../assets/frontend_assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div id="explore-menu" className="w-full mt-16 px-6 md:px-16">
      
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
        Explore our menu
      </h1>

      {/* Description */}
      <p className="text-center text-gray-600 max-w-2xl mx-auto mt-4 leading-relaxed">
        Choose from a diverse menu featuring a detectable array of dishes. 
        Our mission is to satisfy your cravings and elevate your dining 
        experience, one delicious meal at a time.
      </p>

      {/* Menu List */}
      <div className="flex flex-wrap justify-center gap-8 mt-10">
        {menu_list.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              className="cursor-pointer flex flex-col items-center"
            >
              {/* Image */}
              <img
                src={item.menu_image}
                alt={item.menu_name}
                className={`w-24 h-24 rounded-full object-cover transition-all shadow-sm
                 ${category === item.menu_name 
                    ? "ring-4 ring-orange-500 scale-110" 
                    : "hover:scale-105"}
                `}
              />

              {/* Name */}
              <p className="mt-3 text-gray-700 font-medium">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>

      <hr className="mt-12 border-gray-300" />
    </div>
  );
};

export default ExploreMenu;
