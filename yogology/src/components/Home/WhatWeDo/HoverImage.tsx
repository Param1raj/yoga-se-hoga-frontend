"use client";

import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
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
      // xs={3.9}
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
        style={{ width: "100%", height: "100%" }}
        initial={{ y: 0 }}
        whileHover={{ y: forBlog ? -20 : 0 }}
      >
        <Box
          width={{ md: "100%", lg: "100%", xl: "100%" }}
          height={forBlog ? "75%" : "75%"}
          sx={{
            overflow: "hidden",
            boxShadow:
              forBlog && hover ? "rgba(149, 157, 165, 0.2) 0px 8px 24px" : null,
            transition: "box-shadow 0.3s ease-out",
          }}
        >
          {/* <Image
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
            width={444}
            height={315}
            alt=""
          ></Image>
           */}
          <Box
            width={"100%"}
            height={"100%"}
            // border={"1px solid red"}
            sx={{
              background: `url('${image}')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              objectFit: "contain",
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
          ></Box>
        </Box>
        <Box
          sx={{
            background: "white",
            height: forBlog ? "25%" : "25%",
            display: forBlog ? "" : "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px",
          }}
          width={{ sm: "100%", md: "100%", lg: "100%", xl: "100%" }}
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
