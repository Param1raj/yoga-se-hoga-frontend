"use client";
import React, { useCallback, useContext, useState } from "react";
import { Grid, Stack, Typography } from "@mui/material";
import ButtonComp from "@/components/ButtonComp";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/app/app";
import { Login_Api, Signup_Api } from "../../../apis.";
import CustomSnackbar from "../Snackbar";
import Image from "./Image";
import LoginInput from "./Inputs/LoginInput";
import SignupInput from "./Inputs/SignupInput";
import Heading from "./Heading";
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
  let { setAuth } = useContext(AuthContext);
  const [OpenSuccess, setOpenSuccess] = useState(false);
  const [OpenError, setOpenError] = useState(false);
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
  const [message, setMessage] = useState("");
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
    if (result.message !== "error") {
      if (isForLogin) {
        document.cookie = "a_t_t=" + encodeURIComponent(result.data.token);
        setAuth({ isAuth: true });
        setMessage("Login Successfull!");
      } else {
        setMessage("Registered Successfully!");
      }
      setOpenSuccess(true);
    } else {
      setMessage(result.data);
      setOpenError(true);
    }
    setFormData(
      isForLogin
        ? { email: "", password: "" }
        : { email: "", name: "", phone: "", password: "" }
    );
  }, [formData, isForLogin]);

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
        {OpenSuccess && (
          <CustomSnackbar
            Open={OpenSuccess}
            varient={"success"}
            message={message}
          />
        )}
        {OpenError && (
          <CustomSnackbar
            Open={OpenError}
            varient={"error"}
            message={message}
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
                isForLogin={isForLogin}
                handleChange={handleChange}
                formData={formData}
              />
            ) : (
              <SignupInput formData={formData} handleChange={handleChange} />
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
                    push(isForLogin ? "/signup" : "/login");
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
