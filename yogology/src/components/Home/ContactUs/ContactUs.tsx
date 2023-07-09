import { Box, Grid, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import images from "./images/contactUs.jpeg";
import ButtonComp from "@/components/ButtonComp";
import HoverInput from "@/components/HoverInput";

function ContactUs() {
  return (
    <Grid
      height={{ xs: "30rem", sm: "40rem" }}
      //   border={"1px solid red"}
      container
      sx={{
        background: `url('${images.src}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "1fr",
          md: "40% 60%",
          lg: "repeat(2,1fr)",
        },
      }}
    >
      <Grid></Grid>
      <Grid
        // item
        // border={"1px solid red"}
        display={"flex"}
        alignItems={{ sm: "none", md: "center" }}
        justifyContent={{ sm: "center" }}
        // xs={6}
      >
        <Stack
          width={{ sm: "90%", md: "85%", lg: "75%", xl: "60%" }}
          height={{ sm: "90%", md: "80%" }}
          sx={{ background: "#ffffff" }}
          // border={"1px solid black"}
          padding={{ xs: "40px", sm: "40px", md: "50px" }}
          spacing={4}
        >
          <Typography
            variant="body1"
            fontFamily={["Kumbh Sans", "sans-serif"]}
            textTransform={"uppercase"}
            fontWeight={"600"}
          >
            Contact Us
          </Typography>
          <Stack>
            <Typography
              variant="h2"
              component={"h2"}
              fontFamily={"Kumbh Sans"}
              //   textTransform={"uppercase"}
              fontWeight={"700"}
              fontSize={{
                xs: "2rem",
                sm: "2rem",
                md: "2.3rem",
                lg: "2.5rem",
                xl: "3rem",
              }}
            >
              Have questions?
            </Typography>
            <Typography
              variant="h2"
              component={"h2"}
              fontFamily={"Kumbh Sans"}
              //   textTransform={"uppercase"}
              fontWeight={"700"}
              fontSize={{
                xs: "2rem",
                sm: "2rem",
                md: "2.3rem",
                lg: "2.5rem",
                xl: "3rem",
              }}
            >
              Get in touch!
            </Typography>
          </Stack>
          <Grid container spacing={1} paddingLeft={"-10px"}>
            <Grid item xs={5}>
              <HoverInput width={"100%"} label={"Name"} />
            </Grid>
            <Grid item xs={5}>
              <HoverInput width={"100%"} label={"Last Name"} />
            </Grid>
            <Grid item xs={5}>
              <HoverInput width={"100%"} label={"Email"} />
            </Grid>
          </Grid>
          <ButtonComp text={"Get In touch"} />
        </Stack>
      </Grid>
    </Grid>
  );
}

export default ContactUs;
