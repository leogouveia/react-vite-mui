import React from "react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { createRoot } from "react-dom/client";
import App from "./App";
import theme from "./theme";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
