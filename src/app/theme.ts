import * as React from "react";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography:{
    fontFamily: 'Raleway, Arial, sans-serif',
  },
  palette: {
    primary: {
      main: "#7B4AE2",
    },
  },
});

export default theme;
