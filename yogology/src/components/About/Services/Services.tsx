"use client";
import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import ServiceCard from "./ServiceCard";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import SpaIcon from "@mui/icons-material/Spa";
import { motion } from "framer-motion";
import { BoxVariant } from "@/src/Utils/animations/variants/boxVariant";
import { textLeftVariant } from "@/src/Utils/animations/variants/textVariant";
const services = [
  {
    title: "Solutions",
    caption: "Solutions for daily life problems",
    image: <EmojiObjectsIcon sx={{ fontSize: "90px" }} />,
  },
  {
    title: "Yoga",
    caption: "Various Kind of yoga exercises.",
    image: <SelfImprovementIcon sx={{ fontSize: "90px" }} />,
  },
  {
    title: "Meditation",
    caption: "Deep meditations and relaxations",
    image: <SpaIcon sx={{ fontSize: "90px" }} />,
  },
];
function Services() {
  return (
    <Stack
      width={{ xs: "75%", sm: "60%", md: "95%", lg: "85%", xl: "70%" }}
      // border={"1px solid blue"}
      justifyContent={"center"}
      height={{ xs: "70rem", sm: "70rem", md: "46rem" }}
    >
      <motion.div
        variants={BoxVariant}
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true }}
      >
        <Stack
          // border={"1px solid blue"}
          width={"100%"}
          height={{ xs: "95%", sm: "94%", md: "70%" }}
          alignItems={"center"}
          spacing={5}
        >
          <Stack spacing={2} width={"90%"}>
            <motion.p variants={textLeftVariant}>
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
            </motion.p>
            <motion.p variants={textLeftVariant}>
              <Typography
                variant="h5"
                component={"h5"}
                textAlign={"center"}
                fontFamily={["Kumbh Sans", "sans-serif"]}
                fontWeight={"700"}
                fontSize={{ xs: "1.2rem", sm: "2rem", md: "2.5rem" }}
                color={"#322038"}
                lineHeight={" 50px"}
              >
                Keeping our center running smoothly
              </Typography>
            </motion.p>
          </Stack>

          <Box
            width={"100%"}
            height={"90%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Grid
              container
              spacing={3}
              width={"90%"}
              margin={"auto"}
              height={"100%"}
              display={"grid"}
              gridTemplateColumns={{
                xs: "1fr",
                sm: "1fr",
                md: "repeat(3,1fr)",
              }}
              columnGap={"20px"}
              rowGap={"20px"}
            >
              {services.map(({ title, image, caption }) => {
                return (
                  <ServiceCard
                    key={title}
                    title={title}
                    caption={caption}
                    image={image}
                  />
                );
              })}
            </Grid>
          </Box>
        </Stack>
      </motion.div>
    </Stack>
  );
}

export default Services;
