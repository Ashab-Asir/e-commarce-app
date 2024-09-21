import React from "react";
import FilterSection from "./FilterSection";
import ProductGrid from "./product/ProductGrid";

export default function LeftPanel({ addToCartProduct }) {
  return (
    <div>
      <div>
        <h1>Simple Ecommerce</h1>
      </div>
      <FilterSection></FilterSection>
      <ProductGrid addToCartProduct={addToCartProduct}></ProductGrid>
    </div>
  );
}
