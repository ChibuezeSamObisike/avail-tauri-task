import { Box } from "@mui/material";
import React, { FC, PropsWithChildren } from "react";

interface IProps extends PropsWithChildren {}

const DashboardLayout: FC<IProps> = ({ children }) => {
  return (
    <Box height='100vh'>
      <Box bgcolor='black' height='90vh'></Box>
      <Box height='10vh' bgcolor='#2A2A2A' position='relative'>
        <Box
          width='100%'
          mx='auto'
          height='2px'
          sx={{
            background:
              "linear-gradient(90deg, rgba(0, 255, 170, 0) 0%, #00FFAA 49.35%, rgba(0, 153, 102, 0) 100%)",
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
