import React, { useState, useEffect, useRef } from "react";
import imgsrc3 from "./about3.png";
import imgsrc2 from "./about2.png";
import imgsrc1 from "./about1.png";
import imgcat1 from "./CategoryImages/Cat1.png";
import imgcat2 from "./CategoryImages/Cat2.png";
import imgcat3 from "./CategoryImages/Cat3.png";
import imgcat4 from "./CategoryImages/Cat4.png";
import imgcat5 from "./CategoryImages/Cat5.png";
import imgcat6 from "./CategoryImages/Cat6.png";
import imgcat7 from "./CategoryImages/Cat7.png";
import imgcat8 from "./CategoryImages/Cat8.png";
import "./Middle.css";

const Middle = () => {
  return (
    <div>
      <div className="mid">
        <div className="about">
          <div className="working">
            <h3>How it works</h3>
            <hr></hr>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </div>
          </div>

          <div className="aboutimg">
            <img src={imgsrc1} className="about1img" alt="logo"></img>
          </div>
          <div className="aboutimg">
            <div>
              <img src={imgsrc2} className="about2img" alt="logo"></img>
            </div>
            <div>
              <img src={imgsrc3} className="about3img" alt="logo"></img>
            </div>
          </div>
        </div>
        <div className="category">
          <h2>Get Connected with Talented People in over 40 categories.</h2>
          <div className="categories">
            <div>
              <img src={imgcat1} className="catImg" alt="logo"></img>
            </div>
            <div>
              <img src={imgcat2} className="catImg" alt="logo"></img>
            </div>
            <div>
              <img src={imgcat3} className="catImg" alt="logo"></img>
            </div>
            <div>
              <img src={imgcat4} className="catImg" alt="logo"></img>
            </div>
            <div>
              <img src={imgcat5} className="catImg" alt="logo"></img>
            </div>
            <div>
              <img src={imgcat6} className="catImg" alt="logo"></img>
            </div>
            <div>
              <img src={imgcat7} className="catImg" alt="logo"></img>
            </div>
            <div>
              <img src={imgcat8} className="catImg" alt="logo"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middle;
