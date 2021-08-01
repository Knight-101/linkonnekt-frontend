import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import "./Login.css";
import axios from "axios";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import imglogin from "./Images/loginImg.png";
import imgmail from "./Images/mail.png";
import imglock from "./Images/lock.png";
import { useDispatch } from "react-redux";
import { setData, setImg } from "../../Redux/userData/userDataActions";
import { useGoogleLogout } from "react-google-login";
import {
  setProfileData,
  setCatData,
} from "../../Redux/profileInfo/profileInfoActions";

const Login = () => {
  const dispatch = useDispatch();
  const BASE_URL = "http://localhost:8000";
  const history = useHistory();
  const [fail, setfail] = useState("");
  const [userData, setuserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setuserData((prevData) => {
      return {
        ...prevData,
        [id]: value,
      };
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    await axios
      .post(BASE_URL + "/auth/login", userData)
      .then((res) => {
        if (res.data === '"email" must be a valid email') {
          setfail("Enter a valid email(abc@def.xy)");
        } else {
          if (res.data === "Email doesn't match our records") {
            setfail("Email or Password does not match our records");
          } else {
            if (res.data === "invalid password") {
              setfail("Email or Password does not match our records");
            } else {
              localStorage.setItem("token", res.data.token);
              const user = res.data.user;
              const profileInfo = res.data.user.profileInfo;
              dispatch(setData(user.username, user.email, user.role));
              axios
                .get(BASE_URL + "/auth/isEmailVerified", {
                  headers: { Authorization: res.data.token },
                })
                .then((res) => {
                  if (res.data.ok) {
                    if (profileInfo) {
                      history.push("/userhome/dashboard");
                    } else {
                      history.push("/profileinfo");
                    }
                  } else {
                    history.push("/emailV");
                  }
                })
                .catch((error) => {
                  console.log(error);
                });
            }
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //for log in
  const CLIENT_ID =
    "378065475011-nt3el8svf2r3d0h9sabche7sgcq4o83i.apps.googleusercontent.com";
  //for log out
  const clientId =
    "378065475011-nt3el8svf2r3d0h9sabche7sgcq4o83i.apps.googleusercontent.com";
  const { signOut } = useGoogleLogout({
    clientId,
  });

  const responseGoogle = async (response) => {
    let accessToken = response.accessToken;
    let email = response.profileObj.email;

    //posting oauth data
    await axios
      .post(BASE_URL + "/auth/oauthlogin", {
        access_token: accessToken,
        email: email,
      })
      .then((res) => {
        if (res.data.ok) {
          const username = res.data.user.username;
          const email = res.data.user.email;
          const role = res.data.user.role;
          const profileInfo = res.data.user.profileInfo;
          const profileImg = res.data.user.profileImg;
          localStorage.setItem("token", res.data.token);
          if (profileInfo) {
            dispatch(setData(username, email, role));
            dispatch(setImg(profileImg));
            dispatch(setProfileData(profileInfo.personalInfo));
            dispatch(setCatData(profileInfo.categories));
            history.push("/userhome/dashboard");
          } else {
            axios
              .get(BASE_URL + "/auth/isEmailVerified", {
                headers: { Authorization: res.data.token },
              })
              .then((response) => {
                if (response.data === "User not found") {
                  console.log("User not found");
                }
                if (response.data.ok) {
                  console.log(res.data);
                  dispatch(setData(username, email, role));
                  dispatch(setImg(profileImg));
                  history.push("/profileinfo");
                } else {
                  dispatch(setData(username, email, role));
                  history.push("/emailV");
                }
              });
          }
          if (res.data === "User not found") {
            signOut();
            setfail("User not found");
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const failureGoogle = (res) => {
    console.log(res);
  };

  return (
    <div>
      <div className="login-layout">
        <div className="login-layout-l">
          <main className="form-signin">
            <form style={{ lineHeight: "5rem" }} onSubmit={submitHandler}>
              <h1 className="createAcc">Login</h1>
              <p style={{ color: "red", marginBottom: "0" }}>{fail}</p>
              <label htmlFor="inputEmail" className="visually-hidden">
                Email address
              </label>
              <div class="input-group mb-3  loginInput">
                <span class="input-group-text" id="basic-addon1">
                  <img src={imgmail} className="userImg" alt="logo"></img>
                </span>
                <input
                  required
                  value={userData.email}
                  id="email"
                  onChange={handleChange}
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
                  value={userData.password}
                  onChange={handleChange}
                  id="password"
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
          <hr></hr>
          <p>OR</p>
          <hr></hr>
          <div id="google">
            <GoogleLogin
              className="aaa"
              clientId={CLIENT_ID}
              buttonText="Log in with Google"
              onSuccess={responseGoogle}
              onFailure={failureGoogle}
              redirectUri={BASE_URL + "/profileinfo"}
              cookiePolicy={"single_host_origin"}
            />
          </div>
        </div>
        <div id="login-layout-r">
          <div id="login-layout-r-content">
            <h1 style={{ fontWeight: "bold" }}>Welcome back!!</h1>
            <img src={imglogin} className="loginImg" alt="logo"></img>
            <p style={{ marginTop: "3rem" }}>
              Enter your personal details and start your journey with us
            </p>
            <a href="/signup">
              <Link to="/signup" class="link">
                <button id="loginB">Sign Up</button>
              </Link>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
