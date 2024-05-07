import * as mui from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';

function PasswordTextField() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <mui.Box
      width={"390px"}
      height={"130px"}
      sx={{
        flexDirection: "column",
        alignItems: "center",
        position: "relative" // Needed for absolute positioning of the icon
      }}
    >
      {/* The Text Field */}
      <mui.TextField
        fullWidth
        variant="filled"
        label="Private Key"
        id="outlined-basic"
        color="primary"
        sx={{
          padding: "10px 10px",
        }}
        InputProps={{
          sx: {
            alignItems: "center",
            borderRadius: "10px",
            color: "lightgray",
            padding: "5px",
            border: "2px solid #01f0a0", // Set border for both states
          },
          type: showPassword ? 'text' : 'password', // Toggle password visibility
        }}
        InputLabelProps={{
          sx: {
            fontSize: "2rem",
            color: "#9d9d9d",
            padding: "5px 100px",
          },
        }}
      />
      
      {/* Eye Icon */}
      <mui.IconButton
        style={{
          position: "absolute",
          bottom: 0,
          right: 10,
          backgroundColor: "#01f0a0", // Set background color
          borderRadius: "50%",
          width: "40px", 
          height: "40px",
        }}
        onClick={togglePasswordVisibility}
      >
        {showPassword ? <VisibilityOffIcon sx={{ color: "black" }} /> : <VisibilityIcon sx={{ color: "black" }} />}
      </mui.IconButton>
    </mui.Box>
  );
}

export default PasswordTextField;
