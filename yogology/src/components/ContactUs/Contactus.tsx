"use client";
import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import ButtonComp from "../ButtonComp";
import HoverInput from "../HoverInput";
import { LaptopChromebookRounded } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { animation } from "./utils";
import { motion } from "framer-motion";
import { BoxVariant } from "@/src/Utils/animations/variants/boxVariant";
import { textLeftVariant } from "@/src/Utils/animations/variants/textVariant";

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
      <Box
        width={{ xs: "85%", sm: "80%", md: "80%", lg: "70%", xl: "60%" }}
        height={{ xs: "90%", sm: "90%", md: "80%" }}
      >
        <motion.div
          style={{ width: "100%", height: "100%" }}
          variants={BoxVariant}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
        >
          <Grid
            // border={"1px solid red"}
            display={"grid"}
            gridTemplateColumns={{
              xs: "1fr",
              sm: "1fr",
              md: "40% 60%",
              lg: "repeat(2,1fr)",
            }}
            gridTemplateRows={{ xs: "20% 80%", sm: "20% 80%", md: "100%" }}
            width={"100%"}
            height={"100%"}
          >
            <Grid>
              <Stack
                spacing={"20px"}
                padding={{ xs: "35px", sm: "35px", md: "0px" }}
              >
                <motion.p variants={textLeftVariant}>
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
                </motion.p>
                <Stack>
                  <motion.p variants={textLeftVariant}>
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
                  </motion.p>
                  <motion.p variants={textLeftVariant}>
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
                  </motion.p>
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
              <motion.div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                variants={BoxVariant}
                whileInView={"visible"}
                initial="hidden"
              >
                <Stack
                  width={{ xs: "95%", sm: "90%" }}
                  height={{ xs: "90%", sm: "96%", xl: "98%" }}
                  sx={{ background: "#FFFFFF" }}
                  padding={{ xs: "40px", sm: "50px", xl: "30px" }}
                  spacing={"30px"}
                  component={"form"}
                  onSubmit={handleSubmit(handleChange)}
                >
                  <Box width={"100%"}>
                    <motion.div
                      variants={textLeftVariant}
                      style={{ width: "100%" }}
                    >
                      <TextField
                        id="standard-basic"
                        label={"Name"}
                        fullWidth
                        variant="standard"
                        placeholder={"Name"}
                        type={"text"}
                        {...register("name", { required: true })}
                        sx={animation}
                        // onFocus={() => (errors.name = undefined)}
                        // autoFocus={false}
                      />
                      {errors.name && (
                        <Typography color={"red"} fontSize={"0.7rem"}>
                          *This field is required
                        </Typography>
                      )}
                    </motion.div>
                  </Box>
                  <Box>
                    <motion.div
                      variants={textLeftVariant}
                      style={{ width: "100%" }}
                    >
                      <TextField
                        id="standard-basic"
                        label={"Phone"}
                        variant="standard"
                        placeholder={"Phone"}
                        fullWidth
                        {...register("phone", {
                          required: true,
                          maxLength: 10,
                        })}
                        sx={animation}
                        // onFocus={() => {
                        //   errors.phone = undefined;
                        // }}
                      />
                      {errors.phone && (
                        <Typography color={"red"} fontSize={"0.7rem"}>
                          *This field is required
                        </Typography>
                      )}
                    </motion.div>
                  </Box>
                  <Box>
                    <motion.div
                      variants={textLeftVariant}
                      style={{ width: "100%" }}
                    >
                      <TextField
                        id="standard-basic"
                        label={"Email"}
                        variant="standard"
                        placeholder={"Email"}
                        fullWidth
                        type={"text"}
                        {...register("email", { required: true })}
                        sx={animation}
                        // onFocus={() => {
                        //   errors.email = undefined;
                        // }}
                      />
                      {errors.email && (
                        <Typography color={"red"} fontSize={"0.7rem"}>
                          *This field is required
                        </Typography>
                      )}
                    </motion.div>
                  </Box>
                  <Box>
                    <motion.div
                      variants={textLeftVariant}
                      style={{ width: "100%" }}
                    >
                      <TextField
                        id="standard-basic"
                        label={"Subject"}
                        variant="standard"
                        placeholder={"Subject"}
                        type={"text"}
                        sx={animation}
                        fullWidth
                        {...register("subject", { required: true })}
                        onFocus={() => {
                          errors.subject = undefined;
                        }}
                      />
                      {errors.subject && (
                        <Typography color={"red"} fontSize={"0.7rem"}>
                          *This field is required
                        </Typography>
                      )}
                    </motion.div>
                  </Box>
                  <Box>
                    <motion.div
                      variants={textLeftVariant}
                      style={{ width: "100%" }}
                    >
                      <TextField
                        id="standard-basic"
                        label={"How can help you? feel free to get in touch!"}
                        // variant="standard"
                        type={"text"}
                        multiline
                        rows={4}
                        fullWidth
                        {...register("Query", { required: true })}
                        sx={animation}
                        // onFocus={() => {
                        //   errors.Query = undefined;
                        // }}
                      />
                      {errors.Query && (
                        <Typography color={"red"} fontSize={"0.7rem"}>
                          *This field is required
                        </Typography>
                      )}
                    </motion.div>
                  </Box>
                  <motion.div
                    variants={textLeftVariant}
                    style={{ width: "100%", display: "flex" }}
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
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Box>
    </Box>
  );
}

export default Contactus;
