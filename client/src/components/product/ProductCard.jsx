import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Box, Button, Stack, Typography } from "../../api/common/components";
import { AddBoxIcon, SearchIcon } from "../../api/common/icons";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const { addToCartProduct } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <Stack
      sx={{
        width: { xs: "100%", sm: "48%", md: "30%", lg: "22%" },
        border: 3,
        p: { xs: 2, sm: 3, md: 4 },
        boxShadow: 2,
        borderRadius: 2,
      }}
      spacing={2}
    >
      <Box
        sx={{
          height: { xs: "150px", sm: "200px", md: "250px" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={product.image}
          style={{
            width: "100%",
            maxHeight: "100%",
            objectFit: "contain",
          }}
          alt={product.title}
        />
      </Box>

      <Box display="flex" justifyContent="space-between">
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
            fontWeight: 600,
            maxWidth: "70%",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          {product.title}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: "0.8rem", sm: "1rem", md: "1.1rem" },
          }}
        >
          {product.price}$
        </Typography>
      </Box>

      <Box display="flex" justifyContent="space-between">
        <Button
          variant="contained"
          startIcon={<AddBoxIcon />}
          sx={{
            backgroundColor: "#050505",
            color: "white",
            fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.9rem" },
            padding: { xs: "5px 8px", sm: "6px 10px", md: "8px 12px" },
          }}
          onClick={() => addToCartProduct(product)}
        >
          Add to Cart
        </Button>
        <Button
          variant="contained"
          startIcon={<SearchIcon />}
          sx={{
            backgroundColor: "#050505",
            color: "white",
            fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.9rem" },
            padding: { xs: "5px 8px", sm: "6px 10px", md: "8px 12px" },
          }}
          onClick={() => navigate("/productdetails", { state: { product } })}
        >
          See Details
        </Button>
      </Box>
    </Stack>
  );
}
