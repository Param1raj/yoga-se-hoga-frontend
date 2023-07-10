"use client";
import React, { useCallback, useContext, useState } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import HoverInput from "@/components/HoverInput";
import ButtonComp from "@/components/ButtonComp";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/app/app";
import { Login_Api, Signup_Api } from "../../../apis.";
function LoginSgnup({
  isForLogin,
  image,
  redirectTo,
}: {
  isForLogin: boolean;
  image: string;
  redirectTo?: string;
}) {
  const { back, replace } = useRouter();
  // let { isAuth, hasSubscribed } = useContext(AuthContext);
  const [formData, setFormData] = useState(
    isForLogin
      ? {
          email: "",
          password: "",
        }
      : {
          name: "",
          email: "",
          phone: "",
          password: "",
        }
  );
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const Login = useCallback(async () => {
    const res = await fetch(isForLogin ? Login_Api : Signup_Api, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "content-Type": "application/json",
      },
    });
    const result = await res.json();
    isForLogin ? replace("/") : redirectTo ? replace(redirectTo) : null;
    console.log(res, result);
  }, [formData.email, formData.password]);

  return (
    <Grid
      display={"grid"}
      gridTemplateColumns={{
        xs: "1fr",
        sm: isForLogin ? "55% 45%" : "50% 50%",
        md: "repeat(2,1fr)",
      }}
      rowGap={"10px"}
      gridTemplateRows={{ xs: "40% 60%", sm: "none" }}
      width={"100%"}
      height={{ xs: "100vh", sm: "60vh", md: "80vh", lg: "100vh" }}
    >
      <Grid
        // item
        // xs={6}
        sx={{
          // minHeight: "100vh",
          width: "100%",
          height: "100%",
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: "100px" }}
          whileInView={{
            opacity: 1,
            x: "0px",
          }}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              background: `url('${image}')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: { xs: "", sm: "center" },
              backgroundPositionX: {
                // xs: "-50px",
                sm: "-130px",
                md: "-100px",
                lg: "-100px",
              },
            }}
            // border={{ xs: "1px solid black" }}
          ></Box>
        </motion.div>
      </Grid>
      <Grid
        // item
        // xs={6}
        sx={{
          // minHeight: "100vh",
          height: "100%",
          width: "100%",
        }}
        // border={"1px solid blue"}
      >
        <Stack
          width={"100%"}
          height={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Stack
            width={{ xs: "80%", sm: "90%", md: "90%", lg: "75%", xl: "60%" }}
            height={{
              xs: isForLogin ? "75%" : "85%",
              sm: isForLogin ? "60%" : "95%",
            }}
            spacing={{ xs: 1, sm: 1, md: 1.1, lg: 3 }}
            // border={"1px solid blue"}
          >
            <motion.h2
              // style={{ opacity: 0 }}
              initial={{ x: "100px", opacity: 0 }}
              whileInView={{
                x: ["70px", "0px"],
                opacity: [0.5, 1],
              }}
            >
              <Typography
                variant="body1"
                fontFamily={["Kumbh Sans", "sans-serif"]}
                textTransform={"uppercase"}
                fontWeight={"600"}
              >
                Welcome
              </Typography>
            </motion.h2>
            <Stack>
              <motion.h1
                initial={{ x: "100px", opacity: 0 }}
                whileInView={{
                  x: ["70px", "0px"],
                  opacity: [0.5, 1],
                }}
              >
                <Typography
                  variant="body1"
                  component={"p"}
                  fontFamily={"Kumbh Sans"}
                  fontWeight={"700"}
                  fontSize={{ sm: isForLogin ? "2rem" : "1.3rem", md: "3rem" }}
                >
                  {isForLogin ? "Have Account?" : "Don't have account?"}
                </Typography>
              </motion.h1>
              <motion.h1
                initial={{ x: "100px", opacity: 0 }}
                whileInView={{
                  x: ["70px", "0px"],
                  opacity: [0.5, 1],
                }}
              >
                <Typography
                  variant="body1"
                  component={"p"}
                  fontFamily={"Kumbh Sans"}
                  //   textTransform={"uppercase"}
                  fontWeight={"700"}
                  fontSize={{ sm: isForLogin ? "2rem" : "1.3rem", md: "3rem" }}
                >
                  {isForLogin ? "Login!" : "Signup!"}
                </Typography>
              </motion.h1>
            </Stack>
            {isForLogin ? (
              <Grid container>
                <Grid item xs={12}>
                  <motion.div
                    initial={{ y: "100px", opacity: 0 }}
                    animate={{ y: ["100px", "50px", "0px"], opacity: 1 }}
                  >
                    <HoverInput
                      width={"80%"}
                      label={isForLogin ? "Email" : "Phone"}
                      handleChange={handleChange}
                      name="email"
                    />
                  </motion.div>
                </Grid>
                <Grid item xs={12} marginTop={{ xs: "10px", md: "30px" }}>
                  <motion.div
                    initial={{ y: "100px", opacity: 0 }}
                    animate={{ y: ["100px", "50px", "0px"], opacity: 1 }}
                  >
                    <HoverInput
                      width={"80%"}
                      label={"Password"}
                      handleChange={handleChange}
                      name="password"
                    />
                  </motion.div>
                </Grid>
              </Grid>
            ) : (
              <Grid container>
                <Grid item xs={12} marginTop={{ xs: "10px", md: "30px" }}>
                  <HoverInput
                    width={"80%"}
                    label={"Name"}
                    handleChange={handleChange}
                    name="name"
                  />
                </Grid>
                <Grid item xs={12} marginTop={{ xs: "10px", md: "30px" }}>
                  <HoverInput
                    width={"80%"}
                    label={"Email"}
                    handleChange={handleChange}
                    name="email"
                  />
                </Grid>
                <Grid item xs={12} marginTop={{ xs: "10px", md: "30px" }}>
                  <HoverInput
                    width={"80%"}
                    label={"Password"}
                    handleChange={handleChange}
                    name="password"
                  />
                </Grid>
                <Grid item xs={12} marginTop={{ xs: "10px", md: "30px" }}>
                  <HoverInput
                    width={"80%"}
                    label={"Phone"}
                    handleChange={handleChange}
                    name="phone"
                  />
                </Grid>
              </Grid>
            )}
            <motion.div
              initial={{ y: "100px", opacity: 0 }}
              animate={{ y: ["100px", "50px", "0px"], opacity: 1 }}
            >
              <ButtonComp
                text={isForLogin ? "Login" : "Sing up"}
                handleClick={Login}
              />
            </motion.div>
            <motion.div
              initial={{ y: "100px", opacity: 0 }}
              animate={{ y: ["100px", "50px", "0px"], opacity: 1 }}
            >
              <Typography
                variant="body1"
                fontFamily={["Kumbh Sans", "sans-serif"]}
                fontWeight={"400"}
              >
                {isForLogin ? "Don't have account?" : "Already Registered?"}
                <span
                  onClick={() => {
                    replace(isForLogin ? "/signup" : "/login");
                  }}
                  style={{ color: "blue", cursor: "pointer" }}
                >
                  {isForLogin ? "Register." : " Login"}
                </span>
              </Typography>
            </motion.div>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default LoginSgnup;
