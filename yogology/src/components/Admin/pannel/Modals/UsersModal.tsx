import React from "react";
import {
  Box,
  Button,
  TextField,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
function UsersModal({
  open,
  onClose,
  type,
}: {
  open: boolean;
  onClose: () => void;
  type: string;
}) {
  const HeadingAndContentArray = [1, 1, 1, 1];
  return (
    <Modal
      keepMounted
      open={open}
      onClose={onClose}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        width={"50%"}
        height={"75vh"}
        sx={{
          background: "white",
          padding: "50px",
          overflowY: "auto",
          "::-webkit-scrollbar": {
            display: "none",
          },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          width={"60%"}
          display={"flex"}
          justifyContent={"center"}
          //   border={"1px solid black"}
          flexDirection={"column"}
        >
          <Typography
            id="keep-mounted-modal-title"
            variant="h6"
            component="h2"
            fontWeight={"bold"}
            fontSize={"2rem"}
            fontFamily={["Kumbh Sans", "sans-serif"]}
            color={"#5F2C70"}
          >
            {"Create a user"}
          </Typography>

          <Stack
            spacing={"40px"}
            mt={"10px"}
            component={"form"}
            width={"100%"}
            paddingY={"20px"}
          >
            <TextField label="Name" />
            <TextField label="Email" placeholder="xyz@gmail.com" />
            <TextField label="Phone" placeholder="XX-XX-XX-XX-XX" />
            <TextField label="Password" placeholder="yourpassword@123'/;\]p" />
            <Box
              // border={"1px solid red"}
              height={"50px"}
              display={"flex"}
              justifyContent={"end"}
              alignItems={"center"}
            >
              <Button
                variant="contained"
                sx={{
                  marginRight: "10px",
                  background: "#5F2C70",
                  ":hover": {
                    background: "#5F2C70",
                  },
                }}
              >
                Save
              </Button>
              <Button
                variant="outlined"
                onClick={onClose}
                sx={{
                  color: "#5F2C70",
                  border: "1px solid #5F2C70",
                  ":hover": {
                    border: "1px solid #5F2C70",
                  },
                }}
              >
                Cancel
              </Button>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Modal>
  );
}

export default UsersModal;
