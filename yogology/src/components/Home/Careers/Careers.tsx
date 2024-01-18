"use client";
import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import image1 from "@/assets/images/Careers-1.jpeg";
import image2 from "@/assets/images/Careers-2.jpeg";
import ButtonComp from "@/src/components/ButtonComp";
import { motion } from "framer-motion";
import { BoxVariant } from "@/src/Utils/animations/variants/boxVariant";

type GridCompProps = {
  image: string;
  head: string;
  title: string;
  ButtonText: string;
};

function GridComp({ image, head, title, ButtonText }: GridCompProps) {
  const TextVariant = {
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
    <Grid item>
      <motion.div
        style={{ height: "100%" }}
        variants={BoxVariant}
        whileInView={"visible"}
        initial={"hidden"}
        viewport={{ once: true }}
      >
        <Box
          sx={{
            background: `url('${image}')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "100%",
          }}
        >
          <Stack
            // border={"1px solid red"}
            height={"100%"}
            sx={{ background: "rgba(70, 0, 0, 0.3)" }}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Stack
              // border={"1px solid red"}
              width={{ xs: "90%", sm: "80%" }}
              height={"30%"}
              spacing={3}
            >
              <motion.p variants={TextVariant}>
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
              </motion.p>
              <motion.p variants={TextVariant}>
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
              </motion.p>
              <motion.div variants={TextVariant}>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <ButtonComp text={ButtonText} link="/contact" />
                </Box>
              </motion.div>
            </Stack>
          </Stack>
        </Box>
      </motion.div>
    </Grid>
  );
}

function Careers() {
  return (
    <Grid
      container
      // sx={{ border: "1px solid red" }}
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
