import React from "react";
import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import temple from "./images/temple3.avif";
import { motion } from "framer-motion";
// import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getFirstVideoByCategory } from "@/Utils/query/getFirstVideo";
import HistoryIcon from "@mui/icons-material/History";
import { textFadeVariant } from "@/Utils/animations/variants/textVariant";
export enum Title {
  course = "Course",
  yoga = "Yoga",
  meditions = "Meditions",
  solutions = "Solutions",
  spiritualTexts = "Spiritual Texts",
}
function ContentItems({
  title,
  description,
  image,
  link,
  comingSoon,
}: {
  title: Title;
  description: string;
  image: string;
  link?: string;
  comingSoon?: boolean;
}) {
  const { push } = useRouter();
  const container = {
    hidden: { filter: "brightness(0.9)" },
    visible: { filter: comingSoon ? "brightness(0.9)" : "brightness(0.7)" },
  };
  const arrow = {
    hidden: { opacity: 0 },
    visible: { opacity: comingSoon ? 0 : 1 },
  };
  const child = {
    hidden: { opacity: "1" },
    visible: { opacity: comingSoon ? "1" : "0" },
  };

  // getFirstVidoeUuid here and then redirect to the page.
  const { data, isSuccess } = useQuery({
    queryKey: ["Beginner"],
    queryFn: async () => {
      return await getFirstVideoByCategory("Beginner");
    },
  });
  if (isSuccess) console.log("######isSuccess#######", data.data.data);
  return (
    <motion.div
      // style={{ border: "1px solid red" }}
      initial="hidden"
      variants={container}
      whileHover={"visible"}
    >
      {!comingSoon ? (
        <></>
      ) : (
        <Box
          sx={{
            position: "absolute",
            top: "-10px",
            display: "flex",
            justifyContent: "end",
            right: "-15px",
            // border: "1px solid red",
          }}
        >
          <Chip label="Coming Soon" color="secondary" icon={<HistoryIcon />} />
        </Box>
      )}
      <Box
        // border={"1px solid red"}
        borderRadius={"10px"}
        sx={{
          background: `url('${image}')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          cursor: comingSoon ? "none" : "pointer",
          color: "#F8F8F8",
          display: "flex",
          flexDirection: "column",
          // padding: "25px",box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
          // boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
          zIndex: 1,
        }}
        height={{ xs: "90%", sm: "100%", md: "90%" }}
        onClick={() => {
          if (link) {
            if (title === Title.course) {
              push(link + `/${data?.data.data}`);
            } else if (comingSoon) {
            } else {
              push(link + "?" + "page=" + "1");
            }
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
          <motion.div style={{ height: "55%", width: "55%" }} variants={arrow}>
            <SelfImprovementIcon sx={{ height: "100%", width: "100%" }} />
          </motion.div>
        </Box>
        <Stack
          borderTop={"1px solid white"}
          // borderRadius={"10px"}
          // borderRadiusY={}
          sx={{
            background: "#00000091",
            paddingX: "25px",
            paddingY: "5px",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
          }}
          display={"flex"}
          flexDirection={"column"}
          rowGap={"0px"}
          width={"100%"}
          height={{ xs: "50%", sm: "45%", md: "50%", xl: "50%" }}
          zIndex={3}
          // padding
        >
          <Box
            width={"90%"}
            height={{ xs: "30%", sm: "30%", md: "30%", lg: "40%", xl: "50%" }}
            display={"flex"}
            alignItems={"center"}
            // border={"1px solid blue"}
          >
            <motion.div variants={child}>
              <Typography
                component={"p"}
                variant="body1"
                fontWeight={"900"}
                fontSize={{
                  xs: "1.3rem",
                  sm: "1.5rem",
                  md: "1.6rem",
                  lg: "1.8rem",
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
            height={{ xs: "60%", sm: "60%", md: "55%", lg: "45%", xl: "40%" }}
            display={"flex"}
            alignItems={{ xs: "start", sm: "start" }}
            justifyContent={"space-between"}
            flexDirection={{ xs: "column", sm: "column", lg: "row" }}
          >
            <motion.div variants={child}>
              <Typography
                component={"p"}
                variant="body1"
                fontWeight={"700"}
                fontSize={{
                  xs: "1rem",
                  sm: "0.8rem",
                  md: "0.9rem",
                  lg: "1.1rem",
                  xl: "1rem",
                }}
                color={"#FFFFFF"}
                fontFamily={["Nunito", "sans-serif"]}
              >
                {description}
              </Typography>
            </motion.div>
            <motion.div
              variants={child}
              style={{ width: "65%", height: "100%" }}
            >
              <Button
                sx={{
                  background: "transparent",
                  color: "#fff",
                  borderRadius: "40px",
                  border: "2px solid white",
                  width: { xs: "100%", sm: "100%" },
                  fontWeight: "700",
                  height: "100%",
                }}
              >
                {comingSoon ? "Coming Soon" : "Explore"}
              </Button>
            </motion.div>
          </Box>
        </Stack>
      </Box>
    </motion.div>
  );
}

export default ContentItems;
