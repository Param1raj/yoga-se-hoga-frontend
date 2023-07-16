import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import TestimonialSvgIcon from "../../../assets/Iconsvg/TestimonialSvg";
function FeedbackCard({
  feedback,
  name,
  from,
}: {
  name: string;
  feedback: string;
  from: string;
}) {
  return (
    <Grid>
      <motion.div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          background: "#FFF",
        }}
        whileHover={{ y: -10 }}
      >
        <Stack
          width={{
            xs: "85%",
            sm: "83%",
            md: "85%",
            lg: "85%",
            xl: "75%",
          }}
          spacing={3}
          height={"75%"}
        >
          <Box>
            <TestimonialSvgIcon />
          </Box>
          <Typography
            fontFamily={"Nunito"}
            fontSize={{ md: "1rem", lg: "1.18rem" }}
            color={"#322038"}
            lineHeight={"2.12rem"}
            letterSpacing={"0.000625rem"}
          >
            {feedback}
          </Typography>
          <Box>
            <Typography
              color={"#322038"}
              fontSize={"1.18rem"}
              fontFamily={["Kumbh Sans", "sans-serif"]}
              fontWeight={"700"}
            >
              {name}
            </Typography>
            <Typography
              color={"#847988"}
              fontSize={"1rem"}
              fontFamily={["Nunito", "sans-serif"]}
              fontWeight={"400"}
              marginLeft={"15px"}
            >
              {from}
            </Typography>
          </Box>
        </Stack>
      </motion.div>
    </Grid>
  );
}

export default FeedbackCard;
