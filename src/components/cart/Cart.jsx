import React, { useContext } from "react";
import "./Cart.css";
import CartItem from "./CartItem";
import { CartContext } from "../../contexts";
export default function Cart() {
  const { carts, removeProductFromCart } = useContext(CartContext);
  return (
    <div>
      {carts.map((cartItem) => (
        <li key={cartItem.id}>
          <CartItem
            cartItem={cartItem}
            removeProductFromCart={removeProductFromCart}
          ></CartItem>
        </li>
      ))}
    </div>
  );
}
