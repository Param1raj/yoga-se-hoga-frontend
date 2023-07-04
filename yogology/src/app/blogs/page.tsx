// import Image from "next/image";
"use client";
import HoverImage from "@/components/Home/WhatWeDo/HoverImage";
import styles from "../page.module.css";
import { Box, Breadcrumbs, Grid, Link, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import blogImage from "../../assets/images/BlogImage.jpeg";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
const demoArray = [1, 2, 3, 4];

function HoverScaleImage() {
  return (
    <Box width={"100%"} height={"100%"} overflow={"hidden"}>
      <motion.div
        style={{
          width: "100%",
          height: "100%",
          background: `url('${blogImage.src}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        whileHover={{ scale: 1.2 }}
        transition={{ type: "tween" }}
      ></motion.div>
    </Box>
  );
}

function ToLeftTextAnimation() {
  return (
    <Box height={"fit-content"} overflow={"hidden"}>
      <motion.div
        initial={{ x: -110 }}
        whileHover={{ x: 0 }}
        style={{
          width: "150px",
          height: "100%",
          display: "flex",
          alignItems: "center",
          // justifyContent: "center",
        }}
        transition={{ type: "tween" }}
      >
        <Typography
          fontFamily={["Nunito", "sans-serif"]}
          fontWeight={"700"}
          color={"#322038"}
        >
          Read More
        </Typography>
        <ArrowRightAltOutlinedIcon sx={{ width: "45px", height: "40px" }} />
      </motion.div>
    </Box>
  );
}

export default function Home() {
  return (
    <main className={styles.main}>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        height={"20rem"}
        width={"100%"}
        sx={
          {
            // background: `url('${background.src}')`,
            // backgroundSize: "cover",
            // backgroundRepeat: "no-repeat",
            // backgroundPositionY: "-350px",
            // background: "#fff",
          }
        }
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
            Blogs
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
            <Typography>Blogs</Typography>
          </Breadcrumbs>
        </Stack>
      </Box>
      <Box
        width={"100%"}
        height={"100vh"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box
          width={"70%"}
          height={"100%"}
          overflow={"scroll"}
          position={"sticky"}
          top={"100px"}
          sx={{ scrollBehavior: "smooth" }}
        >
          {demoArray.map((_, index) => (
            <Box
              height={"50%"}
              marginBottom={"50px"}
              sx={{ cursor: "pointer" }}
            >
              <Grid container height={"100%"} width={"100%"}>
                {index % 2 == 0 ? (
                  <>
                    <Grid item xs={5}>
                      <Stack padding={"30px"} spacing={"20px"}>
                        <Typography
                          variant="h1"
                          component={"h2"}
                          color={"#322038"}
                          fontFamily={["Kumbh Sans", "sans-serif"]}
                          fontWeight={"700"}
                          letterSpacing={"-0.0.281rem"}
                          lineHeight={"2.3rem"}
                          fontSize={"2.18rem"}
                        >
                          The difference between mindful practice and meditation
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
                          Apr 26, 2023
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
                          Q Proin faucibus nec mauris a sodales, sed elementum
                          mi tincidunt. Sed eget viverra egestas nisi in
                          consequat. Fusce sodales augue a accumsan. Cras
                          sollicitudin, ipsum eget blandit pulvinar. Integer…
                        </Typography>
                        <ToLeftTextAnimation />
                      </Stack>
                    </Grid>
                    <Grid item xs={7}>
                      <HoverScaleImage />
                    </Grid>
                  </>
                ) : (
                  <>
                    <Grid item xs={7}>
                      <HoverScaleImage />
                    </Grid>
                    <Grid item xs={5}>
                      <Stack
                        // border={"1px solid blue"}
                        padding={"30px"}
                        spacing={"20px"}
                      >
                        <Typography
                          variant="h1"
                          component={"h2"}
                          color={"#322038"}
                          fontFamily={["Kumbh Sans", "sans-serif"]}
                          fontWeight={"700"}
                          letterSpacing={"-0.0.281rem"}
                          lineHeight={"2.3rem"}
                          fontSize={"2.18rem"}
                        >
                          The difference between mindful practice and meditation
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
                          Apr 26, 2023
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
                          Q Proin faucibus nec mauris a sodales, sed elementum
                          mi tincidunt. Sed eget viverra egestas nisi in
                          consequat. Fusce sodales augue a accumsan. Cras
                          sollicitudin, ipsum eget blandit pulvinar. Integer…
                        </Typography>
                        <ToLeftTextAnimation />
                      </Stack>
                    </Grid>
                  </>
                )}
              </Grid>
            </Box>
          ))}
        </Box>
      </Box>
    </main>
  );
}
