"use client";
import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import images from "@/assets/images/contactUs.jpeg";
// import ButtonComp from "@/src/components/ButtonComp";
// import HoverInput from "@/src/components/HoverInput";
import { animation } from "@/src/components/ContactUs/utils";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { BoxVariant } from "@/src/Utils/animations/variants/boxVariant";
import { textLeftVariant } from "@/src/Utils/animations/variants/textVariant";

function ContactUs() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const handleChange = async (data: any) => {
    try {
      let res = await fetch("/api/getintouch", {
        method: "POST",
        body: JSON.stringify({
          last_name: data.last_name,
          email: data.email,
          name: data.name,
        }),
        headers: {
          contentType: "application/json",
        },
      });
      const result = await res.json();
      console.log("result:", result);
      reset();
    } catch (error) {
      console.log({ error: errors });
    }
  };
  return (
    <Box height={{ xs: "30rem", sm: "40rem" }} width={"100%"}>
      <motion.div
        variants={BoxVariant}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true }}
        style={{ width: "100%", height: "100%" }}
      >
        <Grid
          height={"100%"}
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
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: [0.1, 0.3, 0.6, 1] }}
              viewport={{ once: true }}
              style={{ width: "100%", height: "100%" }}
            >
              <Box
                display={"flex"}
                alignItems={{ sm: "none", md: "center" }}
                justifyContent={{ sm: "center" }}
                width={"100%"}
                height={"100%"}
              >
                <Stack
                  width={{ sm: "90%", md: "85%", lg: "75%", xl: "60%" }}
                  height={{ sm: "90%", md: "80%" }}
                  sx={{ background: "#ffffff" }}
                  // border={"1px solid black"}
                  padding={{ xs: "40px", sm: "40px", md: "50px" }}
                  spacing={4}
                  component={"form"}
                  onSubmit={handleSubmit(handleChange)}
                >
                  <motion.p variants={textLeftVariant}>
                    <Typography
                      variant="body1"
                      fontFamily={["Kumbh Sans", "sans-serif"]}
                      textTransform={"uppercase"}
                      fontWeight={"600"}
                    >
                      Contact Us
                    </Typography>
                  </motion.p>
                  <Stack>
                    <motion.p variants={textLeftVariant}>
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
                    </motion.p>
                    <motion.p variants={textLeftVariant}>
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
                    </motion.p>
                  </Stack>
                  <Grid container spacing={1} paddingLeft={"-10px"}>
                    <Grid item xs={5}>
                      <Box width={"100%"}>
                        <TextField
                          id="standard-basic"
                          label={"Name"}
                          fullWidth
                          variant="standard"
                          placeholder={"Name"}
                          type={"text"}
                          {...register("name", { required: true })}
                          sx={animation}
                          color="secondary"
                        />
                        {errors.name && (
                          <Typography color={"red"} fontSize={"0.7rem"}>
                            *What is your first name, sir?
                          </Typography>
                        )}
                      </Box>
                    </Grid>
                    <Grid item xs={5}>
                      <Box width={"100%"}>
                        <TextField
                          id="standard-basic"
                          label={"Last Name"}
                          fullWidth
                          variant="standard"
                          placeholder={"Last Name"}
                          type={"text"}
                          {...register("last_name", { required: true })}
                          sx={animation}
                          color="secondary"
                        />
                        {errors.last_name && (
                          <Typography color={"red"} fontSize={"0.7rem"}>
                            *What is your Last Name, sir?
                          </Typography>
                        )}
                      </Box>
                    </Grid>
                    <Grid item xs={5}>
                      <Box width={"100%"}>
                        <TextField
                          id="standard-basic"
                          label={"Email"}
                          fullWidth
                          variant="standard"
                          placeholder={"Email"}
                          type={"text"}
                          {...register("email", { required: true })}
                          sx={animation}
                          color="secondary"
                        />
                        {errors.email && (
                          <Typography color={"red"} fontSize={"0.7rem"}>
                            *Please provide your email.
                          </Typography>
                        )}
                      </Box>
                    </Grid>
                  </Grid>
                  <motion.div
                    variants={textLeftVariant}
                    style={{ width: "100%", display: "grid" }}
                  >
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
                  </motion.div>
                </Stack>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </motion.div>
    </Box>
  );
}

export default ContactUs;
