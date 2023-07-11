import { TextField } from "@mui/material";
import React from "react";

function HoverInput({
  label,
  width,
  placeholder,
  name,
  handleChange,
  value,
  type,
}: {
  label: string;
  width: string;
  placeholder?: string;
  handleChange: any;
  name: string;
  value?: string;
  type?: string;
}) {
  return (
    <TextField
      id="standard-basic"
      label={label}
      variant="standard"
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={(e: any) => {
        handleChange(e);
      }}
      type={type}
      sx={{
        "& #standard-basic": {
          color: "#847988",
        },
        "& #standard-basic-label": {
          color: "#847988",
          marginBottom: "20px",
          fontFamily: ["Nuito", "sans-serif"],
        },
        "& .css-v4u5dn-MuiInputBase-root-MuiInput-root": {
          borderBottom: !placeholder ? "1px solid #847988" : "",
        },
        "& .css-v4u5dn-MuiInputBase-root-MuiInput-root::before": {
          content: '""',
          display: "block",
          width: "0%",
          height: "1px",
          background: "#000",
          transition: "width .3s",
        },
        "& .css-v4u5dn-MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled, .Mui-error)::before":
          {
            borderBottom: "1px solid black",
            width: "100%",
          },

        "& .css-v4u5dn-MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled, .Mui-error)::after":
          {
            borderBottom: "1px solid black",
            width: "100%",
          },
        "& .css-v4u5dn-MuiInputBase-root-MuiInput-root::after": {
          borderBottom: "1px solid #847988",
          content: '""',
          display: "block",
          width: "0%",
          height: "1px",
          background: "#000",
          transition: "width .3s",
        },
        width: { width },
      }}
    />
  );
}

export default HoverInput;
