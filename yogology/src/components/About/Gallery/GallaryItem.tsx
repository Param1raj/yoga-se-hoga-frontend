import { Box, Typography } from "@mui/material";
import React from "react";
import { animations } from "../animation";
import { motion } from "framer-motion";
function GallaryItem({
  background,
  text,
  gridArea,
}: {
  background: string;
  text: string;
  gridArea: string;
}) {
  return (
    <Box sx={{ padding: "10px", gridArea: gridArea }}>
      <motion.div
        initial={{ opacity: 0, scale: "10px" }}
        whileInView={{ opacity: 1, scale: "0px" }}
        viewport={{ once: true }}
        style={{ width: "100%", height: "100%" }}
      >
        <Box width={"100%"} height={"100%"} overflow={"hidden"}>
          <Box
            width={"100%"}
            height={"100%"}
            // border={"1px solid blue"}
            sx={{
              background: `url('${background}')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPositionX: { md: "none" },
              backgroundPosition: { md: "center" },
              ...animations(),
            }}
          >
            <Box>
              <Typography
                color={"#322038"}
                fontFamily={["Kumbh Sans", "sans-serif"]}
                fontWeight={"700"}
                fontSize={"1.1rem"}
              >
                {text}
              </Typography>
            </Box>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
}

export default GallaryItem;
