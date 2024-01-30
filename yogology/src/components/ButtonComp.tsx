"use client";

import React, { useState } from "react";
import { Button, Typography, formLabelClasses } from "@mui/material";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import { motion } from "framer-motion";
import { useRouter } from "next13-progressbar";
import Link from "next/link";

type ButtonProps = {
  text: string;
  width?: string;
  link: string;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: string;
};

function ButtonComp({ text, width, link, handleClick, type }: ButtonProps) {
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
  const { push } = useRouter();
  return (
    <Link href={link}>
      <Button
        variant="contained"
        type={type ? "submit" : "button"}
        size="large"
        sx={{
          borderRadius: "0px",
          width: width
            ? width
            : { xs: "13rem", md: "14rem", lg: "13rem", xl: "15rem" },
          backgroundColor: "#5F2C70",
          ":hover": {
            backgroundColor: "#5F2C70",
          },
          marginY: "20px",
        }}
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          if (handleClick) handleClick(e);
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
    </Link>
  );
}

export default ButtonComp;
