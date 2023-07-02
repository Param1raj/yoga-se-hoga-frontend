"use client";

import { MouseEvent, useEffect, useState } from "react";
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
const pages = ["Home", "About", "Contact", "Pain relief"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  // const router = useRouter();
  const pathName = usePathname();
  // const query = useSearchParams();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [active, setActive] = useState<null | String>("/");

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  console.log("pathName", pathName);
  const router = useRouter();

  const container = {
    visible: {},
    hidden: {},
  };
  const child = {
    visible: { scaleX: 1 },
    hidden: { scaleX: 0 },
  };

  useEffect(() => {
    setActive(pathName);
  }, [pathName]);
  return (
    <AppBar
      sx={{
        background: "#FFF8FD;",
        boxShadow: "none",
      }}
      position="fixed"
    >
      <Container
        maxWidth={false}
        sx={{
          padding: "20px",
        }}
      >
        <Toolbar disableGutters sx={{ paddingInline: "80px" }}>
          <a href="/">
            <Image src={logo} alt="logo" />
          </a>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
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
                display: { xs: "block", md: "none" },
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
              display: { xs: "none", md: "flex" },
              justifyContent: "space-between",
              margin: "auto",
              width: { xs: "0%", sm: "20%", md: "30%", lg: "25%" },
            }}
          >
            <motion.div
              variants={container}
              initial={pathName === "/" ? "visible" : "hidden"}
              whileHover="visible"
            >
              <a href="/">
                <Box
                  sx={{
                    transition: "border 500ms ease",
                    border: "1px solid white",
                    cursor: "pointer",
                  }}
                >
                  <Typography color={"#322038"}>Home</Typography>
                  <motion.div
                    variants={child}
                    style={{ border: "1px solid #5F2C70" }}
                  ></motion.div>
                </Box>
              </a>
            </motion.div>
            <motion.div
              variants={container}
              initial={pathName == "/about" ? "visible" : "hidden"}
              whileHover="visible"
            >
              <a href="/about">
                <Box
                  sx={{
                    transition: "border 500ms ease",
                    border: "1px solid white",
                    cursor: "pointer",
                  }}
                  onClick={(e) => {
                    router.replace("/about");
                    router.refresh();
                  }}
                >
                  <Typography color={"#322038"}>About</Typography>
                  <motion.div
                    variants={child}
                    style={{ border: "1px solid #5F2C70" }}
                  ></motion.div>
                </Box>
              </a>
            </motion.div>
            <motion.div
              variants={container}
              initial={pathName === "/contact" ? "visible" : "hidden"}
              whileHover="visible"
            >
              <a href="/contact">
                <Box
                  sx={{
                    transition: "border 500ms ease",
                    border: "1px solid white",
                    cursor: "pointer",
                  }}
                  onClick={(e) => {
                    router.replace("/contact");
                  }}
                >
                  <Typography color={"#322038"}>Contact</Typography>
                  <motion.div
                    variants={child}
                    style={{ border: "1px solid #5F2C70" }}
                  ></motion.div>
                </Box>
              </a>
            </motion.div>
            <motion.div
              variants={container}
              initial={pathName === "/pain-relief" ? "visible" : "hidden"}
              whileHover="visible"
            >
              <a href="/pain-relief">
                <Box
                  sx={{
                    transition: "border 500ms ease",
                    border: "1px solid white",
                    cursor: "pointer",
                  }}
                  onClick={(e) => {
                    router.replace("/pain-relief");
                  }}
                >
                  <Typography color={"#322038"}>Pain relief</Typography>
                  <motion.div
                    variants={child}
                    style={{ border: "1px solid #5F2C70" }}
                  ></motion.div>
                </Box>
              </a>
            </motion.div>
            <motion.div
              variants={container}
              initial={pathName === "/blogs" ? "visible" : "hidden"}
              whileHover="visible"
            >
              <a href="/blogs">
                <Box
                  sx={{
                    transition: "border 500ms ease",
                    border: "1px solid white",
                    cursor: "pointer",
                  }}
                  onClick={(e) => {
                    router.replace("/blogs");
                  }}
                >
                  <Typography color={"#322038"}>Blogs</Typography>
                  <motion.div
                    variants={child}
                    style={{ border: "1px solid #5F2C70" }}
                  ></motion.div>
                </Box>
              </a>
            </motion.div>
          </Box>

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
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
