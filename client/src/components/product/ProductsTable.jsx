import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button } from "../../api/common/components";
import { useProducts } from "../../api/queries/";

export default function ProductsTable() {
  const { getProducts } = useProducts();
  const [products, setProducts] = useState([]);

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
    }));
  const ProductRowActions = ({ row }) => {
    return (
      <Box>
        <Button>Edit</Button>
        <Button color="error">Delete</Button>
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
          {
            field: "title",
            headerName: "Product Name",
            flex: 1,
          },
          {
            field: "price",
            headerName: "Price",
            type: "number",
            width: 150,
            valueFormatter: (value) => `$${value}`,
          },
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
            renderCell: () => <ProductRowActions></ProductRowActions>,
          },
        ]}
      />
    </Box>
  );
}
