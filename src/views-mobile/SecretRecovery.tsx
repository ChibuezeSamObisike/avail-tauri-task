import { ContentCopy } from "@mui/icons-material";
import { Box, Button, IconButton, Typography } from "@mui/material";

const SecretRecovery = () => {
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
    <Box
      pt={16}
      px={3}
      position='relative'
      height='100vh'
      bgcolor='#111111'
      color='#fff'
      textAlign='center'
    >
      <Typography fontSize='25px' fontWeight={700}>
        Your secret recovery phrase
      </Typography>
      <Typography fontSize='18px' color='#A7A7A7'>
        Write it down in order. You can find it later on in settings.
      </Typography>

      <Box
        display='grid'
        gap={4}
        gridTemplateColumns='1fr 1fr'
        width='100%'
        mx='auto'
        mt={3}
      >
        {recoveryPhase.map((phrase, i) => (
          <Box px={2} py={1} bgcolor='#3E3E3E' borderRadius='9px'>
            <Typography width='100%' fontWeight={600}>
              {i + 1}. {phrase}
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
          Next
        </Button>
        <IconButton
          sx={{ bgcolor: "#3E3E3E", width: "57px", borderRadius: "9px" }}
        >
          <ContentCopy sx={{ color: "#00FFAA" }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default SecretRecovery;
