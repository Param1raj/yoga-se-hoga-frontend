"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import ContentItems from "./ContentItems";
import temple1 from "./images/temple4.avif";
import temple2 from "./images/temple2.avif";
import temple3 from "./images/temple3.avif";
export function Content() {
  return (
    <Box
      width={{ xs: "90%", sm: "80%", md: "70%", lg: "70%", xl: "80%" }}
      height={{
        xs: "113rem",
        sm: "198rem",
        md: "198rem",
        lg: "100rem",
        xl: "80rem",
      }}
      display={"flex"}
      flexDirection={"column"}
      rowGap={{ xs: "20px", xl: "40px" }}
      marginBottom={{ xs: "0px", sm: "20px" }}
    >
      <Box
        height={{
          xs: "5%",
          sm: "3.5%",
          md: "2  %",
          lg: "8%",
          xl: "fit-content",
        }}
        width={"100%"}
        display={"flex"}
        alignItems={"end"}
        marginTop={{ xs: "10px", sm: "50px", md: "10px", xl: "150px" }}
        // border={"1px solid blue"}
      >
        <Typography
          fontWeight={"700"}
          fontSize={{ xs: "2rem", lg: "2.5rem", xl: "3rem" }}
          fontFamily={["Kumbh Sans", "sans-serif"]}
          component={"h2"}
          color={"#5F2C70"}
        >
          Explore by categories
        </Typography>
      </Box>
      <Box
        // border={"1px solid blue"}
        width={"100%"}
        height={{ xs: "90%", md: "90%", lg: "90%", xl: "40%" }}
        display={"grid"}
        gridTemplateColumns={{
          xs: "100%",
          lg: "repeat(2,1fr)",
          xl: "repeat(3,1fr)",
        }}
        columnGap={"20px"}
        rowGap={{ xs: "0px", sm: "20px" }}
      >
        <ContentItems
          title={"Yoga for well being"}
          description="200 hotels, 345 local flights and 234 bus providers"
          image={temple1.src}
        />
        <ContentItems
          title={"Daily life problems"}
          description="200 hotels, 345 local flights and 234 bus providers"
          image={temple2.src}
        />
        <ContentItems
          title={"Yoga for well being"}
          description="200 hotels, 345 local flights and 234 bus providers"
          image={temple1.src}
        />
        <ContentItems
          title={"Solutions life problems"}
          description="200 hotels, 345 local flights and 234 bus providers"
          image={temple2.src}
        />
        <ContentItems
          title={"Diets for well being"}
          description="200 hotels, 345 local flights and 234 bus providers"
          image={temple3.src}
        />
      </Box>
    </Box>
  );
}
