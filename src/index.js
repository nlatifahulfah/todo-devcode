import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import { defaultTheme } from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
