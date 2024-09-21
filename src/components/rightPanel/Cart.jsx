import React from "react";
import "./Cart.css";
import CartItem from "./CartItem";
export default function Cart({ carts, removeProductFromCart }) {
  return (
    <div>
      {carts.map((cartItem) => (
        <li key={cartItem.id}>
          <CartItem
            removeProductFromCart={removeProductFromCart}
            cartItem={cartItem}
          ></CartItem>
        </li>
      ))}
    </div>
  );
}
