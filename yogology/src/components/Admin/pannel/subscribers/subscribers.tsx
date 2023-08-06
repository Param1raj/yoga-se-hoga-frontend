"use client";

import React from "react";
import Layout from "../layouts/layout";
import {
  Alert,
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
// import SimpleBackdrop from "./backdrop";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import ImageUrl from "./images/icons8-check.gif";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 200,
  height: 200,
  // bgcolor: "background.paper",
  //   border: "2px solid #000",
  //   boxShadow: 24,
  p: 4,
};
function Subscribers() {
  const [open, setOpen] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleModalClose = () => setModalOpen(false);
  const handleClose = () => {
    setOpen(false);
    setModalOpen(true);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const handleClick = (data: any) => {
    setOpen(true);
    console.log(data, "+++++++++++++data++++++++++++");
  };

  return (
    <Layout backgroundColor="#fff">
      <Box
        // border={"1px solid black"}
        width={"100%"}
        height={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        {modalOpen && (
          <Modal
            open={modalOpen}
            onClose={handleModalClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={{ ...style, borderRadius: "50%" }}>
              <Button
                sx={{ color: "white", position: "relative", left: "100px" }}
                onClick={() => {
                  setModalOpen(false);
                }}
              >
                <CloseIcon />
              </Button>
              <Image
                width={120}
                height={120}
                alt="jasjflajs"
                src={ImageUrl.src}
                loading="lazy"
                // unoptimized
              />
            </Box>
          </Modal>
        )}

        <Stack
          width={"60%"}
          height={"80%"}
          // border={"1px solid black"}
          spacing={"20px"}
          component={"form"}
          onSubmit={handleSubmit(handleClick)}
        >
          <Typography
            fontWeight={"700"}
            fontFamily={["Nunito"]}
            fontSize={"2rem"}
            color={"#5F2C70"}
          >
            Make an user to subscriber
          </Typography>
          <Alert severity="info">
            This operation will make a user subscribed for one month only!
          </Alert>
          <TextField
            variant="outlined"
            label="Id"
            placeholder="10"
            type="numaric"
            {...register("id", { required: true })}
          />
          <TextField
            variant="outlined"
            label="Name"
            placeholder="XYZ"
            type="numaric"
            {...register("name", { required: true })}
          />
          <Box>
            <Button type="submit" variant="contained">
              Save
            </Button>
            <Button
              sx={{ ml: "10px" }}
              onClick={() => {
                reset();
              }}
              variant="outlined"
            >
              Cancel
            </Button>
          </Box>
        </Stack>
      </Box>
    </Layout>
  );
}

export default Subscribers;
