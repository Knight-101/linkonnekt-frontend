import React, { useState, useEffect, useRef } from "react";
import "./ProfileOverview.css";
import Camera from "./Assets/Camera.js";
import Mail from "./Assets/Mail.js";
import Phone from "./Assets/Phone.js";
import User from "./Assets/User.js";
import DefaultDp from "./Image.jpg";
// import { InputAdornment } from "@material-ui/core";
// import IconButton from "@material-ui/core/IconButton";
// import Input from "@material-ui/core/Input";
// import Grid from "@material-ui/core/Grid";
// import AccountCircle from "@material-ui/icons/AccountCircle";
// import TextField from "@material-ui/core/TextField";

const ProfileOverview = (props) => {
  const [DP, setDP] = useState(DefaultDp);

  const DPChange = (event) => {
    const newDP = event.target.value;
    console.log(newDP);
    setDP(newDP);
  };

  return (
    <div className="profile">
      <div>
        {/* Image comes here */}
        <img src={DefaultDp} alt="dp" className="profile-image" />
        {/* <div className="camera"> */}
        {/* <Camera /> */}
        {/* <div className="DPinput"> */}
        <input
          type="file"
          id="myDP"
          name="filename"
          hidden
          onChange={DPChange}
        />
        <label className="DPlabel" for="myDP">
          <Camera />
        </label>
        {/* </div> */}
        {/* </div> */}
      </div>
      <div id="user-data">
        <div className="user-data-box" style={{ justifyContent: "center" }}>
          <h4>{props.role}</h4>
        </div>
        <div className="user-data-box">
          <User />
          {props.name}
        </div>
        <div className="user-data-box">
          <Mail /> {props.email}
        </div>
      </div>
    </div>
  );
};

export default ProfileOverview;
