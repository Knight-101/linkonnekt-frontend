import React, { useState, useEffect, useRef } from "react";
import "./Signup.css";
import imgsignup from "./Images/signupImg.png";
import imguser from "./Images/user.png";
import imgmail from "./Images/mail.png";
import imglock from "./Images/lock.png";

const Signup = () => {
  return (
    <div>
      <div className="signup-layout">
        <div id="signup-layout-l">
          <div id="signup-layout-l-content">
            <h1 style={{ fontWeight: "bold" }}>Welcome back!!</h1>
            <img src={imgsignup} className="signupImg" alt="logo"></img>
            <p style={{ marginTop: "3rem" }}>
              To keep connected with us please login with your personal info
            </p>
            <a href="/login">
              <button id="loginB">Login</button>
            </a>
          </div>
        </div>
        <div className="signup-layout-r">
          <main className="form-signin">
            <form style={{ lineHeight: "5rem" }}>
              <h1 className="createAcc">Create Account</h1>
              <label htmlFor="firstName" className="visually-hidden">
                username
              </label>
              <div
                class="input-group mb-3  signupInput"
                style={{ marginTop: "2.5rem" }}
              >
                <span class="input-group-text" id="basic-addon1">
                  <img src={imguser} className="userImg" alt="logo"></img>
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>

              <label htmlFor="inputEmail" className="visually-hidden">
                Email address
              </label>
              <div class="input-group mb-3  signupInput">
                <span class="input-group-text" id="basic-addon1">
                  <img src={imgmail} className="userImg" alt="logo"></img>
                </span>
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="basic-addon1"
                />
              </div>

              <label htmlFor="inputPassword" className="visually-hidden">
                Password
              </label>
              <div class="input-group mb-3  signupInput">
                <span class="input-group-text" id="basic-addon1">
                  <img src={imglock} className="userImg" alt="logo"></img>
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="basic-addon1"
                />
              </div>

              <button className="w-50 btn btn-sm signupB" type="submit">
                Sign Up
              </button>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Signup;
