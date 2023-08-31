import React from "react";
import { motion } from "framer-motion";
import { Stack, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { UserSignupInput, userSignup } from "@/Utils/mutation/signupUser";

function SignupInput({
  setOpenError,
  setOpenSuccess,
  setMessage,
}: {
  setOpenError: (val: boolean) => void;
  setOpenSuccess: (val: boolean) => void;
  setMessage: (val: string) => void;
}) {
  const {
    register,
    reset,
    handleSubmit,
    formState: {
      errors: { name, email, password, phone },
    },
  } = useForm();
  const {
    isLoading,
    isError,
    mutateAsync,
    isSuccess,
    data: signupData,
  } = useMutation({
    mutationFn: async (data: UserSignupInput) => {
      return await userSignup(data);
    },
    mutationKey: ["signup"],
  });
  const Submit = async (data: any) => {
    try {
      await mutateAsync(data);
      if (isError) throw new Error("failed!");
      if (isSuccess) {
        console.log(
          "###################data Signup###################",
          signupData
        );
        setOpenSuccess(true);
        setMessage("Successfully registered!");
        reset();
      }
    } catch (error) {
      setOpenError(true);
      setMessage("Failed to register your account!");
      reset();
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
          {...register("password", { required: true })}
        />
        {password && (
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
          label={"Phone"}
          variant="outlined"
          type="text"
          color="secondary"
          {...register("phone", { required: true })}
        />
        {phone && (
          <Typography component={"p"} color={"red"}>
            * Email is required field.
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
      </motion.div>
    </Stack>
  );
}

export default SignupInput;
