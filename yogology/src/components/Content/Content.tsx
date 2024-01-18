"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import ContentItems, { Title } from "./ContentItems";
import course from "@/assets/images/course.avif";
import meditation from "@/assets/images/meditation.avif";
import solutions from "@/assets/images/problems.avif";
import yoga from "@/assets/images/yoga.avif";
import texts from "@/assets/images/vedas.avif";
import LoginProtects from "@/src/app/RouteProtects/LoginProtects";
import { motion } from "framer-motion";
import { BoxVariant } from "@/src/Utils/animations/variants/boxVariant";
import Styles from "./content.module.css";
// import temple1 from "./images/yoga.avif";
export function Content() {
  return (
    // <LoginProtects>
    <Box
      width={{ xs: "90%", sm: "90%", md: "72%", lg: "72%", xl: "80%" }}
      height={{
        xs: "100rem",
        sm: "75rem",
        md: "72rem",
        lg: "90rem",
        xl: "65rem",
      }}
      marginBottom={{ xs: "0px", sm: "20px" }}
      className={Styles.main}
      display={"flex"}
      // flexDirection={"column"}
      // border={"1px solid red"}
      justifyContent={{ sm: "center" }}
    >
      <motion.div
        style={{
          width: "100%",
          height: "100%",
          // border: "1px solid yellow",
          // display: "flex",
          // flexDirection: "column",
          // justifyContent: "center",
        }}
        variants={BoxVariant}
        whileInView={"visible"}
        initial="hidden"
        viewport={{ once: true }}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={{ sm: "center" }}
          rowGap={{ xs: "20px", xl: "40px" }}
          // border={"1px solid red"}

          // className={Styles.text}
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
            marginTop={{
              xs: "10px",
              sm: "50px",
              md: "60px",
              lg: "80px",
              xl: "70px",
            }}
            // border={"1px solid red"}
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
              title={Title.yoga}
              description="Yogas to enhance your life style"
              image={yoga.src}
              link="/content/yoga"
            />
            <ContentItems
              title={Title.meditions}
              description="Meditation for spirituality"
              image={meditation.src}
              link="/content/meditation"
            />
            <ContentItems
              title={Title.solutions}
              description="Find solutions for your daily life"
              image={solutions.src}
              link="content/solutions"
            />
            {/* <ContentItems
          title={"Diets"}
          description="Find the best type of diets routiene you should follow!"
          image={diets.src}
        /> */}
            <ContentItems
              title={Title.course}
              description="A dedicated course to learn yoga!"
              image={course.src}
              link="/videos"
            />
            <ContentItems
              title={Title.spiritualTexts}
              description="A dedicated course to learn yoga!"
              image={texts.src}
              link="/videos"
              comingSoon={true}
            />
            {/* <ContentItems
          title={"Spiritual texts"}
          description="Easy access to spirituality"
          image={texts.src}
        /> */}
          </Box>
        </Box>
      </motion.div>
    </Box>
    // </LoginProtects>
  );
}
