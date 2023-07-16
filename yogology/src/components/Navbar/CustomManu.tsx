"use client";
import { AuthContext } from "@/app/app";
import {
  Avatar,
  Box,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { MouseEvent, ReactNode, useContext, useState } from "react";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
const settings = ["Profile", "Account", "Dashboard", "Logout"];
function CustomManu({ children }: { children: ReactNode }) {
  const { push } = useRouter();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const {
    auth: { isAuth },
  } = useContext(AuthContext);
  // console.log("Auth", Auth);

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return isAuth ? (
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
          <MenuItem
            key={setting}
            onClick={() => {
              if (setting === "Logout") {
                Cookies.remove("a_t_t");
                push("/", {});
              }
              handleCloseUserMenu();
            }}
          >
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  ) : (
    <> {children}</>
  );
}

export default CustomManu;
