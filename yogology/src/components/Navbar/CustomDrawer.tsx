"use client";
import React, { useContext, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
// import Container from "@mui/material/Container";
import { Box, Drawer, Stack, Typography } from "@mui/material";
import ButtonComp from "../ButtonComp";
import { AuthContext } from "@/app/AuthProvider";
import Cookies from "js-cookie";
import { useRouter } from "next13-progressbar";
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
  // {
  //   name: "Pain relief",
  //   pathName: "/pain-relief",
  // },
  {
    name: "Blogs",
    pathName: "/blogs",
  },
];
function CustomDrawer() {
  const [anchor, setAnchor] = useState<boolean>(false);

  const handleOpenNavMenu = () => {
    setAnchor(!anchor);
  };
  const handleCloseNavMenu = () => {
    setAnchor(!anchor);
  };
  const {
    auth: { isAuth },
  } = useContext(AuthContext);
  const { push } = useRouter();
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "flex", lg: "none" },
      }}
    >
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="default"
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={anchor} onClose={() => setAnchor(false)}>
        <Box
          width={"200px"}
          height={"100vh"}
          sx={{ background: "#FFF8FD" }}
          padding={"20px 0px"}
        >
          <Stack
            // border={"1px solid red"}
            // spacing={3}
            height={"100%"}
            width={"100%"}
          >
            {NavRoutes.map(({ name, pathName }) => (
              <Box
                height={"50px"}
                display={"flex"}
                alignItems={"center"}
                paddingLeft={"20px"}
                key={name}
                onClick={() => {
                  push(`${pathName}`);
                  setAnchor(false);
                }}
                sx={{
                  ":hover": {
                    backgroundColor: "#e5dcdc",
                  },
                }}
              >
                <Typography
                  variant="body1"
                  component={"p"}
                  fontSize={"1rem"}
                  fontWeight={"700"}
                >
                  {name}
                </Typography>
              </Box>
            ))}
            <Stack
              spacing={1}
              // border={"1px solid black"}
              // alignItems={"center"}
              paddingLeft={"20px"}
              display={{ xs: "block", sm: "none" }}
            >
              {isAuth ? (
                <>
                  <ButtonComp text="login" width={"70%"} link={"/login"} />
                  <ButtonComp
                    text="sign up"
                    width={"75%"}
                    link="/signup"
                  ></ButtonComp>
                </>
              ) : (
                <>
                  <Box
                    height={"50px"}
                    display={"flex"}
                    alignItems={"center"}
                    paddingLeft={"20px"}
                    onClick={() => {
                      push(`/`);
                      setAnchor(false);
                    }}
                    sx={{
                      ":hover": {
                        backgroundColor: "#e5dcdc",
                      },
                    }}
                  >
                    <Typography
                      variant="body1"
                      component={"p"}
                      fontSize={"1rem"}
                      fontWeight={"700"}
                    >
                      Profile
                    </Typography>
                  </Box>
                  <Box
                    height={"50px"}
                    display={"flex"}
                    alignItems={"center"}
                    paddingLeft={"20px"}
                    onClick={() => {
                      Cookies.remove("a_t_t");
                    }}
                    sx={{
                      ":hover": {
                        backgroundColor: "#e5dcdc",
                      },
                    }}
                  >
                    <Typography
                      variant="body1"
                      component={"p"}
                      fontSize={"1rem"}
                      fontWeight={"700"}
                    >
                      Logut
                    </Typography>
                  </Box>
                </>
              )}
            </Stack>
          </Stack>
        </Box>
      </Drawer>
      {/* <Menu
    id="menu-appbar"
    anchorEl={anchorElNav}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "left",
    }}
    keepMounted
    transformOrigin={{
      vertical: "top",
      horizontal: "left",
    }}
    open={Boolean(anchorElNav)}
    onClose={handleCloseNavMenu}
    sx={{
      display: { xs: "block", lg: "none" },
      width: "100vw",
    }}
  >
    {pages.map((page) => (
      <MenuItem key={page} onClick={handleCloseNavMenu}>
        <Typography textAlign="center">{page}</Typography>
      </MenuItem>
    ))}
  </Menu> */}
    </Box>
  );
}

export default CustomDrawer;
