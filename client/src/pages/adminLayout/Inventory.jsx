import React, { useState } from "react";
import { ProductsTable } from "../../components/product";
import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from "../../api/common/components";
import { ProductForm } from "../../components/product/ProductForm";
import { ProductServices } from "../../api/services";

export function Inventory() {
  const [openProductForm, setOpenProductForm] = useState(false);
  const toggleProductForm = () => setOpenProductForm((prev) => !prev);
  const onSubmitProductForm = (productPayload) => {
    console.log(productPayload);
    ProductServices.addProducts(productPayload)
      .then((data) => console.log(data))
      .catch(() => alert("failed to add product"))
      .finally(setOpenProductForm(false));
  };
  return (
    <Box>
      <Button onClick={() => toggleProductForm()} variant="outlined">
        Add Product
      </Button>
      <ProductsTable></ProductsTable>
      <Modal open={openProductForm} onClose={toggleProductForm}>
        <Box width={8 / 12} sx={{ bgcolor: "white", mx: "auto", my: "5%" }}>
          <ProductForm onSubmitProductForm={onSubmitProductForm}></ProductForm>
        </Box>
      </Modal>
    </Box>
  );
}
