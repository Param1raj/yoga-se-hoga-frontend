"use client";
import { Box, Container, Grid, Icon, Stack, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/images/FooterLogo.png";
// import CustomIcon from "./icons8-facebook.svg";
import Facebookicon from "../../assets/Iconsvg/FacebookIcon";
import Instagramicon from "../../assets/Iconsvg/InstagramIcon";
function Footer() {
  return (
    <Box width={"100%"} height={"30rem"} sx={{ background: "#1D0427" }}>
      <Container
        sx={{
          // border: "1px solid red",
          // padding: "0px",
          height: "100%",
          width: "80%",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <Stack
          // border={"1px solid yellow"}
          // margin={"0px"}
          width={"100%"}
          height={"78%"}
        >
          <Grid height={"75%"} spacing={2} container>
            <Grid
              item
              xs={3}
              // border={"1px solid yellow"}
              padding={"20px"}
              height={"100%"}
              color={"white"}
            >
              <Box
                width={"40%"}
                height={"25%"}
                // border={"1px solid yellow"}
                sx={{
                  background: `url('${logo.src}')`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                }}
              ></Box>
            </Grid>
            <Grid item xs={3} height={"100%"}>
              <Stack
                // border={"1px solid yellow"}
                spacing={"20px"}
                height={"100%"}
              >
                <Typography
                  variant={"h6"}
                  component={"h6"}
                  fontFamily={("Kumbh Sans", "sans-serif")}
                  color={"white"}
                  fontWeight={"700"}
                >
                  Office
                </Typography>
                <Stack spacing={"10px"}>
                  <Typography
                    color={"#BCB4BF"}
                    fontFamily={("Nunito", "sans-serif")}
                    variant={"body1"}
                    component={"p"}
                  >
                    Delhi
                  </Typography>
                  <Typography
                    color={"#BCB4BF"}
                    fontFamily={("Nunito", "sans-serif")}
                    variant={"body1"}
                    component={"p"}
                  >
                    785 15h Street, Office 478
                  </Typography>
                  <Typography
                    color={"#BCB4BF"}
                    fontFamily={("Nunito", "sans-serif")}
                    variant={"body1"}
                    component={"p"}
                  >
                    Berlin, De 81566
                  </Typography>
                </Stack>
                <Typography
                  variant="body1"
                  fontFamily={("Nunito", "sans-serif")}
                  color={"#BCB4BF"}
                  component={"p"}
                  sx={{ cursor: "pointer" }}
                >
                  manishkumar@gmail.com
                </Typography>
                <Typography
                  variant="body1"
                  fontFamily={("Nunito", "sans-serif")}
                  color={"#FEFCFF"}
                  fontWeight={"700"}
                  component={"p"}
                  sx={{ cursor: "pointer" }}
                >
                  +91 9717913389
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={3} height={"100%"}>
              <Stack
                // border={"1px solid yellow"}
                spacing={"20px"}
                height={"100%"}
              >
                <Typography
                  variant={"h6"}
                  component={"h6"}
                  fontFamily={("Kumbh Sans", "sans-serif")}
                  color={"white"}
                  fontWeight={"700"}
                >
                  Links
                </Typography>
                <Typography
                  variant="body1"
                  fontFamily={("Nunito", "sans-serif")}
                  color={"#BCB4BF"}
                  component={"p"}
                  sx={{ cursor: "pointer" }}
                >
                  Home
                </Typography>
                <Typography
                  variant="body1"
                  fontFamily={("Nunito", "sans-serif")}
                  color={"#BCB4BF"}
                  component={"p"}
                  sx={{ cursor: "pointer" }}
                >
                  Services
                </Typography>
                <Typography
                  variant="body1"
                  fontFamily={("Nunito", "sans-serif")}
                  color={"#BCB4BF"}
                  component={"p"}
                  sx={{ cursor: "pointer" }}
                >
                  About Us
                </Typography>
                <Typography
                  variant="body1"
                  fontFamily={("Nunito", "sans-serif")}
                  color={"#BCB4BF"}
                  component={"p"}
                  sx={{ cursor: "pointer" }}
                >
                  Visit Us
                </Typography>
                <Typography
                  variant="body1"
                  fontFamily={("Nunito", "sans-serif")}
                  color={"#BCB4BF"}
                  component={"p"}
                  sx={{ cursor: "pointer" }}
                >
                  Contacts
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={3} height={"100%"}>
              <Stack
                // border={"1px solid yellow"}
                spacing={"20px"}
                height={"100%"}
              >
                <Typography
                  variant={"h6"}
                  component={"h6"}
                  fontFamily={("Kumbh Sans", "sans-serif")}
                  color={"white"}
                  fontWeight={"700"}
                >
                  Get in touch
                </Typography>
                <Grid container>
                  <Grid item xs={2}>
                    <Facebookicon />
                  </Grid>
                  <Grid item xs={2}>
                    <Instagramicon />
                  </Grid>
                  <Grid item xs={2}></Grid>
                  <Grid item xs={2}></Grid>
                </Grid>
              </Stack>
            </Grid>
          </Grid>
          <Stack
            height={"25%"}
            borderTop={"1px solid #321E39"}
            justifyContent={"center"}
          >
            <Box display={"flex"}>
              <Typography
                variant="body1"
                component={"p"}
                fontFamily={("Kumbh Sans", "sans-serif")}
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