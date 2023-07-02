// import Image from "next/image";
"use client";
import styles from "../page.module.css";
import {
  Box,
  Breadcrumbs,
  Grid,
  Link,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import background from "../../assets/images/aboutBackground.avif";
import WhatWeDo from "@/components/Home/WhatWeDo/WhatWeDo";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import SpaIcon from "@mui/icons-material/Spa";
import backgroundOne from "../../components/Home/AboutUs/images/AboutUs.jpeg";
import backgroundForth from "../../assets/images/forth.jpeg";
import backgroundThree from "../../assets/images/third.jpeg";
import backgroundTwo from "../../assets/images/two.jpeg";
import backgroundFifth from "../../assets/images/fifth.jpeg";
import backgroundSix from "../../assets/images/foodImage.jpeg";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useState } from "react";
import TestimonialSvgIcon from "../../assets/Iconsvg/TestimonialSvg";
import { motion } from "framer-motion";
import image1 from "../../assets/images/nature.avif";
// import CarouselFunction from "@/components/Carousel/Carousel";
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

function animations() {
  const hoverScaleEffectWithAnimation = {
    transform: "scale(1)",
    transition: "transform 300ms",
    transitionTimingFunction: "ease-in-out",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& .MuiBox-root": {
      opacity: 0,
      transition: "opacity 300ms ease-in-out",
      width: "85%",
      height: "85%",
      background: "white",
      padding: "15px",
      display: "flex",
      alignItems: "end",
    },
    ":hover": {
      transform: "scale(1.1)",
      transition: "transform 300ms",
      transitionTimingFunction: "ease-in-out",
      "& .MuiBox-root": {
        opacity: 1,
        transition: "opacity 300ms ease-in-out",
      },
    },
  };
  return hoverScaleEffectWithAnimation;
}

const carouselData = [
  {
    title: "slide 1",
    image: image1,
  },
  {
    title: "slide 2",
    image: image1,
  },
  {
    title: "slide 3",
    image: image1,
  },
  {
    title: "slide 4",
    image: image1,
  },
];

const ServiceCard = ({
  image,
  caption,
  title,
}: {
  image: any;
  caption: string;
  title: string;
}) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <Grid
      item
      xs={4}
      height={"100%"}
      onMouseEnter={(e) => {
        setIsHovering(true);
      }}
      onMouseLeave={(e) => {
        setIsHovering(false);
      }}
    >
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          height: "100%",
          borderRadius: "0px",
          cursor: "pointer",
          boxShadow: isHovering
            ? "rgba(149, 157, 165, 0.2) 0px 8px 24px"
            : null,
          transition: "box-shadow 0.3s ease-out",
        }}
        elevation={0}
      >
        <Stack spacing={3} width={"100%"} height={"70%"} alignItems={"center"}>
          <Box textAlign={"center"} color={isHovering ? "#5F2C70" : "black"}>
            {image}
          </Box>
          <Stack
            spacing={2}
            width={"80%"}
            alignItems={"center"}
            textAlign={"center"}
          >
            <Typography
              variant="h4"
              component={"h4"}
              fontSize={"20px"}
              fontWeight={"600"}
              fontFamily={["Kumbh Sans", "sans-serif"]}
              color={"#322038"}
            >
              {title}
            </Typography>
            <Typography
              fontFamily={["Nunito", "sans-serif"]}
              fontSize={"17px"}
              color={" #847988"}
              fontWeight={"400"}
            >
              {caption}
            </Typography>
          </Stack>
          <MoreHorizIcon sx={{ color: isHovering ? "#322038" : "#847988" }} />
        </Stack>
      </Paper>
    </Grid>
  );
};

export default function Home() {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <main className={styles.main}>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        height={"40rem"}
        width={"100%"}
        sx={{
          // background: `url('${background.src}')`,
          // backgroundSize: "cover",
          // backgroundRepeat: "no-repeat",
          // backgroundPositionY: "-350px",
          background: "#fff",
        }}
      >
        <Stack rowGap={"-20px"}>
          <Typography
            variant="h1"
            fontWeight={"700"}
            fontFamily={["Kumbh Sans", "sans-serif"]}
            fontSize={"2.9rem"}
            component={"h1"}
            color={"#322038"}
          >
            Who We Are
          </Typography>
          <Breadcrumbs
            sx={{
              width: "100%",
              // border: "1px solid red",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Link underline="hover" href="/">
              Home
            </Link>
            <Typography>Who we are</Typography>
          </Breadcrumbs>
        </Stack>
      </Box>
      {/* <Box height={"40rem"} border={"1px solid black"}>
        <CarouselFunction data={carouselData} />
      </Box> */}
      <Stack width={"70%"} justifyContent={"center"} height={"46rem"}>
        <Stack
          // border={"1px solid blue"}
          width={"100%"}
          height={"70%"}
          alignItems={"center"}
          spacing={5}
        >
          <Stack spacing={2} width={"90%"}>
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
            <Typography
              variant="h5"
              component={"h5"}
              textAlign={"center"}
              fontFamily={["Kumbh Sans", "sans-serif"]}
              fontWeight={"700"}
              fontSize={"2.5rem"}
              color={"#322038"}
              lineHeight={" 50px"}
            >
              Keeping our center running smoothly
            </Typography>
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
      </Stack>
      <Stack
        height={"83rem"}
        width={"100%"}
        // border={"1px solid black"}
        sx={{ background: "#FFFFFF" }}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography
          color={"#322038"}
          fontFamily={["Kumbh Sans", "sans-serif"]}
          fontSize={"0.8rem"}
          textTransform={"uppercase"}
          fontWeight={"700"}
        >
          Portfolio
        </Typography>
        <Typography
          color={"#322038"}
          fontFamily={["Kumbh Sans", "sans-serif"]}
          fontSize={"2.93781rem"}
          // textTransform={"uppercase"}
          fontWeight={"700"}
        >
          Our memories
        </Typography>
        <Box
          sx={{
            width: "70%",
            height: "74%",
            display: "grid",
            gridTemplateAreas: `'one two two three'
                                'four two two six'
                                'four five five six'`,
          }}
        >
          <Box sx={{ padding: "10px", gridArea: "one" }}>
            <Box width={"100%"} height={"100%"} overflow={"hidden"}>
              <Box
                width={"100%"}
                height={"100%"}
                // border={"1px solid blue"}
                sx={{
                  background: `url('${backgroundOne.src}')`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPositionX: "-100px",
                  ...animations(),
                }}
              >
                <Box>
                  <Typography
                    color={"#322038"}
                    fontFamily={["Kumbh Sans", "sans-serif"]}
                    fontWeight={"700"}
                    fontSize={"1.1rem"}
                  >
                    Holidays
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ padding: "10px", gridArea: "two" }}>
            <Box width={"100%"} height={"100%"} overflow={"hidden"}>
              <Box
                width={"100%"}
                height={"100%"}
                sx={{
                  background: `url('${backgroundTwo.src}')`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPositionX: "-100px",
                  ...animations(),
                }}
              >
                <Box>
                  <Typography
                    color={"#322038"}
                    fontFamily={["Kumbh Sans", "sans-serif"]}
                    fontWeight={"700"}
                    fontSize={"1.1rem"}
                  >
                    Kundalini yoga
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ padding: "10px", gridArea: "three" }}>
            <Box width={"100%"} height={"100%"} overflow={"hidden"}>
              <Box
                width={"100%"}
                height={"100%"}
                // border={"1px solid blue"}
                sx={{
                  background: `url('${backgroundThree.src}')`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPositionX: "-100px",
                  ...animations(),
                }}
              >
                <Box>
                  <Typography
                    color={"#322038"}
                    fontFamily={["Kumbh Sans", "sans-serif"]}
                    fontWeight={"700"}
                    fontSize={"1.1rem"}
                  >
                    Meditation
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ padding: "10px", gridArea: "four" }}>
            <Box width={"100%"} height={"100%"} overflow={"hidden"}>
              <Box
                width={"100%"}
                height={"100%"}
                // border={"1px solid blue"}
                sx={{
                  background: `url('${backgroundForth.src}')`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPositionX: "-50px",
                  ...animations(),
                }}
              >
                <Box>
                  <Typography
                    color={"#322038"}
                    fontFamily={["Kumbh Sans", "sans-serif"]}
                    fontWeight={"700"}
                    fontSize={"1.1rem"}
                  >
                    Children
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ padding: "10px", gridArea: "five" }}>
            <Box width={"100%"} height={"100%"} overflow={"hidden"}>
              <Box
                width={"100%"}
                height={"100%"}
                // border={"1px solid blue"}
                sx={{
                  background: `url('${backgroundFifth.src}')`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  // backgroundPositionX: "-100px",
                  ...animations(),
                }}
              >
                <Box>
                  <Typography
                    color={"#322038"}
                    fontFamily={["Kumbh Sans", "sans-serif"]}
                    fontWeight={"700"}
                    fontSize={"1.1rem"}
                  >
                    Lifestyle
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ padding: "10px", gridArea: "six" }}>
            <Box width={"100%"} height={"100%"} overflow={"hidden"}>
              <Box
                width={"100%"}
                height={"100%"}
                sx={{
                  background: `url('${backgroundSix.src}')`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  // backgroundPositionX: "-100px",
                  ...animations(),
                }}
              >
                <Box>
                  <Typography
                    color={"#322038"}
                    fontFamily={["Kumbh Sans", "sans-serif"]}
                    fontWeight={"700"}
                    fontSize={"1.1rem"}
                  >
                    Delicacies
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Stack>
      <Box
        width={"100%"}
        height={"53rem"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box width={"70%"} height={"75%"}>
          <Stack
            width={"100%"}
            height={"100%"}
            // border={"1px solid red"}
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
              fontSize={"2.93781rem"}
              // textTransform={"uppercase"}
              fontWeight={"700"}
            >
              What people say
            </Typography>
            <Grid container justifyContent={"space-between"} height={"75%"}>
              <Grid
                item
                xs={3.7}
                sx={
                  {
                    // background: "#FFF",
                  }
                }
              >
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
                  <Stack width={"75%"} spacing={3} height={"75%"}>
                    <Box>
                      <TestimonialSvgIcon />
                    </Box>
                    <Typography
                      fontFamily={"Nunito"}
                      fontSize={"1.18rem"}
                      color={"#322038"}
                      lineHeight={"2.12rem"}
                      letterSpacing={"0.000625rem"}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco.
                    </Typography>
                    <Box>
                      <Typography
                        color={"#322038"}
                        fontSize={"1.18rem"}
                        fontFamily={["Kumbh Sans", "sans-serif"]}
                        fontWeight={"700"}
                      >
                        - Sunton Pu
                      </Typography>
                      <Typography
                        color={"#847988"}
                        fontSize={"1rem"}
                        fontFamily={["Nunito", "sans-serif"]}
                        fontWeight={"400"}
                        marginLeft={"15px"}
                      >
                        Boston
                      </Typography>
                    </Box>
                  </Stack>
                </motion.div>
              </Grid>
              <Grid
                item
                xs={3.7}
                // border={"1px solid blue"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                // sx={{ background: "#FFF" }}
              >
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
                  <Stack width={"75%"} spacing={3} height={"75%"}>
                    <Box>
                      <TestimonialSvgIcon />
                    </Box>
                    <Typography
                      fontFamily={"Nunito"}
                      fontSize={"1.18rem"}
                      color={"#322038"}
                      lineHeight={"2.12rem"}
                      letterSpacing={"0.000625rem"}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco.
                    </Typography>
                    <Box>
                      <Typography
                        color={"#322038"}
                        fontSize={"1.18rem"}
                        fontFamily={["Kumbh Sans", "sans-serif"]}
                        fontWeight={"700"}
                      >
                        - Sunton Pu
                      </Typography>
                      <Typography
                        color={"#847988"}
                        fontSize={"1rem"}
                        fontFamily={["Nunito", "sans-serif"]}
                        fontWeight={"400"}
                        marginLeft={"15px"}
                      >
                        Boston
                      </Typography>
                    </Box>
                  </Stack>
                </motion.div>
              </Grid>
              <Grid
                item
                xs={3.7}
                // border={"1px solid blue"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                // sx={{ background: "#FFF" }}
              >
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
                  <Stack width={"75%"} spacing={3} height={"75%"}>
                    <Box>
                      <TestimonialSvgIcon />
                    </Box>
                    <Typography
                      fontFamily={"Nunito"}
                      fontSize={"1.18rem"}
                      color={"#322038"}
                      lineHeight={"2.12rem"}
                      letterSpacing={"0.000625rem"}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco.
                    </Typography>
                    <Box>
                      <Typography
                        color={"#322038"}
                        fontSize={"1.18rem"}
                        fontFamily={["Kumbh Sans", "sans-serif"]}
                        fontWeight={"700"}
                      >
                        - Sunton Pu
                      </Typography>
                      <Typography
                        color={"#847988"}
                        fontSize={"1rem"}
                        fontFamily={["Nunito", "sans-serif"]}
                        fontWeight={"400"}
                        marginLeft={"15px"}
                      >
                        Boston
                      </Typography>
                    </Box>
                  </Stack>
                </motion.div>
              </Grid>
            </Grid>
          </Stack>
        </Box>
      </Box>
    </main>
  );
}
