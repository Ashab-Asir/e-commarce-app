import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./ProductGrid.css";

export default function ProductGrid() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        alert("Failed to load products");
        console.error(err);
      });
  }, []);
  return (
    <div className="productGrid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </div>
  );
}
