import React, { useState, useEffect, useRef } from "react";
import "./Login.css";
import imglogin from "./Images/loginImg.png";
import imguser from "./Images/user.png";
import imgmail from "./Images/mail.png";
import imglock from "./Images/lock.png";

const Login = () => {
  const [ loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  function handleChangeEmail(event) {
    setLoginEmail(event.target.value);
    // console.warn(event.target.value);
  }

  function handleChangePassword(event){
    setLoginPassword(event.target.value);
    // console.log(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert('Email and password was submitted: ' + loginEmail + loginPassword);
  }

  return (
    <div>
      <div className="login-layout">
        <div className="login-layout-l">
          <main className="form-signin">
            <form style={{ lineHeight: "5rem" }} onSubmit={handleSubmit} >
              <h1 className="createAcc">Login</h1>

              <label htmlFor="inputEmail" className="visually-hidden">
                Email address
              </label>
              <div
                class="input-group mb-3  loginInput"
                style={{ marginTop: "6rem" }}
              >
                <span class="input-group-text" id="basic-addon1">
                  <img src={imgmail} className="userImg" alt="logo"></img>
                </span>
                <input
                  required
                  value={loginEmail}
                  onChange={handleChangeEmail}
                  type="email"
                  class="form-control"
                  placeholder="Email"
                />
              </div>

              <label htmlFor="inputPassword" className="visually-hidden">
                Password
              </label>
              <div class="input-group mb-3  loginInput">
                <span class="input-group-text" id="basic-addon1">
                  <img src={imglock} className="userImg" alt="logo"></img>
                </span>
                <input
                  required
                  value={loginPassword}
                  onChange={handleChangePassword}
                  type="password"
                  class="form-control"
                  placeholder="Password"
                />
              </div>

              <button className="w-50 btn btn-sm loginB" type="submit">
                Login
              </button>
            </form>
          </main>
        </div>
        <div id="login-layout-r">
          <div id="login-layout-r-content">
            <h1 style={{ fontWeight: "bold" }}>Hello!!</h1>
            <img src={imglogin} className="loginImg" alt="logo"></img>
            <p style={{ marginTop: "3rem" }}>
              Enter your personal details and start your journey with us
            </p>
            <a href="/signup">
              <button id="loginB">Sign Up</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
