import { FC } from "react";
import availLogo from "./assets/avail-logo.svg";

// import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import { Box, Button, Typography } from "@mui/material";
import { NavigateFunction, useNavigate } from "react-router-dom";

const Home: FC = () => {
  const navigate: NavigateFunction = useNavigate();

  const handleNavigation = () => {
    navigate("/existing-user-checker-screen");
    console.log("INFO: going to the existing user check screen")
  };

  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      sx={{ width: "100vw", m: 0, bgcolor: "#111111", p: 4 }}
    >
      <img src={availLogo} alt="avail-logo" style={{ paddingTop: "120px" }} />
      <Box sx={{ width: "100%", mt: -150 }}>
        <Button
          fullWidth
          // onClick={(): void => navigate("wallet-choser")}
          sx={{
            background:
              "linear-gradient(89.89deg, #3E3E3E -27.59%, rgba(62, 62, 62, 0) 42.72%), #00FFAA",
            py: 2,
          }}
          variant="contained"
          type="submit"
        >
          Create Wallet
        </Button>
        <Button
          sx={{ mt: 3 }}
          fullWidth
          variant="outlined"
          onClick={handleNavigation}
        >
          Add an existing wallet
        </Button>
        <Typography variant="body1" mt={4} color="#9d9d9d" fontWeight={700}>
          By signing up you agree to Avail’s{" "}
          <span style={{ color: "#01f0a0" }}>
            Terms of Service and Privacy policy.
          </span>
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
