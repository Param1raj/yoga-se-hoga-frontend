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
  setOpen: () => void;
};

function CustomSnackbar({
  Open,
  varient,
  message,
  setOpen: setToOpen,
}: SnackbarProps) {
  const [open, setOpen] = useState<boolean>(Open);
  const handleClose = () => {
    setOpen(false);
    setToOpen();
  };
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert
        onClose={handleClose}
        severity={varient === "success" ? ColorEnum.success : ColorEnum.error}
        sx={{
          width: "350px",
          // border: "1px solid red",
          background: varient === "success" ? "#8AFF8A" : "#FF8A8A",
          // color: "white",
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}

export default CustomSnackbar;
