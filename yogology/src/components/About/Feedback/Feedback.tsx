import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import FeedbackCard from "./FeedbackCard";
const FeedbackData = [
  {
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna.aliqua. Ut enim ad minim veniam, quis nostrud exercitation, ullamco.",
    from: " Boston",
    name: "- Sunton Pu",
  },
  {
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna.aliqua. Ut enim ad minim veniam, quis nostrud exercitation, ullamco.",
    from: " Boston",
    name: "- Sunton Pu",
  },
  {
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna.aliqua. Ut enim ad minim veniam, quis nostrud exercitation, ullamco.",
    from: " Boston",
    name: "- Sunton Pu",
  },
];

function Feedback() {
  return (
    <Box
      width={"100%"}
      height={{ xs: "90rem", sm: "90rem", md: "80rem", lg: "53rem" }}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      // border={"1px solid red"}
    >
      <Box
        width={{ xs: "80%", sm: "55%", md: "75%", lg: "80%", xl: "70%" }}
        // border={"1px solid red"}
        height={{ xs: "95%", sm: "90%", md: "75%" }}
      >
        <Stack
          // border={"1px solid red"}
          width={"100%"}
          height={"100%"}
          spacing={"20px"}
        >
          <Typography
            color={"#322038"}
            fontFamily={["Kumbh Sans", "sans-serif"]}
            fontSize={"0.9rem"}
            textTransform={"uppercase"}
            fontWeight={"700"}
          >
            Testimonials
          </Typography>
          <Typography
            color={"#322038"}
            fontFamily={["Kumbh Sans", "sans-serif"]}
            fontSize={{ xs: "1.8rem", sm: "2rem", md: "2.93781rem" }}
            // textTransform={"uppercase"}
            fontWeight={"700"}
          >
            What people say
          </Typography>
          <Grid
            justifyContent={"space-between"}
            height={{ xs: "100%", sm: "100%", md: "85%", lg: "75%" }}
            display={"grid"}
            // border={"1px solid red"}
            gridTemplateColumns={{
              sm: "1fr",
              md: "repeat(2,1fr)",
              lg: "repeat(3,1fr)",
            }}
            columnGap={"20px"}
            rowGap={"20px"}
          >
            {FeedbackData.map(({ feedback, from, name }) => {
              return (
                <FeedbackCard
                  key={feedback}
                  feedback={feedback}
                  name={name}
                  from={from}
                />
              );
            })}
          </Grid>
        </Stack>
      </Box>
    </Box>
  );
}

export default Feedback;
