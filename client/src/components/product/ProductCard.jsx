import { useContext } from "react";
import "./ProductCard.css";
import { CartContext } from "../../contexts/CartContext";
import { Box, Button, Stack, Typography } from "../../api/common/components";
import { AddBoxIcon, SearchIcon } from "../../api/common/icons";
import { useNavigate } from "react-router-dom";
export default function ProductCard({ product }) {
  const { addToCartProduct } = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <Stack sx={{ width: 1 / 4 }} spacing={{ xs: 4, sm: 6 }} border={3} p={5}>
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
      <Box display={"flex"} justifyContent={"space-between"}>
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
        <Button
          variant="contained"
          startIcon={<SearchIcon></SearchIcon>}
          sx={{
            backgroundColor: "#050505",
          }}
          onClick={() => navigate("/productdetails", { state: { product } })}
        >
          See Details
        </Button>
      </Box>
    </Stack>
  );
}
