"use client";
import { AuthContext } from "@/src/app/AuthProvider";
import {
  Avatar,
  Box,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import React, {
  MouseEvent,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import IconButton from "@mui/material/IconButton";
// import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Me } from "../../../apis";
import { envs } from "@/src/Utils/config/envs";
import { useRouter } from "next13-progressbar";
const settings = ["Dashboard", "Logout"];

// type User = {
//   name: string;
//   email: string;
//   phone: string;
//   subscription: boolean;
//   subscriptionStartDate?: string;
//   subscriptionEndDate?: string;
// };

function CustomManu({ children }: { children: ReactNode }) {
  // const [user, setUser] = useState<User | null>(null);
  const { push, refresh } = useRouter();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const {
    auth: { isAuth, token },
  } = useContext(AuthContext);

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return isAuth ? (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar sx={{ padding: "0px" }}>
            <AccountCircleIcon
              sx={{ width: "100%", height: "100%", color: "#5F2C70" }}
            />
          </Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        sx={{
          mt: "45px",
          borderRadius: 0,
          // border: "1px solid red",
          width: "350px",
        }}
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
                Cookies.remove(envs.USER_COOKIE_KEY);
                Cookies.remove(envs.ADMIN_COOKIE_KEY);
                push("/", {});
                refresh();
              } else if (setting === "Dashboard") {
                push("/content");
              }
              handleCloseUserMenu();
            }}
            sx={{ width: "100%" }}
          >
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  ) : !isAuth ? (
    <> {children}</>
  ) : (
    <></>
  );
}

export default CustomManu;
