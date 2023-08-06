import React from "react";

import { useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
function ModalComp({
  open,
  onClose,
  type,
}: {
  open: boolean;
  onClose: () => void;
  type: string;
}) {
  const HeadingAndContentArray = [1, 1, 1, 1];
  useEffect(() => {}, [HeadingAndContentArray.length]);
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
        }}
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
          {"Create a blog"}
        </Typography>
        <Stack
          spacing={"20px"}
          mt={"10px"}
          component={"form"}
          //   height={"100%"}
          paddingY={"20px"}
        >
          <Typography
            id="keep-mounted-modal-title"
            variant="h6"
            component="h2"
            fontWeight={"bold"}
            fontSize={"1.3rem"}
            fontFamily={"Nunito"}
            color={"#5F2C70"}
          >
            Header
          </Typography>
          <TextField
            fullWidth
            label="Your Image url"
            placeholder="https://someimage.org.com/image"
          />
          <TextField
            fullWidth
            label="Heading of your blog"
            placeholder="Solution to daily life problems"
          />
          <Typography
            id="keep-mounted-modal-title"
            variant="h6"
            component="h2"
            fontWeight={"bold"}
            fontSize={"1.3rem"}
            fontFamily={"Nunito"}
            color={"#5F2C70"}
          >
            Introduction
          </Typography>
          <TextField
            fullWidth
            rows={4}
            label="Give an intro to your blog"
            multiline
          />

          <Typography
            id="keep-mounted-modal-title"
            variant="h6"
            component="h2"
            fontWeight={"bold"}
            fontSize={"1.3rem"}
            fontFamily={"Nunito"}
            color={"#5F2C70"}
          >
            Content
          </Typography>

          {HeadingAndContentArray &&
            HeadingAndContentArray.map((data, index) => {
              return (
                <>
                  <TextField fullWidth label={`Heading ${index + 1}`} />
                  <TextField
                    fullWidth
                    rows={4}
                    label={`Content for above heading ${index + 1}`}
                    multiline
                  />
                </>
              );
            })}
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
    </Modal>
  );
}

export default ModalComp;
