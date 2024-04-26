import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
