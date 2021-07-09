import React, { useState, useEffect, useRef } from "react";
import "./ProfileOverview.css";
import Camera from "./Assets/Camera.js";
import Mail from "./Assets/Mail.js";
import Phone from "./Assets/Phone.js";
import User from "./Assets/User.js";
import { InputAdornment } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import TextField from "@material-ui/core/TextField";

const ProfileOverview = (props) => {
  return (
    <div className="profile">
      <div className="profile-image">
        {/* Image comes here */}
        <div className="camera">
          <Camera />
        </div>
      </div>
      {/* <div id="input-boxes">
      <User/>
        <h5>
           {props.name}
        </h5>
        <h5>
          <Mail /> Email: {props.email}
        </h5>
        <h5>
          <Phone /> Phone number : {props.number}
        </h5>
      </div> */}
      <div id="user-data">
        <div className="user-data-box">
          <User />
          {props.name}
        </div>
        <div className="user-data-box">
          <Mail /> {props.email}
        </div>
        <div className="user-data-box">
          <Phone /> {props.number}
        </div>
      </div>
    </div>
  );
};

export default ProfileOverview;
