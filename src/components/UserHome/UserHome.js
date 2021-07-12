import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import useStyles from "./SidebarStyles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard/Dashboard";

function UserHome(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.top}>
            <Typography className={classes.welcome}>
              Welcome,<span className={classes.name}>Sanskar!</span>
            </Typography>
            <div className={classes.topRight}>
              <ChatBubbleIcon className={classes.topIcons} />
              <NotificationsIcon className={classes.topIcons} />
              <AccountCircle className={classes.topIcons} />
            </div>
          </div>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer} aria-label="nav">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <Sidebar item={props.item} />
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <Sidebar item={props.item} />
          </Drawer>
        </Hidden>
      </nav>
      {props.item === "Dashboard" && <Dashboard />}
      {/* {props.item === "Search" && <Search />}
      {props.item === "AllProjects" && <AllProjects />}
      {props.item === "Wallet" && <Wallet />}
      {props.item === "LogOut" && <LogOut />} */}
    </div>
  );
}

export default UserHome;
