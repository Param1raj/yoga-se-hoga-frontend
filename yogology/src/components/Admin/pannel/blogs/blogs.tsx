"use client";
import { Box, Button } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
function Blogs() {
  return (
    <Box
      width={"100%"}
      height={"100%"}
      sx={{
        backgroundColor: "#D3D3D3",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box
        width={"98%"}
        height={"80px"}
        sx={{
          display: "flex",
          justifyContent: "end",
          paddingRight: "25px",
          paddingY: "15px",
          borderRadius: "10px",
          marginTop: "15px",
          backgroundColor: "white",
        }}
      >
        <Button variant="contained" endIcon={<AddIcon />}>
          Create
        </Button>
      </Box>
      <Box width={"98%"} height={"86%"} sx={{ backgroundColor: "white" }}></Box>
    </Box>
  );
}

export default Blogs;
