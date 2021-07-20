import React from "react";
import { Link } from "react-router-dom";
import imgsrc from "./Mobile.png";
import "./Head.css";
// import Vector from "./Vector";
const Head = () => {
  return (
    <div>
      <div className="head">
        <div className="headContent">
          <div className="nav">
            <div>
              <h4 style={{ wordSpacing: "1rem" }}>Linkonnekt</h4>
            </div>

            <div className="grid-item">
              <Link to="/login" class="link">
                <p id="login">Login</p>
              </Link>
            </div>

            <div className="grid-item">
              <Link to="/signup" class="link">
                <button id="signup">SignUp</button>
              </Link>
            </div>
          </div>
          <div className="head-mid">
            <div className="moto">
              <p>Connect , Collaborate , Create</p>
              <button id="signup2">SignUp</button>
            </div>
            <div className="graphic">
              <img src={imgsrc} className="mobileImg" alt="logo"></img>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="vector-header">
        <Vector/>
      </div> */}
    </div>
  );
};

export default Head;
