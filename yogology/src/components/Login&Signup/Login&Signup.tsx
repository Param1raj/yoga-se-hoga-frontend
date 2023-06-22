import React from "react";

import { Box, Grid, Stack, Typography } from "@mui/material";
// import background from "../../assets/images/loginbackground.jpg";
import HoverInput from "@/components/HoverInput";
import ButtonComp from "@/components/ButtonComp";
import { motion } from "framer-motion";
function LoginSgnup({
  isForLogin,
  image,
}: {
  isForLogin: boolean;
  image: string;
}) {
  return (
    <Grid container>
      <Grid
        item
        xs={6}
        sx={{
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: "500px" }}
          whileInView={{
            x: ["200px", "0px"],
            opacity: [0.4, 1],
          }}
          style={{
            width: "100%",
            height: "100%",
            background: `url('${image}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></motion.div>
      </Grid>
      <Grid
        item
        xs={6}
        sx={{
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <Stack
          width={"100%"}
          height={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Stack
            width={"60%"}
            height={"60%"}
            spacing={3}
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
                fontFamily={("Kumbh Sans", "sans-serif")}
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
                  //   textTransform={"uppercase"}
                  fontWeight={"700"}
                  fontSize={"3rem"}
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
                  fontSize={"3rem"}
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
                  <HoverInput width={"80%"} label={"Email"} />
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
              <ButtonComp text={"Login"} />
            </motion.div>
            <motion.div
              initial={{ y: "100px", opacity: 0 }}
              animate={{ y: [, "0px"], opacity: 1 }}
            >
              <Typography
                variant="body1"
                fontFamily={("Kumbh Sans", "sans-serif")}
                fontWeight={"400"}
              >
                {isForLogin ? "Don't have account?" : "Already Registered?"}
                <span
                  onClick={() => {}}
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
