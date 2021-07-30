import React from "react";
import imgsrc3 from "./Assets/amico.png";
import imgsrc2 from "./Assets/bro.png";
import imgsrc1 from "./Assets/cuate.png";
import "./Middle.css";
import Faq from "./Faq";
import Users from "./Users";
const Middle = () => {
  return (
    <div>
      <div className="space"></div>
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
          <div className="aboutimg boxstyle">
            <img src={imgsrc1} className="about1img" alt="logo"></img>
            <h3> Discover Interesting People </h3>
          </div>
          <div className="aboutimg aboutParent" style={{width: '300px', height: '900px'}} >
            <div className="aboutChild boxstyle">
              <img src={imgsrc3}  className="about3img" alt="logo"></img>
              <h3> Collaborate </h3>
            </div>
            <div className="aboutChild boxstyle">
              <img src={imgsrc2} className="about2img" alt="logo"></img>
              <h3> Increase Yoru Reach </h3>
            </div>
          </div>
        </div>
        <Users></Users>
        <Faq></Faq>
      </div>
    </div>
  );
};

export default Middle;
