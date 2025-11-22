import React, { useState, useContext, useEffect } from "react";
import { assets } from "../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Add = ({ url }) => {
  const navigate = useNavigate();
  const { token, admin } = useContext(StoreContext);

  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);

    const response = await axios.post(`${url}/api/food/add`, formData, {
      headers: { token },
    });

    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "Salad",
      });
      setImage(false);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  useEffect(() => {
    if (!admin && !token) {
      toast.error("Please Login First");
      navigate("/");
    }
  }, []);

  return (
    <div className="w-full flex justify-center py-10 px-4">
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-lg bg-white shadow-md border border-gray-200 rounded-xl p-6 flex flex-col gap-6"
      >
        {/* Upload Image */}
        <div className="flex flex-col gap-2">
          <p className="font-medium text-gray-700">Upload image</p>

          <label
            htmlFor="image"
            className="w-full h-48 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center cursor-pointer hover:border-orange-400 transition"
          >
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
              className="max-h-full object-contain"
            />
          </label>

          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>

        {/* Product Name */}
        <div className="flex flex-col gap-2">
          <p className="font-medium text-gray-700">Product name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Type here"
            required
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Product Description */}
        <div className="flex flex-col gap-2">
          <p className="font-medium text-gray-700">Product description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows="5"
            placeholder="Write content here"
            required
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          ></textarea>
        </div>

        {/* Category + Price */}
        <div className="grid grid-cols-2 gap-4">
          {/* Category */}
          <div className="flex flex-col gap-2">
            <p className="font-medium text-gray-700">Product category</p>
            <select
              name="category"
              required
              onChange={onChangeHandler}
              value={data.category}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>

          {/* Price */}
          <div className="flex flex-col gap-2">
            <p className="font-medium text-gray-700">Product price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="Number"
              name="price"
              placeholder="$20"
              required
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
