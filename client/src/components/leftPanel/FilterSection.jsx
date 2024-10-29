import React, { useEffect, useState } from "react";
import { Box, Button } from "../../api/common/components";
import { ProductServices } from "../../api/services";
// const categories = [
//   "Laptops",
//   "Gaming",
//   "Accessories",
//   "Peripherals",
//   "electronics",
//   "Components",
//   "Monitors",
//   "Printers",
// ];

export default function FilterSection({ onCategorySelect }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await ProductServices.getCategory();
      setCategories(data);
    };
    fetchCategories();
  }, []);
  return (
    <Box display="flex" gap={2} flexWrap="wrap">
      <Button onClick={() => onCategorySelect(null)}>All</Button>
      {categories.map((category) => (
        <Button key={category} onClick={() => onCategorySelect(category)}>
          {category}
        </Button>
      ))}
    </Box>
  );
}
