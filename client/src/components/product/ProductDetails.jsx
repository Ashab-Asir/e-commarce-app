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
    <Box width={{ xs: "90%", sm: "80%", md: "60%" }} mx="auto" gap={2} p={2}>
      <Heading />
      <Stack spacing={5}>
        <img
          src={product.image}
          alt={product.title}
          style={{
            width: "100%",
            maxWidth: "300px",
            height: "auto",
          }}
        />
        <Typography
          variant="h4"
          sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}
        >
          <b>Product Name: </b>
          {product.title}
        </Typography>
        <Typography
          variant="h5"
          sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
        >
          <b>Product Price: </b>
          {product.price}$
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
        >
          <b>Product Description: </b>
          {product.description}
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddBoxIcon />}
          sx={{
            backgroundColor: "#050505",
            width: { xs: "100%", sm: "auto" },
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
