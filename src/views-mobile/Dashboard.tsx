import { Box, Typography } from "@mui/material";
import DashboardLayout from "../layouts/DashboardLayout";
import AssestCard from "../components/AssestCard";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <Typography color='#fff'>Total Balance</Typography>
      <Typography
        sx={{ textShadow: "0 0 15px #00FFAA" }}
        color='#00FFAA'
        fontWeight={600}
        fontSize='40px'
      >
        $48,000.00
      </Typography>
      <Typography color='#01FFAA'>+450.6%</Typography>

      <Box display='flex' mb={2}>
        <Typography
          fontWeight={500}
          borderBottom='1px solid #FFFFFF'
          fontSize='20px'
          width='content-fit'
          mr={2}
        >
          Assets
        </Typography>

        <Typography
          fontWeight={500}
          // borderBottom='1px solid #FFFFFF'
          fontSize='20px'
          width='content-fit'
        >
          NFT
        </Typography>
      </Box>

      {[1, 2, 3, 4].map(() => (
        <AssestCard />
      ))}
    </DashboardLayout>
  );
};

export default Dashboard;
