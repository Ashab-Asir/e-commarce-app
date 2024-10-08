import React, { useCallback, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./ProductGrid.css";
import { ProductServices } from "../../api/services";
import { Box } from "../../api/common/components";

export default function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const loadProducts = useCallback(async () => {
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
  }, []);
  useEffect(() => {
    loadProducts();
  }, [loadProducts]);
  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
        flexWrap: "wrap",
      }}
    >
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))
      )}
    </Box>
  );
}
