"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  //   InputAdornment,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import ModalComp from "../Modals/BlogsModal";
import UsersModal from "../Modals/UsersModal";
import VideoModal from "../Modals/VideoModal";

function HeaderLayoutWithCreateButton({ type }: { type: string }) {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <Box
      width={"98%"}
      height={"80px"}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        paddingX: "25px",
        paddingY: "15px",
        borderRadius: "10px",
        marginTop: "15px",
        backgroundColor: "white",
      }}
    >
      {type === "blog" && openModal && (
        <ModalComp
          type={type}
          onClose={() => setOpenModal(false)}
          open={openModal}
        />
      )}
      {type === "user" && openModal && (
        <UsersModal
          type={type}
          onClose={() => setOpenModal(false)}
          open={openModal}
        />
      )}
      {type === "video" && openModal && (
        <VideoModal
          type={type}
          onClose={() => setOpenModal(false)}
          open={openModal}
        />
      )}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <TextField variant="outlined" label={type.toLocaleLowerCase() + "s"} />
        <IconButton>
          <SearchIcon sx={{ height: "100%", width: "30px" }} />
        </IconButton>
      </Box>

      <Button
        variant="contained"
        endIcon={<AddIcon />}
        onClick={() => setOpenModal(true)}
        sx={{
          background: "#5F2C70",
          ":hover": {
            background: "#5F2C70",
          },
        }}
      >
        {type.toLowerCase()}
      </Button>
    </Box>
  );
}

export default HeaderLayoutWithCreateButton;
