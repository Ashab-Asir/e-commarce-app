import React from "react";

export default function CartItem({ cartItem, removeProductFromCart }) {
  return (
    <div className="cart-item">
      <p>{`${cartItem.title} x ${cartItem.quantity}`}</p>
      <button onClick={() => removeProductFromCart(cartItem.id)}>remove</button>
    </div>
  );
}
