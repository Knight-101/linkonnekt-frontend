import React, { useState } from "react";
import "./LinkAccounts.css";
import instaIcon from "./socialIcons/insta.png";
import fbIcon from "./socialIcons/fb.png";
import ytIcon from "./socialIcons/youtube.png";
import twitterIcon from "./socialIcons/Twitter.png";
import linkedinIcon from "./socialIcons/LinkedIn.png";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { useHistory } from "react-router";
import { setUrls } from "../../../Redux/profileInfo/profileInfoActions";

const LinkAccounts = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const platformsObj = useSelector(
    (state) => state.profileInfo.categories.Platforms
  );
  const profileObj = useSelector((state) => state.profileInfo);
  const BASE_URL = process.env.REACT_APP_BACKEND_URL;
  const platforms = [
    platformsObj.P1.Platform,
    platformsObj.P2.Platform,
    platformsObj.P3.Platform,
    platformsObj.P3.Platform,
  ];
  const [socialUrls, setSocialUrls] = useState({
    Instagram: "",
    YouTube: "",
    LinkedIn: "",
    Twitter: "",
    Facebook: "",
  });
  const [complete, setComplete] = useState(false);
  function handleChange(event) {
    const { id, value } = event.target;
    setSocialUrls((prevData) => {
      return {
        ...prevData,
        [id]: value,
      };
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    dispatch(setUrls(socialUrls));
    setComplete(true);
  }

  if (complete) {
    const token = localStorage.getItem("token");
    axios
      .patch(BASE_URL + "/auth/profileinfo", {
        headers: { Authorization: token },
        profileObj,
      })
      .then((res) => {
        if (res.data.ok === 1) {
          history.push("/userhome/dashboard");
        }
      });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="linkAcc">
          <div id="linkAccHeading">
            <b>
              <p>Link your social media accounts</p>
            </b>
          </div>
          {platforms.includes("Instagram") && (
            <div className="socialLink">
              <img className="socialIcon" src={instaIcon} alt="icon" />

              <h5 className="socialName">Instagram</h5>

              <TextField
                id="Instagram"
                className="url"
                label="URL"
                required
                onChange={handleChange}
              />
            </div>
          )}
          {platforms.includes("Facebook") && (
            <div className="socialLink">
              <img className="socialIcon" src={fbIcon} alt="icon" />

              <h5 className="socialName">Facebook</h5>

              <TextField
                id="Facebook"
                className="url"
                label="URL"
                required
                onChange={handleChange}
              />
            </div>
          )}
          {platforms.includes("YouTube") && (
            <div className="socialLink">
              <img className="socialIcon" src={ytIcon} alt="icon" />

              <h5 className="socialName">Youtube</h5>

              <TextField
                id="YouTube"
                className="url"
                label="URL"
                required
                onChange={handleChange}
              />
            </div>
          )}
          {platforms.includes("LinkedIn") && (
            <div className="socialLink">
              <img className="socialIcon" src={linkedinIcon} alt="icon" />

              <h5 className="socialName">LinkedIn</h5>

              <TextField
                id="LinkedIn"
                className="url"
                label="URL"
                required
                onChange={handleChange}
              />
            </div>
          )}
          {platforms.includes("Twitter") && (
            <div className="socialLink">
              <img className="socialIcon" src={twitterIcon} alt="icon" />

              <h5 className="socialName">Twitter</h5>

              <TextField
                id="Twitter"
                className="url"
                label="URL"
                required
                onChange={handleChange}
              />
            </div>
          )}
        </div>
        <div className="back-next">
          <button
            disabled={props.activeStep === 0}
            onClick={props.handleBack}
            className="back-next-btn"
            id="back"
          >
            Back
          </button>
          <button className="back-next-btn" id="next">
            {props.activeStep === props.steps.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LinkAccounts;
