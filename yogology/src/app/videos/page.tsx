"use client";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import styles from "./page.module.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ButtonComp from "@/components/ButtonComp";
import AccordionVideoList from "@/components/Video/AccordionVideoList";
import VideoWithDetails from "@/components/Video/VideoWithDetails";
const VideoList = [
  "SomeListed Video",
  "SomeListed Video",
  "SomeListed Video",
  "SomeListed Video",
  "SomeListed Video",
  "SomeListed Video",
  "SomeListed Video",
];
function page() {
  return (
    <Grid container height={"100vh"} className={styles.main}>
      <Grid item xs={3}>
        <Box padding={"20px"} height={"100vh"} overflow={"auto"}>
          <Typography
            variant={"h5"}
            component={"h5"}
            fontFamily={("Nunito", "sans-serif")}
            fontWeight={"600"}
            marginBottom={"30px"}
            color={"#5F2C70"}
          >
            Course Name
          </Typography>
          <AccordionVideoList title={"Beginner"} List={VideoList} />
          <AccordionVideoList title={"Intermediate"} List={VideoList} />
          <AccordionVideoList title={"Advance"} List={VideoList} />
        </Box>
      </Grid>
      <Grid item xs={9}>
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
  );
}

export default page;
