import React, { useState, useEffect, useRef } from "react";
import "./LinkAccounts.css";
import instaIcon from "./socialIcons/insta.png";
import fbIcon from "./socialIcons/fb.png";
import snapIcon from "./socialIcons/snap.png";
import ytIcon from "./socialIcons/youtube.png";
import Button from "@material-ui/core/Button";

const LinkAccounts = (props) => {
  function handleSubmit() {
    props.handleNext();
    //export this data from the API here
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
        <div className="back-next">
          <button
            disabled={props.activeStep === 0}
            onClick={props.handleBack}
            className="back-next-btn"
            id="back"
          >
            Back
          </button>
          <button className="back-next-btn" id="next" type="submit">
            {props.activeStep === props.steps.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LinkAccounts;
