"use client";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import image1 from "@/assets/images/Grid-1.jpeg";
import image2 from "@/assets/images/Grid-2.jpeg";
import image3 from "@/assets/images/Grid-3.jpeg";
import HoverImage from "./HoverImage";
import ButtonComp from "@/src/components/ButtonComp";
import { motion } from "framer-motion";
import { BoxVariant } from "@/src/Utils/animations/variants/boxVariant";

const hoverData = [
  {
    image: image1.src,
    title: "Meditations",
  },
  {
    image: image2.src,
    title: "Yogas",
  },
  {
    image: image3.src,
    title: "Courses",
  },
];

function WhatWeDo() {
  const textVariant = {
    hidden: {
      opacity: 0,
      y: "100px",
    },
    visible: {
      opacity: 1,
      y: "0px",
    },
  };

  const itemBoxVariant = {
    hidden: {
      opacity: [0, 0, 0, 0],
    },
    visible: {
      opacity: [0.1, 0.4, 0.7, 1],
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariant = {
    hidden: {
      opacity: 0,
      y: "100px",
    },
    visible: {
      opacity: 1,
      y: "0px",
    },
  };

  return (
    <Box
      width={{ xs: "100%", sm: "100%", md: "100%", lg: "90%", xl: "90%" }}
      height={{
        xs: "70rem",
        sm: "80rem",
        md: "47rem",
        lg: "47rem",
        xl: "56rem",
      }}
    >
      <motion.div
        style={{ width: "100%", height: "100%" }}
        variants={BoxVariant}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true }}
      >
        <Stack
          width={"100%"}
          height={"100%"}
          padding={{
            xs: "20px",
            sm: "20px",
            md: "50px",
            lg: "10px",
            xl: "10px",
          }}
          justifyContent={"center"}
          alignItems={"center"}
          // border={"1px solid blue"}
          sx={{ background: { xs: "#FFF", md: "none" } }}
        >
          <Stack
            // border={"1px solid blue"}
            width={"100%"}
            height={{ xs: "90%", lg: "80%" }}
            alignItems={"center"}
            spacing={{ xs: 4, sm: 1, md: 5, lg: 5, xl: 10 }}
          >
            <Stack
              spacing={{ xs: 2, md: 3, lg: 2 }}
              width={{ xs: "95%", sm: "60%" }}
            >
              <motion.p variants={textVariant}>
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
              <motion.p variants={textVariant}>
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
              </motion.p>
            </Stack>
            <Box
              width={{
                xs: "90%",
                sm: "84%",
                md: "100%",
                lg: "100%",
                xl: "80%",
              }}
              height={{ xs: "100%", md: "60%" }}
            >
              <motion.div
                variants={itemBoxVariant}
                style={{ width: "100%", height: "100%" }}
                whileInView={"visible"}
                initial="hidden"
                viewport={{ once: true }}
              >
                <Grid
                  container
                  columnGap={{ md: "1rem", lg: "1rem" }}
                  rowGap={{ xs: "2rem", sm: "1rem" }}
                  justifyContent={"space-between"}
                  width={"100%"}
                  height={"100%"}
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      xs: "1fr",
                      sm: "1fr",
                      md: "repeat(3,1fr)",
                    },
                    gridTemplateRows: { xs: "30% 30% 30%", md: "100%" },
                  }}
                  // border={"1px solid red"}
                >
                  {hoverData.map(({ image, title }) => (
                    <Box height={"100%"} key={title}>
                      <motion.div
                        variants={itemVariant}
                        style={{ height: "100%" }}
                      >
                        <HoverImage image={image} title={title} />
                      </motion.div>
                    </Box>
                  ))}
                </Grid>
              </motion.div>
            </Box>
            <motion.div variants={itemVariant}>
              <ButtonComp text={"More About Us"} link="/about" />
            </motion.div>
          </Stack>
        </Stack>
      </motion.div>
    </Box>
  );
}

export default WhatWeDo;
