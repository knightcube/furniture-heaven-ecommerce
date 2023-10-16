import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import FooterComponent from "../components/FooterComponent";
import theme from "../theme";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <Stack sx={{ minHeight: "100vh" }} justifyContent="flex-end">
      <Grid container spacing={0} direction="column" alignItems="center">
        <Grid item xs={3}>
          <Stack>
            <Typography
              variant="body1"
              color={"black"}
              fontWeight={"bold"}
              textAlign={"center"}
              paddingBottom={"24px"}
            >
              Sign in or create your account
            </Typography>
            <Typography textAlign={"center"} color={theme.palette.primary.dark}>
              Not sure if you have an account?
              <br />
              Enter your email and we'll check for you.
            </Typography>

            <Box width="50vh">
              <Typography
                variant="h6"
                fontWeight={"bold"}
                paddingTop={"48px"}
                paddingBottom={"10px"}
              >
                Email address
              </Typography>
              <Box marginBottom={"20px"}>
                <TextField
                  id="outlined-basic"
                  variant="filled"
                  sx={{
                    background: theme.palette.primary.light,
                    padding: "0px",
                    margin: "0px",
                  }}
                  hiddenLabel
                  fullWidth
                />
              </Box>

              <Button fullWidth variant="contained">Continue</Button>
              <Box textAlign="center" pt="52px" pb="40px">
                {" "}
                <Link to="https://google.com">Our Privacy Policy</Link>
              </Box>
            </Box>
          </Stack>
        </Grid>
      </Grid>
      <FooterComponent />
    </Stack>
  );
};

export default LoginPage;
