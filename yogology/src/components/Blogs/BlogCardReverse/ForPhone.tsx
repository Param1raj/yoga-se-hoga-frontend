import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { HoverScaleImage, ToLeftTextAnimation } from "../utils";

function ForPhone({
  title,
  date,
  description,
  image,
}: {
  title: string;
  date: string;
  description: string;
  image?: string;
}) {
  return (
    <>
      {/* <Grid display={{ xs: "block", md: "none" }}> */}
      <Grid display={{ xs: "block", md: "none" }}>
        <HoverScaleImage image={image} />
      </Grid>
      <Stack
        spacing={{ sm: "10px", md: "20px" }}
        display={{ xs: "block", md: "none" }}
        padding={"10px"}
      >
        <Typography
          variant="h1"
          component={"h2"}
          color={"#322038"}
          fontFamily={["Kumbh Sans", "sans-serif"]}
          fontWeight={"700"}
          letterSpacing={"-0.0.281rem"}
          lineHeight={"2.3rem"}
          fontSize={{ xs: "1.5rem", md: "1rem", lg: "2.18rem" }}
          // border={"1px solid red"}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          component={"p"}
          color={"#B5AFB8"}
          fontFamily={["Nunito", "sans-serif"]}
          fontWeight={"400"}
          letterSpacing={"-0.0.281rem"}
          lineHeight={"1.3rem"}
          fontSize={"0.8rem"}
        >
          {date}
        </Typography>
        <Typography
          variant="body1"
          component={"p"}
          color={"#847988"}
          fontFamily={["Nunito", "sans-serif"]}
          fontWeight={"400"}
          letterSpacing={"0.00625rem"}
          lineHeight={"1.72125rem"}
          fontSize={{ sm: "1rem", md: "1.06rem" }}
          sx={{
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
          }}
        >
          {description}
        </Typography>
        <ToLeftTextAnimation />
      </Stack>
      {/* </Grid> */}
    </>
  );
}

export default ForPhone;
