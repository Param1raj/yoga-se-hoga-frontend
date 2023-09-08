"use client";
import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import styles from "./Video.module.css";
import AccordionVideoList from "./AccordionVideoList";
import VideoWithDetails from "./VideoWithDetails";
import CustomDrawer from "./CustomDrawer";
import { usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getSingleVideo } from "@/Utils/query/getSingleVideo";
import LoginProtects from "@/app/RouteProtects/LoginProtects";
import { getFirstVideoByCategory } from "@/Utils/query/getFirstVideo";

function Video() {
  const [id, setId] = useState<string>("");
  const handleId = (_id: string) => {
    setId(_id);
  };
  const videoUuid = usePathname().split("/")[2];
  /*
  make request to get next video
  */
  // request for current video
  const { isLoading, isError, data } = useQuery({
    queryKey: [videoUuid],
    queryFn: async () => {
      return await getSingleVideo(videoUuid);
    },
  });

  // request for nextVideoUuid.
  const { data: Intermediate } = useQuery({
    queryFn: async () => {
      return await getFirstVideoByCategory("Intermediate");
    },
    queryKey: ["Intermediate", "single"],
  });

  const { data: Advance } = useQuery({
    queryFn: async () => {
      return await getFirstVideoByCategory("Advance");
    },
    queryKey: ["Advance", "single"],
  });

  return (
    // <LoginProtects>
    <Grid
      // container
      height={"100vh"}
      className={styles.main}
      mt={"82px"}
      display={"grid"}
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
          <AccordionVideoList
            title={"Beginner"}
            setId={handleId}
            id={videoUuid}
            nextId={Intermediate?.data.data}
          />
          <AccordionVideoList
            title={"Intermediate"}
            setId={handleId}
            id={videoUuid}
            nextId={Advance?.data.data}
          />
          <AccordionVideoList
            title={"Advance"}
            setId={handleId}
            id={videoUuid}
          />
        </Box>
        <CustomDrawer />
      </Grid>
      <Grid>
        <VideoWithDetails
          title={data?.data.data.video.title}
          ShortDescription={data?.data.data.video.Short_description}
          LongDescription={data?.data.data.video.Long_description}
          videoLink={data?.data.data.video.url}
          nextId={id}
          isLoading={isLoading}
          // give a uuid for the next videos to be fetched.
        />
      </Grid>
    </Grid>
    // </LoginProtects>
  );
}

export default Video;
