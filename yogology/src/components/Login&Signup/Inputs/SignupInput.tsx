import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { UserSignupInput, userSignup } from "@/src/Utils/mutation/signupUser";
import googleAuthentication from "../googleAuth";
import { AuthenticationType } from "@/src/components/types";
import GoogleButton from "./GoogleButton";

function SignupInput({
  setOpenError,
  setOpenSuccess,
  setMessage,
}: {
  setOpenError: (val: boolean) => void;
  setOpenSuccess: (val: boolean) => void;
  setMessage: (val: string) => void;
}) {
  const [type, setType] = useState<AuthenticationType>(
    AuthenticationType.gernal
  );
  const [uid, setUid] = useState<string | undefined>();
  const handleUid = (value: string) => {
    setUid(value);
  };
  const {
    register,
    reset,
    handleSubmit,
    formState: {
      errors: { name, email, password, phone },
    },
    setValue,
    getValues,
  } = useForm();
  const handleValue = (name: string, value: string) => {
    setValue(name, value);
  };
  const {
    isLoading,
    isError,
    mutateAsync,
    isSuccess,
    data: signupData,
    error,
  } = useMutation({
    mutationFn: async (data: UserSignupInput) => {
      return await userSignup(data, type);
    },
    mutationKey: ["signup"],
  });
  const Submit = async (data: any) => {
    try {
      await mutateAsync({ ...data });
    } catch (error) {
      setOpenError(true);
      setMessage(error as string);
      reset();
    }
  };

  useEffect(() => {
    if (isError) {
      setOpenError(true);
      setMessage("User already exits or invalide input");
      reset();
    }
    if (isSuccess) {
      setOpenSuccess(true);
      setMessage("Successfully registered!");
      reset();
    }
  }, [isSuccess, isError]);

  const handleGoogleSignup = async (
    name: string,
    email: string,
    uid: string
  ) => {
    try {
      await mutateAsync({ name, email, uid });
    } catch (error) {
      console.log(error, "error");
    }
  };

  return (
    <Stack spacing={3} component={"form"} onSubmit={handleSubmit(Submit)}>
      <motion.div
        initial={{ y: "100px", opacity: 0 }}
        animate={{ y: ["100px", "50px", "0px"], opacity: 1 }}
      >
        <TextField
          sx={{ width: "80%" }}
          label={"Name"}
          type="text"
          variant="outlined"
          color="secondary"
          {...register("name", { required: true })}
        />{" "}
        {name && (
          <Typography component={"p"} color={"red"}>
            * Name is required field.
          </Typography>
        )}
      </motion.div>
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
          {...register("email", { required: true })}
        />
        {email && (
          <Typography component={"p"} color={"red"}>
            * Email is required field.
          </Typography>
        )}
      </motion.div>
      <motion.div
        initial={{ y: "100px", opacity: 0 }}
        animate={{ y: ["100px", "50px", "0px"], opacity: 1 }}
      >
        <TextField
          sx={{ width: "80%" }}
          label={"Password"}
          type="password"
          variant="outlined"
          color="secondary"
          {...register("password", {
            required: type === AuthenticationType.google ? false : true,
          })}
        />
        {password && (
          <Typography component={"p"} color={"red"}>
            * Password is required field.
          </Typography>
        )}
      </motion.div>
      <motion.div
        initial={{ y: "100px", opacity: 0 }}
        animate={{ y: ["100px", "50px", "0px"], opacity: 1 }}
      >
        <TextField
          sx={{ width: "80%" }}
          label={"Phone"}
          variant="outlined"
          type="text"
          color="secondary"
          {...register("phone")}
        />
        {phone && (
          <Typography component={"p"} color={"red"}>
            * Phone is required field.
          </Typography>
        )}
      </motion.div>
      <motion.div
        initial={{ y: "100px", opacity: 0 }}
        animate={{ y: ["100px", "50px", "0px"], opacity: 1 }}
      >
        <LoadingButton
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
          loading={isLoading}
          type={"submit"}
        >
          Signup
        </LoadingButton>
        <Button
          onClick={async () => {
            setType(AuthenticationType.google);
            let user = await googleAuthentication();
            if (user) {
              const { email, displayName, uid } = user;
              await handleGoogleSignup(displayName || "", email || "", uid);
            }
          }}
          sx={{ width: "fit-content" }}
        >
          <GoogleButton />
        </Button>
      </motion.div>
    </Stack>
  );
}

export default SignupInput;
