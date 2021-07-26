import React from "react";
import ProfileSidebar from "./ProfileSidebar";
import { makeStyles } from "@material-ui/core/styles";
// import Drawer from "@material-ui/core/Drawer";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import Toolbar from "@material-ui/core/Toolbar";
// import AppBar from "@material-ui/core/AppBar";
// import Typography from "@material-ui/core/Typography";
import MainContent from "./MainContent";
import Search from "./Search";
import About from "./About";
import SocialMedia from "./SocialMedia";

const useStyles = makeStyles((theme) => ({
  outer: {
    display: "grid",
    gridTemplateColumns: "1fr 10fr",
  },
  topRight: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  topIcons: {
    marginRight: "25px",
    color: "#457B9D",
    fontSize: "30px",
    borderRadius: "100%",
    cursor: "pointer",
  },
  mainContent: {
    padding: "2rem",
  },
}));

export default function Profile(props) {
  const classes = useStyles();
  return (
    <div className={classes.outer}>
      <div className={classes.Sidebar}>
        <ProfileSidebar />
      </div>
      <div className={classes.mainContent}>
        <div className={classes.topRight}>
            <Search/>
          <ChatBubbleIcon className={classes.topIcons} />
          <NotificationsIcon className={classes.topIcons} />
        </div>
        <MainContent />
        {props.item === "About" && <About />}
      {props.item === "SocialMedia" && <SocialMedia />}
      </div>
    </div>
  );
}
