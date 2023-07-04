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
      width={{ lg: "85%", xl: "70%" }}
      justifyContent={"center"}
      height={{ lg: "47rem", xl: "56rem" }}
    >
      <Stack
        // border={"1px solid blue"}
        width={"100%"}
        height={"80%"}
        alignItems={"center"}
        spacing={{ lg: 5, xl: 10 }}
      >
        <Stack spacing={2} width={"60%"}>
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
            fontSize={{ lg: "2rem", xl: "2.5rem" }}
            color={"#322038"}
            lineHeight={" 50px"}
          >
            Finding inner peace through spiritual practices
          </Typography>
        </Stack>
        <Grid
          container
          width={"100%"}
          spacing={1}
          justifyContent={"space-between"}
          height={"60%"}
        >
          {hoverData.map(({ image, title }) => (
            <HoverImage key={title} image={image} title={title} />
          ))}
        </Grid>
        <ButtonComp text={"More About Us"} />
      </Stack>
    </Stack>
  );
}

export default WhatWeDo;
