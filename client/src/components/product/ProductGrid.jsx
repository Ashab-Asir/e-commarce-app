import React, { useCallback, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./ProductGrid.css";
import { ProductServices } from "../../api/services";
import { Box } from "../../api/common/components";

export default function ProductGrid({ products }) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </Box>
  );
}
