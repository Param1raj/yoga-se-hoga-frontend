import React from "react";
import {
  Box,
  Button,
  TextField,
  Modal,
  Stack,
  Typography,
} from "@mui/material";

/*
  title={"Asteya"}
  ShortDescription={
    "Learn the foundations of yoga in this online course"
  }
  LongDescription={
    "According to Crangle, some researchers have favoured a linear theory,which attempts “to interpret the origin and early of Indian contemplative practices as a sequential growth from an Aryan genesis”, just like traditional Hinduism regards the Vedas to be the ultimate source of all spiritual knowledge."
  }
  videoLink={"https://www.youtube.com/embed/jyg8pft9gRY"}
*/
function VideoModal({
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
        height={"80vh"}
        sx={{
          background: "white",
          padding: "30px",
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
          width={"80%"}
          display={"flex"}
          justifyContent={"center"}
          // border={"1px solid red"}
          flexDirection={"column"}
          // pt={"60px"}
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
            {"Create a Video"}
          </Typography>

          <Stack
            spacing={"40px"}
            mt={"10px"}
            component={"form"}
            width={"100%"}
            paddingY={"20px"}
          >
            <TextField label="Title" />
            <TextField
              label="Short Description"
              placeholder="Lorem Ipsum is simply dummy text of the printing ...."
            />
            <TextField
              label="Long Description"
              placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book........"
              multiline
              rows={5}
            />
            <TextField
              label="Vide Link"
              placeholder="https://www.youtube.com/watch?v=xyzlkjlasdf"
            />
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

export default VideoModal;
