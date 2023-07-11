"use client";
import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";

enum ColorEnum {
  success = "success",
  error = "error",
}
type SnackbarProps = {
  Open: boolean;
  varient: string;
  message: string;
};

function CustomSnackbar({ Open, varient, message }: SnackbarProps) {
  console.log("++++++++++++++++Open+++++++++++++called", Open);
  const [open, setOpen] = useState<boolean>(Open);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert
        onClose={handleClose}
        severity={varient === "success" ? ColorEnum.success : ColorEnum.error}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}

export default CustomSnackbar;
