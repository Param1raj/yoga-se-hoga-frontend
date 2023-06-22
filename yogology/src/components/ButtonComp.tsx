"use client";

import React, { useState } from "react";
import { Button, Typography, formLabelClasses } from "@mui/material";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import { motion } from "framer-motion";
function ButtonComp({ text }: { text: string }) {
  const [open, setOpen] = useState(false);
  const IconAnimation = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: [0.9, 1],
      opacity: 1,
    },
  };
  return (
    <Button
      variant="contained"
      size="large"
      sx={{
        borderRadius: "0px",
        width: "250px",
        backgroundColor: "#5F2C70",
        ":hover": {
          backgroundColor: "#5F2C70",
        },
      }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <motion.div
        initial="hidden"
        style={{
          // border: "1px solid red",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        animate="hidden"
        whileHover="visible"
      >
        <motion.p
          style={{
            transform: open ? "translateX(-3px)" : "translateX(15px)",
            transitionDuration: "300ms",
            transitionTimingFunction: "ease",
            // border: "1px solid red",
            paddingTop: "6px",
          }}
        >
          {text}
        </motion.p>
        <motion.div
          variants={IconAnimation}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // border: "1px solid red",
          }}
        >
          <TrendingFlatIcon sx={{ marginLeft: "2px" }} />
        </motion.div>
      </motion.div>
    </Button>
  );
}

export default ButtonComp;
