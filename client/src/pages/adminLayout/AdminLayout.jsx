import React from "react";
import { Outlet } from "react-router-dom";
import Heading from "../../components/Heading/Heading";
import { CartProvider } from "../../contexts";
import {
  Button,
  ButtonGroup,
  Stack,
  Typography,
} from "../../api/common/components";

export function AdminLayout() {
  return (
    <CartProvider>
      <Stack
        width={"90%"}
        spacing={2}
        px={{ xs: 2, md: 4 }}
        py={{ xs: 2, md: 4 }}
        alignItems="center"
        overflow={"hidden"}
        mx={"auto"}
      >
        <Heading />
        <Typography
          variant="h4"
          textAlign="center"
          sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}
        >
          Welcome Admin Dashboard
        </Typography>

        <ButtonGroup
          variant="contained"
          color="primary"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 1, sm: 2 },
            width: { xs: "100%", sm: "auto" },
          }}
        >
          <Button href="/admin/inventory" variant="text">
            Inventory
          </Button>
          <Button href="/admin" variant="text">
            Profile
          </Button>
        </ButtonGroup>

        <Outlet />
      </Stack>
    </CartProvider>
  );
}
