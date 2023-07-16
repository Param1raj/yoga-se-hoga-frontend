import React from "react";
import { Box, Grid } from "@mui/material";
import { motion } from "framer-motion";
function Image({ image }: { image: string }) {
  return (
    <Grid
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: "100px" }}
        whileInView={{
          opacity: 1,
          x: "0px",
        }}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            background: `url('${image}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: { xs: "", sm: "center" },
            backgroundPositionX: {
              // xs: "-50px",
              sm: "-130px",
              md: "-100px",
              lg: "-100px",
            },
          }}
          // border={{ xs: "1px solid black" }}
        ></Box>
      </motion.div>
    </Grid>
  );
}

export default Image;
