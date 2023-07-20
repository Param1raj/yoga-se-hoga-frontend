import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import temple from "./images/temple3.avif";
import { motion } from "framer-motion";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
function ContentItems({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  const container = {
    hidden: { filter: "brightness(0.9)" },
    visible: { filter: "brightness(0.7)" },
  };
  const arrow = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const child = {
    hidden: { opacity: "1" },
    visible: { opacity: "0" },
  };
  return (
    <motion.div
      // style={{ height: "100%" }}
      initial="hidden"
      variants={container}
      whileHover={"visible"}
    >
      <Box
        sx={{
          background: `url('${image}')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          cursor: "pointer",
          color: "#F8F8F8",
          display: "flex",
          flexDirection: "column",
          padding: "25px",
          zIndex: 1,
        }}
        height={{ xs: "90%", sm: "100%", md: "90%" }}
      >
        <Box
          height={"60%"}
          width={"100%"}
          display={"flex"}
          alignItems={"end"}
          justifyContent={"center"}
          // border={"1px solid white"}
        >
          <motion.div style={{ height: "35%", width: "55%" }} variants={arrow}>
            <ArrowRightAltIcon sx={{ height: "100%", width: "100%" }} />
          </motion.div>
        </Box>
        <Stack
          // border={"1px solid white"}
          display={"flex"}
          flexDirection={"column"}
          rowGap={"20px"}
          width={"100%"}
          height={{ xs: "30%", sm: "25%", md: "40%", xl: "40%" }}
          zIndex={3}
        >
          <Box width={"60%"} height={"60%"} display={"flex"} alignItems={"end"}>
            <motion.div variants={child}>
              <Typography
                component={"p"}
                variant="body1"
                fontWeight={"900"}
                fontSize={{
                  xs: "1.3rem",
                  sm: "2.5rem",
                  md: "2.2rem",
                  xl: "2.2rem",
                }}
                color={"#FFFFFF"}
                lineHeight={{
                  xs: "1.5rem",
                  sm: "2.5rem",
                  md: "2.5rem",
                  xl: "2.511rem",
                }}
                fontFamily={["Kumbh Sans", "sans-serif"]}
              >
                {title}
              </Typography>
            </motion.div>
          </Box>
          <Box
            // border={"1px solid white"}
            width={"100%"}
            height={"40%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <motion.div variants={child}>
              <Typography
                component={"p"}
                variant="body1"
                fontWeight={"700"}
                fontSize={{
                  xs: "0.7rem",
                  sm: "1.2rem",
                  md: "1.5rem",
                  lg: "1.3rem",
                  xl: "1rem",
                }}
                color={"#FFFFFF"}
              >
                {description}
              </Typography>
            </motion.div>
            <motion.div
              variants={child}
              style={{ width: "35%", height: "100%" }}
            >
              <Button
                sx={{
                  background: "transparent",
                  color: "#fff",
                  borderRadius: "40px",
                  border: "2px solid white",
                  width: "100%",
                  fontWeight: "700",
                  height: "100%",
                }}
              >
                Explore
              </Button>
            </motion.div>
          </Box>
        </Stack>
      </Box>
    </motion.div>
  );
}

export default ContentItems;
