import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./ProductGrid.css";
import { ProductServices } from "../../api/services";

export default function ProductGrid() {
  const [products, setProducts] = useState([]);
  const loadProducts = async () => {
    try {
      const Products = await ProductServices.getProducts();
      setProducts(Products);
    } catch (err) {
      alert("Failed to load products");
      console.error(err);
    }
  };
  useEffect(() => {
    loadProducts();
  }, []);
  return (
    <div className="productGrid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </div>
  );
}
