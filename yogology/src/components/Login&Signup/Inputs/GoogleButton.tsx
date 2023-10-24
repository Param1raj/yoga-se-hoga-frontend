import React from "react";
import { Tooltip } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
function GoogleButton() {
  return (
    <Tooltip title="Continue with Google">
      <GoogleIcon
        sx={{
          color: "#000",
          height: "50px",
          width: "50px",
          padding: "10px",
          border: "1px solid #000",
          borderRadius: "10px",
        }}
      />
    </Tooltip>
  );
}

export default GoogleButton;
