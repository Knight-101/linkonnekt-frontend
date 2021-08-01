import React from "react";
import "./LinkAccounts.css";
import instaIcon from "./socialIcons/insta.png";
import fbIcon from "./socialIcons/fb.png";
import snapIcon from "./socialIcons/snap.png";
import ytIcon from "./socialIcons/youtube.png";

const LinkAccounts = () => {
  return (
    <div>
      <div className="linkAcc">
        <div id="linkAccHeading">
          <b>
            <p>Link your social media accounts</p>
          </b>
        </div>
        <div id="insta" className="socialRows">
          <img src={instaIcon} alt="icon" />
        </div>

        <h5 className="socialRows socialName">Instagram</h5>

        <div className="socialRows align-r">
          <button className="socialBtn">Connect</button>
        </div>
        <div className="socialRows">
          <img src={fbIcon} alt="icon" />
        </div>

        <h5 className="socialRows socialName">Facebook</h5>

        <div className="socialRows align-r">
          <button className="socialBtn">Connect</button>
        </div>
        <div className="socialRows">
          <img src={snapIcon} alt="icon" />
        </div>

        <h5 className="socialRows socialName">Snapchat</h5>

        <div className="socialRows align-r">
          <button className="socialBtn">Connect</button>
        </div>
        <div className="socialRows">
          <img src={ytIcon} alt="icon" />
        </div>

        <h5 className="socialRows socialName">Youtube</h5>

        <div className="socialRows align-r">
          <button className="socialBtn">Connect</button>
        </div>
      </div>
      <div id="skip-next" style={{ padding: "0 5rem" }}>
        <button id="skip" className="skip-next-btn">
          Skip
        </button>
        <button
          id="next"
          className="skip-next-btn"
          style={{ width: "120px", height: "50px" }}
        >
          Take me in!
        </button>
      </div>
    </div>
  );
};

export default LinkAccounts;
