import React, { useContext, useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { toast } from "react-toastify";
import Logo from "../Logo";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    toast.success("Logout Successfully");
    navigate("/");
  };

  return (
    <div className="bg-blue-900 rounded-2xl m-2 flex items-center justify-between px-6 py-4 shadow-md sticky top-0 z-50">

      {/* Logo */}
      <Link to="/">
        <Logo brandName="optimizedd food" />
      </Link>

      {/* Menu Items */}
      <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={`cursor-pointer hover:text-orange-500 text-white${
            menu === "home" ? "text-orange-500 font-semibold" : ""
          }`}
        >
          Home
        </Link>

        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={`cursor-pointer hover:text-orange-500 text-white${
            menu === "menu" ? "text-orange-500 font-semibold" : ""
          }`}
        >
          Menu
        </a>

        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={`cursor-pointer hover:text-orange-500 text-white${
            menu === "mobile-app" ? "text-orange-500 font-semibold" : ""
          }`}
        >
          Mobile App
        </a>

        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={`cursor-pointer hover:text-orange-500 text-white${
            menu === "contact-us" ? "text-orange-500 font-semibold" : ""
          }`}
        >
          Contact Us
        </a>
      </ul>

      {/* Right Section */}
      <div className="flex items-center gap-6">

        {/* Search Icon */}
        <img
          src={assets.search_icon}
          alt=""
          className="w-6 cursor-pointer hover:opacity-80 transition"
        />

        {/* Cart */}
        <div className="relative cursor-pointer">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" className="w-7" />
          </Link>

          {getTotalCartAmount() !== 0 && (
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          )}
        </div>

        {!token ? (
          <button
            onClick={() => setShowLogin(true)}
            className="px-4 py-1.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition"
          >
            Sign In
          </button>
        ) : (
          <div className="relative group">
            <img
              src={assets.profile_icon}
              alt=""
              className="w-9 cursor-pointer"
            />

            <ul className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-lg py-2 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none transition-all duration-200">
              <li
                onClick={() => navigate("/myorders")}
                className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                <img src={assets.bag_icon} alt="" className="w-5" />
                <p>Orders</p>
              </li>

              <hr />

              <li
                onClick={logout}
                className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                <img src={assets.logout_icon} alt="" className="w-5" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;