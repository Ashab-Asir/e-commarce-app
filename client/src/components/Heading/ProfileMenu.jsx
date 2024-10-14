import { useState } from "react";
import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
} from "../../api/common/components";

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
        <MenuItem>Dashboard</MenuItem>
        <MenuItem>Inventory</MenuItem>
        <MenuItem>Profile</MenuItem>
      </Menu>
    </>
  );
}
