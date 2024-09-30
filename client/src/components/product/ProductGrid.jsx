import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./ProductGrid.css";
import { ProductServices } from "../../api/services";

export default function ProductGrid() {
  const [products, setProducts] = useState([]);
  const loadProducts = async () => {
    const products = ProductServices.getProducts();
    setProducts(products);
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
