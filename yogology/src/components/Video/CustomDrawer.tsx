import { Box, Button, Drawer } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
function CustomDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = () => {
    setIsOpen(true);
  };
  return (
    <Box
      width={"100%"}
      height={"70px"}
      display={{ xs: "flex", md: "none" }}
      paddingX={"25px"}
      justifyContent={"end"}
      alignItems={"end"}
    >
      <Button
        onClick={handleChange}
        sx={{
          backgroundColor: "#5F2C70",
          ":hover": {
            backgroundColor: "#5F2C70",
          },
          color: "white",
        }}
      >
        View All
      </Button>
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <Box height={"100vh"} width={"60vw"}>
          <Box
            onClick={() => {
              setIsOpen(false);
            }}
            sx={{
              // border: "1px solid black",
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              padding: "10px",
            }}
          >
            <CloseIcon />
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}

export default CustomDrawer;
