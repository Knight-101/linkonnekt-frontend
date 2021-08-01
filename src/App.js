import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Home from "./components/Home/Home";
import EmailV from "./components/Verification/EmailV";
import MobileV from "./components/Verification/MobileV";
import ProfileInfo from "./components/ProfileInfo/ProfileInfo";
import UserHome from "./components/UserHome/UserHome";
import AuthRoute from "./components/AuthRoute";
import Profile from "./components/Profile/Profile";
import "./App.css";
import UserProfile from "./components/UserProfile/UserProfile";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <AuthRoute path="/emailV" exact component={EmailV} />
        <AuthRoute path="/mobileV" exact component={MobileV} />
        <AuthRoute path="/profileinfo" exact component={ProfileInfo} />
        <AuthRoute path="/profile/:username" component={Profile} />
        <AuthRoute path="/userprofile" component={UserProfile} />
        <AuthRoute
          path="/userhome/dashboard"
          component={() => <UserHome item="Dashboard" />}
        />
        <AuthRoute
          path="/userhome/search"
          component={() => <UserHome item="Search" />}
        />
        <AuthRoute
          path="/userhome/allprojects"
          component={() => <UserHome item="AllProjects" />}
        />
        <AuthRoute
          path="/userhome/wallet"
          component={() => <UserHome item="Wallet" />}
        />
        <AuthRoute
          path="/userhome/logout"
          component={() => <UserHome item="LogOut" />}
        />
      </Switch>
    </Router>
  );
}

export default App;
