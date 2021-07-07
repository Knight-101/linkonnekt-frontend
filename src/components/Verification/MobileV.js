import React, { useState, useEffect, useRef } from "react";
import "./MobileV.css";
import imgmobile from "./Images/Mobile.png";

const MobileV = () => {
  return (
    <div className="mobile-master">
      <img src={imgmobile} className="mobileImgV" alt="logo"></img>
      <h1>
        <b>Verify your Phone Number</b>
      </h1>
      {/* <p style={{ marginTop: "2rem" }}>
        A verification code has been sent to your mobile address.
      </p>
      <p>Please verify by clicking the button below.</p> */}
      <button id="mobileV-button">Verify phone number</button>
      <div id="resend-change">
        <p>
          Didn't receive the code?
          <a
            href="/signup"
            style={{ textDecoration: "none", paddingLeft: "5px" }}
          >
            Resend
          </a>
        </p>
        <p>
          Incorrect phone number?
          <a
            href="/resend"
            style={{ textDecoration: "none", paddingLeft: "5px" }}
          >
            Change number
          </a>
        </p>
      </div>
    </div>
  );
};

export default MobileV;
