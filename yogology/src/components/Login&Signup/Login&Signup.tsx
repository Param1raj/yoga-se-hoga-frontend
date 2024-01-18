"use client";
import React, { useEffect, useState } from "react";
import { Grid, Stack, Typography } from "@mui/material";
// import ButtonComp from "@/src/components/ButtonComp";
import { motion } from "framer-motion";
import CustomSnackbar from "../Snackbar";
import Image from "./Image";
import LoginInput from "./Inputs/LoginInput";
import SignupInput from "./Inputs/SignupInput";
import Heading from "./Heading";
import { useRouter } from "next13-progressbar";
function LoginSgnup({
  isForLogin,
  image,
  redirectTo,
}: {
  isForLogin: boolean;
  image: string;
  redirectTo?: string;
}) {
  const { push } = useRouter();
  // let { setAuth } = useContext(AuthContext);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);

  const [message, setMessage] = useState("");
  useEffect(() => {
    console.log("state - success", openSuccess);
  }, [openSuccess]);

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
      height={{
        xs: isForLogin ? "100vh" : "120vh",
        sm: "60vh",
        md: "80vh",
        lg: "100vh",
      }}
    >
      <Image image={image} />
      <Grid
        sx={{
          height: "100%",
          width: "100%",
        }}
      >
        {openSuccess && (
          <CustomSnackbar
            Open={openSuccess}
            varient={"success"}
            message={message}
            setOpen={() => {
              setOpenSuccess(false);
            }}
          />
        )}
        {openError && (
          <CustomSnackbar
            Open={openError}
            varient={"error"}
            message={message}
            setOpen={() => {
              setOpenError(false);
            }}
          />
        )}
        <Stack
          width={"100%"}
          height={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Stack
            width={{ xs: "80%", sm: "90%", md: "90%", lg: "75%", xl: "60%" }}
            height={{
              xs: isForLogin ? "75%" : "95%",
              sm: isForLogin ? "60%" : "95%",
              md: isForLogin ? "70%" : "70%",
            }}
            spacing={{ xs: 1, sm: 1, md: 1.1, lg: 3 }}
            // border={"1px solid blue"}
            justifyContent={isForLogin ? "center" : "none"}
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
            <Heading isForLogin={isForLogin} />
            {isForLogin ? (
              <LoginInput
                setOpenError={(val: boolean) => setOpenError(val)}
                setOpenSuccess={(val: boolean) => setOpenSuccess(val)}
                setMessage={(val: string) => {
                  setMessage(val);
                }}
              />
            ) : (
              <SignupInput
                setOpenError={(val: boolean) => setOpenError(val)}
                setOpenSuccess={(val: boolean) => setOpenSuccess(val)}
                setMessage={(val: string) => {
                  setMessage(val);
                }}
              />
            )}

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
                    push(isForLogin ? "/signup" : "/login");
                  }}
                  style={{ color: "blue", cursor: "pointer" }}
                >
                  {isForLogin ? " Register." : " Login"}
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
