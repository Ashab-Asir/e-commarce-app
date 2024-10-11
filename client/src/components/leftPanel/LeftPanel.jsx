import React from "react";
import FilterSection from "./FilterSection";
import { ProductGrid } from "../product";
import Heading from "../Heading/Heading";
import { Stack } from "../../api/common/components";
export default function LeftPanel() {
  return (
    <Stack spacing={10}>
      <Heading></Heading>
      <FilterSection></FilterSection>
      <ProductGrid></ProductGrid>
    </Stack>
  );
}
