import React, { useState } from "react";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from "../../api/common/components";
export function ProductForm({ onSubmitProductForm }) {
  const initialProduct = {
    id: "",
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    quantity: 0,
  };
  const [product, setProduct] = useState(initialProduct);

  const handelOnChange = (e) => {
    const fieldName = e.target.name;
    setProduct({ ...product, [fieldName]: e.target.value });
  };
  const handleOnSubmitProductForm = (e) => {
    e.preventDefault();
    console.log(product);
    onSubmitProductForm(product);
  };
  return (
    <div>
      <form onSubmit={handleOnSubmitProductForm}>
        <Stack spacing={2} px={8} py={6}>
          <Typography variant="h3">form</Typography>
          <TextField
            label="Name"
            required
            name="title"
            onChange={handelOnChange}
          ></TextField>
          <TextField
            label="Price"
            required
            name="price"
            onChange={handelOnChange}
          ></TextField>
          <TextField
            label="Quantity"
            required
            name="quantity"
            onChange={handelOnChange}
          ></TextField>
          <Box>
            <Button variant="outlined" type="submit">
              Add
            </Button>
            <Button variant="outlined" color="error" type="reset">
              Cancel
            </Button>
          </Box>
        </Stack>
      </form>
    </div>
  );
}
