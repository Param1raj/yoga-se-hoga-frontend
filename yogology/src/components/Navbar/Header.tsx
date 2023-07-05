"use client";

import { MouseEvent, useContext, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Image from "next/image";
import logo from "../../assets/images/GitaWebLogo.png";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { AuthContext } from "@/app/app";
import ButtonComp from "../ButtonComp";
const pages = ["Home", "About", "Contact", "Pain relief"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const container = {
  visible: {},
  hidden: {},
};
const child = {
  visible: { scaleX: 1 },
  hidden: { scaleX: 0 },
};

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
    name: "Pain relief",
    pathName: "/pain-relief",
  },
  {
    name: "Blogs",
    pathName: "/blogs",
  },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const Auth = useContext(AuthContext);
  // console.log("Auth", Auth);
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const router = useRouter();
  return (
    <AppBar
      sx={{
        background: "#FFF8FD;",
        boxShadow: "none",
        // border: "1px solid red",
      }}
      position="fixed"
    >
      <Box
        // maxWidth={false}
        // border={"1px solid black"}
        sx={{
          padding: { sm: "0.8rem", md: "1.3rem" },
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            paddingInline: { sm: "30px", md: "80px" },
            display: { xs: "flex" },
            justifyContent: "space-between",
          }}
        >
          <a href="/">
            <Image src={logo} alt="logo" />
          </a>
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
            <Menu
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
            </Menu>
          </Box>
          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              justifyContent: "space-between",
              margin: "auto",
              width: { xs: "0%", sm: "20%", md: "45%", lg: "35%", xl: "25%" },
              // border: "1px solid red",
            }}
          >
            {NavRoutes.map(({ pathName, name }) => (
              <NavbarElement pathName={pathName} name={name} />
            ))}
          </Box>

          {Auth.isAuth ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Pemy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px", borderRadius: 0 }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <Box display={"flex"} columnGap={"10px"}>
              <ButtonComp text="Login" width={true} link="/login" />
              <ButtonComp text="Sign up" width={true} link="/signup" />
            </Box>
          )}
        </Toolbar>
      </Box>
    </AppBar>
  );
}

function NavbarElement({ pathName, name }: { pathName: string; name: string }) {
  const path = usePathname();
  return (
    <motion.div
      variants={container}
      initial={pathName === path ? "visible" : "hidden"}
      whileHover="visible"
    >
      <a href={pathName}>
        <Box
          sx={{
            transition: "border 500ms ease",
            border: "1px solid white",
            cursor: "pointer",
          }}
        >
          <Typography color={"#322038"}>{name}</Typography>
          <motion.div
            variants={child}
            style={{ border: "1px solid #5F2C70" }}
          ></motion.div>
        </Box>
      </a>
    </motion.div>
  );
}

export default ResponsiveAppBar;
