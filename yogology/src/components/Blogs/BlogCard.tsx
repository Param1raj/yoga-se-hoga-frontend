import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { HoverScaleImage, ToLeftTextAnimation } from "./utils";

function BlogCard({
  title,
  description,
  date,
}: {
  title: string;
  description: string;
  date: string;
}) {
  return (
    <Grid
      // container
      display={"grid"}
      gridTemplateColumns={{
        sm: "1fr",
        md: "50% 50%",
        lg: "repeat(2,1fr)",
      }}
      gridTemplateRows={{ xs: "50% 50%", md: "100%" }}
      rowGap={"10px"}
      columnGap={"10px"}
      height={"100%"}
      width={"100%"}
      padding={{ sm: "5px", md: "5px", lg: "20px" }}
    >
      <Grid>
        <HoverScaleImage />
      </Grid>
      <Grid>
        <Stack
          // border={"1px solid blue"}
          padding={"10px"}
          spacing={{ sm: "10px", md: "20px" }}
        >
          <Typography
            variant="h1"
            component={"h2"}
            color={"#322038"}
            fontFamily={["Kumbh Sans", "sans-serif"]}
            fontWeight={"700"}
            letterSpacing={"-0.0.281rem"}
            lineHeight={"2.3rem"}
            fontSize={{
              xs: "1.4rem",
              sm: "1.5rem",
              md: "2rem",
              lg: "2.18rem",
            }}
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
            fontSize={"1.06rem"}
          >
            {description}
          </Typography>
          <ToLeftTextAnimation />
        </Stack>
      </Grid>
    </Grid>
  );
}

export default BlogCard;
