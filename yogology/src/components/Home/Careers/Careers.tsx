"use client";
import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import image1 from "./images/Careers-1.jpeg";
import image2 from "./images/Careers-2.jpeg";
import ButtonComp from "@/components/ButtonComp";

type GridCompProps = {
  image: string;
  head: string;
  title: string;
  ButtonText: string;
};

function GridComp({ image, head, title, ButtonText }: GridCompProps) {
  return (
    <Grid
      item
      // border={"1px solid blue"}
      // xs={6}
      sx={{
        background: `url('${image}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Stack
        //   border={"1px solid red"}
        height={"100%"}
        sx={{ background: "rgba(70, 0, 0, 0.3)" }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Stack
          //   border={"1px solid red"}
          width={{ xs: "90%", sm: "80%" }}
          height={"30%"}
          spacing={3}
        >
          <Typography
            variant="body1"
            component={"p"}
            textTransform={"uppercase"}
            color={"#ffffff"}
            textAlign={"center"}
            sx={{ opacity: 1 }}
            fontFamily={"Kumbh Sans"}
            fontWeight={"700"}
            fontSize={"1rem"}
          >
            {head}{" "}
          </Typography>
          <Typography
            variant="body1"
            component={"p"}
            // textTransform={"uppercase"}
            color={"#ffffff"}
            textAlign={"center"}
            fontFamily={["Kumbh Sans", "sans-serif"]}
            fontWeight={"700"}
            fontSize={{
              xs: "2rem",
              sm: "2rem",
              md: "2rem",
              lg: "2.5rem",
              xl: "3rem",
            }}
          >
            {title}{" "}
          </Typography>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <ButtonComp text={ButtonText} link="/contact" />
          </Box>
        </Stack>
      </Stack>
    </Grid>
  );
}

function Careers() {
  return (
    <Grid
      container
      //   sx={{ border: "1px solid red" }}
      height={{
        xs: "25rem",
        sm: "35rem",
        md: "38rem",
        lg: "40rem",
        xl: "43rem",
      }}
      display={"grid"}
      gridTemplateColumns={{ xs: "1fr", sm: "1fr", md: "1fr" }}
      width={"100%"}
    >
      <GridComp
        title={"Sign up for a session!"}
        head={"Get in touch"}
        ButtonText={"contact us"}
        image={image1.src}
      />
      {/* <GridComp
        title={"Want to join us?"}
        head={"Careers"}
        ButtonText={"Read More"}
        image={image2.src}
      /> */}
    </Grid>
  );
}

export default Careers;
