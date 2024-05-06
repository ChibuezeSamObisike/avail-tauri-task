import * as react from "react";
import * as mui from "@mui/material";

import { useNavigate } from "react-router-dom";

function Existing() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/");
  };

  return (
    <mui.Box
      className="Box"
      height="100vh"
      position="relative"
      sx={{ backgroundSize: "cover" }}
    >
        <mui.Typography
        marginTop="50vh"
        mx="auto"
        width="90%"
        color="#fff"
        textAlign="center"
        fontSize="30px"
        fontWeight={500}
        lineHeight="31.8px"
      >
        "Hello world"
      </mui.Typography>
      <mui.Button>Click Me 1</mui.Button>
      <mui.Button>Click Me 2</mui.Button>
    </mui.Box>
  );
}

export default Existing;
