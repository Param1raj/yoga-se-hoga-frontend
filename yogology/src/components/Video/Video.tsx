"use client";
import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import styles from "./Video.module.css";
import AccordionVideoList from "./AccordionVideoList";
import VideoWithDetails from "./VideoWithDetails";
import CustomDrawer from "./CustomDrawer";
import LoginProtects from "@/app/RouteProtects/LoginProtects";
const VideoList = [
  "SomeListed Video",
  "SomeListed Video",
  "SomeListed Video",
  "SomeListed Video",
  "SomeListed Video",
  "SomeListed Video",
  "SomeListed Video",
];

function Video() {
  const [id, setId] = useState<string>("");
  const handleId = (_id: string) => {
    setId(_id);
  };
  return (
    // <LoginProtects>
    <Grid
      // container
      height={"100vh"}
      className={styles.main}
      mt={"82px"}
      display={"grid"}
      // gridTemplateColumns={{ xs: "100%" }}
      // gridTemplateRows={"2% 98%"}
      // border={"1px solid blue"}
    >
      <Grid>
        <Box
          padding={{ sm: "10px", md: "20px", lg: "35px", xl: "40px" }}
          display={{ xs: "none", md: "block" }}
          height={"100vh"}
          overflow={"auto"}
        >
          <Typography
            variant={"h5"}
            component={"h5"}
            fontFamily={["Nunito", "sans-serif"]}
            fontWeight={"600"}
            marginBottom={"30px"}
            color={"#5F2C70"}
          >
            Asteya
          </Typography>
          <AccordionVideoList title={"Beginner"} setId={handleId} id={id} />
          <AccordionVideoList title={"Intermediate"} setId={handleId} id={id} />
          <AccordionVideoList title={"Advance"} setId={handleId} id={id} />
        </Box>
        <CustomDrawer />
      </Grid>
      <Grid>
        <VideoWithDetails
          title={"Asteya"}
          ShortDescription={
            "Learn the foundations of yoga in this online course"
          }
          LongDescription={
            "According to Crangle, some researchers have favoured a linear theory,which attempts “to interpret the origin and early of Indian contemplative practices as a sequential growth from an Aryan genesis”, just like traditional Hinduism regards the Vedas to be the ultimate source of all spiritual knowledge."
          }
          videoLink={"https://www.youtube.com/embed/jyg8pft9gRY"}
        />
      </Grid>
    </Grid>
    // </LoginProtects>
  );
}

export default Video;
