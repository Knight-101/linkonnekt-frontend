import React from "react";
import ProfileSidebar from "./ProfileSidebar";
import { makeStyles } from "@material-ui/core/styles";
// import Drawer from "@material-ui/core/Drawer";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import MainContent from "./MainContent";
import UserBioTabs from "./UserBioTabs";

const useStyles = makeStyles((theme) => ({
  outer: {
    display: "grid",
    gridTemplateColumns: "2fr 7fr",
  },
  Sidebar: {
    backgroundColor: "#457b9d",
    height: "100vh",
  },
  topRight: {
    display: "grid",
    gridTemplateColumns: "8fr 1fr 1fr 1fr",
    padding: "0 3.5rem",
  },
  topIcons: {
    marginRight: "25px",
    color: "#457B9D",
    fontSize: "35px",
    borderRadius: "100%",
    cursor: "pointer",
    justifySelf: "right",
    alignSelf: "center",
  },
  mainContent: {
    padding: "2rem",
  },
  DPIcon: {
    marginRight: "25px",
    height: "50px",
    width: "50px",
    borderRadius: "100%",
    cursor: "pointer",
  },
  back: {
    border: "none",
    maxWidth: 150,
    maxHeight: 40,
    borderRadius: 5,
    padding: "0.1rem 1rem",
    fontSize: "0.9rem",
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    "&:hover": {
      boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    },
  },
}));

export default function UserProfile(props) {
  const history = useHistory();
  const classes = useStyles();
  const profileImgUrl = useSelector((state) => state.userData.profileImg);
  const creator = useSelector((state) => state);
  return (
    <div className={classes.outer}>
      <div className={classes.Sidebar}>
        <ProfileSidebar
          name={
            creator.profileInfo.personalInfo.firstName +
            " " +
            creator.profileInfo.personalInfo.lastName
          }
          role={creator.userData.role}
          category={creator.profileInfo.categories.Category}
          location={creator.profileInfo.personalInfo.state}
          image={creator.userData.profileImg}
        />
      </div>
      <div className={classes.mainContent}>
        <div className={classes.topRight}>
          <button
            className={classes.back}
            onClick={() => history.push("/userhome/dashboard")}
          >
            <ArrowBackIcon style={{ marginRight: "5px" }} />
            <b>Dashboard</b>
          </button>
          <ChatBubbleIcon className={classes.topIcons} />
          <NotificationsIcon className={classes.topIcons} />
          <a href="/userprofile">
            <img src={profileImgUrl} alt="dp" className={classes.DPIcon} />
          </a>
        </div>
        <MainContent creator={creator} />
        {/* <Divider /> */}
        <UserBioTabs about={creator.profileInfo.personalInfo.about} />

        {/* {props.item === "About" && <About />}
        {props.item === "SocialMedia" && <SocialMedia />} */}
      </div>
    </div>
  );
}
