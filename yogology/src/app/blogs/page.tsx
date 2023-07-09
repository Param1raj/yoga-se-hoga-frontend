// import Image from "next/image";
"use client";
import HoverImage from "@/components/Home/WhatWeDo/HoverImage";
import styles from "../page.module.css";
import { Box, Breadcrumbs, Grid, Link, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import blogImage from "../../assets/images/BlogImage.jpeg";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import PageHeader from "@/components/PageHeader/Header";
import { useRouter } from "next/navigation";
const demoArray = [1, 2, 3, 4];

function HoverScaleImage() {
  return (
    <Box
      width={"100%"}
      height={"100%"}
      // border={"1px solid black"}
      overflow={"hidden"}
    >
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
        initial={{ x: -95 }}
        whileHover={{ x: 0 }}
        style={{
          width: "150px",
          height: "100%",
          display: "flex",
          alignItems: "center",
          // justifyContent: "center",
          // border: "1px solid black",
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
  const router = useRouter();
  return (
    <main className={styles.main}>
      <PageHeader title="Blogs" linkData={[{ name: "Home", link: "/" }]} />
      <Box
        width={"100%"}
        height={"fit-content"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box
          width={{ xs: "97%", sm: "95%", md: "95%", lg: "90%", xl: "70%" }}
          height={"100%"}
          overflow={"scroll"}
          // position={"sticky"}
          // top={"100px"}
          sx={{
            scrollBehavior: "smooth",
            "&::-webkit-scrollbar": {
              width: "1px",
            },
          }}
          // border={"1px solid black"}
          padding={{ x: "5px", sm: "10px", md: "10px", lg: "30px" }}
        >
          {demoArray.map((data, index) => (
            <Box
              key={data}
              height={{ xs: "60%", sm: "60%", md: "50%" }}
              marginBottom={{ xs: "160px", md: "50px" }}
              sx={{ cursor: "pointer" }}
              onClick={() => {
                router.replace(`/blogs/${data}`);
              }}
            >
              {index % 2 == 0 ? (
                <>
                  <Grid
                    display={"grid"}
                    gridTemplateColumns={{
                      xs: "1fr",
                      sm: "1fr",
                      md: "50% 50%",
                      lg: "repeat(2,1fr)",
                    }}
                    gridTemplateRows={{ xs: "50% 50%", md: "100%" }}
                    rowGap={"10px"}
                    height={"100%"}
                    width={"100%"}
                    padding={{ sm: "5px", md: "5px", lg: "20px" }}
                  >
                    <Grid display={{ xs: "none", md: "block" }}>
                      <Stack
                        spacing={{ sm: "10px", md: "20px" }}
                        padding={"10px"}
                      >
                        <Typography
                          variant="h1"
                          component={"h2"}
                          color={"#322038"}
                          fontFamily={["Kumbh Sans", "sans-serif"]}
                          fontWeight={"700"}
                          letterSpacing={"-0.0.281rem"}
                          lineHeight={"2.3rem"}
                          fontSize={{ sm: "1.5rem", md: "2rem", lg: "2.18rem" }}
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
                          fontSize={{ sm: "1rem", md: "1.06rem" }}
                        >
                          Q Proin faucibus nec mauris a sodales, sed elementum
                          mi tincidunt. Sed eget viverra egestas nisi in
                          consequat. Fusce sodales augue a accumsan. Cras
                          sollicitudin, ipsum eget blandit pulvinar. Integer…
                        </Typography>
                        <ToLeftTextAnimation />
                      </Stack>
                    </Grid>
                    <Grid display={{ xs: "none", md: "block" }}>
                      <HoverScaleImage />
                    </Grid>
                    <Grid display={{ xs: "block", md: "none" }}>
                      <HoverScaleImage />
                    </Grid>
                    <Grid
                      display={{ xs: "block", md: "none" }}
                      // border={"1px solid black"}
                    >
                      <Stack
                        spacing={{ xs: "10px", sm: "10px", md: "20px" }}
                        padding={"10px"}
                        // border={"1px solid black"}
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
                          fontSize={{ sm: "1rem", md: "1.06rem" }}
                        >
                          Q Proin faucibus nec mauris a sodales, sed elementum
                          mi tincidunt. Sed eget viverra egestas nisi in
                          consequat. Fusce sodales augue a accumsan. Cras
                          sollicitudin, ipsum eget blandit pulvinar. Integer…
                        </Typography>
                        <ToLeftTextAnimation />
                      </Stack>
                    </Grid>
                  </Grid>
                </>
              ) : (
                <>
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
                  </Grid>
                </>
              )}
              {/* </Grid> */}
            </Box>
          ))}
        </Box>
      </Box>
    </main>
  );
}
