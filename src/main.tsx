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
import { MobCarousel } from "./views-mobile/Mob";
import App from "./App";
import Home from "./Home";
import WalletChoser from "./WalletChoser";
import DataPointers from "./views-mobile/DataPointers";
import MoreProtection from "./views-mobile/MoreProtection";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./views-mobile/Dashboard";
import DappsPage from "./views-mobile/DappsPage";

// Sample data for dapps
const dapps = [
  {
    name: "Arcane Finance",
    description: "Decentralized Exchange on Aleo",
    main_img:
      "https://pbs.twimg.com/profile_images/1686782173393895424/paesZbhm_400x400.jpg",
    featured: true,
    featured_img: "",
    featured_msg: "Arcane finance",
    featured_url: "",
    connected: true,
    url: "https://x.com/immadominon",
  },
  {
    name: "Arcane Finance",
    description: "Decentralized Exchange on Aleo",
    main_img:
      "https://pbs.twimg.com/profile_images/1686782173393895424/paesZbhm_400x400.jpg",
    featured: true,
    featured_img: "",
    featured_msg: "Arcane finance",
    featured_url: "",
    connected: true,
    url: "https://x.com/immadominon",
  },
  {
    name: "Arcane Finance",
    description: "Decentralized Exchange on Aleo",
    main_img:
      "https://pbs.twimg.com/profile_images/1686782173393895424/paesZbhm_400x400.jpg",
    featured: true,
    featured_img: "",
    featured_msg: "Arcane finance",
    featured_url: "",
    connected: true,
    url: "https://x.com/immadominon",
  },
  {
    name: "Arcane Finance",
    description: "Decentralized Exchange on Aleo",
    main_img:
      "https://pbs.twimg.com/profile_images/1686782173393895424/paesZbhm_400x400.jpg",
    featured: true,
    featured_img: "",
    featured_msg: "Arcane finance",
    featured_url: "",
    connected: true,
    url: "https://x.com/immadominon",
  },

  // Add more dapps as needed
];

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <div style={{ height: "100vh", backgroundColor: "red" }}>
        <DappsPage dapps={dapps} />
      </div>
    </ThemeProvider>
  </React.StrictMode>
);
