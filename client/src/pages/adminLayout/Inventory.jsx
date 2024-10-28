import React, { useState } from "react";
import { ProductsTable } from "../../components/product";
import { Box, Button, Modal } from "../../api/common/components";
import { ProductForm } from "../../components/product/ProductForm";
import { ProductServices } from "../../api/services";

export function Inventory() {
  const placeHolderProduct = {
    id: "",
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    quantity: 0,
  };

  const [openProductForm, setOpenProductForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(placeHolderProduct);
  const isEditing = Boolean(selectedProduct.id);

  const openAddProductForm = () => {
    setSelectedProduct(placeHolderProduct);
    setOpenProductForm(true);
  };

  const openEditProductForm = (product) => {
    setSelectedProduct(product);
    setOpenProductForm(true);
  };

  const onSubmitProductForm = (productPayload) => {
    if (isEditing) {
      ProductServices.updateProduct(selectedProduct.id, productPayload)
        .then((data) => console.log(data))
        .catch(() => alert("Failed to update product"))
        .finally(() => closeProductForm());
    } else {
      ProductServices.addProducts(productPayload)
        .then((data) => console.log(data))
        .catch(() => alert("Failed to add product"))
        .finally(() => closeProductForm());
    }
  };

  const closeProductForm = () => {
    setOpenProductForm(false);
    setSelectedProduct(placeHolderProduct);
  };

  return (
    <Box>
      <Button onClick={openAddProductForm} variant="outlined">
        {isEditing ? "Edit Product" : "Add Product"}
      </Button>
      <ProductsTable onSelectProduct={openEditProductForm} />
      <Modal open={openProductForm} onClose={closeProductForm}>
        <Box width={8 / 12} sx={{ bgcolor: "white", mx: "auto", my: "5%" }}>
          <ProductForm
            placeHolderproduct={selectedProduct}
            onSubmitProductForm={onSubmitProductForm}
            isEditing={isEditing}
          />
        </Box>
      </Modal>
    </Box>
  );
}
