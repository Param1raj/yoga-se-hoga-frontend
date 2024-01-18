"use client";
import { Box } from "@mui/material";
import React from "react";
import GallaryItem from "./GallaryItem";
import backgroundOne from "../../Home/AboutUs/images/AboutUs.jpeg";
import backgroundForth from "@/assets//images/two.jpeg";
import backgroundThree from "@/assets//images/third.jpeg";
import backgroundTwo from "@/assets//images/two.jpeg";
import backgroundFifth from "@/assets//images/fifth.jpeg";
import backgroundSix from "@/assets//images/foodImage.jpeg";
const gallary = [
  { text: "Holidays", gridArea: "one", background: backgroundOne.src },
  { text: "Kundalini yoga", gridArea: "two", background: backgroundTwo.src },
  { text: "Meditation", gridArea: "three", background: backgroundThree.src },
  { text: "Children", gridArea: "four", background: backgroundForth.src },
  { text: "Lifestyle", gridArea: "five", background: backgroundFifth.src },
  { text: "Delicacies", gridArea: "six", background: backgroundSix.src },
];
function Gallery() {
  return (
    <Box
      sx={{
        width: { xs: "80%", sm: "90%", md: "85%", lg: "90%", xl: "70%" },
        height: {
          xs: "90rem",
          sm: "50rem",
          md: "70rem",
          lg: "64rem",
          xl: "65rem",
        },
        display: "grid",
        gridTemplateAreas: {
          xs: `'two'
             'two' 
             'three' 
             'three'
             'five'
             'five' 
             'six'
             'six'
             'four'
             'four'
             'one' 
             'one'`,
          sm: `'two two three three'
             'five five six six'
             'four four one one'`,
          md: `'two two three three'
              'two two six six'
              'four four one one'
              'five five one one'`,
          lg: `'one two two three'
              'four two two six'
              'four five five six'`,
        },
      }}
    >
      {gallary.map(({ text, gridArea, background }) => {
        return (
          <GallaryItem
            key={text}
            text={text}
            gridArea={gridArea}
            background={background}
          />
        );
      })}
    </Box>
  );
}

export default Gallery;
