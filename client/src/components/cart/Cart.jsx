import React, { useContext } from "react";
import "./Cart.css";
import CartItem from "./CartItem";
import { CartContext } from "../../contexts";
import {
  Box,
  Button,
  List,
  ListItem,
  Stack,
  Typography,
} from "../../api/common/components";
export default function Cart() {
  const { carts, removeProductFromCart } = useContext(CartContext);
  return (
    <Stack>
      <Typography variant="h4">Cart</Typography>
      <Box>
        <Button variant="contained">checkout</Button>
      </Box>
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
    </Stack>
  );
}
