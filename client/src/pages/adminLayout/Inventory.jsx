import React from "react";
import { ProductsTable } from "../../components/product";
import { Box } from "../../api/common/components";

export function Inventory() {
  return (
    <Box>
      <ProductsTable></ProductsTable>
    </Box>
  );
}
