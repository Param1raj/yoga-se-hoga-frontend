import { Box, Typography } from "@mui/material";
import React from "react";
// import Typical from "react-typical";
// import Typewriter from "typewriter-effect";
function YogaQuetes() {
  return (
    <Box
      // border={"1px solid  #5F2C70"}
      sx={{ background: " #5F2C70" }}
      width={"100%"}
      height={{ sm: "20rem", md: "26rem", lg: "26rem", xl: "31rem" }}
    >
      <Box
        width={{ sm: "100%", md: "70%" }}
        height={"100%"}
        // border={"1px solid blue"}
        margin={"auto"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box
          textAlign={"center"}
          width={"80%"}
          // border={"1px solid red"}
          color={"#FFFFFF"}
          display={"flex"}
          flexDirection={"column"}
          gap={"50px"}
        >
          <Typography
            variant="caption"
            fontFamily={"sans-serif"}
            textTransform={"uppercase"}
            fontWeight={700}
            fontSize={"14px"}
          >
            The Ultimate wishdom
          </Typography>
          <Typography
            variant="h4"
            component={"h4"}
            fontFamily={["kumbh Sans", "sans-serif"]}
            fontWeight={700}
            fontSize={{ sm: "1rem", md: "1.2rem", lg: "1.5rem", xl: "2.1rem" }}
          >
            Awaken your true self through yoga. Find liberation, peace, and
            harmony as Mind, body.
            <Typography
              variant="h4"
              component={"h5"}
              fontFamily={["kumbh Sans", "sans-serif"]}
              fontWeight={700}
              sx={{ textDecoration: "underline", borderWidth: "5px" }}
              fontSize={{
                sm: "1rem",
                md: "1.2rem",
                lg: "1.5rem",
                xl: "2.1rem",
              }}
            >
              - buddha
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default YogaQuetes;
