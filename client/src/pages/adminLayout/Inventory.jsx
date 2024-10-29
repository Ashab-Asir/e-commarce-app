import React, { useState } from "react";
import { ProductsTable } from "../../components/product";
import {
  Box,
  Button,
  Modal,
  Snackbar,
  Alert,
  Typography,
} from "../../api/common/components";
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
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const isEditing = Boolean(selectedProduct.id);

  const openAddProductForm = () => {
    setSelectedProduct(placeHolderProduct);
    setOpenProductForm(true);
  };

  const openEditProductForm = (product) => {
    setSelectedProduct(product);
    setOpenProductForm(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const onSubmitProductForm = (productPayload) => {
    if (isEditing) {
      ProductServices.updateProduct(selectedProduct.id, productPayload)
        .then(() => {
          setSnackbarMessage("Edited Product");
          setSnackbarOpen(true);
        })
        .catch(() => alert("Failed to update product"))
        .finally(() => closeProductForm());
    } else {
      ProductServices.addProducts(productPayload)
        .then(() => {
          setSnackbarMessage("Added Product");
          setSnackbarOpen(true);
        })
        .catch(() => alert("Failed to add product"))
        .finally(() => closeProductForm());
    }
  };

  const closeProductForm = () => {
    setOpenProductForm(false);
    setSelectedProduct(placeHolderProduct);
  };

  return (
    <Box p={{ xs: 2, md: 4, overflow: "hidden" }} width="80%" mx={"auto"}>
      <Button
        onClick={openAddProductForm}
        variant="outlined"
        sx={{
          fontSize: { xs: "0.875rem", md: "1rem" },
          width: { xs: "100%", sm: "auto" }, // Full width on mobile
          mb: 2,
        }}
      >
        {isEditing ? "Edit Product" : "Add Product"}
      </Button>

      <ProductsTable onSelectProduct={openEditProductForm} />

      <Modal open={openProductForm} onClose={closeProductForm}>
        <Box
          width={{ xs: "90%", md: "60%", lg: "40%" }} // Responsive modal width
          sx={{
            bgcolor: "white",
            mx: "auto",
            my: "10%", // Center on screen
            p: 3,
            borderRadius: 1,
            boxShadow: 3,
          }}
        >
          <Typography variant="h6" mb={2}>
            {isEditing ? "Edit Product" : "Add Product"}
          </Typography>
          <ProductForm
            placeHolderproduct={selectedProduct}
            onSubmitProductForm={onSubmitProductForm}
            isEditing={isEditing}
          />
        </Box>
      </Modal>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }} // Position at the top-center
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}
