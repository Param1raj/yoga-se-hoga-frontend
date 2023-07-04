"use client";

import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import VideoBanner from "./Images/videoBanner.jpeg";
import { motion } from "framer-motion";
export default function VideoBaner() {
  const [left, setLeft] = useState<number>(0);
  const [top, setTop] = useState<number>(0);

  return (
    <Box
      width={"100%"}
      height={{ md: "30rem", lg: "35rem", l: "43rem" }}
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
        <Box
          padding={"70px"}
          sx={{ cursor: "pointer" }}
          // border={"1px solid red"}
          borderRadius={"50%"}
          onMouseOver={(e) => {
            let id = null;
            if (!id) {
              id = setTimeout(() => {
                setLeft(e.movementX);
                setTop(e.movementY);
              }, 100);
            } else {
              clearTimeout(id);
            }
          }}
          onMouseOut={() => {
            setLeft(0);
            setTop(0);
          }}
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
      </Box>
    </Box>
  );
}
