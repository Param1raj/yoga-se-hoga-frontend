"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
// import Particle from "@/components/Particle";
import style from "./header.module.css";
import { motion } from "framer-motion";
import ParticleComp from "@/components/Particle";

function Header() {
  return (
    <Box
      padding={{ xs: "3rem", sm: "3rem", md: "5rem", lg: "5rem", xl: "8rem" }}
      width={{ xs: "100%", sm: "100%", md: "70%", lg: "65%", xl: "50%" }}
      marginTop={{ sm: "0px", md: "0px", lg: "100px" }}
      // border={"1px solid red"}
    >
      <Box
        // border={"1px solid red"}
        position={"absolute"}
        height={"40%"}
        width={"90%"}
        top={"170px"}
        left={"100px"}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Box display={"flex"}>
          <motion.div
            className={style.box}
            animate={{
              y: [50, -50, 50],
            }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0,
            }}
          />
          <motion.div
            className={style.box1}
            animate={{
              y: [20, -20, 20],
            }}
            transition={{
              duration: 5.1,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />
        </Box>
        <Box display={"flex"}>
          <motion.div
            className={style.box1}
            style={{ left: "100px" }}
            animate={{
              y: [20, -20, 20],
            }}
            transition={{
              duration: 5.1,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />
          <motion.div
            className={style.box}
            animate={{
              y: [50, -50, 50],
            }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0,
            }}
          />
        </Box>
        {/* <motion.div
          className={style.box}
          animate={{
            y: [50, -50, 50],
            borderRadius: ["50%", "50%", "50%"],
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
        <motion.div
          className={style.box2}
          animate={{
            y: [70, -70, 70],
            borderRadius: ["50%", "50%", "50%"],
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 3,
          }}
        /> */}
        {/* <ParticleComp /> */}
      </Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        gap={"10px"}
        margin={"auto"}
        justifyContent={"center"}
      >
        <Typography
          variant="h1"
          component={"h1"}
          fontWeight={"700"}
          fontFamily={"Kumbh Sans"}
          fontSize={{
            xs: "1.5rem",
            sm: "1.8rem",
            md: "2rem",
            lg: "2.0rem",
            xl: "3rem",
          }}
          fontStyle={"normal"}
          color={"#322038"}
          lineHeight={"8rem"}
          letterSpacing={"-1.1px"}
          zIndex={10}
        >
          Open your
        </Typography>
        <Typography
          fontFamily={"Birthstone Bounce"}
          variant="h1"
          component={"h1"}
          fontStyle={"normal"}
          fontWeight={"bold"}
          fontSize={{
            xs: "4rem",
            sm: "4rem",
            md: "6rem",
            lg: "6rem",
            xl: "7rem",
          }}
          color={"#5F2C70"}
          zIndex={10}
        >
          Mind
        </Typography>
      </Box>
      <Box
        maxWidth={{ xs: "90%", sm: "80%", md: "80%", lg: "80%", xl: "70%" }}
        margin={"auto"}
        // zIndex={10}
      >
        <Typography
          variant="subtitle2"
          textAlign={"center"}
          color={"#847988"}
          fontFamily={"sans-serif"}
          fontStyle={"normal"}
          fontSize={"1.1rem"}
          zIndex={9}
        >
          Revitalize your mind, body, and soul with the transformative practice
          of yoga.
        </Typography>
      </Box>
    </Box>
  );
}

export default Header;
