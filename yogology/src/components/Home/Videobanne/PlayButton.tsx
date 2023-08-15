"use client";
import React, { useEffect } from "react";
import { Box, Modal, Typography } from "@mui/material";
import { motion } from "framer-motion";
import YouTube from "react-youtube";

const style = {
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  outline: "none",
  // p: 4,
};
function PlayButton() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    // alert(open);
  };
  const handleClose = () => {
    setOpen(false);
    // alert(open);
  };
  const opts = {
    height: "700",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <Box
      padding={"70px"}
      sx={{ cursor: "pointer" }}
      // border={"1px solid red"}
      borderRadius={"50%"}
    >
      <motion.div
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
        // animate={{ x: left, y: top }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          boxSizing: "border-box",
          border: "2px solid  white",
        }}
        onClick={() => {
          handleOpen();
        }}
      >
        <Typography
          variant="subtitle1"
          fontFamily={"Kumbh Sans"}
          fontWeight={700}
          fontSize={"18px"}
          color={"#FFFFFF"}
        >
          Play
        </Typography>
      </motion.div>
      <Modal
        // keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box
          sx={{
            ...style,
            width: { xs: "20rem", sm: "40.7rem", md: "68.7rem" },
            height: "43.5rem",
            position: "absolute" as "absolute",
            top: { xs: "50%", sm: "50%", md: "50%", lg: "50%", xl: "50%" },
            left: { xs: "50%", sm: "50%", md: "50%", lg: "50%", xl: "50%" },
          }}
        >
          {/* <Box height={"10px"} width={"1px"}></Box> */}
          <YouTube videoId="eoArxEXRNlA" opts={opts} />
          {/* <iframe
            width="1100"
            height="700"
            src="https://www.youtube.com/embed/eoArxEXRNlA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe> */}
        </Box>
      </Modal>
    </Box>
  );
}

export default PlayButton;
