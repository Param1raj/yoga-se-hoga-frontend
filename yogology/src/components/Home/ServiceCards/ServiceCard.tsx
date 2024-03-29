"use client";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useRouter } from "next13-progressbar";

type cardprops = {
  image: any;
  title: string;
  caption: string;
  count?: { xs?: number; md?: number; lg?: number; xl: number };
  link?: string;
};

function ServiceCard({
  image,
  title,
  caption,
  count = { md: 6, xl: 3 },
  link,
}: cardprops) {
  const [isHovering, setIsHovering] = useState(false);
  const { push } = useRouter();
  return (
    <Grid
      item
      // xs={count}
      marginBottom={{ xs: "20px", sm: "10px", md: "0px" }}
      marginLeft={{ md: "20px" }}
      height={"100%"}
      onMouseEnter={(e) => {
        setIsHovering(true);
      }}
      onMouseLeave={(e) => {
        setIsHovering(false);
      }}
      onClick={() => {
        if (link) {
          push(link);
        }
      }}
    >
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          borderRadius: "0px",
          cursor: "pointer",
          boxShadow: isHovering
            ? "rgba(149, 157, 165, 0.2) 0px 8px 24px"
            : null,
          transition: "box-shadow 0.3s ease-out",
        }}
        elevation={0}
      >
        <Stack
          spacing={2}
          width={"100%"}
          height={{ md: "100%", lg: "100%" }}
          alignItems={"center"}
          padding={{ xs: "1.4rem", sm: "2.5rem", md: "2rem", lg: "1.8rem" }}
        >
          <Box textAlign={"center"} color={isHovering ? "#5F2C70" : "black"}>
            {image}
          </Box>
          <Stack
            spacing={2}
            width={"80%"}
            alignItems={"center"}
            textAlign={"center"}
          >
            <Typography
              variant="h4"
              component={"h4"}
              fontSize={"20px"}
              fontWeight={"600"}
              fontFamily={["Kumbh Sans", "sans-serif"]}
              color={"#322038"}
            >
              {title}
            </Typography>
            <Typography
              fontFamily={["Nunito", "sans-serif"]}
              fontSize={"17px"}
              color={" #847988"}
              fontWeight={"400"}
            >
              {caption}
            </Typography>
            <MoreHorizIcon sx={{ color: isHovering ? "#322038" : "#847988" }} />
          </Stack>
        </Stack>
      </Paper>
    </Grid>
  );
}

export default ServiceCard;
