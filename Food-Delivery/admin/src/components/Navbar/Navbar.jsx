import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Name from "../Name"
import Logo from "../Logo"

const Navbar = () => {
  const navigate = useNavigate();
  const { token, admin, setAdmin, setToken } = useContext(StoreContext);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
    setToken("");
    setAdmin(false);
    toast.success("Logout Successfully");
    navigate("/");
  };

  return (
    <div className="w-full px-6 py-4 bg-orange-500 flex items-center justify-between shadow-md">
      {/* Logo */}
     {/* <Logo />
     <Name /> */}

      {/* Login / Logout */}
      {token && admin ? (
        <p
          className="text-white font-semibold cursor-pointer hover:text-gray-100 transition"
          onClick={logout}
        >
          Logout
        </p>
      ) : (
        <p
          className="text-white font-semibold cursor-pointer hover:text-gray-100 transition"
          onClick={() => navigate("/")}
        >
          Login
        </p>
      )}

      {/* Profile Image */}
      <img
        src={assets.profile_image}
        alt="Profile"
        className="w-10 h-10 rounded-full border-2 border-white object-cover"
      />
    </div>
  );
};

export default Navbar;
