import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { HoverScaleImage, ToLeftTextAnimation } from "../utils";

function ForPhone({
  title,
  date,
  description,
}: {
  title: string;
  date: string;
  description: string;
}) {
  return (
    <>
      <Grid display={{ xs: "block", md: "none" }}>
        <Grid display={{ xs: "block", md: "none" }}>
          <HoverScaleImage />
        </Grid>
        <Stack spacing={{ sm: "10px", md: "20px" }} padding={"10px"}>
          <Typography
            variant="h1"
            component={"h2"}
            color={"#322038"}
            fontFamily={["Kumbh Sans", "sans-serif"]}
            fontWeight={"700"}
            letterSpacing={"-0.0.281rem"}
            lineHeight={"2.3rem"}
            fontSize={{ sm: "1.5rem", md: "2rem", lg: "2.18rem" }}
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
          >
            {description}
          </Typography>
          <ToLeftTextAnimation />
        </Stack>
      </Grid>
    </>
  );
}

export default ForPhone;
