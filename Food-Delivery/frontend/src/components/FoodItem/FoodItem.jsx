import React, { useContext } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4 flex flex-col">

      {/* Image Container */}
      <div className="relative w-full h-48 rounded-xl overflow-hidden">
        <img
          src={url + "/images/" + image}
          alt={name}
          className="w-full h-full object-cover"
        />

        {/* Add / Counter */}
        {!cartItems[id] ? (
          <img
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt="add"
            className="absolute bottom-3 right-3 w-10 cursor-pointer bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition"
          />
        ) : (
          <div className="absolute bottom-3 right-3 flex items-center gap-3 bg-white shadow-md px-3 py-1 rounded-full">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="remove"
              className="w-6 cursor-pointer"
            />
            <p className="font-semibold">{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt="add"
              className="w-6 cursor-pointer"
            />
          </div>
        )}
      </div>

      {/* Info */}
      <div className="mt-4 flex flex-col gap-2">

        {/* Name + Rating */}
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold text-gray-800">{name}</p>
          <img src={assets.rating_starts} alt="rating" className="w-20" />
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-2">
          {description}
        </p>

        {/* Price */}
        <p className="text-lg font-bold text-green-600">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
