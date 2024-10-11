import { Badge, Drawer, IconButton } from "../../api/common/components";
import React, { useContext, useState } from "react";
import { ShoppingCartIcon } from "../../api/common/icons";
import { Cart } from "../cart";
import { CartContext } from "../../contexts";

export default function CartMenu() {
  const [openCart, setOpenCart] = useState(false);
  const { carts } = useContext(CartContext);
  const toggleCart = () => {
    setOpenCart((prev) => !prev);
  };
  return (
    <div>
      <Badge badgeContent={carts.length} color="error">
        <IconButton color="inherit" onClick={toggleCart}>
          <ShoppingCartIcon></ShoppingCartIcon>
        </IconButton>
        <Drawer open={openCart} anchor="right" onClose={toggleCart}>
          <ul>
            <Cart></Cart>
          </ul>
        </Drawer>
      </Badge>
    </div>
  );
}
