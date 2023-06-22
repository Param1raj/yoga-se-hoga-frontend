"use client";
import React from "react";
import style from "./page.module.css";
import { Box, Container, Stack, Typography } from "@mui/material";
import background from "../../../assets/images/SubscriptionBackground.png";
function page() {
  return (
    <div className={style.main}>
      <Box
        width={"100%"}
        height={"34rem"}
        sx={{
          background: `url('${background.src}')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPositionY: "-250px",
        }}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Stack width={"35%"} height={"30%"} textAlign={"center"}>
          <Typography
            variant="h2"
            component="h2"
            fontSize={"3.5rem"}
            fontFamily={("Kumbh Sans", "sans-serif")}
            fontWeight={"500"}
            color={"#5F2C70"}
          >
            Yamas and Niyamas
          </Typography>
          <Typography
            variant="body1"
            component={"p"}
            fontFamily={("Nunito", "sans-serif")}
            fontSize={"1.5rem"}
            color={"#5F2C70"}
          >
            Learn the foundations of yoga in this online course
          </Typography>
        </Stack>
      </Box>
      <Box width={"100%"} height={"100vh"}>
        <Container
          sx={{
            // border: "1px solid gray",
            height: "100%",
            position: "relative",
            bottom: 70,
            borderRadius: "10px",
            backgroundColor: "#fcfcfa",
            // boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
          }}
        ></Container>
      </Box>
    </div>
  );
}

export default page;
