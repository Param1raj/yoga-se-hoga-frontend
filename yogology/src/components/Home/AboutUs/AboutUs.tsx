import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Images from "./images/AboutUs.jpeg";
import ButtonComp from "../../ButtonComp";
import { motion } from "framer-motion";
import { BoxVariant } from "@/Utils/animations/variants/boxVariant";
function AboutUs() {
  const imageVariant = {
    hidden: {
      opacity: [0, 0, 0, 0, 0],
      x: "400px",
    },
    visible: {
      opacity: [0, 0.3, 0.6, 0.9, 1],
      x: "0px",
    },
  };

  const textVariant = {
    hidden: {
      opacity: 0,
      x: "-200px",
    },
    visible: {
      opacity: 1,
      x: "0px",
    },
  };
  return (
    <Box
      marginTop={"100px"}
      margin={"10px"}
      sx={{
        width: { sm: "95%", md: "100%", lg: "100%" },
        height: {
          xs: "55rem",
          sm: "55rem",
          md: "30rem",
          lg: "30rem",
          xl: "41rem",
        },
      }}
    >
      <motion.div
        variants={BoxVariant}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true }}
        style={{ width: "100%", height: "100%" }}
      >
        <Grid
          container
          spacing={{ md: 0, lg: 0, xl: 0 }}
          sx={{
            width: "100%",
            height: "100%",
            display: { xs: "grid" },
            gridTemplateColumns: {
              xs: "100%",
              sm: "100%",
              md: "repeat(2,1fr)",
            },
            gridTemplateRows: { xs: "30% 70%", sm: "50% 50%", md: "100%" },
          }}
          // border={"1px solid blue"}
        >
          <Grid item>
            <motion.div variants={imageVariant} style={{ height: "100%" }}>
              <Box
                // border={"1px solid red"}
                // xs={6.3}
                height={"100%"}
                sx={{
                  background: `url('${Images.src}')`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></Box>
            </motion.div>
          </Grid>
          <Grid
            item
            margin={"auto"}
            marginTop={{ xs: "1.5rem", lg: "3rem", xl: "7rem" }}
            width={{ xs: "80%" }}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <motion.p variants={textVariant}>
              <Typography
                variant="h4"
                fontFamily={["Kumbh Sans", " sans-serif"]}
                sx={{
                  fontWeight: "700",
                  fontStyle: "normal",
                  position: "relative",
                  right: { md: "7rem", lg: "7rem", xl: "10rem" },
                  fontSize: {
                    xs: "1.4rem",
                    sm: "1.4rem",
                    md: "1.5rem",
                    lg: "1.8rem",
                    xl: "2.5rem",
                  },
                  lineHeight: { sm: "2rem", md: "2.394rem" },
                }}
                // border={'1px solid black'}
                component={"h4"}
                textAlign={{ xs: "left", md: "left" }}
              >
                Living in harmony: Krishna's spiritual teachings for modern life
                in the material world.
              </Typography>
            </motion.p>
            <Stack
              spacing={{ xs: 1.4, md: 2, lg: 3, xl: 4 }}
              sx={{ width: { xs: "92%", lg: "85%", xl: "70%" } }}
              color={"#847988"}
              marginTop={{
                xs: "1rem",
                md: "1.1rem",
                lg: "1.2rem",
                xl: "2.1rem",
              }}
              marginLeft={{ md: "1.8rem", lg: "2rem", xl: "1rem" }}
              // border={"1px solid blue"}
              alignItems={{ xs: "center", md: "normal" }}
            >
              <motion.p variants={textVariant}>
                <Typography
                  variant="body1"
                  component={"p"}
                  fontFamily={["Nunito", "sans-serif"]}
                  fontSize={"1rem"}
                  textAlign={{ xs: "left", md: "left" }}
                >
                  Experience the synergy of ancient wisdom and contemporary
                  living on our website, and allow Krishna's teachings to
                  illuminate your path towards a more meaningful and balanced
                  existence.{" "}
                </Typography>
              </motion.p>
              <motion.p variants={textVariant}>
                <Typography
                  variant="body1"
                  component={"p"}
                  fontFamily={["Nunito", "sans-serif"]}
                  fontSize={"1rem"}
                  textAlign={{ xs: "left", md: "left" }}
                >
                  We invite you to embark on a transformative journey of
                  self-discovery, guided by the timeless wisdom of Krishna.
                  Embrace a life of purpose, inner peace, and fulfillment as you
                  unlock the secrets of living in harmony amidst the bustling
                  material world.{" "}
                </Typography>
              </motion.p>
              <motion.p variants={textVariant}>
                <ButtonComp text={"About"} link="/about" />
              </motion.p>
            </Stack>
          </Grid>
        </Grid>
      </motion.div>
    </Box>
  );
}

export default AboutUs;
