import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link, Route, Routes } from 'react-router-dom';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import { Home } from '@mui/icons-material';
import H from '../pages/H';

export default function MobDrawer() {
  
    const [open, setOpen] = React.useState(false);
   
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };



    const routes = [
        { path: "/", name: "Home", icon: <img src="/src/assets/dashboardImages/Group 1006.png" alt=""  /> },
        { path: "/", name: "H", icon:  <img src="/src/assets/dashboardImages/Group 1007.png" alt=""  />  },
        
        { path: "/", name: "Home", icon:  <img src="/src/assets/dashboardImages/Group 1019.png" alt=""  /> },
        { path: "/h", name: "H", icon: <img src="/src/assets/dashboardImages/Group 1005.png" alt=""  /> },
    
      ];

  return (
    <div>
  
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
                
                >
                  <img src="/src/assets/headerImages/Frame 14.png" alt="" />
                </IconButton>
               
              </div>
              <IconButton>
                  <img
                    src="/src/assets/headerImages/logo (1) 2.png"
                    alt=""
                    sizes=""
                    srcset=""
                  />
                </IconButton>
              <IconButton>
                  <img
                    src="/src/assets/headerImages/ei_search.png"
                    alt=""
                    sizes=""
                    srcset=""
                  />
                </IconButton>
           
            </Toolbar>
          </AppBar>

          <Button onClick={handleDrawerOpen}>OPen</Button>
          <Drawer
            anchor="left"
            open={open}
            onClose={handleDrawerClose}
           
          >
         
          {routes.map((route)=>(
          <List>
            
            <ListItem  key={route.path} disablePadding sx={{ display: "block" }}>
              <ListItemButton
            component={Link}
            to={route.path}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  
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

             

    </div>
  );
}