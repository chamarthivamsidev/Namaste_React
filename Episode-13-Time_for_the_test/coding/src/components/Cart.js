import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  handleClearCart = () => {
    dispatch(clearCart());
  };
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="text-center m-4 p-4 ">
      <h1 className="font-bold text-2xl">Cart</h1>

      <div className="w-6/12 m-auto  mt-4">
        {cartItems?.length ? (
          <>
            <button
              className="bg-black text-white rounded-lg m-2 p-2 "
              onClick={handleClearCart}
            >
              Clear Cart
            </button>

            <ItemList items={cartItems} />
          </>
        ) : (
          <p> Card is empty. Add items to the cart! 🙂</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
