import { createTheme } from "@material-ui/core/styles";
import "@fontsource/poppins";
import "@fontsource/poppins/700.css";

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#16ABF8",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#ED4C5C",
      contrastText: "#FFFFFF",
    },
  },
});
