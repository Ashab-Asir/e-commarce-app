import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, Snackbar, Alert } from "../../api/common/components";
import { useProducts } from "../../api/queries/";
import { ProductServices } from "../../api/services";

export default function ProductsTable({ onSelectProduct }) {
  const { getProducts } = useProducts();
  const [products, setProducts] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, [getProducts]);

  const getFormattedProduct = () =>
    products.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: product.quantity,
      data: product,
    }));

  const handleDeleteProduct = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      ProductServices.deleteProduct(id)
        .then(() => {
          setProducts((prevProducts) =>
            prevProducts.filter((p) => p.id !== id)
          );
          setSnackbarMessage("Deleted Product");
          setSnackbarOpen(true);
        })
        .catch(() => alert("Failed to delete product"));
    }
  };
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };
  const ProductRowActions = ({ product }) => {
    return (
      <Box>
        <Button onClick={() => onSelectProduct(product)}>Edit</Button>
        <Button color="error" onClick={() => handleDeleteProduct(product.id)}>
          Delete
        </Button>
      </Box>
    );
  };

  return (
    <Box width={"80%"} margin={"auto"}>
      <DataGrid
        rows={getFormattedProduct()}
        paginationMode="client"
        initialState={{
          pagination: { paginationModel: { pageSize: 5 } },
        }}
        pageSizeOptions={[5, 10, 15, 20]}
        sx={{
          minHeight: 400,
          "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: 700,
          },
        }}
        columns={[
          { field: "title", headerName: "Product Name", flex: 1 },
          { field: "price", headerName: "Price", type: "number", width: 150 },
          {
            field: "quantity",
            headerName: "Quantity",
            type: "number",
            width: 150,
          },
          {
            align: "center",
            field: "actions",
            headerName: "",
            minWidth: 200,
            renderCell: ({ row }) => <ProductRowActions product={row.data} />,
          },
        ]}
      />
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
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
