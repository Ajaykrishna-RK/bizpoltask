import  React ,{useState } from "react";

import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";

import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Button, CssBaseline, useMediaQuery } from "@mui/material";

import { Link, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import H from "../pages/H";
import MobDrawer from "./MobDrawer";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
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

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
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

function Header() {
 
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [mobDrawer,setMobDrawer] =useState(false)
  const [selectedRoute, setSelectedRoute] = useState(null);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };



 const handleMobDrawerOpen = () => {
    setMobDrawer(true);
  };

  const handleMobDrawerClose = () => {
    setMobDrawer(false);
  };

  const routes = [
    { path: "/", name: "Home", icon: open ? <img src="/src/assets/dashboardImages/Group 1019.png" alt=""  />: <img src="/src/assets/dashboardImages/Dashboard.png" alt=""  /> },
    { path: "/h", name: "H", icon: open ? <img src="/src/assets/dashboardImages/Group 1004.png" alt=""  /> : <img src="/src/assets/dashboardImages/headphones (1) 1.png" alt=""  /> },
   
  ];

  return (
    <>
  
        <Box sx={{ display: "flex" }}>
        {isNonMobileScreens ? (
          <>
            <AppBar
            position="fixed"
            open={open}
            sx={{ zIndex: 1, backgroundColor: "white" }}
          >
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  sx={{
                    marginLeft: open ? "" : 5,
                  }}
                >
                  <img src="/src/assets/headerImages/Frame 14.png" alt="" />
                </IconButton>
                <IconButton>
                  <img
                    src="/src/assets/headerImages/Search.png"
                    alt=""
                    sizes=""
                    srcset=""
                  />
                </IconButton>
              </div>
              <div>
                <IconButton>
                  <img src="/src/assets/headerImages/Frame 1137.png" alt="" />
                </IconButton>
                <IconButton>
                  <img
                    src="/src/assets/headerImages/Rectangle 461.png"
                    alt=""
                    sizes=""
                    srcset=""
                  />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={open} >
            <IconButton onClick={handleDrawerClose}>
              {open ? (
                <div style={{ placeItems: "start" }}>
                  {" "}
                  <img
                    src="/src/assets/headerImages/logo (1) 1.png"
                    alt=""
                  />{" "}
                </div>
              ) : (
                <img src="/src/assets/headerImages/logo (1) 2.png" alt="" />
              )}
            </IconButton>

            <Divider />
         {routes.map((route)=>(
          <List>
            
            <ListItem  key={route.path} disablePadding sx={{ display: "block" }}>
              <ListItemButton
            component={Link}
            to={route.path}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  backgroundColor : selectedRoute === route.path ? "#F3F6ED" : null,
                  
                  px: 2.5,
                }}
                onClick={() => setSelectedRoute(route.path)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                 {route.icon}
                </ListItemIcon>
                <ListItemText
                  
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
       
        </List>
         ))}
            
       
          </Drawer> 
          </> 
         ) :
          (
            <> 
            <MobDrawer/>
            </>
          )}
        
          <Box  sx={{ 
           
           
            marginTop:"100px"}}>
          <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/h" element={<H/>} />
  </Routes>
          </Box>
        </Box>
      



    </>
  );
}
export default Header;
