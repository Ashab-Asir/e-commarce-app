import { useState } from "react";
import {
  Avatar,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "../../api/common/components";
import { Link, NavLink } from "react-router-dom";

export default function ProfileMenu() {
  const [openAdminMenu, setOpenAdminMenu] = useState(false);
  const toggleAdminMenu = () => {
    setOpenAdminMenu((prev) => !prev);
  };
  return (
    <>
      <IconButton onClick={toggleAdminMenu}>
        <Avatar sx={{ width: 24, height: 24 }}></Avatar>
      </IconButton>
      <Menu
        open={openAdminMenu}
        sx={{
          mt: "32px",
          mr: "20px",
        }}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        onClose={toggleAdminMenu}
      >
        <MenuItem>
          <Button href="admin/inventory">Inventory</Button>
        </MenuItem>
        <MenuItem>
          <a href="/admin/addproducts">Add Product</a>
        </MenuItem>
        <MenuItem>
          <a href="/admin">Profile</a>
        </MenuItem>
      </Menu>
    </>
  );
}
