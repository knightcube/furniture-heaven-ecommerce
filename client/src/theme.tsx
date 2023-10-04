import { createTheme, responsiveFontSizes } from "@mui/material";
import { blue, grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: grey[500],
      light: grey[300],
      dark: '#464E51',
    },
    secondary: {
      main: blue[500],
      light: blue[300],
      dark: blue[800],
    },
  },
  typography: {
    allVariants: {
      color: "#464E51",
      fontFamily: "Poppins",
    },

    body1:{
      color:'#425057'
    }
  
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: blue[600],
          color: "white",
          "&:hover": {
            backgroundColor: blue[800],
          },
        },
      },
    },
  },
});

export default responsiveFontSizes(theme);
