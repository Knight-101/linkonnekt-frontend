import React, { useState, useEffect, useRef } from "react";
import "./EmailV.css";
import imgemail from "./Images/Email.png";

const EmailV = () => {
  return (
    <div className="email-master">
      <img src={imgemail} className="emailImg" alt="logo"></img>
      <h1>
        <b>Verify your email address</b>
      </h1>
      <p style={{ marginTop: "2rem" }}>
        A verification code has been sent to your email address.
      </p>
      <p>Please verify by clicking the button below.</p>
      <button id="emailV-button">Verify Email</button>
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
          Don't know this email?
          <a
            href="/resend"
            style={{ textDecoration: "none", paddingLeft: "5px" }}
          >
            Change mail
          </a>
        </p>
      </div>
    </div>
  );
};

export default EmailV;
