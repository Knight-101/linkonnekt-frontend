import React, { useState, useEffect, useRef } from "react";
import imgsrc from "./Mobile.png";
import "./Head.css";

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
              <p id="login">Login</p>
            </div>
            <div className="grid-item">
              <button id="signup">SignUp</button>
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
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#457B9D"
            fill-opacity="1"
            d="M0,128L21.8,138.7C43.6,149,87,171,131,154.7C174.5,139,218,85,262,90.7C305.5,96,349,160,393,197.3C436.4,235,480,245,524,224C567.3,203,611,149,655,149.3C698.2,149,742,203,785,208C829.1,213,873,171,916,144C960,117,1004,107,1047,117.3C1090.9,128,1135,160,1178,170.7C1221.8,181,1265,171,1309,144C1352.7,117,1396,75,1418,53.3L1440,32L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Head;
