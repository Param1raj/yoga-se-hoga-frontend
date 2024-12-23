"use client";
import { Box, Container, Grid, Icon, Stack, Typography } from "@mui/material";
import React from "react";
import logo from "@/assets/images/FooterLogo.png";
// import CustomIcon from "./icons8-facebook.svg";
import Facebookicon from "@/assets/Iconsvg/FacebookIcon";
import Instagramicon from "@/assets/Iconsvg/InstagramIcon";
import ParticleComp from "@/src/components/Particle";
function Footer() {
  return (
    <Box
      width={"100%"}
      height={{ xs: "52rem", sm: "30rem", md: "31rem" }}
      sx={{ background: "#1D0427", zIndex: 10 }}
      // border={"1px solid white"}
      // padding={"30px"}
    >
      <Box
        position={"absolute"}
        left={"0px"}
        // bottom={"0px"}
        width={"100%"}
        height={{ xs: "50rem", sm: "30rem", md: "30rem" }}
        // border={"1px solid red"}
      >
        <ParticleComp />
      </Box>
      <Container
        sx={{
          // border: "1px solid red",
          // padding: "20px",
          height: "100%",
          width: { md: "100%", lg: "80%" },
          display: "flex",
          alignItems: { xs: "center", md: "flex-end" },
          // position: "absolute",
        }}
      >
        <Stack
          // margin={"0px"}
          // position={"relative"}
          width={"100%"}
          height={{ xs: "90%", sm: "90%", md: "78%" }}
          //
          sx={
            {
              // backgroundColor: "#1D0427",
              // border: "1px solid red",
            }
          }
        >
          <Grid
            border={"1px solid white"}
            borderRadius={"10px"}
            height={{ xs: "95%", sm: "75%", lg: "85%" }}
            display={"grid"}
            gridTemplateColumns={{
              xs: "1fr",
              sm: "20% 35% 15% 30%",
              md: "repeat(4,1fr)",
            }}
            padding={{ xs: "10px", md: "20px" }}
            zIndex={10}
            sx={{ backgroundColor: { xs: "#1D0427" } }}
          >
            <Grid
              paddingX={{ sm: "20px" }}
              paddingY={{ sm: "0px" }}
              height={{ xs: "85%", sm: "100%" }}
              color={"white"}
            >
              <Box
                width={{ xs: "50%", sm: "100%", md: "40%" }}
                height={{ xs: "100%", md: "25%" }}
                position={"relative"}
                paddingX={{ xs: "20px", sm: "20px" }}
                // border={"1px solid red"}
                sx={{
                  background: `url('${logo.src}')`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                }}
              ></Box>
            </Grid>
            <Grid position={"relative"} item height={"100%"}>
              <Stack
                // border={"1px solid yellow"}
                spacing={"15px"}
                height={"100%"}
              >
                <Typography
                  variant={"h6"}
                  component={"h6"}
                  fontFamily={["Kumbh Sans", "sans-serif"]}
                  color={"white"}
                  fontWeight={"700"}
                >
                  Office
                </Typography>
                <Stack spacing={"10px"}>
                  <Typography
                    color={"#BCB4BF"}
                    fontFamily={["Nunito", "sans-serif"]}
                    variant={"body1"}
                    component={"p"}
                  >
                    Delhi
                  </Typography>
                  <Typography
                    color={"#BCB4BF"}
                    fontFamily={["Nunito", "sans-serif"]}
                    variant={"body1"}
                    component={"p"}
                  >
                    785 15h Street, Office 478
                  </Typography>
                  <Typography
                    color={"#BCB4BF"}
                    fontFamily={["Nunito", "sans-serif"]}
                    variant={"body1"}
                    component={"p"}
                  >
                    Berlin, De 81566
                  </Typography>
                </Stack>
                <Typography
                  variant="body1"
                  fontFamily={["Nunito", "sans-serif"]}
                  color={"#BCB4BF"}
                  component={"p"}
                  sx={{ cursor: "pointer" }}
                >
                  manishkumar@gmail.com
                </Typography>
                <Typography
                  variant="body1"
                  fontFamily={["Nunito", "sans-serif"]}
                  color={"#FEFCFF"}
                  fontWeight={"700"}
                  component={"p"}
                  sx={{ cursor: "pointer" }}
                >
                  +91 9717913389
                </Typography>
              </Stack>
            </Grid>
            <Grid position={"relative"} item height={"100%"}>
              <Stack
                // border={"1px solid yellow"}
                spacing={"10px"}
                height={"100%"}
              >
                <Typography
                  variant={"h6"}
                  component={"h6"}
                  fontFamily={["Kumbh Sans", "sans-serif"]}
                  color={"white"}
                  fontWeight={"700"}
                >
                  Links
                </Typography>
                <Typography
                  variant="body1"
                  fontFamily={["Nunito", "sans-serif"]}
                  color={"#BCB4BF"}
                  component={"p"}
                  sx={{ cursor: "pointer" }}
                >
                  Home
                </Typography>
                <Typography
                  variant="body1"
                  fontFamily={["Nunito", "sans-serif"]}
                  color={"#BCB4BF"}
                  component={"p"}
                  sx={{ cursor: "pointer" }}
                >
                  Services
                </Typography>
                <Typography
                  variant="body1"
                  fontFamily={["Nunito", "sans-serif"]}
                  color={"#BCB4BF"}
                  component={"p"}
                  sx={{ cursor: "pointer" }}
                >
                  About Us
                </Typography>
                <Typography
                  variant="body1"
                  fontFamily={["Nunito", "sans-serif"]}
                  color={"#BCB4BF"}
                  component={"p"}
                  sx={{ cursor: "pointer" }}
                >
                  Visit Us
                </Typography>
                <Typography
                  variant="body1"
                  fontFamily={["Nunito", "sans-serif"]}
                  color={"#BCB4BF"}
                  component={"p"}
                  sx={{ cursor: "pointer" }}
                >
                  Contacts
                </Typography>
              </Stack>
            </Grid>
            <Grid position={"relative"} item height={"100%"}>
              <Stack
                // border={"1px solid yellow"}
                spacing={"20px"}
                height={"100%"}
              >
                <Typography
                  variant={"h6"}
                  component={"h6"}
                  fontFamily={["Kumbh Sans", "sans-serif"]}
                  color={"white"}
                  fontWeight={"700"}
                >
                  Get in touch
                </Typography>
                <Grid
                  // container
                  display={{ xs: "flex", sm: "grid" }}
                  gridTemplateColumns={{
                    xs: "repeat(2,1fr)",
                    sm: "repeat(4,1fr)",
                    md: "repeat(4,1fr)",
                  }}
                >
                  <Grid>
                    <Facebookicon />
                  </Grid>
                  <Grid>
                    <Instagramicon />
                  </Grid>
                </Grid>
              </Stack>
            </Grid>
          </Grid>
          <Stack
            height={{ xs: "10%", sm: "25%" }}
            borderTop={"1px solid #321E39"}
            justifyContent={"center"}
          >
            <Box display={"flex"}>
              <Typography
                variant="body1"
                component={"p"}
                fontFamily={["Kumbh Sans", "sans-serif"]}
                color={"#BCB4BF"}
                fontWeight={"400"}
              >
                Yogaratha @ 2023. All Rights Reserved{" "}
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
