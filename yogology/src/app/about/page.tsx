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
import PageHeader from "@/components/PageHeader/Header";
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
      // item
      // xs={4}
      // border={"1px solid black"}
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
        <Stack
          spacing={3}
          width={"100%"}
          height={{ sm: "90%", md: "70%" }}
          alignItems={"center"}
        >
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
              fontSize={"1rem"}
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
      <PageHeader title="Who We Are" linkData={[{ name: "Home", link: "/" }]} />
      {/* <Box height={"40rem"} border={"1px solid black"}>
        <CarouselFunction data={carouselData} />
      </Box> */}
      <Stack
        width={{ xs: "75%", sm: "60%", md: "95%", lg: "85%", xl: "70%" }}
        // border={"1px solid blue"}
        justifyContent={"center"}
        height={{ xs: "70rem", sm: "70rem", md: "46rem" }}
      >
        <Stack
          // border={"1px solid blue"}
          width={"100%"}
          height={{ xs: "95%", sm: "94%", md: "70%" }}
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
              fontSize={{ xs: "1.2rem", sm: "2rem", md: "2.5rem" }}
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
      </Stack>
      <Stack
        height={{ xs: "100rem", sm: "83rem" }}
        width={"100%"}
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
          fontSize={{ xs: "2rem", sm: "2.93781rem" }}
          // textTransform={"uppercase"}
          fontWeight={"700"}
        >
          Our memories
        </Typography>
        <Box
          sx={{
            width: { xs: "70%", sm: "90%", md: "85%", lg: "85%", xl: "70%" },
            height: { xs: "90%", sm: "74%" },
            display: "grid",
            gridTemplateAreas: {
              xs: `'two'
                   'two' 
                   'three' 
                   'three'
                   'five'
                   'five' 
                   'six'
                   'six'
                   'four'
                   'four'
                   'one' 
                   'one'`,
              sm: `'two two three three'
                   'five five six six'
                   'four four one one'`,
              md: `'two two three three'
                    'two two six six'
                    'four four one one'
                    'five five one one'`,
              lg: `'one two two three'
                    'four two two six'
                    'four five five six'`,
            },
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
                  backgroundPositionX: { sm: "-100px" },
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
                  backgroundPositionX: { sm: "0px", md: "-100px" },
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
                  backgroundPositionX: { md: "0px", lg: "-100px" },
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
                  backgroundPositionX: { md: "0px", lg: "-50px" },
                  backgroundPositionY: {
                    xs: "-80px",
                    sm: "-80px",
                    md: "-250px",
                    lg: "0px",
                  },
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
              <Grid
                // item
                // xs={3.7}
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
                // item
                // xs={3.7}
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
                // item
                // xs={3.7}
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
                    // border: "1px solid black",
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
