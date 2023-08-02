"use client";
import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import ButtonComp from "../ButtonComp";
import HoverInput from "../HoverInput";
import { LaptopChromebookRounded } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { animation } from "./utils";

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
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const handleChange = async (data: any) => {
    try {
      let res = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify({
          subject: data.subject,
          query: data.Query,
          email: data.email,
          phone: data.phone,
          name: data.name,
        }),
        headers: {
          contentType: "application/json",
        },
      });
      const result = await res.json();
      reset();
    } catch (error) {
      console.log({ error: errors });
    }
  };
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
            component={"form"}
            onSubmit={handleSubmit(handleChange)}
          >
            <TextField
              id="standard-basic"
              label={"Name"}
              variant="standard"
              placeholder={"Name"}
              type={"text"}
              {...register("name", { required: true })}
              sx={animation}
            />
            <TextField
              id="standard-basic"
              label={"Phone"}
              variant="standard"
              placeholder={"Phone"}
              {...register("phone", { required: true, maxLength: 10 })}
              sx={animation}
            />
            <TextField
              id="standard-basic"
              label={"Email"}
              variant="standard"
              placeholder={"Email"}
              type={"text"}
              {...register("email", { required: true })}
              sx={animation}
            />
            <TextField
              id="standard-basic"
              label={"Subject"}
              variant="standard"
              placeholder={"Subject"}
              type={"text"}
              sx={animation}
              {...register("subject", { required: true })}
            />
            <TextField
              id="standard-basic"
              label={"How can help you? feel free to get in touch!"}
              // variant="standard"
              type={"text"}
              multiline
              rows={4}
              {...register("Query", { required: true })}
              sx={animation}
            />
            <Button
              type="submit"
              value="Get in touch"
              variant="contained"
              sx={{
                padding: "20px",
                backgroundColor: "#5F2C70",
                ":hover": {
                  backgroundColor: "#5F2C70",
                },
              }}
            >
              Get in touch
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Contactus;
