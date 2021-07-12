import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Home from "./components/Home/Home";
import EmailV from "./components/Verification/EmailV";
import MobileV from "./components/Verification/MobileV";
import ProfileInfo from "./components/ProfileInfo/ProfileInfo";
import UserHome from "./components/UserHome/UserHome";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        {/* <AuthRoute path="/main/checkout" exact component={CheckOut} /> */}

        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/emailV">
          <EmailV />
        </Route>
        <Route path="/mobileV">
          <MobileV />
        </Route>
        <Route path="/profileinfo">
          <ProfileInfo />
        </Route>
        <Route
          path="/userhome/dashboard"
          component={() => <UserHome item="Dashboard" />}
        />
        <Route
          path="/userhome/search"
          component={() => <UserHome item="Search" />}
        />
        <Route
          path="/userhome/allprojects"
          component={() => <UserHome item="AllProjects" />}
        />
        <Route
          path="/userhome/wallet"
          component={() => <UserHome item="Wallet" />}
        />
        <Route
          path="/userhome/logout"
          component={() => <UserHome item="LogOut" />}
        />
      </Switch>
    </Router>
  );
}

export default App;
