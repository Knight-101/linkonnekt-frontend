import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import DashboardIcon from "@material-ui/icons/Dashboard";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import ProjectsIcon from "@material-ui/icons/Schedule";
import WalletIcon from "@material-ui/icons/AccountBalanceWallet";
import LogoutIcon from "@material-ui/icons/ExitToApp";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import useStyles from "./SidebarStyles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Invitations from "./Invitation";
import Collaborators from "./Collaborators";
import Stats from "./Stats";

function Sidebar(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <p className={classes.title}>Linkonnekt</p>

      <List>
        {["Dashboard", "Search", "All Projects", "My Wallet", "Log Out"].map(
          (text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index === 0 && <DashboardIcon className={classes.icons} />}
                {index === 1 && <SearchIcon className={classes.icons} />}
                {index === 2 && <ProjectsIcon className={classes.icons} />}
                {index === 3 && <WalletIcon className={classes.icons} />}
                {index === 4 && <LogoutIcon className={classes.icons} />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
    </div>
  );

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
            {drawer}
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
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar}>
          <Invitations />
          <Collaborators />
          <Stats />
        </div>
      </main>
    </div>
  );
}

export default Sidebar;
