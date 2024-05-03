import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import "./styles.css";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
// import SecretRecovery from "./views-mobile/SecretRecovery";
import VerifySaved from "./views-mobile/VerifySaved";
import BackupWallet from "./views-mobile/BackupWallet";
import SecretRecovery from "./views-mobile/SecretRecovery";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <div style={{ height: "100vh" }}>
        <VerifySaved />
      </div>
    </ThemeProvider>
  </React.StrictMode>
);
