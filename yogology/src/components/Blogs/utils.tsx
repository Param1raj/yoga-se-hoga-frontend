import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import blogImage from "../../assets/images/BlogImage.jpeg";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
export function HoverScaleImage() {
  return (
    <Box width={"100%"} height={"100%"} overflow={"hidden"}>
      <motion.div
        style={{
          width: "100%",
          height: "100%",
          background: `url('${blogImage.src}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        whileHover={{ scale: 1.2 }}
        transition={{ type: "tween" }}
      ></motion.div>
    </Box>
  );
}

export function ToLeftTextAnimation() {
  return (
    <Box height={"fit-content"} overflow={"hidden"}>
      <motion.div
        initial={{ x: -95 }}
        whileHover={{ x: 0 }}
        style={{
          width: "150px",
          height: "100%",
          display: "flex",
          alignItems: "center",
          // justifyContent: "center",
          // border: "1px solid black",
        }}
        transition={{ type: "tween" }}
      >
        <Typography
          fontFamily={["Nunito", "sans-serif"]}
          fontWeight={"700"}
          color={"#322038"}
        >
          Read More
        </Typography>
        <ArrowRightAltOutlinedIcon sx={{ width: "45px", height: "40px" }} />
      </motion.div>
    </Box>
  );
}
