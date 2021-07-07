import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Home from "./components/Home/Home";
import EmailV from "./components/Verification/EmailV";
import MobileV from "./components/Verification/MobileV";
import ProfileInfo from "./components/ProfileInfo/ProfileInfo";

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
      </Switch>
    </Router>
  );
}

export default App;
