import React, { useEffect, useState } from "react";
import { Box, Button } from "../../api/common/components";
import { ProductServices } from "../../api/services";

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
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      gap={2}
      sx={{
        padding: 2,
        width: "100%",
      }}
    >
      <Button
        onClick={() => onCategorySelect(null)}
        sx={{
          fontSize: { xs: "0.8rem", sm: "1rem" },
          padding: { xs: "4px 8px", sm: "8px 16px" },
        }}
      >
        All
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          onClick={() => onCategorySelect(category)}
          sx={{
            fontSize: { xs: "0.8rem", sm: "1rem" },
            padding: { xs: "4px 8px", sm: "8px 16px" },
          }}
        >
          {category}
        </Button>
      ))}
    </Box>
  );
}
