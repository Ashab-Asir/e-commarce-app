import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Heading from "../../components/Heading/Heading";
import { CartProvider } from "../../contexts";

export function AdminLayout() {
  return (
    <CartProvider>
      <Heading></Heading>
      <h1>Welcome Admin Dashboard</h1>
      <NavLink to="inventory">Inventory</NavLink>
      <NavLink to="addproducts">Add Product</NavLink>
      <Outlet></Outlet>
    </CartProvider>
  );
}
