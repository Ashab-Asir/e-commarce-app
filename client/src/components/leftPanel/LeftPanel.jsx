import React from "react";
import FilterSection from "./FilterSection";
import { ProductGrid } from "../product";
import Heading from "./Heading";

export default function LeftPanel() {
  return (
    <div>
      <Heading></Heading>
      <FilterSection></FilterSection>
      <ProductGrid></ProductGrid>
    </div>
  );
}
