import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import React from "react";
import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";

type CarouselPropsItem = {
  image: StaticImageData;
  title: string;
};

type CarouselProps = CarouselPropsItem[];

function CarouselFunction({ data }: { data: CarouselProps }) {
  return (
    <Carousel
      infiniteLoop={true}
      autoPlay
      width={"40%"}
      dynamicHeight
      swipeable
    >
      {data.map((item) => (
        <Box>
          <Image src={item.image} alt="CarouselImage1" />
          <Typography variant="body1" component={"p"}>
            {item.title}
          </Typography>
        </Box>
      ))}
    </Carousel>
  );
}

export default CarouselFunction;
