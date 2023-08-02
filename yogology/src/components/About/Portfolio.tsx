"use client";
import React from "react";
import { Stack, Typography } from "@mui/material";
import Gallery from "./Gallery/Gallery";
function Portfolio() {
  return (
    <Stack
      height={{ xs: "100rem", sm: "83rem" }}
      width={"100%"}
      sx={{ background: "#FFFFFF" }}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Typography
        color={"#322038"}
        fontFamily={["Kumbh Sans", "sans-serif"]}
        fontSize={"0.8rem"}
        textTransform={"uppercase"}
        fontWeight={"700"}
      >
        Portfolio
      </Typography>
      <Typography
        color={"#322038"}
        fontFamily={["Kumbh Sans", "sans-serif"]}
        fontSize={{ xs: "2rem", sm: "2.93781rem" }}
        // textTransform={"uppercase"}
        fontWeight={"700"}
      >
        Our memories
      </Typography>
      <Gallery />
    </Stack>
  );
}

export default Portfolio;
