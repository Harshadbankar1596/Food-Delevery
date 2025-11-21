import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    food_list,
    cartItems,
    removeFromCart,
    getTotalCartAmount,
    url
  } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="w-full px-6 md:px-16 mt-16">

      {/* Cart Items Section */}
      <div className="bg-white shadow-md rounded-lg p-6">
        
        {/* Header Row */}
        <div className="hidden md:grid grid-cols-6 font-semibold text-gray-700 pb-3 border-b">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Qty</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        {/* Items */}
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id} className="grid grid-cols-2 md:grid-cols-6 items-center py-4 border-b text-gray-700">

                {/* Image */}
                <img
                  src={url + "/images/" + item.image}
                  alt={item.name}
                  className="w-20 rounded-lg"
                />

                {/* Title */}
                <p>{item.name}</p>

                {/* Price */}
                <p className="md:text-left text-right">${item.price}</p>

                {/* Quantity */}
                <p className="md:text-left text-right">
                  {cartItems[item._id]}
                </p>

                {/* Total */}
                <p className="md:text-left text-right font-semibold">
                  ${item.price * cartItems[item._id]}
                </p>

                {/* Remove */}
                <p
                  onClick={() => removeFromCart(item._id)}
                  className="text-red-500 cursor-pointer text-lg font-semibold"
                >
                  x
                </p>
              </div>
            );
          }
          return null;
        })}
      </div>

      {/* Bottom Section */}
      <div className="mt-10 flex flex-col lg:flex-row gap-10">

        {/* Cart Total */}
        <div className="w-full lg:w-1/2 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Cart Totals</h2>

          <div className="flex justify-between text-gray-700 py-2">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />

          <div className="flex justify-between text-gray-700 py-2">
            <p>Delivery Fee</p>
            <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
          </div>
          <hr />

          <div className="flex justify-between text-gray-900 py-2 font-semibold">
            <p>Total</p>
            <p>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
          </div>

          <button
            onClick={() => navigate("/order")}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg mt-4 font-semibold transition"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>

        {/* Promo Code */}
        <div className="w-full lg:w-1/2 bg-white shadow-md rounded-lg p-6">
          <p className="text-gray-700 mb-4 font-medium">
            If you have a promocode, enter it here
          </p>

          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Promo code"
              className="flex-1 border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-orange-500"
            />
            <button className="px-6 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition">
              Submit
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cart;