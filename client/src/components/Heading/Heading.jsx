import React from "react";
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
} from "../../api/common/components";
import CartMenu from "./CartMenu";
import ProfileMenu from "./ProfileMenu";
import { CartProvider } from "../../contexts";
import { Link, NavLink } from "react-router-dom";
export default function Heading() {
  return (
    <CartProvider>
      <AppBar>
        <Toolbar position="sticky">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Simple Ecommerce
          </Typography>
          <NavLink to="/" color="inherit">
            Home
          </NavLink>
          {/* <Button href="/" color="inherit">
            Home
          </Button> */}
          <NavLink to="contactus" color="inherit">
            ContactUs
          </NavLink>
          {/* <Button href="contactus" color="inherit">
            ContactUs
          </Button> */}
          <CartMenu></CartMenu>
          <ProfileMenu></ProfileMenu>
        </Toolbar>
      </AppBar>
    </CartProvider>
  );
}
