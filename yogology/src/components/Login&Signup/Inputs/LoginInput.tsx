import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { UserInput, userLogin } from "@/Utils/mutation/userLogin";

import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Cookies from "js-cookie";
function LoginInput({
  setOpenError,
  setOpenSuccess,
  setMessage,
}: {
  setOpenError: (val: boolean) => void;
  setOpenSuccess: (val: boolean) => void;
  setMessage: (val: string) => void;
}) {
  const [visible, setVisible] = useState(false);
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();

  const handleChange = () => {
    setVisible(!visible);
  };
  const {
    isLoading,
    isError,
    mutateAsync,
    isSuccess,
    data: LoginData,
    // isPaused,
  } = useMutation({
    mutationFn: async (data: UserInput) => {
      return userLogin(data);
    },
    mutationKey: ["login"],
  });

  const Submit = async (data: any) => {
    try {
      await mutateAsync(data);
      if (isError) {
        throw new Error("Failed to login");
      }
      if (isSuccess) {
        console.log("######Data######", LoginData);
        let date = new Date();
        date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000);
        Cookies.set("a_t_t", LoginData.data.data.token, {
          expires: date,
        });
        setOpenSuccess(true);
        setMessage("Login Successful");
        reset();
      }
    } catch (error) {
      setOpenError(true);
      setMessage("Login Failed");
      reset();
    }
  };

  return (
    <Stack spacing={5} component={"form"} onSubmit={handleSubmit(Submit)}>
      {/* <Stack> */}
      <motion.div
        initial={{ y: "100px", opacity: 0 }}
        animate={{ y: ["100px", "50px", "0px"], opacity: 1 }}
      >
        <TextField
          sx={{ width: "80%" }}
          label={"Email"}
          type="text"
          variant="outlined"
          color="secondary"
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
        />
        {errors.email && (
          <Typography component={"p"} color={"red"} fontSize={"12px"}>
            * Email is required field.
          </Typography>
        )}
      </motion.div>
      {/* </Stack> */}
      {/* <Stack marginTop={{ xs: "10px", md: "30px" }}> */}
      <motion.div
        initial={{ y: "100px", opacity: 0 }}
        animate={{ y: ["100px", "50px", "0px"], opacity: 1 }}
      >
        <TextField
          sx={{ width: "80%" }}
          label={"Password"}
          type={!visible ? "password" : "text"}
          variant="outlined"
          color="secondary"
          {...register("password", { required: true })}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleChange}>
                  {visible ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {errors.password && (
          <Typography component={"p"} color={"red"} fontSize={"12px"}>
            * Password is not provided.
          </Typography>
        )}
      </motion.div>
      {/* </Stack> */}
      <motion.div
        initial={{ y: "100px", opacity: 0 }}
        animate={{ y: ["100px", "50px", "0px"], opacity: 1 }}
      >
        <LoadingButton
          loading={isLoading}
          variant="contained"
          sx={{
            paddingX: "50px",
            paddingY: "10px",
            borderRadius: "0",
            backgroundColor: "#5F2C70",
            ":hover": {
              backgroundColor: "#5F2C70",
            },
          }}
          type={"submit"}
        >
          Login
        </LoadingButton>
      </motion.div>
    </Stack>
  );
}

export default LoginInput;
