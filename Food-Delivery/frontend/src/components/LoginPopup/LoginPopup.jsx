import React, { useContext, useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { toast } from "react-toastify";

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);
  const [currentState, setCurrentState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();

    let newUrl = url;
    newUrl += currentState === "Login" ? "/api/user/login" : "/api/user/register";

    const response = await axios.post(newUrl, data);

    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      toast.success("Login Successfully");
      setShowLogin(false);
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <form
        onSubmit={onLogin}
        className="bg-white p-8 rounded-xl shadow-xl w-[90%] max-w-md animate-fadeIn"
      >
        {/* Title & Close */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">{currentState}</h2>
          <img
            src={assets.cross_icon}
            alt="close"
            onClick={() => setShowLogin(false)}
            className="w-6 cursor-pointer hover:rotate-90 transition"
          />
        </div>

        {/* Inputs */}
        <div className="flex flex-col gap-4">
          {currentState !== "Login" && (
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={onChangeHandler}
              placeholder="Your name"
              required
              className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-orange-500"
            />
          )}

          <input
            type="email"
            name="email"
            value={data.email}
            onChange={onChangeHandler}
            placeholder="Your email"
            required
            className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-orange-500"
          />

          <input
            type="password"
            name="password"
            value={data.password}
            onChange={onChangeHandler}
            placeholder="Your password"
            required
            className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-orange-500"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-medium transition"
        >
          {currentState === "Sign Up" ? "Create Account" : "Login"}
        </button>

        {/* Condition */}
        <div className="flex items-start gap-2 mt-4 text-sm text-gray-600">
          <input type="checkbox" required />
          <p>
            By continuing, I agree to the terms of use & privacy policy.
          </p>
        </div>

        {/* Toggle */}
        {currentState === "Login" ? (
          <p className="mt-4 text-center text-gray-700">
            Create a new account?{" "}
            <span
              onClick={() => setCurrentState("Sign Up")}
              className="text-orange-500 cursor-pointer"
            >
              Click here
            </span>
          </p>
        ) : (
          <p className="mt-4 text-center text-gray-700">
            Already have an account?{" "}
            <span
              onClick={() => setCurrentState("Login")}
              className="text-orange-500 cursor-pointer"
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
