import React, { useEffect, useState } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import ButtonComp from "../ButtonComp";

import { motion } from "framer-motion";
function VideoWithDetails({
  title,
  ShortDescription,
  LongDescription,
  videoLink,
  forSingle,
}: {
  title: string;
  ShortDescription: string;
  LongDescription: string;
  videoLink: string;
  forSingle?: boolean;
}) {
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    hidden: {
      opacity: 0,
    },
  };
  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 200 },
  };
  // const [mute, setMute] = useState(1);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setMute(0);
  //   }, 1000);
  // }, []);
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      width={"100%"}
      height={forSingle ? "100%" : "100vh"}
      overflow={"auto"}
      padding={{ xs: "1.5rem", sm: "1.8rem", md: "1.3rem", lg: "3rem" }}
      //   zIndex={1}
      sx={{
        "::-webkit-scrollbar": {
          display: "none",
        },
        // border: "1px solid red",
      }}
    >
      <Box width={{ lg: "90%", xl: "70%" }}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={list}
          style={{
            position: "relative",
            top: "50px",
            width: "100%",
            height: "fit-content",
          }}
        >
          <Stack
            width={"100%"}
            height={"100%"}
            rowGap={forSingle ? "30px" : "20px"}
            paddingBottom={"50px"}
          >
            <motion.div variants={item}>
              <Typography
                variant="h4"
                component={"h4"}
                fontSize={{ md: "2.1rem", lg: "2.5rem" }}
                fontFamily={["Nunito", "sans-serif"]}
                fontWeight={"700"}
              >
                {title}
              </Typography>
            </motion.div>
            <motion.div variants={item}>
              <Typography
                variant="body1"
                component={"p"}
                fontSize={{
                  xs: forSingle ? "1rem" : "",
                  sm: forSingle ? "1.3rem" : "",
                  md: "1.2rem",
                  lg: "1.5rem",
                }}
                fontFamily={["Kumbh Sans", "sans-serif"]}
                fontWeight={forSingle ? "400" : "500"}
                color={"#847988"}
              >
                {ShortDescription}
              </Typography>
            </motion.div>
            <motion.div variants={item}>
              <Box
                width={"100%"}
                height={{ xs: "300px", sm: "400px", md: "400px", lg: "500px" }}
              >
                <iframe
                  width="100%"
                  height="100%"
                  src={videoLink + `?mute=1` + "&autoplay=1"}
                  title="Asteya"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  autoCapitalize="true"
                ></iframe>
              </Box>
            </motion.div>
            <motion.div variants={item}>
              <Typography
                variant="body1"
                component={"p"}
                fontSize={{
                  xs: forSingle ? "0.8rem" : "0.7rem",
                  md: forSingle ? "1rem" : "0.8rem",
                  lg: forSingle ? "1.2rem" : "1rem",
                  xl: forSingle ? "1.3rem" : "1rem",
                }}
                fontFamily={"Nunito"}
                fontWeight={"400"}
                color={"#847988"}
                mt={forSingle ? "30px" : "0px"}
              >
                {LongDescription}
              </Typography>
            </motion.div>
            <motion.div variants={item}>
              <ButtonComp text={"Next"}></ButtonComp>
            </motion.div>
          </Stack>
        </motion.div>
      </Box>
    </Box>
  );
}

export default VideoWithDetails;
