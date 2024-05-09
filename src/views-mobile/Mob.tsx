import { Box, Button, Typography } from "@mui/material";

import connectWallet from "../assets/connect-wallet.png";
import ownNft from "../assets/own-nft.png";
import ownPrivately from "../assets/crypto-privately.png";
import powerApps from "../assets/power-apps.png";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
// import Home from "../Home";
import { FC } from "react";

const AutoplaySlider = withAutoplay(AwesomeSlider, { Infinity: false });

interface IProps {
  title: string;
  img: string;
}

const Mob: FC<IProps> = ({ title, img }) => {
  return (
    <Box
      height="100vh"
      position="relative"
      sx={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}
    >
      <Typography
        marginTop="50vh"
        mx="auto"
        width="90%"
        color="#fff"
        textAlign="center"
        fontSize="30px"
        fontWeight={500}
        lineHeight="31.8px"
      >
        {title}
      </Typography>
    </Box>
  );
};

export const MobCarousel = () => {
  const carouselData = [
    { title: "Connect to the Al0 Blockchain", img: connectWallet },
    {
      title: "Own NFTs in private for the first time",
      img: ownNft,
    },
    {
      title: "Own any crypto privately, finally",
      img: ownPrivately,
    },
    {
      title: "Power yourself with crypto apps built on Aleo",
      img: powerApps,
    },
  ];
  return (
    <>
      <div style={{ position: "relative", height: "100vh" }}>
        <AutoplaySlider
          play={true}
          bullets={false}
          style={{ height: "100vh" }}
          infinite={false}
          mobileTouch={true}
          interval={4000}
          fillParent={true}
        >
          {carouselData.map((item) => (
            <div key={item.title} style={{ height: "100vh" }}>
              <Mob {...item} />
            </div>
          ))}
        </AutoplaySlider>
        <Box
          width="100%"
          position="absolute"
          p={2}
          left={0}
          bottom={0}
          height="30vh"
          zIndex={10}
        >
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
            // onClick={(): void => navigate("/existing-user-checker-screen")}
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
      </div>
    </>
  );
};

export default Mob;
