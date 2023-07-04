import { Box, Grid } from "@mui/material";
import React from "react";
import ServiceCard from "./ServiceCard";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import SpaIcon from "@mui/icons-material/Spa";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
const services = [
  {
    title: "Solutions",
    caption: "Solutions for daily life problems",
    image: <EmojiObjectsIcon sx={{ fontSize: "60px" }} />,
  },
  {
    title: "Yoga",
    caption: "Various Kind of yoga exercises.",
    image: <SelfImprovementIcon sx={{ fontSize: "60px" }} />,
  },
  {
    title: "Meditation",
    caption: "Deep meditations and relaxations",
    image: <SpaIcon sx={{ fontSize: "60px" }} />,
  },
  {
    title: "Diets",
    caption: "Health guidence with proper diets.",
    image: <EmojiFoodBeverageIcon sx={{ fontSize: "60px" }} />,
  },
];

function CardContainer() {
  return (
    <Box
      width={"100%"}
      height={{ md: "25rem", lg: "31rem" }}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Grid
        container
        spacing={3}
        display={"grid"}
        gridTemplateColumns={{ md: "repeat(2,1fr)", lg: "repeat(4,1fr)" }}
        width={{ md: "75%", lg: "95%", xl: "75%" }}
        margin={"auto"}
        height={{ md: "80%", lg: "63%", xl: "65%" }}
      >
        {services.map(({ title, image, caption }) => {
          return (
            <ServiceCard
              key={title}
              title={title}
              caption={caption}
              image={image}
            />
          );
        })}
      </Grid>
    </Box>
  );
}

export default CardContainer;
