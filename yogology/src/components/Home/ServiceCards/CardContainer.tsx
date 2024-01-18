import { Box, Grid } from "@mui/material";
import React from "react";
import ServiceCard from "./ServiceCard";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import SpaIcon from "@mui/icons-material/Spa";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import { motion } from "framer-motion";
import { BoxVariant } from "@/src/Utils/animations/variants/boxVariant";
const services = [
  {
    title: "Solutions",
    caption: "Solutions for daily life problems",
    image: <EmojiObjectsIcon sx={{ fontSize: "60px" }} />,
    link: "/content/solutions?page=1",
  },
  {
    title: "Yoga",
    caption: "Various Kind of yoga exercises.",
    image: <SelfImprovementIcon sx={{ fontSize: "60px" }} />,
    link: "/content/yoga?page=1",
  },
  {
    title: "Meditation",
    caption: "Deep meditations and relaxations",
    image: <SpaIcon sx={{ fontSize: "60px" }} />,
    link: "./content/meditation?page=1",
  },
  // {
  //   title: "Diets",
  //   caption: "Health guidence with proper diets.",
  //   image: <EmojiFoodBeverageIcon sx={{ fontSize: "60px" }} />,
  // },
];

function CardContainer() {
  const ItemVariant = {
    hidden: { opacity: 0, y: "70px" },
    visible: { opacity: 1, y: "0px" },
  };

  return (
    <Box
      width={"100%"}
      height={{
        xs: "fit-content",
        sm: "70rem",
        md: "30rem",
        lg: "35rem",
      }}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      padding={{ xs: "2rem", sm: "3rem" }}
    >
      <Box
        width={{ xs: "85%", sm: "60%", md: "90%", lg: "85%", xl: "60%" }}
        height={{ xs: "90%", sm: "100%", md: "77%", lg: "63%", xl: "70%" }}
        margin={"auto"}
      >
        <motion.div
          variants={BoxVariant}
          whileInView={"visible"}
          initial="hidden"
          viewport={{ once: true }}
          style={{ width: "100%", height: "100%" }}
        >
          <Grid
            container
            // spacing={{ sm: 0, md: 0 }}
            display={"grid"}
            gridTemplateColumns={{
              xs: "1fr",
              sm: "1fr",
              md: "repeat(3,1fr)",
              lg: "repeat(3,1fr)",
            }}
            gridTemplateRows={{ sm: "repeat(3,1fr)", md: "1fr" }}
            rowGap={"20px"}
            width={"100%"}
            height={"100%"}
            // margin={"auto"}
            // border={"1px solid black"}
          >
            {services.map(({ title, image, caption, link }) => {
              return (
                <Box key={title} height={{ sm: "90%", md: "100%" }}>
                  <motion.div variants={ItemVariant} style={{ height: "100%" }}>
                    <ServiceCard
                      key={title}
                      title={title}
                      caption={caption}
                      image={image}
                      link={link}
                    />
                  </motion.div>
                </Box>
              );
            })}
          </Grid>
        </motion.div>
      </Box>
    </Box>
  );
}

export default CardContainer;
