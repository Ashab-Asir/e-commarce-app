import { useState } from "react";

export function useCart() {
  const [carts, setCart] = useState([]);
  function addToCartProduct(product) {
    const productIndexInCart = carts.findIndex(
      (cartItem) => cartItem.id === product.id
    );
    if (productIndexInCart !== -1) {
      carts[productIndexInCart].quantity++;
      setCart([...carts]);
    } else {
      setCart([...carts, { ...product, quantity: 1 }]);
    }
  }
  function removeProductFromCart(productid) {
    const productIndexInCart = carts.findIndex(
      (cartItem) => cartItem.id === productid
    );
    if (productIndexInCart === -1) {
      alert("Product is not present");
    }
    carts[productIndexInCart].quantity--;
    if (carts[productIndexInCart].quantity === 0) {
      const updateCart = carts.filter((cart) => cart.id !== productid);
      setCart(updateCart);
      return;
    }
    setCart([...carts]);
  }
  return {
    addToCartProduct,
    removeProductFromCart,
    carts,
  };
}
