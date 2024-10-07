import { Cart } from "../cart";
import { Box, Button, Stack, Typography } from "../../api/common/components";
export default function RightPanel() {
  return (
    <Stack>
      <Typography variant="h4">Cart</Typography>
      <Box>
        <Button variant="contained">checkout</Button>
      </Box>
      <ul>
        <Cart></Cart>
      </ul>
    </Stack>
  );
}
