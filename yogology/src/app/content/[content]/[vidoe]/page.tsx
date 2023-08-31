"use client";
import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import styles from "./Video.module.css";
import VideoWithDetails from "@/components/Video/VideoWithDetails";
import { useQuery } from "@tanstack/react-query";
import { getNextVideo } from "@/Utils/query/getNextVideo";
import { usePathname } from "next/navigation";
import { getSingleVideo } from "@/Utils/query/getSingleVideo";

function Video() {
  // one api call for getPreviousVideos.
  // one api call for fetching videos by url.
  const pathName = usePathname();
  const content = pathName.split("/")[2];
  const uuid = pathName.split("/")[3];
  console.log("Path......", pathName.split("/"));
  const {
    isError: error,
    isLoading: loading,
    isSuccess,
    data: SingleVideo,
  } = useQuery({
    queryKey: [uuid],
    queryFn: async () => {
      return getSingleVideo(uuid);
    },
  });
  // one api call for getNextVideos.
  // const {} = useQuery({
  //   queryKey: [content, uuid],
  //   queryFn: async () => {
  //     getNextVideo(content, uuid);
  //   },
  // });

  if (error)
    return (
      <Grid
        height={{ sm: "100vh", lg: "128vh", xl: "120vh" }}
        className={styles.main}
        mt={"82px"}
        display={"grid"}
      >
        <Grid>
          <VideoWithDetails
            title={"Sorry"}
            ShortDescription={"Unable to find video!"}
            LongDescription={
              "According to Crangle, some researchers have favoured a linear theory,which attempts “to interpret the origin and early of Indian contemplative practices as a sequential growth from an Aryan genesis”, just like traditional Hinduism regards the Vedas to be the ultimate source of all spiritual knowledge."
            }
            videoLink={"https://www.youtube.com/embed/jyg8pft9gRY"}
            forSingle={true}
            nextId={""}
          />
        </Grid>
      </Grid>
    );

  if (loading)
    return (
      <Grid
        height={{ sm: "100vh", lg: "128vh", xl: "120vh" }}
        className={styles.main}
        mt={"82px"}
        display={"grid"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography>Loading...</Typography>
      </Grid>
    );

  return (
    <Grid
      height={{ sm: "100vh", lg: "128vh", xl: "120vh" }}
      className={styles.main}
      mt={"82px"}
      display={"grid"}
    >
      <Grid>
        {isSuccess && (
          <VideoWithDetails
            title={SingleVideo.data.data.video.title}
            ShortDescription={SingleVideo.data.data.video.Short_description}
            LongDescription={SingleVideo.data.data.video.Long_description}
            videoLink={SingleVideo.data.data.video.url}
            forSingle={true}
            nextId={""}
          />
        )}
      </Grid>
    </Grid>
  );
}

export default Video;
