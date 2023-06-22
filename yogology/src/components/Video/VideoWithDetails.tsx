import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import ButtonComp from "../ButtonComp";

import { motion } from "framer-motion";
function VideoWithDetails({
  title,
  ShortDescription,
  LongDescription,
  videoLink,
}: {
  title: string;
  ShortDescription: string;
  LongDescription: string;
  videoLink: string;
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
  return (
    <Box
      display={"flex"}
      //   alignItems={"center"}
      justifyContent={"center"}
      width={"100%"}
      height={"100vh"}
      overflow={"auto"}
      padding={"50px"}
      //   zIndex={1}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={list}
        style={{
          position: "relative",
          top: "50px",
          width: "65%",
          height: "fit-content",
        }}
      >
        <Stack
          //   // border={"1px solid blue"}
          //   position={"relative"}
          //   top={"100px"}
          width={"100%"}
          height={"100%"}
          rowGap={"20px"}
          paddingBottom={"50px"}
        >
          <motion.div variants={item}>
            <Typography
              variant="h4"
              component={"h4"}
              fontSize={"40px"}
              fontFamily={("Nunito", "sans-serif")}
              fontWeight={"700"}
            >
              {" "}
              {title}
            </Typography>
          </motion.div>
          <motion.div variants={item}>
            <Typography
              variant="body1"
              component={"p"}
              fontSize={"24px"}
              fontFamily={("Nunito", "sans-serif")}
              fontWeight={"500"}
              color={"#847988"}
            >
              {ShortDescription}
            </Typography>
          </motion.div>
          <motion.div variants={item}>
            <Box>
              <iframe
                width="100%"
                height="550"
                src={videoLink}
                title="Asteya"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                autoCapitalize="true"
              ></iframe>
            </Box>
          </motion.div>
          <motion.div variants={item}>
            <Typography
              variant="body1"
              component={"p"}
              fontSize={"18px"}
              fontFamily={"Nunito"}
              fontWeight={"400"}
              color={"#847988"}
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
  );
}

export default VideoWithDetails;
