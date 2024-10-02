import { useContext } from "react";
import "./ProductCard.css";
import { CartContext } from "../../contexts/CartContext";
import { Box, Button, Stack, Typography } from "../../api/common/components";
import { AddBoxIcon } from "../../api/common/icons";
export default function ProductCard({ product }) {
  const { addToCartProduct } = useContext(CartContext);
  return (
    <Stack sx={{ width: 1 / 4 }} spacing={{ xs: 4, sm: 6 }}>
      <Box sx={{ height: "100%" }}>
        <img src={product.image} width="200px" alt="" />
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h5">
          {product.title.length > 50
            ? `${product.title.slice(0, 20)}...`
            : product.title}
        </Typography>
        <Typography variant="h5">{product.price}$</Typography>
      </Box>
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
  );
}
