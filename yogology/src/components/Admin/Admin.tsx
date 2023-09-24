"use client";
import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import NoEncryptionIcon from "@mui/icons-material/NoEncryption";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useForm } from "react-hook-form";
import { Admin_Login_Api } from "../../../apis";
import { AuthContext } from "@/app/AuthProvider";
import CustomSnackbar from "../Snackbar";
import { useRouter } from "next/navigation";
function Admin() {
  const [visible, setVisible] = useState(false);
  let { setAuth, auth } = useContext(AuthContext);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [message, setMessage] = useState("");
  const { push } = useRouter();
  const handleChange = () => {
    setVisible(!visible);
  };
  const {
    reset,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const submit = async (data: any) => {
    console.log(data, "###########data###############");
    try {
      let result = await fetch(Admin_Login_Api, {
        method: "Post",
        body: JSON.stringify({ ...data }),
        headers: {
          "content-Type": "application/json",
        },
      });
      let res = await result.json();

      if (res.message !== "error") {
        let date = new Date();
        date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000);
        const expires = "expires=" + date.toUTCString();
        document.cookie =
          "a_d_t=" +
          encodeURIComponent(res.data.token) +
          ";" +
          "expires=" +
          date.toUTCString() +
          ";path=/";
        setAuth({ isAdmin: true, isAuth: true });
        setMessage("Login Successful!");
        setOpenSuccess(true);
        reset();
        push("/admin/pannel");
      } else {
        throw new Error("failed login");
      }
    } catch (error) {
      console.log("error------>", error);
      setMessage("Failed to Login");
      setOpenError(true);
    }
  };
  // console.log(openError, "Open Error!");
  // useEffect(() => {
  // }, [openSuccess]);
  return (
    <Box
      width={{ xs: "80%", sm: "60%", md: "40%", lg: "30%" }}
      height={"60%"}
      border={"1px solid white"}
      sx={{ background: "white", borderRadius: "10px", padding: "30px" }}
    >
      <Stack
        spacing={"40px"}
        component={"form"}
        onSubmit={handleSubmit(submit)}
      >
        <Typography
          variant="h3"
          component={"h3"}
          fontSize={"2rem"}
          fontWeight={"600"}
          fontFamily={["Kumbh Sans", "sans-serif"]}
        >
          Please Login!
        </Typography>
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
        <Box width={"100%"}>
          <TextField
            type="text"
            variant="outlined"
            label="Email"
            color="secondary"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AlternateEmailIcon />
                </InputAdornment>
              ),
            }}
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          ></TextField>
          {errors.email && (
            <Typography component={"p"} color={"red"}>
              * Email is required field.
            </Typography>
          )}
        </Box>
        <Box width={"100%"}>
          <TextField
            type={!visible ? "password" : "text"}
            variant="outlined"
            label="Password"
            color="secondary"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <NoEncryptionIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleChange}>
                    {!visible ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            {...register("password", { required: true })}
          ></TextField>
          {errors.password && (
            <Typography component={"p"} color={"red"}>
              * Password is required field.
            </Typography>
          )}
        </Box>

        <Button
          sx={{ borderRadius: "10px", padding: "15px" }}
          variant="contained"
          type="submit"
        >
          Submit
        </Button>
      </Stack>
    </Box>
  );
}

export default Admin;
