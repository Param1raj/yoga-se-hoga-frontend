import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import BookIcon from "@mui/icons-material/Book";
import PaidIcon from "@mui/icons-material/Paid";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import { usePathname, useRouter } from "next/navigation";
import { CircularProgress } from "@mui/material";

const DASHBOARD_URL = "https://dashboard.razorpay.com/app/dashboard";

const PrimaryData = [
  {
    icon: <DashboardIcon />,
    name: "Dashboard",
  },
  {
    icon: <SlowMotionVideoIcon />,
    name: "Videos",
  },
  {
    icon: <SupervisedUserCircleIcon />,
    name: "Users",
  },
  {
    icon: <BookIcon />,
    name: "Blogs",
  },
];

const SecodaryData = [
  {
    icon: <PaidIcon />,
    name: "Payments",
  },
  {
    icon: <SubscriptionsIcon />,
    name: "Subscribers",
  },
];

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer({
  children,
}: {
  children: React.ReactNode;
}) {
  const [modal, setModal] = React.useState(false);
  const pathName = usePathname();
  const pathNameArray = pathName.split("/");
  console.log("PathName Array:", pathNameArray);
  const { push } = useRouter();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  React.useEffect(() => {
    let timeout = setTimeout(() => {
      setModal(false);
    }, 3000);
  }, [modal]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#5F2C70",
          padding: "10px",
        }}
        open={open}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Yogaratha Admin Pannel
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} sx={{ border: "0px" }}>
        <DrawerHeader sx={{ paddingY: "22px", background: "#5F2C70" }}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {PrimaryData.map(({ name, icon }, index) => (
            <ListItem
              key={name}
              disablePadding
              sx={{
                display: "block",
                color:
                  pathNameArray.length === 3 && index === 0
                    ? "#5F2C70"
                    : pathNameArray[3] === name.toLowerCase()
                    ? "#5F2C70"
                    : "",
                backgroundColor:
                  pathNameArray.length === 3 && index === 0
                    ? "#875d959c"
                    : pathNameArray[3] === name.toLowerCase()
                    ? "#875d959c"
                    : "",
              }}
              onClick={() => {
                if (name === "Dashboard") {
                  push(`/admin/pannel`);
                } else {
                  setModal(true);
                  push(`/admin/pannel/${name.toLowerCase()}`);
                  // alert(modal);
                }
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color:
                      pathName.length === 3 && index === 0 ? "#5F2C70" : "",
                  }}
                >
                  {icon}
                </ListItemIcon>
                <ListItemText primary={name} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {SecodaryData.map(({ name, icon }, index) => (
            <ListItem
              key={name}
              disablePadding
              sx={{
                display: "block",
                color:
                  pathNameArray.length === 3 && index === 0
                    ? "#5F2C70"
                    : pathNameArray[3] === name.toLowerCase()
                    ? "#5F2C70"
                    : "",
                backgroundColor:
                  pathNameArray.length === 3 && index === 0
                    ? "#875d959c"
                    : pathNameArray[3] === name.toLowerCase()
                    ? "#875d959c"
                    : "",
              }}
              onClick={() => {
                if (name === "Dashboard") {
                  push(`/admin/pannel`);
                } else {
                  setModal(true);
                  push(`/admin/pannel/${name.toLowerCase()}`);
                  // alert(modal);
                }
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {icon}
                </ListItemIcon>
                {name === "Payments" ? (
                  <a href={DASHBOARD_URL} target="_blank">
                    <ListItemText
                      primary={name}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </a>
                ) : (
                  <ListItemText primary={name} sx={{ opacity: open ? 1 : 0 }} />
                )}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1 }}>
        {/* <DrawerHeader /> */}
        {children}
        {modal && (
          <CircularProgress
            color="secondary"
            sx={{
              // border: "1px solid black",
              position: "absolute",
              top: "40vh",
              left: "50vw",
            }}
          />
        )}
      </Box>
    </Box>
  );
}
