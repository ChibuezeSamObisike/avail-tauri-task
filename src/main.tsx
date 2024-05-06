import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import "./styles.css";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import { MobCarousel } from "./views-mobile/Mob";
import Existing from "./views-mobile/Existing";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <div style={{ height: "100vh" }}>
        <Existing/>
      </div>
    </ThemeProvider>
  </React.StrictMode>
);
