import { Stack, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
function Heading({ isForLogin }: { isForLogin: boolean }) {
  return (
    <Stack>
      <motion.h1
        initial={{ x: "100px", opacity: 0 }}
        whileInView={{
          x: ["70px", "0px"],
          opacity: [0.5, 1],
        }}
      >
        <Typography
          variant="body1"
          component={"p"}
          fontFamily={"Kumbh Sans"}
          fontWeight={"700"}
          fontSize={{ sm: isForLogin ? "2rem" : "1.3rem", md: "3rem" }}
        >
          {isForLogin ? "Have Account?" : "Don't have account?"}
        </Typography>
      </motion.h1>
      <motion.h1
        initial={{ x: "100px", opacity: 0 }}
        whileInView={{
          x: ["70px", "0px"],
          opacity: [0.5, 1],
        }}
      >
        <Typography
          variant="body1"
          component={"p"}
          fontFamily={"Kumbh Sans"}
          //   textTransform={"uppercase"}
          fontWeight={"700"}
          fontSize={{ sm: isForLogin ? "2rem" : "1.3rem", md: "3rem" }}
        >
          {isForLogin ? "Login!" : "Signup!"}
        </Typography>
      </motion.h1>
    </Stack>
  );
}

export default Heading;
