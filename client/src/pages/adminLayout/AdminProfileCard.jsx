import React from "react";
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Box,
} from "../../api/common/components";
import { pink } from "@mui/material/colors";

const AdminProfileCard = () => {
  return (
    <Card
      sx={{
        width: 300,
        borderRadius: 3,
        textAlign: "center",
        border: "2px solid",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Avatar
          src="https://via.placeholder.com/150"
          alt="Samantha Jones"
          sx={{ width: 80, height: 80, border: `4px solid ${pink[50]}` }}
        />
      </Box>
      <CardContent>
        <Typography variant="h6" fontWeight="bold">
          Admin
        </Typography>
        <Typography variant="body2">New York, United States</Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          Web Producer - Web Specialist
        </Typography>
        <Typography variant="body2">Columbia University - New York</Typography>
      </CardContent>
    </Card>
  );
};

export default AdminProfileCard;
