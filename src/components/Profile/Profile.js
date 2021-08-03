import React, { useEffect, useState } from "react";
import ProfileSidebar from "./ProfileSidebar";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import axios from "axios";
import MainContent from "./MainContent";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import UserBioTabs from "./UserBioTabs";
import { useSelector } from "react-redux";
import Loader from "../ProfileInfo/Assets/Loader";

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

export default function Profile(props) {
  const history = useHistory();
  const classes = useStyles();
  const BASE_URL = process.env.REACT_APP_BACKEND_URL;
  const profileImgUrl = useSelector((state) => state.userData.profileImg);
  const [creator, setcreator] = useState({});
  const [loader, setloader] = useState(true);
  useEffect(() => {
    axios
      .get(`${BASE_URL}/creator/${props.match.params.username}`)
      .then(async (res) => {
        if (res.data.ok) {
          setcreator(res.data.user);
          setloader(false);
        } else {
          console.log(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [BASE_URL, props.match.params.username]);
  return (
    <div>
      {loader ? (
        <Loader />
      ) : (
        <div className={classes.outer}>
          <div className={classes.Sidebar}>
            <ProfileSidebar
              name={
                creator.profileInfo.personalInfo.firstName +
                " " +
                creator.profileInfo.personalInfo.lastName
              }
              role={creator.role}
              category={creator.profileInfo.categories.Category}
              location={creator.profileInfo.personalInfo.state}
              image={creator.profileImg}
            />
          </div>
          <div className={classes.mainContent}>
            <div className={classes.topRight}>
              {/* <Search /> */}
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
            <UserBioTabs about={creator.profileInfo.personalInfo.about} />
          </div>
        </div>
      )}
    </div>
  );
}
