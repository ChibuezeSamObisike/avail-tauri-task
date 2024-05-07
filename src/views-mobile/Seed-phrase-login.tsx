import * as mui from "@mui/material";
import { ArrowBackIos } from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

function SeedLogin() {
  const navigate = useNavigate();
  return (
    <mui.Box
      className="Box"
      height="100vh"
      position="relative"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Arrow back icon */}
      <mui.IconButton
        onClick={() => navigate(-1)}
        sx={{
          position: "absolute",
          top: "50px",
          left: "10px",
          color: "lightgray",
          zIndex: "1000",
          pl: 2,
          width: "40px", // Adjust width and height to set the size of the circular container
          height: "40px",
          borderRadius: "50%", // Setting borderRadius to 50% makes the container a circle
          backgroundColor: "gray", // You can adjust the background color as needed
          display: "flex", // Use flexbox to center the icon horizontally and vertically
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
        }}
      >
        <ArrowBackIos />
      </mui.IconButton>
      <mui.Typography mt={10} fontSize={25}  fontWeight={"bold"} sx={{ color: "#fff" }}>
        Input your
        <span style={{ color: "#01f0a0" }}> Seed Phrase</span>
      </mui.Typography>
      <mui.Typography fontSize={18} fontWeight={"regular"} sx={{ color: "#9d9d9d" }}>
        You have been missed
      </mui.Typography>
      Hello This is the Seed Login Page
    </mui.Box>
  );
}

export default SeedLogin;
