"use client";
import React, { useState } from "react";
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
function Admin() {
  const [visible, setVisible] = useState(false);
  const handleChange = () => {
    setVisible(!visible);
  };
  return (
    <Box
      width={{ xs: "80%", sm: "60%", md: "40%", lg: "30%" }}
      height={"60%"}
      border={"1px solid white"}
      sx={{ background: "white", borderRadius: "10px", padding: "30px" }}
    >
      <Stack spacing={"40px"}>
        <Typography
          variant="h3"
          component={"h3"}
          fontSize={"2rem"}
          fontWeight={"600"}
          fontFamily={["Kumbh Sans", "sans-serif"]}
        >
          Please Login!
        </Typography>
        <TextField
          type="text"
          variant="outlined"
          label="Email"
          color="secondary"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AlternateEmailIcon />
              </InputAdornment>
            ),
          }}
        ></TextField>
        <TextField
          type={visible ? "password" : "text"}
          variant="outlined"
          label="Password"
          color="secondary"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <NoEncryptionIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleChange}>
                  {visible ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        ></TextField>

        <Button
          sx={{ borderRadius: "10px", padding: "15px" }}
          variant="contained"
        >
          Submit
        </Button>
      </Stack>
    </Box>
  );
}

export default Admin;
