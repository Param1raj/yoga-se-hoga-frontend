import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import image1 from "./images/Careers-1.jpeg";
import image2 from "./images/Careers-2.jpeg";
import ButtonComp from "@/components/ButtonComp";

type GridCompProps = {
  image: string;
  head: string;
  title: string;
  ButtonText: string;
};

function GridComp({ image, head, title, ButtonText }: GridCompProps) {
  return (
    <Grid
      item
      // border={"1px solid blue"}
      xs={6}
      sx={{
        background: `url('${image}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Stack
        //   border={"1px solid red"}
        height={"100%"}
        sx={{ background: "rgba(70, 0, 0, 0.3)" }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Stack
          //   border={"1px solid red"}
          width={"80%"}
          height={"30%"}
          spacing={3}
        >
          <Typography
            variant="body1"
            component={"p"}
            textTransform={"uppercase"}
            color={"#ffffff"}
            textAlign={"center"}
            sx={{ opacity: 1 }}
            fontFamily={"Kumbh Sans"}
            fontWeight={"700"}
            fontSize={"1rem"}
          >
            {head}{" "}
          </Typography>
          <Typography
            variant="body1"
            component={"p"}
            // textTransform={"uppercase"}
            color={"#ffffff"}
            textAlign={"center"}
            fontFamily={("Kumbh Sans", "sans-serif")}
            fontWeight={"700"}
            fontSize={"3rem"}
          >
            {title}{" "}
          </Typography>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <ButtonComp text={ButtonText} />
          </Box>
        </Stack>
      </Stack>
    </Grid>
  );
}

function Careers() {
  return (
    <Grid
      container
      //   sx={{ border: "1px solid red" }}
      height={"43rem"}
      width={"100%"}
    >
      <GridComp
        title={"Sign up for a session"}
        head={"Get in touch"}
        ButtonText={"contact us"}
        image={image1.src}
      />
      <GridComp
        title={"Want to join us?"}
        head={"Careers"}
        ButtonText={"Read More"}
        image={image2.src}
      />
    </Grid>
  );
}

export default Careers;