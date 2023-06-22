"use client";

import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

type HoverImageProps = {
  image: string;
  title?: string;
};

function HoverImage({ image, title }: HoverImageProps) {
  const [hover, setHover] = useState(false);
  return (
    <Grid
      item
      xs={3.9}
      sx={{ cursor: "pointer" }}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <Box width={"100%"} height={"80%"} sx={{ overflow: "hidden" }}>
        <Image
          style={{
            ...(hover
              ? {
                  transform: "scale(1.05)",
                  msTransform: "scale(1.05)",
                  transitionDuration: "500ms",
                  transitionTimingFunction: "ease",
                }
              : {
                  transform: "scale(1)",
                  msTransform: "scale(1)",
                  transitionDuration: "500ms",
                  transitionTimingFunction: "ease",
                }),
          }}
          src={image}
          width={424}
          height={315}
          alt=""
        ></Image>
      </Box>
      <Box
        sx={{
          background: "white",
          height: "30%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: "25px",
            fontFamily: ["Kumbh Sans", "sans-serif"],
            ":hover": {
              opacity: 0.6,
            },
          }}
          variant="body1"
          component={"p"}
        >
          {title}
        </Typography>
      </Box>
    </Grid>
  );
}

export default HoverImage;
