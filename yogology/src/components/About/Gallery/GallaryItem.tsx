import { Box, Typography } from "@mui/material";
import React from "react";
import { animations } from "../animation";

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
    </Box>
  );
}

export default GallaryItem;
