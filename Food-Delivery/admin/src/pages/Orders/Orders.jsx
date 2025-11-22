import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Orders = ({ url }) => {
  const navigate = useNavigate();
  const { token, admin } = useContext(StoreContext);
  const [orders, setOrders] = useState([]);

  const fetchAllOrder = async () => {
    const response = await axios.get(url + "/api/order/list", {
      headers: { token },
    });
    if (response.data.success) {
      setOrders(response.data.data);
    }
  };

  const statusHandler = async (event, orderId) => {
    const response = await axios.post(
      url + "/api/order/status",
      {
        orderId,
        status: event.target.value,
      },
      { headers: { token } }
    );

    if (response.data.success) {
      toast.success(response.data.message);
      await fetchAllOrder();
    } else {
      toast.error(response.data.message);
    }
  };

  useEffect(() => {
    if (!admin && !token) {
      toast.error("Please Login First");
      navigate("/");
    }
    fetchAllOrder();
  }, []);

  return (
    <div className="p-6">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">Order Page</h3>

      <div className="flex flex-col gap-4">
        {orders.map((order, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 shadow-sm rounded-lg p-4 flex items-start justify-between gap-4 hover:shadow-md transition"
          >
            {/* Icon */}
            <img
              src={assets.parcel_icon}
              alt=""
              className="w-12 h-12 object-contain"
            />

            {/* Order Details */}
            <div className="flex-1">
              <p className="font-medium text-gray-800 mb-1">
                {order.items.map((item, i) =>
                  i === order.items.length - 1
                    ? `${item.name} x ${item.quantity}`
                    : `${item.name} x ${item.quantity}, `
                )}
              </p>

              <p className="font-semibold text-gray-900">
                {order.address.firstName + " " + order.address.lastName}
              </p>

              <div className="text-gray-600 text-sm mt-1 leading-snug">
                <p>{order.address.street},</p>
                <p>
                  {order.address.city}, {order.address.state},{" "}
                  {order.address.country}, {order.address.zipcode}
                </p>
              </div>

              <p className="mt-1 text-gray-700 font-medium">
                Phone: {order.address.phone}
              </p>
            </div>

            {/* Right Side Info */}
            <div className="text-right flex flex-col gap-2">
              <p className="text-gray-800 font-medium">
                Items: {order.items.length}
              </p>
              <p className="text-gray-800 font-semibold">${order.amount}</p>

              {/* Status Dropdown */}
              <select
                onChange={(event) => statusHandler(event, order._id)}
                value={order.status}
                className="mt-1 border border-gray-300 rounded-lg px-2 py-1 text-gray-700
                           focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <option value="Food Processing">Food Processing</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
