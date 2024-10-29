import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography, Button, Stack } from "../../api/common/components";
import Heading from "../Heading/Heading";
import { AddBoxIcon } from "../../api/common/icons";
import { CartContext } from "../../contexts";

const ProductDetails = () => {
  const location = useLocation();
  const product = location.state?.product;
  const { addToCartProduct } = useContext(CartContext);

  if (!product) {
    return <Typography variant="h6">Product not found.</Typography>;
  }

  return (
    <Box padding={4} width={"60%"} mx={"auto"} my={"10%"}>
      <Heading></Heading>
      <Stack spacing={5}>
        <img src={product.image} alt={product.title} width="300px" />
        <Typography variant="h4">
          <b>Product Name: </b>
          {product.title}
        </Typography>
        <Typography variant="h5">
          <b>Product Price: </b>
          {product.price}$
        </Typography>
        <Typography variant="body1">
          <b>Product Description: </b>
          {product.description}
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddBoxIcon></AddBoxIcon>}
          sx={{
            backgroundColor: "#050505",
          }}
          onClick={() => addToCartProduct(product)}
        >
          Add to cart
        </Button>
      </Stack>
    </Box>
  );
};

export default ProductDetails;
