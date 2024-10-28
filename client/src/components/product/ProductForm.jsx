import React, { useState } from "react";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from "../../api/common/components";

export function ProductForm({
  placeHolderproduct,
  onSubmitProductForm,
  isEditing,
}) {
  const [product, setProduct] = useState(placeHolderproduct);

  const handelOnChange = (e) => {
    const fieldName = e.target.name;
    setProduct({ ...product, [fieldName]: e.target.value });
  };

  const handleOnSubmitProductForm = (e) => {
    e.preventDefault();
    onSubmitProductForm(product);
  };

  return (
    <div>
      <form onSubmit={handleOnSubmitProductForm}>
        <Stack spacing={2} px={8} py={6}>
          <Typography variant="h3">
            {isEditing ? "Edit Product" : "Add Product"}
          </Typography>
          <TextField
            label="Name"
            required
            name="title"
            onChange={handelOnChange}
            value={product.title}
          />
          <TextField
            label="Price"
            required
            name="price"
            onChange={handelOnChange}
            value={product.price}
          />
          <TextField
            label="Quantity"
            required
            name="quantity"
            onChange={handelOnChange}
            value={product.quantity}
          />
          <Box>
            <Button variant="outlined" type="submit">
              {isEditing ? "Save Changes" : "Add Product"}
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
