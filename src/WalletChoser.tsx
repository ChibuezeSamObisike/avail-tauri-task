import { Box } from "@mui/material";
import availLogo from "./assets/avail-logo.svg";
import AvatarDropDown from "./components/AvatarDropDown";
import React, { FC } from "react";
import SwipeableEdgeDrawer from "./components/SwipeableDrawer";

const WalletChoser: FC = () => {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <Box
      height='100vh'
      display='flex'
      flexDirection='column'
      justifyContent='space-between'
      sx={{ width: "100vw", m: 0, bgcolor: "#111111", p: 4 }}
    >
      <AvatarDropDown onClick={toggleDrawer(true)} />
      <img src={availLogo} alt='avail-logo' style={{ paddingTop: "150px" }} />
      <SwipeableEdgeDrawer open={open} toggleDrawer={toggleDrawer} />
    </Box>
  );
};

export default WalletChoser;
