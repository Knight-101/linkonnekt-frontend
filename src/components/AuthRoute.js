import axios from "axios";
import React, { useState } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../Redux/logoutAction";
import { useGoogleLogout } from "react-google-login";

const AuthRoute = ({ component: Component, ...rest }) => {
  const dispatch = useDispatch();
  const BASE_URL = "http://localhost:8000";
  const [auth, setauth] = useState(true);
  const history = useHistory();
  const clientId =
    "378065475011-nt3el8svf2r3d0h9sabche7sgcq4o83i.apps.googleusercontent.com";
  const { signOut } = useGoogleLogout({
    clientId,
  });
  axios
    .get(BASE_URL + "/auth/isAuth", {
      headers: { Authorization: localStorage.getItem("token") },
    })
    .then((res) => {
      if (
        res.data.message === "jwt expired" ||
        res.data.message === "jwt malformed"
      ) {
        setauth(false);
        localStorage.clear();
        dispatch(logout());
        signOut();
        history.push("/");
      }
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <Route
      {...rest}
      render={(props) =>
        auth ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default AuthRoute;
