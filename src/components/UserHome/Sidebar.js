import React, { useEffect, useState } from "react";
import { useGoogleLogout } from "react-google-login";
import { useDispatch } from "react-redux";
import { logout } from "../../Redux/logoutAction";
import DashboardIcon from "@material-ui/icons/Dashboard";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SearchIcon from "@material-ui/icons/Search";
import ProjectsIcon from "@material-ui/icons/Schedule";
import LogoutIcon from "@material-ui/icons/ExitToApp";
import useStyles from "./SidebarStyles";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const Sidebar = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const [listitem, setListitem] = useState({
    Dashboard: true,
    Search: false,
    AllProjects: false,
    Wallet: false,
    LogOut: false,
  });

  const onFailure = (e) => {
    console.log(e);
  };
  useEffect(() => {
    setListitem((prev) => {
      const newList = prev;
      for (const key in newList) {
        newList[key] = false;
      }
      return {
        ...newList,

        [props.item]: true,
      };
    });
  }, [props.item]);

  const onLogoutSuccess = () => {
    const isTokenExists = localStorage.getItem("token");
    if (isTokenExists) {
      dispatch(logout());
      localStorage.clear();
      history.push("/");
    }
  };
  const clientId =
    "378065475011-nt3el8svf2r3d0h9sabche7sgcq4o83i.apps.googleusercontent.com";
  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <div>
      <div className={classes.toolbar} />
      <p className={classes.title}>Linkonnekt</p>

      <List>
        <Link to="/userhome/dashboard" className={classes.link}>
          <ListItem selected={listitem.Dashboard} button>
            <ListItemIcon>
              <DashboardIcon className={classes.icons} />
            </ListItemIcon>
            <ListItemText primary={"Dashboard"} />
          </ListItem>
        </Link>
        <Link to="/userhome/search" className={classes.link}>
          <ListItem button selected={listitem.Search}>
            <ListItemIcon>
              <SearchIcon className={classes.icons} />
            </ListItemIcon>
            <ListItemText primary={"Search"} />
          </ListItem>
        </Link>
        <Link to="/userprofile" className={classes.link}>
          <ListItem button selected={listitem.AllProjects}>
            <ListItemIcon>
              <ProjectsIcon className={classes.icons} />
            </ListItemIcon>
            <ListItemText primary={"Profile"} />
          </ListItem>
        </Link>
        {/* <Link to="/userhome/wallet" className={classes.link}>
          <ListItem button selected={listitem.Wallet}>
            <ListItemIcon>
              <WalletIcon className={classes.icons} />
            </ListItemIcon>
            <ListItemText primary={"Wallet"} />
          </ListItem>
        </Link> */}
        <Link to="/userhome/logout" className={classes.link}>
          <ListItem onClick={signOut} button selected={listitem.LogOut}>
            <ListItemIcon>
              <LogoutIcon className={classes.icons} />
            </ListItemIcon>
            <ListItemText primary={"Log Out"} />
          </ListItem>
        </Link>
      </List>
    </div>
  );
};

export default Sidebar;
