import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import "./styles.css";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import { MobCarousel } from "./views-mobile/Mob";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <div style={{ height: "100vh" }}>
        {/* <MobCarousel /> */}
        <App/>
      </div>
    </ThemeProvider>
  </React.StrictMode>
);
