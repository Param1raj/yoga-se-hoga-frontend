import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Button,
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
import { envs } from "@/Utils/config/envs";
import googleAuthentication from "../googleAuth";
import { AuthenticationType } from "@/components/types";
import GoogleIcon from "@mui/icons-material/Google";
import GoogleButton from "./GoogleButton";
import { useRouter } from "next13-progressbar";
// TODO: Replace the following with your app's Firebase project configuration

function LoginInput({
  setOpenError,
  setOpenSuccess,
  setMessage,
}: {
  setOpenError: (val: boolean) => void;
  setOpenSuccess: (val: boolean) => void;
  setMessage: (val: string) => void;
}) {
  const { push } = useRouter();
  const [type, setType] = useState<AuthenticationType>(
    AuthenticationType.gernal
  );
  const [visible, setVisible] = useState(false);
  const [uid, setUid] = useState<string | undefined>();
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
    setValue,
    getValues,
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
      return userLogin(data, type);
    },
    mutationKey: ["login"],
  });

  const Submit = async (data: any) => {
    try {
      await mutateAsync({ ...data });
    } catch (error) {
      setOpenError(true);
      setMessage("Login Failed");
      reset();
    }
  };

  useEffect(() => {
    if (isSuccess) {
      console.log("######Data######", LoginData);
      let date = new Date();
      date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000);
      Cookies.set(envs.USER_COOKIE_KEY, LoginData.data.data.token, {
        expires: date,
      });
      setOpenSuccess(true);
      setMessage("Login Successful");
      reset();
      push("/content");
    }
  }, [isSuccess]);

  const handleGoogleLogin = async (email: string, uid: string) => {
    try {
      await mutateAsync({ email, uid });
    } catch (error) {}
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
          {...register("password", {
            required: type === AuthenticationType.google ? false : true,
          })}
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
        <Button
          onClick={async () => {
            setType(AuthenticationType.google);
            let user = await googleAuthentication();
            if (user) {
              const { email, uid } = user;
              await handleGoogleLogin(email || "", uid);
            }
          }}
          // type="submit"
        >
          <GoogleButton />
        </Button>
      </motion.div>
    </Stack>
  );
}

export default LoginInput;
