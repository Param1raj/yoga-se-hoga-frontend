import { SpatialTracking } from "@mui/icons-material";
import {
  Box,
  Checkbox,
  //   Radio,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import SendIcon from "@mui/icons-material/Send";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
function EmailSubscrib() {
  return (
    <Box
      sx={{ background: "#724D67" }}
      width={"100%"}
      height={{
        xs: "25rem",
        sm: "25rem",
        md: "25rem",
        lg: "25rem",
        xl: "30rem",
      }}
    >
      <Stack
        width={{ sm: "80%", md: "65%" }}
        // border={"1px solid blue"}
        height={"100%"}
        margin={"auto"}
        justifyContent={"center"}
      >
        <Stack
          height={"60%"}
          // border={"1px solid blue"}
          spacing={4}
          alignItems={"center"}
          textAlign={"center"}
        >
          <Stack
            // border={"1px solid blue"}
            alignItems={"center"}
            justifyContent={"space-between"}
            height={"37%"}
            spacing={{ xs: 5 }}
          >
            <Typography
              variant="body1"
              component={"p"}
              color={"#FFFFFF"}
              fontWeight={"700"}
              fontFamily={["Kumbh Sans", "sans-serif"]}
              textTransform={"uppercase"}
              fontSize={"0.9rem"}
            >
              our newsletter
            </Typography>
            <Typography
              variant="h2"
              component={"h2"}
              color={"#FFFFFF"}
              fontWeight={"700"}
              fontFamily={["Kumbh Sans", "sans-serif"]}
              //   textTransform={"uppercase"}
              fontSize={{
                xs: "1.5rem",
                sm: "1.5rem",
                md: "2rem",
                lg: "2rem",
                xl: "3rem",
              }}
            >
              Subscribe for the exclusive updates!
            </Typography>
          </Stack>
          <Stack
            // border={"1px solid blue"}
            alignItems={"center"}
            height={"55%"}
            spacing={1}
            width={{ xs: "90%", sm: "80%", md: "70%", lg: "50%", xl: "40%" }}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              paddingLeft={"30px"}
              width={"80%"}
              // border={"1px solid black"}
            >
              <TextField
                id="standard-basic"
                label="Enter Your Email Address"
                variant="standard"
                sx={{
                  "& #standard-basic": {
                    color: "#FFFFFF",
                  },
                  "& #standard-basic-label": {
                    color: "#FEFCFF",
                    marginBottom: "20px",
                    fontFamily: ["Nuito", "sans-serif"],
                  },
                  "& .css-v4u5dn-MuiInputBase-root-MuiInput-root::before": {
                    borderBottom: "1px solid #ffffff",
                  },
                  "& .css-v4u5dn-MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled, .Mui-error)::before":
                    {
                      borderBottom: "2px solid #FFFFFF",
                    },
                  "& .css-v4u5dn-MuiInputBase-root-MuiInput-root::after": {
                    borderBottom: "1px solid #ffffff",
                  },
                  width: "100%",
                }}
              />
              <SendIcon
                sx={{
                  position: "relative",
                  right: "25px",
                  top: "6px",
                  color: "#FEFCFF",
                  cursor: "pointer",
                }}
              />
            </Box>
            <Box
              display={"flex"}
              //   border={"1px solid red"}
              alignItems={"center"}
              //   margin={"auto"}
              justifyContent={"center"}
              width={"80%"}
            >
              <Checkbox
                sx={{
                  color: "#FEFCFF",
                  "&.Mui-checked": {
                    color: "#FEFCFF",
                  },
                  // border: "1px solid red",
                  padding: 0,
                }}
                icon={<CheckCircleOutlineIcon />}
                checkedIcon={<CheckCircleIcon />}
              />
              <Typography
                variant="body1"
                component={"p"}
                display={"flex"}
                color={"#FEFCFF"}
                fontFamily={["Nunito", "sans-serif"]}
              >
                I agree to{" "}
                <Typography
                  marginLeft={"5px"}
                  sx={{ textDecoration: "underline" }}
                  fontFamily={["Nunito", "sans-serif"]}
                >
                  {" "}
                  Privacy Policy
                </Typography>
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default EmailSubscrib;
