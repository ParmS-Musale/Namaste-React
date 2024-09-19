import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
      <h1 className="font-bold text-2xl text-center mb-6">Your Cart</h1>

      <button
        className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-all duration-200 mb-6"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          <ItemList items={cartItems} />
        </div>
      )}
    </div>
  );
};

export default Cart;
