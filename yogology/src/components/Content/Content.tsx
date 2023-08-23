"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import ContentItems from "./ContentItems";
import course from "./images/course.avif";
import meditation from "./images/meditation.avif";
import solutions from "./images/problems.avif";
import diets from "./images/diets.avif";
import texts from "./images/vedas.avif";
import LoginProtects from "@/app/RouteProtects/LoginProtects";
// import temple1 from "./images/yoga.avif";
export function Content() {
  return (
    // <LoginProtects>
    <Box
      width={{ xs: "90%", sm: "90%", md: "70%", lg: "70%", xl: "80%" }}
      height={{
        xs: "100rem",
        sm: "58rem",
        md: "58rem",
        lg: "75rem",
        xl: "60rem",
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
        height={{ xs: "90%", md: "90%", lg: "90%", xl: "55%" }}
        display={"grid"}
        gridTemplateColumns={{
          xs: "100%",
          sm: "repeat(2,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(2,1fr)",
          xl: "repeat(3,1fr)",
        }}
        columnGap={"20px"}
        rowGap={{ xs: "0px", sm: "20px" }}
      >
        <ContentItems
          title={"Yoga & Meditations"}
          description="Yogas to enhance your life style"
          image={meditation.src}
          link="/content/yoga"
        />
        <ContentItems
          title={"Solutions"}
          description="Find solutions for your daily life problems"
          image={solutions.src}
          link="content/solutions"
        />
        {/* <ContentItems
          title={"Diets"}
          description="Find the best type of diets routiene you should follow!"
          image={diets.src}
        /> */}
        <ContentItems
          title={"Course"}
          description="A dedicated course to learn yoga!"
          image={course.src}
          link="/videos"
        />
        {/* <ContentItems
          title={"Spiritual texts"}
          description="Easy access to spirituality"
          image={texts.src}
        /> */}
      </Box>
    </Box>
    // </LoginProtects>
  );
}
