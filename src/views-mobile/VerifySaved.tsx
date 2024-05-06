import { Box, Button, Typography } from "@mui/material";
import SwipeableEdgeDrawer from "../components/SwipeableDrawer";

const VerifySaved = () => {
  const recoveryPhase = [
    "Babayaga",
    "One",
    "Takeover",
    "Champion",
    "Privacy",
    "Fear",
    "Donkey",
    "Puzzle",
    "Ultra",
    "Horse",
    "Frontline",
    "Cold",
  ];
  return (
    <>
      {/* <SwipeableEdgeDrawer open={true} /> */}
      <Box
        pt={16}
        px={3}
        position='relative'
        height='100vh'
        bgcolor='#111111'
        color='#fff'
        textAlign='center'
      >
        <Typography fontWeight={700} fontSize='25px'>
          Verify it’s saved correctly
        </Typography>
        <Typography fontSize='18px' mt={1} color='#A7A7A7' lineHeight='20.88px'>
          Tap the words below in order to confirm you have saved{" "}
        </Typography>

        <Box>
          <Box
            mt={3}
            height='30vh'
            display='flex'
            alignItems='flex-end'
            justifyContent='center'
            border='2px solid #00FFAA'
            borderRadius='9px'
            boxShadow='0px 4px 4px 0px #00000040'
          >
            <Typography color='#00FFAA'>Paste</Typography>
          </Box>
        </Box>

        <Box
          display='grid'
          gap={2}
          gridTemplateColumns='1fr 1fr'
          width='100%'
          mx='auto'
          mt={3}
        >
          {recoveryPhase.map((phrase, i) => (
            <Box px={1} py={1} bgcolor='#3E3E3E' borderRadius='9px'>
              <Typography width='100%' fontWeight={600}>
                {phrase}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box
          width='100%'
          position='absolute'
          display='flex'
          gap={2}
          p={2}
          left={0}
          bottom={30}
          height='auto'
          zIndex={10}
        >
          <Button
            fullWidth
            sx={{
              background:
                "linear-gradient(89.89deg, #3E3E3E -27.59%, rgba(62, 62, 62, 0) 42.72%), #00FFAA",
              py: 1,
              fontSize: "20px",
            }}
            variant='contained'
            type='submit'
          >
            Verify
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default VerifySaved;
