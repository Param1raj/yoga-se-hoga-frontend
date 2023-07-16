"use client";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import image1 from "./images/Grid-1.jpeg";
import image2 from "./images/Grid-2.jpeg";
import image3 from "./images/Grid-3.jpeg";
import HoverImage from "./HoverImage";
import ButtonComp from "@/components/ButtonComp";

const hoverData = [
  {
    image: image1.src,
    title: "Sound bath",
  },
  {
    image: image2.src,
    title: "Healing session",
  },
  {
    image: image3.src,
    title: "Chakra drums",
  },
];

function WhatWeDo() {
  return (
    <Stack
      width={{ xs: "100%", sm: "100%", md: "100%", lg: "90%", xl: "90%" }}
      justifyContent={"center"}
      alignItems={"center"}
      height={{
        xs: "70rem",
        sm: "80rem",
        md: "47rem",
        lg: "47rem",
        xl: "56rem",
      }}
      // border={"1px solid blue"}
      padding={{ xs: "20px", sm: "20px", md: "50px", lg: "10px", xl: "10px" }}
      sx={{ background: { xs: "#FFF", md: "none" } }}
    >
      <Stack
        // border={"1px solid blue"}
        width={{ xs: "100%", md: "100%", lg: "100%", xl: "100%" }}
        height={{ xs: "90%", sm: "90%", md: "90%", lg: "80%" }}
        alignItems={"center"}
        spacing={{ xs: 4, sm: 1, md: 5, lg: 5, xl: 10 }}
      >
        <Stack
          spacing={{ xs: 2, md: 3, lg: 2 }}
          width={{ xs: "95%", sm: "60%" }}
        >
          <Typography
            variant="body1"
            component={"p"}
            textTransform={"uppercase"}
            textAlign={"center"}
            fontFamily={["Kumbh Sans", "sans-serif"]}
            fontWeight={"700"}
            fontSize={"14px"}
            color={"#322038"}
          >
            What we do
          </Typography>
          <Typography
            variant="h5"
            component={"h5"}
            textAlign={"center"}
            fontFamily={["Kumbh Sans", "sans-serif"]}
            fontWeight={"700"}
            fontSize={{
              xs: "1.5rem",
              sm: "1.2rem",
              md: "2rem",
              lg: "2rem",
              xl: "2.5rem",
            }}
            color={"#322038"}
            lineHeight={{ sm: "30px", md: "50px" }}
          >
            Finding inner peace through spiritual practices
          </Typography>
        </Stack>
        <Grid
          container
          width={{ xs: "90%", sm: "84%", md: "100%", lg: "100%", xl: "80%" }}
          // spacing={{ sm: 3, md: 1 }}
          columnGap={{ md: "1rem", lg: "1rem" }}
          rowGap={{ xs: "2rem", sm: "1rem" }}
          justifyContent={"space-between"}
          // alignItems={{xs:'self-end'}}
          height={{ xs: "100%", md: "60%" }}
          // border={"1px solid blue"}
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr", md: "repeat(3,1fr)" },
            gridTemplateRows: { xs: "30% 30% 30%", md: "100%" },
          }}
        >
          {hoverData.map(({ image, title }) => (
            <HoverImage key={title} image={image} title={title} />
          ))}
        </Grid>
        <ButtonComp text={"More About Us"} link="/about" />
      </Stack>
    </Stack>
  );
}

export default WhatWeDo;
