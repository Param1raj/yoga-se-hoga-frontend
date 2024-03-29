import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import TransitionModal from "../Modal/TransitionModal";

enum typeEnum {
  yoga = "Yoga",
  solution = "Solutions",
  meditation = "Meditation",
}

const ServiceCard = ({
  image,
  caption,
  title,
}: {
  image: any;
  caption: string;
  title: string;
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [open, setOpen] = useState(false);
  const [type, setType] = useState<string | null>(null);
  return (
    <Grid
      height={"100%"}
      onMouseEnter={(e) => {
        setIsHovering(true);
      }}
      onMouseLeave={(e) => {
        setIsHovering(false);
      }}
    >
      <TransitionModal
        type={type}
        modal={open}
        handleClose={() => {
          setOpen(false);
        }}
      />
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          height: "100%",
          borderRadius: "0px",
          cursor: "pointer",
          boxShadow: isHovering
            ? "rgba(149, 157, 165, 0.2) 0px 8px 24px"
            : null,
          transition: "box-shadow 0.3s ease-out",
        }}
        elevation={0}
        onClick={() => {
          setOpen(true);
          setType(() => {
            return title === typeEnum.yoga
              ? typeEnum.yoga
              : title === typeEnum.meditation
              ? typeEnum.meditation
              : title === typeEnum.solution
              ? typeEnum.solution
              : null;
          });
        }}
      >
        <Stack
          spacing={3}
          width={"100%"}
          height={{ sm: "90%", md: "70%" }}
          alignItems={"center"}
        >
          <Box textAlign={"center"} color={isHovering ? "#5F2C70" : "black"}>
            {image}
          </Box>
          <Stack
            spacing={2}
            width={"80%"}
            alignItems={"center"}
            textAlign={"center"}
          >
            <Typography
              variant="h4"
              component={"h4"}
              fontSize={"20px"}
              fontWeight={"600"}
              fontFamily={["Kumbh Sans", "sans-serif"]}
              color={"#322038"}
            >
              {title}
            </Typography>
            <Typography
              fontFamily={["Nunito", "sans-serif"]}
              fontSize={"1rem"}
              color={" #847988"}
              fontWeight={"400"}
            >
              {caption}
            </Typography>
          </Stack>
          <MoreHorizIcon sx={{ color: isHovering ? "#322038" : "#847988" }} />
        </Stack>
      </Paper>
    </Grid>
  );
};
export default ServiceCard;
