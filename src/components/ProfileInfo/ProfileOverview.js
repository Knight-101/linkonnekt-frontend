import React, { useState, useEffect, useRef } from "react";
import "./ProfileOverview.css";
import Camera from "./Assets/Camera.js";
import Mail from "./Assets/Mail.js";
import Phone from "./Assets/Phone.js";
import User from "./Assets/User.js";

const ProfileOverview = (props) => {
  return (
    <div className="profile">
      <div className="profile-image">
        {/* Image comes here */}
        <div className="camera">
          <Camera />
        </div>
      </div>
      <div id="input-boxes">
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
      </div>
    </div>
  );
};

export default ProfileOverview;
