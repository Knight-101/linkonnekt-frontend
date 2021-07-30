import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setData } from "../../Redux/userData/userDataActions";
import "./Signup.css";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import imgsignup from "./Images/signupImg.png";
import imguser from "./Images/user.png";
import imgmail from "./Images/mail.png";
import imglock from "./Images/lock.png";
import SignupModal from "./SignupModal";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Signup = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const BASE_URL = "http://localhost:8000";
  const [open, setOpen] = React.useState(false);
  // const [role, setrole] = useState("");
  const [roleSelect, setRoleSelect] = useState("");

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
  });
  useEffect(() => {
    const accessToken = localStorage.getItem("token");
    const verified = localStorage.getItem("verified");
    if (accessToken && !verified) {
      history.push("/emailV");
    }
    if (accessToken && verified) {
      history.push("/profileinfo");
    }
  }, [history]);

  const roleClick = (event) => {
    const { name, id } = event.target;
    setRoleSelect(id);
    // setrole(name);
    setUserData((prevData) => {
      return {
        ...prevData,
        role: name,
      };
    });
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setUserData((prevData) => {
      return {
        ...prevData,
        [id]: value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post(BASE_URL + "/auth/signup", userData)
      .then((res) => {
        if (res.data === "Email already exists") {
          setOpen(true);
          setUserData({
            username: "",
            email: "",
            password: "",
            role: "",
          });
        }
        if (res.data.ok) {
          localStorage.setItem("token", res.data.token);
          dispatch(setData(userData.username, userData.email, userData.role));
          history.push("/emailV");
        } else {
          console.log(res.data);
          setUserData({
            username: "",
            email: "",
            password: "",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="signup-layout">
        <div id="signup-layout-l">
          <div id="signup-layout-l-content">
            <h1 style={{ fontWeight: "bold" }}>Hello!!</h1>
            <img src={imgsignup} className="signupImg" alt="logo"></img>
            <p style={{ marginTop: "3rem" }}>
              To keep connected with us please login with your personal info
            </p>
            <a href="/login">
              <Link to="/login" class="link">
                <button id="loginB">Login</button>
              </Link>
            </a>
          </div>
        </div>
        <div className="signup-layout-r">
          <main className="form-signin">
            <form style={{ lineHeight: "5rem" }} onSubmit={submitHandler}>
              <h1 className="createAcc">Create Account</h1>
              <div id="rolesManual">
                <button
                  name="Creator"
                  id="1"
                  className={
                    roleSelect === "1"
                      ? "rolesOptionSelectedManual"
                      : "rolesOptionsManual"
                  }
                  onClick={roleClick}
                >
                  Creator
                </button>
                <button
                  name="Freelancer"
                  id="2"
                  className={
                    roleSelect === "2"
                      ? "rolesOptionSelectedManual"
                      : "rolesOptionsManual"
                  }
                  onClick={roleClick}
                >
                  Freelancer
                </button>
                <button
                  name="Brand"
                  id="3"
                  className={
                    roleSelect === "3"
                      ? "rolesOptionSelectedManual"
                      : "rolesOptionsManual"
                  }
                  onClick={roleClick}
                >
                  Brand
                </button>
              </div>
              <label htmlFor="firstName" className="visually-hidden">
                username
              </label>
              <div class="input-group mb-3  signupInput">
                <span class="input-group-text" id="basic-addon1">
                  <img src={imguser} className="userImg" alt="logo"></img>
                </span>
                <input
                  type="text"
                  required
                  class="form-control"
                  placeholder="Username"
                  id="username"
                  value={userData.username}
                  onChange={handleChange}
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
                  required
                  class="form-control"
                  placeholder="Email"
                  id="email"
                  value={userData.email}
                  onChange={handleChange}
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
                  type="password"
                  required
                  class="form-control"
                  placeholder="Password"
                  id="password"
                  value={userData.password}
                  onChange={handleChange}
                />
              </div>

              <button className="w-50 btn btn-sm signupB" type="submit">
                Sign Up
              </button>
            </form>
          </main>
          <hr></hr>
          <p>OR</p>
          <hr></hr>
          <SignupModal />
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Email already exists
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Signup;
