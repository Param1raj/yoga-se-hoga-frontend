import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Images from "./images/AboutUs.jpeg";
import ButtonComp from "../../ButtonComp";
function AboutUs() {
  return (
    <Grid
      container
      spacing={{ md: 0, lg: 0, xl: 0 }}
      //   justifyContent={"space-between"}
      marginTop={"100px"}
      margin={"10px"}
      sx={{ width: "100%", height: { md: "35rem", lg: "30rem", xl: "41rem" } }}
      border={"1px solid blue"}
    >
      <Grid
        item
        xs={6.3}
        sx={{
          background: `url('${Images.src}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></Grid>
      <Grid item xs={5.7} marginTop={{ md: "3rem", lg: "3rem", xl: "7rem" }}>
        <Typography
          variant="h4"
          fontFamily={["Kumbh Sans", " sans-serif"]}
          sx={{
            fontWeight: "700",
            fontStyle: "normal",
            position: "relative",
            right: { lg: "7rem", xl: "8rem" },
            fontSize: { lg: "1.8rem", xl: "2.5rem" },
            lineHeight: "2.394rem",
          }}
          // border={'1px solid black'}
          component={"h4"}
        >
          Living in harmony: Krishna's spiritual teachings for modern life in
          the material world.
        </Typography>
        <Stack
          spacing={{ lg: 3, xl: 4 }}
          sx={{ width: { lg: "85%", xl: "70%" } }}
          color={"#847988"}
          marginTop={{ lg: "1.2rem", xl: "2.1rem" }}
          marginLeft={{ lg: "2rem", xl: "3rem" }}
          // border={"1px solid blue"}
        >
          <Typography
            variant="body1"
            component={"p"}
            fontFamily={["Nunito", "sans-serif"]}
            fontSize={"1rem"}
          >
            Experience the synergy of ancient wisdom and contemporary living on
            our website, and allow Krishna's teachings to illuminate your path
            towards a more meaningful and balanced existence.{" "}
          </Typography>
          <Typography
            variant="body1"
            component={"p"}
            fontFamily={["Nunito", "sans-serif"]}
            fontSize={"1rem"}
          >
            We invite you to embark on a transformative journey of
            self-discovery, guided by the timeless wisdom of Krishna. Embrace a
            life of purpose, inner peace, and fulfillment as you unlock the
            secrets of living in harmony amidst the bustling material world.{" "}
          </Typography>

          <ButtonComp text={"About"} />
        </Stack>
      </Grid>
    </Grid>
  );
}

export default AboutUs;
