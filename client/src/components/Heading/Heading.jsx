import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "../../api/common/components";
import { MenuIcon } from "../../api/common/icons";
import CartMenu from "./CartMenu";
import ProfileMenu from "./ProfileMenu";
import { NavLink } from "react-router-dom";

export default function Heading() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 2,
      }}
    >
      <NavLink to="/" onClick={handleDrawerToggle}>
        <Button
          sx={{ textDecoration: "none", color: "black", fontSize: "18px" }}
        >
          Home
        </Button>
      </NavLink>
      <NavLink to="/contactus" onClick={handleDrawerToggle}>
        <Button
          sx={{ textDecoration: "none", color: "black", fontSize: "18px" }}
        >
          Contact Us
        </Button>
      </NavLink>
      <CartMenu />
      <ProfileMenu />
    </Box>
  );

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}
        >
          <NavLink to="/" style={{ textDecoration: "none", color: "white" }}>
            <Button
              sx={{
                textDecoration: "none",
                color: "white",
                fontSize: { xs: "20px", sm: "25px" },
              }}
            >
              Simple Ecommerce
            </Button>
          </NavLink>
        </Typography>

        <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
          <NavLink to="/">
            <Button sx={{ color: "white" }}>Home</Button>
          </NavLink>
          <NavLink to="/contactus">
            <Button sx={{ color: "white" }}>Contact Us</Button>
          </NavLink>
          <CartMenu />
          <ProfileMenu />
        </Box>
        <IconButton
          color="inherit"
          edge="end"
          sx={{ display: { xs: "flex", sm: "none" } }}
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", sm: "none" },
        }}
      >
        {drawerContent}
      </Drawer>
    </AppBar>
  );
}
