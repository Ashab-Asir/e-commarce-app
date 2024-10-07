import React from "react";
import { Box, Button, ListItemText } from "../../api/common/components";

export default function CartItem({ cartItem, removeProductFromCart }) {
  return (
    <Box className="cart-item">
      <ListItemText
        primary={`${cartItem.title} x ${cartItem.quantity}`}
        secondary={`$${cartItem.price * cartItem.quantity}`}
      ></ListItemText>
      <Button
        onClick={() => removeProductFromCart(cartItem.id)}
        variant="outlined"
        color="error"
      >
        remove
      </Button>
    </Box>
  );
}
