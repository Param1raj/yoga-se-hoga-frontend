import { Box } from "@mui/material";
import React, { ReactNode } from "react";

function BodyLayout({ children }: { children: ReactNode }) {
  return (
    <Box
      width={"98%"}
      height={"85%"}
      borderRadius={"10px"}
      sx={{
        backgroundColor: "white",
        overflowY: "auto",
        "::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {children}
    </Box>
  );
}

export default BodyLayout;
