import React, { useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import animation from "../../../../assets/images/animated_yoga.gif";
import { useRouter } from "next13-progressbar";
function SubscriptionModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { push } = useRouter();

  return (
    <Modal
      keepMounted
      open={open}
      onClose={() => {
        onClose();
      }}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "none",
      }}
    >
      <Box
        width={"30%"}
        height={"55vh"}
        sx={{
          // background: "white",
          padding: "50px",
          display: "flex",
          alignItems: "end",
          justifyContent: "center",
          background: `url('${animation.src}')`,
          backgroundSize: "center",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // border: "1px solid red",
          // borderRadius: "45%",
        }}
      >
        <Box
          width={"90%"}
          display={"flex"}
          height={"65%"}
          // justifyContent={"end"}
          alignItems={"center"}
          // border={"1px solid black"}
          flexDirection={"column"}
        >
          <Typography
            color={"#322038"}
            fontWeight={"700"}
            // textAlign={"center"}
            fontFamily={["Nunito", "sans-serif"]}
            fontSize={"1.2rem"}
          >
            Upgrade to our premium subscription for exclusive access to in-depth
            classes, and premium content. Deepen your practice and embrace the
            full yoga experience today!
          </Typography>
          <Stack
            spacing={"40px"}
            mt={"20px"}
            component={"form"}
            width={"100%"}
            paddingY={"20px"}
            // border={"1px solid red"}
          >
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
                onClick={() => {
                  push("/subscribe");
                }}
              >
                Subscribe
              </Button>
              <Button
                variant="outlined"
                onClick={() => {
                  // alert("called onclise");
                  onClose();
                }}
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

export default SubscriptionModal;
