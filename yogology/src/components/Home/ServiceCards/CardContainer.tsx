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
      height={{
        xs: "fit-content",
        sm: "fit-content",
        md: "50rem",
        lg: "35rem",
      }}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      padding={{ xs: "2rem", sm: "3rem" }}
    >
      <Grid
        container
        spacing={{ sm: 0, md: 0 }}
        display={"grid"}
        gridTemplateColumns={{
          xs: "1fr",
          sm: "1fr",
          md: "repeat(2,1fr)",
          lg: "repeat(4,1fr)",
        }}
        gridTemplateRows={{ sm: "repeat(4,1fr)" }}
        rowGap={"20px"}
        width={{ xs: "95%", sm: "70%", md: "75%", lg: "95%", xl: "75%" }}
        margin={"auto"}
        height={{ xs: "90%", sm: "100%", md: "80%", lg: "63%", xl: "65%" }}
        // border={"1px solid black"}
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
