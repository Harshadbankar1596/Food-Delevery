import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Login = ({ url }) => {
  const navigate = useNavigate();
  const { admin, setAdmin, token, setToken } = useContext(StoreContext);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    const response = await axios.post(url + "/api/user/login", data);

    if (response.data.success) {
      if (response.data.role === "admin") {
        setToken(response.data.token);
        setAdmin(true);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("admin", true);
        toast.success("Login Successfully");
        navigate("/add");
      } else {
        toast.error("You are not an admin");
      }
    } else {
      toast.error(response.data.message);
    }
  };

  useEffect(() => {
    if (admin && token) {
      navigate("/add");
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <form
        onSubmit={onLogin}
        className="bg-white w-full max-w-sm p-6 rounded-xl shadow-md"
      >
        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Login</h2>
        </div>

        {/* Inputs */}
        <div className="flex flex-col gap-4 mb-6">
          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Your email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700
                       focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="Your password"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700
                       focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded-lg 
                     hover:bg-orange-600 transition font-medium"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
