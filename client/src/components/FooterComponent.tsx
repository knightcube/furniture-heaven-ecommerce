import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import theme from "../theme";

const FooterComponent: React.FC = () => {
  return (
    <Stack
      direction={"row"}
      bgcolor={theme.palette.primary.dark}
      gap={25}
      pl={"10%"}
      pr={10}
      pt={10}
      pb={10}
      justifyContent={"center"}
      
    >
      <Box>
        <Typography variant="h3" sx={{ color: "white" }}>
          Company
        </Typography>
        <ul>
          <li>Careers</li>
          <li>About us</li>
          <li>Customer Reviews</li>
          <li>Locations</li>
        </ul>
      </Box>

      <Box>
        <Typography variant="h3" sx={{ color: "white" }}>
          Shop
        </Typography>
        <ul>
          <li>Catalog</li>
          <li>3D Miniatures</li>
          <li>Offers</li>
          <li>Refer a friend</li>
        </ul>
      </Box>

      <Stack justifyContent={"center"} alignItems={"center"} gap={2} flexGrow={2}>
        <Typography
          variant="h4"
          sx={{ color: "white", textAlign: "center", fontWeight: "bold" }}
        >
          Sign Up For Our Newsletter To <br /> Get 10% off Your First Order
        </Typography>
        <Stack direction={"row"} gap={2}>
          <TextField
            id="outlined-basic"
            label="Your email address"
            variant="filled"
            sx={{
              background: theme.palette.primary.light,
            }}
          />
          <Button variant="contained">Sign Up</Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default FooterComponent;
