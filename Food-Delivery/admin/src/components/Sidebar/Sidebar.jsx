import React from "react";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-white border-r border-gray-200 p-5">
      <div className="flex flex-col gap-4">
        
        <NavLink
          to="add"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition 
            ${
              isActive
                ? "bg-blue-600 text-white shadow-md"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          <img src={assets.add_icon} alt="" className="w-6 h-6" />
          <p className="font-medium">Add Items</p>
        </NavLink>

        <NavLink
          to="list"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition 
            ${
              isActive
                ? "bg-blue-600 text-white shadow-md"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          <img src={assets.order_icon} alt="" className="w-6 h-6" />
          <p className="font-medium">List Items</p>
        </NavLink>

        <NavLink
          to="orders"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition 
            ${
              isActive
                ? "bg-blue-600 text-white shadow-md"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          <img src={assets.order_icon} alt="" className="w-6 h-6" />
          <p className="font-medium">Orders</p>
        </NavLink>

      </div>
    </div>
  );
};

export default Sidebar;
