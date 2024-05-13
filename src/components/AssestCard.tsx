import { Box, Typography } from "@mui/material";
import availLogo from "../assets/avail-icon.svg";
import lineChart from "../assets/line-chart.svg";
import { FC } from "react";
import { AssetType } from "../types/assets/asset";

const AssestCard: FC<AssetType> = () => {
  return (
    <Box
      color='#fff'
      bgcolor='#2A2A2A'
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      p={2}
      my={1}
      borderRadius='9px'
    >
      <Box display='flex'>
        <img src={availLogo} />
        <Box ml={1} textAlign='left'>
          <Typography fontWeight={700} fontSize='17px'>
            AVAIL
          </Typography>
          <Typography fontSize='10px' fontWeight={400}>
            0.1502 ALO
          </Typography>
        </Box>
      </Box>
      {/* <img src={lineChart} /> */}
      <Box textAlign='left'>
        <Typography fontSize='17px' fontWeight={500}>
          $4.7M
        </Typography>
      </Box>
    </Box>
  );
};

export default AssestCard;
