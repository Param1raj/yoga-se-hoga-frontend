"use client";
import React, { useCallback } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import HoverInput from "@/components/HoverInput";
import ButtonComp from "@/components/ButtonComp";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
function LoginSgnup({
  isForLogin,
  image,
}: {
  isForLogin: boolean;
  image: string;
}) {
  const Login = useCallback(() => {}, []);
  const { replace } = useRouter();
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
      height={{ xs: "100vh ", sm: "60vh", md: "80vh", lg: "100vh" }}
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
            x: ["200px", "0px"],
            opacity: [0.4, 1],
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
            // border={"1px solid black"}
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
            height={{ xs: "80%", sm: isForLogin ? "60%" : "90%" }}
            spacing={{ xs: 0.5, sm: 1, md: 1.1, lg: 3 }}
            // border={"1px solid blue"}
          >
            <motion.h2
              style={{ opacity: 0 }}
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
                style={{ opacity: 0 }}
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
                  fontSize={{ sm: "2rem", md: "3rem" }}
                >
                  {isForLogin ? "Have Account?" : "Don't have account?"}
                </Typography>
              </motion.h1>
              <motion.h1
                style={{ opacity: 0 }}
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
                  fontSize={{ sm: "2rem", md: "3rem" }}
                >
                  {isForLogin ? "Login!" : "Signup!"}
                </Typography>
              </motion.h1>
            </Stack>
            <Grid container>
              <Grid item xs={12}>
                <motion.div
                  initial={{ y: "100px", opacity: 0 }}
                  animate={{ y: ["50px", "0px"], opacity: 1 }}
                >
                  <HoverInput
                    width={"80%"}
                    label={isForLogin ? "Email" : "Phone"}
                  />
                </motion.div>
              </Grid>
              <Grid item xs={12} marginTop={"30px"}>
                <motion.div
                  initial={{ y: "100px", opacity: 0 }}
                  animate={{ y: ["50px", "0px"], opacity: 1 }}
                >
                  <HoverInput width={"80%"} label={"Password"} />
                </motion.div>
              </Grid>
            </Grid>
            <motion.div
              initial={{ y: "100px", opacity: 0 }}
              animate={{ y: ["50px", "0px"], opacity: 1 }}
            >
              <ButtonComp text={isForLogin ? "Login" : "Sing up"} />
            </motion.div>
            <motion.div
              initial={{ y: "100px", opacity: 0 }}
              animate={{ y: ["50px"], opacity: 1 }}
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
