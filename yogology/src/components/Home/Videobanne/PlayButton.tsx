"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

function PlayButton() {
  return (
    <Box
      padding={"70px"}
      sx={{ cursor: "pointer" }}
      // border={"1px solid red"}
      borderRadius={"50%"}
    >
      <motion.div
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
        // animate={{ x: left, y: top }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          boxSizing: "border-box",
          border: "2px solid  white",
        }}
      >
        <Typography
          variant="subtitle1"
          fontFamily={"Kumbh Sans"}
          fontWeight={700}
          fontSize={"18px"}
          color={"#FFFFFF"}
        >
          Play
        </Typography>
      </motion.div>
    </Box>
  );
}

export default PlayButton;
