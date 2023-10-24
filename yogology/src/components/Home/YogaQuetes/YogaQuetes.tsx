"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
// import Typical from "react-typical";
// import Typewriter from "typewriter-effect";
import Typed from "typed.js";

import { motion } from "framer-motion";
function YogaQuetes() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["<strong>Mind!</strong>", "<strong>body!</strong>"],
      typeSpeed: 50,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  const BoxVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const textVariant = {
    hidden: {
      opacity: 0,
      y: "20px",
    },
    visible: {
      opacity: 1,
      y: "0px",
    },
  };

  return (
    <Box
      width={"100%"}
      height={{
        xs: "20rem",
        sm: "20rem",
        md: "26rem",
        lg: "26rem",
        xl: "31rem",
      }}
    >
      <motion.div
        style={{ width: "100%", height: "100%" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Box
          // border={"1px solid  #fff"}
          width={"100%"}
          height={"100%"}
          sx={{ background: " #5F2C70" }}
        >
          <Box
            width={{ sm: "100%", md: "70%" }}
            height={"100%"}
            // border={"1px solid blue"}
            margin={"auto"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Box width={{ xs: "90%", sm: "80%" }}>
              <motion.div
                variants={BoxVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{ width: "100%" }}
              >
                <Box
                  textAlign={"center"}
                  width={"100%"}
                  // border={"1px solid red"}
                  color={"#FFFFFF"}
                  display={"flex"}
                  flexDirection={"column"}
                  // justifyContent={"center"}
                  gap={{ xs: "20px", sm: "50px" }}
                >
                  <motion.p variants={textVariant}>
                    <Typography
                      variant="caption"
                      fontFamily={"sans-serif"}
                      textTransform={"uppercase"}
                      fontWeight={700}
                      fontSize={{ xs: "0.5rem", sm: "1rem" }}
                    >
                      The Ultimate wishdom
                    </Typography>
                  </motion.p>
                  <motion.p variants={textVariant}>
                    <Typography
                      variant="h4"
                      component={"h4"}
                      fontFamily={["Kumbh Sans", "sans-serif"]}
                      fontWeight={700}
                      fontSize={{
                        xs: "1rem",
                        sm: "1rem",
                        md: "1.2rem",
                        lg: "1.5rem",
                        xl: "2.1rem",
                      }}
                    >
                      Awaken your true self through yoga. Find liberation,
                      peace, and harmony as <span ref={el} />
                      {/* <Typical
                        steps={["Mind", 2000, "body!", 2000]}
                        loop={Infinity}
                        wrapper="span"
                      ></Typical> */}
                      <motion.p variants={textVariant}>
                        <Typography
                          variant="h4"
                          component={"h5"}
                          fontFamily={["Kumbh Sans", "sans-serif"]}
                          fontWeight={700}
                          sx={{
                            textDecoration: { xs: "none", sm: "underline" },
                            borderWidth: "5px",
                          }}
                          fontSize={{
                            xs: "1rem",
                            sm: "1rem",
                            md: "1.2rem",
                            lg: "1.5rem",
                            xl: "2.1rem",
                          }}
                          marginTop={{ xs: "20px", sm: "0px" }}
                        >
                          - buddha
                        </Typography>
                      </motion.p>
                    </Typography>
                  </motion.p>
                </Box>
              </motion.div>
            </Box>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
}

export default YogaQuetes;
