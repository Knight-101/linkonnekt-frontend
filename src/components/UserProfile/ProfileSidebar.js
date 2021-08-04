import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setImg } from "../../Redux/userData/userDataActions";

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
  const classes = useStyles();
  const dispatch = useDispatch();
  const profileImgUrl = useSelector((state) => state.userData.profileImg);
  const BASE_URL = process.env.REACT_APP_BACKEND_URL;
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
          setDP(res.data.path);
          dispatch(setImg(res.data.path));
        } else {
          console.log(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="profile">
      <Link to="/userhome/dashboard" className={classes.title}>
        <p className={classes.title}>Linkonnekt</p>
      </Link>
      <Divider />
      <div>
        {/* Image comes here */}
        <img src={DP} alt="dp" className="profile-image" />
        {/* <div className="camera"> */}
        {/* <Camera /> */}
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
