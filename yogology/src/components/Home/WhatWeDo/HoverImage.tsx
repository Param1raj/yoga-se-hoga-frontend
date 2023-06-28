"use client";

import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { easeIn, motion } from "framer-motion";
type HoverImageProps = {
  image: string;
  title?: string;
  forBlog?: boolean;
};

function HoverImage({ image, title, forBlog }: HoverImageProps) {
  const [hover, setHover] = useState(false);
  return (
    <Grid
      item
      xs={3.9}
      sx={{
        cursor: "pointer",
      }}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <motion.div
        initial={{ y: 0 }}
        whileHover={{ y: -20 }}
        // transition={easeIn}
      >
        <Box
          width={"100%"}
          height={forBlog ? "75%" : "80%"}
          sx={{
            overflow: "hidden",
            boxShadow:
              forBlog && hover ? "rgba(149, 157, 165, 0.2) 0px 8px 24px" : null,
            transition: "box-shadow 0.3s ease-out",
          }}
        >
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
            height: forBlog ? "25%" : "30%",
            display: forBlog ? "" : "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px",
          }}
        >
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "1.2rem",
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
          {forBlog && (
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "1rem",
                fontFamily: ["Kumbh Sans", "sans-serif"],
                ":hover": {
                  opacity: 0.6,
                },
              }}
              variant="body1"
              component={"p"}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing
            </Typography>
          )}
        </Box>
      </motion.div>
    </Grid>
  );
}

export default HoverImage;
