import React, { useEffect, useState } from "react";
import FilterSection from "./FilterSection";
import { ProductGrid } from "../product";
import Heading from "../Heading/Heading";
import { Stack } from "../../api/common/components";
import { ProductServices } from "../../api/services";
export default function LeftPanel() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await ProductServices.getProducts();
      setProducts(data);
      setFilteredProducts(data);
    };
    fetchProducts();
  }, []);
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    if (category) {
      const filtered = products.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  };
  return (
    <Stack spacing={10}>
      <Heading />
      <FilterSection onCategorySelect={handleCategorySelect} />
      <ProductGrid products={filteredProducts} />
    </Stack>
  );
}
