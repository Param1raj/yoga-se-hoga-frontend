"use client";
import styles from "./page.module.css";
import { Box, Typography } from "@mui/material";
import VideoBaner from "@/components/Home/Videobanne/VideoBaner";
import YogaQuetes from "@/components/Home/YogaQuetes/YogaQuetes";
import CardContainer from "@/components/Home/ServiceCards/CardContainer";
import AboutUs from "@/components/Home/AboutUs/AboutUs";
import WhatWeDo from "@/components/Home/WhatWeDo/WhatWeDo";
import Careers from "@/components/Home/Careers/Careers";
import EmailSubscrib from "@/components/Home/EmailSubscrib/EmailSubscrib";
import ContactUs from "@/components/Home/ContactUs/ContactUs";
import { useEffect } from "react";

export default function Home() {
  let path = "./waterfall.mp3";
  let audio = new Audio(path);
  useEffect(() => {
    console.log(audio);
    audio.play();
  }, []);
  return (
    <div className={styles.main}>
      {/* <audio src={path} controls={false}></audio> */}
      <Box padding={"120px"} width={"50%"} marginTop={"0px"}>
        {/* <AudioPlayer /> */}
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
            fontSize={"70px"}
            fontStyle={"normal"}
            color={"#322038"}
            lineHeight={"125px"}
            letterSpacing={"-1.1px"}
          >
            Open your
          </Typography>
          <Typography
            fontFamily={"Birthstone Bounce"}
            variant="h1"
            component={"h1"}
            fontStyle={"normal"}
            fontWeight={"bold"}
            fontSize={"134px"}
            color={"#5F2C70"}
          >
            Mind
          </Typography>
        </Box>
        <Box maxWidth={"70%"} margin={"auto"}>
          <Typography
            variant="subtitle2"
            textAlign={"center"}
            color={"#847988"}
            fontFamily={"sans-serif"}
            fontStyle={"normal"}
            fontSize={"22px"}
          >
            Revitalize your mind, body, and soul with the transformative
            practice of yoga.
          </Typography>
        </Box>
      </Box>
      <VideoBaner />
      <YogaQuetes />
      <CardContainer />
      <AboutUs />
      <WhatWeDo />
      <Careers />
      <EmailSubscrib />
      <ContactUs />
    </div>
  );
}
