import React from "react";
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
} from "../../api/common/components";
import CartMenu from "./CartMenu";
import ProfileMenu from "./ProfileMenu";
import { NavLink } from "react-router-dom";
export default function Heading() {
  return (
    <AppBar>
      <Toolbar position="sticky">
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <NavLink to="/">
            <Button
              sx={{ textDecoration: "none", color: "white", fontSize: "25px" }}
            >
              Simple Ecommerce
            </Button>
          </NavLink>
        </Typography>
        <NavLink to="/" color="inherit">
          <Button
            sx={{
              color: "white",
            }}
            mx={2}
          >
            Home
          </Button>
        </NavLink>
        {/* <Button href="/" color="inherit">
            Home
          </Button> */}
        <NavLink to="contactus" color="inherit">
          <Button
            sx={{
              color: "white",
            }}
            mx={2}
          >
            ContactUs
          </Button>
        </NavLink>
        {/* <Button href="contactus" color="inherit">
            ContactUs
          </Button> */}
        <CartMenu></CartMenu>
        <ProfileMenu></ProfileMenu>
      </Toolbar>
    </AppBar>
  );
}
