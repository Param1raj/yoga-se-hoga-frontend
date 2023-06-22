import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Images from "./images/AboutUs.jpeg";
import ButtonComp from "../../ButtonComp";
function AboutUs() {
  return (
    <Grid
      container
      spacing={15}
      //   justifyContent={"space-between"}
      margin={"10px"}
      sx={{ width: "100%", height: "41rem" }}
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
      <Grid item xs={5.7} padding={0}>
        <Typography
          variant="h4"
          fontFamily={("Kumbh Sans", " sans-serif")}
          sx={{
            fontWeight: "700",
            fontStyle: "normal",
            position: "relative",
            right: "13rem",
            fontSize: "2.5rem",
          }}
          component={"h4"}
        >
          Living in harmony: Krishna's spiritual teachings for modern life in
          the material world.
        </Typography>
        <Stack
          spacing={4}
          sx={{ width: "70%" }}
          color={"#847988"}
          marginTop={"40px"}
        >
          <Typography
            variant="body1"
            component={"p"}
            fontFamily={("Nunito", "sans-serif")}
            fontSize={"17px"}
          >
            Experience the synergy of ancient wisdom and contemporary living on
            our website, and allow Krishna's teachings to illuminate your path
            towards a more meaningful and balanced existence.{" "}
          </Typography>
          <Typography
            variant="body1"
            component={"p"}
            fontFamily={("Nunito", "sans-serif")}
            fontSize={"17px"}
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
