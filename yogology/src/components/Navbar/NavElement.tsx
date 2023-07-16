"use client";
import React from "react";
import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
const container = {
  visible: {},
  hidden: {},
};
const child = {
  visible: { scaleX: 1 },
  hidden: { scaleX: 0 },
};
function NavbarElement({ pathName, name }: { pathName: string; name: string }) {
  const path = usePathname();
  return (
    <motion.div
      variants={container}
      initial={pathName === path ? "visible" : "hidden"}
      whileHover="visible"
    >
      <a href={pathName}>
        <Box
          sx={{
            transition: "border 500ms ease",
            border: "1px solid white",
            cursor: "pointer",
          }}
        >
          <Typography color={"#322038"}>{name}</Typography>
          <motion.div
            variants={child}
            style={{ border: "1px solid #5F2C70" }}
          ></motion.div>
        </Box>
      </a>
    </motion.div>
  );
}

export default NavbarElement;
