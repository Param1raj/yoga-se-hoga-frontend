import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import ButtonComp from "../ButtonComp";
import HoverInput from "../HoverInput";
import { LaptopChromebookRounded } from "@mui/icons-material";

const FormdataArray = [
  {
    name: "name",
    label: "Name",
  },
  {
    name: "phone",
    label: "Phone",
  },
  {
    name: "email",
    label: "Email",
  },
  {
    name: "subject",
    label: "Subject",
  },
  {
    name: "query",
    label: "How can help you? feel free to get in touch!",
  },
];

function Contactus() {
  const handleChange = () => {};
  return (
    <Box
      height={{ sm: "60rem", md: "50rem" }}
      width={"100%"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Grid
        display={"grid"}
        gridTemplateColumns={{
          xs: "1fr",
          sm: "1fr",
          md: "40% 60%",
          lg: "repeat(2,1fr)",
        }}
        gridTemplateRows={{ xs: "20% 80%", sm: "20% 80%", md: "100%" }}
        width={{ xs: "85%", sm: "80%", md: "80%", lg: "70%", xl: "60%" }}
        height={{ xs: "90%", sm: "90%", md: "80%" }}
        // border={"1px solid black"}
      >
        <Grid>
          <Stack
            spacing={"20px"}
            padding={{ xs: "35px", sm: "35px", md: "0px" }}
          >
            <Typography
              fontFamily={["Nunito", "sans-serif"]}
              fontSize={"0.8rem"}
              fontWeight={"600"}
              textTransform={"uppercase"}
              variant="h2"
              component={"h2"}
            >
              Contact us
            </Typography>
            <Stack>
              <Typography
                fontWeight={"700"}
                fontSize={{
                  xs: "1.7rem",
                  sm: "2rem",
                  md: "2.0rem",
                  lg: "2.5rem",
                }}
                fontFamily={["Kumbh Sans", "sans-serif"]}
                letterSpacing={"-0.9px"}
                lineHeight={"2.5rem"}
              >
                Want to join us?{" "}
              </Typography>
              <Typography
                fontWeight={"700"}
                fontSize={{
                  xs: "1.7rem",
                  sm: "2rem",
                  md: "2.0rem",
                  lg: "2.5rem",
                }}
                fontFamily={["Kumbh Sans", "sans-serif"]}
                letterSpacing={"-0.9px"}
                lineHeight={"2.5rem"}
              >
                Get in touch!{" "}
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid
          // item
          // xs={6}
          // border={"1px solid black"}
          alignItems={"center"}
          justifyContent={"center"}
          display={"flex"}
        >
          <Stack
            width={{ xs: "95%", sm: "90%" }}
            height={{ xs: "90%", sm: "96%" }}
            sx={{ background: "#FFFFFF" }}
            padding={{ xs: "40px", sm: "50px" }}
            spacing={"40px"}
          >
            {FormdataArray.map(({ name, label }) => {
              return (
                <HoverInput
                  key={name}
                  handleChange={handleChange}
                  name={name}
                  label={label}
                  width={"100%"}
                />
              );
            })}
            <ButtonComp text="Get in touch" />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Contactus;
