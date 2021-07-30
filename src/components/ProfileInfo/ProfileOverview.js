import React, { useState } from "react";
import "./ProfileOverview.css";
// import Camera from "./Assets/Camera.js";
import Mail from "./Assets/Mail.js";
// import Phone from "./Assets/Phone.js";
import User from "./Assets/User.js";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setImg } from "../../Redux/userData/userDataActions";

const ProfileOverview = (props) => {
  const dispatch = useDispatch();
  const profileImgUrl = useSelector((state) => state.userData.profileImg);
  const BASE_URL = "http://localhost:8000";
  const [DP, setDP] = useState(profileImgUrl);

  const DPChange = () => {
    const form = document.querySelector("#myDPForm");
    const token = localStorage.getItem("token");
    var formData = new FormData(form);
    axios
      .post(BASE_URL + "/auth/uploadDP", formData, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        if (res.data === "Images Only!") {
          alert("Image Only!!");
        }
        if (res.data.ok) {
          setDP(BASE_URL + "/" + res.data.path);
          dispatch(setImg(res.data.path));
        } 
        else {
          console.log(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="profile">
      <div>
        {/* Image comes here */}
        <img src={DP} alt="dp" className="profile-image" />
        {/* <div className="camera"> */}
        {/* <Camera /> */}
        {/* <div className="DPinput"> */}
        <form id="myDPForm">
          <input
            type="file"
            id="myDP"
            name="DisplayPicture"
            hidden
            onChange={DPChange}
          />
          <label className="DPlabel" for="myDP">
            Change Image
          </label>
        </form>
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
