import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Images from "./images/AboutUs.jpeg";
import ButtonComp from "../../ButtonComp";
function AboutUs() {
  return (
    <Grid
      container
      spacing={{ md: 0, lg: 0, xl: 0 }}
      marginTop={"100px"}
      margin={"10px"}
      sx={{
        width: { sm: "95%", md: "100%", lg: "100%" },
        height: { sm: "55rem", md: "30rem", lg: "30rem", xl: "41rem" },
        display: { sm: "grid" },
        gridTemplateColumns: { sm: "100%", md: "repeat(2,1fr)" },
        gridTemplateRows: { sm: "50% 50%", md: "100%" },
      }}
      // border={"1px solid blue"}
    >
      <Grid
        item
        // xs={6.3}
        sx={{
          background: `url('${Images.src}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></Grid>
      <Grid
        item
        margin={"auto"}
        marginTop={{ md: "1.5rem", lg: "3rem", xl: "7rem" }}
        width={{ sm: "80%" }}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Typography
          variant="h4"
          fontFamily={["Kumbh Sans", " sans-serif"]}
          sx={{
            fontWeight: "700",
            fontStyle: "normal",
            position: "relative",
            right: { md: "3rem", lg: "7rem", xl: "10rem" },
            fontSize: {
              sm: "1.4rem",
              md: "1.5rem",
              lg: "1.8rem",
              xl: "2.5rem",
            },
            lineHeight: { sm: "2rem", md: "2.394rem" },
          }}
          // border={'1px solid black'}
          component={"h4"}
          textAlign={{ sm: "center", md: "left" }}
        >
          Living in harmony: Krishna's spiritual teachings for modern life in
          the material world.
        </Typography>
        <Stack
          spacing={{ sm: 1.4, md: 2, lg: 3, xl: 4 }}
          sx={{ width: { sm: "92%", lg: "85%", xl: "70%" } }}
          color={"#847988"}
          marginTop={{ sm: "1rem", md: "1.1rem", lg: "1.2rem", xl: "2.1rem" }}
          marginLeft={{ md: "1.8rem", lg: "2rem", xl: "1rem" }}
          // border={"1px solid blue"}
          alignItems={{ sm: "center", md: "normal" }}
        >
          <Typography
            variant="body1"
            component={"p"}
            fontFamily={["Nunito", "sans-serif"]}
            fontSize={"1rem"}
            textAlign={{ sm: "center", md: "left" }}
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
            textAlign={{ sm: "center", md: "left" }}
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
