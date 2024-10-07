import React from "react";
import { Box, Button } from "../../api/common/components";
const categories = [
  "Laptops",
  "Gaming",
  "Accessories",
  "Peripherals",
  "Storage",
  "Components",
  "Monitors",
  "Printers",
];

export default function FilterSection() {
  return (
    <Box display="flex" gap={2} flex={"wrap"}>
      {categories.map((categorie) => (
        <Button key={categorie}>{categorie}</Button>
      ))}
    </Box>
  );
}
