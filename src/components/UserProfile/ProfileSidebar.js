import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import "./ProfileOverview.css";
// import Camera from "./Assets/Camera.js";
// import Mail from "./Assets/Mail.js";
// import Phone from "./Assets/Phone.js";
// import User from "./Assets/User.js";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Divider } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "left",
    padding: "1rem 2rem 0 2rem",
    // marginBottom: "2rem",
    fontSize: "1.5rem",
    marginBottom: "1rem",
    fontWeight: "bold",
    letterSpacing: "5px",
    color: "white",
    textDecoration: "none",
  },
}));

const ProfileOverview = (props) => {
  const dispatch = useDispatch();
  const BASE_URL = "http://localhost:8000";
  const classes = useStyles();
  return (
    <div className="profile">
      <Link to="/userhome/dashboard" className={classes.title}>
        <p className={classes.title}>Linkonnekt</p>
      </Link>
      <Divider />
      <div>
        {/* Image comes here */}
        <img src={props.image} alt="dp" className="profile-image" />
        {/* <div className="camera"> */}
        {/* <Camera /> */}
        {/* <div className="DPinput"> */}
        {/* <form id="myDPForm">
          <input
            type="file"
            id="myDP"
            name="DisplayPicture"
            hidden
          />
          <label className="DPlabel" for="myDP">
            Change Image
          </label>
        </form> */}
        {/* </div> */}
        {/* </div> */}
      </div>
      <div id="user-data">
        <div className="user-data-box" style={{ justifyContent: "center" }}>
          <h4>{props.name}</h4>
        </div>
        <div className="user-data-box">
          {/* <User />
          {props.name} */}
          <h5>{props.role}</h5>
        </div>
        <div className="user-data-box">
          {/* <Mail /> {props.email} */}
          {props.category}
        </div>
        <div className="user-data-box">
          {/* <User />
          {props.name} */}
          <h5>{props.location}</h5>
        </div>
      </div>
    </div>
  );
};

export default ProfileOverview;
