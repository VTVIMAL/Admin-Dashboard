import {
  Box,
  IconButton,
  useTheme,
  Menu,
  MenuItem,
  Badge,
  Typography,
  Drawer,
  List,
  ListItem,
  Divider,
  ListItemButton
} from "@mui/material";
import { React, useContext, useState } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import Tooltip from "@mui/material/Tooltip";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import Logout from "@mui/icons-material/Logout";
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import WarningIcon from '@mui/icons-material/Warning';


function TopBar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [anchorNotification, setAnchorNotification] = useState(null);
  const notiOpen = Boolean(anchorNotification);

  const [isOpen, setIsOpen] = useState(false);

  const handleDrawer = () => {
    setIsOpen(!isOpen)
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNotificationClick = (event) => {
    setAnchorNotification(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null);
    setAnchorNotification(null);
  };

  return (
    <>
      <Box display="flex" justifyContent="space-between" p={2}>

        {/* Search bar  */}
        <Box
          display="flex"
          backgroundColor={colors.primary[400]}
          borderRadius="3px"
        >
          <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchIcon />
          </IconButton>
        </Box>

        {/* Icons  */}
        <Box display="flex">
          <Tooltip
            title={theme.palette.mode === "dark" ? "light mode" : "dark mode"}
          >
            <IconButton onClick={colorMode.toggleColorMode}>
              {theme.palette.mode === "dark" ? (
                <DarkModeOutlinedIcon />
              ) : (
                <LightModeOutlinedIcon />
              )}
            </IconButton>
          </Tooltip>

          {/* Notifications */}
          <IconButton onClick={handleNotificationClick}>
            <Badge color="error" variant="dot">
              <NotificationsOutlinedIcon />
            </Badge>
          </IconButton>

          {/* Notification Menu Dropdown */}
          <Menu
            anchorEl={anchorNotification}
            id="notification-menu"
            open={notiOpen}
            onClose={handleClose}
            onClick={handleClose}
            MenuListProps={{
              sx: {
                backgroundColor: colors.primary[400],
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <Item
              onClose={handleClose}
              title="New Notifications"
              icon={<NotificationsActiveIcon />}
            />
            <Item
              onClose={handleClose}
              title="Appliation Messages"
              icon={<WarningIcon color="warning"/>}
            />
          </Menu>
          
          {/* Chats */}
          <IconButton onClick={handleDrawer}>
            <Badge badgeContent={5} color="success">
              <ChatIcon />
            </Badge>
          </IconButton>
          <Drawer 
          // anchor={document.getElementById('main-div').dir === 'ltr'?'right':'left'} 
          anchor="right"
          open={isOpen} 
          onClose={()=>setIsOpen(false)}
          sx={{
            '& .MuiDrawer-paper':{
              backgroundColor: colors.primary[400]
            }
          }}
          >
            <Box width={'250px'} role='presentation'>
              <List>
                <ListItemButton>
                  <Typography variant="h5">
                    CHATS
                  </Typography>
                </ListItemButton>
                <Divider />
                <ChatList name={'Noufumi'} imageUrl={"../..//assets/samurai-admin.jpg"} status={'online'} onClick={handleDrawer}/>

                <ChatList name={'Tanjiro'} imageUrl={"../..//assets/samurai-admin.jpg"} status={'online'} onClick={handleDrawer}/>

                <ChatList name={'Saitama'} imageUrl={"../..//assets/samurai-admin.jpg"} status={'online'} onClick={handleDrawer}/>

                <ChatList name={'Deku'} imageUrl={"../..//assets/samurai-admin.jpg"} status={'online'} onClick={handleDrawer}/>

                <ChatList name={'Zoro'} imageUrl={"../..//assets/samurai-admin.jpg"} status={'online'} onClick={handleDrawer}/>
              </List>
            </Box>
          </Drawer>
          
  
          <Tooltip title={"Account Settings"}>
            <IconButton onClick={handleClick}>
              <PersonOutlinedIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      {/*Profile Menu Drop down */}
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        MenuListProps={{
          sx: {
            backgroundColor: colors.primary[400],
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Item
          onClose={handleClose}
          title="Profile"
          icon={<PersonOutlinedIcon />}
        />
        <Item
          onClose={handleClose}
          title="Profile Settings"
          icon={<ManageAccountsIcon />}
        />
        <Item
          onClose={handleClose}
          title="Logout"
          icon={<Logout sx={{ color: "red" }} />}
        />
      </Menu>
    </>
  )
};

export default TopBar;

function Item({ onClose, title, icon }) {
  return (
    <MenuItem onClick={onClose}>
      {icon}
      <Typography sx={{ ml: "4px" }}>{title}</Typography>
    </MenuItem>
  );
};

function ChatList({name, imageUrl, onClick}) {
  return (
    <>
    <ListItemButton onClick={onClick}>
      <img
          src={imageUrl}
          alt="profile-user"
          width="40px"
          height="40px"
          style={{ cursor: "pointer", borderRadius: "50%" }}
          />
        <Typography variant="h5" m={'15px'}>{name}</Typography>
    </ListItemButton>
    <Divider />
    </>
  );
};
