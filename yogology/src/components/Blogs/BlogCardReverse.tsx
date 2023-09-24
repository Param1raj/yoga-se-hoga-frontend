import { Grid } from "@mui/material";
import React from "react";
import ForPhone from "./BlogCardReverse/ForPhone";
import ForLaptop from "./BlogCardReverse/ForLaptop";

function BlogCardReverse({
  title,
  description,
  date,
  image,
}: {
  title: string;
  description: string;
  date: string;
  image?: string;
}) {
  return (
    <Grid
      display={"grid"}
      gridTemplateColumns={{
        xs: "1fr",
        sm: "1fr",
        md: "50% 50%",
        lg: "repeat(2,1fr)",
      }}
      gridTemplateRows={{ xs: "50% 50%", md: "100%" }}
      rowGap={"10px"}
      height={"100%"}
      width={"100%"}
      padding={{ sm: "5px", md: "5px", lg: "20px" }}
      // border={"1px solid black"}
    >
      <ForPhone
        image={image}
        title={title}
        description={description}
        date={date}
      />
      <ForLaptop
        image={image}
        title={title}
        description={description}
        date={date}
      />
    </Grid>
  );
}

export default BlogCardReverse;
