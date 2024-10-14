import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Heading from "../../components/Heading/Heading";
import { CartProvider } from "../../contexts";
import { Button, ButtonGroup, Stack } from "../../api/common/components/";
export function AdminLayout() {
  return (
    <CartProvider>
      <Stack width={1} px={4} spacing={2}>
        <Heading></Heading>
        <h1>Welcome Admin Dashboard</h1>
        <ButtonGroup>
          <Button href="/admin/inventory">Inventory</Button>
          <Button href="/admin/addproducts">Add Product</Button>
          <Button href="/admin">Profile</Button>
        </ButtonGroup>
        <Outlet></Outlet>
      </Stack>
    </CartProvider>
  );
}
