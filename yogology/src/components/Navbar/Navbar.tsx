"use client";
import React from "react";
import { AppBar, Box, Toolbar } from "@mui/material";

import Image from "next/image";
import logo from "../../assets/images/GitaWebLogo.png";
import ButtonComp from "../ButtonComp";
import CustomDrawer from "./CustomDrawer";
import CustomManu from "./CustomManu";
import NavbarElement from "./NavElement";
import "./navbar.css";
const NavRoutes = [
  {
    name: "Home",
    pathName: "/",
  },
  {
    name: "About",
    pathName: "/about",
  },
  {
    name: "Contact",
    pathName: "/contact",
  },
  {
    name: "Blogs",
    pathName: "/blogs",
  },
];
function Navbar() {
  return (
    <AppBar
      sx={{
        background: "#FFF8FD;",
        boxShadow: "none",
        // border: "1px solid black",
        display: "flex",
        maxWidth: "100vw",
      }}
      position="fixed"
    >
      <Box
        sx={{
          padding: { xs: "0.8rem", sm: "0.8rem", md: "0.5rem" },
        }}
        // border={"1px solid red"}
        width={"100%"}
      >
        <Toolbar
          disableGutters
          sx={{
            paddingInline: { xs: "10px", lg: "30px" },
            display: { xs: "flex" },
            justifyContent: "space-between",
          }}
        >
          <a href="/">
            <Image src={logo} alt="logo" />
          </a>
          <CustomDrawer />
          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              justifyContent: "space-between",
              margin: "auto",
              width: { xs: "0%", sm: "20%", md: "45%", lg: "35%", xl: "20%" },
            }}
          >
            {NavRoutes.map(({ pathName, name }) => (
              <NavbarElement key={name} pathName={pathName} name={name} />
            ))}
          </Box>
          <CustomManu>
            <Box
              display={{ xs: "none", sm: "flex" }}
              // border={"1px solid black"}
              // alignItems={"center"}
              columnGap={"10px"}
            >
              <ButtonComp text="Login" width={"10rem"} link="/login" />
              <ButtonComp text="Sign up" width={"10rem"} link="/signup" />
            </Box>
          </CustomManu>
        </Toolbar>
      </Box>
    </AppBar>
  );
}

export default Navbar;
