import React, { useContext } from "react";
import "./Cart.css";
import CartItem from "./CartItem";
import { CartContext } from "../../contexts";
import { List, ListItem } from "../../api/common/components";
export default function Cart() {
  const { carts, removeProductFromCart } = useContext(CartContext);
  return (
    <List
      sx={{
        minWidth: 360,
      }}
    >
      {carts.map((cartItem) => (
        <ListItem key={cartItem.id}>
          <CartItem
            cartItem={cartItem}
            removeProductFromCart={removeProductFromCart}
          ></CartItem>
        </ListItem>
      ))}
    </List>
  );
}
