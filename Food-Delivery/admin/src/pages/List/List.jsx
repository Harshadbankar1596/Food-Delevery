import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const List = ({ url }) => {
  const navigate = useNavigate();
  const { token, admin } = useContext(StoreContext);
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  const removeFood = async (foodId) => {
    const response = await axios.post(
      `${url}/api/food/remove`,
      { id: foodId },
      { headers: { token } }
    );
    await fetchList();

    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("Error");
    }
  };

  useEffect(() => {
    if (!admin && !token) {
      toast.error("Please Login First");
      navigate("/");
    }
    fetchList();
  }, []);

  return (
    <div className="p-6">
      {/* Title */}
      <p className="text-2xl font-semibold text-gray-800 mb-6">
        All Food List
      </p>

      {/* Table Container */}
      <div className="bg-white border border-gray-200 shadow-sm rounded-xl">
        {/* Table Header */}
        <div className="grid grid-cols-5 p-4 border-b bg-gray-100 font-semibold text-gray-700">
          <span>Image</span>
          <span>Name</span>
          <span>Category</span>
          <span>Price</span>
          <span>Action</span>
        </div>

        {/* Table Rows */}
        {list.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-5 items-center p-4 border-b last:border-none hover:bg-gray-50 transition text-gray-800"
          >
            <img
              src={`${url}/images/${item.image}`}
              alt=""
              className="w-14 h-14 object-cover rounded-md"
            />

            <p>{item.name}</p>
            <p>{item.category}</p>
            <p className="font-medium">${item.price}</p>

            {/* Delete Button */}
            <button
              onClick={() => removeFood(item._id)}
              className="text-red-500 font-bold hover:text-red-700 text-lg cursor-pointer"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
