import React from "react";
import ProductCard from "./ProductCard";
import "./ProductGrid.css";
import { useProducts } from "../../api/queries";

export default function ProductGrid() {
  const { products } = useProducts();
  return (
    <div className="productGrid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </div>
  );
}
