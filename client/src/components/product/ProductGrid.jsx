import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./ProductGrid.css";
import { ProductServices } from "../../api/services";

export default function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const loadProducts = async () => {
    try {
      setLoading(true);
      const Products = await ProductServices.getProducts();
      setProducts(Products);
    } catch (err) {
      alert("Failed to load products");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    loadProducts();
  }, []);
  return (
    <div className="productGrid">
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))
      )}
    </div>
  );
}
