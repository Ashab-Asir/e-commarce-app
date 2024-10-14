import React from "react";
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
} from "../../api/common/components";
import CartMenu from "./CartMenu";
import ProfileMenu from "./ProfileMenu";
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
        <ProfileMenu></ProfileMenu>
      </Toolbar>
    </AppBar>
  );
}
