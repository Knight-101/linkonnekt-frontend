import React, { useEffect, useState } from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SearchIcon from "@material-ui/icons/Search";
import ProjectsIcon from "@material-ui/icons/Schedule";
import WalletIcon from "@material-ui/icons/AccountBalanceWallet";
import LogoutIcon from "@material-ui/icons/ExitToApp";
import useStyles from "./SidebarStyles";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  const classes = useStyles();
  const [listitem, setListitem] = useState({
    Dashboard: true,
    Search: false,
    AllProjects: false,
    Wallet: false,
    LogOut: false,
  });

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
        <Link to="/userhome/allprojects" className={classes.link}>
          <ListItem button selected={listitem.AllProjects}>
            <ListItemIcon>
              <ProjectsIcon className={classes.icons} />
            </ListItemIcon>
            <ListItemText primary={"All Projects"} />
          </ListItem>
        </Link>
        <Link to="/userhome/wallet" className={classes.link}>
          <ListItem button selected={listitem.Wallet}>
            <ListItemIcon>
              <WalletIcon className={classes.icons} />
            </ListItemIcon>
            <ListItemText primary={"Wallet"} />
          </ListItem>
        </Link>
        <Link to="/userhome/logout" className={classes.link}>
          <ListItem button selected={listitem.LogOut}>
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
