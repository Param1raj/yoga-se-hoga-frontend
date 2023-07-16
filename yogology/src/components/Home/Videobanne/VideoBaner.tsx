"use client";

import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import VideoBanner from "./images/videoBanner.jpeg";
import { motion } from "framer-motion";
import PlayButton from "./PlayButton";
export default function VideoBaner() {
  return (
    <Box
      width={"100%"}
      height={{
        xs: "13rem",
        sm: "20rem",
        md: "30rem",
        lg: "35rem",
        l: "43rem",
      }}
      sx={{
        backgroundImage: `url('${VideoBanner.src}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Box
        width={"100%"}
        height={"100%"}
        sx={{
          background:
            "linear-gradient(180deg, rgba(29, 4, 39, 0.44) 60.82%, #1D0427 160.82%);",
          opacity: 0.4,
        }}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <PlayButton />
      </Box>
    </Box>
  );
}
