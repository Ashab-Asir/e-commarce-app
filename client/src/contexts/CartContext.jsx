import { createContext } from "react";
import { useCart } from "../hooks";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const { carts, addToCartProduct, removeProductFromCart } = useCart();
  console.log(carts);
  return (
    <CartContext.Provider
      value={{ carts, addToCartProduct, removeProductFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
