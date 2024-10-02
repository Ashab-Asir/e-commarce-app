import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export function AdminLayout() {
  return (
    <div>
      <h1>Welcome Admin Dashboard</h1>
      <NavLink to="inventory">Inventory</NavLink>
      <NavLink to="addproducts">Add Product</NavLink>
      <Outlet></Outlet>
    </div>
  );
}
