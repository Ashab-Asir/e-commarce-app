import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "../../api/common/components";
import { ShoppingCartIcon } from "../../api/common/icons";
import CartMenu from "./CartMenu";
export default function Heading() {
  return (
    <AppBar>
      <Toolbar position="sticky">
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Simple Ecommerce
        </Typography>
        <Button href="/" color="inherit">
          Home
        </Button>
        <Button href="ContactUs" color="inherit">
          ContactUs
        </Button>
        <CartMenu></CartMenu>
      </Toolbar>
    </AppBar>
  );
}
