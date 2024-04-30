import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import "./styles.css";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import Mob, { MobCarousel } from "./views-mobile/Mob";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <div style={{ height: "100vh" }}>
        <MobCarousel />
      </div>
    </ThemeProvider>
  </React.StrictMode>
);
