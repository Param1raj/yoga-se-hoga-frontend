import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import temple from "./images/temple3.avif";
import { motion } from "framer-motion";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useRouter } from "next/navigation";
function ContentItems({
  title,
  description,
  image,
  link,
}: {
  title: string;
  description: string;
  image: string;
  link?: string;
}) {
  const { push } = useRouter();
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
          // padding: "25px",
          zIndex: 1,
        }}
        height={{ xs: "90%", sm: "100%", md: "90%" }}
        onClick={() => {
          if (link) {
            push(link + "?" + "page=" + "1");
          }
        }}
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
          sx={{
            background: "#00000091",
            paddingX: "25px",
            paddingY: "5px",
          }}
          display={"flex"}
          flexDirection={"column"}
          rowGap={"20px"}
          width={"100%"}
          height={{ xs: "40%", sm: "45%", md: "50%", xl: "50%" }}
          zIndex={3}
          // padding
        >
          <Box width={"60%"} height={"60%"} display={"flex"} alignItems={"end"}>
            <motion.div variants={child}>
              <Typography
                component={"p"}
                variant="body1"
                fontWeight={"900"}
                fontSize={{
                  xs: "1.3rem",
                  sm: "1.3rem",
                  md: "1.3rem",
                  xl: "2.1rem",
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
            height={{ xs: "65%", sm: "50%", md: "30%", lg: "40%" }}
            display={"flex"}
            alignItems={{ xs: "start", sm: "center" }}
            justifyContent={"space-between"}
            flexDirection={{ xs: "column", sm: "row" }}
          >
            <motion.div variants={child}>
              <Typography
                component={"p"}
                variant="body1"
                fontWeight={"700"}
                fontSize={{
                  xs: "0.7rem",
                  sm: "0.7rem",
                  md: "0.7rem",
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
              style={{ width: "45%", height: "100%" }}
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
