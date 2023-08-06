import { Box } from "@mui/material";
import React, { ReactNode } from "react";

function Layout({
  children,
  backgroundColor,
}: {
  children: ReactNode;
  backgroundColor?: string;
}) {
  return (
    <Box
      width={"100%"}
      height={"100%"}
      sx={{
        backgroundColor: backgroundColor ? backgroundColor : "#D3D3D3",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingBottom: "5px",
      }}
    >
      {children}
    </Box>
  );
}

export default Layout;
