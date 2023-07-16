import { Box, Stack, Typography } from "@mui/material";
import background from "../../../assets/images/nature.avif";
import React from "react";

function Header() {
  return (
    <Box
      width={"100%"}
      height={"34rem"}
      sx={{
        background: `url('${background.src}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Stack
        width={{ xs: "80%", sm: "70%", md: "50%", lg: "45%", xl: "35%" }}
        height={"30%"}
        textAlign={"center"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
      >
        <Typography
          variant="h2"
          component="h2"
          fontSize={{
            xs: "2.5rem",
            sm: "2.5rem",
            md: "2.7rem",
            lg: "3rem",
            xl: "3.5rem",
          }}
          fontFamily={["Kumbh Sans", "sans-serif"]}
          fontWeight={"500"}
          color={"#ffffff"}
        >
          Yamas and Niyamas
        </Typography>
        <Typography
          variant="body1"
          component={"p"}
          fontFamily={["Nunito", "sans-serif"]}
          fontSize={{ xs: "1.3rem", lg: "1.5rem" }}
          color={"#ffffff"}
        >
          Learn the foundations of yoga in this online course
        </Typography>
      </Stack>
    </Box>
  );
}

export default Header;
